'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'users',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        msg: 'E-mail já existe',
      },
      validate: {
        isEmail: {
          msg: 'E-mail inválido',
        }
      }

    }),

  down: () => { }
};
