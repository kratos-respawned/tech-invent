const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetElement = entry.target;

      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        targetElement.classList.add("brighten");
        targetElement.classList.remove("dull");
      } else {
        targetElement.classList.add("dull");
        targetElement.classList.remove("brighten");
      }
    });
  },
  { threshold: 1 }
);

const cards = document.querySelectorAll(".timelineCard");

cards.forEach((card) => {
  observer.observe(card);
});
