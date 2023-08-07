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
    return queryInterface.bulkInsert("customer_people", [
      {
        customer_name_th: "ธัญญ์ธิชา ธีระวสิฐพล",
        customer_name_en: "Thanthicha Theerawasitpol",
        customer_nickname: "เมย์",
        email1: "thanthicha2010@hotmail.com",
        tel_no1: "0965626456",
        facebook: "Thanthicha Theerawasitpol",
        line: "wps_thailand",
        address1:
          "คอนโดดิเมโมเรียพหลโยธิน5 ห้อง51/5 ชั้น2 ซอยสายลม1 ถนนพหลโยธิน8 แขวงสามเสนใน เขตพญาไท กรุงเทพฯ 10400",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        customer_name_th: "ศศิภา เคียงศิริ",
        customer_nickname: "แพร",
        tel_no1: "0853315050",
        tel_no2: "0815582336",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        customer_name_th: "ภัครดา สถิตภัทรภาคิน",
        customer_nickname: "กอล์ฟ",
        tel_no1: "0959542845",
        address1:
          "บริษัท ที เค เอส พรีซิชั่น จำกัด 151/9 หมู่บ้านเพอร์เฟคมาสเตอร์พีช-รังสิต ม.1 ต.บ้านกลาง อ.เมือง จ.ปทุมธานี 12000 TAXID 0125548009221",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: 2,
      },
      {
        customer_name_th: "Boat",
        tel_no1: "0970893588",
        address1:
          "Asia Pacific Research Services Co.,Ltd. 191 Silom Complex ชั้น 21 ถ.สีลม แขวงสีลม เขตบางรัก กทม. 10500 TAXID 0105549077336 TEL 0970893588",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: 5,
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
