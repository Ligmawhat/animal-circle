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
      "UserInfos",
      [
        {
          first_name: "Joy",
          last_name: "ул. Профсоюзная, 96, Москва, 117393",
          email: "joy@gmail.com",
          mobile_phone: "8 (495) 334-81-51",
          avatar:
            "https://srvl.ru/files/products/41.1000x1000.png?cc8c55fc2f5e13cc9266a20d1efc4293",
          user_id: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Ганхор",
          last_name: "Котляковская ул., 1Б, Москва, 115201",
          email: "ganhor@gmail.com",
          mobile_phone: "8 (499) 794-46-17",
          avatar:
            "https://srvl.ru/files/products/41.1000x1000.png?cc8c55fc2f5e13cc9266a20d1efc4293",
          user_id: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Зоорассвет",
          last_name: "Рассветная аллея, 10, Москва, 111394",
          email: "https://vk.com/priyut_zoorassvet",
          mobile_phone: "8 (909) 918-59-23",
          avatar:
            "https://srvl.ru/files/products/41.1000x1000.png?cc8c55fc2f5e13cc9266a20d1efc4293",
          user_id: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Ласковый зверь",
          last_name: "Сигнальный пр-д, владение 4, Москва, 127273",
          email: "http://vk.com/club16473005",
          mobile_phone: "+74955143389",
          avatar:
            "https://srvl.ru/files/products/41.1000x1000.png?cc8c55fc2f5e13cc9266a20d1efc4293",
          user_id: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Oak Grove",
          last_name: "пр-д Дубовой Рощи, 23-25, Москва, 129075",
          email: "https://www.dubovaya-roscha.com/",
          mobile_phone: "+79296050282",
          avatar:
            "https://srvl.ru/files/products/41.1000x1000.png?cc8c55fc2f5e13cc9266a20d1efc4293",
          user_id: "5",
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
    await queryInterface.bulkDelete("UserInfos", null, {});
  },
};
