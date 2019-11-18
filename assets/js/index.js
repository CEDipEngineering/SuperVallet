document.addEventListener('DOMContentLoaded', function() {

  let doc = document.querySelector('.main');
  doc.classList.add('hidden');

  let cover = document.querySelector('.cover');
  cover.classList.remove('hidden');

  setTimeout(function(){
    doc.classList.remove('hidden');
    cover.classList.add('hidden');
  }, 1200);

  console.log('Time delay complete');

  // Start code


  // End code.

})        
