import React, {Component} from 'react';
import Data from '../data/data';

class pageCategory extends Component{
    constructor(props){
        super(props);
        this.category = props.match.params.category;
        this.pata = Data.filter(item => item.category === this.category)
      }

    render(){
        return(
            <div>
                {console.log(this.pata)}
                {this.pata.map(item => 
               <div>
                   <img src={item.image}/>
                   {item.name}
               </div>
               )}
            </div>
        );
    }

}

export default pageCategory;