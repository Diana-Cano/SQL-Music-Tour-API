'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greet', {
      event_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      meet_start_time: {
        type: Sequelize.DATE,
        allowNull:False

      },
      meet_greet_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greet');
  }
};