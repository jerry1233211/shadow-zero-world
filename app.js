'use strict';
const source = {
  debut: 'https://blog.playstation.com/2023/05/24/phantom-blade-zero-a-new-beginning-in-a-long-journey/',
  castle: 'https://pbz.s-game.cn/zh-CN/news/pre-orders-now-available/',
  moyuan: 'https://blog.playstation.com/2026/08/11/watch-the-phantom-blade-zero-gameplay-deep-dive-state-of-play-on-august-17-pre-orders-live-today/',
  swords: 'https://pbz.s-game.cn/zh-CN/news/year-of-the-snake-trailer/',
  pang: 'https://pbz.s-game.cn/zh-CN/news/return-to-pangzhen-rtx-reveal/',
  steam: 'https://store.steampowered.com/app/4115450/Phantom_Blade_Zero?l=schinese',
  ps: 'https://www.playstation.com/zh-hans-cn/games/phantom-blade-zero/',
  media: 'https://pbz.s-game.cn/zh-CN/#media',
  wiki: 'https://yzr.huijiwiki.com/wiki/首页'
};
const factions = {
  order: {index:'壹',kicker:'THE ORDER',title:'组织',status:'《零》已确认势力',subtitle:'曾经的归属，如今的杀局。',description:'神秘而强大的刺客集团，也是魂原本效力的旧主。首领遇害后，魂被指为凶手；他必须在生命耗尽之前，查清构陷背后的真相。',meta:'相关人物 / 魂',source:source.debut},
  castle: {index:'贰',kicker:'SHADOWS OF THE PAST',title:'暗魔天堡',status:'《零》已确认势力',subtitle:'往事未散，血脉仍在。',description:'暗魔天堡之主魔渊，已经在本作公开预告中登场。这一势力与魂的身世相连；更多魔堡往事，仍等待游戏中的故事展开。',meta:'相关人物 / 魔渊',source:source.castle},
  swords: {index:'叁',kicker:'SEVEN-STAR FORMATION',title:'七星剑阵',status:'公开战斗群体 · 阵营未详',subtitle:'七剑围身，红绳牵命。',description:'七名剑客以协同剑阵迎战魂，阵法随成员减员改变。战局随后转向红绳操控的悬空傀儡：武学与诡术，构成同一场险局。',meta:'公开线索 / 七名剑客 · 三名弟子',source:source.swords},
  mystery: {index:'肆',kicker:'UNSOLVED MYSTERIES',title:'圣母谜团',status:'官方世界观关键词 · 非已知阵营',subtitle:'一朵花，能藏下多少往事？',description:'「圣母娘娘」「记忆之花」「杀气改造」出现在官方世界观介绍中。它们的完整来历与彼此关系尚未充分公开，是探寻影境时值得留意的线索。',meta:'线索索引 / 圣母娘娘 · 记忆之花',source:source.steam}
};
const link = (url,label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
const cite = (url,label) => `<p class="dialog-source">设定出处 / ${link(url,label)}</p>`;
const picture = (file,alt,caption,extra='') => `<img src="assets/${file}" alt="${alt}" class="${extra}"><p class="caption">${caption}</p>`;
const entries = {
  prologue:{category:'故事序章 / 官方公开梗概',title:'六十六日',subtitle:'一场构陷之后，生命开始倒数。',body:`<p>魂曾是「组织」的精锐刺客。首领遇害后，他被构陷为凶手，在随之而来的追捕中伤及心脏。</p><p>一名神秘医师将他从死亡边缘拉回。但救治只能维系六十六日。魂必须在命尽之前，找到幕后之人。</p>${picture('dual-snake-soul-official.webp','魂手持双蛇武器的官方新闻图','魂 · 官网蛇年实机演示新闻配图')}<h3>故事的三个起点</h3><p>旧主为何转身追杀？谁将罪名加诸魂身？残存的时间，能否换来真相？这些问题，构成这场影境之旅的起点。</p><div class="dialog-notice"><p>六十六日是官方披露的故事设定。此处不将它解释为现实时间限制，也不补写未公开的结局。</p></div>${cite(source.debut,'S-GAME 创始人开发者介绍 · 2023.05.24')}`},
  order:{category:'江湖诸势 / 已确认势力',title:'组织',subtitle:'他曾经执行命令，如今成为命令的目标。',body:`<p>开发者将「组织」介绍为隐秘而强大的刺客势力。魂是其麾下的精锐，直到首领遇害的事件改变了他的处境。</p><p>魂被构陷、负伤、遭到追捕。组织也因此成为理解主线的第一条线索：这段旧有关系，究竟如何变成一场杀局？</p>${picture('forest-shrine.webp','林间石阶与剑客的官方概念图','官方场景氛围图；不代表组织总部')}<div class="dialog-notice"><p>本卷使用《零》开发者公开梗概。旧作中的组织官阶、首领姓名及完整成员，不直接套入本作。</p></div>${cite(source.debut,'S-GAME / PlayStation 开发者介绍')}`},
  castle:{category:'江湖诸势 / 已确认势力',title:'暗魔天堡',subtitle:'魔渊现身，往事有了新的入口。',body:`<p>《零》的公开资料确认，魔渊是暗魔天堡之主。官网预购公告将他与甄子丹的脸部及动作捕捉联系在一起，预告中也出现了他怀抱婴孩的场景。</p>${picture('moyuan-official.webp','魔渊怀抱婴孩，来自官方 PlayStation 博客封面','魔渊 · PlayStation 官方博客宣传图')}<h3>一段未尽的身世</h3><p>更多涉及魂身世的内容，可在魔渊人物卷宗中阅读。魔堡的完整沿革与内部关系，目前没有足够的本作资料可供展开。</p><div class="dialog-notice"><p>《零》的魔堡之主为「魔渊」。系列旧作的「魔天」不能作为同名人物混写。</p></div><button class="archive-link" data-story="moyuan">阅读魔渊卷宗 · 含身世信息 →</button>${cite(source.castle,'游戏官网预购公告 · 2026.08.12')}`},
  swords:{category:'江湖遭遇 / 官方公开战斗群像',title:'七星剑阵',subtitle:'剑阵散去，诡术接续。',body:`<p>官方蛇年实机演示介绍了一场七剑客协同作战。剑阵会因成员减员而变化，魂必须面对攻守不断调整的合围。</p><p>进入下一阶段，三名弟子以红绳操控首领，让他以悬空傀儡的姿态继续战斗。</p>${picture('temple-interior.webp','红光中的寺院内部，官方实机场景图','官方场景氛围图；不据此确认剑阵所在地')}<h3>武学与诡术的交界</h3><p>这段公开演示提供了一扇观察影境的窗：敌手之间的配合与异样的身体操控，将传统武学引向更诡谲的形态。</p><div class="dialog-notice"><p>「七星剑阵」在这里指公开的战斗群体与剑阵名称。其完整门派归属尚未确认，不将其称作独立阵营。</p></div>${cite(source.swords,'游戏官网 · 双蛇大破七星阵 · 2025.01.21')}`},
  mystery:{category:'影境秘闻 / 官方关键词',title:'圣母谜团',subtitle:'线索已显，答案仍在影中。',body:`<p>官方商店介绍列出「圣母娘娘」「记忆之花」「杀气改造」等关键词，提示影境中存在尚未揭开的隐秘力量。</p><p>它们如何影响人物，又如何进入魂的旅程？现有官方简介没有完整解释。本卷保留这些问题，等待后续故事给出答案。</p>${picture('hero-red-tree.webp','赤色巨树下的剑客，官方概念美术','官方场景氛围图；不将赤树认作记忆之花')}<div class="dialog-notice"><p>本页没有把圣母娘娘写成已确认的门派或教派，也没有采用未经本作官方核实的完整身世。</p></div>${cite(source.steam,'Steam 官方游戏介绍')}`},
  soul:{category:'人物卷宗 / SOUL',title:'魂',subtitle:'组织精锐刺客 · 主角',body:`${picture('soul-concept.webp','魂的全身官方概念原画','魂 · S-GAME 官方人物概念原画','character-sheet')}<p>魂原为组织效力。首领之死让他成为被追杀的目标，医师的救治则为他的求真之旅留下六十六日。</p><p>主线已知的是他的处境与目标；真正的幕后之人以及旅程的终点，仍未在本卷中揭示。</p><h3>人物设计手记</h3>${picture('soul-design-sheet.webp','黑衣斗笠剑客与武器的官方多视图设计稿','官网人物设计稿 · 保留原始图中说明','character-sheet')}${cite(source.debut,'S-GAME 开发者公开梗概')}`},
  moyuan:{category:'人物卷宗 / 官方预告身世信息',title:'魔渊',subtitle:'暗魔天堡之主',body:`<div class="dialog-notice"><p>本卷包含官方 2026 年 8 月预告已披露的亲缘关系。</p></div>${picture('moyuan-official.webp','魔渊抱婴孩持剑，官方宣传图','魔渊 · PlayStation 官方博客封面')}<p>S-GAME 创始人的 PlayStation 博客明确介绍，魔渊是魂的父亲。公开预告中怀抱婴孩的魔渊，让魂的旅程与上一代的往事产生联系。</p><p>该角色采用甄子丹的脸部与动作捕捉。暗魔天堡的权力结构与魔渊更完整的经历，仍有待本作故事展开。</p>${cite(source.moyuan,'S-GAME / PlayStation 博客 · 2026.08.11')}`},
  pang:{category:'江湖地点 / 庞镇',title:'重返庞镇',subtitle:'故事来处，又见细雨。',body:`<p>庞镇曾是《雨血》故事的起点。游戏官网在《重返庞镇》一文中介绍，它在《影之刃零》中重新登场，成为一处重要关卡。</p><p>从手绘小镇走向新的场景表现，庞镇为这段系列旅程提供了一个可以回望的入口。</p>${picture('forest-shrine.webp','官方林间场景概念图','官方场景氛围图；并非庞镇地图')}<div class="dialog-notice"><p>本卷只确认庞镇在《零》中重现，不以旧作发生过的事件推定本作剧情完全相同。</p></div>${cite(source.pang,'游戏官网 · 重返庞镇 · 2025.08.18')}`},
  kungfu:{category:'世界观 / KUNGFUPUNK',title:'功夫朋克',subtitle:'刀剑、机械与异术并存的影境。',body:`<p>开发者将《零》的美术方向称为「Kungfupunk」。中国功夫、复杂机械与神秘异术，共同构成影境的视觉和世界观。</p>${picture('mechanical-lion.webp','狮头火器近景，官方实机截图','官网实机截图 · 狮头火器')}<p>这给江湖带来一种独特的张力：传统武学仍是人物行动的基础，机械与诡术则让所见之物显得熟悉又陌生。</p>${cite(source.debut,'S-GAME 创始人 · Kungfupunk 介绍')}`}
};

const tabs = [...document.querySelectorAll('[data-faction]')];
function selectFaction(key,focus=false){
  const data=factions[key];
  if(!data)return;
  for(const tab of tabs){const selected=tab.dataset.faction===key;tab.classList.toggle('active',selected);tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;if(selected&&focus)tab.focus();}
  for(const field of ['index','kicker','title','status','subtitle','description','meta'])document.getElementById(`faction-${field}`).textContent=data[field];
  document.getElementById('faction-source').href=data.source;
  document.getElementById('faction-read').dataset.story=key;
  const panel=document.getElementById('faction-panel');
  panel.setAttribute('aria-labelledby',`tab-${key}`);
  panel.classList.remove('fade-change');requestAnimationFrame(()=>panel.classList.add('fade-change'));
}
for(const tab of tabs){tab.addEventListener('click',()=>selectFaction(tab.dataset.faction));tab.addEventListener('keydown',e=>{let index=tabs.indexOf(tab);if(e.key==='ArrowRight')index=(index+1)%tabs.length;else if(e.key==='ArrowLeft')index=(index-1+tabs.length)%tabs.length;else if(e.key==='Home')index=0;else if(e.key==='End')index=tabs.length-1;else return;e.preventDefault();selectFaction(tabs[index].dataset.faction,true);});}

const dialog=document.getElementById('archive-dialog');
let previousFocus=null;
function openDialog(entry){
  if(!dialog.open)previousFocus=document.activeElement;
  document.getElementById('dialog-category').textContent=entry.category;
  document.getElementById('dialog-content').innerHTML=`<h2 id="dialog-title">${entry.title}</h2><p class="dialog-subtitle">${entry.subtitle}</p>${entry.body}`;
  dialog.scrollTop=0;
  if(!dialog.open){dialog.showModal();document.body.classList.add('dialog-open');}
  document.querySelector('.dialog-close').focus();
}
function showSources(){
  const sources=[
    [source.debut,'S-GAME 创始人开发者介绍','2023.05.24 · 组织、魂、六十六日与功夫朋克'],
    [source.castle,'游戏官网 · 预购公告','2026.08.12 · 暗魔天堡之主魔渊'],
    [source.moyuan,'S-GAME / PlayStation 博客','2026.08.11 · 魔渊与魂的亲缘关系、甄子丹捕捉演出'],
    [source.swords,'游戏官网 · 双蛇大破七星阵','2025.01.21 · 七剑客及红绳操控战斗'],
    [source.pang,'游戏官网 · 重返庞镇','2025.08.18 · 本作地点与系列来路'],
    [source.steam,'Steam 官方游戏介绍','圣母娘娘、记忆之花、杀气改造等世界观关键词'],
    [source.media,'游戏官网 · 媒体下载','人物原画、概念美术与实机截图'],
    [source.wiki,'影之刃中文灰机 Wiki','首页声明由灵游坊官方运营；本站只用于系列溯源'],
    ['https://www.bilibili.com/video/BV1tvjx6AESG/','影境编年史 · 第一期 / 高兴的郭富贵','用户提供的玩家系列前史视频；已核查标题和简介，未逐句核验视频内容'],
    ['https://universe.leagueoflegends.com/en_US/region/ionia/','LOL 宇宙 · 艾欧尼亚','仅用于叙事排版参考；本站未使用 Riot 人物与美术']
  ];
  openDialog({category:'资料索引 / 编纂说明',title:'影境有据',subtitle:'核查日期 · 2026 年 10 月 9 日',body:`<p>本页是《影之刃零》的非官方世界观整理。正文基于游戏官网、开发者署名文章与官方商店信息改写，导语与章节标题由本站撰写。</p><div class="dialog-notice"><p>「组织」「暗魔天堡」为已确认势力；「七星剑阵」为公开战斗群体；「圣母谜团」为本站归纳的线索主题。「江湖前史」采用系列既有资料，不代表全部已确认在《零》中登场。</p></div><ul class="source-list">${sources.map(([url,title,note])=>`<li>${link(url,title)}<small>${note}</small></li>`).join('')}</ul><h3>美术说明</h3><p>官方图片版权归 S-GAME 及相应权利人。原图保留在素材中；页面按版面自然裁切。未公开标明地点或势力的图像，只作氛围配图。势力卡片的线条图形是本站导览图案，不是游戏官方徽记。</p><p>魔渊人物宣传图来自 PlayStation 官方博客；其余主要取自官网媒体下载。${link('assets/asset-manifest.json','查看逐图来源清单')}</p>`});
}
document.addEventListener('click',e=>{const storyButton=e.target.closest('[data-story]');if(storyButton){const entry=entries[storyButton.dataset.story];if(entry)openDialog(entry);}if(e.target.closest('[data-sources]'))showSources();});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});});

const menuButton=document.querySelector('.menu-toggle');
const nav=document.getElementById('main-nav');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','打开导航');}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'关闭导航':'打开导航');});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
let scrollQueued=false;
function updateProgress(){const range=document.documentElement.scrollHeight-innerHeight;document.getElementById('reading-progress').style.width=`${range>0?(scrollY/range)*100:0}%`;scrollQueued=false;}
addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateProgress);}},{passive:true});
addEventListener('resize',updateProgress);updateProgress();
