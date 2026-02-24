(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-nav]');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // FAQ: zamykaj inne (opcjonalne, subtelne)
  const faq = document.querySelector('[data-faq]');
  if(faq){
    const items = Array.from(faq.querySelectorAll('details'));
    items.forEach(d => {
      d.addEventListener('toggle', () => {
        if(d.open){
          items.forEach(x => { if(x !== d) x.open = false; });
        }
      });
    });
  }
})();