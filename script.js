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
    name: 'Jesus Sentado Decorativo para Borda de Monitor ou Prateleira',
    category: 'presentes',
    description: 'Enfeite religioso de Jesus Sentado, ideal para decorar borda de monitor, prateleiras, mesas ou nichos. Uma peça delicada e cheia de significado.',
    price: 'R$ 29,90',
    image: 'https://imgur.com/UtRhN47',
    shopee: 'https://shopee.com.br/Jesus-Sentado-Decorativo-Enfeite-Borda-Monitor-Prateleira-Mesa-Nicho-Decora%C3%A7%C3%A3o-Religiosa-Presente-PLA-i.1079674578.58267566209?extraParams=%7B%22display_model_id%22%3A159794828525%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Porta Treco Gatinho Oriental Organizador de Mesa',
    category: 'organização',
    description: 'Organizador multifuncional que combina praticidade, decoração e um design delicado para sua mesa ou ambiente.',
    price: 'R$ 39,90',
    image: 'https://i.imgur.com/DAoPXKg.jpg',
    shopee: 'https://shopee.com.br/Porta-Treco-Gatinho-Oriental-Organizador-de-Mesa-Porta-Objetos-Porta-Canetas-Decora%C3%A7%C3%A3o-Kawaii-Home-Office-i.1079674578.58263696265?extraParams=%7B%22display_model_id%22%3A119729492656%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Porta Objetos Elefantinho Fofo Organizador de Mesa',
    category: 'organização',
    description: 'Porta-objetos fofo em formato de elefantinho, ideal para organizar a mesa, porta-canetas, porta-treco e decoração kawaii para home office.',
    price: 'R$ 34,90',
    image: 'https://imgur.com/mh1mRhq',
    shopee: 'https://shopee.com.br/Porta-Objetos-Elefantinho-Fofo-Organizador-de-Mesa-Porta-Treco-Porta-Canetas-Decora%C3%A7%C3%A3o-Kawaii-Home-Office-Organizador-i.1079674578.58264424622?extraParams=%7B%22display_model_id%22%3A209624319810%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Suporte para Headset Gamer de Parede com Fita 3M',
    category: 'organização',
    description: 'Acessório prático para manter seu setup organizado sem precisar furar a parede. Compatível com o Pulse 3D do PS5 e diversos outros modelos de fones.',
    price: 'R$ 24,90',
    image: 'https://imgur.com/RZTkGbY',
    shopee: 'https://shopee.com.br/Wall-mounted-gaming-Headset-stand-with-3M-tape.-Compatible-with-PS5-Pulse-3D-and-various-other-models.-i.1079674578.58263373786?extraParams=%7B%22display_model_id%22%3A199191169639%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Saboneteira Minimalista em PLA Design Moderno em Ondas',
    category: 'organização',
    description: 'Saboneteira minimalista com design moderno em ondas, produzida em PLA, ideal para organizar e decorar o banheiro.',
    price: 'R$ 29,90',
    image: 'https://imgur.com/DQCs85m',
    shopee: 'https://shopee.com.br/Saboneteira-Minimalista-em-PLA-Design-Moderno-em-Ondas-Porta-Sabonete-para-Banheiro-Banzai-i.1079674578.58213605945?extraParams=%7B%22display_model_id%22%3A219623774446%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Enfeite de Morcego para Mesa de Halloween 19cm',
    category: 'halloween',
    description: 'Enfeite decorativo de morcego em impressão 3D, ideal para festas de Halloween e decorações temáticas.',
    price: 'R$ 29,90',
    image: 'https://imgur.com/qmIxjKx',
    shopee: 'https://shopee.com.br/Halloween-Bat-Table-Decoration-Ornament-Halloween-Party-Decorative-Bat-19cm-Themed-Decoration-PLA-3D-Bat-i.1079674578.22899671157?extraParams=%7B%22display_model_id%22%3A189193970455%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Balde de Abóbora Porta-Doces Halloween 15cm',
    category: 'halloween',
    description: 'Porta-doces decorativo em formato de abóbora de 15cm, perfeito para festas e decoração temática de Halloween.',
    price: 'R$ 34,90',
    image: 'https://imgur.com/BDdbfed',
    shopee: 'https://shopee.com.br/Halloween-Pumpkin-Candy-Holder-Table-Decoration-Party-Halloween-Ornament-Decorative-Candy-Bucket-15cm-3D-PLA-HALLOWEEN-i.1079674578.58267567641?extraParams=%7B%22display_model_id%22%3A119875334752%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Monstrinho Diabinho Porta-Doces Halloween 15cm',
    category: 'halloween',
    description: 'Porta-doces decorativo em formato de monstrinho/diabinho de 15cm, perfeito para festas e decoração temática de Halloween.',
    price: 'R$ 34,90',
    image: 'https://imgur.com/kvw9FTc',
    shopee: 'https://shopee.com.br/Monstrinho-Halloween-Porta-Doces-Mesa-Decora%C3%A7%C3%A3o-Festa-Enfeite-Halloween-Diabinho-Porta-Guloseimas-15cm-pla-dia-das-bruxa-i.1079674578.58267568899?extraParams=%7B%22display_model_id%22%3A228811920555%2C%22model_selection_logic%22%3A3%7D'
  },
  {
    name: 'Kit com 6 Dinossauros Articulados Colecionáveis 3D',
    category: 'presentes',
    description: 'Kit incrível com 6 dinossauros articulados em 3D (T-Rex, Velociraptor, Tricerátops, Anquilossauro, Parasaurolofo e Estegossauro). Perfeito para colecionar e presentear.',
    price: 'R$ 59,90',
    image: 'https://imgur.com/CWGXXfF',
    shopee: 'https://shopee.com.br/Kit-6-Dinossauros-Articulados-T-Rex-Velociraptor-Tricer%C3%A1tops-Anquilossauro-Parasaurolofo-Estegossauro-Colecion%C3%A1vel-3Dkit-i.1079674578.23699549312?extraParams=%7B%22display_model_id%22%3A129657310986%2C%22model_selection_logic%22%3A3%7D'
  }
];

const grid=document.querySelector('#productGrid'),search=document.querySelector('#search'),filter=document.querySelector('#filter'),empty=document.querySelector('#empty');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
function render(){const q=search.value.toLowerCase().trim(),cat=filter.value;const list=products.filter(p=>(cat==='todos'||p.category===cat)&&(!q||`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)));grid.innerHTML=list.map((p,i)=>`<article class="product"><a href="${esc(p.shopee)}" target="_blank" rel="noopener"><div class="pic">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`:`<div class="placeholder">${String(i+1).padStart(2,'0')}</div>`}</div></a><div class="body"><span class="tag">${esc(p.category)}</span><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="bottom"><span class="price">${esc(p.price)}</span><a class="buy" href="${esc(p.shopee)}" target="_blank" rel="noopener">Comprar na Shopee ↗</a></div></div></article>`).join('');empty.hidden=list.length>0}
search.addEventListener('input',render);filter.addEventListener('change',render);document.querySelectorAll('.cats button').forEach(b=>b.onclick=()=>{filter.value=b.dataset.cat;document.querySelector('#produtos').scrollIntoView({behavior:'smooth'});render()});document.querySelector('.menu').onclick=()=>document.querySelector('nav').classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.querySelector('nav').classList.remove('open'));document.querySelector('#year').textContent=new Date().getFullYear();render();
