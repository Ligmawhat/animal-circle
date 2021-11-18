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
          breed_title: "Овчарка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Боксер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Лобрадор",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Пикинез",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed_title: "Корги",
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
