'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Geotags',
      [
        {
          geotags_title: 'Хорошево',
          latitude: '55.783477',
          longitude: '37.533185',
          description: 'Замечательная площадка в Хорошево',
          url: 'horoshevo.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'Беговая',
          latitude: '55.792706',
          longitude: '37.570624',
          description: 'Замечательная площадка на Беговой',
          url: 'begovaya.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'ЦАО',
          latitude: '55.769158',
          longitude: '37.593354',
          description: 'Замечательная площадка в ЦАО (около дома гуфа)',
          url: 'tsao.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'Пресня',
          latitude: '55.765505',
          longitude: '37.544799',
          description: 'Замечательная площадка на Пресне',
          url: 'fili.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'Хамовники',
          latitude: '55.733338',
          longitude: '37.578646',
          description: 'Замечательная площадка в Хамовниках',
          url: 'hamovniki.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'Полянка',
          latitude: '55.743333',
          longitude: '37.613745',
          description: 'Замечательная площадка на Полянке',
          url: 'random.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'Таганка',
          latitude: '55.759170',
          longitude: '37.659875',
          description: 'Замечательная площадка на Таганке',
          url: 'taganka.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'Мещанский парк',
          latitude: '55.775000',
          longitude: '37.632130',
          description: 'Замечательная площадка в Мещанском парке',
          url: 'random.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geotags_title: 'Швивая',
          latitude: '55.746121',
          longitude: '37.644496',
          description: 'Замечательная площадка на Швивой',
          url: 'meshanskiy.jpeg',
          approved: false,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
    /**
     * Add seed commands here.
     *
     * Example:

     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Geotags', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
  },
}