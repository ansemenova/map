import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import SimpleExample from "./SimpleExample"
import MapDemo from "./MapDemo";


const position = [56.326887, 44.005986]

class App extends Component {
    render() {
        return (
            <div>
                {/*<SimpleExample/>*/}
                <MapDemo/>
            </div>
        );
    }
}

export default App;

