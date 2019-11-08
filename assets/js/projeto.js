document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect("https://codesign-2019-a.firebaseio.com/")

  let doc = document.querySelector('.main');
  doc.classList.add('hidden');

  let cover = document.querySelector('.cover');
  cover.classList.remove('hidden');

  db.download('/', function(data) {
    const val = coDesExtract();
    var id = val['id'];
    map = MapDataBase(data);
    let cat = map[id];

    console.log(cat);
    data['portfolio'][cat]["projetos"][id]['projectkey'] = id
    let context = data['portfolio'][cat]["projetos"][id];

    console.log(context);

    let body = {};
    body["main-body"] = {};
    for (line in data['portfolio'][cat]["projetos"][id]["main-body"]) {
      body["main-body"]["subtitles"] = data['portfolio'][cat]["projetos"][id]["main-body"]["subtitles"]
      body["main-body"]["text"] = data['portfolio'][cat]["projetos"][id]["main-body"]["text"]
    }

    let titles = [];
    let contents = [];
    let constructorBody = {}

    for (let title in body['main-body']['subtitles']) {
      titles.push(body['main-body']['subtitles'][title]);
    }
    for (let content in body['main-body']['text']) {
      contents.push(body['main-body']['text'][content]);
    }
    for (let i = 0; i<titles.length; i++) {
      constructorBody[i] = {'subtitle':titles[i],
      'body':contents[i]}
    }

    let members = [];
    let qualifications = [];
    let constructorMenu = {}

    for (let member in context['menu']['members']) {
      members.push(context['menu']['members'][member]);
    }
    for (let qualification in context['menu']['qualification']) {
      qualifications.push(context['menu']['qualification'][qualification]);
    }
    for (let i = 0; i<members.length; i++) {
      constructorMenu[i] = {'member':members[i],
      'qualification':qualifications[i]}
    }


    let mainBodyBuilder = {'main-body': constructorBody};
    let menuBuilder = {'menuBuilder': constructorMenu};

//  console.log(titles);
// console.log(contents);
//  console.log(mainBodyBuilder);
console.log(menuBuilder);

coDesReplace('.main-title', context);
coDesReplace('.sub-header', context);
coDesReplace('.main-body', mainBodyBuilder);
coDesReplace('.menu', menuBuilder);

let doc = document.querySelector('.main');
doc.classList.remove('hidden');

let cover = document.querySelector('.cover');
cover.classList.add('hidden');

})

  function MapDataBase(object) {
    map = {}
    for(let directory in object["portfolio"]) {
      for (let project in object["portfolio"][directory]["projetos"]) {
        map[project] = directory;
      }
    }
    return map
  }



})
