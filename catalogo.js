const search=document.querySelector('#search'),filter=document.querySelector('#filter'),cards=[...document.querySelectorAll('.product')];
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function applyFilter(){const q=normalize(search.value.trim());let total=0;cards.forEach(card=>{const show=(filter.value==='todos'||card.dataset.category===filter.value)&&normalize(card.dataset.search+' '+card.dataset.category).includes(q);card.hidden=!show;if(show)total++});document.querySelector('#count').textContent=`${total} produto${total===1?'':'s'}`;document.querySelector('#empty').hidden=total>0}
search?.addEventListener('input',applyFilter);filter?.addEventListener('change',applyFilter);
