import React from 'react'

const Dice = () => {
  return (
    <div id="dice-canvas" className='one-third-of-board'>
                <div id="side1"> 
                    <div className="dot"></div> 
                </div>
                <div id="side2">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div id="side3">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                        
                </div>
                <div id="side4">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>     
                </div>
                <div id="side5">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div> 
                </div>
                <div id="side6">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div> 
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
    </div>
  )
}

export default Dice;