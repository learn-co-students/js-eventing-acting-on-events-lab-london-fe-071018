var dodger = document.getElementById('dodger');
 dodger.style.backgroundColor = 'pink';
 dodger.style.bottom = "0px";
 function moveDodgerRight(e){
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
   dodger.style.left = `${left + 1}px`
}
 document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }
    
  if (e.which === 39) {
    moveDodgerRight(e);
  }
}) 