
function moveDodgerRight(){
let dodger=document.getElementById('dodger');

// dodger.style.backgroundColor='#000000'

document.addEventListener('keydown',el=>{
  let elValues=parseInt(el.which||el.details);
  console.log('elValues=',elValues);
  let dodgerMovement;
  console.log('dodgerMovement=',dodgerMovement);
  if (elValues===40){
    dodgerMovement=parseInt(dodger.style.bottom.slice(0,-2));
    dodger.style.bottom=`${dodgerMovement-5}px`;
  }
  else if (elValues===38){
    dodgerMovement=parseInt(dodger.style.bottom.slice(0,-2));
    dodger.style.bottom=`${dodgerMovement+5}px`;
  }
  else if (elValues===37){
    dodgerMovement=parseInt(dodger.style.left.slice(0,-2));
    dodger.style.left=`${dodgerMovement-5}px`;
  }
  else if (elValues===39){
    dodgerMovement=parseInt(dodger.style.left.slice(0,-2));
    dodger.style.left=`${dodgerMovement+5}px`;
  }
  
})

}

