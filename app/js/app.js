"use strict";

var _UserList = require("./UserList.Ctrl");

var _User = require("./User.Factory");

var _ResizeDetector = require("./ResizeDetector.Directive");

var _UserPopUp = require("./UserPopUp.Directive");

angular.module('myApp', ['ngResource']).controller('userListCtrl', _UserList.UserListCtrl).factory('user', function ($resource) {
	return new _User.User($resource);
}).directive('resizeDetector', function () {
	return new _ResizeDetector.ResizeDetector();
}).directive('userPopUp', function () {
	return new _UserPopUp.UserPopUp();
});