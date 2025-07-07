document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('prev-button');
  const nextBtn = document.getElementById('next-button');
  const pageLinks = document.querySelectorAll('.page-link');
  let currentPage = parseInt(window.location.pathname.match(/index(\d+)\.html/)?.[1]) || 1; // Detecta a página atual

  // Redireciona para a página específica
  function goToPage(page) {
    if (page < 1 || page > 5) return; // Limite das páginas
    if (page === 1) {
      window.location.href = 'index.html';
    } else {
      window.location.href = `index${page}.html`;
    }
  }

  // Botão "Anterior" (<<)
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goToPage(currentPage - 1);
  });

  // Botão "Próximo" (>>)
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goToPage(currentPage + 1);
  });

  // Links numéricos (1, 2, 3...)
  pageLinks.forEach(link => {
    if (link.dataset.page !== 'next') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = parseInt(link.dataset.page);
        goToPage(page);
      });
    }
  });
});