# 中国创业投资模拟器 · 文件架构

## 文件清单（重构后扁平结构，便于妙搭部署）

| 文件 | 用途 | 改它能干什么 |
|------|------|------|
| `index.html` | 页面骨架 + 渲染 + 流程逻辑 | 改交互流程、UI结构 |
| `style.css` | 全部样式 | 改配色/布局/排版 |
| `config.js` | **🔑 全局规则配置** | 调难度/概率/计分/健康衰减/存档key等 |
| `data-periods.js` | 6时代剧情 + 24个项目 + 8级职位 | 改剧情文案、项目数据、职位名 |
| `data-endings.js` | 7档结局称号 + 阈值 | 改结局名/名言/解读、调档位线 |
| `data-mbti.js` | 5种风格画像 + 6道情境题 | 改风格文案、情境题选项 |
| `data-music.js` | 6时代旋律谱 | 换某时代的旋律(改音符) |
| `engine-music.js` | 纯音乐播放引擎 | 一般不动 |

## 配置查找速查

### 想调难度 → `config.js`
- `start.aum/track/...` 初始属性
- `probability.tierCuts.SS/S/A/B` 概率档位线
- `probability.baseAdjust` 整体胜率微调
- `probability.luckPerPoint` 运气影响强度
- `outcomeTiers.SS/S/.../C.mult` 5档结果的属性变动倍率
- `health.baseDecay/extraOnBad/...` 健康衰减
- `scoreWeights` 综合评分公式权重

### 想调结局触发 → `config.js` + `data-endings.js`
- `endingTiers` (data-endings.js) 各档结局的分数门槛
- `healthDeath.earlyOutTrackCap` 健康透支结局触发条件

### 想改剧情/项目 → `data-periods.js`
- `periods[i].story` 时代故事
- `periods[i].rounds[j].story` 年份故事
- `periods[i].rounds[j].deals[k]` 投资项目（base=基础胜率, w=权重, trend=顺势/过热/逆势/safe）

### 想改风格画像 → `data-mbti.js`
- `MBTI.styles` 5种风格的称号/标签/解读
- `MBTI.scenarios` 6道情境题
- `TREND_MBTI` 投资选择对风格的影响（默认空，避免被策略带偏）

### 想改音乐 → `data-music.js`
- `DATA_MUSIC.P1..P6.notes` 主旋律音符
- `DATA_MUSIC.P1..P6.bass` 低音线
- `tempo` 速度，`wave` 音色（sine/square/triangle/sawtooth）

### 想改文案/UI文字 → `config.js`
- `CONFIG.ui.*` 所有封面文字、按钮文字、确认对话框

## 加载顺序（index.html 末尾）

```html
<!-- 配置先行 -->
<script src="config.js"></script>
<!-- 数据 -->
<script src="data-periods.js"></script>
<script src="data-endings.js"></script>
<script src="data-mbti.js"></script>
<script src="data-music.js"></script>
<!-- 引擎依赖 CONFIG 和 DATA_MUSIC -->
<script src="engine-music.js"></script>
<!-- 业务逻辑(GAME 对象在此处合并配置和数据) -->
```

## 部署

```bash
mkdir deploy
cp index.html style.css *.js deploy/
lark-cli apps +html-publish --app-id <APP_ID> --path ./deploy --as user
```
