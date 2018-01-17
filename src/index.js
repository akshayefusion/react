import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from 'containers/App/App.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/material-design-iconic-font.min.css';
import './assets/css/animate.min.css';
import './assets/css/hover.css';
import './assets/css/reset.css';
import './assets/css/style.css';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
