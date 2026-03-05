import belt8 from "../assets/belt-8.png";
import belt12 from "../assets/belt-12.png";
import cabel1 from "../assets/cabel-1.png";
import cabel4 from "../assets/cabel-4.png";
import cabel6 from "../assets/cabel-6.png";
import absent from "../assets/absent.png";
import present from "../assets/present.png"
import styles from './Catalog.module.css';

const GOODS_PC = [
    {id: 0, src: cabel1, name: "тросс 1", description: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", present: true, length: 50},
    {id: 1, src: belt12, name: "ремень 12", description: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)", present: false, length: 0},
    {id: 2, src: cabel6, name: "тросс 6", description: "Стальной канат для лифта GRS 8X19S-NFC 1570", present: true, length: 50},
    {id: 3, src: cabel1, name: "тросс 1", description: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", present: true, length: 50},
    {id: 4, src: cabel4, name: "тросс 4", description: "Стальной канат для лифта GRS 8X19W-CWC 1570", present: true, length: 50},
    {id: 5, src: belt8, name: "ремень 8", description: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)", present: true, length: 50}
];

const GOODS_MOB = [
    {id: 0, src: cabel1, name: "тросс 1", description: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", present: true, length: 50},
    {id: 1, src: belt12, name: "ремень 12", description: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)", present: true, length: 50},
    {id: 2, src: cabel6, name: "тросс 6", description: "Стальной канат для лифта GRS 8X19S-NFC 1570", present: true, length: 50},
    {id: 3, src: cabel4, name: "тросс 4", description: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", present: true, length: 50}
];
export function Catalog() {
    const GOODS = (window.matchMedia('(min-width: 768px)').matches) ? GOODS_PC : GOODS_MOB;

    const goodsList = () => {
        return GOODS.map(product => `
            <div class="${styles.good}">
                <div class="${styles.photo}">
                    <img src="${product.src}" alt="${product.name}"/>
                </div>
                <div class="${styles.description}">
                    ${product.description}
                </div>
                <div class="${styles.present}">
                    <img src="${product.present ? present : absent}"/>
                    <span>${product.present ? 'В наличии '+product.length+' м.' : 'Под заказ'}</span>
                </div>
                <button class="${styles.more}">Подробнее</button>
            </div>
        `).join('')
    }


    return `
    <div>
        <h1 class="${styles.header}">Рекомендуемое оборудование</h1>
        <div class="${styles.catalog}">
            ${goodsList()}
            <button>Перейти в каталог</button>
        </div>

    </div>
  `
}