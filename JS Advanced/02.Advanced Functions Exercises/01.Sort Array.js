function sort(array, sortFormat){
   if(sortFormat === 'asc'){
       return array.sort((a,b) => a - b);
   } else if(sortFormat === 'desc'){
       return array.sort((a,b) => b - a);
   }
}