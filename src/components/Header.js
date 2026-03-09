import logo from "../assets/logo.png";
import letterS from "../assets/letter-S.png";
/* Было решено перенести partspro.png в папку public, потому что сервис netlify иначе не прогружал */
import otherLetters from "../../public/partspro.png";
import menu from "../assets/menu.png";
import styles from './Header.module.css';

export function Header() {
    return `
    <header class="${styles.header}">
      <a href="/" class="${styles['company-name']}" aria-label="На главную">
        <img src="${logo}" alt="логотип" class="${styles.logo}"/>
        <img src="${letterS}" alt="заглавная буква названия компании" class="${styles['first-letter']}"/>
        <img src="${otherLetters}" alt="остальные буквы названия компании"/>
      </a>
      <button class="${styles['menu-button']}"><img src="${menu}" alt="открыть меню"/></button>
       <nav class="${styles.menu}">
          <a href="/" class="${styles.link}">Главная</a>
          <a href="#catalog" class="${styles.link}">Каталог</a>
          <a href="#about" class="${styles.link}">О компании</a>
          <a href="#payment" class="${styles.link}">Оплата и доставка</a>
          <a href="#contacts" class="${styles.link}">Контакты</a>
        </nav>
    </header>
  `
}