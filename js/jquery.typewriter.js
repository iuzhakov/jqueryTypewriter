/* ---------------------------------
jQuery Typewriter 1.0

Plugin created effect typewriter for text

Author - Iuzhakov Vitaliy
https://github.com/iuzhakov 

----------------------------------- */
;(function( $, window, undefined ){

    'use strict';
    
    $.fn.typewriter = function( opts ) {
        
        var defaults = {
            speed: 50
        };

        var options = $.extend( defaults, opts || {} );

        return this.each( function(){
            // console.time('time');
            var selector = $( this );
            var typewriter = {};

            // wrapping new content into element
            typewriter.wrap = function(element) {
                selector.html(element);
            };

            //Split each letter, create array
            typewriter.splitLetter = function(element){
                var str = element.text()
                var arrLetters = str.split('');
                return arrLetters;
            }(selector);

            //wrapping each letter into <span> tag
            //and change original content
            typewriter.wrapLetters = function(arr){
                var doneArrLetters = [];
                for (var i = 0, letters = arr.length; i < letters; i++) {
                    doneArrLetters[i] = '<span>' + arr[i] + '</span>';
                }
                typewriter.wrap(doneArrLetters);
            }(typewriter.splitLetter);

            //create efferct typewriter
            typewriter.write = function(){
                selector.find('span').css({'opacity':'0'});
                var spans = selector.find('span').length;

                //timer for each letter
                var timer = function(i){
                    setTimeout(function(){
                        var spanNember = 'span:eq(' + (i) + ')';
                        selector.find(spanNember).css({'opacity':'1'});
                    }, defaults.speed * i);
                };

                //after last timer, insert original text into selector
                var originText = function(i){
                    setTimeout(function(){
                        selector.html(selector.text());
                    }, defaults.speed * ( i + 1 ) );
                };

                //loop launches timers 
                for (var i = 0; i < spans; i++ ) {
                    timer(i);
                    if ( i == (spans - 1) ) {
                        originText(i);
                    }
                };
            }();

            // console.timeEnd('time');
        });
    };
}(jQuery, window));