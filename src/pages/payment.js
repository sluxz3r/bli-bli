import React, {Component} from 'react';
import '../assets/payment.css';

class Payment extends Component {
    render(){
        window.scrollTo(0, 0);
        let total = this.props.location.total
        let	reverse = total.toString().split('').reverse().join(''),
            ribua 	= reverse.match(/\d{1,3}/g);
            
	    let ribuan	= ribua.join('.').split('').reverse().join('');
        
        return(
            <div className="body">
                <div className="pay-header">
                    <p>Pembayaran</p>
                </div>
                    <div className="payment">
                        <h4>Blipay</h4>
                        <input id="1" type="radio" name="rad"/>
                        <label for="1">Saldo Blipay</label>
                        <p>Saldo Anda Rp.-  Anda Miskin</p>
                        
                        <h4>Transfer Bank</h4>
                            <input id="2" type="radio" name="rad"/>
                            <label for="2">Bank BRI</label>
                            <br />
                            <input id="2" type="radio" name="rad"/>
                            <label for="2">Bank ARI</label>
                            <br />
                            <input id="2" type="radio" name="rad"/>
                            <label for="2">Bank BAMBANK</label>
                        
                        <h4>Mau ke Indomaret Juga Boleh</h4>
                    </div>
                <div className="ringkasan">
                    <h4>Ringkasan Pemesanan</h4>
                    <button> &#9883; Bayar Sekarang</button>
                    <div className="ring-total">
                        <span>Total Belanja</span>
                        <span style={{paddingLeft:'120px'}}>Rp {ribuan}</span>
                        <h3>HARAP DI BAYAR!!!</h3>
                        <img style={{width:'220px', paddingLeft:'45px'}} src="https://cdn-images-1.medium.com/max/1200/1*7ugSMISUo8vYf9ILG6VmuQ.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;