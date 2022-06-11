const JSON_to_CSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter), //Kolon başlıkları oluştur
    ...arr.map(obj => // aynı objedekileri kümele 
      columns.reduce( //belirtilen dizinin 
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''                   
      )
    )
  ].join('\n');



console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y','z'], ';'));