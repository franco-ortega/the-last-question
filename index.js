const body = document.querySelector('body');
const darkButton = document.querySelector('#dark');
const rainbowButton = document.querySelector('#rainbow');

const modeEnum = {
  dark: {
    mode: 'dark-mode',
    title: 'Dark Mode'
  },
  rainbow: {
    mode: 'rainbow-mode',
    title: 'Rainbow Mode'
  },
  light: {
    title: 'Light Mode'
  }
}

// if a "non-light mode" option is on, then the default textContent for that mode has been replaced with 'Light Mode'
const isThisModeOn = (button) => {
  return button.textContent === 'Light Mode';
}

const turnOffMode = (button, mode) => {
  body.classList.toggle(mode.mode)
  button.textContent = mode.title;
}

dark.addEventListener('click', () => {
  body.classList.toggle(modeEnum.dark.mode);
  darkButton.textContent = darkButton.textContent === modeEnum.dark.title ? modeEnum.light.title : modeEnum.dark.title;

  if(isThisModeOn(rainbow)) turnOffMode(rainbowButton, modeEnum.rainbow); 
});

rainbow.addEventListener('click', () => {
  body.classList.toggle(modeEnum.rainbow.mode);
  rainbowButton.textContent = rainbowButton.textContent === modeEnum.rainbow.title ? modeEnum.light.title : modeEnum.rainbow.title;

  if(isThisModeOn(dark)) turnOffMode(darkButton, modeEnum.dark);
});