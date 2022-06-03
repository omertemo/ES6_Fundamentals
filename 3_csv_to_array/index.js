// const csv_to_array = (data, delimeter = ',', omitFirstRow = false) =>
//   data
//     .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
//     .split('\n')
//     .map(v => v.split(delimeter));

// console.log(csv_to_array('a,b\nc,d')); 
// console.log(csv_to_array('a;b\nc;d', ';')); 
// console.log(csv_to_array('head1,head2\na,b\nc,d', ',',true));



var string = "denemeler\ndiğer denelemer";
console.log(string.slice(string.indexOf('\n')+1));
