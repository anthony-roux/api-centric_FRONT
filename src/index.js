import React from 'react';
import ReactDOM from 'react-dom';

import Article from './components/Article/Article.jsx';


const element = <div>API Centric - FRONT</div>;
const root = document.getElementById('root');
ReactDOM.render(element, root);

ReactDOM.render((
  <React.StrictMode>
    <Article />
  </React.StrictMode>
), root);
