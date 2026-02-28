
// ===== Scroll reveal (IntersectionObserver) =====
(function(){
  const addReveal = (selector) => {
    document.querySelectorAll(selector).forEach(el => {
      if(!el.classList.contains("reveal")) el.classList.add("reveal");
    });
  };

  addReveal("section");
  addReveal(".card");
  addReveal(".video-card");
  addReveal(".service-card");
  addReveal(".project-card");
  addReveal("header");
  addReveal("footer");

  const targets = Array.from(document.querySelectorAll(".reveal"));

  requestAnimationFrame(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.transitionDelay = (Math.random()*0.12).toFixed(2) + "s";
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(t => io.observe(t));

    // Ensure above-the-fold items animate too
    setTimeout(() => {
      targets.forEach(t => {
        const r = t.getBoundingClientRect();
        if(r.top < window.innerHeight && r.bottom > 0){
          t.classList.add("is-visible");
        }
      });
    }, 200);
  });
})();
