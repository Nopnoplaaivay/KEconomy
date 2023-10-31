const createHeader = (idPage) => {
  fetch("header.html")
      .then((response) => response.text())
      .then((html) => {
          const header = document.getElementById("header");
          header.innerHTML = html;
      console.log(idPage)
      if (idPage) {
        document.querySelector(`#${idPage}`).classList.add('active');
        console.log(document.querySelector(`#${idPage}`))
      }
  });
} 

export default createHeader