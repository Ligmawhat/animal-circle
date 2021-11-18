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
      "Categories",
      [
        {
          category_title: "Корм",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "Лакомства",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "Игрушки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "Клетки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "Аксессуары",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "Клетки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "Средства для ухода",
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
     * await queryInterface.bulkDelete('Categories', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
