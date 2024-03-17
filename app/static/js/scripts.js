/*document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");

  var themeSwitcher = document.getElementById("theme-switcher");

  themeSwitcher.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var switchToTheme = currentTheme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", switchToTheme);
  }
});*/

/*НЕ ТРОГАТЬ*/

// document.addEventListener("DOMContentLoaded", function(event) {
//   var savedTheme = localStorage.getItem("theme");
//   document.documentElement.setAttribute("data-theme", savedTheme || "light");
//   var themeSwitcher = document.getElementById("theme-switcher");
//   themeSwitcher.onclick = function() {
//     var currentTheme = document.documentElement.getAttribute("data-theme");
//     var switchToTheme = currentTheme === "dark" ? "light" : "dark";
//     document.documentElement.setAttribute("data-theme", switchToTheme);
//     localStorage.setItem("theme", switchToTheme);
//   }
// });

document.addEventListener("DOMContentLoaded", function(event) {
  var savedTheme = localStorage.getItem("theme");
  var currentTheme = savedTheme || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  var themeSwitcher = document.getElementById("theme-switcher");
  var themeImage = document.getElementById("theme-image");

  themeSwitcher.onclick = function() {
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
    localStorage.setItem("theme", switchToTheme);

    // Изменяем путь к изображению в зависимости от текущей темы
    themeImage.src = switchToTheme === "dark" ? "/static/img/off.png" : "/static/img/on.png";


    currentTheme = switchToTheme; // Обновляем текущую тему
  }
});
