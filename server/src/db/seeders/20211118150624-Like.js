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
      "Likes",
      [
        {
          user_id: 1,
          animal_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          animal_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          animal_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          animal_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          animal_id: 5,
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
    await queryInterface.bulkDelete("Likes", null, {});
  },
};
