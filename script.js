/* ================= STATE & SETTINGS ================= */
const LS='bucin_v1_';
const DEFAULT_PHOTO="data:image/jpeg;base64,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";
const state={
  girl:localStorage.getItem(LS+'girl')||'Sipa',
  date:localStorage.getItem(LS+'date')||'2026-01-03',
  photo:localStorage.getItem(LS+'photo')||DEFAULT_PHOTO,
  done:JSON.parse(localStorage.getItem(LS+'done')||'{}'),
};
const $=s=>document.querySelector(s);
function saveState(){
  localStorage.setItem(LS+'girl',state.girl);
  localStorage.setItem(LS+'date',state.date);
  localStorage.setItem(LS+'photo',state.photo);
  localStorage.setItem(LS+'done',JSON.stringify(state.done));
}
$('#appTitle').textContent='Bucin Adventure - '+state.girl+' Edition';

/* ---- music (autoplay-friendly: start muted, unmute on first tap) ---- */
/* Kalau ada file song.mp3 di folder yang sama, itu diputar duluan.
   Kalau tidak ada, otomatis pakai melodi bawaan. */
const bgm=$('#bgm');bgm.muted=true;bgm.volume=.55;
bgm.src='song.mp3';
bgm.onerror=()=>{bgm.onerror=null;bgm.src=BUILTIN_SONG;bgm.play().catch(()=>{});};
bgm.play().catch(()=>{});
let soundOn=true;
function unmuteOnce(){bgm.muted=!soundOn?true:false;if(soundOn){bgm.muted=false;bgm.play().catch(()=>{});}removeEventListener('pointerdown',unmuteOnce);}
addEventListener('pointerdown',unmuteOnce,{once:true});
$('#soundBtn').onclick=()=>{soundOn=!soundOn;bgm.muted=!soundOn;$('#soundBtn').textContent=soundOn?'🔊':'🔇';if(soundOn)bgm.play().catch(()=>{});};

/* ---- floating hearts fx ---- */
const fx=$('#fx'),fxx=fx.getContext('2d'),EMO=['💖','💗','💕','💘','🌸','✨'];let FW,FH,PP=[];
function rsz(){FW=fx.width=innerWidth;FH=fx.height=innerHeight}addEventListener('resize',rsz);rsz();
const R=(a,b)=>a+Math.random()*(b-a),rnd=a=>a[R(0,a.length)|0];
function burst(px,py,n){for(let k=0;k<n;k++){const a=R(0,6.28),v=R(3,10);PP.push({t:'p',x:px,y:py,s:R(14,28),vx:Math.cos(a)*v,vy:Math.sin(a)*v-3,e:rnd(EMO),a:1})}}
(function loop(){fxx.clearRect(0,0,FW,FH);if(Math.random()<.04)PP.push({t:'b',x:R(0,FW),y:FH+20,s:R(12,26),vy:-R(.4,1.1),ph:R(0,6),e:rnd(EMO),a:.4});
 PP=PP.filter(p=>{if(p.t=='b'){p.y+=p.vy;p.x+=Math.sin(p.ph+=.02)*.6}else{p.vy+=.15;p.x+=p.vx;p.y+=p.vy;p.a-=.008}
  fxx.globalAlpha=Math.max(p.a,0);fxx.font=p.s+'px serif';fxx.fillText(p.e,p.x,p.y);return p.y>-30&&p.y<FH+60&&p.a>0});
 requestAnimationFrame(loop)})();
addEventListener('pointerdown',e=>burst(e.clientX,e.clientY,5));

/* ================= SHARED GAME HELPERS ================= */
let TIMERS=[];
function clearTimers(){TIMERS.forEach(clearInterval);TIMERS=[];}
function iv(f,ms){const id=setInterval(f,ms);TIMERS.push(id);return id}

function shell(title,hint){return `<h2>${title}</h2><p class="hint">${hint||''}</p><div class="play"></div>`;}

function quizGame(container,{questions,onDone,retry}){
  let qi=0;
  function ask(){
    const q=questions[qi];
    container.innerHTML=`<p style="font-weight:800">${q.q}</p>`+
      q.options.map((o,k)=>`<button class="opt" data-k="${k}">${o}</button>`).join('')+
      `<p class="fb"></p>`;
    container.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
      const ok=+b.dataset.k===q.correct;
      container.querySelector('.fb').textContent=ok?(q.fbOk||'Bener! 🎉'):(q.fbNo||'Yah, salah 😝');
      container.querySelectorAll('.opt').forEach(x=>x.disabled=true);b.classList.add('on');
      setTimeout(()=>{
        if(!ok&&retry){container.querySelectorAll('.opt').forEach(x=>x.disabled=false);container.querySelector('.fb').textContent='';return;}
        qi++;if(qi<questions.length)ask();else onDone();
      },900);
    });
  }
  ask();
}

function fallGame(container,{good,bad,need,avoidPenalty,onDone}){
  container.innerHTML='<div class="area"></div><p class="sc">0/'+need+'</p>';
  const area=container.querySelector('.area'),sc=container.querySelector('.sc');let n=0,miss=0;
  iv(()=>{
    if(n>=need)return;
    const isBad=bad.length&&Math.random()<.28;
    const h=document.createElement('span');h.className='fall';h.textContent=isBad?rnd(bad):rnd(good);
    h.style.left=R(4,86)+'%';h.style.animationDuration=R(2.4,3.8)+'s';
    h.onpointerdown=ev=>{ev.stopPropagation();h.remove();
      if(isBad){miss++;sc.textContent=n+'/'+need+' (hindari yg itu! '+miss+' salah)';burst(ev.clientX,ev.clientY,4);}
      else{n++;sc.textContent=n+'/'+need;burst(ev.clientX,ev.clientY,6);if(n>=need)onDone();}
    };
    area.append(h);setTimeout(()=>h.remove(),4000);
  },600);
}

