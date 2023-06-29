export const styles =  `
    #__main-block {
        min-width: 20px;
        min-height: 20px;
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
        background-color: #FFF;
    }
    
    #__button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 50px;
      cursor: pointer;
      background-image: url("https://cdn.jsdelivr.net/gh/likedevs/artcoin-cdn/images/artcoin.svg");
      background-color: #6101ea;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
      box-shadow: 0px 0px 5px 0px rgba(97, 1, 234);
    }
    
    #__a-c-iframe {
      width: 400px;
      height: 560px;
      border: none;
      outline: none;
      border-radius: 0 10px 0 0;
      box-shadow: 0px 0px 5px 0px rgba(97, 1, 234, 0.4);
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
      background-color: #6101ea;
      display: none;
    }
`;