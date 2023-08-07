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
    return queryInterface.bulkInsert("customer_companies", [
      {
        company_prefix: "โรงเรียน",
        company_name_th: "อนุบาลหลานย่าโม",
        address1:
          "39/2 หมู่ 5 ตำบลโพธิ์กลาง อำเภอเมือง จังหวัดนครราชสีมา 30000",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_prefix: "บริษัท",
        company_name_th: "เคบีเอฟ อินเตอร์แพ็ค จำกัด",
        company_name_en: "KBF INTERPACK COMPANY LIMITED",
        tax_id: "0105547030171",
        tel_no1: "034476556–9",
        fax: "034476560",
        address1: "228 ม.1 ต.แคราย อ.กระทุ่มแบน จ.สมุทรสาคร 74110",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_prefix: "บริษัท",
        company_name_th: "พรีเมียมสตูดิโอ จำกัด",
        company_name_en: "PREMIUM STUDIO CO.,LTD",
        tax_id: "0105556011884",
        tel_no1: "0819854119",
        tel_no2: "0615909955",
        address1:
          "479/8 ซ.เจริญกรุง 107 ถ.เจริญกรุง แขวงบางโคล่ เขตบางคอแหลม กรุงเทพมหานคร 10120",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_prefix: "บริษัท",
        company_name_th: "เซ็นทรัล พีเพิล ดีเวลลอปเม้นท์ เซ็นเตอร์ จำกัด",
        tax_id: "0105551040525",
        tel_no1: "0983072391",
        tel_no2: "026675555#1198",
        address1:
          "(สาขาที่ 00004) 999/9 ถ.พระราม 1 แขวงปทุมวัน  เขตปทุมวัน กทม. 10330",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_prefix: "บริษัท",
        company_name_th: "Asia Pacific Research Services Co.,Ltd.",
        company_name_en: "Asia Pacific Research Services Co.,Ltd.",
        tax_id: "0105549077336",
        tel_no1: "0970893588",
        address1:
          "91 Silom Complex ชั้น 21 ถ.สีลม แขวงสีลม เขตบางรัก กทม. 10500",
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
