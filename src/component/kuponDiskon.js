import React, {Component} from 'react';
import '../assets/kuponDiskon.css'

class KuponDiskon extends Component{
    render(){
        return(
            <div className="kupon">
                <div className="kupon-1">
                    <p>Dapatkan potongan harga spesial setiap hari</p>
                </div>
                <div className="kupon-2"> 
                    <p style={{fontWeight:"bold"}}>Disc Hingga 100rb Setiap Hari</p>
                    <p style={{color:"grey"}}>Berlaku Pemegang Kartu Standard Chartered Visa Platinum</p>
                </div>
                <div className="kupon-3">
                    <p style={{fontWeight:"bold"}}>Disc Hingga 100rb Setiap Hari</p>
                    <p style={{color:"grey"}}>Berlaku Pemegang Kartu Standard Chartered</p>
                </div>
            </div>
        );
    }
}

export default KuponDiskon;