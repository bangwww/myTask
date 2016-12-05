
import {UserListCtrl} from "./UserList.Ctrl";
import {User} from './User.Factory';
import {ResizeDetector} from "./ResizeDetector.Directive";
import {UserPopUp} from "./UserPopUp.Directive";

angular
	.module('myApp', ['ngResource'])
	.controller('userListCtrl', UserListCtrl)
	.factory('user', ($resource) => new User($resource))
	.directive('resizeDetector', () => new ResizeDetector())
	.directive('userPopUp', () => new UserPopUp());