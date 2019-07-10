import React, {Component} from 'react';
import '../assets/header2.css'
import '../assets/search.css'
import '../assets/buttonSearch.css'
import '../assets/user.css'

class Header2 extends Component{
    render() {
        return (
            <div className="header-big" id="header2">
                <div className="right-header">
                        <ul>
                            <li>
                                <button className="garis3" type="button"> 
                                    <img src="https://image.flaticon.com/icons/png/512/189/189790.png"></img>
                                 </button>
                                 <ul className="garis3-ul">
                                     <li>
                                        <p className="garis3-b" href="#">KATEGORI BELANJA</p><br/>
                                        <p className="garis3-a" href="#">Galery indonesia</p>
                                        <p className="garis3-a" href="#">BliBliMark</p>
                                        <p className="garis3-a" href="#">HandPhone & Tablet</p>
                                        <p className="garis3-a" href="#">Olahraga & Aktivitas Luar Ruangan</p>
                                        <p className="garis3-a" href="#">Komputer & Laptop</p>
                                        <p className="garis3-a" href="#">Kamera</p>
                                        <p className="garis3-a" href="#">Mainan & Video Games</p>
                                        <p className="garis3-a" href="#">Peralatan Elektronik</p>
                                        <p className="garis3-a" href="#">Fashion Pria</p>
                                        <p className="garis3-a" href="#">Home & Living</p>
                                        <p className="garis3-a" href="#">Fashion Wanita</p>
                                        <p className="garis3-a" href="#">Ibu & Anak</p>
                                        <p className="garis3-a" href="#">Tiket & Voucher</p>
                                        <p className="garis3-a" href="#">Kesehatan & Kecantikan</p>
                                        <p className="garis3-a" href="#">Otomotif</p>
                                        <p className="garis3-a" href="#">Tour & Travel</p>

                                     </li>
                                 </ul>
                            </li>
                        </ul>
                </div>
                <span className="mtix">
                    <p>Mtix |</p>
                </span>
                <span className="giias">
                    <p>GIIAS |</p>
                </span>
                <span className="wethe">
                    <p>We The Fest2019 |</p>
                </span>
                <li> <img src="https://apprecs.org/gp/images/app-icons/300/b2/com.gdn.blibli.mta.jpg" className="bag"></img> </li>
                <input className="search" type="text" placeholder="Apa yang anda cari hari ini ..?"></input>
                <button className="buttonSearch" type="submit"><img src="https://autofrontier.co.id/img/iconsearch.png" /></button>
                <div className="user">Hello Gusy!!</div>
                <p className="pp"><img src="https://massakublog.files.wordpress.com/2017/04/blibli-logo.png?w=532" /></p>                
                
            </div>
        );
    }
}

export default Header2;