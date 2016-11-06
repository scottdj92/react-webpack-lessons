
//this will dynamically update our code every time we make a change to index.html
require('file-loader?name=[name].[ext]!../index.html');

//now we can start using react
//
//we'll copy over my old files to give the basic framework going

import React from 'react';
import {render} from 'react-dom';

//import modularized Sass - we'll add this later on
// import './_main.scss'

//import individual components
import SimpleHeader from './modules/header/SimpleHeader.jsx';

//then we create the backbone of the app

class App extends React.Component {
    render() {
        return (
            <div className='main'>
                {/* all react components are Higher Order Components */}
                <SimpleHeader/>
            </div>
        )
    }
}

//place the App component in the browser window - we still need the index.html to serve up.
render(<App/>, document.getElementById('app'));