function memoryGame(container,{items,onDone}){
  const deck=items.concat(items).map((v,i)=>[v,Math.random(),i]).sort((a,b)=>a[1]-b[1]).map(v=>v[0]);
  container.innerHTML='<div class="grid g3">'+deck.map(()=>'<button class="cell">❔</button>').join('')+'</div>';
  const cs=[...container.querySelectorAll('.cell')];let open=[],lock=0,found=0;
  cs.forEach((cl,k)=>cl.onclick=()=>{
    if(lock||cl.disabled||open.includes(k))return;
    cl.style.background=deck[k].startsWith('data:')?`url(${deck[k]})`:'';
    cl.textContent=deck[k].startsWith('data:')?'':deck[k];
    open.push(k);
    if(open.length===2){
      const[a,b]=open;
      if(deck[a]===deck[b]){[a,b].forEach(z=>{cs[z].disabled=true;cs[z].classList.add('ok')});open=[];found++;
        if(found===items.length)onDone();}
      else{lock=1;setTimeout(()=>{cs[a].textContent=cs[b].textContent='❔';cs[a].style.background=cs[b].style.background='';open=[];lock=0;},650);}
    }
  });
}

function sentenceGame(container,{sentence,onDone}){
  const w=sentence.split(' ');let k=0;
  container.innerHTML='<p class="fb" style="font-size:1.2rem;color:var(--ink)"></p><div class="chips"></div>';
  const sn=container.querySelector('.fb'),cp=container.querySelector('.chips');
  w.map((v,j)=>[v,j]).sort(()=>Math.random()-.5).forEach(([v,j])=>{
    const b=document.createElement('button');b.className='chip';b.textContent=v;
    b.onclick=()=>{
      if(j===k){sn.textContent+=v+' ';b.disabled=true;if(++k===w.length)onDone();}
      else{cp.animate([{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'none'}],220);sn.textContent='';k=0;cp.querySelectorAll('.chip').forEach(z=>z.disabled=false);}
    };cp.append(b);
  });
}

function holdMeter(container,{label,onDone}){
  container.innerHTML=`<div class="meter"><i></i></div><p class="sc">0%</p><button class="hold">${label}</button>`;
  let v=0,h=0,ok=0;const b=container.querySelector('.hold');
  b.oncontextmenu=e=>e.preventDefault();b.onpointerdown=()=>h=1;
  ['onpointerup','onpointerleave','onpointercancel'].forEach(k=>b[k]=()=>h=0);
  iv(()=>{if(ok)return;v=Math.max(0,Math.min(100,v+(h?1.8:-1.2)));
    container.querySelector('.meter i').style.width=v+'%';container.querySelector('.sc').textContent=(v|0)+'%';
    if(v>=100){ok=1;onDone();}},30);
}

/* ================= CONTENT (edit di sini) ================= */
const REWARDS={
 1:"Setiap detik yang kamu habiskan buat nge-tap itu, aku beneran sayang kamu sebesar itu 💗",
 2:"Tanggal itu bukan cuma tanggal, itu hari pertama aku milih kamu.",
 3:"Selesai juga puzzlenya. Sama kayak kita, kepingannya pas kalau sama-sama sabar.",
 4:"Makasih udah nangkepin hati aku, jangan taro sembarangan ya 😌",
 5:"Ternyata kamu beneran ngerti aku. Aku aja kadang kalah paham sama diri sendiri.",
 6:"Selabirin apapun jalannya, aku bakal tetep nyari kamu di ujungnya.",
 7:"Bucin resmi terdaftar. Nggak ada obatnya, dan aku nggak minta sembuh.",
 8:"Hati ini emang gampang nabrak, tapi selalu terbang lagi buat kamu.",
 9:"Cocok terus, kayak kita.",
 10:"Dandan apapun juga, kamu tetep yang paling aku suka liat.",
 11:"Ada lagu yang langsung inget kamu tiap denger. Itu lagu kita.",
 12:"Ini surat hari ini. Besok ada lagi, jangan lupa mampir ya.",
 13:"Persentase boleh iseng, tapi rasa sayangnya beneran.",
 14:"Diracik pelan-pelan, sama kayak hubungan kita yang aku jaga tiap hari.",
 15:"Makasih udah milih yang hijau. Aku juga janji begitu.",
 16:"Sekarang aku jadi lebih ngerti cara nunjukkin sayang ke kamu.",
 17:"Gombalannya receh tapi niatnya beneran.",
 18:"Chat lama itu bukti kita udah lewatin banyak hal bareng.",
 19:"Dari kenal sampai sekarang, tiap bab critanya kamu selalu jadi favoritku.",
 20:"Tuker sama voucher tadi kapan aja kamu mau, aku yang tanggung jawab.",
 21:"Di bahasa manapun, artinya tetep sama: aku sayang kamu.",
 22:"Foto ini disimpen ya, biar ada bukti kita seru-seruan.",
 23:"Kangen udah dikalahin. Sekarang gantian kamu yang meluk aku beneran.",
 24:"Suara kamu aja udah bikin hari aku enak.",
};

