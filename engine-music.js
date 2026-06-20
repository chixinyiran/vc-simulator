// Web Audio 程序化背景音乐引擎（无外部文件，纯合成，可关闭）
// 每个时代一段循环旋律，风格贴合年代情绪。默认关，手动开。
// 作者 小龙虾

const Music = (function(){
  let ctx=null, master=null, on=false, curTimer=null, curPeriod=-1, nextNoteTime=0, schedAhead=CONFIG.music.schedAheadSec, lookahead=null;
  let melody=[], step=0, tempo=100;

  // 音符名→频率
  const A4=440;
  const NOTE={C:-9,'C#':-8,D:-7,'D#':-6,E:-5,F:-4,'F#':-3,G:-2,'G#':-1,A:0,'A#':1,B:2};
  function freq(name,oct){ const semi=NOTE[name]+(oct-4)*12; return A4*Math.pow(2,semi/12); }

  // 旋律谱表从 data-music.js 读取（DATA_MUSIC 全局变量）

  function ensureCtx(){
    if(!ctx){
      const AC=window.AudioContext||window.webkitAudioContext;
      ctx=new AC();
      master=ctx.createGain(); master.gain.value=CONFIG.music.masterVolume; master.connect(ctx.destination);
    }
    if(ctx.state==='suspended') ctx.resume();
  }

  function playNote(f,start,dur,wave,vol){
    if(f<=0) return; // 休止
    const osc=ctx.createOscillator(), g=ctx.createGain();
    osc.type=wave; osc.frequency.value=f;
    osc.connect(g); g.connect(master);
    const a=0.02, r=Math.min(0.12,dur*0.3);
    g.gain.setValueAtTime(0,start);
    g.gain.linearRampToValueAtTime(vol,start+a);
    g.gain.setValueAtTime(vol,start+dur-r);
    g.gain.linearRampToValueAtTime(0,start+dur);
    osc.start(start); osc.stop(start+dur+0.02);
  }

  // 调度器：按拍子循环排程主旋律+低音
  let melTheme=null, melNotes=[], melBass=[], melStep=0, bassStep=0, secPerBeat=0.5, melTime=0, bassTime=0;
  function buildTheme(pid){
    melTheme=DATA_MUSIC[pid]||DATA_MUSIC.P1;
    secPerBeat=60/melTheme.tempo;
    melNotes=melTheme.notes; melBass=melTheme.bass||[];
    melStep=0; bassStep=0;
    melTime=ctx.currentTime+0.1; bassTime=ctx.currentTime+0.1;
  }
  function scheduler(){
    if(!on||!melTheme) return;
    const ahead=ctx.currentTime+schedAhead;
    // 主旋律
    while(melTime<ahead){
      const [nm,oct,beats]=melNotes[melStep];
      const dur=beats*secPerBeat;
      playNote(nm==='R'?0:freq(nm,oct), melTime, dur, melTheme.wave, melTheme.vol);
      melTime+=dur; melStep=(melStep+1)%melNotes.length;
    }
    // 低音
    while(bassTime<ahead && melBass.length){
      const [nm,oct,beats]=melBass[bassStep];
      const dur=beats*secPerBeat;
      playNote(nm==='R'?0:freq(nm,oct), bassTime, dur, melTheme.bassWave||'sine', melTheme.vol*0.7);
      bassTime+=dur; bassStep=(bassStep+1)%melBass.length;
    }
  }

  return {
    isOn:()=>on,
    // 切换到某时期的音乐(period索引0-5 → P1..P6)
    setPeriod(idx){
      curPeriod=idx;
      if(on){ ensureCtx(); buildTheme('P'+(idx+1)); }
    },
    toggle(periodIdx){
      ensureCtx();
      on=!on;
      if(on){
        if(periodIdx>=0) buildTheme('P'+(periodIdx+1)); else buildTheme('P1');
        if(!lookahead) lookahead=setInterval(scheduler,CONFIG.music.lookaheadMs);
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.linearRampToValueAtTime(CONFIG.music.masterVolume,ctx.currentTime+CONFIG.music.fadeInMs/1000);
      } else {
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.linearRampToValueAtTime(0,ctx.currentTime+CONFIG.music.fadeOutMs/1000);
        setTimeout(()=>{ if(!on && lookahead){clearInterval(lookahead);lookahead=null;melTheme=null;} },300);
      }
      return on;
    },
    stop(){
      on=false;
      if(lookahead){clearInterval(lookahead);lookahead=null;}
      if(master){master.gain.value=0;}
      melTheme=null;
    }
  };
})();
