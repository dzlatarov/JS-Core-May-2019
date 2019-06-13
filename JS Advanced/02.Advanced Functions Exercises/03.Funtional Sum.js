function sum(number){
   let sum = number;

   function add(anotherNumber){
       sum += anotherNumber;
       return add;
   }
    
   add.toString = function (){
       return sum;
   };
   
   return add;
}