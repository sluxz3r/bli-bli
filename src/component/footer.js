import React, { Component } from 'react';
import '../assets/footer.css'

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-1"> 
                    <div className="bantuan">
                        <p>BANTUAN</p>
                        <ul>
                            <li>Pembayaran</li>
                            <li>Pengiriman</li>
                            <li>Status Pemesanan</li>
                            <li>Pengembalian Produk</li>
                            <li>BliBli Rewards</li>
                            <li>Cara Berbelanja</li>
                            <li>Hubungi Kami</li>
                        </ul>
                    </div>
                    <div className="cos">
                        <p>CUSTOMER CASE</p>
                        <ul>
                            <li>Buka 24 jamsetiap hari</li>
                            <li>082277289592</li>
                            <li>customercase22@gmail.com</li>
                            <button className="btn-bantuan" type="button">Saya butuh bantuan</button>
                        </ul>

                     </div>
                    <div className="info">
                        <p>INFO BLIBLI.COM</p>
                        <ul>
                            <li>Tentang BliBli.com</li>
                            <li>Blog BliBli Friends</li>
                            <li>Siaran Pers</li>
                            <li>Kabar Terbaru</li>
                            <li>Daftar Brand</li>
                            <li>Karir</li>
                        </ul>
                    </div>
                    <div className="kerjasama">
                        <p>KERJA SAMA DENGAN BLIBLI.COM</p>
                        <ul>
                            <li>Affliate Program</li>
                            <li>Jual di Blibli.com</li>
                            <li>B2B Program</li><br/>
                            <li>BLIBLI.COM FAMILY</li>
                            <img src="https://static.tiket.photos/image/upload/v1561521366/logo/2019/06/26/9f93149e-3662-4fa5-b49e-17ca042a07306b857b17194f6a16ae038550abbc310d.png"></img>
                        </ul>
                    </div>
                    <div className="ikuti">
                        <p>IKUTI KAMI</p>
                        <ul>
                            <li><img src="https://www.pngkey.com/png/detail/0-7766_social-media-icons-facebook-twitter-youtube-icons-png.png"></img></li><br />
                            <li>UNDUH APLIKASI KAMI</li>
                            <img src="https://www.seekpng.com/png/small/122-1226734_android-app-store-png-app-store-and-android.png" className="apk"></img>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer