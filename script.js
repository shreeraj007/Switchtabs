const htmlElements = document.querySelectorAll("li");

htmlElements.forEach((li) => {
  li.addEventListener("click", ({ target }) => {
    target.parentNode.className = "";
    target.parentNode.classList.add(target.id);
  });
});
