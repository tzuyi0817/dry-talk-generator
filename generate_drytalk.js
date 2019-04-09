function sample(options) {
  const index = Math.floor(Math.random() * options.length)
  return options[index]
}

function generateDryTalk(options) {
  // define variables
  const target = ['engineer', 'designer', 'entrepreneur']

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // create a collection to pick up
  let collection = []

  if (options.job === 'engineer') {
    collection = collection.concat(target[0], sample(task.engineer), sample(phrase))
  }

  if (options.job === 'designer') {
    collection = collection.concat(target[1], sample(task.designer), sample(phrase))
  }

  if (options.job === 'entrepreneur') {
    collection = collection.concat(target[2], sample(task.entrepreneur), sample(phrase))
  }

  //error 
  if (collection.length < 1) {
    return '請選擇一位要講幹話的對象!'
  }

  // start generating
  let dryTalk = ''
  dryTalk += '身為一個' + collection + '吧！'

  // return generate
  return dryTalk
}

module.exports = generateDryTalk