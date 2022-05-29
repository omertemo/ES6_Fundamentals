//İki sınıftaki objeleri karşılaştırır

const karsilastir = (obj,source) => 
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])


console.log(karsilastir({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(karsilastir({ hair: 'long', beard: true, age: 25 }, { age: 25, hair: 'long', beard: true })); // false
console.log(karsilastir({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false


//#Source https://bit.ly/2neWfJ2