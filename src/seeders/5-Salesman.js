"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("salesmans", [
      {
        id: "บี",
        name_salesman: "บี",
        email: "bee.thedrama@gmail.com",
        tel: "096-646-6266",
        facebook: "ichziinee Ariyamakkul",
        fb_link: "https://fb.kru-ngor.com/user/100070514715732",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "วิว",
        name_salesman: "วิว",
        email: "hr.thedrama@gmail.com",
        tel: "099-797-9615",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "ตา",
        name_salesman: "ตา",
        email: "sudarat.innerpower@gmail.com",
        tel: "091-459-3997",
        facebook: "Sudarat Chownamon",
        fb_link: "https://fb.kru-ngor.com/user/100074733903326",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "เมย์",
        name_salesman: "เมย์",
        email: "nhon.innerpower@gmail.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "WEB",
        name_salesman: "WEB",
        email: "innerpower.krungor@gmail.com",
        line_id: "Uaee4ff3898aa2a98bf91402d2bdfd859",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("users", null, {});
  },
};
