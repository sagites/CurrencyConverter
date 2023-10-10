const initialAmount = document.querySelector('.initialAmount');
const initial = document.querySelector('.initial');
const final = document.querySelector('.final');
const button = document.querySelector('.button');
const convertedAmount = document.querySelector('.convertedAmount');

button.addEventListener('click', getAmount)



var myHeaders = new Headers();
myHeaders.append("apikey", "CNIipBBE1LtwVh1WIkK7JA6iHCNafz4U");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function getAmount (){
    fetch(`https://api.apilayer.com/fixer/convert?to=${final.value}&from=${initial.value}&amount=${initialAmount.value}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    var data = result;
    convertedAmount.value = data.
  })
  .catch(error => console.log('error', error));
} 