// ===== 时代剧情数据 + 职位阶梯 =====
// 改剧情/项目/年份/职位 改这里。每个时代6组,每个时代下含剧情+3个项目
// 作者 小龙虾

const DATA_PERIODS = {
  titles: [
    { min: 0,   name: "投资分析师" },
    { min: 30,  name: "投资经理" },
    { min: 65,  name: "投资副总裁" },
    { min: 110, name: "投资董事" },
    { min: 165, name: "合伙人" },
    { min: 230, name: "管理合伙人" },
    { min: 320, name: "首席合伙人" },
    { min: 430, name: "传奇投资人" },
  ],

  // 五档结果对应的属性倍率(在项目weight基础上乘) + 文案标签
  periods: [
    {
      id:"P1", roman:"Ⅰ", name:"门户与泡沫", span:"2000 — 2002", theme:{ bg:'#ece4d6', paper:'#f3ece0', ink:'#3a2f24', soft:'#6b5d4a', faint:'#9c8d77', line:'#d8ccb8', accent:'#8a5a3a' },
      intro:"千禧年，纳斯达克站上5000点，全世界疯狂相信.com能改变一切。你从大学计算机系毕业，进入一家叫联创的机构当分析师。没人知道，三个月后，泡沫将以最惨烈的方式破裂。这是你投资生涯的第一个时代——也是第一堂残酷的课。",
      verdict:"【时代落幕 · 门户与泡沫】互联网泡沫破裂、寒冬、入世——这个时代奖励两种人：在崩盘前清醒离场的，和在废墟里逆势播种的。盲目追高门户与夕阳通信的人，被时代无情碾过。让我们看看，你的第一批押注，命运如何——",
      rounds:[
        { year:2000, era:"互联网泡沫顶点", firm:"联创投资",
          story:"2000年初，纳斯达克疯狂，中关村咖啡馆挤满了拿BP的年轻人，张口就是「眼球经济」「烧钱换流量」。所有人都觉得自己站在历史的风口。可泡沫已经吹到了极限。",
          deals:[
            { tag:"门户网站", name:"中华门户", desc:"对标三大门户，靠广告+会员收费", round:"B轮", val:"4亿", amt:10, minAUM:0, trend:"hot", base:0.30, w:{aum:30,track:18,net:8}, why:"泡沫顶点的门户，估值已严重透支" },
            { tag:"通信", name:"鸿信寻呼", desc:"全国寻呼网络+增值短信", round:"A轮", val:"1.5亿", amt:8, minAUM:0, trend:"down", base:0.12, w:{aum:24,track:14,net:6}, why:"手机正取代BP机，赛道夕阳" },
            { tag:"电商雏形", name:"网上集市", desc:"C2C网上交易平台，对标eBay", round:"天使", val:"3000万", amt:6, minAUM:0, trend:"up", base:0.62, w:{aum:40,track:22,net:10}, why:"网购习惯未成形，但方向是未来" },
          ]},
        { year:2001, era:"寒冬与入世", firm:"联创投资",
          story:"互联网寒冬最冷的时刻，无数.com公司倒闭。但年底中国正式加入WTO，一扇通往世界的大门轰然打开。哀鸿遍野中，真正的高手开始冷静捡拾被错杀的好资产。",
          deals:[
            { tag:"游戏", name:"盛景网游", desc:"代理韩国网游，点卡收费", round:"A轮", val:"6000万", amt:8, minAUM:0, trend:"up", base:0.68, w:{aum:50,track:24,net:12}, why:"网游是寒冬里现金流最猛的生意" },
            { tag:"外贸B2B", name:"环球商通", desc:"中小企业外贸信息平台，会员费", round:"B轮", val:"2亿", amt:10, minAUM:0, trend:"up", base:0.55, w:{aum:32,track:16,net:8}, why:"吃入世红利，稳但慢" },
            { tag:"IT硬件", name:"方正存储", desc:"国产存储设备制造，替代进口", round:"A轮", val:"1.2亿", amt:9, minAUM:0, trend:"down", base:0.25, w:{aum:26,track:12,net:6}, why:"重资产低毛利，硬碰国际巨头" },
          ]},
        { year:2002, era:"搜索与门户复苏", firm:"联创投资",
          story:"活下来的公司开始显露生机。门户靠短信和游戏扭亏，一种叫「搜索引擎」的东西悄悄改变着信息获取方式。盛大靠一款游戏问鼎首富，丁磊靠短信翻身。废墟之上，新秩序正在重建。",
          deals:[
            { tag:"搜索引擎", name:"灵犀搜索", desc:"中文搜索引擎，竞价排名模式", round:"A轮", val:"1亿", amt:10, minAUM:0, trend:"up", base:0.72, w:{aum:60,track:30,net:14}, why:"搜索是流量的源头，最强入口" },
            { tag:"游戏", name:"传奇互娱", desc:"代理+自研网游，点卡道具收费", round:"B轮", val:"5亿", amt:12, minAUM:0, trend:"up", base:0.60, w:{aum:48,track:24,net:10}, why:"现象级游戏现金流爆棚，但依赖单款" },
            { tag:"短信增值", name:"飞讯短信", desc:"门户短信增值服务，彩信彩铃", round:"A轮", val:"8000万", amt:8, minAUM:0, trend:"hot", base:0.32, w:{aum:24,track:14,net:6}, why:"命门攥在运营商手里，政策一变就死" },
          ]},
      ]
    },
    {
      id:"P2", roman:"Ⅱ", name:"Web2.0觉醒", span:"2003 — 2007", theme:{ bg:'#e8e8d8', paper:'#f1f0e2', ink:'#33402f', soft:'#5a6450', faint:'#8a917c', line:'#d2d4be', accent:'#5a7d4a' },
      intro:"非典改变了一代人的消费习惯，电商觉醒。博客、SNS、视频网站全面爆发，「Web2.0」成为最时髦的词。美元基金大举进入，VC行业开始扩张。年底，乔布斯发布了初代iPhone——一个全新的时代正在敲门，而绝大多数人浑然不觉。",
      verdict:"【时代落幕 · Web2.0觉醒】这个时代奖励看懂「人的连接」和「流量入口」的人，惩罚在A股6000点顶峰追高、和在烧钱赛道里没算清子弹的人。你播下的种子，有的长成了参天大树，有的烂在了土里——",
      rounds:[
        { year:2003, era:"非典与电商觉醒", firm:"联创投资",
          story:"SARS席卷全国，城市被恐惧笼罩。但隔离反而催生了意外的赢家——网上购物。一家公司推出C2C平台，另一家做支付担保的雏形。你被提拔为投资经理，开始独立看项目。",
          deals:[
            { tag:"在线支付", name:"安付通", desc:"第三方担保支付，解决网购信任", round:"A轮", val:"8000万", amt:10, minAUM:0, trend:"up", base:0.70, w:{aum:70,track:34,net:18}, why:"抓住电商最关键的一环——信任，基础设施级" },
            { tag:"分类信息", name:"百姓墙", desc:"本地分类信息，房产招聘二手", round:"天使", val:"4000万", amt:7, minAUM:0, trend:"up", base:0.50, w:{aum:30,track:16,net:10}, why:"流量生意，慢而韧" },
            { tag:"旅游", name:"游天下", desc:"在线机票酒店预订，呼叫中心", round:"B轮", val:"3亿", amt:11, minAUM:0, trend:"up", base:0.58, w:{aum:44,track:18,net:10}, why:"非典后报复性出行，逆势抄底" },
          ]},
        { year:2005, era:"Web2.0元年", firm:"联创投资",
          story:"百度在纳斯达克上市，市值暴涨，全世界重新看到中国互联网的潜力。博客、RSS、SNS——「Web2.0」成为口头禅。机会多到让人眼花缭乱。",
          deals:[
            { tag:"社交网络", name:"校缘网", desc:"实名校园社交，向社会渗透", round:"A轮", val:"1.5亿", amt:11, minAUM:0, trend:"up", base:0.66, w:{aum:55,track:26,net:22}, why:"押中「人的连接」，社交是皇冠明珠" },
            { tag:"视频", name:"看看视频", desc:"UGC视频分享，对标YouTube", round:"A轮", val:"2亿", amt:13, minAUM:30, trend:"hot", base:0.34, w:{aum:50,track:22,net:12}, why:"带宽+版权双杀，烧钱无底洞" },
            { tag:"工具", name:"超级助手", desc:"免费安全软件，流量后续变现", round:"A轮", val:"1亿", amt:10, minAUM:0, trend:"up", base:0.64, w:{aum:60,track:28,net:14}, why:"免费打法是统治市场的核武器" },
          ]},
        { year:2006, era:"选秀与并购潮", firm:"联创投资",
          story:"《超级女声》引爆全民狂欢，短信投票创造惊人商业价值，粉丝经济雏形初现。Web2.0并购潮起，大公司开始用真金白银买下创业公司。在这个行业，看懂「人性」比看懂技术更值钱。",
          deals:[
            { tag:"自营电商", name:"万购商城", desc:"B2C自营电商，从3C数码切入", round:"B轮", val:"4亿", amt:13, minAUM:30, trend:"up", base:0.63, w:{aum:58,track:28,net:14}, why:"自营越重越深的护城河" },
            { tag:"社区", name:"校内空间", desc:"实名社交，从高校迅速蔓延", round:"B轮", val:"3亿", amt:12, minAUM:0, trend:"up", base:0.60, w:{aum:48,track:24,net:20}, why:"一代人的青春记忆，巨头必抢" },
            { tag:"娱乐营销", name:"星动传媒", desc:"选秀赛事+艺人经纪+投票分成", round:"A轮", val:"1.5亿", amt:9, minAUM:0, trend:"hot", base:0.40, w:{aum:30,track:14,net:14}, why:"爆款难复制，热度过气就凉" },
          ]},
        { year:2007, era:"iPhone诞生 & A股6000点", firm:"联创投资",
          story:"乔布斯发布初代iPhone，宣称「重新发明手机」，多数人当成昂贵玩具。这一年A股冲上6124点历史高位，全民炒股，泡沫弥漫。你升任投资副总裁。诱惑与陷阱，从未如此并存。",
          deals:[
            { tag:"移动应用", name:"指尖天气", desc:"手机端生活工具，押注智能机", round:"天使", val:"3000万", amt:7, minAUM:0, trend:"up", base:0.52, w:{aum:38,track:20,net:10}, why:"方向对，但早了三年" },
            { tag:"电商", name:"特卖会", desc:"品牌折扣闪购，限时特卖", round:"A轮", val:"1.5亿", amt:11, minAUM:0, trend:"up", base:0.62, w:{aum:50,track:22,net:12}, why:"精准击中消费心理" },
            { tag:"券商", name:"恒泰证券", desc:"借牛市扩张的券商Pre-IPO", round:"Pre-IPO", val:"50亿", amt:16, minAUM:60, trend:"hot", base:0.20, w:{aum:60,track:24,net:10}, why:"A股6000点顶峰追高，泡沫巨大" },
          ]},
      ]
    },
    {
      id:"P3", roman:"Ⅲ", name:"移动互联网", span:"2010 — 2013", theme:{ bg:'#dfe6e6', paper:'#eef2f0', ink:'#26383d', soft:'#4d6168', faint:'#86959a', line:'#c6d2d2', accent:'#3a7d8a' },
      intro:"金融海啸后，四万亿刺激带来流动性盛宴，创业板打开退出通道。iPhone 4横空出世，安卓崛起，3G铺开。小米成立，微信正在某个团队的电脑里成型。一场比PC互联网更大的浪潮正在聚集——能不能上船，决定未来十年的命运。",
      verdict:"【时代落幕 · 移动互联网】这是过去二十年最大的一波浪潮。看懂「用户在哪里钱就投哪里」的人赚得盆满钵满，固守PC旧思维、或在O2O补贴战里盲目烧钱的人，被彻底甩下车。你上船了吗——",
      rounds:[
        { year:2010, era:"移动互联网开闸", firm:"联创投资",
          story:"iPhone 4发布，安卓阵营崛起，智能手机开始井喷。所有人都隐约感到：一场新的浪潮正在地平线上聚集。",
          deals:[
            { tag:"智能硬件", name:"米兔科技", desc:"互联网手机模式，性价比+粉丝社群", round:"A轮", val:"2.6亿", amt:14, minAUM:30, trend:"up", base:0.66, w:{aum:90,track:38,net:28}, why:"押中「互联网+硬件」范式革命" },
            { tag:"移动社交", name:"语聊", desc:"移动端语音即时通讯", round:"天使", val:"4000万", amt:8, minAUM:0, trend:"hot", base:0.38, w:{aum:30,track:14,net:16}, why:"巨头腹地，独立App难活" },
            { tag:"O2O", name:"跑腿侠", desc:"本地生活上门服务平台", round:"A轮", val:"1.5亿", amt:11, minAUM:0, trend:"hot", base:0.30, w:{aum:36,track:16,net:10}, why:"补贴堆的用户不忠诚，模型不成立" },
          ]},
        { year:2011, era:"微博与千团大战", firm:"联创投资",
          story:"微博彻底改变信息传播，人人都是自媒体。千团大战白热化，五千家团购网站绞杀成血海。钱多人傻，估值疯涨。最热闹的地方，往往是最大的陷阱。",
          deals:[
            { tag:"知识社区", name:"求知社区", desc:"高质量问答社区，精英聚集", round:"A轮", val:"1.8亿", amt:12, minAUM:0, trend:"up", base:0.58, w:{aum:55,track:26,net:22}, why:"高质量内容的长期复利" },
            { tag:"团购", name:"惠拼团", desc:"团购平台，三四线下沉", round:"C轮", val:"15亿", amt:15, minAUM:60, trend:"hot", base:0.18, w:{aum:55,track:24,net:8}, why:"团购泡沫顶点接盘，红海双杀" },
            { tag:"企业服务", name:"云客CRM", desc:"中小企业SaaS，订阅制", round:"A轮", val:"8000万", amt:9, minAUM:0, trend:"up", base:0.48, w:{aum:30,track:18,net:14}, why:"中国SaaS春天来得晚，熬" },
          ]},
        { year:2012, era:"移动入口大战 & 双11爆发", firm:"联创投资",
          story:"微信用户破亿，移动船票无比金贵。巨头围绕「超级入口」血战。双11单日成交刷新纪录，电商彻底改变中国人的消费方式。",
          deals:[
            { tag:"移动电商", name:"掌上优选", desc:"移动端特卖电商，主打女性消费", round:"B轮", val:"6亿", amt:14, minAUM:30, trend:"up", base:0.62, w:{aum:65,track:28,net:18}, why:"消费向移动端迁徙的大趋势" },
            { tag:"手游", name:"指动游戏", desc:"移动休闲手游+IP改编", round:"A轮", val:"2亿", amt:11, minAUM:0, trend:"up", base:0.55, w:{aum:50,track:22,net:12}, why:"手游元年爆发力惊人，但生命周期短" },
            { tag:"移动工具", name:"清理大师", desc:"手机清理加速，海外流量变现", round:"A轮", val:"1.5亿", amt:10, minAUM:0, trend:"hot", base:0.36, w:{aum:30,track:14,net:10}, why:"工具留存差，易被系统功能吞掉" },
          ]},
        { year:2013, era:"互联网金融 & 打车大战", firm:"你的新基金 · 远望资本",
          story:"余额宝横空出世，「互联网金融」最火，P2P如雨后春笋。打车软件疯狂烧钱。这一年你做了人生最重要的决定——离开联创，自己出来募一支基金。从此，你为每个判断负全责。",
          deals:[
            { tag:"出行", name:"快行打车", desc:"移动打车平台，补贴大战正酣", round:"B轮", val:"5亿", amt:16, minAUM:40, trend:"up", base:0.60, w:{aum:90,track:38,net:32}, why:"万亿出行赛道，胜负看资本耐力" },
            { tag:"互金", name:"金多多理财", desc:"P2P网贷，年化收益诱人", round:"A轮", val:"3亿", amt:14, minAUM:0, trend:"hot", base:0.16, w:{aum:60,track:30,net:16}, why:"监管空白+资金池，暴雷隐患极大" },
            { tag:"文娱", name:"追番视频", desc:"正版视频+自制内容，会员订阅", round:"B轮", val:"8亿", amt:15, minAUM:30, trend:"up", base:0.50, w:{aum:45,track:18,net:14}, why:"内容规模即护城河，但长期亏损" },
          ]},
      ]
    },
    {
      id:"P4", roman:"Ⅳ", name:"风口狂奔", span:"2014 — 2018", theme:{ bg:'#ece2d4', paper:'#f4ebdc', ink:'#3d2f22', soft:'#6d563f', faint:'#a08866', line:'#dccdb6', accent:'#c46a2a' },
      intro:"双创号角吹响，全民创业。O2O、共享经济、知识付费、新零售……风口一个接一个，估值疯涨，钱多到烫手。这是最好的时代，也是最容易犯错的时代。当所有人都在狂奔，你能分清哪些是真机会，哪些是击鼓传花吗？",
      verdict:"【时代落幕 · 风口狂奔】这个时代最残酷——它用最性感的概念，诱惑你在最高点接盘。共享单车、O2O、ICO埋葬了无数机构，而冷静投向硬科技、下沉市场、社交裂变的人，穿越了泡沫。你的账本，是辉煌还是血泪——",
      rounds:[
        { year:2014, era:"双创浪潮", firm:"远望资本",
          story:"「大众创业万众创新」点燃全民热情，创业咖啡馆遍地开花。你募集了第一支人民币基金——远望资本，规模5个亿。手握真金白银，既兴奋又如履薄冰。",
          deals:[
            { tag:"O2O", name:"上门洗", desc:"上门洗车O2O，1元洗车获客", round:"A轮", val:"2亿", amt:13, minAUM:0, trend:"hot", base:0.15, w:{aum:50,track:24,net:8}, why:"纯补贴获客，无复购无壁垒" },
            { tag:"硬科技", name:"芯岭半导体", desc:"国产模拟芯片设计，替代进口", round:"天使", val:"1.5亿", amt:11, minAUM:0, trend:"up", base:0.58, w:{aum:70,track:32,net:18}, why:"逆人群投硬科技，需要定力" },
            { tag:"消费", name:"鲜达生鲜", desc:"生鲜电商+前置仓，30分钟达", round:"A轮", val:"3亿", amt:12, minAUM:0, trend:"hot", base:0.40, w:{aum:40,track:18,net:14}, why:"生鲜损耗高，最考验运营" },
          ]},
        { year:2015, era:"股灾与O2O寒冬", firm:"远望资本",
          story:"A股上演过山车，6月千股跌停，杠杆爆仓血流成河。一级市场泡沫破裂，O2O尸横遍野。创业者从「拿钱难」变成「活下去难」。",
          deals:[
            { tag:"短视频", name:"快拍短视频", desc:"短视频+直播，主打下沉市场", round:"A轮", val:"4亿", amt:15, minAUM:30, trend:"up", base:0.60, w:{aum:80,track:36,net:30}, why:"看不起的「土味」，藏着真实流量金矿" },
            { tag:"VR/AR", name:"幻视科技", desc:"VR头显+内容生态，押注元年", round:"A轮", val:"2.5亿", amt:13, minAUM:30, trend:"hot", base:0.28, w:{aum:50,track:22,net:10}, why:"风口来得太早，和不来一样致命" },
            { tag:"企业服务", name:"协作云", desc:"企业协作办公SaaS", round:"A轮", val:"1.8亿", amt:11, minAUM:0, trend:"up", base:0.52, w:{aum:55,track:26,net:16}, why:"慢生意，赌远程办公趋势" },
          ]},
        { year:2016, era:"知识付费与AI萌芽", firm:"远望资本",
          story:"内容创业、网红经济、知识付费同时引爆。年初AlphaGo战胜李世石，「人工智能」第一次走进大众视野。你的二期基金募到12亿，规模翻倍。钱多，最容易让人犯错。",
          deals:[
            { tag:"人工智能", name:"睿眸视觉", desc:"计算机视觉，安防+金融落地", round:"A轮", val:"5亿", amt:17, minAUM:60, trend:"up", base:0.60, w:{aum:85,track:36,net:30}, why:"押注AI第一波，「CV四小龙」" },
            { tag:"知识付费", name:"识君专栏", desc:"知识付费平台，头部讲师订阅", round:"B轮", val:"6亿", amt:15, minAUM:30, trend:"hot", base:0.42, w:{aum:45,track:18,net:18}, why:"热潮来得快去得也快" },
            { tag:"共享经济", name:"哈喽单车", desc:"共享单车，疯狂铺车抢点位", round:"C轮", val:"30亿", amt:18, minAUM:80, trend:"hot", base:0.14, w:{aum:70,track:30,net:12}, why:"重资产+无序竞争，资本豪赌的悲剧" },
          ]},
        { year:2017, era:"新零售与区块链躁动", firm:"远望资本",
          story:"新零售被巨头提出，共享充电宝、无人货架站上风口。比特币疯涨，ICO满天飞。这一年你的身体亮起红灯，第一次住进医院。投资是马拉松，可你跑得太急了。",
          deals:[
            { tag:"新零售", name:"鲜盒马超", desc:"线上线下一体化生鲜超市", round:"B轮", val:"50亿", amt:18, minAUM:80, trend:"up", base:0.58, w:{aum:75,track:26,net:22}, why:"「重」不一定坏，关键看效率" },
            { tag:"区块链", name:"链界科技", desc:"区块链底层平台+发币ICO", round:"天使", val:"3亿", amt:14, minAUM:0, trend:"down", base:0.12, w:{aum:55,track:34,net:14}, why:"政策高压，ICO游走法律边缘" },
            { tag:"教育", name:"伴读英语", desc:"在线少儿英语，外教1对1", round:"B轮", val:"20亿", amt:16, minAUM:60, trend:"hot", base:0.40, w:{aum:50,track:20,net:14}, why:"获客成本失控，政策风险悬顶" },
          ]},
        { year:2018, era:"贸易摩擦与募资寒冬", firm:"远望资本",
          story:"中美贸易摩擦升级，资管新规出台，「钱荒」席卷一级市场。P2P集中暴雷，无数家庭血本无归。这是创投史上最冷的冬天之一。活下去，成了最高目标。",
          deals:[
            { tag:"硬科技", name:"星瀚航天", desc:"民营商业火箭，航天先行者", round:"A轮", val:"8亿", amt:18, minAUM:80, trend:"up", base:0.55, w:{aum:80,track:36,net:25}, why:"难而正确，回报往往最丰厚" },
            { tag:"社交电商", name:"拼省省", desc:"社交裂变+下沉，低价拼团", round:"C轮", val:"100亿", amt:20, minAUM:100, trend:"up", base:0.58, w:{aum:90,track:32,net:28}, why:"社交裂变+下沉的恐怖威力" },
            { tag:"消费", name:"喜悦茶饮", desc:"新式茶饮连锁，排队现象级", round:"B轮", val:"30亿", amt:16, minAUM:60, trend:"up", base:0.50, w:{aum:55,track:22,net:18}, why:"网红易过气，扩张管理是挑战" },
          ]},
      ]
    },
    {
      id:"P5", roman:"Ⅴ", name:"硬科技与监管", span:"2019 — 2022", theme:{ bg:'#dde0e4', paper:'#ebedf0', ink:'#28303a', soft:'#4e5660', faint:'#878f99', line:'#c6cbd2', accent:'#3a5a7d' },
      intro:"科创板开市，给硬科技打开退出通道。5G商用，国产替代成时代主题。紧接着，疫情、反垄断、教育双减、美元退潮接踵而至——监管的铁拳和黑天鹅，让「政策风险」四个字刻进每个投资人的骨髓。这个时代，活下来比赚钱更重要。",
      verdict:"【时代落幕 · 硬科技与监管】「国运所向」和「政策红线」是这个时代的两个关键词。押注半导体、新能源、创新药的人乘上国家级东风，重仓教培、直播、踩中监管红线的人一夜归零。你站对队了吗——",
      rounds:[
        { year:2019, era:"科创板与5G", firm:"远望资本",
          story:"科创板鸣锣开市，硬科技有了全新退出通道。5G商用，中美博弈让「卡脖子」技术成为焦点。调养后你的健康稍有恢复，但你已懂得——身体才是长跑的本钱。",
          deals:[
            { tag:"半导体", name:"擎天芯", desc:"GPU/AI芯片设计，对标国际巨头", round:"B轮", val:"40亿", amt:20, minAUM:100, trend:"up", base:0.62, w:{aum:100,track:40,net:30}, why:"国产芯片成国之重器" },
            { tag:"生物医药", name:"康源生物", desc:"创新药研发，肿瘤免疫疗法", round:"B轮", val:"25亿", amt:18, minAUM:80, trend:"up", base:0.52, w:{aum:75,track:30,net:22}, why:"创新药九死一生，赌对值回所有" },
            { tag:"消费", name:"国风彩妆", desc:"国货彩妆，性价比+国潮设计", round:"A轮", val:"10亿", amt:14, minAUM:30, trend:"hot", base:0.42, w:{aum:45,track:16,net:14}, why:"重营销轻研发，护城河浅" },
          ]},
        { year:2020, era:"疫情与线上爆发", firm:"远望资本",
          story:"新冠疫情席卷全球，世界被按下暂停键。但线上办公、在线教育、生鲜电商、直播带货迎来史诗级爆发。流动性宽松，估值再创新高。危与机以前所未有的方式交织。",
          deals:[
            { tag:"生物医药", name:"瑞康疫苗", desc:"mRNA疫苗+创新药平台", round:"B轮", val:"50亿", amt:20, minAUM:100, trend:"up", base:0.60, w:{aum:90,track:34,net:26}, why:"在最需要的时候投到最需要的东西" },
            { tag:"在线办公", name:"云会", desc:"企业视频会议+协作平台", round:"C轮", val:"80亿", amt:20, minAUM:100, trend:"up", base:0.56, w:{aum:70,track:28,net:24}, why:"远程办公成新常态" },
            { tag:"直播电商", name:"好货直播", desc:"直播电商MCN+供应链", round:"B轮", val:"60亿", amt:18, minAUM:80, trend:"hot", base:0.30, w:{aum:60,track:26,net:14}, why:"过度依赖头部主播，监管趋严" },
          ]},
        { year:2021, era:"反垄断与教育双减", firm:"远望资本",
          story:"监管铁拳落下：互联网反垄断、教育双减、游戏版号收紧。一夜之间，最性感的赛道变成禁区，无数机构的重仓灰飞烟灭。「政策风险」第一次让所有人刻骨铭心。",
          deals:[
            { tag:"在线教育", name:"优学堂", desc:"K12在线大班课，估值数百亿", round:"D轮", val:"300亿", amt:22, minAUM:120, trend:"down", base:0.08, w:{aum:80,track:36,net:14}, why:"「双减」传闻四起，政策风险极高" },
            { tag:"新能源", name:"锂芯能源", desc:"动力电池+储能，新能源大爆发", round:"B轮", val:"100亿", amt:22, minAUM:120, trend:"up", base:0.64, w:{aum:100,track:40,net:30}, why:"双碳目标确立，最确定的国家级风口" },
            { tag:"硬科技", name:"灵动机器人", desc:"工业机器人+智能制造方案", round:"B轮", val:"40亿", amt:18, minAUM:80, trend:"up", base:0.55, w:{aum:65,track:26,net:20}, why:"制造业升级，扎实的大方向" },
          ]},
        { year:2022, era:"美元退潮与国资崛起", firm:"远望资本",
          story:"美元基金大规模撤退，人民币基金成主流，LP结构剧变——国资和产业资本成主力。「返投」「招商」成新关键词。DPI取代估值成硬指标。游戏规则，变了。",
          deals:[
            { tag:"半导体设备", name:"精刻光电", desc:"光刻相关设备/材料，国产替代核心", round:"B轮", val:"60亿", amt:22, minAUM:120, trend:"up", base:0.66, w:{aum:110,track:42,net:30}, why:"「卡脖子」环节获举国之力支持" },
            { tag:"新能源车", name:"极光汽车", desc:"高端智能电动车，对标特斯拉", round:"C轮", val:"200亿", amt:24, minAUM:150, trend:"hot", base:0.44, w:{aum:80,track:24,net:18}, why:"赛道空前拥挤，烧钱巨大" },
            { tag:"消费", name:"预制工坊", desc:"预制菜B端供应链+C端品牌", round:"A轮", val:"15亿", amt:14, minAUM:30, trend:"hot", base:0.32, w:{aum:35,track:16,net:10}, why:"概念热但格局未定，同质化严重" },
          ]},
      ]
    },
    {
      id:"P6", roman:"Ⅵ", name:"AI新纪元", span:"2023 — 2026", theme:{ bg:'#dcdce6', paper:'#e9e9f2', ink:'#2a2840', soft:'#4f4d6a', faint:'#8886a0', line:'#c8c6d8', accent:'#5a4d9a' },
      intro:"ChatGPT引爆全球，「大模型」成为唯一的主线叙事。百模大战打响，算力、数据、人才被疯抢。AI应用、出海、具身智能、AGI……新一轮技术革命正在重塑一切。这是你执掌基金的第十年，江湖已称你为「传奇」。你想以怎样的姿态，为这二十多年画上句号？",
      verdict:"【时代落幕 · AI新纪元】这是你的谢幕之战。站在又一个技术奇点上，押注大模型、AI应用、AGI的人继续站在浪潮之巅，盲目追逐尚未成熟概念的人则为热情付出代价。二十多年的判断力，在最后一刻给出了答案——",
      rounds:[
        { year:2023, era:"大模型元年", firm:"远望资本",
          story:"ChatGPT引爆全球，百模大战在中国打响，估值一夜回到「移动互联网元年」的疯狂。AGI的信徒和怀疑者激烈交锋。这一次，是真革命，还是又一场泡沫？",
          deals:[
            { tag:"AI大模型", name:"智源大模型", desc:"通用大模型+开发者生态，顶级团队", round:"A轮", val:"150亿", amt:24, minAUM:150, trend:"up", base:0.58, w:{aum:100,track:38,net:30}, why:"重仓超级浪潮，虽不知泡沫何时破" },
            { tag:"AI应用", name:"灵犀智能", desc:"AI Agent+企业级应用，场景清晰", round:"天使", val:"5亿", amt:18, minAUM:60, trend:"up", base:0.60, w:{aum:85,track:34,net:24}, why:"既要星辰大海，也要脚踏实地" },
            { tag:"算力", name:"擎云算力", desc:"智算中心+算力租赁", round:"B轮", val:"80亿", amt:22, minAUM:120, trend:"hot", base:0.46, w:{aum:60,track:20,net:18}, why:"「卖铲子」逻辑清晰，但供给不确定" },
          ]},
        { year:2024, era:"AI落地与出海", firm:"远望资本",
          story:"大模型喧嚣稍冷，市场追问：AI到底怎么赚钱？应用层成新焦点。同时「出海」成为中国企业的集体选择。下一个十年的超额回报，会在哪里？",
          deals:[
            { tag:"AI应用", name:"妙笔智能", desc:"AI内容生成平台，已规模化营收", round:"B轮", val:"40亿", amt:20, minAUM:100, trend:"up", base:0.62, w:{aum:80,track:32,net:24}, why:"在AI泡沫中，「能赚钱」最稀缺" },
            { tag:"出海", name:"环球速购", desc:"跨境电商+海外本地化供应链", round:"C轮", val:"120亿", amt:22, minAUM:120, trend:"up", base:0.58, w:{aum:85,track:30,net:22}, why:"中国供应链+全球化的组合拳" },
            { tag:"机器人", name:"灵巧人形", desc:"通用人形机器人，对标前沿", round:"A轮", val:"60亿", amt:20, minAUM:100, trend:"hot", base:0.32, w:{aum:65,track:28,net:16}, why:"从demo到量产鸿沟巨大" },
          ]},
        { year:2025, era:"AI Agent与具身智能", firm:"远望资本",
          story:"AI Agent成新叙事核心，「数字员工」走进现实。具身智能、自动驾驶迎来落地拐点。LP们已被教育得无比理性，只看DPI，只信确定性。下一个判断，依然如履薄冰。",
          deals:[
            { tag:"AI Agent", name:"自主智能体", desc:"企业级AI Agent平台，自动化工作流", round:"B轮", val:"100亿", amt:22, minAUM:120, trend:"up", base:0.60, w:{aum:90,track:34,net:26}, why:"站上AI Agent浪潮之巅" },
            { tag:"具身智能", name:"擎天机器人", desc:"具身智能大模型+人形机器人量产", round:"C轮", val:"200亿", amt:24, minAUM:150, trend:"hot", base:0.42, w:{aum:90,track:30,net:24}, why:"资本最追捧，量产盈利仍是问号" },
            { tag:"自动驾驶", name:"驭途科技", desc:"L4自动驾驶+Robotaxi运营", round:"D轮", val:"300亿", amt:24, minAUM:150, trend:"up", base:0.50, w:{aum:70,track:24,net:18}, why:"摸到商业化门槛，但黎明前最熬人" },
          ]},
        { year:2026, era:"谢幕之战 · 新纪元", firm:"远望资本",
          story:"你已搏击了二十六年。AGI的轮廓越来越清晰，新一轮革命正重塑一切。这或许是你生涯最后一个关键判断——你想以怎样的姿态，为这二十六年画上句号？",
          deals:[
            { tag:"AGI", name:"通用智能", desc:"通往AGI的核心团队，All-in通用智能", round:"战略轮", val:"500亿", amt:25, minAUM:150, trend:"up", base:0.55, w:{aum:120,track:46,net:30}, why:"押上全部信誉，投向AGI的圣杯" },
            { tag:"终极能源", name:"聚变能源", desc:"可控核聚变商业化探索", round:"A轮", val:"80亿", amt:22, minAUM:120, trend:"up", base:0.48, w:{aum:90,track:34,net:24}, why:"为后人点灯，回报或在二十年后" },
            { tag:"稳健退场", name:"现金为王", desc:"清盘高风险持仓，锁定DPI体面退场", round:"——", val:"——", amt:0, minAUM:0, trend:"safe", base:1.0, w:{aum:60,track:18,net:14}, why:"放弃暴利想象，确定性最高，体面谢幕" },
          ]},
      ]
    },
  ],

  // ===== 结局称号库（按综合评分档位）=====
};
