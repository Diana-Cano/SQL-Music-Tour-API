'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, StageEvent, MeetGreet, SetTime }) {
      // define association here
      Event.belongsToMany(Stage,{
        foreignKey: 'event_id',
        as: 'stages',
        through: StageEvent 
      })
      Event.hasMany(MeetGreet,{
        foreignKey:'event_id',
        as: 'meet_greets',
      })
      Event.hasMany(SetTime,{
        foreignKey:'event_id',
        as:'set_times'
      })
    }
  }
  Event.init({
    event_id: {type:DataTypes.INTEGER},
    name: {type:DataTypes.STRING},
    date: {type:DataTypes.DATE},
    start_time: {type:DataTypes.DATE},
    end_time: {type:DataTypes.DATE}
  }, {
    sequelize,
    modelName: 'Event',
    tableName:'event',
    timeStamp:false
  });
  return Event;
};