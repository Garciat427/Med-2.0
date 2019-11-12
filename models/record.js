module.exports = function (sequelize, DataTypes) {
  var Record = sequelize.define("Record", {
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Record.associate = function (models) {
    Record.hasMany(models.Symptoms);
    Record.hasMany(models.Diagnosis);
  };

  return Record;
};
