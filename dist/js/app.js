!function(){"use strict";angular.module("PolicyApplication",["ngMaterial","ui.router"]).config(["$locationProvider","$stateProvider","$urlRouterProvider",function(e,p,t){e.html5Mode(!0),p.state("app",{url:"",abstract:!0,views:{header:{templateUrl:"/policy2-ui/app/pages/header.html"},navbar:{templateUrl:"/policy2-ui/app/pages/navigation.html"}}}),p.state("app.permissions",{name:"permissions",url:"/permissions",views:{"content@":{templateUrl:"/policy2-ui/app/pages/permissions/permissions.html"}}}),p.state("app.applications",{name:"applications",url:"/applications",views:{"content@":{templateUrl:"/policy2-ui/app/pages/applications/applications.html"}}}),p.state("app.operations",{name:"operations",url:"/operations",views:{"content@":{templateUrl:"/policy2-ui/app/pages/operations/operations.html"}}}),p.state("app.rules",{name:"rules",url:"/rules",views:{"content@":{templateUrl:"/policy2-ui/app/pages/rules/rules.html"}}}),p.state("app.roles",{name:"roles",url:"/roles",views:{"content@":{templateUrl:"/policy2-ui/app/pages/roles/roles.html"}}}),t.otherwise("/permissions")}])}();