'use strict';


/**
 * Obtain information about specific employee
 *
 * id Integer The ID of the employee
 * returns Employee
 **/
exports.employeeIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "employee name" : "Keerthana",
  "id" : 4,
  "employee title" : "Team Member"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtain information about employees from the HR database
 *
 * bodyLimit Integer The amount of employees returned (optional)
 * pageLimit Integer The pages to return employees info (optional)
 * returns List
 **/
exports.employeesGET = function(bodyLimit,pageLimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "employee name" : "Keerthana",
  "id" : 4,
  "employee title" : "Team Member"
}, {
  "employee name" : "Keerthana",
  "id" : 4,
  "employee title" : "Team Member"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a new employee  in the database
 *
 * body Employee 
 * no response value expected for this operation
 **/
exports.employeesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

