const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
    
    .artcoin-btn {
      display: inline-block;
      padding: 8px 15px 8px 30px;
      border-radius: 10px;
      color: #DD1A33;
      box-shadow: 0px 0px 5px 0px rgba(222,52,52,.5);
      cursor: pointer;
      margin: 10px 20px;
      background-image: url("./images/artcoin-red.svg");
      background-repeat: no-repeat;
      background-size: auto 40%;
      background-position: 10px center;
      font-family: 'Manrope', sans-serif;
    }
`;

const style = document.createElement('style');
style.innerHTML = styles;
document.head.appendChild(style);

let buttonsCollection = document.getElementsByClassName("artcoin-btn");

for (let i = 0; i < buttonsCollection.length; i++) {
  let element = buttonsCollection[i];

  element.addEventListener('click', function (event) {
    const price = event.target.getAttribute('price');
    const owner = event.target.getAttribute('owner');
    console.log(price, owner);
    alert(`${price} ${owner}`);
  })
}
