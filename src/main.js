import './style.css';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { About } from './components/About';

document.querySelector('#app').innerHTML = `
  <div>
    ${Header()}
    ${Catalog()}
    ${About()}
  </div>
`
