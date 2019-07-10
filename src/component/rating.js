import React, { Component } from "react";
import '../assets/rating.css'

class Rating extends Component {
    render() {
        return(
            <div>
                <div className="rating">
                    <p className="dijual">
                        Dijual & disediakan oleh
                        <p className="blibli">Blibli.com</p>
                        <img src="https://cdn3.iconfinder.com/data/icons/inficons-set-2/512/star-ratings-512.png" className="iconRating"></img>
                        <span>
                            Rating 
                            <span className="sembilan">95 </span>
                             / 100
                        </span><br />
                        <img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-location-icon-png-image_317888.jpg" className="iconLocation"></img>
                        <span className="alamat">Kota Jakarta Selatan, DKI Jakarta</span>
                        </p>
                </div>
                <div className="rating2">
                    <span className="metode">Metode Pengiriman</span>
                    <p>Tersedia di lokasi Anda</p>
                    <p className="almt">DKI Jakarta,Kota Jakarta Barat,Palmerah,Slipi</p>
                    <a href="#" className="ganti">Ganti lokasi</a>
                    <p className="standard">
                        <img src="data:image/png;base64,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" className="centang"></img>
                        Standard
                        <p className="gratis"> Gratis</p>
                    </p>
                    <p className="hari">2-3 hari</p>
                    
                </div>
            </div>
        )
    }
}

export default Rating