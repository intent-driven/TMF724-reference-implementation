'use strict';

var url = require('url');

var IncidentTask = require('../service/IncidentTaskService');

module.exports.createIncidentTask = function createIncidentTask (req, res, next) {
  IncidentTask.createIncidentTask(req, res, next);
};

module.exports.deleteIncidentTask = function deleteIncidentTask (req, res, next) {
  IncidentTask.deleteIncidentTask(req, res, next);
};

module.exports.listIncidentTask = function listIncidentTask (req, res, next) {
  IncidentTask.listIncidentTask(req, res, next);
};

module.exports.patchIncidentTask = function patchIncidentTask (req, res, next) {
  IncidentTask.patchIncidentTask(req, res, next);
};

module.exports.retrieveIncidentTask = function retrieveIncidentTask (req, res, next) {
  IncidentTask.retrieveIncidentTask(req, res, next);
};
