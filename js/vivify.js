/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a){var e=a[d];if(!z(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}var d="2.6.1",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.cssanimations=function(){return C("animationName")};for(var D in o)v(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e}(this,this.document);
/*
 * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
 *
 * limitations:
 * - requires jQuery 1.4.3+
 * - Should you use the *translate* property, then your elements need to be absolutely positionned in a relatively positionned wrapper **or it will fail in IE678**.
 * - transformOrigin is not accessible
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.transform.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 */
(function($,window,document,Math,undefined){var div=document.createElement("div"),divStyle=div.style,suffix="Transform",testProperties=["O"+suffix,"ms"+suffix,"Webkit"+suffix,"Moz"+suffix],i=testProperties.length,supportProperty,supportMatrixFilter,supportFloat32Array="Float32Array"in window,propertyHook,propertyGet,rMatrix=/Matrix([^)]*)/,rAffine=/^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,_transform="transform",_transformOrigin="transformOrigin",_translate="translate",_rotate="rotate",_scale="scale",_skew="skew",_matrix="matrix";while(i--){if(testProperties[i]in divStyle){$.support[_transform]=supportProperty=testProperties[i];$.support[_transformOrigin]=supportProperty+"Origin";continue}}if(!supportProperty){$.support.matrixFilter=supportMatrixFilter=divStyle.filter===""}$.cssNumber[_transform]=$.cssNumber[_transformOrigin]=true;if(supportProperty&&supportProperty!=_transform){$.cssProps[_transform]=supportProperty;$.cssProps[_transformOrigin]=supportProperty+"Origin";if(supportProperty=="Moz"+suffix){propertyHook={get:function(elem,computed){return(computed?$.css(elem,supportProperty).split("px").join(""):elem.style[supportProperty])},set:function(elem,value){elem.style[supportProperty]=/matrix\([^)p]*\)/.test(value)?value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,_matrix+"$1$2px,$3px"):value}}}else if(/^1\.[0-5](?:\.|$)/.test($.fn.jquery)){propertyHook={get:function(elem,computed){return(computed?$.css(elem,supportProperty.replace(/^ms/,"Ms")):elem.style[supportProperty])}}}}else if(supportMatrixFilter){propertyHook={get:function(elem,computed,asArray){var elemStyle=(computed&&elem.currentStyle?elem.currentStyle:elem.style),matrix,data;if(elemStyle&&rMatrix.test(elemStyle.filter)){matrix=RegExp.$1.split(",");matrix=[matrix[0].split("=")[1],matrix[2].split("=")[1],matrix[1].split("=")[1],matrix[3].split("=")[1]]}else{matrix=[1,0,0,1]}if(!$.cssHooks[_transformOrigin]){matrix[4]=elemStyle?parseInt(elemStyle.left,10)||0:0;matrix[5]=elemStyle?parseInt(elemStyle.top,10)||0:0}else{data=$._data(elem,"transformTranslate",undefined);matrix[4]=data?data[0]:0;matrix[5]=data?data[1]:0}return asArray?matrix:_matrix+"("+matrix+")"},set:function(elem,value,animate){var elemStyle=elem.style,currentStyle,Matrix,filter,centerOrigin;if(!animate){elemStyle.zoom=1}value=matrix(value);Matrix=["Matrix("+"M11="+value[0],"M12="+value[2],"M21="+value[1],"M22="+value[3],"SizingMethod='auto expand'"].join();filter=(currentStyle=elem.currentStyle)&&currentStyle.filter||elemStyle.filter||"";elemStyle.filter=rMatrix.test(filter)?filter.replace(rMatrix,Matrix):filter+" progid:DXImageTransform.Microsoft."+Matrix+")";if(!$.cssHooks[_transformOrigin]){if((centerOrigin=$.transform.centerOrigin)){elemStyle[centerOrigin=="margin"?"marginLeft":"left"]=-(elem.offsetWidth/2)+(elem.clientWidth/2)+"px";elemStyle[centerOrigin=="margin"?"marginTop":"top"]=-(elem.offsetHeight/2)+(elem.clientHeight/2)+"px"}elemStyle.left=value[4]+"px";elemStyle.top=value[5]+"px"}else{$.cssHooks[_transformOrigin].set(elem,value)}}}}if(propertyHook){$.cssHooks[_transform]=propertyHook}propertyGet=propertyHook&&propertyHook.get||$.css;$.fx.step.transform=function(fx){var elem=fx.elem,start=fx.start,end=fx.end,pos=fx.pos,transform="",precision=1E5,i,startVal,endVal,unit;if(!start||typeof start==="string"){if(!start){start=propertyGet(elem,supportProperty)}if(supportMatrixFilter){elem.style.zoom=1}end=end.split("+=").join(start);return $.extend(fx,interpolationList(start,end))}i=start.length;while(i--){startVal=start[i];endVal=end[i];unit=+false;switch(startVal[0]){case _translate:unit="px";case _scale:unit||(unit=" ");transform=startVal[0]+"("+Math.round((startVal[1][0]+(endVal[1][0]-startVal[1][0])*pos)*precision)/precision+unit+","+Math.round((startVal[1][1]+(endVal[1][1]-startVal[1][1])*pos)*precision)/precision+unit+")"+transform;break;case _skew+"X":case _skew+"Y":case _rotate:transform=startVal[0]+"("+Math.round((startVal[1]+(endVal[1]-startVal[1])*pos)*precision)/precision+"rad)"+transform;break}}fx.origin&&(transform=fx.origin+transform);propertyHook&&propertyHook.set?propertyHook.set(elem,transform,+true):elem.style[supportProperty]=transform};function matrix(transform){transform=transform.split(")");var trim=$.trim,i=-1,l=transform.length-1,split,prop,val,prev=supportFloat32Array?new Float32Array(6):[],curr=supportFloat32Array?new Float32Array(6):[],rslt=supportFloat32Array?new Float32Array(6):[1,0,0,1,0,0];prev[0]=prev[3]=rslt[0]=rslt[3]=1;prev[1]=prev[2]=prev[4]=prev[5]=0;while(++i<l){split=transform[i].split("(");prop=trim(split[0]);val=split[1];curr[0]=curr[3]=1;curr[1]=curr[2]=curr[4]=curr[5]=0;switch(prop){case _translate+"X":curr[4]=parseInt(val,10);break;case _translate+"Y":curr[5]=parseInt(val,10);break;case _translate:val=val.split(",");curr[4]=parseInt(val[0],10);curr[5]=parseInt(val[1]||0,10);break;case _rotate:val=toRadian(val);curr[0]=Math.cos(val);curr[1]=Math.sin(val);curr[2]=-Math.sin(val);curr[3]=Math.cos(val);break;case _scale+"X":curr[0]=+val;break;case _scale+"Y":curr[3]=val;break;case _scale:val=val.split(",");curr[0]=val[0];curr[3]=val.length>1?val[1]:val[0];break;case _skew+"X":curr[2]=Math.tan(toRadian(val));break;case _skew+"Y":curr[1]=Math.tan(toRadian(val));break;case _matrix:val=val.split(",");curr[0]=val[0];curr[1]=val[1];curr[2]=val[2];curr[3]=val[3];curr[4]=parseInt(val[4],10);curr[5]=parseInt(val[5],10);break}rslt[0]=prev[0]*curr[0]+prev[2]*curr[1];rslt[1]=prev[1]*curr[0]+prev[3]*curr[1];rslt[2]=prev[0]*curr[2]+prev[2]*curr[3];rslt[3]=prev[1]*curr[2]+prev[3]*curr[3];rslt[4]=prev[0]*curr[4]+prev[2]*curr[5]+prev[4];rslt[5]=prev[1]*curr[4]+prev[3]*curr[5]+prev[5];prev=[rslt[0],rslt[1],rslt[2],rslt[3],rslt[4],rslt[5]]}return rslt}function unmatrix(matrix){var scaleX,scaleY,skew,A=matrix[0],B=matrix[1],C=matrix[2],D=matrix[3];if(A*D-B*C){scaleX=Math.sqrt(A*A+B*B);A/=scaleX;B/=scaleX;skew=A*C+B*D;C-=A*skew;D-=B*skew;scaleY=Math.sqrt(C*C+D*D);C/=scaleY;D/=scaleY;skew/=scaleY;if(A*D<B*C){A=-A;B=-B;skew=-skew;scaleX=-scaleX}}else{scaleX=scaleY=skew=0}return[[_translate,[+matrix[4],+matrix[5]]],[_rotate,Math.atan2(B,A)],[_skew+"X",Math.atan(skew)],[_scale,[scaleX,scaleY]]]}function interpolationList(start,end){var list={start:[],end:[]},i=-1,l,currStart,currEnd,currType;(start=="none"||isAffine(start))&&(start="");(end=="none"||isAffine(end))&&(end="");if(start&&end&&!end.indexOf("matrix")&&toArray(start).join()==toArray(end.split(")")[0]).join()){list.origin=start;start="";end=end.slice(end.indexOf(")")+1)}if(!start&&!end){return}if(!start||!end||functionList(start)==functionList(end)){start&&(start=start.split(")"))&&(l=start.length);end&&(end=end.split(")"))&&(l=end.length);while(++i<l-1){start[i]&&(currStart=start[i].split("("));end[i]&&(currEnd=end[i].split("("));currType=$.trim((currStart||currEnd)[0]);append(list.start,parseFunction(currType,currStart?currStart[1]:0));append(list.end,parseFunction(currType,currEnd?currEnd[1]:0))}}else{list.start=unmatrix(matrix(start));list.end=unmatrix(matrix(end))}return list}function parseFunction(type,value){var defaultValue=+(!type.indexOf(_scale)),scaleX,cat=type.replace(/e[XY]/,"e");switch(type){case _translate+"Y":case _scale+"Y":value=[defaultValue,value?parseFloat(value):defaultValue];break;case _translate+"X":case _translate:case _scale+"X":scaleX=1;case _scale:value=value?(value=value.split(","))&&[parseFloat(value[0]),parseFloat(value.length>1?value[1]:type==_scale?scaleX||value[0]:defaultValue+"")]:[defaultValue,defaultValue];break;case _skew+"X":case _skew+"Y":case _rotate:value=value?toRadian(value):0;break;case _matrix:return unmatrix(value?toArray(value):[1,0,0,1,0,0]);break}return[[cat,value]]}function isAffine(matrix){return rAffine.test(matrix)}function functionList(transform){return transform.replace(/(?:\([^)]*\))|\s/g,"")}function append(arr1,arr2,value){while(value=arr2.shift()){arr1.push(value)}}function toRadian(value){return~value.indexOf("deg")?parseInt(value,10)*(Math.PI*2/360):~value.indexOf("grad")?parseInt(value,10)*(Math.PI/200):parseFloat(value)}function toArray(matrix){matrix=/([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(matrix);return[matrix[1],matrix[2],matrix[3],matrix[4],matrix[5],matrix[6]]}$.transform={centerOrigin:"margin"}})(jQuery,window,document,Math)
/*
vivify.js - http://vivify.riomyers.com
by Rio Myers - http://riolism

MIT License
-----------------------------------------------------------------------------
Copyright (c) 2012 Rio Myers, http://riomyers.com
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
if(Modernizr.cssanimations) {
$(function () {
"use strict";
    $.fn.vivify = function(o) {
        var def = {
            a: 'bounce',
			s: 'default'
        };

        o = $.extend(def,o);
        return this.each(function() {
            var obj = $(this), a = o.a, s = o.s;            

obj.hover(function() {
obj.addClass(a);
obj.addClass(s);
},
function() {
obj.removeClass(a);
obj.removeClass(s);

            });
        });
    };
});
} else {
$(function() {
    $.fn.vivify = function(o) {
        var def = {
            a: 'bounce'
        };
        o = $.extend(def,o);
        return this.each(function() {
	        var obj = $(this), a = o.a;
		
            obj.hover(function() {
                switch (a) {
                case 'flash':
                	$(this).animate({opacity: 0}, 250 );
                	$(this).animate({opacity: 1}, 250 );
                	$(this).animate({opacity: 0}, 250 );
                	$(this).animate({opacity: 1}, 250 );
					break;                
                case 'bounce':
                	$(this).css("position", "relative");
                	$(this).animate({transform: 'translateY(0)'}, 200);
                	$(this).animate({transform: 'translateY(-30px)'}, 200);
                	$(this).animate({transform: 'translateY(0)'}, 200);
                	$(this).animate({transform: 'translateY(-15px)'}, 200);
                	$(this).animate({transform: 'translateY(0)'}, 200);
                	break;
                case 'shake':
                	$(this).css("position", "relative");
                	$(this).animate({transform: 'translateX(0)'}, 91);
                	$(this).animate({transform: 'translateX(-10px)'}, 91);
                	$(this).animate({transform: 'translateX(10px)'}, 91);
                	$(this).animate({transform: 'translateX(-10px)'}, 91);
                	$(this).animate({transform: 'translateX(10px)'}, 91);
                	$(this).animate({transform: 'translateX(-10px)'}, 91);
                	$(this).animate({transform: 'translateX(10px)'}, 91);
                	$(this).animate({transform: 'translateX(-10px)'}, 91);
                	$(this).animate({transform: 'translateX(10px)'}, 91);
                	$(this).animate({transform: 'translateX(-10px)'}, 91);
                	$(this).animate({transform: 'translateX(0)'}, 91);															
					break;
                case 'tada':
                    $(this).animate({transform: 'scale(1)'},100);
                    $(this).animate({transform: 'scale(0.9) rotate(-3deg)'},100);
                    $(this).animate({transform: 'scale(1.1) rotate(3deg)'},100);
                    $(this).animate({transform: 'scale(1.1) rotate(-3deg)'},100);
                    $(this).animate({transform: 'scale(1.1) rotate(3deg)'},100);
                    $(this).animate({transform: 'scale(1.1) rotate(-3deg)'},100);
                    $(this).animate({transform: 'scale(1.1) rotate(3deg)'},100);
                    $(this).animate({transform: 'scale(1.1) rotate(-3deg)'},100);
                    $(this).animate({transform: 'scale(1.1) rotate(3deg)'},100);
                    $(this).animate({transform: 'scale(1) rotate(0)'},100);                    
                    break;
                case 'swing':
                	$(this).animate({transformOrigin: 'top center'},100);
                	$(this).animate({transform: 'rotate(15deg)'},100);
                	$(this).animate({transformOrigin: 'top center'},100);
                	$(this).animate({transform: 'rotate(-10deg)'},100);
                	$(this).animate({transformOrigin: 'top center'},100);
                	$(this).animate({transform: 'rotate(5deg)'},100);
                	$(this).animate({transformOrigin: 'top center'},100);
                	$(this).animate({transform: 'rotate(-5deg)'},100);
                	$(this).animate({transformOrigin: 'top center'},100);
                	$(this).animate({transform: 'rotate(0)'},100);					
					break;
                case 'wobble':
                	$(this).css("position", "relative");
                    $(this).animate({transform: 'translateX(0)'},143);
                    $(this).animate({transform: 'translateX(-25%) rotate(-5deg)'},143);
                    $(this).animate({transform: 'translateX(20%) rotate(3deg)'},143);
                    $(this).animate({transform: 'translateX(-15%) rotate(-3deg)'},143);
                    $(this).animate({transform: 'translateX(10%) rotate(2deg)'},143);
                    $(this).animate({transform: 'translateX(-5%) rotate(-1deg)'},143);
                    $(this).animate({transform: 'translateX(0)'},143);
                    break;
                case 'wiggle':
                    $(this).animate({transform: 'skewX(9deg)'},91);
                    $(this).animate({transform: 'skewX(-8deg)'},91);
                    $(this).animate({transform: 'skewX(7deg)'},91);
                    $(this).animate({transform: 'skewX(-6deg)'},91);
                    $(this).animate({transform: 'skewX(5deg)'},91);
                    $(this).animate({transform: 'skewX(-4deg)'},91);
                    $(this).animate({transform: 'skewX(3deg)'},91);
                    $(this).animate({transform: 'skewX(-2deg)'},91);
                    $(this).animate({transform: 'skewX(1deg)'},91);
                    $(this).animate({transform: 'skewX(0deg)'},91);
                    $(this).animate({transform: 'skewX(0deg)'},91);
                    break;
                case 'pulse':
                    $(this).animate({transform: 'scale(1)'},333);
                    $(this).animate({transform: 'scale(1.1)'},333);
                    $(this).animate({transform: 'scale(1)'},333);
                    break;
                case 'fadeOut':
                	$(this).css("opacity","1");
                	$(this).animate({opacity: '0'},1000);
                    break;
                case 'fadeOutUp':
                	$(this).css("position", "relative");
                	$(this).css("opacity","1");
                	$(this).animate({transform: 'translateY(0)'});
                	$(this).animate({opacity: '0'},{queue:false,duration:1200});
                	$(this).animate({transform: 'translateY(-20px)'},700);                                        
                    break;
                case 'fadeOutDown':
                	$(this).css("position", "relative");
                	$(this).css("opacity","1");                	
                	$(this).animate({transform: 'translateY(0)'});
                	$(this).animate({opacity: '0'},{queue:false,duration:1200});
                	$(this).animate({transform: 'translateY(20px)'},700);
                    break;
                case 'fadeOutLeft':
                	$(this).css("position", "relative");
                	$(this).css("opacity","1");
                	$(this).animate({transform: 'translateX(0)'});
                	$(this).animate({opacity: '0'},{queue:false,duration:1200});
                	$(this).animate({transform: 'translateX(-20px)'},700);
                    break;
                case 'fadeOutRight':
                	$(this).css("position", "relative");
                	$(this).css("opacity","1");
                	$(this).animate({transform: 'translateX(0)'});
                	$(this).animate({opacity: '0'},{queue:false,duration:1200});
                	$(this).animate({transform: 'translateX(20px)'},700);
                    break;
                case 'bounceOut':
                	$(this).css("opacity","1");
                	$(this).animate({opacity: '0'},{queue:false,duration:1400}) 
                	$(this).animate({transform: 'scale(1)'},200);
                	$(this).animate({transform: 'scale(.95)'},200);
                	$(this).animate({transform: 'scale(1.1)'},200);
                	$(this).animate({transform: 'scale(.3)'},200);
                    break;                    
                case 'bounceOutDown':
                	$(this).css("opacity", "1");
                	$(this).css("position", "relative");
                    $(this).animate({opacity: '0'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateY(-50px)'});;
                    $(this).animate({transform: 'translateY(30px)'});
                    $(this).animate({transform: 'translateY(-10px)'});
                    $(this).animate({transform: 'translateY(0)'});
                    $(this).animate({opacity: '0'});
                    break;                    
                case 'bounceOutUp':
                    $(this).css("opacity", "1");
                	$(this).css("position", "relative");
                    $(this).animate({opacity: '0'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateY(50px)'});;
                    $(this).animate({transform: 'translateY(-30px)'});
                    $(this).animate({transform: 'translateY(10px)'});
                    $(this).animate({transform: 'translateY(0)'});
                    $(this).animate({opacity: '0'});
                    break;
                case 'bounceOutLeft':
                    $(this).css("opacity", "1");
                	$(this).css("position", "relative");
                    $(this).animate({opacity: '0'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateX(50px)'});;
                    $(this).animate({transform: 'translateX(-30px)'});
                    $(this).animate({transform: 'translateX(10px)'});
                    $(this).animate({transform: 'translateX(0)'});
                    $(this).animate({opacity: '0'});
                    break;
                case 'bounceOutRight':
                    $(this).css("opacity", "1");
                	$(this).css("position", "relative");
                    $(this).animate({opacity: '0'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateX(-50px)'});;
                    $(this).animate({transform: 'translateX(30px)'});
                    $(this).animate({transform: 'translateX(-10px)'});
                    $(this).animate({transform: 'translateX(0)'});
                    $(this).animate({opacity: '0'});
                    break;
                    case 'rotate':
                    $(this).animate({transform: 'rotate(-360deg)'},700);
                    $(this).animate({transform: 'rotate(0)'});
                    break;
                case 'fadeIn':
                	$(this).animate({opacity: '0'});                
                	$(this).animate({opacity: '1'},2000);
                    break; 
                case 'fadeInUp':
                	$(this).css("opacity", "0");
                	$(this).css("position", "relative");
                	$(this).animate({transform: 'translateY(0)'});
                	$(this).animate({opacity: '1'},{queue:false,duration:1800});  
                	$(this).animate({transform: 'translateY(-20px)'});               	
                    break;
                case 'fadeInDown':
                	$(this).css("opacity", "0");
                	$(this).css("position", "relative");
                	$(this).animate({transform: 'translateY(0)'});
                	$(this).animate({opacity: '1'},{queue:false,duration:1800});  
                	$(this).animate({transform: 'translateY(20px)'});
                    break;
                case 'fadeInLeft':
                	$(this).css("opacity", "0");
                	$(this).css("position", "relative");
                	$(this).animate({transform: 'translateX(0)'});
                	$(this).animate({opacity: '1'},{queue:false,duration:1800});  
                	$(this).animate({transform: 'translateX(-20px)'});
                    break;
                case 'fadeInRight':
                	$(this).css("opacity", "0");
                	$(this).css("position", "relative");
                	$(this).animate({transform: 'translateX(0)'});
                	$(this).animate({opacity: '1'},{queue:false,duration:1800});  
                	$(this).animate({transform: 'translateX(20px)'});
                    break;
                case 'bounceIn':
                    $(this).css("opacity", "0");
                    $(this).animate({transform: 'scale(.3)'});
                    $(this).animate({opacity: '1'});
                    $(this).animate({transform: 'scale(1.05)'});
                    $(this).animate({transform: 'scale(.9)'});
                    $(this).animate({transform: 'scale(1)'});
                    $(this).animate({opacity: '1'});                                                                            
                    break;
                case 'bounceInDown':
                    $(this).css("opacity", "0");
                    $(this).css("position", "relative");
                    $(this).animate({opacity: '1'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateY(-50px)'});;
                    $(this).animate({transform: 'translateY(30px)'});
                    $(this).animate({transform: 'translateY(-10px)'});
                    $(this).animate({transform: 'translateY(0)'});
                    $(this).animate({opacity: '1'}); 
                    break;
                case 'bounceInUp':
                    $(this).css("opacity", "0");
                    $(this).css("position", "relative");
                    $(this).animate({opacity: '1'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateY(50px)'});;
                    $(this).animate({transform: 'translateY(-30px)'});
                    $(this).animate({transform: 'translateY(10px)'});
                    $(this).animate({transform: 'translateY(0)'});
                    $(this).animate({opacity: '1'});
                    break;                    
                case 'bounceInLeft':
                    $(this).css("opacity", "0");
                    $(this).css("position", "relative");
                    $(this).animate({opacity: '1'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateX(-50px)'});;
                    $(this).animate({transform: 'translateX(30px)'});
                    $(this).animate({transform: 'translateX(-10px)'});
                    $(this).animate({transform: 'translateX(0)'});
                    $(this).animate({opacity: '1'});
                    break;
                case 'bounceInRight':
                    $(this).css("opacity", "0");
                    $(this).css("position", "relative");
                    $(this).animate({opacity: '1'},{queue:false,duration:1800})                	                    
                    $(this).animate({transform: 'translateX(50px)'});
                    $(this).animate({transform: 'translateX(-30px)'});
                    $(this).animate({transform: 'translateX(10px)'});
                    $(this).animate({transform: 'translateX(0)'});
                    $(this).animate({opacity: '1'});
                    break;                   					                                                                                                                  
                case 'rotateIn':
                	$(this).css("opacity", "0");
                	$(this).animate({opacity: '1'},{queue:false,duration:1200});
                	$(this).animate({transform: 'rotate(-200deg)'});
                	$(this).animate({transform: 'rotate(0)'});
                	$(this).animate({opacity: '1'});
                    break;
                case 'rotateOut':
                	$(this).css("opacity", "1");
                	$(this).animate({opacity: '0'},{queue:false,duration:1200});
                	$(this).animate({transform: 'rotate(200deg)'});
                	$(this).animate({transform: 'rotate(0)'});
                	$(this).animate({opacity: '0'});
                    break;                    
                }
				//Oh Yeah!
            },

            function() {
            return false;
            });
        });
    };
})(jQuery);
}
