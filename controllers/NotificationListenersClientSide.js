'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToIncidentAttributeValueChangeEvent = function listenToIncidentAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToIncidentCreateEvent = function listenToIncidentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentCreateEvent(req, res, next);
};

module.exports.listenToIncidentDeleteEvent = function listenToIncidentDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentDeleteEvent(req, res, next);
};

module.exports.listenToIncidentInformationRequiredEvent = function listenToIncidentInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentInformationRequiredEvent(req, res, next);
};

module.exports.listenToIncidentResolvedEvent = function listenToIncidentResolvedEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentResolvedEvent(req, res, next);
};

module.exports.listenToIncidentStatusChangeEvent = function listenToIncidentStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentStatusChangeEvent(req, res, next);
};

module.exports.listenToIncidentTaskAttributeValueChangeEvent = function listenToIncidentTaskAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentTaskAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToIncidentTaskCreateEvent = function listenToIncidentTaskCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentTaskCreateEvent(req, res, next);
};

module.exports.listenToIncidentTaskDeleteEvent = function listenToIncidentTaskDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentTaskDeleteEvent(req, res, next);
};

module.exports.listenToIncidentTaskInformationRequiredEvent = function listenToIncidentTaskInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentTaskInformationRequiredEvent(req, res, next);
};

module.exports.listenToIncidentTaskResolvedEvent = function listenToIncidentTaskResolvedEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentTaskResolvedEvent(req, res, next);
};

module.exports.listenToIncidentTaskStatusChangeEvent = function listenToIncidentTaskStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentTaskStatusChangeEvent(req, res, next);
};
