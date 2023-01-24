const SLIDES = document.querySelectorAll('.slide');


for(let item of SLIDES){
  console.log(item)
  item.addEventListener('click', () => {
    clearActive()
        item.classList.add('active');
  })
}

function clearActive(){
  for(let item of SLIDES){
    item.classList.remove('active')
  }
}

