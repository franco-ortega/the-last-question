const body = document.querySelector('body')
const button = document.querySelector('button');

console.log(button.textContent);

button.addEventListener('click', () => {
  console.log('click');
  body.classList.toggle('dark-mode');

  button.textContent = button.textContent === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
})