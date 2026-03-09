import belt8 from "../assets/belt-8.png";
import belt12 from "../assets/belt-12.png";
import cabel1 from "../assets/cabel-1.png";
import cabel4 from "../assets/cabel-4.png";
import cabel6 from "../assets/cabel-6.png";
import absent from "../assets/absent.png";
import present from "../assets/present.png"
import styles from './Catalog.module.css';

const GOODS = [
    {
        id: 0,
        src: cabel1,
        name: "тросс 1",
        description: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
        present: true,
        length: 50,
        imageHeight: {
            PC: 260,
            mobile: 200.9
        }
    },
    {
        id: 1,
        src: belt12,
        name: "ремень 12",
        description: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
        present: false,
        length: 0,
        imageHeight: {
            PC: 251
        }
    },
    {
        id: 2,
        src: belt12,
        name: "ремень 12",
        description: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
        present: true,
        length: 50,
        imageHeight: {
            mobile: 194
        }
    },
    {
        id: 3,
        src: cabel6,
        name: "тросс 6",
        description: "Стальной канат для лифта GRS 8X19S-NFC 1570",
        present: true,
        length: 50,
        imageHeight: {
            PC: 256,
            mobile: 197.8
        }
    },
    {
        id: 4,
        src: cabel1,
        name: "тросс 1",
        description: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
        present: true,
        length: 50,
        imageHeight: {
            PC: 252
        }
    },
    {
        id: 5,
        src: cabel4,
        name: "тросс 4",
        description: "Стальной канат для лифта GRS 8X19W-CWC 1570",
        present: true,
        length: 50,
        imageHeight: {
            PC: 242,
            mobile: 202
        }
    },
    {
        id: 6,
        src: belt8,
        name: "ремень 8",
        description: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
        present: true,
        length: 50,
        imageHeight: {
            PC: 314
        }
    }
];

export function Catalog() {

    let isMobile = window.innerWidth <= 767;
    
    const goodsList = () => {
        return GOODS.map(product => `
            <article  class="${styles.good} ${product.id == 1 || product.id == 4 || product.id == 6 ? styles['only-PC'] : '' } ${product.id == 2 ? styles['only-mobile'] : ''}">
                <h2 class="visually-hidden">${product.name}</h2>
                <div class="${styles.photo}">
                    <img src="${product.src}" alt="${product.name}" style="height: ${isMobile && product.imageHeight.mobile ? product.imageHeight.mobile : ( product.imageHeight.PC ? product.imageHeight.PC : 0)}px; ${product.id==6 ? 'position: relative; top: -72px;' : ''}"/>
                </div>
                <div class="${styles.info}">
                    <div class="${styles.description}">
                        ${product.description}
                    </div>
                    <div class="${styles.present}">
                        <img src="${product.present ? present : absent}"/>
                        <span>${product.present ? 'В наличии ' + product.length + ' м.' : 'Под заказ'}</span>
                    </div>
                    <button class="${styles['good-more']} ${styles['catalog-button']}">Подробнее</button>
                </div>
            </article>
        `).join('')
    }

    

    function renderCatalog() {
        const catalogElement = document.querySelector(`.${styles.catalog}`);
        if (catalogElement) {
            catalogElement.innerHTML = goodsList();
        }
    }

    window.addEventListener('resize', () => {
        const isStillMobile = window.innerWidth <= 767;
        if (isStillMobile !== isMobile) {
            isMobile = isStillMobile;
            renderCatalog();
        }
    });

    return `
    <section class="${styles.container}" aria-labelledby="catalog-title">
        <h1 id="catalog-title" class="${styles.header}">Рекомендуемое оборудование</h1>
        <div class="${styles.catalog}" role="list">
            ${goodsList()}
        </div>
        <button class="${styles['catalog-button']} ${styles['catalog-more']}">Перейти в каталог</button>
    </section>
  `
}