'use strict';
const {
  Model
} = require('sequelize');
const meet_greet = require('./meet_greet');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage}) {
      // define association here
      SetTime.belongsTo(Band,{
        foreignKey:'band_id',
        as:'band'
      })
      SetTime.belongsTo(Event,{
        foreignKey:'event_id',
        as:'event'
      })
      SetTime.belongsTo(Stage,{
        foreignKey:'stage_id',
        as:'stage'
      })
    }
  };
  SetTime.init({
    set_time_id: {type:DataTypes.INTEGER},
    event_id: {type:DataTypes.INTEGER},
    stage_id: {type:DataTypes.INTEGER},
    band_id: {type:DataTypes.INTEGER},
    start_time: {type:DataTypes.DATE},
    end_time: {type:DataTypes.DATE}
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_time',
    timeStamp: false

  });
  return SetTime;
};