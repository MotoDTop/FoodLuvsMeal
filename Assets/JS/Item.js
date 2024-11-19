document.getElementById('print').addEventListener('click', function() {
  window.print();
});


function changeColor() {
  const button = document.getElementById('favorite');
  if (button.style.backgroundColor === 'red') {
      button.style.backgroundColor = 'gray';
  } else {
      button.style.backgroundColor = 'red';
  }
  }