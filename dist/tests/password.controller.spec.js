describe("PasswordController",function(){beforeEach(module("PolicyApplication"));var $controller;beforeEach(inject(function(e){$controller=e})),describe("$scope.grade",function(){var $scope,e;beforeEach(function(){$scope={},e=$controller("PasswordController",{$scope:$scope})}),it('sets the strength to "strong" if the password length is >8 chars',function(){$scope.password="longerthaneightchars",$scope.grade(),expect($scope.strength).toEqual("strong")}),it('sets the strength to "weak" if the password length <3 chars',function(){$scope.password="a",$scope.grade(),expect($scope.strength).toEqual("weak")})})});