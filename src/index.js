import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from './containers/site-header.jsx';
import SiteMain from './containers/site-main.jsx';
import SiteFooter from './containers/site-footer.jsx';
import * as serviceWorker from './serviceWorker';
import './styles/theme.scss';

ReactDOM.render(<SiteHeader />, document.getElementById('header'));
ReactDOM.render(<SiteMain />, document.getElementById('main'));
ReactDOM.render(<SiteFooter />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
