console.log(window.innerHeight);

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, clientWidth } = document.documentElement;

  console.log(scrollTop);
  console.log(clientHeight);
  console.log("width", clientWidth);

  if (scrollTop > clientHeight) {
    window.document.getElementById("first_nav").style.display = "none";
    window.document.getElementById("second_nav").style.display = "flex";
  }
  if (scrollTop <= clientHeight) {
    window.document.getElementById("first_nav").style.display = "flex";
    window.document.getElementById("second_nav").style.display = "none";
  }
});
