function validate() {
   let inputElement = document.getElementById('email');
   let inputValue = inputElement.value;
   inputElement.addEventListener('change',checkInput);

   let pattern = /^([a-z]+)@([a-z]+)\.([a-z]{2,3})$/;

   function checkInput () {
        if(!pattern.test(this.value)){
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
   }   
}