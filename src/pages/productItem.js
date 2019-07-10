import React, { Component } from 'react';
import Data from '../data/data';
import { Link } from 'react-router-dom';
import KuponDiskon from '../component/kuponDiskon';
import Listproduk from '../component/listproduk';
import Deskripsi from '../component/deskripsi';
import '../assets/productItem.css';
import Rating from '../component/rating'

class productItem extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.pata = Data.find(item => item.id === this.id)
    }

    render() {
        return (
            <div className="body">
                <div className="body1">
                    
                    <div className="prod-div">
                        <Link className="home" to='/'  >
                            <a >Home</a>
                        </Link>
                        <img src="https://www.static-src.com/4.39.0-12/resources/images/assets/breadcrumb-arrow.png" />
                        <Link className="home" to={`/category/${this.pata.category}`}  >
                        <a className="home">{this.pata.category}</a>
                        </Link>
                    </div>

                    <div className="prod-div1">
                        <div className="prod-name">
                            {this.pata.name}
                        </div>
                        <div className="prod">
                            <img className="prod-img" src={this.pata.image}></img>
                        </div>
                        <div className="prod-list">
                            <div className="prod-div2">
                                <p>Harga </p>
                                <p>Blibli Rewards</p>
                                <p>Cicilan</p>
                                <p>Warna</p>
                                <p>Metode Pengiriman</p>
                            </div>
                            <div className="prod-div3">
                                <p style={{color:"#f7931E"}}>Rp {this.pata.price}</p>
                                <p>+ 35 poin Blibli Rewards</p>
                                <p>Cicilan tanpa kartu kredit</p>
                                <p>Kombinasi</p>
                                <p>
                                    <label><input type="radio"></input>Pengiriman Langsung<br/>
                                    <input type="radio"></input>Bayar di Tempat</label>
                                </p>
                            </div>
                        </div>

                        <div className="prod-foto">
                            <img src={this.pata.img1} />
                            <img src={this.pata.img2} />
                            <img src={this.pata.img3} />
                        </div>

                        <div className="prod-detail">
                            <div style={{backgroundColor:"white"}}>
                                <span className="jumlah">Jumlah</span>
                                <span className="input-jumlah">
                                    <button>-</button><input type="number"></input><button>+</button>
                                </span>
                            </div>
                            <div className="button-pay">
                                <button style={{backgroundColor:"#F99401"}}>BELI SEKARANG</button>
                                <button style={{backgroundColor:"#0095DC"}}>TAMBAH KE BAG</button>
                            </div>
                            <div style={{marginTop:"20px", paddingBottom:"20px"}}>
                                <img style={{width:"480px"}} src="https://cdn1.imggmi.com/uploads/2019/7/10/37f7bcad9d3b440f492671e4ecdb346b-full.png" />
                            </div>
                        </div>

                        <div className="prod-fitur">
                            
                        </div>

                        <div className="prod-kupon">
                            <KuponDiskon />
                        </div>

                    </div>

                    <div className="prod-rigth">
                        <Rating />
                    </div>

                    <div className="prod-lihat">
                        <Listproduk />
                    </div>
                    <div className="prod-des">
                        <Deskripsi />
                    </div>
                </div>
            </div>
        );
    }

}

export default productItem;