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
          sex: "кобель",
          desc: "кобель гарик овчарка",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          user_id: 1,
          breed_id: 1,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ларго",
          sex: "кобель",
          desc: "кобель ларго боксер",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          user_id: 1,
          breed_id: 2,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Олег",
          sex: "кобель",
          desc: "кобель олег лабрадор",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          user_id: 1,
          breed_id: 3,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мурка",
          sex: "сука",
          desc: "сука мурка пикинез",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
          user_id: 1,
          breed_id: 4,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Дурка",
          sex: "сука",
          desc: "сука дурка пикинез",
          url: "https://lh3.googleusercontent.com/proxy/Uja9Mdns0xw1fuGS9qi1XDnXnehjWkFdr9QTEJVZh4v8SkplI_J0IdZEdUCIyEnIY4eKImX3HXFf5y2UCdT958RyAYMpgcRqKap8Q087l_foDOiSbA",
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
