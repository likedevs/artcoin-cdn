import {styles} from "./styles-f0cf2314a2ddc276c7a4ae77c13da56a.js";

const style = document.createElement('style');
const mainBLock = document.createElement("div");
const button = document.createElement("div");
const closeButton = document.createElement("div");
const iframe = document.createElement("iframe");


const connectCasperToSite = () => {
  if (window.CasperWalletProvider) {
    const CasperWalletProvider = window.CasperWalletProvider;
    const provider = CasperWalletProvider();

    provider.requestConnection().then(connected => {
      if (!connected) {
        alert("Couldn't connect to wallet");
      } else {
        provider.getActivePublicKey().then(publicKey => {
          // this.setPublicKey = publicKey;
          // this.storePublicKey(publicKey);
          // this.isLogged = true;
        }).catch(error => {
          alert(error.message);
        });
      }
    });
  } else {
    alert('install Casper extension!');
  }
}

style.innerHTML = styles;
document.head.appendChild(style);

mainBLock.setAttribute("id", "__main-block");
document.body.appendChild(mainBLock);

button.setAttribute("id", "__button");
mainBLock.appendChild(button);

closeButton.setAttribute("id", "__a-c-close-button");
mainBLock.appendChild(closeButton);

iframe.setAttribute("src", "https://front.artcoin.media/");
iframe.setAttribute("id", "__a-c-iframe");
mainBLock.appendChild(iframe);

let buttonsCollection = document.getElementsByClassName("artcoin-btn-sell-service");

for (let i = 0; i < buttonsCollection.length; i++) {
  let element = buttonsCollection[i];

  element.addEventListener('click', function (event) {
    connectCasperToSite();

    const price = event.target.getAttribute('price');
    const owner = event.target.getAttribute('owner');
    iframe.setAttribute("src", `https://front.artcoin.media/?publicKey=${owner}&total=${price}`);
    hideButton();
    showIframe();
    showCloseButton();
  })
}

let buttonsBuyCollection = document.getElementsByClassName("artcoin-btn-buy-service");

for (let i = 0; i < buttonsBuyCollection.length; i++) {
  let element = buttonsBuyCollection[i];

  element.addEventListener('click', function (event) {
    connectCasperToSite();

    const price = event.target.getAttribute('price');
    iframe.setAttribute("src", `https://front.artcoin.media/?receive_total=${price}`);
    hideButton();
    showIframe();
    showCloseButton();
  })
}

button.onclick = () => {
  hideButton();
  showIframe();
  showCloseButton();
};

closeButton.onclick = () => {
  showButton();
  hideIframe();
  hideCloseButton();
};

const hideIframe = () => {
  iframe.style.display = 'none';
  mainBLock.style.background = 'transparent';
};

const showIframe = () => {
  iframe.style.display = 'block';
  mainBLock.style.background = '#FFF';
};

const hideButton = () => {
  button.style.display = 'none';
};

const showButton = () => {
  button.style.display = 'block';
};

const hideCloseButton = () => {
  closeButton.style.display = 'none';
};

const showCloseButton = () => {
  closeButton.style.display = 'block';
};