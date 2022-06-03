const csv_to_array = (data, comma = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(comma));

console.log(csv_to_array('a,b\nc,d')); 
console.log(csv_to_array('a;b\nc;d', ';')); 
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));