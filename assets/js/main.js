

document.addEventListener('DOMContentLoaded', function() {

  let doc = document.querySelector('.main');
  doc.classList.add('hidden');

  let cover = document.querySelector('.cover');
  cover.classList.remove('hidden');

  //Insert code here:

  let iframe = document.querySelector('iframe')
  let button = document.querySelector('button')

  button.addEventListener('click', function() {
    if(iframe.requestFullscreen) {
      iframe.requestFullscreen()
    }
    else if(iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen()
    }
    else if(iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen()
    }
    else if(iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen()
    }
  })

  //End code here.

  let doc = document.querySelector('.main');
  doc.classList.remove('hidden');

  let cover = document.querySelector('.cover');
  cover.classList.add('hidden');
})
