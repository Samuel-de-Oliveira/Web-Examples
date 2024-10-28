document.body.onresize = () => {
  let Height = window.innerHeight;
  let Width  = window.innerWidth;
  console.log(`${Width}X${Height}`);
  document.querySelector("#resize").innerHTML = `Screen: ${Width}X${Height}`;
};

document.querySelector('#formulario').onsubmit = () => {
  const resultado = document.querySelector('#resultado');
  const massa     = document.querySelector('#massa');
  const altura    = document.querySelector('#altura');

  let IMC = parseFloat(massa.value) / (parseFloat(altura.value) * 2);
  resultado.innerHTML = `Seu IMC é de ${IMC.toFixed(2)}`;
};
