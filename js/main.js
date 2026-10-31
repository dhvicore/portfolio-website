const EMAIL='dhvanitandel7@gmail.com';
const GITHUB='https://github.com/dhvicore';
const LINKEDIN='https://www.linkedin.com/in/dhvani-tandel-71b6b2278';
const RESUME='assets/Dhvani-Tandel-Resume.pdf';
const paths={home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',person:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',tools:'<path d="m14 6 4 4m-9 3-6 6 2 2 6-6M15 3a6 6 0 0 0-7 7l6 6a6 6 0 0 0 7-7l-4 3-5-5Z"/>',star:'<path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',github:'<path d="M9 19c-5 2-5-3-7-3m14 6v-4c0-1-.4-2-1-2 4-.5 6-2 6-6 0-1-.4-2-1-3 .3-1 .3-3 0-4-2 0-3 1-4 2a13 13 0 0 0-8 0C7 4 5 3 4 3c-.3 1-.3 3 0 4-.6 1-1 2-1 3 0 4 2 5.5 6 6-.6.5-1 1-1 2v4"/>',linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/>'};
function nativeIcon(name){return `<img class="mac-icon" src="assets/icons/${name}.png" alt="" aria-hidden="true" draggable="false">`;}
function icon(name){
  if(name==='folder')return nativeIcon('folder');
  if(name==='pdf')return `<span class="mac-document">${nativeIcon('document')}<span class="pdf-badge">PDF</span></span>`;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.home}</svg>`;
}
function hydrate(root=document){
  const appIcons={finder:'finder',home:'home',folder:'folder',person:'notes',tools:'settings',mail:'mail',search:'search',pdf:'preview'};
  root.querySelectorAll('[data-icon]').forEach(e=>{
    const name=e.dataset.icon;
    if(e.closest('.dock'))e.innerHTML=nativeIcon(appIcons[name]||name);
    else if(e.closest('.desktop-files'))e.innerHTML=name==='pdf'?icon('pdf'):nativeIcon(appIcons[name]||name);
    else e.innerHTML=icon(name);
  });
}
const projects=[
{id:'neuropath',name:'Neuropath',category:'AI & vision',symbol:'N',subtitle:'AI skill gap analysis & learning paths',description:'A hackathon AI system that turns résumé and job-description skills into an ordered, explainable learning plan.',details:['Co-developed skill extraction and normalization using Gemma 3, semantic embeddings, taxonomy mapping, and rule-based fallbacks.','Built skill-family gap analysis and prerequisite graphs with topological sorting, evidence-based explanations, and an interactive skill graph.'],stack:['Python','Flask','Next.js','React','React Flow','Gemma 3','MiniLM','sentence-transformers']},
{id:'voltroute',name:'VoltRoute',category:'Web',symbol:'↯',subtitle:'EV routes, chargers & slot booking',description:'A full-stack EV platform for battery-aware route planning, charging station discovery, and charging slot booking.',details:['Built battery-aware routes and station discovery using TomTom APIs.','Implemented secure authentication, booking validation, notifications, and a station provider dashboard for chargers and requests.'],stack:['Next.js','React','TypeScript','SQLite','TomTom APIs']},
{id:'drishti',name:'Drishti',category:'AI & vision',symbol:'◉',subtitle:'Driver drowsiness & distraction detection',description:'A webcam-based monitoring system that detects signs of drowsiness and distraction through temporal analysis.',details:['Detects eye closure, yawning, head movement, and phone use.','Developed a live dashboard with browser camera streaming, driver status alerts, and monitoring metrics.'],stack:['Python','OpenCV','MediaPipe','YOLO','Flask','Next.js']},
{id:'syllabeat',name:'Syllabeat',category:'Android',symbol:'♫',subtitle:'Engineering concepts, set to music',description:'An Android learning app for NMIMS students that turns engineering concepts into educational songs.',details:['Implemented multilingual lyrics, offline song playback, and synchronized lyric highlighting.','Added topic selection and interactive quizzes to support learning.'],stack:['Kotlin','Jetpack Compose']},
{id:'reserve',name:'RESERVE',category:'Android',symbol:'R',subtitle:'Connecting food donors with NGOs',description:'An Android app that connects surplus-food donors with NGOs through listings and donation requests.',details:['Built authentication and surplus-food listings with food type and quantity.','Implemented NGO requests, donor acceptance, request management, and real-time status updates.'],stack:['Kotlin','Jetpack Compose','Material 3','Firebase']},
{id:'divara',name:'Divara',category:'AI & vision',symbol:'✧',subtitle:'A more personal kind of styling',description:'An AI personal styling app with outfit photo analysis, a digital wardrobe, and personalized recommendations.',details:['Co-developed wardrobe management and personalized outfit recommendations.','Integrated local vision-based clothing recognition and rule-based scoring for color harmony, occasion, and weather.'],stack:['React','TypeScript','Node.js','Express','Prisma','SQLite','Ollama']},
{id:'medikey',name:'MediKey',category:'Web',symbol:'+',subtitle:'Medical records, secure & accessible',description:'A digital solution for medical data security and accessibility, supporting seamless health record management.',details:['Implemented the project with web programming, Java, and a SQL backend.'],stack:['Java','SQL','Web programming']},
{id:'votamatic',name:'VOTAMATIC',category:'Hardware',symbol:'✓',subtitle:'Electronic voting with a live vote count',description:'An electronic voting model demonstrating secure vote input and counting, paired with a website displaying real-time votes.',details:[],stack:['Electronic voting','Hardware','Live web dashboard']},
{id:'laser',name:'Laser Home Security',category:'Hardware',symbol:'⌁',subtitle:'A beam-break security alert system',description:'A basic security system using laser detection to trigger alerts when motion interrupts the beam.',details:[],stack:['Laser detection','Security systems']},
{id:'ultrasonic',name:'Ultrasonic Packet Feedback',category:'Hardware',symbol:'◔',subtitle:'Obstacle feedback for autonomous driving',description:'An ultrasonic sensor system that detects obstacles and provides navigation feedback for autonomous driving.',details:[],stack:['Ultrasonic sensors','Autonomous navigation']},
{id:'flappy',name:'Flappy',category:'Web',symbol:'↟',subtitle:'A little bird game',description:'A basic bird game built using Java and HTML.',details:[],stack:['Java','HTML']},
{id:'staircase',name:'Smart Staircase',category:'Hardware',symbol:'▤',subtitle:'Motion-triggered, sequential lighting',description:'A microcontroller-based staircase lighting system that turns LEDs on in sequence when motion is detected, based on timing.',details:[],stack:['Microcontroller','LEDs','Motion detection']}
];
const skills={'Languages':['Python','C++','Java','Kotlin','TypeScript','JavaScript','R','HTML/CSS'],'Web & mobile':['React','Next.js','Node.js','Express','Flask','React Flow','Jetpack Compose','Material 3'],'Databases & backend':['SQLite','SQL','Firebase','Prisma'],'Computer vision & AI':['OpenCV','MediaPipe','YOLO','Ollama','Gemma 3','MiniLM','sentence-transformers'],'Data & visualization':['Pandas','NumPy','Matplotlib','Excel'],'Tools & APIs':['Android Studio','GitHub','AutoCAD','Google Cloud API','TomTom APIs'],'Creative & professional':['Digital content creation','Editing','Creative ideation','Event planning','Communication','Teamwork','Leadership']};
const roles=[['Joint Secretary · formerly Subhead, Digital Media & Creatives','IEEE Computer Society, MPSTME Student Chapter','Creative department work and technical presentations, alongside student chapter leadership.'],['Subhead, Digital Media','IEEE MPSTME Student Chapter','Creative department contributions, social media, and editing.'],['Executive + Subhead, Digital Creatives','Editorial Board, MPSTME Student Council','Helped plan and organize Blind Date with a Book, Rahasya, and The Editorial Project, featuring open mic and creative showcases.'],['Head of Creatives','C’est La Vie, Jasudben M.L. School','Managed creative direction and decor, task assignment, and budgeting.'],['Executive','Sattva · college cultural fest','Helped organize a performing arts event.']];
const certificates=[['Develop with Python for AI and Machine Learning','LinkedIn Learning'],['Deep Learning with TensorFlow: Insights and Innovations','LinkedIn Learning'],['AI Agents for Cybersecurity','LinkedIn Learning'],['When to Use AI (and When Not To): Practical Judgment at Work','LinkedIn Learning'],['RAG Systems & Agentic Workflows with Pinecone and LangGraph','Board Infinity · via Coursera'],['Active Listening for Better Leadership Communication','LinkedIn Learning']];
const pages={home:'Start here',about:'About me',projects:'My projects',skills:'Skills & tools',leadership:'Beyond the code',resume:'Resume',contact:'Let’s connect',trash:'Trash'};
const content=document.getElementById('content');const win=document.getElementById('main-window');let currentPage='home';let projectFilter='All';
const pills=items=>`<div class="pills">${items.map(s=>`<span class="pill">${s}</span>`).join('')}</div>`;
const title=(eyebrow,heading,subtitle)=>`<p class="eyebrow">${eyebrow}</p><h1 class="page-title">${heading}</h1><p class="page-subtitle">${subtitle}</p>`;
function home(){return `<p class="eyebrow">A PERSONAL PORTFOLIO, WITH A DESKTOP TWIST</p><div class="hero-intro"><div><h1>Hi, I’m Dhvani.<br><em>Curious by default.</em></h1><p class="hero-description">A computer engineering student with a creative side.<br>I build useful things, explore new ideas, and bring<br>a little personality to everything I do.</p></div><div class="hero-monogram" aria-hidden="true"><span>dt.</span><small>code meets creativity ✦</small></div></div>${pills(['MBA + B.Tech · NMIMS','Class of 2029','Mumbai, India'])}<div class="actions"><button class="btn primary" data-page="projects">Explore my projects <span>↗</span></button><button class="btn" data-page="resume">View my resume <span>↗</span></button></div><hr class="section-rule"><div class="section-header"><h2>A few good places to start</h2><span>No double-click needed.</span></div><div class="quick-grid"><button class="quick-card" data-page="projects">${icon('folder')}<b>Things I’ve built</b><small>AI, web, Android & more</small><span class="arrow">↗</span></button><button class="quick-card" data-page="leadership">${icon('star')}<b>Beyond the code</b><small>Creativity & community</small><span class="arrow">↗</span></button><button class="quick-card" data-page="contact">${nativeIcon('mail')}<b>Let’s make something</b><small>Start a conversation</small><span class="arrow">↗</span></button></div><div class="home-foot"><span><i></i> A work in progress. Just like me.</span><span>A little bit of my world, on your screen.</span></div>`;}
function about(){return title('THE PERSON BEHIND THE DESKTOP','A mix of logic & imagination.','Dhvani Hitesh Tandel · MBA + B.Tech Computer Engineering')+`<p class="prose">I’m a second-year student at NMIMS with interests in technology, digital media, and creative problem solving. I enjoy bringing ideas to life through technical projects, content creation, and collaborative leadership.</p><p class="prose">Outside of building, you’ll find me drawn to writing, editorial work, literature, and the details that bring an event or a creative concept together.</p><hr class="section-rule"><div class="section-header"><h2>My education</h2></div><section class="info-section"><h3>NMIMS · Mukesh Patel School of Technology Management and Engineering</h3><p>MBA + B.Tech in Computer Engineering</p><div class="meta">2024–2029 · CGPA 8.16 / 10</div></section><section class="info-section"><h3>Jasudben M.L. School</h3><p>ISC · 90.1%</p><div class="meta">2022–2024</div></section><section class="info-section"><h3>Lilavatibai Podar High School</h3><p>ICSE · 89.9%</p><div class="meta">2022</div></section><button class="btn" data-page="leadership">Meet my creative side ↗</button>`;}
function projectList(){const list=projects.filter(p=>projectFilter==='All'||p.category===projectFilter);return title('THE PROJECTS FOLDER','Ideas, made real.','A collection of AI experiments, full-stack apps, Android builds, and hands-on hardware. Open a file to take a closer look.')+`<div class="filters" aria-label="Filter projects">${['All','AI & vision','Web','Android','Hardware'].map(f=>`<button class="filter ${f===projectFilter?'active':''}" data-filter="${f}" aria-pressed="${f===projectFilter}">${f}</button>`).join('')}</div><div class="section-header"><h2>${projectFilter==='All'?'All projects':projectFilter}</h2><span>${list.length} files</span></div><div class="project-grid">${list.map(p=>`<button class="project-card" data-project="${p.id}"><div class="project-top"><span class="project-symbol">${p.symbol}</span><small>${p.category}</small></div><h3>${p.name}</h3><p>${p.subtitle}</p><footer><span>${p.stack.slice(0,2).join(' · ')}</span><span>Open file ↗</span></footer></button>`).join('')}</div>`;}
function detail(p){return `<button class="back" data-page="projects">← Back to projects</button><article class="detail"><div class="detail-symbol">${p.symbol}</div>${title(p.category,p.name,p.subtitle)}<p>${p.description}</p>${p.details.length?`<h2>What went into it</h2><ul>${p.details.map(d=>`<li>${d}</li>`).join('')}</ul>`:''}<h2>Built with</h2>${pills(p.stack)}<div class="actions"><a class="btn primary" href="${GITHUB}?tab=repositories" target="_blank" rel="noopener noreferrer">Explore my GitHub ↗</a><button class="btn" data-page="contact">Ask about this project ↗</button></div></article>`;}
function skillsPage(){return title('MY TOOLBOX','A growing set of tools.','The languages, frameworks, and creative skills I’ve worked with across my projects and student organizations.')+Object.entries(skills).map(([name,items])=>`<section class="skill-group"><h2>${name}</h2>${pills(items)}</section>`).join('');}
function leadership(){return title('BEYOND THE CODE','A creative streak. A team spirit.','Student communities, creative work, and the small details that make an event memorable.')+roles.map(([role,org,desc])=>`<section class="info-section"><h3>${role}</h3><div class="meta">${org}</div><p>${desc}</p></section>`).join('')+`<h2 class="page-title" style="font-size:25px;margin-bottom:22px">Always learning.</h2>`+certificates.map(([name,provider])=>`<section class="info-section"><h3>${name}</h3><div class="meta">${provider}</div></section>`).join('');}
function resume(){return title('THE ACTUAL PDF','My resume, right here.','Read the original document, open it in a new tab, or save a copy for later.')+`<div class="resume-toolbar"><p>Dhvani Tandel · PDF document</p><div class="actions" style="margin:0"><a class="btn" href="${RESUME}" target="_blank" rel="noopener">Open PDF ↗</a><a class="btn primary" href="${RESUME}" download="Dhvani-Tandel-Resume.pdf">Download ↓</a></div></div><object class="resume-preview" data="${RESUME}" type="application/pdf" aria-label="Dhvani Tandel resume"><p class="prose">Your browser can open the resume in a separate tab. <a href="${RESUME}" target="_blank" rel="noopener">Open the PDF</a> or use the download button above.</p></object>`;}
function contact(){return title('A NEW CONVERSATION','Good things start with hello.','Have a project in mind, an interesting opportunity, or a shared curiosity? I’d love to hear from you.')+`<div class="contact-card">${icon('mail')}<a href="mailto:${EMAIL}" style="text-decoration:none"><b>Send me an email</b><small>${EMAIL}</small></a><button class="copy-btn" id="copy-email">Copy</button></div><a class="contact-card" href="${LINKEDIN}" target="_blank" rel="noopener noreferrer">${icon('linkedin')}<div><b>Connect on LinkedIn</b><small>Dhvani Tandel</small></div><span class="arrow">↗</span></a><a class="contact-card" href="${GITHUB}" target="_blank" rel="noopener noreferrer">${icon('github')}<div><b>Explore my GitHub</b><small>@dhvicore · repositories & experiments</small></div><span class="arrow">↗</span></a><p class="contact-foot">Based in Mumbai, India.<br>Interested in technology, digital media, and creative problem solving.</p>`;}
const renderers={home,about,projects:projectList,skills:skillsPage,leadership,resume,contact,trash:trashPage};
function render(page,projectId){if(!pages[page])page='home';currentPage=page;const wasHidden=win.classList.contains('hidden');win.classList.remove('hidden');const project=page==='projects'&&projects.find(p=>p.id===projectId);content.innerHTML=project?detail(project):renderers[page]();document.getElementById('window-title').textContent=project?`${project.name} — My projects`:page==='home'?'Welcome to my desktop':pages[page];document.getElementById('breadcrumb').textContent=`Dhvani’s MacBook / ${pages[page]}${project?' / '+project.name:''}`;document.querySelectorAll('[data-page]').forEach(e=>{e.classList.toggle('active',e.dataset.page===page);if(e.closest('.sidebar'))e.setAttribute('aria-current',e.dataset.page===page?'page':'false');});content.scrollTop=0;animateContent();if(wasHidden)animateOpen();updateTrash();}
function navigate(page,projectId){closeMenu();windowMotionId++;windowAnimation?.cancel();document.body.classList.remove('desktop-visible');const hash=page==='projects'&&projectId?`projects/${projectId}`:page;if(location.hash.slice(1)===hash)render(page,projectId);else location.hash=hash;}
function fromHash(){const [page,id]=location.hash.slice(1).split('/');render(page||'home',id);}
document.addEventListener('click',async e=>{const page=e.target.closest('[data-page]');if(page){navigate(page.dataset.page);return;}const p=e.target.closest('[data-project]');if(p){navigate('projects',p.dataset.project);return;}const f=e.target.closest('[data-filter]');if(f){projectFilter=f.dataset.filter;render('projects');return;}if(e.target.closest('#copy-email')){try{await navigator.clipboard.writeText(EMAIL);toast('Email copied. Say hello anytime!');}catch{toast(`Email: ${EMAIL}`);}}});
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),3500);}
document.getElementById('close-window').onclick=()=>hideWindow('close');
document.getElementById('minimize-window').onclick=()=>hideWindow('minimize');
document.getElementById('maximize-window').onclick=toggleMaximize;
const handle=document.getElementById('drag-handle');handle.addEventListener('dblclick',e=>{if(!e.target.closest('button'))toggleMaximize();});handle.addEventListener('pointerdown',e=>{if(e.target.closest('button')||innerWidth<=800||win.classList.contains('maximized'))return;const rect=win.getBoundingClientRect(),desktop=document.getElementById('desktop').getBoundingClientRect();const dx=e.clientX-rect.left,dy=e.clientY-rect.top;handle.setPointerCapture(e.pointerId);const move=ev=>{win.style.left=Math.max(0,Math.min(innerWidth-rect.width,ev.clientX-dx))+'px';win.style.top=Math.max(0,Math.min(innerHeight-150,ev.clientY-dy-desktop.top))+'px';};const up=()=>{handle.removeEventListener('pointermove',move);handle.removeEventListener('pointerup',up);handle.removeEventListener('pointercancel',up);};handle.addEventListener('pointermove',move);handle.addEventListener('pointerup',up);handle.addEventListener('pointercancel',up);});
const dialog=document.getElementById('search-dialog'),searchInput=document.getElementById('search-input'),results=document.getElementById('search-results');
function search(){const q=searchInput.value.trim().toLowerCase();const found=[...Object.entries(pages).map(([id,name])=>({name,type:'Page',text:id+' '+name,action:()=>navigate(id)})),...projects.map(p=>({name:p.name,type:p.category,text:[p.name,p.subtitle,p.description,...p.stack].join(' '),action:()=>navigate('projects',p.id)}))].filter(item=>item.text.toLowerCase().includes(q)).slice(0,q?18:7);results.replaceChildren();if(!found.length){const p=document.createElement('p');p.className='empty';p.textContent='No files found. Try “AI”, “Kotlin”, or “resume”.';results.append(p);}found.forEach(item=>{const b=document.createElement('button');b.className='search-result';const span=document.createElement('span');span.textContent=item.name;const small=document.createElement('small');small.textContent=item.type+' ↗';b.append(span,small);b.onclick=()=>{dialog.close();item.action();};results.append(b);});}
function openSearch(){dialog.showModal();searchInput.value='';search();searchInput.focus();}['search-open','window-search','dock-search'].forEach(id=>document.getElementById(id).onclick=openSearch);document.getElementById('search-close').onclick=()=>dialog.close();searchInput.oninput=search;searchInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();results.querySelector('button')?.click();}if(e.key==='ArrowDown'){e.preventDefault();results.querySelector('button')?.focus();}});results.addEventListener('keydown',e=>{const buttons=[...results.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();buttons[(i+(e.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length]?.focus();}});dialog.addEventListener('click',e=>{if(e.target===dialog&&e.offsetY<0)dialog.close();});document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(dialog.open)dialog.close();else openSearch();}});
function tick(){const now=new Date();document.getElementById('clock').textContent=new Intl.DateTimeFormat('en-IN',{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(now);document.getElementById('clock').dateTime=now.toISOString();}tick();setInterval(tick,30000);hydrate();window.addEventListener('hashchange',fromHash);

/* Desktop motion and reversible, session-only shortcut management. */
const reduceMotionQuery=matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion=reduceMotionQuery.matches,windowAnimation=null,windowMotionId=0;
const trashItems=[];
let emptyUndo=[];
const shortcutLabels={home:'Start here',projects:'My projects',resume:'Dhvani’s resume.pdf',contact:'Let’s connect'};
function motionAllowed(){return !reducedMotion;}
function animateContent(){if(!motionAllowed())return;content.animate([{opacity:0,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'cubic-bezier(.2,.7,.2,1)'});}
function animateOpen(){windowMotionId++;windowAnimation?.cancel();if(!motionAllowed())return;windowAnimation=win.animate([{opacity:0,transform:'translateY(24px) scale(.94)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:360,easing:'cubic-bezier(.16,1,.3,1)'});}
function dockTarget(){return document.querySelector(`.dock [data-page="${currentPage}"]`)||document.querySelector('.dock [data-page="home"]');}
async function hideWindow(kind){
 if(win.classList.contains('hidden'))return;
 const id=++windowMotionId;windowAnimation?.cancel();
 if(motionAllowed()){
  const r=win.getBoundingClientRect(),d=dockTarget().getBoundingClientRect();
  const end=kind==='minimize'?{opacity:0,transform:`translate(${d.left+d.width/2-r.left-r.width/2}px,${d.top-r.top-r.height/2}px) scale(.08,.12)`}:{opacity:0,transform:'translateY(9px) scale(.96)'};
  windowAnimation=win.animate([{opacity:1,transform:'translate(0,0) scale(1)'},end],{duration:kind==='minimize'?460:180,easing:'cubic-bezier(.4,0,.7,.3)',fill:'forwards'});
  try{await windowAnimation.finished;}catch{return;}
 }
 if(id!==windowMotionId)return;
 win.classList.add('hidden');windowAnimation?.cancel();document.body.classList.add('desktop-visible');
 document.querySelector('.dock [data-page="home"]').focus({preventScroll:true});
 toast(kind==='minimize'?'Minimized to the dock. Click an app to restore.':'Finder closed. Open any desktop shortcut to return.');
}
function toggleMaximize(){
 if(win.classList.contains('hidden'))return;
 const before=win.getBoundingClientRect();win.classList.toggle('maximized');
 const after=win.getBoundingClientRect();
 if(motionAllowed())win.animate([{transform:`translate(${before.left-after.left}px,${before.top-after.top}px) scale(${before.width/after.width},${before.height/after.height})`},{transform:'translate(0,0) scale(1)'}],{duration:360,easing:'cubic-bezier(.16,1,.3,1)'});
}
const dock=document.querySelector('.dock');
dock.addEventListener('pointermove',e=>{
 if(!motionAllowed()||e.pointerType==='touch')return;
 dock.querySelectorAll(':scope > button').forEach(button=>{const r=button.getBoundingClientRect(),distance=Math.abs(e.clientX-r.left-r.width/2),amount=Math.max(0,1-distance/110);button.style.setProperty('--dock-scale',1+amount*.35);button.style.setProperty('--dock-lift',`${amount*-12}px`);});
});
dock.addEventListener('pointerleave',()=>dock.querySelectorAll(':scope > button').forEach(b=>{b.style.removeProperty('--dock-scale');b.style.removeProperty('--dock-lift');}));
document.addEventListener('click',e=>{
 
 const app=e.target.closest('.dock>button');if(app&&motionAllowed())app.querySelector('.app-icon').animate([{transform:'translateY(0)'},{transform:'translateY(-18px)',offset:.35},{transform:'translateY(0)',offset:.65},{transform:'translateY(-6px)',offset:.8},{transform:'translateY(0)'}],{duration:560,easing:'ease-out'});
});
function updateTrash(){
 document.querySelectorAll('[data-trash-icon]').forEach(el=>el.innerHTML=nativeIcon(trashItems.length?'trash-full':'trash'));
 document.querySelectorAll('[data-trash-count]').forEach(el=>el.textContent=trashItems.length||'');
 document.getElementById('trash-count').textContent=trashItems.length?`${trashItems.length} items`:'Empty';
}
function trashPage(){return title('A LITTLE ROOM FOR IMPERFECTION','Even ideas need a recycle bin.','A playful corner for discarded drafts and desktop shortcuts. Everything here lives only in this browser tab.')+`<div class="trash-toolbar"><span>${trashItems.length} ${trashItems.length===1?'item':'items'}</span><div><button class="btn" data-action="restore-all" ${trashItems.length?'':'disabled'}>Put everything back ↗</button> <button class="btn" data-action="empty-trash" ${trashItems.length?'':'disabled'}>Empty Trash</button></div></div>${emptyUndo.length?'<div class="trash-undo">Trash emptied. Changed your mind? <button data-action="undo-empty">Undo</button></div>':''}${trashItems.length?`<div class="trash-grid">${trashItems.map(item=>`<article class="trash-item">${nativeIcon(item.shortcut?'folder':'document')}<h2>${item.name}</h2><p>${item.shortcut?'Desktop shortcut · your content stays in Finder':item.text}</p><button class="btn" data-restore="${item.id}">Put back ↗</button></article>`).join('')}</div>`:`<div class="trash-empty">${nativeIcon('trash')}<h2>A fresh start.</h2><p>Drag a desktop shortcut onto the bin to try it.<br>Or use “Move to Trash” in its right-click menu.</p></div>`}<p class="trash-note">Just an interactive desktop: no files on your device are changed. Refresh to reset.</p>`;}
function moveShortcutToTrash(button){
 const page=button.dataset.page;if(page==='trash'||!shortcutLabels[page])return;
 if(!trashItems.some(item=>item.id===`shortcut-${page}`))trashItems.push({id:`shortcut-${page}`,name:shortcutLabels[page],shortcut:page});
 button.hidden=true;button.style.left='';button.style.top='';button.style.position='';button.style.transform='';
 updateTrash();if(currentPage==='trash'&&!win.classList.contains('hidden'))render('trash');
 toast(`${shortcutLabels[page]} moved to Trash. You can put it back anytime.`);
 if(motionAllowed())document.querySelector('.desktop-trash').animate([{transform:'rotate(0)'},{transform:'rotate(-9deg)'},{transform:'rotate(9deg)'},{transform:'rotate(0)'}],{duration:350});
}
function restoreTrashItem(id){
 const index=trashItems.findIndex(item=>item.id===id);if(index<0)return;
 const [item]=trashItems.splice(index,1);
 if(item.shortcut){const shortcut=document.querySelector(`.desktop-files [data-page="${item.shortcut}"]`);shortcut.hidden=false;shortcut.classList.remove('is-dragging');}
 else addRestoredNote(item);
 updateTrash();toast(`${item.name} put back on the desktop.`);
}
function addRestoredNote(item){
 const note=document.createElement('button');note.className='restored-note desktop-file';note.dataset.noteId=item.id;note.dataset.noteText=item.text;note.innerHTML=`${nativeIcon('document')}<b>${item.name}</b>`;note.style.top=`${185+document.querySelectorAll('.restored-note').length*100}px`;
 note.addEventListener('click',()=>toast(item.text));document.getElementById('desktop').append(note);attachDesktopDrag(note);
}
const menu=document.getElementById('desktop-menu');let contextShortcut=null;
function closeMenu(){menu.hidden=true;}
document.getElementById('desktop').addEventListener('contextmenu',e=>{
 if(e.target.closest('.window,a,input,textarea'))return;
 e.preventDefault();contextShortcut=e.target.closest('.desktop-files .desktop-file');
 menu.querySelector('[data-action="trash-shortcut"]')?.remove();
 if(contextShortcut){const b=document.createElement('button');b.setAttribute('role','menuitem');b.dataset.action='trash-shortcut';b.textContent='Move to Trash';menu.append(b);}
 menu.hidden=false;menu.style.left=Math.min(e.clientX,innerWidth-242)+'px';menu.style.top=Math.min(e.clientY,innerHeight-menu.offsetHeight-12)+'px';menu.querySelector('button').focus();
});
menu.addEventListener('keydown',e=>{const items=[...menu.querySelectorAll('button')],i=items.indexOf(document.activeElement);if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();items[(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length].focus();}});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('#desktop-menu'))closeMenu();});
document.addEventListener('click',e=>{
 const restore=e.target.closest('[data-restore]');if(restore){restoreTrashItem(restore.dataset.restore);render('trash');return;}
 const action=e.target.closest('[data-action]')?.dataset.action;if(!action)return;
 closeMenu();
 if(action==='show-desktop')hideWindow('minimize');
 if(action==='tidy'){document.querySelectorAll('.desktop-files .desktop-file,.restored-note').forEach(b=>{b.style.left='';b.style.top='';b.style.position='';b.style.transform='';});document.querySelectorAll('.restored-note').forEach((note,i)=>{note.style.top=`${185+i*100}px`;});toast('Desktop shortcuts tidied up.');}
 if(action==='motion'){reducedMotion=!reducedMotion;document.body.classList.toggle('reduced-motion',reducedMotion);document.getElementById('motion-state').textContent=reducedMotion?'On':'Off';toast(reducedMotion?'Reduced motion is on.':'Desktop animations are on.');}
 if(action==='trash-shortcut'&&contextShortcut)moveShortcutToTrash(contextShortcut);
 if(action==='restore-all'){[...trashItems].forEach(item=>restoreTrashItem(item.id));render('trash');}
 if(action==='empty-trash'){emptyUndo=trashItems.splice(0);updateTrash();render('trash');toast('Trash emptied. Use Undo to bring the items back.');}
 if(action==='undo-empty'){trashItems.push(...emptyUndo);emptyUndo=[];updateTrash();render('trash');}
});
function attachDesktopDrag(button){
 button.addEventListener('pointerdown',e=>{
  if(e.button!==0||e.target.closest('a')||button.classList.contains('desktop-trash'))return;
  const rect=button.getBoundingClientRect();const x=e.clientX,y=e.clientY;let dragging=false;
  const move=ev=>{
   if(!dragging&&Math.hypot(ev.clientX-x,ev.clientY-y)<7)return;
   if(!dragging){dragging=true;button.setPointerCapture(e.pointerId);button.classList.add('is-dragging');}
   button.style.position='fixed';button.style.left=Math.max(0,Math.min(innerWidth-rect.width,rect.left+ev.clientX-x))+'px';button.style.top=Math.max(40,Math.min(innerHeight-90,rect.top+ev.clientY-y))+'px';
   const bin=document.querySelector('.desktop-trash').getBoundingClientRect();document.querySelector('.desktop-trash').classList.toggle('drop-ready',ev.clientX>=bin.left&&ev.clientX<=bin.right&&ev.clientY>=bin.top&&ev.clientY<=bin.bottom);
  };
  const finish=ev=>{
   button.removeEventListener('pointermove',move);button.removeEventListener('pointerup',finish);button.removeEventListener('pointercancel',cancel);button.classList.remove('is-dragging');
   const bin=document.querySelector('.desktop-trash');const dropped=bin.classList.contains('drop-ready');bin.classList.remove('drop-ready');
   if(!dragging)return;
   button.addEventListener('click',blockClick,{capture:true,once:true});setTimeout(()=>button.removeEventListener('click',blockClick,true),0);
   if(dropped){if(button.dataset.noteId){const item={id:button.dataset.noteId,name:button.querySelector('b').textContent,text:button.dataset.noteText};trashItems.push(item);button.remove();updateTrash();if(currentPage==='trash')render('trash');}else moveShortcutToTrash(button);}
  };
  const cancel=()=>{button.removeEventListener('pointermove',move);button.removeEventListener('pointerup',finish);button.removeEventListener('pointercancel',cancel);button.classList.remove('is-dragging');document.querySelector('.desktop-trash').classList.remove('drop-ready');};
  function blockClick(ev){ev.preventDefault();ev.stopImmediatePropagation();}
  button.addEventListener('pointermove',move);button.addEventListener('pointerup',finish);button.addEventListener('pointercancel',cancel);
 });
 button.addEventListener('keydown',e=>{if((e.key==='Delete'||e.key==='Backspace')&&button.dataset.page){e.preventDefault();moveShortcutToTrash(button);}});
}
document.querySelectorAll('.desktop-files .desktop-file').forEach(attachDesktopDrag);
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){const menuWasOpen=!menu.hidden;closeMenu();if(menuWasOpen)return;if(!dialog.open&&!win.classList.contains('hidden')&&!e.target.closest('input,textarea'))hideWindow('minimize');}
});
reduceMotionQuery.addEventListener('change',e=>{reducedMotion=e.matches;document.body.classList.toggle('reduced-motion',reducedMotion);document.getElementById('motion-state').textContent=reducedMotion?'On':'Off';});
document.body.classList.toggle('reduced-motion',reducedMotion);document.getElementById('motion-state').textContent=reducedMotion?'On':'Off';
updateTrash();fromHash();animateOpen();
