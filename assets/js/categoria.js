

document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect("https://codesign-2019-a.firebaseio.com/")

  let doc = document.querySelector('.main');
  doc.classList.add('hidden');

  let cover = document.querySelector('.cover');
  cover.classList.remove('hidden');


  db.download('/', function(data) {
    const val = coDesExtract();
    console.log(val);
    const id = val['id'];
    let context = data['portfolio'][id];
    let dict = {"origin":id};
    data['portfolio'][id]['cat'] = id;
    console.log(id);
    console.log(context);

    coDesReplace('.main-title', context);
    coDesReplace('.sub-header', context);
    coDesReplace('.menu', context);


    let doc = document.querySelector('.main');
    doc.classList.remove('hidden');

    let cover = document.querySelector('.cover');
    cover.classList.add('hidden');


  })
})
