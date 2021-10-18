function $(el) {
  return document.querySelector(el);
}

window.onload = () => {
  const slider = $(".input-slider");
  const sliderValue = $(".slider-value");
  const demoBoxFiller = $(".demo-box-filler");
  let defaultslider = 10;

  console.log(demoBoxFiller.style.background);

  slider.value = defaultslider;
  sliderValue.innerText = "Slider value: " + defaultslider;

  slider.oninput = () => {
    demoBoxFiller.style.background =
      "linear-gradient(to right, blue " +
      slider.value +
      "%, white " +
      slider.value +
      "%, white 100%)";
    sliderValue.innerText = "Slider value: " + slider.value;
  };
};
