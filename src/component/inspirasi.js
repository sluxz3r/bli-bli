import React, {Component} from 'react';
import DataInspirasi from '../data/DataInspirasi';
import '../assets/inspirasi.css';

class Inspirasi extends Component {
    render(){
        return(
            <div className="inspirasi">
                <div  className="diiv">
                    <span className="inspirasi-text">Inspirasi Belanja</span>
                </div>

                <div>
                    {DataInspirasi.map( item =>
                        <img className="large" src={item.img}/>
                     )}
                </div>

                <div>
                    {DataInspirasi.map( item =>
                    <img className="small" src={item.small} />

                    )}
                </div>
            </div>
        );
    }
}

export default Inspirasi;