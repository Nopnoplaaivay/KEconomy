const slideshow = (container) => {
  const bnav = document.querySelector(container);
  const listImage = bnav.querySelector(".list-imgs");
  const imgs = bnav.querySelectorAll(".list-imgs img");
  const length = imgs.length;
  const btnL = bnav.querySelector(".btn-l");
  const btnR = bnav.querySelector(".btn-r");
  console.log(bnav);
  let cur = 0;

  const handleChangeSlide = () => {
    if (cur == length - 1) {
      cur = 0;
      let width = imgs[0].offsetWidth;
      listImage.style.transform = `translateX(0px)`;
      bnav.querySelector(".active").classList.remove("active");
      bnav.querySelector(".idx-" + cur).classList.add("active");
    } else {
      ++cur;
      let width = imgs[0].offsetWidth;
      listImage.style.transform = `translateX(${width * -1 * cur}px)`;
      bnav.querySelector(".active").classList.remove("active");
      bnav.querySelector(".idx-" + cur).classList.add("active");
    }
  };

  let handleEventChangeSlide = setInterval(handleChangeSlide, 3000);

  btnR.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000);
  });

  btnL.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    if (cur == 0) {
      cur = length - 1;
      let width = imgs[0].offsetWidth;
      listImage.style.transform = `translateX(${width * -1 * cur}px)`;
      bnav.querySelector(".active").classList.remove("active");
      bnav.querySelector(".idx-" + cur).classList.add("active");
    } else {
      --cur;
      let width = imgs[0].offsetWidth;
      listImage.style.transform = `translateX(${width * -1 * cur}px)`;
      bnav.querySelector(".active").classList.remove("active");
      bnav.querySelector(".idx-" + cur).classList.add("active");
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000);
  });
};

export default slideshow