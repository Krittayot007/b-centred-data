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
    return queryInterface.bulkInsert("companies", [
      {
        id: "MD",
        name_en: "Media Revolution Co., Ltd.",
        name_th: "บริษัท มีเดีย เรฟโวลูชั่น จำกัด (สำนักงานใหญ่)",
        address:
          "999/7 ซอยเกศินีวิลล์ ถ.ประชาอุทิศ แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310",
        tel: "0924491493",
        tax_id: "0105547092133",
        website_url: "https://www.thedramaacademy.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "SN",
        name_en: "Shining Like Stars Co., Ltd.",
        name_th: "บริษัท ไชน์นิ่ง ไลค์ สตาร์ จำกัด (สำนักงานใหญ่)",
        address:
          "999/7 ซอยเกศินีวิลล์ ถ.ประชาอุทิศ แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310",
        tel: "0863916542",
        tax_id: "0135558014856",
        website_url: "https://www.kru-ngor.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "IN",
        name_en: "Inner Power Co., Ltd.",
        name_th: "บริษัท อินเนอร์ เพาเวอร์ จำกัด (สำนักงานใหญ่)",
        address: "577 ถ.ประชาอุทิศ แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310",
        tel: "0997979615",
        tax_id: "0105557113796",
        website_url: "https://www.innerpower.co.th",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "WD",
        name_en: "WisdomMe Co., Ltd.",
        name_th: "บริษัท วิสดอมมี จำกัด (สำนักงานใหญ่)",
        address:
          "999/7 ซอยเกศินีวิลล์ ถ.ประชาอุทิศ แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310",
        tel: "0966466266",
        tax_id: "0105561177957",
        website_url: "https://www.wisdomme.co.th",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "BC",
        name_en: "B-Centred Co., Ltd.",
        name_th: "บริษัท บี-เซนเทิร์ด จำกัด (สำนักงานใหญ่)",
        address:
          "601/26 ซ.รามคำแหง 39 (เทพลีลา 1) ถ.รามคำแหง แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพฯ 10310",
        tel: "0822653653",
        tax_id: "0105563125814",
        website_url: "https://www.kru-ngor.com",
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
