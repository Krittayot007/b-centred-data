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
    return queryInterface.bulkInsert("classes", [
      {
        id: "MYC",
        classname_en: "Master Your Communication Online",
        classname_th: "สื่อสารให้เป็นที่รัก",
        episode: 29,
        minute: 205,
        pricefull: 9900,
        price: 4900,
        img_class_url: "2023/07/LINE_ALBUM_Kv-Passion-awaking_230707.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: "MD",
      },
      {
        id: "IM",
        classname_en: "Inner Makeover",
        classname_th: "ปรับความคิด ชีวิตเปลี่ยน",
        day: 2,
        funnel: 1,
        pricefull: 25000,
        price: 19500,
        created_at: new Date(),
        updated_at: new Date(),
        company_id: "IN",
      },
      {
        id: "XP",
        classname_en: "Self-expression",
        classname_th: "เป็นคุณที่ดีกว่า กล้าก้าวขาออกจาก Comfort Zone",
        day: 1,
        created_at: new Date(),
        updated_at: new Date(),
        company_id: "BC",
      },
      {
        id: "CS",
        classname_en: "Communication Secrets",
        classname_th: "ชนะทุกการสื่อสาร แค่คุณ 'อ่านคน' เป็น",
        episode: 4,
        minute: 720,
        funnel: 6,
        pricefull: 18900,
        price: 12900,
        teachable_id: 1526954,
        img_class_url: "2022/03/BOX-COMMUSECRETS-01-scaled.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: "MD",
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
