'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
            firstName: 'aaa',
            lastName: '',
            email: 'aaa@example.com',
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString()
        }, {
            firstName: 'bbb',
            lastName: 'BBB',
            email: 'bbb@example.com',
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString()
        }, {
            firstName: 'ccc',
            lastName: 'CCC',
            email: 'ccc@example.com',
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString()
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
