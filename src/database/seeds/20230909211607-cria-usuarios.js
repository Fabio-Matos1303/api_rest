import bcryptjs from 'bcryptjs'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert('users', [
      {
        name: 'Fábio Matos',
        email: 'fabio1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fábio Matos',
        email: 'fabio2@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fábio Matos',
        email: 'fabio3@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: () => { }
};
