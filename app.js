const colors = [
  'green',
  'red',
  'rgba(133,122,200)',
  'rgb(110,64,170)',
  'rgb(97,84,200)',
  'rgb(76,110,219)',
  'rgb(54,140,225)',
  'rgb(36,170,216)',
  'rgb(26,199,194)',
  'rgb(29,222,163)',
  'rgb(48,238,131)',
  'rgb(82,246,103)',
  'rgb(126,246,88)',
  'rgb(126,246,88)'
]

const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
  //get number random between 0 - 3
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
