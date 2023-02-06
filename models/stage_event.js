'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stage_events.init({
    stage_events_id: {type:DataTypes.INTEGER, 
      primaryKey:true,
      autoIncrement:true},

    stage_id: {type:DataTypes.SMALLINT,
      allowNull:false,},

    event_id: {type: DataTypes.SMALLINT}
  }, {
    sequelize,
    modelName: 'stage_event',
    tableName: 'stage_events',
    timeStamps:'false',
  });
  return stage_event;
};