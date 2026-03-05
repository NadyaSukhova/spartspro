import './style.css';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';

document.querySelector('#app').innerHTML = `
  <div>
    ${Header()}
    ${Catalog()}
  </div>
`
