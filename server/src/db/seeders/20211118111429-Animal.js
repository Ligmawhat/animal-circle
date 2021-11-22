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
      "Animals",
      [
        {
          name: "Гарик",
          desc: "кобель гарик овчарка",
          url: "https://i.pinimg.com/736x/e1/a6/96/e1a696d70a8263e73bfad59ce2dc6f8e.jpg",
          sex_id: 2,
          user_id: 1,
          breed_id: 1,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ларго",
          desc: "кобель ларго боксер",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          sex_id: 2,
          user_id: 1,
          breed_id: 2,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Олег",
          desc: "кобель олег лабрадор",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          sex_id: 2,
          user_id: 1,
          breed_id: 3,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мурка",
          desc: "сука мурка пикинез",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          sex_id: 1,
          user_id: 1,
          breed_id: 4,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Дурка",
          desc: "сука дурка пикинез",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          sex_id: 1,
          user_id: 1,
          breed_id: 4,
          type_id: 1,
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
    await queryInterface.bulkDelete("Animals", null, {});
  },
};
