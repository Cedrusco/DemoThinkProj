'use strict';

  
    var CustomerImplementation = require('../../../implementation/CustomerService.js');
    
var CustomerData;

        


        module.exports.getCustomer = function getCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.getCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                                                                                            res.end(JSON.stringify(CustomerData));
                                                } else {
                res.end();
            }
        });
    };
    
                
        


    
                module.exports.putCustomer = function putCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.patchCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postCustomer = function postCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.postCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        
    
