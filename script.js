document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const scrollOffset = rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2);

        window.scrollTo({
          top: scrollOffset,
          behavior: "smooth"
        });
      }
    });
  });
});
