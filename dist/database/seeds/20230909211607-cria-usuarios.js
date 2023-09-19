"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert('users', [
      {
        name: 'Fábio Matos',
        email: 'fabio1@gmail.com',
        password_hash: await _bcryptjs2.default.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fábio Matos',
        email: 'fabio2@gmail.com',
        password_hash: await _bcryptjs2.default.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fábio Matos',
        email: 'fabio3@gmail.com',
        password_hash: await _bcryptjs2.default.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: () => { }
};
