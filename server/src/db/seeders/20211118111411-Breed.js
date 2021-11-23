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
    await queryInterface.bulkInsert(
      "Breeds",
      [
        {
          breed_title: "Немецкая овчарка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Лабрадор-ретривер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Шарпей",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Сибирский хаски",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Чау-чау",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Йоркширский терьер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Коккер-спаниель",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Бигль",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Английский бульдог",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Джек-рассел-терьер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Корги",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Пекинес",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Померанский шпиц",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Такса",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Чихуахуа",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Breeds", null, {});
  },
};
