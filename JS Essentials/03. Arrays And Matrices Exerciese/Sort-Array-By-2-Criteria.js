function solve(array){    
    console.log(array.sort(function (a,b){
      return a.length - b.length || a.localeCompare(b)
    }).join('\n'));
}