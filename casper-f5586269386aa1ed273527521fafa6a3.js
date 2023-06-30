// import {styles} from "./styles.js";

const styles = `
    #__main-block {
        min-width: 20px;
        min-height: 20px;
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
    }
    
    #__button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 50px;
      cursor: pointer;
      background-image: url("https://cdn.jsdelivr.net/gh/likedevs/artcoin-cdn/images/artcoin.svg");
      background-color: #dd1a33;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
      box-shadow: 0px 0px 5px 0px rgba(222,52,52,1);
    }
    
    #__a-c-iframe {
      width: 400px;
      height: 560px;
      border: none;
      outline: none;
      border-radius: 0 10px 0 0;
      box-shadow: 0px 0px 5px 0px rgba(238,238,238,1);
      display: none;
    }
    
    #__a-c-close-button {
      position: absolute;
      top: -29px;
      right: -29px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-image: url("https://cdn.jsdelivr.net/gh/likedevs/artcoin-cdn/images/close-btn.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 70%;
      cursor: pointer;
      background-color: #dd1a33;
      display: none;
    }
`;
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