// 五维投资人格画像数据层（与 6 大师一一对应，同源）
// 玩家五维(0-100) → 欧氏距离最近的人格原型 = 你的人格，必然对应同名大师
// 五维：risk 稳健↔激进 / data 直觉↔理性 / horizon 短线↔长期 / focus 分散↔集中 / decisive 观望↔果断
// 人格 anchor 直接采用对应大师的五维坐标；配色对齐大师流派色（两 wildcard 错开）
// 作者 小龙虾

const PERSONA5 = {
  DIM: ['risk','data','horizon','focus','decisive'],
  // 6 大人格原型 ←→ 6 大师 一一对应
  archetypes: [
    { key:'value_keeper', emoji:'🏛️', title:'价值守望者', color:'#2c5282', master:'buffett',
      anchor:{risk:15,data:85,horizon:100,focus:95,decisive:40},
      tag:'看得懂才下手 · 时间的朋友',
      desc:'你只投看得懂、算得清的确定性，认准了就攥住几十年不撒手。不追风口、不赌运气，靠耐心和复利穿越周期——慢，是你最快的路。' },
    { key:'quant_mind', emoji:'📐', title:'理性量化客', color:'#5a4b8a', master:'simons',
      anchor:{risk:65,data:100,horizon:10,focus:15,decisive:100},
      tag:'只信数据 · 拒绝故事',
      desc:'你对故事和情怀完全免疫，只信数字和模型。在市场噪音里捞出确定的金子，让数学替你做决定——你赢在概率，而不是直觉。' },
    { key:'trend_hunter', emoji:'⚡', title:'趋势猎手', color:'#b8860b', master:'soros',
      anchor:{risk:80,data:66,horizon:20,focus:88,decisive:89},
      tag:'嗅觉敏锐 · 心狠手快',
      desc:'你嗅觉敏锐、出手凶狠，敢在所有人恐慌时反向重拳出击。看准了就倾尽全力，市场的裂缝就是你的猎场——快、准、狠，是你的信条。' },
    { key:'visionary', emoji:'🚀', title:'远见布道者', color:'#3c6b4f', master:'wood',
      anchor:{risk:100,data:70,horizon:70,focus:65,decisive:95},
      tag:'押注未来 · 全情下注',
      desc:'你为"改变世界的未来"全情下注，相信伟大的技术和愿景，敢在别人看不清时冲在最前面。大起大落，但你从不后悔燃烧过。' },
    { key:'all_in_gambler', emoji:'🃏', title:'孤注豪赌客', color:'#b04a3a', master:'trumpish',
      anchor:{risk:94,data:35,horizon:34,focus:92,decisive:85},
      tag:'极致自信 · 我赌我赢',
      desc:'你信自己的直觉胜过一切数据，越多人唱反调你越来劲，看准了就梭哈全部身家——赢了封神，输了也昂着头说"这是史上最好的交易"。' },
    { key:'moonshot', emoji:'🛸', title:'狂想押注者', color:'#a0522d', master:'muskish',
      anchor:{risk:88,data:35,horizon:99,focus:88,decisive:91},
      tag:'星辰大海 · 押注疯狂',
      desc:'别人算 ROI，你算"这能不能改变人类文明"。你押的从来不是公司，是科幻照进现实——要么名垂青史，要么血本无归，中间地带不存在。' },
  ],

  match(ps){
    let best=null, bd=1e9;
    for(const a of this.archetypes){
      let s=0;
      for(const k of this.DIM){ const d=(ps[k]||50)-a.anchor[k]; s+=d*d; }
      const dist=Math.sqrt(s);
      if(dist<bd){ bd=dist; best=a; }
    }
    return best;
  },

  // 动态副标题：取偏离中点最远的前 3 维，拼成"激进·理性·长期"
  subFromDims(ps, dimsMeta){
    const arr = this.DIM.map(k=>{
      const v=ps[k]!=null?ps[k]:50;
      const meta=dimsMeta.find(d=>d.key===k);
      const word = v>=50 ? (meta?meta.high:k) : (meta?meta.low:k);
      return { k, dev:Math.abs(v-50), word };
    }).sort((a,b)=>b.dev-a.dev);
    const picked = arr.filter(x=>x.dev>=8).slice(0,3).map(x=>x.word);
    return picked.length? picked.join(' · ') : '攻守兼备 · 不走极端';
  },

  // 桥接句：玩家和匹配大师在哪 1-2 维最契合
  bridge(ps, masterP6, masterName, dimsMeta){
    const cand = this.DIM.map(k=>{
      const pv=ps[k]!=null?ps[k]:50;
      const mv=masterP6[k]!=null?masterP6[k]:50;
      return { k, diff:Math.abs(pv-mv), dev:Math.abs(pv-50), pv };
    }).filter(x=>x.dev>=15).sort((a,b)=>a.diff-b.diff).filter(x=>x.diff<=22);
    if(!cand.length) return '';
    const words = cand.slice(0,2).map(x=>{
      const meta=dimsMeta.find(d=>d.key===x.k);
      return x.pv>=50 ? (meta?meta.high:x.k) : (meta?meta.low:x.k);
    });
    const mn = masterName.replace(/\(.*\)/,'');
    return `在「${words.join('、')}」上，你和${mn}几乎重合——`;
  },
};

if (typeof window !== 'undefined') window.PERSONA5 = PERSONA5;
