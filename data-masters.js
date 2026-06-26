// 投资大师匹配数据层 - 把玩家的 risk/mind 坐标映射到最像的投资大师
// risk: 稳健(−) ↔ 激进(+)   mind: 理性(−) ↔ 感性(+)
// 坐标范围 −10~+10，匹配时与玩家坐标统一归一化到 −1~+1
// 素材来源：全球投资大师图谱（5 流派 16 人）
// 作者 小龙虾

const MASTERS = {
  // 流派主题色（卡片配色跟随）
  schools: {
    value:     { name:'价值投资派', color:'#2c5282' },
    growth:    { name:'成长投资派', color:'#3c6b4f' },
    macro:     { name:'宏观交易派', color:'#b8860b' },
    quant:     { name:'量化投资派', color:'#5a4b8a' },
    activist:  { name:'激进/事件驱动派', color:'#b04a3a' },
    wildcard:  { name:'异类玩家', color:'#a0522d' },
  },
  // 大师坐标 + 标签 + 与玩家"对话感"的点评
  // p6: 5 维画像 [risk,data,horizon,focus,decisive] 各 0~100，用于雷达图虚线 + 6 维匹配
  list: [
    { id:'buffett', name:'沃伦·巴菲特', en:'Warren Buffett', emoji:'🎩', school:'value',
      p6:{risk:15,data:85,horizon:100,focus:95,decisive:40}, tags:'护城河 · 长期主义',
      blurb:'价值投资之王。你和他都信奉"看得懂才下手"，靠耐心和复利取胜，把好生意攥在手里几十年不撒手——时间，是你们共同的朋友。' },
    { id:'wood', name:'凯茜·伍德(木头姐)', en:'Cathie Wood', emoji:'🚀', school:'growth',
      p6:{risk:100,data:70,horizon:70,focus:65,decisive:95}, tags:'颠覆创新 · 押注未来',
      blurb:'创新投资的旗手。你和她都为"改变世界的未来"全情下注，相信伟大的技术和愿景，敢在别人看不清时冲在最前面——大起大落，从不后悔燃烧。' },
    { id:'simons', name:'吉姆·西蒙斯', en:'Jim Simons', emoji:'📐', school:'quant',
      p6:{risk:65,data:100,horizon:10,focus:15,decisive:100}, tags:'数学驱动 · 量化之王',
      blurb:'量化投资之神。你和他一样对"故事和情怀"完全免疫，只信数据和模型说话——在市场噪音里捞出确定的金子，让数学替你做决定。' },
    { id:'soros', name:'乔治·索罗斯', en:'George Soros', emoji:'⚡', school:'macro',
      p6:{risk:80,data:66,horizon:20,focus:88,decisive:89}, tags:'反身性 · 金融大鳄',
      blurb:'狙击英镑的金融大鳄。你和他一样嗅觉敏锐、心狠手快，敢在所有人恐慌时反向重拳出击，看准了就倾尽全力——这世界的裂缝，就是你的猎场。' },
    { id:'trumpish', name:'豪赌狂人', en:'The Big Bettor', emoji:'🃏', school:'wildcard',
      p6:{risk:94,data:35,horizon:34,focus:92,decisive:85}, tags:'极致自信 · 我赌我赢',
      blurb:'天生的赌场之王。你信自己的直觉胜过一切数据，越多人唱反调你越来劲，看准了就梭哈全部身家——赢了封神，输了？输了也要昂着头说"这是史上最好的交易"。' },
    { id:'muskish', name:'钢铁狂想家', en:'The Moonshot Maniac', emoji:'🛸', school:'wildcard',
      p6:{risk:88,data:35,horizon:99,focus:88,decisive:91}, tags:'星辰大海 · 押注疯狂',
      blurb:'活在未来的偏执狂。别人算 ROI，你算"这能不能改变人类文明"。火星、AI、脑机接口——你押的从来不是公司，是科幻照进现实。要么名垂青史，要么血本无归，中间地带不存在。' },
  ],
};

// 5 维匹配：玩家 5 维画像 p6{risk,data,horizon,focus,decisive}（0~100）
// 与每位大师的 p6 算欧氏距离，最近的即最像
MASTERS.DIM6 = ['risk','data','horizon','focus','decisive'];
MASTERS.match = function(p6){
  const keys = MASTERS.DIM6;
  const ranked = MASTERS.list.map(m=>{
    let s=0;
    for(const k of keys){ const d=(p6[k]||50)-(m.p6?m.p6[k]:50); s+=d*d; }
    return { m, d: Math.sqrt(s) };
  }).sort((a,b)=> a.d - b.d);
  // 相似度:最大距离 sqrt(5*100^2)=223.6,映射为 0~100% 百分比
  const MAXD=Math.sqrt(5*100*100);
  const pct=Math.round((1-ranked[0].d/MAXD)*100);
  return {
    best: ranked[0].m,
    bestPct: Math.max(0,Math.min(100,pct)),
    others: ranked.slice(1, 3).map(x=>x.m),   // 次相似 2 位
    school: MASTERS.schools[ranked[0].m.school],
  };
};
