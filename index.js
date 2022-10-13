const dodger = document.getElementById('dodger');

//moves the DODGER to the left
function moveDodgerLeft() {
          const leftNumbers = dodger.style.left.replace("px", "");
          const left = parseInt(leftNumbers, 10);
      
          dodger.style.left = `${left - 1}px`;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
})

//moves the DODGER to the right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 1}px`;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
})
