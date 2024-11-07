let num = parseInt(prompt('Enter a number'));
let isPrime='Prime';
for (let i=2;i*i<=num;i++){
  if(num%i===0) {
    isPrime = 'not Prime';
    break;
  }
}
document.querySelector('#target').innerHTML = `Your number is ${isPrime}`;