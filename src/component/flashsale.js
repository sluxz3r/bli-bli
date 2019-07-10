import React, { Component } from 'react';
import DataFlash from '../data/dataflash';
import '../assets/flashsale.css';

class FlashSale extends Component {
    render() {
        function startTimer(duration, display) {
            var timer = duration, hours, minutes, seconds;
            setInterval(function() {
              hours = parseInt(timer / 3600, 10);
              minutes = parseInt(timer % 3600 / 60, 10);
              seconds = parseInt(timer % 60, 10);
          
              hours = hours < 10 ? "0" + hours : hours;
              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;
          
              display.textContent = hours + ":" + minutes + ":" + seconds;
          
              if (--timer < 0) {
                timer = duration;
              }
            }, 1000);
          }
          
          window.onload = function() {
            var fiveMinutes = 60 * 60,
              display = document.querySelector('#time');
            startTimer(fiveMinutes, display);
          };
        return (
            <div className="div-utama">
                <div className="con-flash">
                    <div className="atas">
                        <p >Halo!</p>
                        <span>Yuk, cobain fitur terbaru Blibli!</span>
                    </div>
                    <div className="atas-1">
                        <img className="atas-1" src="https://www.static-src.com/siva/asset//05_2019/TukarTambah-Desktop.png?output-format=webp" />
                    </div>
                    <div>
                        <img  className="atas-1" src="https://www.static-src.com/siva/asset//05_2019/CnC-Desktop.jpg?output-format=webp" />
                    </div>
                    <div>
                        <img  className="atas-1" src="https://www.static-src.com/siva/asset//05_2019/FBB-Desktop.jpg?output-format=webp" />
                    </div>
                </div>
                <div>
                    <div  className="con-flash1">
                        <img src="https://www.static-src.com/siva/asset//10_2018/11QA_DesktopMobile_FlashsaleIcon_Default_1.png?output-format=webp" />
                        <span className="text1">FLASH SALE</span>
                        <span className="timer" id="time">01:00:00</span>
                        <button className="full">Lihat Selengkapnya</button>
                    </div>

                    {DataFlash.map( item =>
                    <div className="con-flash2">
                        <div>
                            <img src={item.img}/>
                            <p>{item.name}</p>
                            <span className="price">{item.price}</span><br/>
                            <span className="diskon">{item.diskon}</span>
                            <span className="persen">{item.persen}</span>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        );
    }


}

export default FlashSale;