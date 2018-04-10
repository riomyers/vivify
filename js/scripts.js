/*Show-Hide*/
(function($){$.fn.showHide=function(options){var defaults={speed:1000,easing:'',changeText:0,showText:'Show',hideText:'Hide'};var options=$.extend(defaults,options);$(this).click(function(){$('.toggleDiv').slideUp(options.speed,options.easing);var toggleClick=$(this);var toggleDiv=$(this).attr('rel');$(toggleDiv).slideToggle(options.speed,options.easing,function(){if(options.changeText==1){$(toggleDiv).is(":visible")?toggleClick.text(options.hideText):toggleClick.text(options.showText)}});return false})}})(jQuery);

$(function() {
   $('.sh').showHide({
        speed: 500 
   });   
});

var block = $('.block')

window.onload = block.addClass('sh');

var css3 = $('#css3support'), animation = $('#animationtype'), speed = $('#speedsupport')
if(Modernizr.cssanimations) {
	css3.text("Oh Yes! Your browser supports CSS3 Animations!");
	animation.text("Currently Using Hardware Accelerated CSS3 Keyframes For Animations!");
	speed.text("Bam! Your Current Browser Supports The Speed Options");
} else {
	css3.text("Boo Hoo :( your browser does not support CSS3 Animations!");
	animation.text("Instead We're Using jQuery For Animations!");
	speed.text("Sorry, Your Current Browser Does Not Support The Speed Options");
}
/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a){var e=a[d];if(!z(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}var d="2.6.1",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.csstransitions=function(){return C("transition")};for(var D in o)v(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e}(this,this.document);

$(function() {
$('#container').masonry({
  itemSelector: '.block',
  columnWidth: 50,
  isFitWidth: true,  
  isAnimated: !Modernizr.csstransitions
});
});

$(function() {
//Opacity for fade in animation IE support
  $('.y').css("opacity", "0.1");	
  $('.n').css("opacity", "0.1");
  $('.o').css("opacity", "0.1");
  $('.p').css("opacity", "0.1"); 
  $('.q').css("opacity", "0.1"); 
  $('.r').css("opacity", "0.1"); 
  $('.x').css("opacity", "0.1"); 
  $('.z').css("opacity", "0.1"); 
  $('.aa').css("opacity", "0.1");
  $('.bb').css("opacity", "0.1");
  $('.j').css("opacity", "0.1");
  $('.l').css("opacity", "0.1");
  $('.ii').css("opacity", "0.1"); 
  
  //Begin Animation Calls    
  $('.a').vivify({a:'flash'});
  $('.b').vivify();
  $('.c').vivify({a:'shake'});
  $('.d').vivify({a:'tada'});
  $('.e').vivify({a:'swing'});
  $('.f').vivify({a:'wobble'});
  $('.g').vivify({a:'wiggle'});
  $('.h').vivify({a:'pulse'});
  $('.i').vivify({a:'flip'});
  $('.j').vivify({a:'flipInX'});
  $('.k').vivify({a:'flipOutX'});
  $('.l').vivify({a:'flipInY'});
  $('.m').vivify({a:'flipOutY'});
  $('.n').vivify({a:'fadeIn'});
  $('.o').vivify({a:'fadeInUp'});
  $('.p').vivify({a:'fadeInDown'});
  $('.q').vivify({a:'fadeInLeft'});
  $('.r').vivify({a:'fadeInRight'});
  $('.s').vivify({a:'fadeOut'});
  $('.t').vivify({a:'fadeOutUp'});
  $('.u').vivify({a:'fadeOutDown'});
  $('.v').vivify({a:'fadeOutLeft'});
  $('.w').vivify({a:'fadeOutRight'});
  $('.x').vivify({a:'bounceIn'});
  $('.y').vivify({a:'bounceInDown'});
  $('.z').vivify({a:'bounceInUp'});
  $('.aa').vivify({a:'bounceInLeft'});
  $('.bb').vivify({a:'bounceInRight'});
  $('.cc').vivify({a:'bounceOut'});
  $('.dd').vivify({a:'bounceOutDown'});
  $('.ee').vivify({a:'bounceOutUp'});
  $('.ff').vivify({a:'bounceOutLeft'});
  $('.gg').vivify({a:'bounceOutRight'});
  $('.hh').vivify({a:'rotate'});
  $('.ii').vivify({a:'rotateIn'});
  $('.jj').vivify({a:'rotateOut'}); 
});

    function loadPopup(){   
        if($("#bgPopup").data("state")==0){  
            $("#bgPopup").css({  
                "opacity": "0.9"  
            });  
            $("#bgPopup").fadeIn("medium");  
            $("#Popup").fadeIn("medium");  
            $("#bgPopup").data("state",1);  
        }  
    }  
      
    function disablePopup(){  
        if ($("#bgPopup").data("state")==1){  
            $("#bgPopup").fadeOut("medium");  
            $("#Popup").fadeOut("medium");  
            $("#bgPopup").data("state",0);  
        }  
    }  
      
    jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}
  
      
    function centerPopup(){    
    $("#Popup").center();
    }  
    
   $(function() {  
   $("#bgPopup").data("state",0);  
   $("#myButton").click(function(){  
        centerPopup();  
        loadPopup();     
   });  
   $("#popupClose").click(function(){  
        disablePopup();  
   });  
   $(document).keypress(function(e){  
        if(e.keyCode==27) {  
            disablePopup();   
        }  
    });  
});  
    
$(window).resize(function() {  
centerPopup();  
});