import {styles} from "./styles.js";

const style = document.createElement('style');
const mainBLock = document.createElement("div");
const button = document.createElement("div");
const closeButton = document.createElement("div");
const iframe = document.createElement("iframe");

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
};

const showIframe = () => {
  iframe.style.display = 'block';
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