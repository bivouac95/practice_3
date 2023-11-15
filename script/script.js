//включение меню
document.getElementById("amongus").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("menu-active");
});

document.getElementById("anti-amongus").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("menu-active");
});

//стилизация навигационных кнопок
const navItem = document.querySelectorAll(".navigation-link");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    for (let j = 0; j < navItem.length; j++) {
      navItem[j].classList.remove("navigation-link--active");
    }
    navItem[i].classList.add("navigation-link--active");
  });
}

//читать далее
document.getElementById("article__read-more").addEventListener("click", () => {
  document.getElementsByClassName("main__article")[0].classList.toggle("main__article--active")
  });
