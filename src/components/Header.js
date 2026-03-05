import logo from "../assets/logo.png";
import letterS from "../assets/letter-S.png";
import partspro from "../assets/partspro.png";
import menu from "../assets/menu.png";
import styles from './Header.module.css';

export function Header() {
    return `
    <header class="${styles.header}">
      <div class="${styles['company-name']}">
        <img src="${logo}" alt="логотип" class="${styles.logo}">
        <img src="${letterS}" alt="заглавная буква названия компании" class="${styles['first-letter']}">
        <img src="${partspro}" alt="остальные буквы названия компании">
      </div>
      <button class="${styles.menu}"><img src="${menu}"/></button>
    </header>
  `
}