const dropDown = document.getElementById('drop');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => { 
  dropDown.classList.toggle('hide');
  //dropDown.classList.add('animate__animated', 'animate__slideInLeft')
})