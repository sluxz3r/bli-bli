import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-1">
                    <div id="bantuan">
                        <ul>
                            <li>
                                <p>BANTUAN</p>
                                <a href="#">Pembayaran</a><br/>
                                <a href="#">Pengiriman</a><br/>
                                <a href="#">Status Pemesanan</a><br/>
                                <a href="#">Pengembalian Produk</a><br/>
                                <a href="#">BliBli Rewards</a><br/>
                                <a href="#">Cara Berbelanja</a><br/>
                                <a href="#">Hubungi Kami</a><br/>
                            </li>
                        </ul>
                    </div>
                    <div id="customer-care">
                        <p>CUSTOMER CARE</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer