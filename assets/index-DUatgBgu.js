(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))e(A);new MutationObserver(A=>{for(const n of A)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function l(A){const n={};return A.integrity&&(n.integrity=A.integrity),A.referrerPolicy&&(n.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?n.credentials="include":A.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(A){if(A.ep)return;A.ep=!0;const n=l(A);fetch(A.href,n)}})();const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAoCAYAAABTsMJyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAANtJREFUeAHt2dEJwjAQBuD/NBu4gHSPajcx7mC3cIhsYnSQ0gEUN8gZX6WF5EV/6n0QCuFefugdJJGmaRTcwjAMx5LCFRbEwrBaVBg3sz/mFUFARK6ltXNhYukEYWI9w8rCsHI1xfe+9WtgD1JVYUSlU8EBpKxnWFkYVlUDYHO++fzx+LFn314U0n3u22/GysKwmhwAqrrNPDiMWSwpnAyTT3fde4FDQOGp13qGlYVh5VJK7LcwY2mhy2MvYCGsZ1hZGFZSU/w47YLY7cx3WBhW/3s7o6IRCbRP7S+Kfi79HVFxwQAAAABJRU5ErkJggg==",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAJBJREFUeAHl07ENwjAQBdD/bQ+QEdKghFSRsgBsQiZkBLIALQUNHoEJ/AkFhRHd5Spedy5O+l8+dsMkbKhAc4ADl6WpmqQscoFBLCFXS98L77frDCP/+BTa3TCeYBALFv75l2LhEQakmkKcqzcY9f3YKsTHZ3brNHX76QKDNXrzHTetBRxg8Ks/r4tSxoYoPl855CYWcZhTQwAAAABJRU5ErkJggg==",h="data:image/png;base64,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",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhVJREFUeAHtmT9P20AYxp/37AQVhIRKCSIMNVJRnDD0aKjUreUTwEconwDGboFP4HbqGrZ2Sz5BOwapf9ylNVJVPHpC6dAmRL273lUEUcRABDi2dL/BPt17sn56bb/LQ7jAA58/c8jdAMlNgDyMEQWE+hYyKfaiKIzP12i48Dw+MzHFGvr0cwJ7Bek2o6gTY4zUao+5lIIrQgOMtU5+/dmL47BrajSULk6675hSX/o9sTMsZgWP66YOnF39Bp4Ofov1M7/KyqOgUq2/RMbxq/VmZWUtMGvX97mnJDZPemIVGac/IXZ05498f63t3CstBlJh/8f3zx1knG6S9GfnFu5IKM4kgUPIEDmBSdlkRBuo1OoKOcM4M+QUK542VjxtcivuYkT0KDrSNw83T3z49ePSVQ+P3nF1S2N/xOeO3PHDb5+u3JXbxP6caWPF08bO8RvAzvFLsXP8mljxtLHiaWPn+LWxczzjWPG0seJpk2dxFS9VV+8jJywvcw4TIepLu0C0hZzgFBg3+ScjyVoE2jaRITKOcVSghglsWRR9eK/39ouTToCMcxogt03K7JiN6cX5jiPYC53A+dNTpYNuN+kjQ5hOl8rl11D0ZNATW8bvn7iJ4bT8W1fQultgwd25hZ+zM/M4Pk4SjBFPZ7ClUnnbLbI3pOjASP8XiZ/HBLYgZ1fHiA91kWOsqFh3ua2lW6ef9Bl/AUrpydk6JkG6AAAAAElFTkSuQmCC",u="_header_173a7_1",E="_logo_173a7_29",C="_menu_173a7_45",f="_link_173a7_87",s={header:u,"company-name":"_company-name_173a7_19",logo:E,"first-letter":"_first-letter_173a7_37",menu:C,"menu-button":"_menu-button_173a7_53",link:f};function b(){return`
    <header class="${s.header}">
      <a href="/" class="${s["company-name"]}" aria-label="На главную">
        <img src="${d}" alt="логотип" class="${s.logo}"/>
        <img src="${m}" alt="заглавная буква названия компании" class="${s["first-letter"]}"/>
        <img src="${h}" alt="остальные буквы названия компании"/>
      </a>
      <button class="${s["menu-button"]}"><img src="${p}" alt="открыть меню"/></button>
       <nav class="${s.menu}">
          <a href="/" class="${s.link}">Главная</a>
          <a href="#catalog" class="${s.link}">Каталог</a>
          <a href="#about" class="${s.link}">О компании</a>
          <a href="#payment" class="${s.link}">Оплата и доставка</a>
          <a href="#contacts" class="${s.link}">Контакты</a>
        </nav>
    </header>
  `}const w="/assets/belt-8-BkeQlHB6.png",c="/assets/belt-12-CwnMm6VU.png",g="/assets/cabel-1-Cay51GfM.png",R="/assets/cabel-4-BVHHVqSP.png",Y="/assets/cabel-6-BrtgzStb.png",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAWlJREFUeAGVUrFKw1AUve8lrSK1JNTBuhilo2AdBSn5An+hdXORpoPFTTsIUh0inYt21kmX4iS2QxHFLg6C0Ey6mYJQNWnf9TWQ8KCh1jO9e7jnncO9l4CAjqErSpTl+TOHCNqQIwBtBth2XLeUNFuW30v8h13MZJGByRkFwtFFgqVEuWEGQns3k0cAEyYAIZBTy3c18m7o2pTMnsY4jTgTly7RaAT3/xJJCymQkim/VJjMDEoQ00GM6VioKJY9FKbhxc1STgTCyMoGxI1q0EDVeU/Uu6rA4O1V/E+jYuU81L2Gmc0dTzS7fQpfN2fgPjdHknBHYolE77oC8nIa4oUqfDcuwHmsj4h4yrZUXF9UeWY9IPsOuC/3wD4/4Kd5CWEggHVi82tBmXX+tQ7JWaOqedtlBAsTigARS+pRy/KGM3fcOOdEARC645zYALcSJ8LJ+bD3dI312QEnV4U1Wfzga7RPzWE6v/cX1haEE62e04kAAAAASUVORK5CYII=",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAV1JREFUeAGNUrtKA1EQPXODEV+4NoKk2YAPBMEswUclfkL8giiCbUxppQE7i2xnIQGDFulcCIKVaKXRYrcVi2wTEIQQsRCj3OtkcdeFhLgHLswc5swM9wwhhIyd0iTiOQI2OdV/aQcgh/BZsAzH9WvJDzbs5ayEMpnS0BstKalQTdfMQJixl3IKZCICBG9zYTyUidfTFQbsPpO6JhPaSaFocP8/UXJoht+sn2pSxncFlEr5zEhsrKdoL3nEkQo4EsjyygiEK+NrKM6dBwWT8SlPVGoUUf94DvfTRTi7bl5ywRO2E3lPdDh9jMrLCWpvt12bdIRumCg1TCyMpnnyGaqvFa9ZN5QTm99JTLAp6z71pdqw3+/Q+m56wt4QVx07NLajHt0OxXbEDMFnxAHyiAiC4NO7d73PsYzHUwLlO936T1JblhE6OR8Ze1WXkAdMLuLPJpfzMjBsWsZN0PgH6V1y/vTYh+UAAAAASUVORK5CYII=",v="_container_1eavr_1",y="_catalog_1eavr_15",Q="_header_1eavr_77",J="_good_1eavr_105",B="_photo_1eavr_151",S="_description_1eavr_173",O="_present_1eavr_195",X="_info_1eavr_321",t={container:v,catalog:y,"catalog-button":"_catalog-button_1eavr_35","catalog-more":"_catalog-more_1eavr_69",header:Q,good:J,photo:B,description:S,present:O,"good-more":"_good-more_1eavr_241","only-PC":"_only-PC_1eavr_261","only-mobile":"_only-mobile_1eavr_269",info:X},N=[{id:0,src:g,name:"тросс 1",description:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",present:!0,length:50,imageHeight:{PC:260,mobile:200.9}},{id:1,src:c,name:"ремень 12",description:"Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",present:!1,length:0,imageHeight:{PC:251}},{id:2,src:c,name:"ремень 12",description:"Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",present:!0,length:50,imageHeight:{mobile:194}},{id:3,src:Y,name:"тросс 6",description:"Стальной канат для лифта GRS 8X19S-NFC 1570",present:!0,length:50,imageHeight:{PC:256,mobile:197.8}},{id:4,src:g,name:"тросс 1",description:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",present:!0,length:50,imageHeight:{PC:252}},{id:5,src:R,name:"тросс 4",description:"Стальной канат для лифта GRS 8X19W-CWC 1570",present:!0,length:50,imageHeight:{PC:242,mobile:202}},{id:6,src:w,name:"ремень 8",description:"Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",present:!0,length:50,imageHeight:{PC:314}}];function T(){let o=window.innerWidth<=767;const i=()=>N.map(e=>`
            <article  class="${t.good} ${e.id==1||e.id==4||e.id==6?t["only-PC"]:""} ${e.id==2?t["only-mobile"]:""}">
                <div class="${t.photo}">
                    <img src="${e.src}" alt="${e.name}" style="height: ${o&&e.imageHeight.mobile?e.imageHeight.mobile:e.imageHeight.PC?e.imageHeight.PC:0}px; ${e.id==6?"position: relative; top: -72px;":""}"/>
                </div>
                <div class="${t.info}">
                    <div class="${t.description}">
                        ${e.description}
                    </div>
                    <div class="${t.present}">
                        <img src="${e.present?U:F}"/>
                        <span>${e.present?"В наличии "+e.length+" м.":"Под заказ"}</span>
                    </div>
                    <button class="${t["good-more"]} ${t["catalog-button"]}">Подробнее</button>
                </div>
            </article>
        `).join("");function l(){const e=document.querySelector(`.${t.catalog}`);e&&(e.innerHTML=i())}return window.addEventListener("resize",()=>{const e=window.innerWidth<=767;e!==o&&(o=e,l())}),`
    <section class="${t.container}" aria-labelledby="catalog-title">
        <h1 id="catalog-title" class="${t.header}">Рекомендуемое оборудование</h1>
        <div class="${t.catalog}" role="list">
            ${i()}
        </div>
        <button class="${t["catalog-button"]} ${t["catalog-more"]}">Перейти в каталог</button>
    </section>
  `}const V="/assets/pic1-BNF-eyKo.png",P="/assets/pic2-Ehyu4QM1.png",H="/assets/pic3-Dxc_liC9.png",W="_about_wyclu_1",M="_header_wyclu_9",I="_panno_wyclu_35",Z="_info_wyclu_97",G="_more_wyclu_135",L="_list_wyclu_187",a={about:W,header:M,panno:I,"main-info":"_main-info_wyclu_79",info:Z,more:G,list:L};function _(){return`
    <section class="${a.about}" aria-labelledby="about-title">
        <h2 id="about-title" class="${a.header}">О компании</h2>
        <div class="${a.panno}">
            <img src="${V}" alt="картинка 1"/>
            <img src="${P}" alt="картинка 2"/>
            <img src="${H}" alt="картинка 3"/>
        </div>
        <div class="${a.info}">
            <h3 class="${a["main-info"]}">
                Компания «SPARTSPRO» специализируется на поставках лифтового оборудования, комплектующих и запчастей для лифтов и эскалаторов ведущих мировых и российских производителей.
            </h3>
            <ul class="${a.list}">
                <li>Гарантия качества – работаем только с проверенными производителями.</li>
                <li>Собственный склад – более 30 000 наименований в наличии для оперативных отгрузок.</li>
                <li>Соблюдение сроков – приоритет компании: быстрая обработка заказов и доставка без задержек.</li>
            </ul>
            <p>Мы обеспечиваем бесперебойные поставки для ваших проектов. Оставьте заявку – и получите коммерческое предложение в кратчайшие сроки!</p>
                <div class="${a.more}">
                    <button class="${a["about-button"]}">Подробнее</button>
                </div>
        </div>
        
    </section>
    `}try{const o=document.querySelector("#app");if(!o)throw new Error("Элемент #app не найден");o.innerHTML=`
    <main>
      ${b()}
      ${T()}
      ${_()}
    </main>
  `}catch(o){console.error("Ошибка при инициализации приложения:",o)}
