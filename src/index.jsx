import React from 'react';
import ReactDOM from 'react-dom';
import { Lista } from './views';

class App extends React.Component{
    render(){
        return(
            <section>
            <Lista />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))