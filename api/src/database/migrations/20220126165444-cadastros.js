module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("data", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      asn: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      titular: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      cnpj: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      pais: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("data"),
};
