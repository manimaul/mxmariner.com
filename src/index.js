import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Manual from "./Manual";
import News from "./News";
import Privacy from "./Privacy";
import App from "./App";
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <div>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/privacy" component={Privacy}/>
                <Route exact path="/manual" component={withRouter(Manual)}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/manual/:sectionId" component={withRouter(Manual)}/>
            </div>
        </Router>
    </div>
), document.getElementById('content'));

registerServiceWorker();
