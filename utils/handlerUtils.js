//////////////////////////////////////////////////////
/*              Huawei IRC                          */
/*              Idan Catalyst                       */
/* HandlerUtils:                                    */
/* Functions to support the intent handler          */
//////////////////////////////////////////////////////

'use strict';

var fs = require('fs'),
    path = require('path'),
    jsyaml = require('js-yaml');

const {TError, TErrorEnum, sendError} = require('./errorUtils');
const swaggerUtils = require('./swaggerUtils');
const mongoUtils = require('./mongoUtils');
const uuid = require('uuid');
const notificationUtils = require('../utils/notificationUtils');

var spec = null;
var swaggerDoc = null;


////////////////////////////////////////////////////////
// Function used to send intent reports               //
////////////////////////////////////////////////////////
function getR1Intent(req,payload) {
  return new Promise(function(resolve, reject) {
 
    var query = mongoUtils.getMongoQuery(req);
    query.criteria.name = 'R1_Intent_Slice_Core'
    query = swaggerUtils.updateQueryServiceType(query, req,'name');

    const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

    mongoUtils.connect().then(db => {
    db.collection('Intent')
    .find(query.criteria, query.options).toArray()
    .then(doc => {
      console.log('done '+doc)
      doc.forEach(x => {
        payload.affects[0].id=x.id;
        return  resolve(payload);
    })

     })
     .catch(error => {
      reject(new TError(TErrorEnum.INTERNAL_SERVER_ERROR,error))
     });
 })
 .catch(error => {
  reject(new TError(TErrorEnum.INTERNAL_SERVER_ERROR,error))
 });
});

}


module.exports = { 
  getR1Intent
				   			 };
