import React from 'react';
import "../css/header.css";
import LogoImage from '../images/vauld logo.svg';
import DashboardImage from '../images/svg/dashboard.svg';
import WalletImage from '../images/svg/wallet.svg';
import InvestImage from '../images/svg/invest.svg';
import ExchangeImage from '../images/svg/exchange.svg';
import HistoryImage from '../images/svg/history.svg';
import RefferalImage from '../images/svg/referral.svg';
import SupportImage from '../images/svg/support.svg';

export default function header() {
  return (
    <div className="header">
        <div className="header-body">
            <div className="header-logo">
              <img src={LogoImage} alt="Logo"/>
            </div>
            <div className="header-content">
              <div className="header-content-dashboard spacer">
                <a className="header-content-dashboard-content">
                  <img className="image" src={DashboardImage} alt="Dashboard"/>
                  <span className="header-content-dashboard-text">Dashboard</span>
                </a>
              </div>
              <div className="header-content-wallet spacer">
                <a className="header-content-wallet-content">
                  <img className="image" src={WalletImage} alt="Wallet"/>
                  <span className="header-content-wallet-text">Wallet</span>
                </a>
              </div>
              <div className="header-content-invest spacer">
                <a className="header-content-invest-content">
                  <img className="image" src={InvestImage} alt="Invest"/>
                  <span className="header-content-invest-text">Invest</span>
                </a>
              </div>
              <div className="header-content-exchange spacer">
                <a className="header-content-exchange-content">
                  <img className="image" src={ExchangeImage} alt="Exchange"/>
                  <span className="header-content-exchange-text">Exchange</span>
                </a>
              </div>
              <div className="header-content-history spacer">
                <a className="header-content-history-content">
                  <img className="image" src={HistoryImage} alt="History"/>
                  <span className="header-content-history-text">History</span>
                </a>
              </div>
              <div className="header-content-refferal spacer">
                <a className="header-content-refferal-content">
                  <img className="image" src={RefferalImage} alt="Refferal"/>
                  <span className="header-content-refferal-text">Refferal</span>
                </a>
              </div>
            </div>
            <div className="header-support">
              <a className="header-support-content">
                <img src={SupportImage} alt="Support"/>
              </a>
            </div>
        </div>
    </div>
  )
}
