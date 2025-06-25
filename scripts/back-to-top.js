document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 150) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });
});
