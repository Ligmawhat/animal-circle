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
          url: "https://pix-feed.com/wp-content/uploads/2018/04/2-14.jpg",
          sex_id: 2,
          user_id: 2,
          breed_id: 1,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ларго",
          desc: "кобель ларго боксер",
          url: "https://top-reyting.ru/images/stories/sibirskaya-haska.jpg",
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
          url: "https://klike.net/uploads/posts/2019-06/medium/1559799916_2.jpg",
          sex_id: 2,
          user_id: 2,
          breed_id: 3,
          type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мурка",
          desc: "сука мурка пикинез",
          url: "https://lh3.googleusercontent.com/proxy/TS0rLDUhz4bW1Yp6R_buHh01IJtnia2BocLY0PT2gzE_Hc_r1P5wYfPcnBFY7tvZq7574efjgj__ID0gJPsU-K1MVOqs0QKNqgM7yd4mcM91iqyyaDwOLFBif5IMxy-qPiJuRLVAVtgrx3EFIx_87tN-epRFZOgyFrZV7c_Gayp75YZOTHCWWlsDRmwYFWVzcKUQMw7KSlUM5qxJtP7s8g",
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
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXi5ruBpGNZgDPuw6W-b-S37BaSOr00D_pQ&usqp=CAU",
          sex_id: 1,
          user_id: 2,
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
