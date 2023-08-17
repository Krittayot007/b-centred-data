const crudService = require("../services/crud-service");

// create
exports.classCreate = async (req, res, next) => {
  try {
    const data = req.body.data;
    const classCreate = await crudService.classCreate(data);
    res.status(200).json(classCreate);
  } catch (error) {
    next(error);
  }
};

exports.companyCreate = async (req, res, next) => {
  try {
    const data = req.body.data;
    const companyCreate = await crudService.companyCreate(data);
    res.status(200).json(companyCreate);
  } catch (error) {
    next(error);
  }
};

exports.customerCompanyCreate = async (req, res, next) => {
  try {
    const data = req.body.data;
    const customerCompanyCreate = await crudService.customerCompanyCreate(data);
    res.status(200).json(customerCompanyCreate);
  } catch (error) {
    next(error);
  }
};

exports.customerPersonCreate = async (req, res, next) => {
  try {
    const data = req.body.data;
    const customerPersonCreate = await crudService.customerPersonCreate(data);
    res.status(200).json(customerPersonCreate);
  } catch (error) {
    next(error);
  }
};

exports.orderCreate = async (req, res, next) => {
  try {
    const data = req.body.data;
    const orderCreate = await crudService.orderCreate(data);
    res.status(200).json(orderCreate);
  } catch (error) {
    next(error);
  }
};

exports.salesmanCreate = async (req, res, next) => {
  try {
    const data = req.body.data;
    const salesmanCreate = await crudService.salesmanCreate(data);
    res.status(200).json(salesmanCreate);
  } catch (error) {
    next(error);
  }
};

// update
exports.classUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body.data;
    const classUpdate = await crudService.classUpdate(data, id);
    res.status(200).json(classUpdate);
  } catch (error) {
    next(error);
  }
};

exports.companyUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body.data;
    const companyUpdate = await crudService.companyUpdate(data, id);
    res.status(200).json(companyUpdate);
  } catch (error) {
    next(error);
  }
};

exports.customerCompanyUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body.data;
    const customerCompanyUpdate = await crudService.customerCompanyUpdate(
      data,
      id
    );
    res.status(200).json(customerCompanyUpdate);
  } catch (error) {
    next(error);
  }
};
exports.customerPersonUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body.data;
    const customerPersonUpdate = await crudService.customerPersonUpdate(
      data,
      id
    );
    res.status(200).json(customerPersonUpdate);
  } catch (error) {
    next(error);
  }
};

exports.orderUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body.data;
    const orderUpdate = await crudService.orderUpdate(data, id);
    res.status(200).json(orderUpdate);
  } catch (error) {
    next(error);
  }
};

exports.salesmanUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body.data;
    const salesmanUpdate = await crudService.salesmanUpdate(data, id);
    res.status(200).json(salesmanUpdate);
  } catch (error) {
    next(error);
  }
};

// delete
exports.classDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const classDelete = await crudService.classDelete(id);
    res.status(200).json(classDelete);
  } catch (error) {
    next(error);
  }
};

exports.companyDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body.data;
    const companyDelete = await crudService.companyDelete(id);
    res.status(200).json(companyDelete);
  } catch (error) {
    next(error);
  }
};

exports.customerCompanyDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerCompanyDelete = await crudService.customerCompanyDelete(id);
    res.status(200).json(customerCompanyDelete);
  } catch (error) {
    next(error);
  }
};

exports.customerPersonDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerPersonDelete = await crudService.customerPersonDelete(id);
    res.status(200).json(customerPersonDelete);
  } catch (error) {
    next(error);
  }
};

exports.orderDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orderDelete = await crudService.orderDelete(id);
    res.status(200).json(orderDelete);
  } catch (error) {
    next(error);
  }
};

exports.salesmanDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const salesmanDelete = await crudService.salesmanDelete(id);
    res.status(200).json(salesmanDelete);
  } catch (error) {
    next(error);
  }
};
