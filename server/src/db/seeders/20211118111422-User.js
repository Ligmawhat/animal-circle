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
      "Users",
      [
        {
          login: "joy",
          password: "$2a$10$DzantFYOBnSpPuC0bIYgteiIk4KzwX29SanpJRy7ZJRQyOktLiAzy",
          userType: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: "ganhor",
          password: "123",
          userType: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: "zoorassvet",
          password: "$2a$10$DzantFYOBnSpPuC0bIYgteiIk4KzwX29SanpJRy7ZJRQyOktLiAzy",
          userType: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: "laskoviy",
          password: "$2a$10$DzantFYOBnSpPuC0bIYgteiIk4KzwX29SanpJRy7ZJRQyOktLiAzy",
          userType: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: "oakgrove",
          password: "$2a$10$DzantFYOBnSpPuC0bIYgteiIk4KzwX29SanpJRy7ZJRQyOktLiAzy",
          userType: "admin",
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
