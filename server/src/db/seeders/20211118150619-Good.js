"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Goods", goodGood, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Goods", null, {});
  },
};

function getRandomInt() {
  return Math.floor(Math.random() * 500) + 500;
}

const korm = [
  {
    good_title: "ROYAL CANIN X-SMALL ADULT",
    description: "СУХОЙ КОРМ РОЯЛ КАНИН ИКС-СМОЛЛ ЭДАЛТ ДЛЯ ВЗРОСЛЫХ СОБАК МЕЛКИХ ПОРОД",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_10030300R1_1.jpg",
    price: getRandomInt(),
    category_id: 1,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ROYAL CANIN X-SMALL ADULT STERILISED",
    description:
      "СУХОЙ КОРМ РОЯЛ КАНИН ИКС-СМОЛЛ ЭДАЛТ СТЕРИЛАЙЗД ДЛЯ СТЕРИЛИЗОВАННЫХ ВЗРОСЛЫХ СОБАК МЕЛКИХ ПОРОД",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_10190050F0_1.jpg",
    price: getRandomInt(),
    category_id: 1,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ROYAL CANIN X-SMALL LIGHT WEIGHT CARE",
    description:
      "Сухой корм Роял Канин Икс-Смолл Лайт Вейт Кэа для собак Миниатюрных пород Низкокалорийный (профилактика избыточного веса)",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_12300150F0_1.jpg",
    price: getRandomInt(),
    category_id: 1,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ROYAL CANIN MINI ADULT",
    description:
      "СУХОЙ КОРМ РОЯЛ КАНИН МИНИ ЭДАЛТ ДЛЯ ВЗРОСЛЫХ СОБАК МЕЛКИХ ПОРОД В ВОЗРАСТЕ ОТ 10 МЕСЯЦЕВ ДО 8 ЛЕТ",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_30010800R1_1.jpg",
    price: getRandomInt(),
    category_id: 1,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ROYAL CANIN MINI COAT CARE",
    description:
      "Сухой корм Роял Канин Мини Коат Кеа для собак Мелких пород весом до 10 кг Здоровая и блестящая шерсть",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_12200300R0_1.jpg",
    price: getRandomInt(),
    category_id: 1,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ROYAL CANIN MINI URINARY CARE",
    description:
      "Сухой корм Роял Канин Мини Уринари Кэа для собак Мелких пород весом до 10 кг с Чувствительной Мочевыделительной системой",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_12610300R0_1.jpg",
    price: getRandomInt(),
    category_id: 1,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ROYAL CANIN MINI DENTAL CARE",
    description:
      "Сухой корм Роял Канин Мини Дентал Кэа для собак Мелких пород весом до 10 кг Уменьшает образование зубного камня",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_12210300R0_1.jpg",
    price: getRandomInt(),
    category_id: 1,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const lakomstva = [
  {
    good_title: "ROYAL CANIN EDUC",
    description:
      "Кормовая добавка Роял Канин Эдюк для поощрения собак старше 2 месяцев при Обучении и дрессировке",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_31000005F0_1.jpg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ROYAL CANIN ENERGY",
    description:
      "Кормовая добавка Роял Канин Энержи для дополнительного снабжения энергией собак с повышенной физической активностью",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5396/rc_30640005F0_1.jpg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA PRO PLAN PUPPY FOCUS PRO-STICKS LAMB",
    description: "Лакомство Пурина Про План для Щенков для Поддержания развития мозга Ягненок",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5156/854cb47cb986105b40c131647db2d405.jpg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA PRO PLAN BISCUITS CHICKEN & RICE",
    description: "Лакомство Пурина Про План Бисквиты Курица с Рисом",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5199/12333256_1.jpg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA PRO PLAN BISCUITS SALMON & RICE",
    description: "Лакомство Пурина Про План Бисквиты Лосось с Рисом",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5199/12333257_1.jpg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA DENTALIFE",
    description:
      "Лакомство Пурина Денталайф для собак Мелких пород Палочки Ежедневный уход за полостью рта",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4656/6366c40ab92cfdf718c71e2c1d8f5b1c.jpg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA DENTALIFE",
    description:
      "Лакомство Пурина Денталайф для собак Средних пород Палочки Ежедневный уход за полостью рта",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4656/9f49de4ef06b2d8d986721f3a291b617.jpg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const igrushri = [
  {
    good_title: "PITCHDOG 20",
    description: "Игровое кольцо Питч Дог для апортировки Ø20 см",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5294/62372.jpg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX BUMI L",
    description: "Игрушка Вест По Зогофлекс для собак Перетяжка Оранжевая",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5160/f86c3e9cb77b87e029c12f45f37769ec.jpg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX QWIZL",
    description: "Игрушка Вест По Зогофлекс для собак под Лакомства Гантеля Оранжевая",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5160/ad6b3cb5b39febf8759be33682429b81.jpg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX ROWDIES LEWIS",
    description: "Игрушка Вест По Зогофлекс для собак Плюш 26 см",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5160/3dbe06ce6b75e25f0d05c9579911c3e4.jpg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX ROWDIES TAYLOR",
    description: "Игрушка Вест По Зогофлекс для собак Плюш 25 см",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5160/3eb3d581735b95c3076f6ebf1c4601fa.jpg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "AROMADOG",
    description: "Игрушка Аромадог для собак 'Мишка с 3 пищалками' Голубой",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5327/WB16959-1.jpg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "AROMADOG",
    description: "Игрушка Аромадог для собак 'Собачка с 3 пищалками' Сиреневая",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5327/WB16959-3.jpg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const kletki = [
  {
    good_title: "KREDO CROME",
    description: "Клетка Кредо для Собак Хром с пластиковым поддоном",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5021/13a8942653f42072edd36893b39e255d.jpg",
    price: getRandomInt(),
    category_id: 4,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "MIDWEST LIFE STAGES DOUBLE DOOR DOG CRATE",
    description: "Клетка Мидвест 2 двери Черная",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5160/aff3994e5f6bf188a1bd82c2e148df29.jpg",
    price: getRandomInt(),
    category_id: 4,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "MIDWEST ICRATE DOUBLE DOOR DOG CRATE",
    description: "Клетка Мидвест 2 двери Черная",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5160/43fd8b4c43e0304d73af5c326c951ec9.jpg",
    price: getRandomInt(),
    category_id: 4,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const aksesuari = [
  {
    good_title: "GIGWI PET TRAVEL",
    description: "Емкость Гигви Дорожная cкладная на молнии",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4636/97f42bee95f7b053c47f41a2d2ec2c85.jpg",
    price: getRandomInt(),
    category_id: 5,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "CAMON DURAPET BOWL",
    description: "Миска Камон для животных с Антискользящим покрытием дна",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5134/880f6c7756ca7783aece2b0d3683e289.jpg",
    price: getRandomInt(),
    category_id: 5,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "BAMA PET SIM PET",
    description: "Контейнер Бама Пет для хранения корма Бежевый",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4616/87735cd5bfb7c5bb256bfd464cdc3d8e.jpg",
    price: getRandomInt(),
    category_id: 5,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const osheiniki = [
  {
    good_title: "GIGWI CLASSIC LINE",
    description: "Ошейник Гигви для собак со Светоотражающими полосками",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5021/d5536e0177afe538de870eb569130053.jpg",
    price: getRandomInt(),
    category_id: 6,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "TRIXIE",
    description: "Цепь Трикси тройная с Цугом Хромированное покрытие",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4630/956cc47699da624f49f3aadb7273218b.jpg",
    price: getRandomInt(),
    category_id: 6,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "HUNTER",
    description: "Ошейники Хантер для Щенков Цвета в ассортименте",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/5264/77164.jpg",
    price: getRandomInt(),
    category_id: 6,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const uhod = [
  {
    good_title: "NATURES MIRACLE S&O REMOVER DOG POUR",
    description: "Уничтожитель пятен и запахов Нейчес Миракл для собак Универсальный",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4639/8d27c7350c6e706471ba58b059ac576d.jpg",
    price: getRandomInt(),
    category_id: 7,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "GOSBI NATURAL CLEAN WHITE SHAMPOO",
    description: "Шампунь Госби для собак с Белой шерстью",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4627/34f1f542121289a9d23dc93aa63f687b.jpg",
    price: getRandomInt(),
    category_id: 7,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ЛАЙНА ДЛЯ ЖИВОТНЫХ",
    description: "Средство для дезинфекции и уборки помещений Устраняет запахи и метки животных",
    url: "https://zoomag.ru/images/thumbnails/500/350/detailed/4617/f06cfddbdfb4845cae9a9ddfbf65bd24.jpg",
    price: getRandomInt(),
    category_id: 7,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const goodGood = [
  ...korm,
  ...lakomstva,
  ...igrushri,
  ...kletki,
  ...aksesuari,
  ...osheiniki,
  ...uhod,
];
