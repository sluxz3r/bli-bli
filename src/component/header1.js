import React, { Component } from 'react';
import '../assets/header1.css';

class Header1 extends Component {
    render() {
        return (
            <div className="header1">
                <div className="left-header">
                    <ul>
                        <li>
                            <img src="http://www.gelarukm.com/assets/category/handphone.png" className="hp"></img>
                            <a className="mobile" href="#">Mobile App Download &#709;</a>
                            <ul>
                                <li>
                                    <img src="https://www.materialui.co/materialIcons/action/android_grey_192x192.png"/><br/>
                                    <a href="#">Android</a>
                                </li>
                                <li>
                                    <img src="https://www.mbsit.co.uk/wp-content/uploads/2018/07/apple_icon-icons.com_62745.png?w=640"/><br/>
                                    <a href="#">iOS</a>
                                </li>
                                <li>
                                    <img src="https://cdn2.iconfinder.com/data/icons/ourea-icons/256/OS_Windows_8_256x256-32.png" /><br/>
                                    <a href="#">Windows</a>
                                </li>
                                <idiv className="dwn">Download Bangsad!!!!!</idiv>
                            </ul>
                           
                        </li>
                    </ul>
                </div>
                <div className="right-header">
                <ul>
                        <li>
                            <a className="bantuan" href="#">Bantuan 24x7  &#709;</a>
                            <ul className="bantuan-ul">
                                <li className="bantuan-1">
                                    <p className="bantuan-a" href="#">Pembayaran</p><br/>
                                    <p className="bantuan-a" href="#">Pengiriman</p><br/>
                                    <p className="bantuan-a" href="#">Pengembalian</p><br/>
                                    <p className="bantuan-a" href="#">Panduan Lainnya</p>
                                </li>
                            </ul>                        
                           
                        </li>
                    </ul>
                    <a>Jual di Blibli.com</a>
                    <a>Blibli Rewards</a>
                    <a>Cek Status Pesanan</a>
                </div>
            </div>
        );
    }
}

export default Header1;