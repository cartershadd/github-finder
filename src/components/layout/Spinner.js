import React, { Fragment, Component } from 'react';
import spinner from './spinner.gif';

class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={spinner.gif} alt="Loading..." className='spinner'
                     style={{ width: '200px', margin: 'auto', display: 'block'}} />
            </div>
        );
    }
}

export default Spinner;
