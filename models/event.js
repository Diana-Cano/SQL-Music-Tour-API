'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    event_id: {type:DataTypes.INTEGER},
    name: {type:DataTypes.STRING},
    date: {type:DataTypes.DATE},
    start_time: {type:DataTypes.DATE},
    end_time: {type:DataTypes.DATE}
  }, {
    sequelize,
    modelName: 'event',
    tableName:'event',
    timeStamp:false
  });
  return event;
};