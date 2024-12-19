
import React from 'react';
import ReactDOM from "react-dom/client";
const heading1=  React.createElement('h1', {
    id: 'title',
    key: 'title'

}, 'Hello React World');

const heading2=  React.createElement('h1', {
    id: 'title',
    key: 'key'


}, 'Another way to create React element ');

const container=  React.createElement('div', {
    id: 'container',
    key: 'class'

}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container)