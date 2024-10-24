document.body.onresize = () => {
  let Height = window.innerHeight;
  let Width  = window.innerWidth;
  console.log(`${Width}X${Height}`);
  document.querySelector("#resize").innerHTML = `Screen: ${Width}X${Height}`;
};
