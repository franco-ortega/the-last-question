import modeEnum from './enum.js'

const body = document.querySelector('body');
const darkButton = document.querySelector('#dark');
const rainbowButton = document.querySelector('#rainbow');

// if a "non-light mode" option is on, then the default textContent for that mode has been replaced with 'Light Mode'
const isThisModeOn = (button) => {
  return button.textContent === modeEnum.light.title;
}

const turnOffMode = (button, mode) => {
  body.classList.toggle(mode.mode)
  button.textContent = mode.title;
}

darkButton.addEventListener('click', () => {
  body.classList.toggle(modeEnum.dark.mode);
  darkButton.textContent = darkButton.textContent === modeEnum.dark.title ? modeEnum.light.title : modeEnum.dark.title;

  if(isThisModeOn(rainbowButton)) turnOffMode(rainbowButton, modeEnum.rainbow); 
});

rainbowButton.addEventListener('click', () => {
  body.classList.toggle(modeEnum.rainbow.mode);
  rainbowButton.textContent = rainbowButton.textContent === modeEnum.rainbow.title ? modeEnum.light.title : modeEnum.rainbow.title;

  if(isThisModeOn(darkButton)) turnOffMode(darkButton, modeEnum.dark);
});