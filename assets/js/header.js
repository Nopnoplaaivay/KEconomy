const createHeader = (idPage) => {
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      const header = document.getElementById("header");
      header.innerHTML = html;
      if (idPage) {
        document.querySelector(`#${idPage}`).classList.add("active");
      }
      let hamburger = document.querySelector(".hamburger");
      console.log(hamburger);
      hamburger.onclick = () => {
        let navbar = document.querySelector(".nav-bar");
        navbar.classList.toggle("active");
      };
    });
};

export default createHeader;
