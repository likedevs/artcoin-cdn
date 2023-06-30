const buttonsCollection = document.getElementsByClassName("artcoin-btn");

for (let i = 0; i < buttonsCollection.length; i++) {
  let element = buttonsCollection[i];
  buttonsCollection[i].style.backgroundColor = "red";
  element.addEventListener('click', function (event) {
    const price = event.target.getAttribute('price');
    const owner = event.target.getAttribute('owner');
    console.log(price, owner);
    alert(`${price} ${owner}`);
  })
}