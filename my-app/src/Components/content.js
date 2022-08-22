import React from 'react';
import '../css/content.css';
import BitcoinImage from '../images/bit-coin.svg';
import BackArrow from '../images/back-arrow.svg';

export default function Content() {

  function handleClick(){
    const styles = document.createElement("style");
    styles.innerHTML = `
      .box-right{
        display : none;
      }
      .box-create-basket{
        display: block;
      }
    `
    document.head.appendChild(styles);
  }

  function handleBackClick(){
    const styles = document.createElement("style");
    styles.innerHTML = `
      .box-create-basket{
        display: none;
      }
      .box-right{
        display: block;
      }
    `
    document.head.appendChild(styles);
  }

  function iconClick(){
    console.log("A icon is clicked");
  }

  return (
    <div className="container">
        <div className='box'>
            <div className='box-left'>
                <div className='box-left-heading'>
                  Automatic Investment Plan 
                </div>
                <div className='box-left-content'>
                Automatic Investment Plans (AIPs) help reduce the impact 
                <br/>
                of volatility on your investment.
                <br/><br/>
                By splitting the amount you invest across intervals, you no 
                <br/>
                  longer need to time the market to get the best prices. 
                </div>
            </div>
            <div className='box-right'>
              <div className='box-right-initial-heading'>
                Create Your AIP
              </div>
              <div className='box-right-heading'>
                <div className='box-right-heading-initial'>
                  Popular Baskets
                </div>
                <div className='box-right-heading-left'>
                <button className='btn-box-right-heading-left' onClick={handleClick}>Create New Basket</button>
              </div>
              </div>
              <div className='box-right-scrollable'>
                a
              </div>
              <div className='box-right-bottom'>
                <div className='box-right-bottom-heading'>
                  Popular Tokens
                </div>
                <div className='box-right-bottom-icon'>
                  <div className='icon-tray'>
                    <div className='icon-container'>
                      <div className='icon-container-image'>
                        <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                      </div>
                      <div className='icon-container-title'>
                        BTC
                      </div>
                    </div>
                    <div className='icon-container'>
                      <div className='icon-container-image'>
                        <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                      </div>
                      <div className='icon-container-title'>
                        BTC
                      </div>
                    </div>
                    <div className='icon-container'>
                      <div className='icon-container-image'>
                        <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                      </div>
                      <div className='icon-container-title'>
                        BTC
                      </div>
                    </div>
                    <div className='icon-container'>
                      <div className='icon-container-image'>
                        <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                      </div>
                      <div className='icon-container-title'>
                        BTC
                      </div>
                    </div>
                    <div className='icon-container'>
                      <div className='icon-container-image'>
                        <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                      </div>
                      <div className='icon-container-title'>
                        BTC
                      </div>
                    </div>
                    <div className='icon-container'>
                      <div className='icon-container-image'>
                        <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                      </div>
                      <div className='icon-container-title'>
                        BTC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='box-create-basket'>
              <div className='box-create-basket-button' onClick={handleBackClick}>
                <img src={BackArrow} alt="Back Arrow" className="box-create-basket-icon"/>
                <div className="box-create-basket-text">Create new Basket</div>
              </div>
              <div className='box-create-basket-container'>
                <button className='box-create-basket-container-btn'>
                  <div className='box-create-basket-container-icon'></div>
                </button>
                <button className='box-create-basket-container-btn'>
                  <div className='box-create-basket-container-icon'></div>
                </button>
                <button className='box-create-basket-container-btn'>
                  <div className='box-create-basket-container-icon'></div>
                </button>
                <button className='box-create-basket-container-btn'>
                  <div className='box-create-basket-container-icon'></div>
                </button>
              </div>
              <div className='box-select-token'>
                <div className='box-select-token-text'>Select Your Token</div>
              </div>
              <div className='token-container'>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
                <div className='icon-container-scroll' onClick={iconClick}>
                        <div className='icon-container-image'>
                          <img src={BitcoinImage} alt='BitcoinImage' className='Bitcoin-image'/>
                        </div>
                        <div className='icon-container-title'>
                          BTC
                        </div>
                </div>
              </div>
              <div className='button-container'>
                <button className='button-container-btn'>CREATE ALLOCATION</button>
              </div>
            </div>
        </div>
    </div>
  )
}
