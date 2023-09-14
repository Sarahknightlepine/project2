// models/message.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, { foreignKey: 'sender_id' });
      Message.belongsTo(models.User, { foreignKey: 'receiver_id' });
    }
  }
  Message.init({
    message_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER,
    message_content: DataTypes.TEXT,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
