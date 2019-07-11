import React, {Component} from 'react';
import Data from '../data/data';
import '../assets/deskripsi.css';

class Deskripsi extends Component{
    // constructor(props) {
    //     super(props);
    //     this.id = props.match.params.id;
    //     this.pata = Data.find(item => item.id === this.id)
    // }

    render(){
        return(
            <div>
                <div className="des-prod">
                    <span style={{color:"white"}}>Deskripsi</span>
                    <span>Spesifikasi</span>
                    <span>Diskusi</span>
                    <span>Ulasan</span>
                </div>
                <div className="des-kiri">
                    <h4>Produk Kamu</h4>
                    <p className="des-p">Masih di tahun yang sama 2019, Realme kembali memperkenalkan debut smartphone teranyar mereka yaitu Realme 3 Pro. Realme yang dikenal sebagai sub-brand dari OPPO dengan bangga menghadirkan smartphone yang ditenagai dapur pacu yang menjanjikan. Dengan berbekal prosesor Snapdragon tentu harapannya Realme 3 Pro dapat memberikan kecepatan yang maksimal. Dan menariknya disebutkan kecepatan chip octa-core Realme 3 Pro dapat memberikan kinerja hingga 2.2 GHz. Sementara untuk memperlancar pengalaman grafis yang mulus maka dititipkan juga mesin multi-core AI yang disandingkan bersamaan dengan GPU Adreno 616.
                    {/* {this.pata.description} */}
                    </p>
                </div>
            </div>
        );
    }
}

export default Deskripsi;