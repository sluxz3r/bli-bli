import React, {Component} from 'react';
import '../assets/header2.css'
import '../assets/search.css'
import '../assets/buttonSearch.css'
import '../assets/user.css'

class Header2 extends Component{
    render() {
        return (
            <div id="header2">
                <div className="left-header2">
                    <ul>
                        <li>
                            <img className="garis3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8AAAANDQ1eXl6GhobPz8+lpaVqamq6urrU1NSLi4sqKiqXl5cbGxshISGurq6QkJASEhIuLi7BwcG7u7ufn5+0tLQug/S+AAABAklEQVR4nO3dyZHDMAxFQYy8yZb3Lf9QpyaEOaBQoLoj+O9KqsQIAAAAAAAAAAAAAIBePss0ruUccf4Z2z0e1ROSTVG9IJ3C/hT2p7A/hf0p7E9hfwr7i6V6QbJnzNUTkr0idqftuE7H6mMwAAAAAAAAhjIfNuM6fCNu1VeYyfZxrZ6Q7LKCLxWqB6RT2J/C/hT2p7A/hf0p7G8FhZfqBcmusa+ekOwW8R36nOZdfQwGAAAAAADAUI5D/2NoF/GqvsJMNsezekKyZQVfKlQPSKewP4X9KexPYX8K+1PY3woKp+oFyR5xr56Q7O9Jq6Hf7PpUH4MBAAAAAAAAAAAAAPzTL2t3Q6zx7L8kAAAAAElFTkSuQmCC"></img>
                        </li>
                    </ul>
                </div>
                <input className="search" type="text" placeholder="Apa yang anda cari hari ini ..?"></input>
                <button className="buttonSearch" type="submit"><img src="https://autofrontier.co.id/img/iconsearch.png" /></button>
                <div className="user">Hello Gusy!!</div>
                <p><img src="https://massakublog.files.wordpress.com/2017/04/blibli-logo.png?w=532" /></p>                
                
            </div>
        );
    }
}

export default Header2;