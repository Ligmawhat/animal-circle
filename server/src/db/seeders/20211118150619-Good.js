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
      "Goods",
      [
        {
          good_title: "корм для собаки",
          description: "это очень кайфовый корм для собаки из категории корм",
          url: "https://images.genius.com/740889160f92f2a1c2c002d4b644c6e5.1000x538x1.png",
          price: 10000,
          category_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          good_title: "не корм",
          description: "не для собаки не корм из категории другое",
          url: "https://images.genius.com/740889160f92f2a1c2c002d4b644c6e5.1000x538x1.png",
          price: 20000,
          category_id: 2,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          good_title: "ручка",
          description: "хорошая ручка из категории канцелярия",
          url: "https://images.genius.com/740889160f92f2a1c2c002d4b644c6e5.1000x538x1.png",
          price: 30000,
          category_id: 3,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          good_title: "наушники",
          description: "норм наушники из категории электроника",
          url: "https://images.genius.com/740889160f92f2a1c2c002d4b644c6e5.1000x538x1.png",
          price: 40000,
          category_id: 4,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          good_title: "корм для кота ",
          description: "корм для кота из категории корма",
          url: "https://images.genius.com/740889160f92f2a1c2c002d4b644c6e5.1000x538x1.png",
          price: 50000,
          category_id: 1,
          user_id: 1,
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
    await queryInterface.bulkDelete("Goods", null, {});
  },
};
