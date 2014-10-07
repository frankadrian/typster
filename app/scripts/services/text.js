'use strict';

/**
 * @ngdoc service
 * @name typesterApp.text
 * @description
 * # text
 * Service in the typesterApp.
 */
angular.module('typesterApp')
    .service('Text', function Text () {
        var text = [];
        text[0] = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human';
        text[1] = "There she slept, a puckered little bundle of DNA fighting to organise. She looked and smelled like a lump of dough. Her breathing rattled less than it had when she was born; I could hardly tell she was alive apart from that relentless ticking. There was an electronic pad tucked beneath her baby mattress that sensed her breathing, translating each inhalation and exhalation into a metronomic tick. The ticks were supposed to be reassuring, but to me they sounded like a countdown.";

        var randomInt = function (max) {
            return Math.floor((Math.random() * max));
        };

        return {
            getText: function () {
                return text;
            },
            getRandomText: function () {
                return text[randomInt(text.length)];
            },
            addText: function (newText) {
                text.push(newText);
                return text;
            }
        };
    });
