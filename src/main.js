import './style.css';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { About } from './components/About';

try {
  const app = document.querySelector('#app');
  if (!app) throw new Error('Элемент #app не найден');
  
  app.innerHTML = `
    <main>
      ${Header()}
      ${Catalog()}
      ${About()}
    </main>
  `;
} catch (error) {
  console.error('Ошибка при инициализации приложения:', error);
}
