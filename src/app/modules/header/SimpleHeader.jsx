import React from 'react';
import {render} from 'react-dom';

import './_SimpleHeader.scss';

class SimpleHeader extends React.Component {
    //we need a constructor, a componentDidMount, and a render function

    constructor(props) {
        //this will accept properties passed in through its props.
        super(props);
    }

    componentDidMount() {
        //this runs when the component is mounted (after construction, and before render)
    }

    render() {
        return (
            <div className='simple-header'>
                <h1>SimpleHeader</h1>
            </div>
        )
    }
}

//this is a very easy mistake for people to make here, as we're importing this in <App/>
export default SimpleHeader;
