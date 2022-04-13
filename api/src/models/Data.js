const Sequelize= require("sequelize");
const  { Model } = require("sequelize");

module.exports = class Data extends Model {
  static init(sequelize) {
    super.init(
      { 
        asn: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        titular: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        cnpj: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        pais: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
        },        
      },
      {
        sequelize,
      }
    );
    return this;
  }

  
}
