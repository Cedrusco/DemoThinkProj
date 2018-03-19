'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Customer.json';



exports.getCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var CustomerFD = fs.readFileSync('../'+revision+samplePath);
    var CustomerData = [];
    if(CustomerFD) {
        CustomerData = JSON.parse(CustomerFD);
    }
    cb(null, CustomerData);
}





exports.putCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var CustomerFD = fs.readFileSync('../'+revision+samplePath);
    var CustomerData = [];
    if(CustomerFD) {
        CustomerData = JSON.parse(CustomerFD);
    }
    if (Object.keys(CustomerData).length > 0) {
        cb(null, CustomerData[Object.keys(CustomerData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.postCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var CustomerFD = fs.readFileSync('../'+revision+samplePath);
    var CustomerData = [];
    if(CustomerFD) {
        CustomerData = JSON.parse(CustomerFD);
    }
    if (Object.keys(CustomerData).length > 0) {
        cb(null, CustomerData[Object.keys(CustomerData)[0]]);
    }
    else {
        cb(null, {})
    }
}

