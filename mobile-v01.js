(()=>{
if(!matchMedia('(max-width: 700px)').matches)return;
const video=document.querySelector('.visual video'),scene=document.querySelector('.scroll-scene');if(!video||!scene)return;
const motion=matchMedia('(prefers-reduced-motion: reduce)'),button=document.querySelector('.motion-toggle'),bar=document.querySelector('.progress span'),sticky=document.querySelector('.hero-sticky');
let enabled=false,priming=false,paused=false,target=0,ticking=false,lastSeek=0,retry=0;
video.muted=true;video.defaultMuted=true;video.playsInline=true;video.setAttribute('playsinline','');video.setAttribute('webkit-playsinline','');
function label(){if(!button)return;button.hidden=motion.matches;button.textContent=!enabled?'Ativar animação':paused?'Retomar animação':'Pausar animação';button.setAttribute('aria-pressed',String(paused));}
function state(){document.body.classList.toggle('static-motion',motion.matches);if(motion.matches){video.pause();document.body.classList.remove('video-ready')}label();schedule()}
function draw(){if(video.readyState>=2&&!motion.matches)document.body.classList.add('video-ready')}
function seek(){if(!enabled||paused||motion.matches||video.readyState<1||video.seeking)return;const now=performance.now();if(now-lastSeek<65){clearTimeout(retry);retry=setTimeout(seek,65-(now-lastSeek));return;}if(Math.abs(video.currentTime-target)>=1/24){try{lastSeek=now;video.currentTime=target}catch{}}}
function update(){ticking=false;const range=Math.max(1,scene.offsetHeight-sticky.offsetHeight);const top=parseFloat(getComputedStyle(sticky).top)||0;const p=Math.max(0,Math.min(1,(top-scene.getBoundingClientRect().top)/range));if(bar)bar.style.width=`${p*100}%`;if(Number.isFinite(video.duration)){target=Math.min(Math.max(0,video.duration-.06),Math.round(p*p*(3-2*p)*video.duration*24)/24);seek()}}
function schedule(){if(!ticking){ticking=true;requestAnimationFrame(update)}}
function prime(){if(enabled||priming||motion.matches)return;priming=true;let play;try{play=video.play()}catch{priming=false;label();return}Promise.resolve(play).then(()=>{video.pause();enabled=true;priming=false;draw();label();schedule()}).catch(()=>{priming=false;label()});}
video.addEventListener('loadedmetadata',schedule);video.addEventListener('loadeddata',()=>{draw();schedule()});video.addEventListener('canplay',()=>{draw();schedule()});video.addEventListener('seeked',()=>{draw();seek()});video.addEventListener('error',()=>{enabled=false;document.body.classList.remove('video-ready');label()});
window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);document.addEventListener('touchend',prime,{passive:true});document.addEventListener('pointerup',prime,{passive:true});
button?.addEventListener('click',()=>{if(!enabled){prime();return}paused=!paused;if(paused)clearTimeout(retry);label();if(!paused)schedule()});motion.addEventListener('change',()=>{state();if(!motion.matches)prime()});document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else schedule()});state();prime();
})();
