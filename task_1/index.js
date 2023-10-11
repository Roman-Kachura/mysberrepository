import {encoded, translations} from './data.js'

const decoding = (encoded, translations) => {
  const exceptions = new Set(['groupId', 'service', 'formatSize', 'ca']);
  return encoded.map(item => {
    for (let key in item) {
      if (exceptions.has(key)) continue;
      if (key.slice(key.length - 2, key.length) === 'Id') {
        if (translations[item[key]]) {
          item[key] = translations[item[key]]
        }
      }
    }
    return item;
  })
}

const decoded = decoding(encoded, translations);


console.log(decoded)
