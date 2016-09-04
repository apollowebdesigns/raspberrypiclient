'use strict';

var app = angular.module('app', []);


app.controller('myController', 
    function ($http) {
        this.test = "hello";
        this.turnLightOn = function() {
            $http.get("http://92.168.1.69:8888")
            .then(function(response) {
                //this.myWelcome = response.data;
            });
        }
    } );

  