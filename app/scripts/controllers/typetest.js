'use strict';

angular.module('typesterApp')
    .controller('TypetestCtrl', function ($scope, Text) {
        $scope.avgWpm = 0;
        $scope.wordCount = 0;
        $scope.userInput = '';
        $scope.previewText = Text.getRandomText();
        $scope.result = {};
        $scope.timerRunning = false;

        function resetScope () {
            $scope.avgWpm = 0;
            $scope.wordCount = 0;
            $scope.userInput = '';
            $scope.result = {};
        }

        $scope.$on('timer-started', function () {
            resetScope();
            $scope.timerRunning = true;

            //for tests to pass
            var inputElement = document.getElementById('input-text');
            if (inputElement) {
                inputElement.focus();
            }
        });

        $scope.$on('timer-stopped', function (event, data) {
            $scope.timerRunning = false;
            $scope.calculateWpm(data);
            $scope.evaluateResult();

        });

        $scope.startTimer = function () {
            //broadcast for angular-timer
            $scope.$broadcast('timer-start');
            $scope.$broadcast('timer-started');
        };

        $scope.stopTimer = function () {
            $scope.$broadcast('timer-stop');
        };

        $scope.textInputPaste = function (event) {
            event.preventDefault();
            alert('paste is for cheaters');
            $scope.userInput = '';
        };

        $scope.userInputChanged = function (event) {

            if ($scope.timerRunning) {
                //if ctrl+enter was pressed stop timer.
                if (event.ctrlKey && event.keyCode === 13) {
                    $scope.stopTimer();
                }
                //update wordcount
                //using 5 char = 1 word
                $scope.wordCount = $scope.userInput.length / 5;
            }
        };

        $scope.calculateWpm = function (data) {
            var minutes = data.minutes + (data.seconds / 60);
            $scope.avgWpm = $scope.wordCount / minutes;
        };

        $scope.evaluateResult = function () {
            //basically split the text by words and compare
            //for a match
            var boilerTextArr = $scope.previewText.split(' '),
                typedTextArr = $scope.userInput.split(' '),
                errorCount = 0,
                errors = [],
                i = 0, len = boilerTextArr.length;

            for (; len > i; i++) {
                var neededWord = boilerTextArr[i],
                    typedWord = typedTextArr[i];
                if (typedWord) {
                    if (typedWord !== neededWord) {
                        errorCount++;
                        //add error message
                        errors.push(typedWord + ' did not equal ' + neededWord);
                    }
                    //} else
                    //user did not type this word
                }
            }

            $scope.result = {
                'errors': errors,
                'errorCount': errorCount
            };
        };
    });
