import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {data} from "./components/data/Data";



ReactDOM.render(<App info={data}/>, document.getElementById('root'));



