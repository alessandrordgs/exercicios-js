const multiply = (x, y = 1) => {
  return x * y
}

function handletriangle() {
  const altura = document.querySelector('.number1').value
  const base = document.querySelector('.number2').value
 
  let area = multiply(altura,base) / 2;
  let perimeter = multiply(altura,2) + parseFloat(base)

  const result = document.querySelector('.result')

  result.innerHTML = `a área do triangulo é ${area} e o perimetro é ${perimeter} `
}

function handleSquare() {
   const altura = document.querySelector('.number-square1').value;
   const base = document.querySelector('.number-square2').value;

   let area = multiply(altura, base) 
   
   let perimeter = multiply (altura, 4) 
   
   if(altura != base){
    window.alert("Atenção o quadrado tem lados iguais")
   }else{
    const result = document.querySelector('.result-square')

    result.innerHTML = `a área do quadrado é ${area} e o perimetro ${perimeter}`
   }

}

function handleCircle(){
   const radius = document.querySelector('.number-circle').value

   let area = multiply(radius ** 2, Math.PI)

   let areaInt= parseInt(area)

   let perimeter = multiply(radius, 2)
   
   const result = document.querySelector('.result-circle')

   result.innerHTML = `A área do circulo é ${areaInt} e o perimetro ${perimeter}`
}

function handleNumberInt () {
  const number = document.querySelector('.numberInt').value
  
  let before = number - 1;

  let after = parseInt(number) + 1
  
  const result = document.querySelector('.result-number')

  result.innerHTML = `o numero que vem antes de ${number} é ${before} e o que vem depois é ${after}` 
}

// fazer html depois //

const years = () => {
  const age  = document.querySelector('.number-age')
  
  let month = age / 30;

  let  year = month /12; 
 
};

const fahrenheitForCelsius = (fah) => {
   console.log((fah - 32) * 5/9)
}

const volume = (radius, height) => {
  console.log( Math.PI * height * multiply(radius,2) )
}

const grades = () => {
  
}
