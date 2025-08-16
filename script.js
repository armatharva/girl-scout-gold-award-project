// Highlight the active nav link based on filename
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();

// Footer year
(function(){
  const y = document.querySelector('#year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Accordion behavior (Q&A page)
(function(){
  document.querySelectorAll('.acc-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.acc-item');
      item.classList.toggle('open');
    });
  });
})();
