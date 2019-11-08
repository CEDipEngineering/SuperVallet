document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect("https://codesign-2019-a.firebaseio.com/")

  let doc = document.querySelector('.main');
  doc.classList.add('hidden');

  let cover = document.querySelector('.cover');
  cover.classList.remove('hidden');

  db.download('/', function(data) {
    console.log(data);

    let context = data;
    coDesReplace('.menu', context);



    let doc = document.querySelector('.main');
    doc.classList.remove('hidden');

    let cover = document.querySelector('.cover');
    cover.classList.add('hidden');
  })
})