const GAMES=[
{id:1,ic:'💘',t:'Cinta Clicker',run:(el,done)=>{
 el.innerHTML=shell('Cinta Clicker','Tap secepat mungkin dalam 10 detik!');
 const p=el.querySelector('.play');let n=0,t=10;
 p.innerHTML=`<div class="timer">⏱ <span class="tt">10</span>s</div><button class="tap" style="font-size:1.4rem;padding:26px 30px">${state.photo?'':'💖'}</button><h2 class="cnt" style="margin-top:10px">0</h2><p class="hint">KAMU SANGAT DICINTAI</p>`;
 const btn=p.querySelector('.tap');if(state.photo){btn.style.backgroundImage=`url(${state.photo})`;btn.style.backgroundSize='cover';btn.style.width='120px';btn.style.height='120px';btn.style.borderRadius='50%';}
 btn.onclick=e=>{n++;p.querySelector('.cnt').textContent=n;p.querySelector('.cnt').style.fontSize=(1.4+n*0.03)+'rem';burst(e.clientX,e.clientY,4);};
 const timer=iv(()=>{t--;p.querySelector('.tt').textContent=t;if(t<=0){clearTimers();btn.disabled=true;done();}},1000);
}},
{id:2,ic:'📅',t:'Tebak Tanggal Jadian',run:(el,done)=>{
 el.innerHTML=shell('Tebak Tanggal Jadian','');
 const d=state.date?new Date(state.date):new Date();
 const fmt=x=>x.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
 const correct=fmt(d),o1=fmt(new Date(d.getTime()-6*864e5)),o2=fmt(new Date(d.getTime()+9*864e5));
 const opts=[correct,o1,o2].map((v,i)=>[v,i]).sort(()=>Math.random()-.5);
 quizGame(el.querySelector('.play'),{questions:[{q:'Kapan kita jadian?',options:opts.map(o=>o[0]),correct:opts.findIndex(o=>o[0]===correct),fbOk:'Bener banget! Nggak lupa ya ternyata 🥹',fbNo:'Yah lupa ya? 😤 coba lagi dong'}],retry:true,onDone:done});
}},
{id:3,ic:'🧩',t:'Puzzle Wajah Pacar',run:(el,done)=>{
 el.innerHTML=shell('Puzzle Wajah Pacar','Ketuk 2 kotak buat tuker posisi sampai jadi foto utuh');
 const p=el.querySelector('.play');
 if(!state.photo){p.innerHTML='<p>Upload foto dia dulu di ⚙️ Pengaturan ya, biar puzzlenya seru!</p><button class="skip">Lewati</button>';p.querySelector('.skip').onclick=done;return;}
 const order=[0,1,2,3,4,5,6,7,8];for(let i=order.length-1;i>0;i--){const j=Math.random()*i|0;[order[i],order[j]]=[order[j],order[i]];}
 p.innerHTML='<div class="grid g3"></div>';const g=p.querySelector('.grid');
 function pos(idx){const r=idx/3|0,c=idx%3;return `${c*50}% ${r*50}%`;}
 order.forEach(v=>{const b=document.createElement('button');b.className='cell';b.style.backgroundImage=`url(${state.photo})`;b.style.backgroundPosition=pos(v);b.dataset.v=v;g.append(b);});
 const cells=[...g.children];let sel=null;
 function check(){if(cells.every((c,i)=>+c.dataset.v===i)){cells.forEach(c=>c.classList.add('ok'));done();}}
 cells.forEach(c=>c.onclick=()=>{
  if(sel===null){sel=c;c.style.outline='3px solid var(--acc)';return;}
  if(sel===c){sel.style.outline='';sel=null;return;}
  const a=sel.style.backgroundPosition,b=c.style.backgroundPosition,va=sel.dataset.v,vb=c.dataset.v;
  sel.style.backgroundPosition=b;c.style.backgroundPosition=a;sel.dataset.v=vb;c.dataset.v=va;
  sel.style.outline='';sel=null;check();
 });
}},
{id:4,ic:'🎯',t:'Tangkap Cinta',run:(el,done)=>{
 el.innerHTML=shell('Tangkap Cinta','Tangkap ❤️, jangan sentuh 💔 (mantan lewat)');
 fallGame(el.querySelector('.play'),{good:['💖','💗','💕'],bad:['💔'],need:12,onDone:done});
}},
{id:5,ic:'❓',t:'Seberapa Kenal Aku?',run:(el,done)=>{
 el.innerHTML=shell('Seberapa Kenal Aku?','10 pertanyaan receh tentang aku');
 const Q=[
  ['Warna favoritku?',['Pink','Biru','Hitam'],0],
  ['Makanan yang aku nggak suka?',['Pete','Cokelat','Nasi'],0],
  ['Aku tidur biasanya jam?',['Larut malam','Jam 9 malam','Subuh'],0],
  ['Kalau ngambek aku lebih suka?',['Didiemin dulu','Langsung diajak ngobrol','Dikasih hadiah'],1],
  ['Hal yang bikin aku senyum tiap hari?',['Kamu','Kucing','Uang'],0],
  ['Aku paling takut sama?',['Kecoa','Hantu','Ketinggian'],0],
  ['Kalau libur aku maunya?',['Rebahan','Jalan-jalan','Kerja'],0],
  ['Julukan sayang buat kamu?',['Sayang','Bocil','Keduanya boleh'],2],
  ['Aku paling suka waktu kamu?',['Ketawa lepas','Jutek','Sibuk sendiri'],0],
  ['Kalau aku diem, itu tandanya?',['Lagi mikirin kamu','Marah beneran','Ngantuk'],0],
 ];
 quizGame(el.querySelector('.play'),{questions:Q.map(q=>({q:q[0],options:q[1],correct:q[2],fbOk:'Yes bener! 💯',fbNo:'Hehe salah, tapi gapapa 😄'})),onDone:done});
}},
{id:6,ic:'🌀',t:'Labirin Cinta',run:(el,done)=>{
 el.innerHTML=shell('Labirin Cinta','Gerakin 🧍 ke arah 😘 pakai tombol panah');
 const p=el.querySelector('.play');
 const map=[
  '###########','#S..#.....#','#.#.#.###.#','#.#...#...#','#.#####.#.#','#.......#.#','#####.###.#','#.....#...#','#.###.#.#.#','#...#...#E#','###########'];
 const rows=map.map(r=>r.split(''));let py,px;
 rows.forEach((r,y)=>r.forEach((c,x)=>{if(c=='S'){py=y;px=x;}}));
 function draw(){
  p.querySelector('.maze').style.gridTemplateColumns=`repeat(${rows[0].length},26px)`;
  p.querySelector('.maze').innerHTML=rows.map((r,y)=>r.map((c,x)=>{
   const here=x===px&&y===py;
   return `<div class="${c=='#'?'wall':''}">${here?'🧍':c=='E'?'😘':''}</div>`;
  }).join('')).join('');
 }
 p.innerHTML='<div class="maze"></div><div class="dpad"><span></span><button data-d="u">⬆️</button><span></span><button data-d="l">⬅️</button><span></span><button data-d="r">➡️</button><span></span><button data-d="d">⬇️</button><span></span></div>';
 draw();
 p.querySelectorAll('.dpad button').forEach(b=>b.onclick=()=>{
  let ny=py,nx=px;if(b.dataset.d=='u')ny--;if(b.dataset.d=='d')ny++;if(b.dataset.d=='l')nx--;if(b.dataset.d=='r')nx++;
  if(rows[ny] && rows[ny][nx]!=='#'){py=ny;px=nx;draw();
   if(rows[py][px]==='E'){burst(innerWidth/2,innerHeight/2,16);done();}}
 });
}},
{id:7,ic:'🔨',t:'Whack-A-Bucin',run:(el,done)=>{
 el.innerHTML=shell('Whack-A-Bucin','Pukul 💗 yang muncul, 8 kali!');
 const p=el.querySelector('.play');p.innerHTML='<div class="grid g3">'+'<button class="cell"></button>'.repeat(9)+'</div><p class="sc">0/8</p>';
 const cs=[...p.querySelectorAll('.cell')],sc=p.querySelector('.sc');let n=0,cur=-1;
 cs.forEach((c,k)=>c.onclick=()=>{if(k!==cur)return;cur=-1;c.textContent='💥';n++;sc.textContent=n+'/8';if(n>=8)done();});
 iv(()=>{cs.forEach(c=>c.textContent='');if(n>=8)return;cur=R(0,9)|0;cs[cur].textContent='💗';},850);
}},
{id:8,ic:'🐦',t:'Flappy Love',run:(el,done)=>{
 el.innerHTML=shell('Flappy Love','Ketuk layar biar hatinya terbang, lewatin pipanya! (skor 8)');
 const p=el.querySelector('.play');p.innerHTML='<canvas class="shot" width="300" height="280" style="background:rgba(255,255,255,.3);border-radius:16px"></canvas><p class="sc">0/8</p>';
 const cv=p.querySelector('canvas'),cx=cv.getContext('2d'),sc=p.querySelector('.sc');
 let hy=140,vy=0,pipes=[{x:300,gap:110}],score=0,dead=false;
 function reset(){hy=140;vy=0;pipes=[{x:300,gap:110}];score=0;dead=false;sc.textContent='0/8';}
 reset();
 cv.onpointerdown=()=>{if(dead){reset();return;}vy=-4.6;};
 const loop=iv(()=>{
  if(dead)return;
  vy+=.28;hy+=vy;
  pipes.forEach(pp=>pp.x-=2.6);
  if(pipes[pipes.length-1].x<170)pipes.push({x:300,gap:R(60,200)});
  if(pipes[0].x<-40){pipes.shift();score++;sc.textContent=score+'/8';if(score>=8){clearTimers();done();return;}}
  cx.clearRect(0,0,300,280);cx.font='30px serif';cx.fillText('💗',36,hy);
  cx.fillStyle='rgba(46,158,91,.7)';
  pipes.forEach(pp=>{cx.fillRect(pp.x,0,26,pp.gap-55);cx.fillRect(pp.x,pp.gap+55,26,280-(pp.gap+55));
   if(pp.x<60&&pp.x>10&&(hy<pp.gap-55||hy>pp.gap+55||hy>270||hy<0)){dead=true;}});
  if(hy>280||hy<0)dead=true;
  if(dead){cx.fillStyle='rgba(74,18,48,.6)';cx.fillRect(0,0,300,280);cx.fillStyle='#fff';cx.font='18px sans-serif';cx.fillText('Nabrak! Ketuk buat ulang',40,140);}
 },30);
}},
{id:9,ic:'🃏',t:'Cocokkan Pasangan',run:(el,done)=>{
 el.innerHTML=shell('Cocokkan Pasangan','Buka 2 kartu yang sama');
 const items=state.photo?[state.photo,'💖','🧸','🌙','😘']:['💖','🧸','🌙','😘','🌸'];
 memoryGame(el.querySelector('.play'),{items,onDone:done});
}},
{id:10,ic:'👗',t:'Dandanin Pacar',run:(el,done)=>{
 el.innerHTML=shell('Dandanin Pacar','Pilih minimal 3 aksesoris, lalu ketuk Selesai');
 const p=el.querySelector('.play');
 const acc={'👒':'top:-14px;left:50%;transform:translateX(-50%)','🕶️':'top:38px;left:50%;transform:translateX(-50%)','🎀':'top:2px;left:20%','💍':'bottom:6px;right:14%','🧣':'bottom:26px;left:50%;transform:translateX(-50%)','👛':'bottom:-6px;right:6%'};
 p.innerHTML=`<div class="avatar">${state.photo?`<img src="${state.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`:'😊'}</div><div class="wardrobe">${Object.keys(acc).map(k=>`<button class="wb" data-e="${k}">${k}</button>`).join('')}</div><button class="fin" style="margin-top:14px">Selesai dandanin!</button>`;
 const av=p.querySelector('.avatar');let n=0;
 p.querySelectorAll('.wb').forEach(b=>b.onclick=()=>{
  const e=b.dataset.e;const ex=av.querySelector('[data-tag="'+e+'"]');
  if(ex){ex.remove();n--;b.style.opacity=1;}
  else{const s=document.createElement('span');s.className='acc-layer';s.textContent=e;s.dataset.tag=e;s.style.cssText+=acc[e];av.append(s);n++;b.style.opacity=.4;}
 });
 p.querySelector('.fin').onclick=()=>{if(n<3){alert('Pilih minimal 3 ya!');return;}done();};
}},
{id:11,ic:'🎵',t:'Tebak Lagu Kita',run:(el,done)=>{
 el.innerHTML=shell('Tebak Lagu Kita','Putar musiknya, lalu tebak. (pakai lagu bawaan dulu, atau upload lagu kalian di ⚙️)');
 const p=el.querySelector('.play');
 p.innerHTML=`<button class="playsnip">▶️ Putar 3 detik</button><div class="rowbtns"><button class="opt" data-k="0">Lagu Kita</button><button class="opt" data-k="1">Bukan</button><button class="opt" data-k="2">Nggak tau</button></div><p class="fb"></p>`;
 p.querySelector('.playsnip').onclick=()=>{const a=bgm;const was=a.currentTime;a.play();setTimeout(()=>{},0);setTimeout(()=>{},3000);};
 p.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{p.querySelector('.fb').textContent='Ini emang lagu kita kok 🎶';setTimeout(done,700);});
}},
{id:12,ic:'💌',t:'Surat Cinta Harian',run:(el,done)=>{
 const letters=[
  'Hari ini aku cuma mau bilang: makasih udah jadi kamu.',
  'Kalau kangen, buka lagi halaman ini ya, isinya aku semua.',
  'Semoga harimu semanis kamu bikin harinya orang lain.',
  'Aku bangga sama kamu, jangan lupa itu.',
  'Pelan-pelan aja, aku tungguin kok.',
 ];
 const idx=Math.floor(Date.now()/864e5)%letters.length;
 el.innerHTML=shell('Surat Cinta Harian','Surat buat hari ini');
 const p=el.querySelector('.play');
 p.innerHTML=`<div class="reward">${letters[idx]}</div><p class="hint">Balik lagi besok buat surat baru ya 💌</p><button class="close">Tutup</button>`;
 p.querySelector('.close').onclick=done;
}},
{id:13,ic:'🧮',t:'Kalkulator Jodoh',run:(el,done)=>{
 el.innerHTML=shell('Kalkulator Jodoh','Masukin nama kalian berdua');
 const p=el.querySelector('.play');
 p.innerHTML=`<input type="text" class="n1" placeholder="Nama kamu"><input type="text" class="n2" placeholder="Nama dia" style="margin-top:8px"><button class="go" style="margin-top:10px">Hitung!</button><p class="fb"></p>`;
 p.querySelector('.go').onclick=()=>{
  const a=p.querySelector('.n1').value||'Aku',b=p.querySelector('.n2').value||state.girl;
  let h=0;for(const c of a+b)h=(h*31+c.charCodeAt(0))%97;
  const pct=92+(h%8);
  p.querySelector('.fb').innerHTML=`<div class="reward">${a} ❤️ ${b} = ${pct}.9%<br>Udah pasti jodoh 😌</div>`;
  setTimeout(done,900);
 };
}},
{id:14,ic:'🍲',t:'Rakit Cinta',run:(el,done)=>{
 el.innerHTML=shell('Rakit Cinta','1 kangen + 2 sayang + 3 peluk = hubungan langgeng. Ketuk sesuai takaran!');
 const p=el.querySelector('.play');const need={'😔 Kangen':1,'🥰 Sayang':2,'🤗 Peluk':3};const have={};Object.keys(need).forEach(k=>have[k]=0);
 p.innerHTML=Object.keys(need).map(k=>`<button class="ing" data-k="${k}">${k} (0/${need[k]})</button>`).join('')+'<div class="meter" style="margin-top:12px"><i></i></div>';
 function upd(){const tot=Object.values(need).reduce((a,b)=>a+b,0);const cur=Object.keys(need).reduce((s,k)=>s+Math.min(have[k],need[k]),0);
  p.querySelector('.meter i').style.width=(cur/tot*100)+'%';
  if(cur>=tot)done();}
 p.querySelectorAll('.ing').forEach(b=>b.onclick=()=>{const k=b.dataset.k;if(have[k]<need[k]){have[k]++;b.textContent=`${k} (${have[k]}/${need[k]})`;if(have[k]>=need[k])b.disabled=true;upd();}});
}},
{id:15,ic:'🚩',t:'Hindari Red Flag',run:(el,done)=>{
 el.innerHTML=shell('Hindari Red Flag','Tangkap 🟢, hindari 🚩');
 fallGame(el.querySelector('.play'),{good:['🟢'],bad:['🚩'],need:10,onDone:done});
}},
{id:16,ic:'💞',t:'Kuis Love Language',run:(el,done)=>{
 el.innerHTML=shell('Kuis Love Language','Jawab jujur ya');
 const Q=[
  ['Kamu paling seneng kalau pasangan…',['Bilang sayang tiap hari','Meluk kamu','Bantuin kerjaan kamu','Kasih hadiah kecil'],[0,1,2,3]],
  ['Kalau lagi sedih, kamu maunya…',['Didengerin','Dipeluk','Ditemenin ngapa-ngapain','Dibawain makanan favorit'],[0,1,2,3]],
  ['Cara kamu nunjukin sayang…',['Ngomong langsung','Sentuhan kecil','Ngebantuin hal-hal','Ngasih sesuatu'],[0,1,2,3]],
 ];
 const label=['Words of Affirmation','Physical Touch','Acts of Service','Receiving Gifts'];
 const count=[0,0,0,0];let qi=0;
 function ask(){
  if(qi>=Q.length){const top=count.indexOf(Math.max(...count));
   el.querySelector('.play').innerHTML=`<div class="reward">Love language kamu: ${label[top]} 💗<br>Nanti aku kasih perhatian sesuai itu ya.</div><button class="close">Tutup</button>`;
   el.querySelector('.close').onclick=done;return;}
  const q=Q[qi];el.querySelector('.play').innerHTML=`<p style="font-weight:800">${q[0]}</p>`+q[1].map((o,k)=>`<button class="opt" data-k="${k}">${o}</button>`).join('');
  el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{count[+b.dataset.k]++;qi++;ask();});
 }
 ask();
}},
{id:17,ic:'⌨️',t:'Ketik Cepat Gombal',run:(el,done)=>{
 const lines=['Kamu manis kayak gula tapi bikin aku diabetes sayang','Deket kamu waktu jalan cepet banget','Kamu itu jawaban dari doa aku yang random'];
 const target=rnd(lines);
 el.innerHTML=shell('Ketik Cepat Gombal','Ketik kalimat ini secepat mungkin dalam 15 detik');
 const p=el.querySelector('.play');
 p.innerHTML=`<p style="font-weight:800">"${target}"</p><input type="text" class="tin" autocomplete="off"><p class="timer">⏱ <span class="tt">15</span>s</p><p class="fb"></p>`;
 let t=15,fin=0;
 const timer=iv(()=>{t--;p.querySelector('.tt').textContent=t;if(t<=0&&!fin){clearTimers();p.querySelector('.fb').textContent='Waktu habis, tapi niatnya udah kelihatan 😄';setTimeout(done,900);}},1000);
 p.querySelector('.tin').oninput=e=>{if(e.target.value.trim().toLowerCase()===target.toLowerCase()){fin=1;clearTimers();p.querySelector('.fb').textContent='Cepet banget! 🔥';setTimeout(done,700);}};
}},
{id:18,ic:'💬',t:'Tebak Chat',run:(el,done)=>{
 el.innerHTML=shell('Tebak Chat','Menurutmu chat mesra ini kira-kira kapan ya?');
 const p=el.querySelector('.play');
 p.innerHTML=`<div class="reward" style="filter:blur(3px)">"kamu udah makan blm sayang? jgn telat ya" 🥺💗</div><p class="hint">tebak masa-masanya</p>`;
 quizGame(p,{questions:[{q:'Ini chat waktu masa apa?',options:['Awal PDKT','Baru jadian','Udah lama jadian'],correct:1,fbOk:'Bener! Momen itu tuh 🥹',fbNo:'Hehe salah, tapi tetep momen berharga'}],onDone:done});
}},
{id:19,ic:'🛤️',t:'Perjalanan Cinta Kita',run:(el,done)=>{
 const stages=[
  ['Kenalan','Pertama kali ngobrol, masih canggung-canggung.'],
  ['PDKT','Chat tiap hari, pura-pura nanya kabar padahal kangen.'],
  ['Jadian','Akhirnya berani nembak, dan kamu bilang iya.'],
  ['Sekarang','Masih di sini, masih milih kamu tiap hari.'],
 ];let si=0;
 function show(){
  if(si>=stages.length){el.querySelector('.play').innerHTML='<div class="reward">Perjalanan kita baru mulai, masih panjang ceritanya 💗</div><button class="close">Tutup</button>';
   el.querySelector('.close').onclick=done;return;}
  const s=stages[si];
  el.innerHTML=shell('Perjalanan Cinta Kita','Bab '+(si+1)+' dari '+stages.length);
  el.querySelector('.play').innerHTML=`<h2 style="font-size:1.3rem">${s[0]}</h2><p>${s[1]}</p><button class="nx">Lanjut</button>`;
  el.querySelector('.nx').onclick=()=>{si++;show();};
 }
 show();
}},
{id:20,ic:'🎁',t:'Bongkar Hadiah',run:(el,done)=>{
 el.innerHTML=shell('Bongkar Hadiah','Pilih 1 kotak');
 const vouchers=['Minta peluk gratis 🤗','Minta traktir seblak 🌶️','Bebas ngambek 1 hari 😤','Nonton film pilihan kamu 🎬','Date night dadakan 🌃','Pijetin 15 menit 💆'];
 const p=el.querySelector('.play');p.innerHTML='<div class="grid g3">'+vouchers.map(()=>'<button class="cell" style="font-size:1.6rem">🎁</button>').join('')+'</div>';
 const cs=[...p.querySelectorAll('.cell')];let picked=0;
 cs.forEach((c,k)=>c.onclick=()=>{if(picked)return;picked=1;cs.forEach(x=>x.disabled=true);
  p.innerHTML+=`<div class="reward">Kamu dapat: ${vouchers[k]}</div><button class="close">Tutup</button>`;
  p.querySelector('.close').onclick=done;burst(innerWidth/2,innerHeight/2,14);});
}},
{id:21,ic:'🔤',t:'I Love You 100 Bahasa',run:(el,done)=>{
 el.innerHTML=shell('I Love You 100 Bahasa','Susun jadi frasa yang benar');
 const opts=[['I Love You','English'],['Te Amo','Spanish'],['Aishiteru','Japanese'],['Saranghae','Korean'],["Je T'aime",'French']];
 const [sentence]=rnd(opts);
 sentenceGame(el.querySelector('.play'),{sentence,onDone:done});
}},
{id:22,ic:'📸',t:'Foto Booth Bucin',run:(el,done)=>{
 el.innerHTML=shell('Foto Booth Bucin','Ambil foto, nanti dikasih frame lucu');
 const p=el.querySelector('.play');
 p.innerHTML='<video class="vid" autoplay playsinline style="width:100%;border-radius:16px;background:#000"></video><button class="snap" style="margin-top:10px">Jepret 📸</button><canvas class="shot" hidden></canvas>';
 const vid=p.querySelector('.vid'),cv=p.querySelector('.shot');
 navigator.mediaDevices?.getUserMedia({video:true}).then(s=>vid.srcObject=s).catch(()=>{
  p.querySelector('.vid').remove();
  p.querySelector('.snap').insertAdjacentHTML('beforebegin',state.photo?`<img src="${state.photo}" style="width:100%;border-radius:16px">`:'<p>Kamera nggak bisa diakses, upload foto dulu di ⚙️</p>');
 });
 p.querySelector('.snap').onclick=()=>{
  cv.width=300;cv.height=300;const cx=cv.getContext('2d');
  if(vid.srcObject)cx.drawImage(vid,0,0,300,300);
  else if(state.photo){const img=new Image();img.src=state.photo;cx.drawImage(img,0,0,300,300);}
  cx.fillStyle='rgba(216,31,92,.75)';cx.fillRect(0,258,300,42);
  cx.fillStyle='#fff';cx.font='italic 16px Georgia';cx.textAlign='center';cx.fillText('Pacarnya yang paling disayang 💗',150,284);
  cv.hidden=false;vid.hidden=true;p.querySelector('.snap').textContent='Selesai';p.querySelector('.snap').onclick=done;
 };
}},
{id:23,ic:'👹',t:'Boss Battle: Kangen',run:(el,done)=>{
 el.innerHTML=shell('Boss Battle: Kangen','Kalahin monster Kangen, tap Peluk terus!');
 const p=el.querySelector('.play');p.innerHTML='<div style="font-size:4rem">👹</div><div class="meter"><i style="width:100%"></i></div><button class="hug" style="margin-top:12px">Peluk! 🤗</button>';
 let hp=100;p.querySelector('.hug').onclick=e=>{hp=Math.max(0,hp-8);p.querySelector('.meter i').style.width=hp+'%';burst(e.clientX,e.clientY,5);
  if(hp<=0){p.querySelector('div').textContent='😴';p.querySelector('.hug').disabled=true;setTimeout(done,500);}};
}},
{id:24,ic:'🎙️',t:'Tebak Suara',run:(el,done)=>{
 el.innerHTML=shell('Tebak Suara','Rekam 3 kata dulu, nanti ditebak diacak');
 const words=['Sayang','Kangen','Love you'];
 const p=el.querySelector('.play');
 if(!navigator.mediaDevices?.getUserMedia){p.innerHTML='<p>Mic nggak kedetect di device ini.</p><button class="skip">Lewati</button>';p.querySelector('.skip').onclick=done;return;}
 let idx=0,clips=[];
 function recStep(){
  if(idx>=words.length){quizStep();return;}
  p.innerHTML=`<p>Ucapin kata: <b>${words[idx]}</b></p><button class="rec">🎙️ Rekam 2 detik</button>`;
  p.querySelector('.rec').onclick=async()=>{
   const stream=await navigator.mediaDevices.getUserMedia({audio:true});
   const mr=new MediaRecorder(stream);const chunks=[];mr.ondataavailable=e=>chunks.push(e.data);
   mr.onstop=()=>{clips.push({word:words[idx],url:URL.createObjectURL(new Blob(chunks))});stream.getTracks().forEach(t=>t.stop());idx++;recStep();};
   mr.start();setTimeout(()=>mr.stop(),2000);p.querySelector('.rec').textContent='Merekam...';p.querySelector('.rec').disabled=true;
  };
 }
 function quizStep(){
  const order=[...clips].sort(()=>Math.random()-.5);let qi=0;
  function ask(){
   if(qi>=order.length){p.innerHTML='<div class="reward">Suara kamu emang paling gampang dikenalin 💗</div><button class="close">Tutup</button>';p.querySelector('.close').onclick=done;return;}
   const c=order[qi];
   p.innerHTML=`<audio class="a" src="${c.url}" controls style="width:100%"></audio>`+words.map((w,k)=>`<button class="opt" data-w="${w}">${w}</button>`).join('')+'<p class="fb"></p>';
   p.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{p.querySelector('.fb').textContent=b.dataset.w===c.word?'Bener! 🎉':'Hehe salah dikit 😄';setTimeout(()=>{qi++;ask();},700);});
  }
  ask();
 }
 recStep();
}},
{id:25,ic:'💍',t:'Will You Be Mine Forever?',run:(el,done)=>{
 el.innerHTML=`<h2>Level Terakhir</h2><div class="play"></div>`;
 const p=el.querySelector('.play');
 p.innerHTML=`<div class="ring">💍</div><h2 style="font-size:1.6rem">Will you be mine forever, ${state.girl}?</h2><div class="rowbtns"><button class="yes">Iya, selamanya 💗</button><button class="ghost no">Nggak</button></div>`;
 const no=p.querySelector('.no'),yes=p.querySelector('.yes');let n=0;
 const lines=['Nggak','Yakin?','Coba pikir lagi','Klik yang satunya aja 💗'];
 const dg=e=>{e.preventDefault();n++;no.style.transform=`translate(${(Math.random()-.5)*160}px,${(Math.random()-.5)*80}px)`;no.textContent=lines[Math.min(n,3)];};
 no.onpointerenter=dg;no.onclick=dg;
 yes.onclick=()=>{
  burst(innerWidth/2,innerHeight/2,30);
  const c=document.createElement('canvas');c.width=600;c.height=600;const cx=c.getContext('2d');
  const g=cx.createLinearGradient(0,0,600,600);g.addColorStop(0,'#ff7aa8');g.addColorStop(1,'#c98a2b');cx.fillStyle=g;cx.fillRect(0,0,600,600);
  cx.fillStyle='#fff';cx.textAlign='center';cx.font='italic 60px Georgia';cx.fillText('💍',300,220);
  cx.font='italic 32px Georgia';cx.fillText('Aku berhasil namatin',300,300);
  cx.fillText('game buatan pacarku!',300,345);
  cx.font='italic 26px Georgia';cx.fillText('Bucin Adventure - '+state.girl+' Edition',300,420);
  const img=c.toDataURL('image/png');
  p.innerHTML=`<div class="reward" style="font-size:1.4rem">Yeay! Selamanya ya 💖</div><img src="${img}" style="width:100%;border-radius:16px;margin-top:10px"><div class="rowbtns"><a download="bucin-adventure.png" href="${img}"><button>Simpan gambar</button></a><button class="shr ghost">Bagikan</button></div>`;
  p.querySelector('.shr').onclick=async()=>{
   if(navigator.share){
    try{const blob=await(await fetch(img)).blob();const file=new File([blob],'bucin.png',{type:'image/png'});
     await navigator.share({files:[file],title:'Bucin Adventure',text:'Aku berhasil namatin game buatan pacarku! 💍'});}catch(e){}
   }else alert('Simpan gambarnya dulu, terus upload manual ke IG Story ya 💗');
  };
  done();
 };
}},
];


