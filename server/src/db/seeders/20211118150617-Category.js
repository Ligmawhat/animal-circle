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
          category_title: "корм",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "другое",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "канцелярия",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_title: "электроника",
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
