import logo from "../assets/logo.png";
import letterS from "../assets/letter-S.png";
import partspro from "../assets/partspro.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import styles from './Header.module.css';

export function Header() {
    return `
    <header class="${styles.header}">
      <div class="${styles['company-name']}">
        <img src="${logo}" alt="логотип" class="${styles.logo}">
        <img src="${letterS}" alt="заглавная буква названия компании" class="${styles['first-letter']}">
        <img src="${partspro}" alt="остальные буквы названия компании">
      </div>
      <button class="${styles['menu-button']}"><img src="${menu}"/></button>
       <nav class="${styles.menu}">
          <a href="/" class="${styles.link}">Главная</a>
          <a href="/" class="${styles.link}">Каталог</a>
          <a href="/" class="${styles.link}">О компании</a>
          <a href="/" class="${styles.link}">Оплата и доставка</a>
          <a href="/" class="${styles.link}">Контакты</a>
        </nav>
    </header>
  `
}