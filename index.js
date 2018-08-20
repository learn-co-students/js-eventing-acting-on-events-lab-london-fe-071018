const dodger = document.getElementById('dodger')

function moveDodgerLeft(){ //left
  const leftNumbers = dodger.style.left.replace('px', '')
  const left = parseInt(leftNumbers, 10)
  dodger.style.left = `${left - 1}px`
}

function moveDodgerUp(){ //up
  const bottomNumbers = dodger.style.bottom.replace('px', '')
  const bottom = parseInt(bottomNumbers, 10)
  dodger.style.bottom = `${bottom + 1}px`
}

function moveDodgerRight(){ //right
  const leftNumbers = dodger.style.left.replace('px', '')
  const left = parseInt(leftNumbers, 10)
  dodger.style.left = `${left + 1}px`
}

function moveDodgerDown(){ //down
  const bottomNumbers = dodger.style.bottom.replace('px', '')
  const bottom = parseInt(bottomNumbers, 10)
  dodger.style.bottom = `${bottom - 1}px`
}
  
const moves = {
  37: moveDodgerLeft,
  38: moveDodgerUp,
  39: moveDodgerRight,
  40: moveDodgerDown
}

document.addEventListener('keydown', function(e) {
  (moves[e.which] || (_ => console.log(e.which)))();
})