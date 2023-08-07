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
    return queryInterface.bulkInsert("orders", [
      {
        sales_slip: "W-500001",
        sales_how: "LinkPayPal",
        sales_price: 50000,
        customer_raw: "พิมพิดารินทร์ หลวงวิเศษ",
        stkdesk: "Abundance Mind",
        sale_company: "ISDOMME",
        created_at: new Date(),
        updated_at: new Date(),
        class_id: "IM",
        customer_person_id: 1,
        customer_company_id: 1,
        salesman_id: "WEB",
      },
      {
        sales_slip: "W-500002",
        sales_how: "Teach:able",
        sales_price: 29015.9798149706,
        customer_raw: "พิมพิดารินทร์ หลวงวิเศษ",
        stkdesk: "Professional Public Speaking",
        sale_company: "ISDOMME",
        created_at: new Date(),
        updated_at: new Date(),
        class_id: "XP",
        customer_person_id: 4,
        customer_company_id: 1,
        salesman_id: "WEB",
      },
      {
        sales_slip: "W-500003",
        sales_how: "LinkPayPal",
        sales_price: 50000,
        customer_raw: "พิมพิดารินทร์ หลวงวิเศษ",
        stkdesk: "Abundance Mind",
        sale_company: "ISDOMME",
        created_at: new Date(),
        updated_at: new Date(),
        class_id: "CS",
        customer_person_id: 1,
        customer_company_id: 2,
        salesman_id: "WEB",
      },
      {
        sales_slip: "W-500004",
        sales_how: "Teach:able",
        sales_price: 50000,
        customer_raw: "พิมพิดารินทร์ หลวงวิเศษ",
        stkdesk: "Professional Public Speaking",
        sale_company: "ISDOMME",
        created_at: new Date(),
        updated_at: new Date(),
        class_id: "MYC",
        customer_person_id: 1,
        customer_company_id: 3,
        salesman_id: "WEB",
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
