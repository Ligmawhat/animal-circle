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
    url: "1.jpeg",
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
    url: "2.jpeg",
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
    url: "3.jpeg",
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
    url: "4.jpeg",
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
    url: "5.jpeg",
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
    url: "6.jpeg",
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
    url: "7.jpeg7",
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
    url: "8.jpeg",
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
    url: "9.jpeg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA PRO PLAN PUPPY FOCUS PRO-STICKS LAMB",
    description: "Лакомство Пурина Про План для Щенков для Поддержания развития мозга Ягненок",
    url: "10.jpeg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA PRO PLAN BISCUITS CHICKEN & RICE",
    description: "Лакомство Пурина Про План Бисквиты Курица с Рисом",
    url: "11.jpeg",
    price: getRandomInt(),
    category_id: 2,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "PURINA PRO PLAN BISCUITS SALMON & RICE",
    description: "Лакомство Пурина Про План Бисквиты Лосось с Рисом",
    url: "12.jpeg",
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
    url: "13.jpeg",
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
    url: "14.jpeg",
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
    url: "15.jpeg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX BUMI L",
    description: "Игрушка Вест По Зогофлекс для собак Перетяжка Оранжевая",
    url: "16.jpeg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX QWIZL",
    description: "Игрушка Вест По Зогофлекс для собак под Лакомства Гантеля Оранжевая",
    url: "17.jpeg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX ROWDIES LEWIS",
    description: "Игрушка Вест По Зогофлекс для собак Плюш 26 см",
    url: "18.jpeg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "WEST PAW ZOGOFLEX ROWDIES TAYLOR",
    description: "Игрушка Вест По Зогофлекс для собак Плюш 25 см",
    url: "19.jpeg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "AROMADOG",
    description: "Игрушка Аромадог для собак 'Мишка с 3 пищалками' Голубой",
    url: "20.jpeg",
    price: getRandomInt(),
    category_id: 3,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "AROMADOG",
    description: "Игрушка Аромадог для собак 'Собачка с 3 пищалками' Сиреневая",
    url: "21.jpeg",
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
    url: "22.jpeg",
    price: getRandomInt(),
    category_id: 4,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "MIDWEST LIFE STAGES DOUBLE DOOR DOG CRATE",
    description: "Клетка Мидвест 2 двери Черная",
    url: "23.jpeg",
    price: getRandomInt(),
    category_id: 4,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "MIDWEST ICRATE DOUBLE DOOR DOG CRATE",
    description: "Клетка Мидвест 2 двери Черная",
    url: "24.jpeg",
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
    url: "25.jpeg",
    price: getRandomInt(),
    category_id: 5,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "CAMON DURAPET BOWL",
    description: "Миска Камон для животных с Антискользящим покрытием дна",
    url: "26.jpeg",
    price: getRandomInt(),
    category_id: 5,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "BAMA PET SIM PET",
    description: "Контейнер Бама Пет для хранения корма Бежевый",
    url: "27.jpeg",
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
    url: "28.jpeg",
    price: getRandomInt(),
    category_id: 6,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "TRIXIE",
    description: "Цепь Трикси тройная с Цугом Хромированное покрытие",
    url: "29.jpeg",
    price: getRandomInt(),
    category_id: 6,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "HUNTER",
    description: "Ошейники Хантер для Щенков Цвета в ассортименте",
    url: "30.jpeg",
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
    url: "31.jpeg",
    price: getRandomInt(),
    category_id: 7,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "GOSBI NATURAL CLEAN WHITE SHAMPOO",
    description: "Шампунь Госби для собак с Белой шерстью",
    url: "32.jpeg",
    price: getRandomInt(),
    category_id: 7,
    user_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    good_title: "ЛАЙНА ДЛЯ ЖИВОТНЫХ",
    description: "Средство для дезинфекции и уборки помещений Устраняет запахи и метки животных",
    url: "33.jpeg",
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
