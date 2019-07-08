import React, {Component} from 'react';
import DataInspirasi from '../data/DataInspirasi';
import '../assets/inspirasi.css';

class Inspirasi extends Component {
    render(){
        return(
            <div className="inspirasi">
                <div>
                    <h3>Inspirasi Belanja</h3>
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