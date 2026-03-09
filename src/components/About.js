import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import styles from './About.module.css';

export function About() {
    return `
    <section class="${styles.about}" aria-labelledby="about-title">
        <h2 id="about-title" class="${styles.header}">О компании</h2>
        <div class="${styles.panno}">
            <img src="${pic1}" alt="картинка 1"/>
            <img src="${pic2}" alt="картинка 2"/>
            <img src="${pic3}" alt="картинка 3"/>
        </div>
        <div class="${styles.info}">
            <h3 class="${styles['main-info']}">
                Компания «SPARTSPRO» специализируется на поставках лифтового оборудования, комплектующих и запчастей для лифтов и эскалаторов ведущих мировых и российских производителей.
            </h3>
            <ul class="${styles.list}">
                <li>Гарантия качества – работаем только с проверенными производителями.</li>
                <li>Собственный склад – более 30 000 наименований в наличии для оперативных отгрузок.</li>
                <li>Соблюдение сроков – приоритет компании: быстрая обработка заказов и доставка без задержек.</li>
            </ul>
            <p>Мы обеспечиваем бесперебойные поставки для ваших проектов. Оставьте заявку – и получите коммерческое предложение в кратчайшие сроки!</p>
                <div class="${styles.more}">
                    <button class="${styles['about-button']}">Подробнее</button>
                </div>
        </div>
        
    </section>
    `
}
