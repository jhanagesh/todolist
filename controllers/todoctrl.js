'use strict';
var app = angular.module('todoApp.controller',['ngCookies'])
		.controller('todoCtrl', ["$scope","$filter","loginlogoutService","$cookies",function($scope,$filter,loginlogoutService,$cookies){
			//Check if user is logedIn then only they can access Dashbpard URL
			if(!$cookies.get("isLoggedIn")){
				window.location="http://localhost/todolist/login.html";
			}
			console.log($cookies.getAll());
			$scope.newTask="";
			$scope.taskName="";
			$scope.pendingCount=3;
			$scope.addTaskBtnLabel="Add Task";
			$scope.editablerow=false;
			$scope.editIndex="";
			$scope.sortColumn="name";
			$scope.reverseSort=false;

			//Default Task list
			$scope.taskList=[
					{name:'a',description:'Learn Angularjs', date:new Date(),done:false},
					{name:'d',description:'Learn nodeJs', date:new Date(),done:false},
					{name:'e',description:'Learn Mongo', date:new Date(),done:false},
					{name:'b',description:'Learn GitHub', date:new Date(),done:false}
			];

			//To add the task
			$scope.addTodo=function(){
				if($scope.editablerow==true){
						$scope.taskList.splice($scope.editIndex,1);
						$scope.taskList.push({name:$scope.taskName,description:$scope.newTask,date:new Date(),done:false});
						$scope.newTask="";	
						$scope.taskName= "";
						$scope.searchfield="";
						$scope.addTaskBtnLabel = "Add Task";
				}else{
					$scope.taskList.push({name:$scope.taskName,description:$scope.newTask,date:new Date(),done:false});
					$scope.newTask="";		
					$scope.taskName= "";
					$scope.searchfield="";
				}
			
			};
			// To delete the current clicked task
			$scope.deleteCurrTodo = function(task){
				var index = getIndex(task);
				
				$scope.taskList.splice(index,1);
			};
			// To edit the current clicked task
			$scope.editCurrTodo = function(task){
				//Edit Code goes here...
				
				var currData  = Object.values(task)[0];
				console.log(currData);
				var val = currData;
				var index = $scope.taskList.findIndex(function(item, i){
				 return item.name === val
				});
				$scope.taskName=$scope.taskList[index].name;
				$scope.newTask=$scope.taskList[index].description;
				$scope.editablerow=true;
				$scope.editIndex = index;
				$scope.addTaskBtnLabel = "Update";
			};
			$scope.$watch('taskList',function(){
				$scope.pendingCount = $filter('filter')($scope.taskList,{done:false}).length;
			},true);
			$scope.clearComplete = function(){
				$scope.taskList = $filter('filter')($scope.taskList,{done:false});
			}
			$scope.sortData = function(column){
				$scope.reverseSort = ($scope.sortColumn==column) ? !$scope.reverseSort :false;
				$scope.sortColumn=column;
			};
			$scope.getSortClass=function(column){
				if($scope.sortColumn==column){
					return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
				}
				return '';
			}
			$scope.onFbLogout=function(){
				loginlogoutService.fbLogout($scope,$cookies);
			}
			function getIndex(task){

				var currData  = Object.values(task)[0];
				console.log(currData);
				var val = currData;
				var index = $scope.taskList.findIndex(function(item, i){
				 return item.name === val
				});
			}
	}]);