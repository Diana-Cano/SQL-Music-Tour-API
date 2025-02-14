'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( {Band, Event} ) {
      MeetGreet.belongsTo(Band,{
        foriegnKey: 'band_id',
        as: 'band'
      })

      MeetGreet.belongsTo(Event,{
        foriegnKey:'band_id',
        as:'event'
      })
      // define association here
    }
  }
  MeetGreet.init({
    event_id: {type: DataTypes.SMALLINT,
    allowNull: false},
    band_id: {type: DataTypes.SMALLINT,
    allowNull: false},
    meet_start_time: {type: DataTypes.DATE,
    allowNull: false},
    meet_end_time: {type: DataTypes.DATE,
    allowNull: false},
    meet_greet_id: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true}
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName:'meet_greet',
    timeStamps:false,

  });
  return MeetGreet;
};