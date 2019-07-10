import React, { Component } from 'react';
import Data from '../data/data';
import { Link } from 'react-router-dom';
import '../assets/productItem.css';

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
                                <p style={{color:"#f7931E"}}>{this.pata.price}</p>
                                <p>+ 35 poin Blibli Rewards</p>
                                <p>Cicilan tanpa kartu kredit</p>
                                <p>Kombinasi</p>
                                <p>
                                    <input type="radio"></input>
                                </p>
                            </div>
                        </div>

                        <div className="prod-foto">Foto Tambahan</div>

                        <div className="prod-detail">
                            <div>
                                <span>Jumlah</span>
                                <button>-</button><input type="number" /><button>+</button>
                            </div>
                            <div>
                                <button>BELI SEKARANG</button>
                                <button>TAMBAH KE BAG</button>
                            </div>
                        </div>

                        <div className="prod-fitur">
                            <div className="product-feature">
                                <div>Fitur Produk</div>
                                <div>
                                    <ul>
                                        <li>gsrg</li>
                                        <li>sgrg</li>
                                        <li>gsrg</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-service">
                                <div>Pelayanan Produk</div>
                                <div>
                                    <ul>
                                        <li>
                                        15 hari Pengembalian Produk <a>info</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        <div className="prod-kupon">Kupon Diskon</div>

                    </div>

                    <div className="prod-rigth">
                        KOMPONEN RAHMAD
                    </div>
                </div>
            </div>
        );
    }

}

export default productItem;