angular.module('login').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/templates/LoginTemplate.html',
    "<form ng-submit=vm.login()><p ng-class=vm.message.style>{{vm.message.content}}</p><div><label>Username:</label> <input ng-model=vm.form.username></div><div><label>Password:</label> <input type=password ng-model=vm.form.password></div><div><button type=submit>Login</button></div></form>"
  );

}]);
