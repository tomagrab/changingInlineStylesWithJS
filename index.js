//Function to make selecting DOM elemnents easier
function $(el) {
  return document.querySelector(el);
}

//Function to make sure the following
//code executes after the page has loaded
window.onload = () => {
  //Variable initialization
  const slider = $(".input-slider");
  const sliderValue = $(".slider-value");
  const demoBoxFiller = $(".demo-box-filler");
  const innerHtmlBox = $(".inner-html");

  //Show HTML of demo box
  innerHtmlBox.innerText = demoBoxFiller.outerHTML;

  //Set the default value of the slider to 10
  let defaultslider = 10;
  slider.value = defaultslider;
  sliderValue.innerText = "Slider value: " + defaultslider;

  //Function to do stuff when slider is moved
  slider.oninput = () => {
    //Change the background of the demo box
    demoBoxFiller.style.background =
      "linear-gradient(to right, blue " +
      slider.value +
      "%, white " +
      slider.value +
      "%, white 100%)";

    //Update the slider value when the slider is moved
    sliderValue.innerText = "Slider value: " + slider.value;

    //Update the paragraph when the demo box's HTML is changed
    innerHtmlBox.innerText = demoBoxFiller.outerHTML;
  };
};
