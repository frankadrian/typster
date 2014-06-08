'use strict';

angular.module('typesterApp')
    .controller('TypetestCtrl', function ($scope) {
        //$scope.timer;
        $scope.avgWpm = 0;
        $scope.wordCount = 0;
        $scope.userInput = '';
        $scope.previewText = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human';
        $scope.result = {};

        function resetScope () {
            $scope.avgWpm = 0;
            $scope.wordCount = 0;
            $scope.userInput = '';
            $scope.result = {};
        }

        $scope.startTimer = function () {
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
            resetScope();

            //for tests to pass
            var inputElement = document.getElementById('input-text');
            if (inputElement) {
                inputElement.focus();
            }
        };

        $scope.stopTimer = function () {
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
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
                //maybe consider using 5 char = 1 word
                $scope.wordCount = $scope.userInput.length / 5;
            }
        };

        $scope.calculateWpm = function (data) {
            var minutes = data.minutes + (data.seconds / 60);
            $scope.avgWpm = $scope.wordCount / minutes;
        };

        $scope.$on('timer-stopped', function (event, data) {
            /*console.log('minutes = ' + data.minutes);
             console.log('seconds = ' + data.seconds);*/

            $scope.calculateWpm(data);
            $scope.evaluateResult();

        });

        $scope.evaluateResult = function () {
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
                        //increment error
                        errorCount++;
                        //add error message
                        errors.push(typedWord + ' did not equal ' + neededWord);
                    }
                } else {
                    //user did not type this word
                }
            }

            $scope.result = {
                'errors': errors,
                'errorCount': errorCount
            };
        };


    });
