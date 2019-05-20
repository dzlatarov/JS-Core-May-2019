function solve() {
   document.getElementById('searchBtn').addEventListener('click',clickEvent);   

   function clickEvent(){          
      let inputValue = document.getElementById('searchField').value.toLowerCase();
      document.getElementById('searchField').value = '';

      let selectedRows = document.getElementsByClassName('select');  
      Array.from(selectedRows).forEach(x => x.classList.remove('select'));     

      let rows = Array.from(document.querySelector('table tbody').children);

      for(let row of rows){
         let cells = Array.from(row.children);

         for (let cell of cells){
            if(cell.textContent.toLowerCase().includes(inputValue)){
               row.classList.add('select');
            }            
         }         
      }              
   }
}