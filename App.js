const heading1=  React.createElement('h1', {
    id: 'title',
    key: 'title'

}, 'Hello React World');

const heading2=  React.createElement('h1', {
    id: 'title',
    key: 'key'


}, 'Another way to create React element ');

const contatiner=  React.createElement('div', {
    id: 'contatiner',
    key: 'class'

}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(contatiner)