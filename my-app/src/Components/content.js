import React from 'react';
import '../css/content.css'

export default function Content() {
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
              </div>
            </div>
          </div>
    </div>
  )
}