/* ================= LOBBY & NAVIGATION ================= */
const view=$('#view');

function renderLobby(){
  clearTimers();
  const total=GAMES.length,done=Object.keys(state.done).length;
  view.innerHTML=`
    <div class="lobbytitle">
      <h2>Bucin Adventure</h2>
      <p>${state.girl} Edition — ${done}/${total} game selesai</p>
    </div>
    <div class="prog"><i style="width:${done/total*100}%"></i></div>
    <div class="doors"></div>`;
  const doors=view.querySelector('.doors');
  GAMES.forEach(g=>{
    const b=document.createElement('button');
    b.className='door'+(state.done[g.id]?' done':'');
    b.innerHTML=`<span class="no">${g.id}</span><span class="ic">${g.ic}</span><span class="t">${g.t}</span>`;
    b.onclick=()=>openGame(g);
    doors.append(b);
  });
}

function openGame(g){
  clearTimers();
  view.innerHTML=`<button class="back ghost">‹ Lobby</button><div class="pg"></div>`;
  view.querySelector('.back').onclick=renderLobby;
  const pg=view.querySelector('.pg');
  g.run(pg,()=>{
    clearTimers();
    state.done[g.id]=1;saveState();
    burst(innerWidth/2,innerHeight*.4,20);
    const reward=REWARDS[g.id];
    setTimeout(()=>{
      view.innerHTML=`<div class="pg"><h2>Selesai! 🎉</h2>${reward?`<div class="reward">${reward}</div>`:''}<button class="rowbtns-btn" id="toLobby" style="margin-top:16px">Kembali ke Lobby</button></div>`;
      $('#toLobby').onclick=renderLobby;
    },400);
  });
}

renderLobby();
