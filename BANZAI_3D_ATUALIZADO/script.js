// BANZAI 3D — EDITE SOMENTE ESTA LISTA PARA CADASTRAR PRODUTOS.
const products=[
  {
    name: 'Nossa Senhora Aparecida Para Colorir Artesanato',
    category: 'presentes',
    description: 'Produzida em PLA branco, desenvolvida para artesanato, pintura e personalização (opções de 6cm, 10cm e 15cm).',
    price: 'A partir de R$ 29,90',
    image: 'https://i.imgur.com/ChrSK52.jpg',
    shopee: 'https://shopee.com.br/Nossa-Senhora-Aparecida-Para-Colorir-Artesanato-Pintura-Decora%C3%A7%C3%A3o-Religiosa-6cm-10cm-15cm-PLA-Branco-PLA-3D-IMPRESSAO-3D-i.1079674578.58217370922?extraParams=%7B%22display_model_id%22%3A238812933130%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'São Francisco de Assis Para Colorir Artesanato',
    category: 'presentes',
    description: 'Produzido em PLA branco, ideal para artesanato, pintura e decoração religiosa ou para presentear.',
    price: 'A partir de R$ 19,90',
    image: 'https://i.imgur.com/bCx7cuI.jpg',
    shopee: 'https://shopee.com.br/S%C3%A3o-Francisco-de-Assis-Para-Colorir-Artesanato-Pintura-Decora%C3%A7%C3%A3o-Religiosa-6cm-10cm-15cm-PLA-Branco-Impressao-3D-santo-i.1079674578.58217373536?extraParams=%7B%22display_model_id%22%3A119730401250%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Porta Treco Gatinho Oriental Organizador de Mesa',
    category: 'organização',
    description: 'Organizador multifuncional que combina praticidade, decoração e um design delicado para sua mesa ou ambiente.',
    price: 'R$ 39,90',
    image: 'https://i.imgur.com/DAoPXKg.jpg',
    shopee: 'https://shopee.com.br/Porta-Treco-Gatinho-Oriental-Organizador-de-Mesa-Porta-Objetos-Porta-Canetas-Decora%C3%A7%C3%A3o-Kawaii-Home-Office-i.1079674578.58263696265?extraParams=%7B%22display_model_id%22%3A119729492656%2C%22model_selection_logic%22%3A3%7D'
  }
];

const grid=document.querySelector('#productGrid'),search=document.querySelector('#search'),filter=document.querySelector('#filter'),empty=document.querySelector('#empty');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
function render(){const q=search.value.toLowerCase().trim(),cat=filter.value;const list=products.filter(p=>(cat==='todos'||p.category===cat)&&(!q||`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)));grid.innerHTML=list.map((p,i)=>`<article class="product"><a href="${esc(p.shopee)}" target="_blank" rel="noopener"><div class="pic">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`:`<div class="placeholder">${String(i+1).padStart(2,'0')}</div>`}</div></a><div class="body"><span class="tag">${esc(p.category)}</span><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="bottom"><span class="price">${esc(p.price)}</span><a class="buy" href="${esc(p.shopee)}" target="_blank" rel="noopener">Comprar na Shopee ↗</a></div></div></article>`).join('');empty.hidden=list.length>0}
search.addEventListener('input',render);filter.addEventListener('change',render);document.querySelectorAll('.cats button').forEach(b=>b.onclick=()=>{filter.value=b.dataset.cat;document.querySelector('#produtos').scrollIntoView({behavior:'smooth'});render()});document.querySelector('.menu').onclick=()=>document.querySelector('nav').classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.querySelector('nav').classList.remove('open'));document.querySelector('#year').textContent=new Date().getFullYear();render();