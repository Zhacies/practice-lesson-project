  
  const inputElement = document.querySelector('.js-input-button');
  const outcomElement = document.querySelector('.js-outcome');

  function isPalindromeIterative() {
  let valueinput = inputElement.value; 
  const cleanedStr = valueinput.toLowerCase().replace(/[^a-z0-9]/g,'');
  console.log(cleanedStr);
  inputElement.value = '';
  
}




