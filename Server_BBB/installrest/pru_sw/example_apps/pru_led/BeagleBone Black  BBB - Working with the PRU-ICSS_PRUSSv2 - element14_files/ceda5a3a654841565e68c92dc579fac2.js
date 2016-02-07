/*
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function(aC,z){var Y=aC.document;var a=(function(){var a2=function(bn,bo){return new a2.fn.init(bn,bo)},bi=aC.jQuery,a4=aC.$,a0,bm=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,aV=/^.[^:#\[\.,]*$/,ba=/\S/,aX=/\s/,a6=/^\s+/,a1=/\s+$/,aS=/\W/,a5=/\d/,aY=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bb=/^[\],:{}\s]*$/,bk=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bd=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,a7=/(?:^|:|,)(?:\s*\[)+/g,aU=/(webkit)[ \/]([\w.]+)/,bf=/(opera)(?:.*version)?[ \/]([\w.]+)/,be=/(msie) ([\w.]+)/,bg=/(mozilla)(?:.*? rv:([\w.]+))?/,bl=navigator.userAgent,bj,bh=false,aZ=[],aP,a9=Object.prototype.toString,a3=Object.prototype.hasOwnProperty,aW=Array.prototype.push,a8=Array.prototype.slice,bc=String.prototype.trim,aQ=Array.prototype.indexOf,aT={};a2.fn=a2.prototype={init:function(bn,bq){var bp,br,bo,bs;if(!bn){return this}if(bn.nodeType){this.context=this[0]=bn;this.length=1;return this}if(bn==="body"&&!bq&&Y.body){this.context=Y;this[0]=Y.body;this.selector="body";this.length=1;return this}if(typeof bn==="string"){bp=bm.exec(bn);if(bp&&(bp[1]||!bq)){if(bp[1]){bs=(bq?bq.ownerDocument||bq:Y);bo=aY.exec(bn);if(bo){if(a2.isPlainObject(bq)){bn=[Y.createElement(bo[1])];a2.fn.attr.call(bn,bq,true)}else{bn=[bs.createElement(bo[1])]}}else{bo=a2.buildFragment([bp[1]],[bs]);bn=(bo.cacheable?bo.fragment.cloneNode(true):bo.fragment).childNodes}return a2.merge(this,bn)}else{br=Y.getElementById(bp[2]);if(br&&br.parentNode){if(br.id!==bp[2]){return a0.find(bn)}this.length=1;this[0]=br}this.context=Y;this.selector=bn;return this}}else{if(!bq&&!aS.test(bn)){this.selector=bn;this.context=Y;bn=Y.getElementsByTagName(bn);return a2.merge(this,bn)}else{if(!bq||bq.jquery){return(bq||a0).find(bn)}else{return a2(bq).find(bn)}}}}else{if(a2.isFunction(bn)){return a0.ready(bn)}}if(bn.selector!==z){this.selector=bn.selector;this.context=bn.context}return a2.makeArray(bn,this)},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},toArray:function(){return a8.call(this,0)},get:function(bn){return bn==null?this.toArray():(bn<0?this.slice(bn)[0]:this[bn])},pushStack:function(bo,bq,bn){var bp=a2();if(a2.isArray(bo)){aW.apply(bp,bo)}else{a2.merge(bp,bo)}bp.prevObject=this;bp.context=this.context;if(bq==="find"){bp.selector=this.selector+(this.selector?" ":"")+bn}else{if(bq){bp.selector=this.selector+"."+bq+"("+bn+")"}}return bp},each:function(bo,bn){return a2.each(this,bo,bn)},ready:function(bn){a2.bindReady();if(a2.isReady){bn.call(Y,a2)}else{if(aZ){aZ.push(bn)}}return this},eq:function(bn){return bn===-1?this.slice(bn):this.slice(bn,+bn+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(a8.apply(this,arguments),"slice",a8.call(arguments).join(","))},map:function(bn){return this.pushStack(a2.map(this,function(bp,bo){return bn.call(bp,bo,bp)}))},end:function(){return this.prevObject||a2(null)},push:aW,sort:[].sort,splice:[].splice};a2.fn.init.prototype=a2.fn;a2.extend=a2.fn.extend=function(){var bw,bp,bn,bo,bt,bu,bs=arguments[0]||{},br=1,bq=arguments.length,bv=false;if(typeof bs==="boolean"){bv=bs;bs=arguments[1]||{};br=2}if(typeof bs!=="object"&&!a2.isFunction(bs)){bs={}}if(bq===br){bs=this;--br}for(;br<bq;br++){if((bw=arguments[br])!=null){for(bp in bw){bn=bs[bp];bo=bw[bp];if(bs===bo){continue}if(bv&&bo&&(a2.isPlainObject(bo)||(bt=a2.isArray(bo)))){if(bt){bt=false;bu=bn&&a2.isArray(bn)?bn:[]}else{bu=bn&&a2.isPlainObject(bn)?bn:{}}bs[bp]=a2.extend(bv,bu,bo)}else{if(bo!==z){bs[bp]=bo}}}}}return bs};a2.extend({noConflict:function(bn){aC.$=a4;if(bn){aC.jQuery=bi}return a2},isReady:false,readyWait:1,ready:function(bq){if(bq===true){a2.readyWait--}if(!a2.readyWait||(bq!==true&&!a2.isReady)){if(!Y.body){return setTimeout(a2.ready,1)}a2.isReady=true;if(bq!==true&&--a2.readyWait>0){return}if(aZ){var bp,bn=0,bo=aZ;aZ=null;while((bp=bo[bn++])){bp.call(Y,a2)}if(a2.fn.trigger){a2(Y).trigger("ready").unbind("ready")}}}},bindReady:function(){if(bh){return}bh=true;if(Y.readyState==="complete"){return setTimeout(a2.ready,1)}if(Y.addEventListener){Y.addEventListener("DOMContentLoaded",aP,false);aC.addEventListener("load",a2.ready,false)}else{if(Y.attachEvent){Y.attachEvent("onreadystatechange",aP);aC.attachEvent("onload",a2.ready);var bn=false;try{bn=aC.frameElement==null}catch(bo){}if(Y.documentElement.doScroll&&bn){aR()}}}},isFunction:function(bn){return a2.type(bn)==="function"},isArray:Array.isArray||function(bn){return a2.type(bn)==="array"},isWindow:function(bn){return bn&&typeof bn==="object"&&"setInterval" in bn},isNaN:function(bn){return bn==null||!a5.test(bn)||isNaN(bn)},type:function(bn){return bn==null?String(bn):aT[a9.call(bn)]||"object"},isPlainObject:function(bo){if(!bo||a2.type(bo)!=="object"||bo.nodeType||a2.isWindow(bo)){return false}if(bo.constructor&&!a3.call(bo,"constructor")&&!a3.call(bo.constructor.prototype,"isPrototypeOf")){return false}var bn;for(bn in bo){}return bn===z||a3.call(bo,bn)},isEmptyObject:function(bo){for(var bn in bo){return false}return true},error:function(bn){throw bn},parseJSON:function(bn){if(typeof bn!=="string"||!bn){return null}bn=a2.trim(bn);if(bb.test(bn.replace(bk,"@").replace(bd,"]").replace(a7,""))){return aC.JSON&&aC.JSON.parse?aC.JSON.parse(bn):(new Function("return "+bn))()}else{a2.error("Invalid JSON: "+bn)}},noop:function(){},globalEval:function(bp){if(bp&&ba.test(bp)){var bo=Y.getElementsByTagName("head")[0]||Y.documentElement,bn=Y.createElement("script");bn.type="text/javascript";if(a2.support.scriptEval){bn.appendChild(Y.createTextNode(bp))}else{bn.text=bp}bo.insertBefore(bn,bo.firstChild);bo.removeChild(bn)}},nodeName:function(bo,bn){return bo.nodeName&&bo.nodeName.toUpperCase()===bn.toUpperCase()},each:function(bq,bu,bp){var bo,br=0,bs=bq.length,bn=bs===z||a2.isFunction(bq);if(bp){if(bn){for(bo in bq){if(bu.apply(bq[bo],bp)===false){break}}}else{for(;br<bs;){if(bu.apply(bq[br++],bp)===false){break}}}}else{if(bn){for(bo in bq){if(bu.call(bq[bo],bo,bq[bo])===false){break}}}else{for(var bt=bq[0];br<bs&&bu.call(bt,br,bt)!==false;bt=bq[++br]){}}}return bq},trim:bc?function(bn){return bn==null?"":bc.call(bn)}:function(bn){return bn==null?"":bn.toString().replace(a6,"").replace(a1,"")},makeArray:function(bq,bo){var bn=bo||[];if(bq!=null){var bp=a2.type(bq);if(bq.length==null||bp==="string"||bp==="function"||bp==="regexp"||a2.isWindow(bq)){aW.call(bn,bq)}else{a2.merge(bn,bq)}}return bn},inArray:function(bp,bq){if(bq.indexOf){return bq.indexOf(bp)}for(var bn=0,bo=bq.length;bn<bo;bn++){if(bq[bn]===bp){return bn}}return -1},merge:function(br,bp){var bq=br.length,bo=0;if(typeof bp.length==="number"){for(var bn=bp.length;bo<bn;bo++){br[bq++]=bp[bo]}}else{while(bp[bo]!==z){br[bq++]=bp[bo++]}}br.length=bq;return br},grep:function(bo,bt,bn){var bp=[],bs;bn=!!bn;for(var bq=0,br=bo.length;bq<br;bq++){bs=!!bt(bo[bq],bq);if(bn!==bs){bp.push(bo[bq])}}return bp},map:function(bo,bt,bn){var bp=[],bs;for(var bq=0,br=bo.length;bq<br;bq++){bs=bt(bo[bq],bq,bn);if(bs!=null){bp[bp.length]=bs}}return bp.concat.apply([],bp)},guid:1,proxy:function(bp,bo,bn){if(arguments.length===2){if(typeof bo==="string"){bn=bp;bp=bn[bo];bo=z}else{if(bo&&!a2.isFunction(bo)){bn=bo;bo=z}}}if(!bo&&bp){bo=function(){return bp.apply(bn||this,arguments)}}if(bp){bo.guid=bp.guid=bp.guid||bo.guid||a2.guid++}return bo},access:function(bn,bv,bt,bp,bs,bu){var bo=bn.length;if(typeof bv==="object"){for(var bq in bv){a2.access(bn,bq,bv[bq],bp,bs,bt)}return bn}if(bt!==z){bp=!bu&&bp&&a2.isFunction(bt);for(var br=0;br<bo;br++){bs(bn[br],bv,bp?bt.call(bn[br],br,bs(bn[br],bv)):bt,bu)}return bn}return bo?bs(bn[0],bv):z},now:function(){return(new Date()).getTime()},uaMatch:function(bo){bo=bo.toLowerCase();var bn=aU.exec(bo)||bf.exec(bo)||be.exec(bo)||bo.indexOf("compatible")<0&&bg.exec(bo)||[];return{browser:bn[1]||"",version:bn[2]||"0"}},browser:{}});a2.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bo,bn){aT["[object "+bn+"]"]=bn.toLowerCase()});bj=a2.uaMatch(bl);if(bj.browser){a2.browser[bj.browser]=true;a2.browser.version=bj.version}if(a2.browser.webkit){a2.browser.safari=true}if(aQ){a2.inArray=function(bn,bo){return aQ.call(bo,bn)}}if(!aX.test("\xA0")){a6=/^[\s\xA0]+/;a1=/[\s\xA0]+$/}a0=a2(Y);if(Y.addEventListener){aP=function(){Y.removeEventListener("DOMContentLoaded",aP,false);a2.ready()}}else{if(Y.attachEvent){aP=function(){if(Y.readyState==="complete"){Y.detachEvent("onreadystatechange",aP);a2.ready()}}}}function aR(){if(a2.isReady){return}try{Y.documentElement.doScroll("left")}catch(bn){setTimeout(aR,1);return}a2.ready()}return(aC.jQuery=aC.$j=a2)})();(function(){a.support={};var aW=Y.documentElement,aV=Y.createElement("script"),aP=Y.createElement("div"),aQ="script"+a.now();aP.style.display="none";aP.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var aZ=aP.getElementsByTagName("*"),aX=aP.getElementsByTagName("a")[0],aY=Y.createElement("select"),aR=aY.appendChild(Y.createElement("option"));if(!aZ||!aZ.length||!aX){return}a.support={leadingWhitespace:aP.firstChild.nodeType===3,tbody:!aP.getElementsByTagName("tbody").length,htmlSerialize:!!aP.getElementsByTagName("link").length,style:/red/.test(aX.getAttribute("style")),hrefNormalized:aX.getAttribute("href")==="/a",opacity:/^0.55$/.test(aX.style.opacity),cssFloat:!!aX.style.cssFloat,checkOn:aP.getElementsByTagName("input")[0].value==="on",optSelected:aR.selected,deleteExpando:true,optDisabled:false,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};aY.disabled=true;a.support.optDisabled=!aR.disabled;aV.type="text/javascript";try{aV.appendChild(Y.createTextNode("window."+aQ+"=1;"))}catch(aT){}aW.insertBefore(aV,aW.firstChild);if(aC[aQ]){a.support.scriptEval=true;delete aC[aQ]}try{delete aV.test}catch(aT){a.support.deleteExpando=false}aW.removeChild(aV);if(aP.attachEvent&&aP.fireEvent){aP.attachEvent("onclick",function a0(){a.support.noCloneEvent=false;aP.detachEvent("onclick",a0)});aP.cloneNode(true).fireEvent("onclick")}aP=Y.createElement("div");aP.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var aS=Y.createDocumentFragment();aS.appendChild(aP.firstChild);a.support.checkClone=aS.cloneNode(true).cloneNode(true).lastChild.checked;a(function(){var a2=Y.createElement("div");a2.style.width=a2.style.paddingLeft="1px";Y.body.appendChild(a2);a.boxModel=a.support.boxModel=a2.offsetWidth===2;if("zoom" in a2.style){a2.style.display="inline";a2.style.zoom=1;a.support.inlineBlockNeedsLayout=a2.offsetWidth===2;a2.style.display="";a2.innerHTML="<div style='width:4px;'></div>";a.support.shrinkWrapBlocks=a2.offsetWidth!==2}a2.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var a1=a2.getElementsByTagName("td");a.support.reliableHiddenOffsets=a1[0].offsetHeight===0;a1[0].style.display="";a1[1].style.display="none";a.support.reliableHiddenOffsets=a.support.reliableHiddenOffsets&&a1[0].offsetHeight===0;a2.innerHTML="";Y.body.removeChild(a2).style.display="none";a2=a1=null});var aU=function(a1){var a3=Y.createElement("div");a1="on"+a1;var a2=(a1 in a3);if(!a2){a3.setAttribute(a1,"return;");a2=typeof a3[a1]==="function"}a3=null;return a2};a.support.submitBubbles=aU("submit");a.support.changeBubbles=aU("change");aW=aV=aP=aZ=aX=null})();var aJ={},aj=/^(?:\{.*\}|\[.*\])$/;a.extend({cache:{},uuid:0,expando:"jQuery"+a.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(aR,aQ,aU){if(!a.acceptData(aR)){return}aR=aR==aC?aJ:aR;var aT=aR.nodeType,aV=aT?aR[a.expando]:null,aP=a.cache,aS;if(aT&&!aV&&typeof aQ==="string"&&aU===z){return}if(!aT){aP=aR}else{if(!aV){aR[a.expando]=aV=++a.uuid}}if(typeof aQ==="object"){if(aT){aP[aV]=a.extend(aP[aV],aQ)}else{a.extend(aP,aQ)}}else{if(aT&&!aP[aV]){aP[aV]={}}}aS=aT?aP[aV]:aP;if(aU!==z){aS[aQ]=aU}return typeof aQ==="string"?aS[aQ]:aS},removeData:function(aR,aQ){if(!a.acceptData(aR)){return}aR=aR==aC?aJ:aR;var aT=aR.nodeType,aV=aT?aR[a.expando]:aR,aP=a.cache,aS=aT?aP[aV]:aV;if(aQ){if(aS){delete aS[aQ];if(aT&&a.isEmptyObject(aS)){a.removeData(aR)}}}else{if(aT&&a.support.deleteExpando){delete aR[a.expando]}else{if(aR.removeAttribute){aR.removeAttribute(a.expando)}else{if(aT){delete aP[aV]}else{for(var aU in aR){delete aR[aU]}}}}}},acceptData:function(aQ){if(aQ.nodeName){var aP=a.noData[aQ.nodeName.toLowerCase()];if(aP){return !(aP===true||aQ.getAttribute("classid")!==aP)}}return true}});a.fn.extend({data:function(aT,aV){var aU=null;if(typeof aT==="undefined"){if(this.length){var aP=this[0].attributes,aR;aU=a.data(this[0]);for(var aS=0,aQ=aP.length;aS<aQ;aS++){aR=aP[aS].name;if(aR.indexOf("data-")===0){aR=aR.substr(5);ax(this[0],aR,aU[aR])}}}return aU}else{if(typeof aT==="object"){return this.each(function(){a.data(this,aT)})}}var aW=aT.split(".");aW[1]=aW[1]?"."+aW[1]:"";if(aV===z){aU=this.triggerHandler("getData"+aW[1]+"!",[aW[0]]);if(aU===z&&this.length){aU=a.data(this[0],aT);aU=ax(this[0],aT,aU)}return aU===z&&aW[1]?this.data(aW[0]):aU}else{return this.each(function(){var aY=a(this),aX=[aW[0],aV];aY.triggerHandler("setData"+aW[1]+"!",aX);a.data(this,aT,aV);aY.triggerHandler("changeData"+aW[1]+"!",aX)})}},removeData:function(aP){return this.each(function(){a.removeData(this,aP)})}});function ax(aQ,aP,aR){if(aR===z&&aQ.nodeType===1){aR=aQ.getAttribute("data-"+aP);if(typeof aR==="string"){try{aR=aR==="true"?true:aR==="false"?false:aR==="null"?null:!a.isNaN(aR)?parseFloat(aR):aj.test(aR)?a.parseJSON(aR):aR}catch(aS){}a.data(aQ,aP,aR)}else{aR=z}}return aR}a.extend({queue:function(aQ,aP,aS){if(!aQ){return}aP=(aP||"fx")+"queue";var aR=a.data(aQ,aP);if(!aS){return aR||[]}if(!aR||a.isArray(aS)){aR=a.data(aQ,aP,a.makeArray(aS))}else{aR.push(aS)}return aR},dequeue:function(aS,aR){aR=aR||"fx";var aP=a.queue(aS,aR),aQ=aP.shift();if(aQ==="inprogress"){aQ=aP.shift()}if(aQ){if(aR==="fx"){aP.unshift("inprogress")}aQ.call(aS,function(){a.dequeue(aS,aR)})}}});a.fn.extend({queue:function(aP,aQ){if(typeof aP!=="string"){aQ=aP;aP="fx"}if(aQ===z){return a.queue(this[0],aP)}return this.each(function(aS){var aR=a.queue(this,aP,aQ);if(aP==="fx"&&aR[0]!=="inprogress"){a.dequeue(this,aP)}})},dequeue:function(aP){return this.each(function(){a.dequeue(this,aP)})},delay:function(aQ,aP){aQ=a.fx?a.fx.speeds[aQ]||aQ:aQ;aP=aP||"fx";return this.queue(aP,function(){var aR=this;setTimeout(function(){a.dequeue(aR,aP)},aQ)})},clearQueue:function(aP){return this.queue(aP||"fx",[])}});var ah=/[\n\t]/g,aG=/\s+/,al=/\r/g,aF=/^(?:href|src|style)$/,c=/^(?:button|input)$/i,u=/^(?:button|input|object|select|textarea)$/i,g=/^a(?:rea)?$/i,H=/^(?:radio|checkbox)$/i;a.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};a.fn.extend({attr:function(aP,aQ){return a.access(this,aP,aQ,true,a.attr)},removeAttr:function(aP,aQ){return this.each(function(){a.attr(this,aP,"");if(this.nodeType===1){this.removeAttribute(aP)}})},addClass:function(aW){if(a.isFunction(aW)){return this.each(function(aZ){var aY=a(this);aY.addClass(aW.call(this,aZ,aY.attr("class")))})}if(aW&&typeof aW==="string"){var aP=(aW||"").split(aG);for(var aS=0,aR=this.length;aS<aR;aS++){var aQ=this[aS];if(aQ.nodeType===1){if(!aQ.className){aQ.className=aW}else{var aT=" "+aQ.className+" ",aV=aQ.className;for(var aU=0,aX=aP.length;aU<aX;aU++){if(aT.indexOf(" "+aP[aU]+" ")<0){aV+=" "+aP[aU]}}aQ.className=a.trim(aV)}}}}return this},removeClass:function(aU){if(a.isFunction(aU)){return this.each(function(aY){var aX=a(this);aX.removeClass(aU.call(this,aY,aX.attr("class")))})}if((aU&&typeof aU==="string")||aU===z){var aV=(aU||"").split(aG);for(var aR=0,aQ=this.length;aR<aQ;aR++){var aT=this[aR];if(aT.nodeType===1&&aT.className){if(aU){var aS=(" "+aT.className+" ").replace(ah," ");for(var aW=0,aP=aV.length;aW<aP;aW++){aS=aS.replace(" "+aV[aW]+" "," ")}aT.className=a.trim(aS)}else{aT.className=""}}}}return this},toggleClass:function(aS,aQ){var aR=typeof aS,aP=typeof aQ==="boolean";if(a.isFunction(aS)){return this.each(function(aU){var aT=a(this);aT.toggleClass(aS.call(this,aU,aT.attr("class"),aQ),aQ)})}return this.each(function(){if(aR==="string"){var aV,aU=0,aT=a(this),aW=aQ,aX=aS.split(aG);while((aV=aX[aU++])){aW=aP?aW:!aT.hasClass(aV);aT[aW?"addClass":"removeClass"](aV)}}else{if(aR==="undefined"||aR==="boolean"){if(this.className){a.data(this,"__className__",this.className)}this.className=this.className||aS===false?"":a.data(this,"__className__")||""}}})},hasClass:function(aP){var aS=" "+aP+" ";for(var aR=0,aQ=this.length;aR<aQ;aR++){if((" "+this[aR].className+" ").replace(ah," ").indexOf(aS)>-1){return true}}return false},val:function(aX){if(!arguments.length){var aR=this[0];if(aR){if(a.nodeName(aR,"option")){var aQ=aR.attributes.value;return !aQ||aQ.specified?aR.value:aR.text}if(a.nodeName(aR,"select")){var aV=aR.selectedIndex,aY=[],aZ=aR.options,aU=aR.type==="select-one";if(aV<0){return null}for(var aS=aU?aV:0,aW=aU?aV+1:aZ.length;aS<aW;aS++){var aT=aZ[aS];if(aT.selected&&(a.support.optDisabled?!aT.disabled:aT.getAttribute("disabled")===null)&&(!aT.parentNode.disabled||!a.nodeName(aT.parentNode,"optgroup"))){aX=a(aT).val();if(aU){return aX}aY.push(aX)}}return aY}if(H.test(aR.type)&&!a.support.checkOn){return aR.getAttribute("value")===null?"on":aR.value}return(aR.value||"").replace(al,"")}return z}var aP=a.isFunction(aX);return this.each(function(a2){var a1=a(this),a3=aX;if(this.nodeType!==1){return}if(aP){a3=aX.call(this,a2,a1.val())}if(a3==null){a3=""}else{if(typeof a3==="number"){a3+=""}else{if(a.isArray(a3)){a3=a.map(a3,function(a4){return a4==null?"":a4+""})}}}if(a.isArray(a3)&&H.test(this.type)){this.checked=a.inArray(a1.val(),a3)>=0}else{if(a.nodeName(this,"select")){var a0=a.makeArray(a3);a("option",this).each(function(){this.selected=a.inArray(a(this).val(),a0)>=0});if(!a0.length){this.selectedIndex=-1}}else{this.value=a3}}})}});a.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(aQ,aP,aV,aY){if(!aQ||aQ.nodeType===3||aQ.nodeType===8){return z}if(aY&&aP in a.attrFn){return a(aQ)[aP](aV)}var aR=aQ.nodeType!==1||!a.isXMLDoc(aQ),aU=aV!==z;aP=aR&&a.props[aP]||aP;var aT=aF.test(aP);if(aP==="selected"&&!a.support.optSelected){var aW=aQ.parentNode;if(aW){aW.selectedIndex;if(aW.parentNode){aW.parentNode.selectedIndex}}}if((aP in aQ||aQ[aP]!==z)&&aR&&!aT){if(aU){if(aP==="type"&&c.test(aQ.nodeName)&&aQ.parentNode){a.error("type property can't be changed")}if(aV===null){if(aQ.nodeType===1){aQ.removeAttribute(aP)}}else{aQ[aP]=aV}}if(a.nodeName(aQ,"form")&&aQ.getAttributeNode(aP)){return aQ.getAttributeNode(aP).nodeValue}if(aP==="tabIndex"){var aX=aQ.getAttributeNode("tabIndex");return aX&&aX.specified?aX.value:u.test(aQ.nodeName)||g.test(aQ.nodeName)&&aQ.href?0:z}return aQ[aP]}if(!a.support.style&&aR&&aP==="style"){if(aU){aQ.style.cssText=""+aV}return aQ.style.cssText}if(aU){aQ.setAttribute(aP,""+aV)}if(!aQ.attributes[aP]&&(aQ.hasAttribute&&!aQ.hasAttribute(aP))){return z}var aS=!a.support.hrefNormalized&&aR&&aT?aQ.getAttribute(aP,2):aQ.getAttribute(aP);return aS===null?z:aS}});var at=/\.(.*)$/,aE=/^(?:textarea|input|select)$/i,B=/\./g,P=/ /g,ad=/[^\w\s.|`]/g,w=function(aP){return aP.replace(ad,"\\$&")},v={focusin:0,focusout:0};a.event={add:function(aT,aX,a3,aV){if(aT.nodeType===3||aT.nodeType===8){return}if(a.isWindow(aT)&&(aT!==aC&&!aT.frameElement)){aT=aC}if(a3===false){a3=aH}else{if(!a3){return}}var aR,a1;if(a3.handler){aR=a3;a3=aR.handler}if(!a3.guid){a3.guid=a.guid++}var aY=a.data(aT);if(!aY){return}var aP=aT.nodeType?"events":"__events__",a2=aY[aP],aW=aY.handle;if(typeof a2==="function"){aW=a2.handle;a2=a2.events}else{if(!a2){if(!aT.nodeType){aY[aP]=aY=function(){}}aY.events=a2={}}}if(!aW){aY.handle=aW=function(){return typeof a!=="undefined"&&!a.event.triggered?a.event.handle.apply(aW.elem,arguments):z}}aW.elem=aT;aX=aX.split(" ");var a0,aU=0,aQ;while((a0=aX[aU++])){a1=aR?a.extend({},aR):{handler:a3,data:aV};if(a0.indexOf(".")>-1){aQ=a0.split(".");a0=aQ.shift();a1.namespace=aQ.slice(0).sort().join(".")}else{aQ=[];a1.namespace=""}a1.type=a0;if(!a1.guid){a1.guid=a3.guid}var aS=a2[a0],aZ=a.event.special[a0]||{};if(!aS){aS=a2[a0]=[];if(!aZ.setup||aZ.setup.call(aT,aV,aQ,aW)===false){if(aT.addEventListener){aT.addEventListener(a0,aW,false)}else{if(aT.attachEvent){aT.attachEvent("on"+a0,aW)}}}}if(aZ.add){aZ.add.call(aT,a1);if(!a1.handler.guid){a1.handler.guid=a3.guid}}aS.push(a1);a.event.global[a0]=true}aT=null},global:{},remove:function(a5,aZ,aR,aV){if(a5.nodeType===3||a5.nodeType===8){return}if(aR===false){aR=aH}var a8,aU,aW,a2,a3=0,aS,aX,a0,aT,aY,aP,a7,a1=a5.nodeType?"events":"__events__",a4=a.data(a5),aQ=a4&&a4[a1];if(!a4||!aQ){return}if(typeof aQ==="function"){a4=aQ;aQ=aQ.events}if(aZ&&aZ.type){aR=aZ.handler;aZ=aZ.type}if(!aZ||typeof aZ==="string"&&aZ.charAt(0)==="."){aZ=aZ||"";for(aU in aQ){a.event.remove(a5,aU+aZ)}return}aZ=aZ.split(" ");while((aU=aZ[a3++])){a7=aU;aP=null;aS=aU.indexOf(".")<0;aX=[];if(!aS){aX=aU.split(".");aU=aX.shift();a0=new RegExp("(^|\\.)"+a.map(aX.slice(0).sort(),w).join("\\.(?:.*\\.)?")+"(\\.|$)")}aY=aQ[aU];if(!aY){continue}if(!aR){for(a2=0;a2<aY.length;a2++){aP=aY[a2];if(aS||a0.test(aP.namespace)){a.event.remove(a5,a7,aP.handler,a2);aY.splice(a2--,1)}}continue}aT=a.event.special[aU]||{};for(a2=aV||0;a2<aY.length;a2++){aP=aY[a2];if(aR.guid===aP.guid){if(aS||a0.test(aP.namespace)){if(aV==null){aY.splice(a2--,1)}if(aT.remove){aT.remove.call(a5,aP)}}if(aV!=null){break}}}if(aY.length===0||aV!=null&&aY.length===1){if(!aT.teardown||aT.teardown.call(a5,aX)===false){a.removeEvent(a5,aU,a4.handle)}a8=null;delete aQ[aU]}}if(a.isEmptyObject(aQ)){var a6=a4.handle;if(a6){a6.elem=null}delete a4.events;delete a4.handle;if(typeof a4==="function"){a.removeData(a5,a1)}else{if(a.isEmptyObject(a4)){a.removeData(a5)}}}},trigger:function(aQ,aV,aS){var aZ=aQ.type||aQ,aU=arguments[3];if(!aU){aQ=typeof aQ==="object"?aQ[a.expando]?aQ:a.extend(a.Event(aZ),aQ):a.Event(aZ);if(aZ.indexOf("!")>=0){aQ.type=aZ=aZ.slice(0,-1);aQ.exclusive=true}if(!aS){aQ.stopPropagation();if(a.event.global[aZ]){a.each(a.cache,function(){if(this.events&&this.events[aZ]){a.event.trigger(aQ,aV,this.handle.elem)}})}}if(!aS||aS.nodeType===3||aS.nodeType===8){return z}aQ.result=z;aQ.target=aS;aV=a.makeArray(aV);aV.unshift(aQ)}aQ.currentTarget=aS;var aW=aS.nodeType?a.data(aS,"handle"):(a.data(aS,"__events__")||{}).handle;if(aW){aW.apply(aS,aV)}var a1=aS.parentNode||aS.ownerDocument;try{if(!(aS&&aS.nodeName&&a.noData[aS.nodeName.toLowerCase()])){if(aS["on"+aZ]&&aS["on"+aZ].apply(aS,aV)===false){aQ.result=false;aQ.preventDefault()}}}catch(a0){}if(!aQ.isPropagationStopped()&&a1){a.event.trigger(aQ,aV,a1,true)}else{if(!aQ.isDefaultPrevented()){var aR,aX=aQ.target,aP=aZ.replace(at,""),a2=a.nodeName(aX,"a")&&aP==="click",aY=a.event.special[aP]||{};if((!aY._default||aY._default.call(aS,aQ)===false)&&!a2&&!(aX&&aX.nodeName&&a.noData[aX.nodeName.toLowerCase()])){try{if(aX[aP]){aR=aX["on"+aP];if(aR){aX["on"+aP]=null}a.event.triggered=true;aX[aP]()}}catch(aT){}if(aR){aX["on"+aP]=aR}a.event.triggered=false}}}},handle:function(aP){var aY,aR,aQ,a0,aZ,aU=[],aW=a.makeArray(arguments);aP=aW[0]=a.event.fix(aP||aC.event);aP.currentTarget=this;aY=aP.type.indexOf(".")<0&&!aP.exclusive;if(!aY){aQ=aP.type.split(".");aP.type=aQ.shift();aU=aQ.slice(0).sort();a0=new RegExp("(^|\\.)"+aU.join("\\.(?:.*\\.)?")+"(\\.|$)")}aP.namespace=aP.namespace||aU.join(".");aZ=a.data(this,this.nodeType?"events":"__events__");if(typeof aZ==="function"){aZ=aZ.events}aR=(aZ||{})[aP.type];if(aZ&&aR){aR=aR.slice(0);for(var aT=0,aS=aR.length;aT<aS;aT++){var aX=aR[aT];if(aY||a0.test(aX.namespace)){aP.handler=aX.handler;aP.data=aX.data;aP.handleObj=aX;var aV=aX.handler.apply(this,aW);if(aV!==z){aP.result=aV;if(aV===false){aP.preventDefault();aP.stopPropagation()}}if(aP.isImmediatePropagationStopped()){break}}}}return aP.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(aS){if(aS[a.expando]){return aS}var aQ=aS;aS=a.Event(aQ);for(var aR=this.props.length,aU;aR;){aU=this.props[--aR];aS[aU]=aQ[aU]}if(!aS.target){aS.target=aS.srcElement||Y}if(aS.target.nodeType===3){aS.target=aS.target.parentNode}if(!aS.relatedTarget&&aS.fromElement){aS.relatedTarget=aS.fromElement===aS.target?aS.toElement:aS.fromElement}if(aS.pageX==null&&aS.clientX!=null){var aT=Y.documentElement,aP=Y.body;aS.pageX=aS.clientX+(aT&&aT.scrollLeft||aP&&aP.scrollLeft||0)-(aT&&aT.clientLeft||aP&&aP.clientLeft||0);aS.pageY=aS.clientY+(aT&&aT.scrollTop||aP&&aP.scrollTop||0)-(aT&&aT.clientTop||aP&&aP.clientTop||0)}if(aS.which==null&&(aS.charCode!=null||aS.keyCode!=null)){aS.which=aS.charCode!=null?aS.charCode:aS.keyCode}if(!aS.metaKey&&aS.ctrlKey){aS.metaKey=aS.ctrlKey}if(!aS.which&&aS.button!==z){aS.which=(aS.button&1?1:(aS.button&2?3:(aS.button&4?2:0)))}return aS},guid:100000000,proxy:a.proxy,special:{ready:{setup:a.bindReady,teardown:a.noop},live:{add:function(aP){a.event.add(this,j(aP.origType,aP.selector),a.extend({},aP,{handler:S,guid:aP.handler.guid}))},remove:function(aP){a.event.remove(this,j(aP.origType,aP.selector),aP)}},beforeunload:{setup:function(aR,aQ,aP){if(a.isWindow(this)){this.onbeforeunload=aP}},teardown:function(aQ,aP){if(this.onbeforeunload===aP){this.onbeforeunload=null}}}}};a.removeEvent=Y.removeEventListener?function(aQ,aP,aR){if(aQ.removeEventListener){aQ.removeEventListener(aP,aR,false)}}:function(aQ,aP,aR){if(aQ.detachEvent){aQ.detachEvent("on"+aP,aR)}};a.Event=function(aP){if(!this.preventDefault){return new a.Event(aP)}if(aP&&aP.type){this.originalEvent=aP;this.type=aP.type}else{this.type=aP}this.timeStamp=a.now();this[a.expando]=true};function aH(){return false}function d(){return true}a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=d;var aP=this.originalEvent;if(!aP){return}if(aP.preventDefault){aP.preventDefault()}else{aP.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=d;var aP=this.originalEvent;if(!aP){return}if(aP.stopPropagation){aP.stopPropagation()}aP.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=d;this.stopPropagation()},isDefaultPrevented:aH,isPropagationStopped:aH,isImmediatePropagationStopped:aH};var O=function(aQ){var aP=aQ.relatedTarget;try{while(aP&&aP!==this){aP=aP.parentNode}if(aP!==this){aQ.type=aQ.data;a.event.handle.apply(this,arguments)}}catch(aR){}},an=function(aP){aP.type=aP.data;a.event.handle.apply(this,arguments)};a.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(aQ,aP){a.event.special[aQ]={setup:function(aR){a.event.add(this,aP,aR&&aR.selector?an:O,aQ)},teardown:function(aR){a.event.remove(this,aP,aR&&aR.selector?an:O)}}});if(!a.support.submitBubbles){a.event.special.submit={setup:function(aQ,aP){if(this.nodeName.toLowerCase()!=="form"){a.event.add(this,"click.specialSubmit",function(aT){var aS=aT.target,aR=aS.type;if((aR==="submit"||aR==="image")&&a(aS).closest("form").length){aT.liveFired=z;return aq("submit",this,arguments)}});a.event.add(this,"keypress.specialSubmit",function(aT){var aS=aT.target,aR=aS.type;if((aR==="text"||aR==="password")&&a(aS).closest("form").length&&aT.keyCode===13){aT.liveFired=z;return aq("submit",this,arguments)}})}else{return false}},teardown:function(aP){a.event.remove(this,".specialSubmit")}}}if(!a.support.changeBubbles){var aI,f=function(aQ){var aP=aQ.type,aR=aQ.value;if(aP==="radio"||aP==="checkbox"){aR=aQ.checked}else{if(aP==="select-multiple"){aR=aQ.selectedIndex>-1?a.map(aQ.options,function(aS){return aS.selected}).join("-"):""}else{if(aQ.nodeName.toLowerCase()==="select"){aR=aQ.selectedIndex}}}return aR},M=function M(aR){var aP=aR.target,aQ,aS;if(!aE.test(aP.nodeName)||aP.readOnly){return}aQ=a.data(aP,"_change_data");aS=f(aP);if(aR.type!=="focusout"||aP.type!=="radio"){a.data(aP,"_change_data",aS)}if(aQ===z||aS===aQ){return}if(aQ!=null||aS){aR.type="change";aR.liveFired=z;return a.event.trigger(aR,arguments[1],aP)}};a.event.special.change={filters:{focusout:M,beforedeactivate:M,click:function(aR){var aQ=aR.target,aP=aQ.type;if(aP==="radio"||aP==="checkbox"||aQ.nodeName.toLowerCase()==="select"){return M.call(this,aR)}},keydown:function(aR){var aQ=aR.target,aP=aQ.type;if((aR.keyCode===13&&aQ.nodeName.toLowerCase()!=="textarea")||(aR.keyCode===32&&(aP==="checkbox"||aP==="radio"))||aP==="select-multiple"){return M.call(this,aR)}},beforeactivate:function(aQ){var aP=aQ.target;a.data(aP,"_change_data",f(aP))}},setup:function(aR,aQ){if(this.type==="file"){return false}for(var aP in aI){a.event.add(this,aP+".specialChange",aI[aP])}return aE.test(this.nodeName)},teardown:function(aP){a.event.remove(this,".specialChange");return aE.test(this.nodeName)}};aI=a.event.special.change.filters;aI.focus=aI.beforeactivate}function aq(aQ,aR,aP){aP[0].type=aQ;return a.event.handle.apply(aR,aP)}if(Y.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(aR,aP){a.event.special[aP]={setup:function(){if(v[aP]++===0){Y.addEventListener(aR,aQ,true)}},teardown:function(){if(--v[aP]===0){Y.removeEventListener(aR,aQ,true)}}};function aQ(aS){aS=a.event.fix(aS);aS.type=aP;return a.event.trigger(aS,null,aS.target)}})}a.each(["bind","one"],function(aQ,aP){a.fn[aP]=function(aW,aX,aV){if(typeof aW==="object"){for(var aT in aW){this[aP](aT,aX,aW[aT],aV)}return this}if(a.isFunction(aX)||aX===false){aV=aX;aX=z}var aU=aP==="one"?a.proxy(aV,function(aY){a(this).unbind(aY,aU);return aV.apply(this,arguments)}):aV;if(aW==="unload"&&aP!=="one"){this.one(aW,aX,aV)}else{for(var aS=0,aR=this.length;aS<aR;aS++){a.event.add(this[aS],aW,aU,aX)}}return this}});a.fn.extend({unbind:function(aT,aS){if(typeof aT==="object"&&!aT.preventDefault){for(var aR in aT){this.unbind(aR,aT[aR])}}else{for(var aQ=0,aP=this.length;aQ<aP;aQ++){a.event.remove(this[aQ],aT,aS)}}return this},delegate:function(aP,aQ,aS,aR){return this.live(aQ,aS,aR,aP)},undelegate:function(aP,aQ,aR){if(arguments.length===0){return this.unbind("live")}else{return this.die(aQ,null,aR,aP)}},trigger:function(aP,aQ){return this.each(function(){a.event.trigger(aP,aQ,this)})},triggerHandler:function(aP,aR){if(this[0]){var aQ=a.Event(aP);aQ.preventDefault();aQ.stopPropagation();a.event.trigger(aQ,aR,this[0]);return aQ.result}},toggle:function(aR){var aP=arguments,aQ=1;while(aQ<aP.length){a.proxy(aR,aP[aQ++])}return this.click(a.proxy(aR,function(aS){var aT=(a.data(this,"lastToggle"+aR.guid)||0)%aQ;a.data(this,"lastToggle"+aR.guid,aT+1);aS.preventDefault();return aP[aT].apply(this,arguments)||false}))},hover:function(aP,aQ){return this.mouseenter(aP).mouseleave(aQ||aP)}});var am={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};a.each(["live","die"],function(aQ,aP){a.fn[aP]=function(a0,aX,a2,aT){var a1,aY=0,aZ,aS,a4,aV=aT||this.selector,aR=aT?this:a(this.context);if(typeof a0==="object"&&!a0.preventDefault){for(var a3 in a0){aR[aP](a3,aX,a0[a3],aV)}return this}if(a.isFunction(aX)){a2=aX;aX=z}a0=(a0||"").split(" ");while((a1=a0[aY++])!=null){aZ=at.exec(a1);aS="";if(aZ){aS=aZ[0];a1=a1.replace(at,"")}if(a1==="hover"){a0.push("mouseenter"+aS,"mouseleave"+aS);continue}a4=a1;if(a1==="focus"||a1==="blur"){a0.push(am[a1]+aS);a1=a1+aS}else{a1=(am[a1]||a1)+aS}if(aP==="live"){for(var aW=0,aU=aR.length;aW<aU;aW++){a.event.add(aR[aW],"live."+j(a1,aV),{data:aX,selector:aV,handler:a2,origType:a1,origHandler:a2,preType:a4})}}else{aR.unbind("live."+j(a1,aV),a2)}}return this}});function S(a0){var aX,aS,a6,aU,aP,a2,aZ,a1,aY,a5,aW,aV,a4,a3=[],aT=[],aQ=a.data(this,this.nodeType?"events":"__events__");if(typeof aQ==="function"){aQ=aQ.events}if(a0.liveFired===this||!aQ||!aQ.live||a0.button&&a0.type==="click"){return}if(a0.namespace){aV=new RegExp("(^|\\.)"+a0.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")}a0.liveFired=this;var aR=aQ.live.slice(0);for(aZ=0;aZ<aR.length;aZ++){aP=aR[aZ];if(aP.origType.replace(at,"")===a0.type){aT.push(aP.selector)}else{aR.splice(aZ--,1)}}aU=a(a0.target).closest(aT,a0.currentTarget);for(a1=0,aY=aU.length;a1<aY;a1++){aW=aU[a1];for(aZ=0;aZ<aR.length;aZ++){aP=aR[aZ];if(aW.selector===aP.selector&&(!aV||aV.test(aP.namespace))){a2=aW.elem;a6=null;if(aP.preType==="mouseenter"||aP.preType==="mouseleave"){a0.type=aP.preType;a6=a(a0.relatedTarget).closest(aP.selector)[0]}if(!a6||a6!==a2){a3.push({elem:a2,handleObj:aP,level:aW.level})}}}}for(a1=0,aY=a3.length;a1<aY;a1++){aU=a3[a1];if(aS&&aU.level>aS){break}a0.currentTarget=aU.elem;a0.data=aU.handleObj.data;a0.handleObj=aU.handleObj;a4=aU.handleObj.origHandler.apply(aU.elem,arguments);if(a4===false||a0.isPropagationStopped()){aS=aU.level;if(a4===false){aX=false}if(a0.isImmediatePropagationStopped()){break}}}return aX}function j(aQ,aP){return(aQ&&aQ!=="*"?aQ+".":"")+aP.replace(B,"`").replace(P,"&")}a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(aQ,aP){a.fn[aP]=function(aS,aR){if(aR==null){aR=aS;aS=null}return arguments.length>0?this.bind(aP,aS,aR):this.trigger(aP)};if(a.attrFn){a.attrFn[aP]=true}});if(aC.attachEvent&&!aC.addEventListener){a(aC).bind("unload",function(){for(var aQ in a.cache){if(a.cache[aQ].handle){try{a.event.remove(a.cache[aQ].handle.elem)}catch(aP){}}}});
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
}(function(){var a4=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,aX=0,aS=Object.prototype.toString,a3=false,aW=true;[0,0].sort(function(){aW=false;return 0});var aQ=function(bb,a6,be,bf){be=be||[];a6=a6||Y;var bh=a6;if(a6.nodeType!==1&&a6.nodeType!==9){return[]}if(!bb||typeof bb!=="string"){return be}var a8,bj,bm,a7,bi,bl,bk,bd,ba=true,a9=aQ.isXML(a6),bc=[],bg=bb;do{a4.exec("");a8=a4.exec(bg);if(a8){bg=a8[3];bc.push(a8[1]);if(a8[2]){a7=a8[3];break}}}while(a8);if(bc.length>1&&aY.exec(bb)){if(bc.length===2&&aT.relative[bc[0]]){bj=aV(bc[0]+bc[1],a6)}else{bj=aT.relative[bc[0]]?[a6]:aQ(bc.shift(),a6);while(bc.length){bb=bc.shift();if(aT.relative[bb]){bb+=bc.shift()}bj=aV(bb,bj)}}}else{if(!bf&&bc.length>1&&a6.nodeType===9&&!a9&&aT.match.ID.test(bc[0])&&!aT.match.ID.test(bc[bc.length-1])){bi=aQ.find(bc.shift(),a6,a9);a6=bi.expr?aQ.filter(bi.expr,bi.set)[0]:bi.set[0]}if(a6){bi=bf?{expr:bc.pop(),set:aP(bf)}:aQ.find(bc.pop(),bc.length===1&&(bc[0]==="~"||bc[0]==="+")&&a6.parentNode?a6.parentNode:a6,a9);bj=bi.expr?aQ.filter(bi.expr,bi.set):bi.set;if(bc.length>0){bm=aP(bj)}else{ba=false}while(bc.length){bl=bc.pop();bk=bl;if(!aT.relative[bl]){bl=""}else{bk=bc.pop()}if(bk==null){bk=a6}aT.relative[bl](bm,bk,a9)}}else{bm=bc=[]}}if(!bm){bm=bj}if(!bm){aQ.error(bl||bb)}if(aS.call(bm)==="[object Array]"){if(!ba){be.push.apply(be,bm)}else{if(a6&&a6.nodeType===1){for(bd=0;bm[bd]!=null;bd++){if(bm[bd]&&(bm[bd]===true||bm[bd].nodeType===1&&aQ.contains(a6,bm[bd]))){be.push(bj[bd])}}}else{for(bd=0;bm[bd]!=null;bd++){if(bm[bd]&&bm[bd].nodeType===1){be.push(bj[bd])}}}}}else{aP(bm,be)}if(a7){aQ(a7,bh,be,bf);aQ.uniqueSort(be)}return be};aQ.uniqueSort=function(a7){if(aR){a3=aW;a7.sort(aR);if(a3){for(var a6=1;a6<a7.length;a6++){if(a7[a6]===a7[a6-1]){a7.splice(a6--,1)}}}}return a7};aQ.matches=function(a6,a7){return aQ(a6,null,null,a7)};aQ.matchesSelector=function(a6,a7){return aQ(a7,null,null,[a6]).length>0};aQ.find=function(bd,a6,be){var bc;if(!bd){return[]}for(var a9=0,a8=aT.order.length;a9<a8;a9++){var ba,bb=aT.order[a9];if((ba=aT.leftMatch[bb].exec(bd))){var a7=ba[1];ba.splice(1,1);if(a7.substr(a7.length-1)!=="\\"){ba[1]=(ba[1]||"").replace(/\\/g,"");bc=aT.find[bb](ba,a6,be);if(bc!=null){bd=bd.replace(aT.match[bb],"");break}}}}if(!bc){bc=a6.getElementsByTagName("*")}return{set:bc,expr:bd}};aQ.filter=function(bh,bg,bk,ba){var bc,a6,a8=bh,bm=[],be=bg,bd=bg&&bg[0]&&aQ.isXML(bg[0]);while(bh&&bg.length){for(var bf in aT.filter){if((bc=aT.leftMatch[bf].exec(bh))!=null&&bc[2]){var bl,bj,a7=aT.filter[bf],a9=bc[1];a6=false;bc.splice(1,1);if(a9.substr(a9.length-1)==="\\"){continue}if(be===bm){bm=[]}if(aT.preFilter[bf]){bc=aT.preFilter[bf](bc,be,bk,bm,ba,bd);if(!bc){a6=bl=true}else{if(bc===true){continue}}}if(bc){for(var bb=0;(bj=be[bb])!=null;bb++){if(bj){bl=a7(bj,bc,bb,be);var bi=ba^!!bl;if(bk&&bl!=null){if(bi){a6=true}else{be[bb]=false}}else{if(bi){bm.push(bj);a6=true}}}}}if(bl!==z){if(!bk){be=bm}bh=bh.replace(aT.match[bf],"");if(!a6){return[]}break}}}if(bh===a8){if(a6==null){aQ.error(bh)}else{break}}a8=bh}return be};aQ.error=function(a6){throw"Syntax error, unrecognized expression: "+a6};var aT=aQ.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a6){return a6.getAttribute("href")}},relative:{"+":function(bc,a7){var a9=typeof a7==="string",bb=a9&&!/\W/.test(a7),bd=a9&&!bb;if(bb){a7=a7.toLowerCase()}for(var a8=0,a6=bc.length,ba;a8<a6;a8++){if((ba=bc[a8])){while((ba=ba.previousSibling)&&ba.nodeType!==1){}bc[a8]=bd||ba&&ba.nodeName.toLowerCase()===a7?ba||false:ba===a7}}if(bd){aQ.filter(a7,bc,true)}},">":function(bc,a7){var bb,ba=typeof a7==="string",a8=0,a6=bc.length;if(ba&&!/\W/.test(a7)){a7=a7.toLowerCase();for(;a8<a6;a8++){bb=bc[a8];if(bb){var a9=bb.parentNode;bc[a8]=a9.nodeName.toLowerCase()===a7?a9:false}}}else{for(;a8<a6;a8++){bb=bc[a8];if(bb){bc[a8]=ba?bb.parentNode:bb.parentNode===a7}}if(ba){aQ.filter(a7,bc,true)}}},"":function(a9,a7,bb){var ba,a8=aX++,a6=a5;if(typeof a7==="string"&&!/\W/.test(a7)){a7=a7.toLowerCase();ba=a7;a6=a2}a6("parentNode",a7,a8,a9,ba,bb)},"~":function(a9,a7,bb){var ba,a8=aX++,a6=a5;if(typeof a7==="string"&&!/\W/.test(a7)){a7=a7.toLowerCase();ba=a7;a6=a2}a6("previousSibling",a7,a8,a9,ba,bb)}},find:{ID:function(a7,a8,a9){if(typeof a8.getElementById!=="undefined"&&!a9){var a6=a8.getElementById(a7[1]);return a6&&a6.parentNode?[a6]:[]}},NAME:function(a8,bb){if(typeof bb.getElementsByName!=="undefined"){var a7=[],ba=bb.getElementsByName(a8[1]);for(var a9=0,a6=ba.length;a9<a6;a9++){if(ba[a9].getAttribute("name")===a8[1]){a7.push(ba[a9])}}return a7.length===0?null:a7}},TAG:function(a6,a7){return a7.getElementsByTagName(a6[1])}},preFilter:{CLASS:function(a9,a7,a8,a6,bc,bd){a9=" "+a9[1].replace(/\\/g,"")+" ";if(bd){return a9}for(var ba=0,bb;(bb=a7[ba])!=null;ba++){if(bb){if(bc^(bb.className&&(" "+bb.className+" ").replace(/[\t\n]/g," ").indexOf(a9)>=0)){if(!a8){a6.push(bb)}}else{if(a8){a7[ba]=false}}}}return false},ID:function(a6){return a6[1].replace(/\\/g,"")},TAG:function(a7,a6){return a7[1].toLowerCase()},CHILD:function(a6){if(a6[1]==="nth"){var a7=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(a6[2]==="even"&&"2n"||a6[2]==="odd"&&"2n+1"||!/\D/.test(a6[2])&&"0n+"+a6[2]||a6[2]);a6[2]=(a7[1]+(a7[2]||1))-0;a6[3]=a7[3]-0}a6[0]=aX++;return a6},ATTR:function(ba,a7,a8,a6,bb,bc){var a9=ba[1].replace(/\\/g,"");if(!bc&&aT.attrMap[a9]){ba[1]=aT.attrMap[a9]}if(ba[2]==="~="){ba[4]=" "+ba[4]+" "}return ba},PSEUDO:function(ba,a7,a8,a6,bb){if(ba[1]==="not"){if((a4.exec(ba[3])||"").length>1||/^\w/.test(ba[3])){ba[3]=aQ(ba[3],null,null,a7)}else{var a9=aQ.filter(ba[3],a7,a8,true^bb);if(!a8){a6.push.apply(a6,a9)}return false}}else{if(aT.match.POS.test(ba[0])||aT.match.CHILD.test(ba[0])){return true}}return ba},POS:function(a6){a6.unshift(true);return a6}},filters:{enabled:function(a6){return a6.disabled===false&&a6.type!=="hidden"},disabled:function(a6){return a6.disabled===true},checked:function(a6){return a6.checked===true},selected:function(a6){a6.parentNode.selectedIndex;return a6.selected===true},parent:function(a6){return !!a6.firstChild},empty:function(a6){return !a6.firstChild},has:function(a8,a7,a6){return !!aQ(a6[3],a8).length},header:function(a6){return(/h\d/i).test(a6.nodeName)},text:function(a6){return"text"===a6.type},radio:function(a6){return"radio"===a6.type},checkbox:function(a6){return"checkbox"===a6.type},file:function(a6){return"file"===a6.type},password:function(a6){return"password"===a6.type},submit:function(a6){return"submit"===a6.type},image:function(a6){return"image"===a6.type},reset:function(a6){return"reset"===a6.type},button:function(a6){return"button"===a6.type||a6.nodeName.toLowerCase()==="button"},input:function(a6){return(/input|select|textarea|button/i).test(a6.nodeName)}},setFilters:{first:function(a7,a6){return a6===0},last:function(a8,a7,a6,a9){return a7===a9.length-1},even:function(a7,a6){return a6%2===0},odd:function(a7,a6){return a6%2===1},lt:function(a8,a7,a6){return a7<a6[3]-0},gt:function(a8,a7,a6){return a7>a6[3]-0},nth:function(a8,a7,a6){return a6[3]-0===a7},eq:function(a8,a7,a6){return a6[3]-0===a7}},filter:{PSEUDO:function(a8,bd,bc,be){var a6=bd[1],a7=aT.filters[a6];if(a7){return a7(a8,bc,bd,be)}else{if(a6==="contains"){return(a8.textContent||a8.innerText||aQ.getText([a8])||"").indexOf(bd[3])>=0}else{if(a6==="not"){var a9=bd[3];for(var bb=0,ba=a9.length;bb<ba;bb++){if(a9[bb]===a8){return false}}return true}else{aQ.error("Syntax error, unrecognized expression: "+a6)}}}},CHILD:function(a6,a9){var bc=a9[1],a7=a6;switch(bc){case"only":case"first":while((a7=a7.previousSibling)){if(a7.nodeType===1){return false}}if(bc==="first"){return true}a7=a6;case"last":while((a7=a7.nextSibling)){if(a7.nodeType===1){return false}}return true;case"nth":var a8=a9[2],bf=a9[3];if(a8===1&&bf===0){return true}var bb=a9[0],be=a6.parentNode;if(be&&(be.sizcache!==bb||!a6.nodeIndex)){var ba=0;for(a7=be.firstChild;a7;a7=a7.nextSibling){if(a7.nodeType===1){a7.nodeIndex=++ba}}be.sizcache=bb}var bd=a6.nodeIndex-bf;if(a8===0){return bd===0}else{return(bd%a8===0&&bd/a8>=0)}}},ID:function(a7,a6){return a7.nodeType===1&&a7.getAttribute("id")===a6},TAG:function(a7,a6){return(a6==="*"&&a7.nodeType===1)||a7.nodeName.toLowerCase()===a6},CLASS:function(a7,a6){return(" "+(a7.className||a7.getAttribute("class"))+" ").indexOf(a6)>-1},ATTR:function(bb,a9){var a8=a9[1],a6=aT.attrHandle[a8]?aT.attrHandle[a8](bb):bb[a8]!=null?bb[a8]:bb.getAttribute(a8),bc=a6+"",ba=a9[2],a7=a9[4];return a6==null?ba==="!=":ba==="="?bc===a7:ba==="*="?bc.indexOf(a7)>=0:ba==="~="?(" "+bc+" ").indexOf(a7)>=0:!a7?bc&&a6!==false:ba==="!="?bc!==a7:ba==="^="?bc.indexOf(a7)===0:ba==="$="?bc.substr(bc.length-a7.length)===a7:ba==="|="?bc===a7||bc.substr(0,a7.length+1)===a7+"-":false},POS:function(ba,a7,a8,bb){var a6=a7[2],a9=aT.setFilters[a6];if(a9){return a9(ba,a8,a7,bb)}}}};var aY=aT.match.POS,aU=function(a7,a6){return"\\"+(a6-0+1)};for(var a1 in aT.match){aT.match[a1]=new RegExp(aT.match[a1].source+(/(?![^\[]*\])(?![^\(]*\))/.source));aT.leftMatch[a1]=new RegExp(/(^(?:.|\r|\n)*?)/.source+aT.match[a1].source.replace(/\\(\d+)/g,aU))}var aP=function(a7,a6){a7=Array.prototype.slice.call(a7,0);if(a6){a6.push.apply(a6,a7);return a6}return a7};try{Array.prototype.slice.call(Y.documentElement.childNodes,0)[0].nodeType}catch(aZ){aP=function(ba,a9){var a8=0,a7=a9||[];if(aS.call(ba)==="[object Array]"){Array.prototype.push.apply(a7,ba)}else{if(typeof ba.length==="number"){for(var a6=ba.length;a8<a6;a8++){a7.push(ba[a8])}}else{for(;ba[a8];a8++){a7.push(ba[a8])}}}return a7}}var aR,a0;if(Y.documentElement.compareDocumentPosition){aR=function(a7,a6){if(a7===a6){a3=true;return 0}if(!a7.compareDocumentPosition||!a6.compareDocumentPosition){return a7.compareDocumentPosition?-1:1}return a7.compareDocumentPosition(a6)&4?-1:1}}else{aR=function(be,bd){var bb,a7,a8=[],a6=[],ba=be.parentNode,bc=bd.parentNode,bf=ba;if(be===bd){a3=true;return 0}else{if(ba===bc){return a0(be,bd)}else{if(!ba){return -1}else{if(!bc){return 1}}}}while(bf){a8.unshift(bf);bf=bf.parentNode}bf=bc;while(bf){a6.unshift(bf);bf=bf.parentNode}bb=a8.length;a7=a6.length;for(var a9=0;a9<bb&&a9<a7;a9++){if(a8[a9]!==a6[a9]){return a0(a8[a9],a6[a9])}}return a9===bb?a0(be,a6[a9],-1):a0(a8[a9],bd,1)};a0=function(a7,a6,a8){if(a7===a6){return a8}var a9=a7.nextSibling;while(a9){if(a9===a6){return -1}a9=a9.nextSibling}return 1}}aQ.getText=function(a6){var a7="",a9;for(var a8=0;a6[a8];a8++){a9=a6[a8];if(a9.nodeType===3||a9.nodeType===4){a7+=a9.nodeValue}else{if(a9.nodeType!==8){a7+=aQ.getText(a9.childNodes)}}}return a7};(function(){var a7=Y.createElement("div"),a8="script"+(new Date()).getTime(),a6=Y.documentElement;a7.innerHTML="<a name='"+a8+"'/>";a6.insertBefore(a7,a6.firstChild);if(Y.getElementById(a8)){aT.find.ID=function(ba,bb,bc){if(typeof bb.getElementById!=="undefined"&&!bc){var a9=bb.getElementById(ba[1]);return a9?a9.id===ba[1]||typeof a9.getAttributeNode!=="undefined"&&a9.getAttributeNode("id").nodeValue===ba[1]?[a9]:z:[]}};aT.filter.ID=function(bb,a9){var ba=typeof bb.getAttributeNode!=="undefined"&&bb.getAttributeNode("id");return bb.nodeType===1&&ba&&ba.nodeValue===a9}}a6.removeChild(a7);a6=a7=null})();(function(){var a6=Y.createElement("div");a6.appendChild(Y.createComment(""));if(a6.getElementsByTagName("*").length>0){aT.find.TAG=function(a7,bb){var ba=bb.getElementsByTagName(a7[1]);if(a7[1]==="*"){var a9=[];for(var a8=0;ba[a8];a8++){if(ba[a8].nodeType===1){a9.push(ba[a8])}}ba=a9}return ba}}a6.innerHTML="<a href='#'></a>";if(a6.firstChild&&typeof a6.firstChild.getAttribute!=="undefined"&&a6.firstChild.getAttribute("href")!=="#"){aT.attrHandle.href=function(a7){if(typeof a7.expires!=="undefined"){return a7.getAttribute("href")}else{return a7.getAttribute("href",2)}}}a6=null})();if(Y.querySelectorAll){(function(){var a6=aQ,a9=Y.createElement("div"),a8="__sizzle__";a9.innerHTML="<p class='TEST'></p>";if(a9.querySelectorAll&&a9.querySelectorAll(".TEST").length===0){return}aQ=function(be,bd,ba,bc){bd=bd||Y;be=be.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!bc&&!aQ.isXML(bd)){if(bd.nodeType===9){try{return aP(bd.querySelectorAll(be),ba)}catch(bg){}}else{if(bd.nodeType===1&&bd.nodeName.toLowerCase()!=="object"){var bb=bd.getAttribute("id"),bh=bb||a8;if(!bb){bd.setAttribute("id",bh)}try{return aP(bd.querySelectorAll("#"+bh+" "+be),ba)}catch(bf){}finally{if(!bb){bd.removeAttribute("id")}}}}}return a6(be,bd,ba,bc)};for(var a7 in a6){aQ[a7]=a6[a7]}a9=null})()}(function(){var a6=Y.documentElement,a8=a6.matchesSelector||a6.mozMatchesSelector||a6.webkitMatchesSelector||a6.msMatchesSelector,a7=false;try{a8.call(Y.documentElement,"[test!='']:sizzle")}catch(a9){a7=true}if(a8){aQ.matchesSelector=function(ba,bc){bc=bc.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!aQ.isXML(ba)){try{if(a7||!aT.match.PSEUDO.test(bc)&&!/!=/.test(bc)){return a8.call(ba,bc)}}catch(bb){}}return aQ(bc,null,null,[ba]).length>0}}})();(function(){var a6=Y.createElement("div");a6.innerHTML="<div class='test e'></div><div class='test'></div>";if(!a6.getElementsByClassName||a6.getElementsByClassName("e").length===0){return}a6.lastChild.className="e";if(a6.getElementsByClassName("e").length===1){return}aT.order.splice(1,0,"CLASS");aT.find.CLASS=function(a7,a8,a9){if(typeof a8.getElementsByClassName!=="undefined"&&!a9){return a8.getElementsByClassName(a7[1])}};a6=null})();function a2(a7,bc,bb,bf,bd,be){for(var a9=0,a8=bf.length;a9<a8;a9++){var a6=bf[a9];if(a6){var ba=false;a6=a6[a7];while(a6){if(a6.sizcache===bb){ba=bf[a6.sizset];break}if(a6.nodeType===1&&!be){a6.sizcache=bb;a6.sizset=a9}if(a6.nodeName.toLowerCase()===bc){ba=a6;break}a6=a6[a7]}bf[a9]=ba}}}function a5(a7,bc,bb,bf,bd,be){for(var a9=0,a8=bf.length;a9<a8;a9++){var a6=bf[a9];if(a6){var ba=false;a6=a6[a7];while(a6){if(a6.sizcache===bb){ba=bf[a6.sizset];break}if(a6.nodeType===1){if(!be){a6.sizcache=bb;a6.sizset=a9}if(typeof bc!=="string"){if(a6===bc){ba=true;break}}else{if(aQ.filter(bc,[a6]).length>0){ba=a6;break}}}a6=a6[a7]}bf[a9]=ba}}}if(Y.documentElement.contains){aQ.contains=function(a7,a6){return a7!==a6&&(a7.contains?a7.contains(a6):true)}}else{if(Y.documentElement.compareDocumentPosition){aQ.contains=function(a7,a6){return !!(a7.compareDocumentPosition(a6)&16)}}else{aQ.contains=function(){return false}}}aQ.isXML=function(a6){var a7=(a6?a6.ownerDocument||a6:0).documentElement;return a7?a7.nodeName!=="HTML":false};var aV=function(a6,bd){var bb,a9=[],ba="",a8=bd.nodeType?[bd]:bd;while((bb=aT.match.PSEUDO.exec(a6))){ba+=bb[0];a6=a6.replace(aT.match.PSEUDO,"")}a6=aT.relative[a6]?a6+"*":a6;for(var bc=0,a7=a8.length;bc<a7;bc++){aQ(a6,a8[bc],a9)}return aQ.filter(ba,a9)};a.find=aQ;a.expr=aQ.selectors;a.expr[":"]=a.expr.filters;a.unique=aQ.uniqueSort;a.text=aQ.getText;a.isXMLDoc=aQ.isXML;a.contains=aQ.contains})();var L=/Until$/,V=/^(?:parents|prevUntil|prevAll)/,aA=/,/,aM=/^.[^:#\[\.,]*$/,D=Array.prototype.slice,x=a.expr.match.POS;a.fn.extend({find:function(aP){var aR=this.pushStack("","find",aP),aU=0;for(var aS=0,aQ=this.length;aS<aQ;aS++){aU=aR.length;a.find(aP,this[aS],aR);if(aS>0){for(var aV=aU;aV<aR.length;aV++){for(var aT=0;aT<aU;aT++){if(aR[aT]===aR[aV]){aR.splice(aV--,1);break}}}}}return aR},has:function(aQ){var aP=a(aQ);return this.filter(function(){for(var aS=0,aR=aP.length;aS<aR;aS++){if(a.contains(this,aP[aS])){return true}}})},not:function(aP){return this.pushStack(ac(this,aP,false),"not",aP)},filter:function(aP){return this.pushStack(ac(this,aP,true),"filter",aP)},is:function(aP){return !!aP&&a.filter(aP,this).length>0},closest:function(aZ,aQ){var aW=[],aT,aR,aY=this[0];if(a.isArray(aZ)){var aV,aS,aU={},aP=1;if(aY&&aZ.length){for(aT=0,aR=aZ.length;aT<aR;aT++){aS=aZ[aT];if(!aU[aS]){aU[aS]=a.expr.match.POS.test(aS)?a(aS,aQ||this.context):aS}}while(aY&&aY.ownerDocument&&aY!==aQ){for(aS in aU){aV=aU[aS];if(aV.jquery?aV.index(aY)>-1:a(aY).is(aV)){aW.push({selector:aS,elem:aY,level:aP})}}aY=aY.parentNode;aP++}}return aW}var aX=x.test(aZ)?a(aZ,aQ||this.context):null;for(aT=0,aR=this.length;aT<aR;aT++){aY=this[aT];while(aY){if(aX?aX.index(aY)>-1:a.find.matchesSelector(aY,aZ)){aW.push(aY);break}else{aY=aY.parentNode;if(!aY||!aY.ownerDocument||aY===aQ){break}}}}aW=aW.length>1?a.unique(aW):aW;return this.pushStack(aW,"closest",aZ)},index:function(aP){if(!aP||typeof aP==="string"){return a.inArray(this[0],aP?a(aP):this.parent().children())}return a.inArray(aP.jquery?aP[0]:aP,this)},add:function(aP,aQ){var aS=typeof aP==="string"?a(aP,aQ||this.context):a.makeArray(aP),aR=a.merge(this.get(),aS);return this.pushStack(t(aS[0])||t(aR[0])?aR:a.unique(aR))},andSelf:function(){return this.add(this.prevObject)}});function t(aP){return !aP||!aP.parentNode||aP.parentNode.nodeType===11}a.each({parent:function(aQ){var aP=aQ.parentNode;return aP&&aP.nodeType!==11?aP:null},parents:function(aP){return a.dir(aP,"parentNode")},parentsUntil:function(aQ,aP,aR){return a.dir(aQ,"parentNode",aR)},next:function(aP){return a.nth(aP,2,"nextSibling")},prev:function(aP){return a.nth(aP,2,"previousSibling")},nextAll:function(aP){return a.dir(aP,"nextSibling")},prevAll:function(aP){return a.dir(aP,"previousSibling")},nextUntil:function(aQ,aP,aR){return a.dir(aQ,"nextSibling",aR)},prevUntil:function(aQ,aP,aR){return a.dir(aQ,"previousSibling",aR)},siblings:function(aP){return a.sibling(aP.parentNode.firstChild,aP)},children:function(aP){return a.sibling(aP.firstChild)},contents:function(aP){return a.nodeName(aP,"iframe")?aP.contentDocument||aP.contentWindow.document:a.makeArray(aP.childNodes)}},function(aP,aQ){a.fn[aP]=function(aT,aR){var aS=a.map(this,aQ,aT);if(!L.test(aP)){aR=aT}if(aR&&typeof aR==="string"){aS=a.filter(aR,aS)}aS=this.length>1?a.unique(aS):aS;if((this.length>1||aA.test(aR))&&V.test(aP)){aS=aS.reverse()}return this.pushStack(aS,aP,D.call(arguments).join(","))}});a.extend({filter:function(aR,aP,aQ){if(aQ){aR=":not("+aR+")"}return aP.length===1?a.find.matchesSelector(aP[0],aR)?[aP[0]]:[]:a.find.matches(aR,aP)},dir:function(aR,aQ,aT){var aP=[],aS=aR[aQ];while(aS&&aS.nodeType!==9&&(aT===z||aS.nodeType!==1||!a(aS).is(aT))){if(aS.nodeType===1){aP.push(aS)}aS=aS[aQ]}return aP},nth:function(aT,aP,aR,aS){aP=aP||1;var aQ=0;for(;aT;aT=aT[aR]){if(aT.nodeType===1&&++aQ===aP){break}}return aT},sibling:function(aR,aQ){var aP=[];for(;aR;aR=aR.nextSibling){if(aR.nodeType===1&&aR!==aQ){aP.push(aR)}}return aP}});function ac(aS,aR,aP){if(a.isFunction(aR)){return a.grep(aS,function(aU,aT){var aV=!!aR.call(aU,aT,aU);return aV===aP})}else{if(aR.nodeType){return a.grep(aS,function(aU,aT){return(aU===aR)===aP})}else{if(typeof aR==="string"){var aQ=a.grep(aS,function(aT){return aT.nodeType===1});if(aM.test(aR)){return a.filter(aR,aQ,!aP)}else{aR=a.filter(aR,aQ)}}}}return a.grep(aS,function(aU,aT){return(a.inArray(aU,aR)>=0)===aP})}var Q=/ jQuery\d+="(?:\d+|null)"/g,W=/^\s+/,G=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,b=/<([\w:]+)/,p=/<tbody/i,J=/<|&#?\w+;/,C=/<(?:script|object|embed|option|style)/i,i=/checked\s*(?:[^=]|=\s*.checked.)/i,F=/\=([^="'>\s]+\/)>/g,Z={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};Z.optgroup=Z.option;Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead;Z.th=Z.td;if(!a.support.htmlSerialize){Z._default=[1,"div<div>","</div>"]}a.fn.extend({text:function(aP){if(a.isFunction(aP)){return this.each(function(aR){var aQ=a(this);aQ.text(aP.call(this,aR,aQ.text()))})}if(typeof aP!=="object"&&aP!==z){return this.empty().append((this[0]&&this[0].ownerDocument||Y).createTextNode(aP))}return a.text(this)},wrapAll:function(aP){if(a.isFunction(aP)){return this.each(function(aR){a(this).wrapAll(aP.call(this,aR))})}if(this[0]){var aQ=a(aP,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){aQ.insertBefore(this[0])}aQ.map(function(){var aR=this;while(aR.firstChild&&aR.firstChild.nodeType===1){aR=aR.firstChild}return aR}).append(this)}return this},wrapInner:function(aP){if(a.isFunction(aP)){return this.each(function(aQ){a(this).wrapInner(aP.call(this,aQ))})}return this.each(function(){var aQ=a(this),aR=aQ.contents();if(aR.length){aR.wrapAll(aP)}else{aQ.append(aP)}})},wrap:function(aP){return this.each(function(){a(this).wrapAll(aP)})},unwrap:function(){return this.parent().each(function(){if(!a.nodeName(this,"body")){a(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(aP){if(this.nodeType===1){this.appendChild(aP)}})},prepend:function(){return this.domManip(arguments,true,function(aP){if(this.nodeType===1){this.insertBefore(aP,this.firstChild)}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(aQ){this.parentNode.insertBefore(aQ,this)})}else{if(arguments.length){var aP=a(arguments[0]);aP.push.apply(aP,this.toArray());return this.pushStack(aP,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(aQ){this.parentNode.insertBefore(aQ,this.nextSibling)})}else{if(arguments.length){var aP=this.pushStack(this,"after",arguments);aP.push.apply(aP,a(arguments[0]).toArray());return aP}}},remove:function(aP,aS){for(var aQ=0,aR;(aR=this[aQ])!=null;aQ++){if(!aP||a.filter(aP,[aR]).length){if(!aS&&aR.nodeType===1){a.cleanData(aR.getElementsByTagName("*"));a.cleanData([aR])}if(aR.parentNode){aR.parentNode.removeChild(aR)}}}return this},empty:function(){for(var aP=0,aQ;(aQ=this[aP])!=null;aP++){if(aQ.nodeType===1){a.cleanData(aQ.getElementsByTagName("*"))}while(aQ.firstChild){aQ.removeChild(aQ.firstChild)}}return this},clone:function(aQ){var aP=this.map(function(){if(!a.support.noCloneEvent&&!a.isXMLDoc(this)){var aS=this.outerHTML,aR=this.ownerDocument;if(!aS){var aT=aR.createElement("div");aT.appendChild(this.cloneNode(true));aS=aT.innerHTML}return a.clean([aS.replace(Q,"").replace(F,'="$1">').replace(W,"")],aR)[0]}else{return this.cloneNode(true)}});if(aQ===true){m(this,aP);m(this.find("*"),aP.find("*"))}return aP},html:function(aR){if(aR===z){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Q,""):null}else{if(typeof aR==="string"&&!C.test(aR)&&(a.support.leadingWhitespace||!W.test(aR))&&!Z[(b.exec(aR)||["",""])[1].toLowerCase()]){aR=aR.replace(G,"<$1></$2>");try{for(var aQ=0,aP=this.length;aQ<aP;aQ++){if(this[aQ].nodeType===1){a.cleanData(this[aQ].getElementsByTagName("*"));this[aQ].innerHTML=aR}}}catch(aS){this.empty().append(aR)}}else{if(a.isFunction(aR)){this.each(function(aU){var aT=a(this);aT.html(aR.call(this,aU,aT.html()))})}else{this.empty().append(aR)}}}return this},replaceWith:function(aP){if(this[0]&&this[0].parentNode){if(a.isFunction(aP)){return this.each(function(aS){var aR=a(this),aQ=aR.html();aR.replaceWith(aP.call(this,aS,aQ))})}if(typeof aP!=="string"){aP=a(aP).detach()}return this.each(function(){var aR=this.nextSibling,aQ=this.parentNode;a(this).remove();if(aR){a(aR).before(aP)}else{a(aQ).append(aP)}})}else{return this.pushStack(a(a.isFunction(aP)?aP():aP),"replaceWith",aP)}},detach:function(aP){return this.remove(aP,true)},domManip:function(aV,aZ,aY){var aS,aT,aU,aX,aW=aV[0],aQ=[];if(!a.support.checkClone&&arguments.length===3&&typeof aW==="string"&&i.test(aW)){return this.each(function(){a(this).domManip(aV,aZ,aY,true)})}if(a.isFunction(aW)){return this.each(function(a1){var a0=a(this);aV[0]=aW.call(this,a1,aZ?a0.html():z);a0.domManip(aV,aZ,aY)})}if(this[0]){aX=aW&&aW.parentNode;if(a.support.parentNode&&aX&&aX.nodeType===11&&aX.childNodes.length===this.length){aS={fragment:aX}}else{aS=a.buildFragment(aV,this,aQ)}aU=aS.fragment;if(aU.childNodes.length===1){aT=aU=aU.firstChild}else{aT=aU.firstChild}if(aT){aZ=aZ&&a.nodeName(aT,"tr");for(var aR=0,aP=this.length;aR<aP;aR++){aY.call(aZ?aB(this[aR],aT):this[aR],aR>0||aS.cacheable||this.length>1?aU.cloneNode(true):aU)}}if(aQ.length){a.each(aQ,aL)}}return this}});function aB(aP,aQ){return a.nodeName(aP,"table")?(aP.getElementsByTagName("tbody")[0]||aP.appendChild(aP.ownerDocument.createElement("tbody"))):aP}function m(aR,aP){var aQ=0;aP.each(function(){if(this.nodeName!==(aR[aQ]&&aR[aQ].nodeName)){return}var aW=a.data(aR[aQ++]),aV=a.data(this,aW),aS=aW&&aW.events;if(aS){delete aV.handle;aV.events={};for(var aU in aS){for(var aT in aS[aU]){a.event.add(this,aU,aS[aU][aT],aS[aU][aT].data)}}}})}a.buildFragment=function(aU,aS,aQ){var aT,aP,aR,aV=(aS&&aS[0]?aS[0].ownerDocument||aS[0]:Y);if(aU.length===1&&typeof aU[0]==="string"&&aU[0].length<512&&aV===Y&&!C.test(aU[0])&&(a.support.checkClone||!i.test(aU[0]))){aP=true;aR=a.fragments[aU[0]];if(aR){if(aR!==1){aT=aR}}}if(!aT){aT=aV.createDocumentFragment();a.clean(aU,aV,aT,aQ)}if(aP){a.fragments[aU[0]]=aR?aT:1}return{fragment:aT,cacheable:aP}};a.fragments={};a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(aP,aQ){a.fn[aP]=function(aR){var aU=[],aX=a(aR),aW=this.length===1&&this[0].parentNode;if(aW&&aW.nodeType===11&&aW.childNodes.length===1&&aX.length===1){aX[aQ](this[0]);return this}else{for(var aV=0,aS=aX.length;aV<aS;aV++){var aT=(aV>0?this.clone(true):this).get();a(aX[aV])[aQ](aT);aU=aU.concat(aT)}return this.pushStack(aU,aP,aX.selector)}}});a.extend({clean:function(aR,aT,a0,aV){aT=aT||Y;if(typeof aT.createElement==="undefined"){aT=aT.ownerDocument||aT[0]&&aT[0].ownerDocument||Y}var a1=[];for(var aZ=0,aU;(aU=aR[aZ])!=null;aZ++){if(typeof aU==="number"){aU+=""}if(!aU){continue}if(typeof aU==="string"&&!J.test(aU)){aU=aT.createTextNode(aU)}else{if(typeof aU==="string"){aU=aU.replace(G,"<$1></$2>");var a2=(b.exec(aU)||["",""])[1].toLowerCase(),aS=Z[a2]||Z._default,aY=aS[0],aQ=aT.createElement("div");aQ.innerHTML=aS[1]+aU+aS[2];while(aY--){aQ=aQ.lastChild}if(!a.support.tbody){var aP=p.test(aU),aX=a2==="table"&&!aP?aQ.firstChild&&aQ.firstChild.childNodes:aS[1]==="<table>"&&!aP?aQ.childNodes:[];for(var aW=aX.length-1;aW>=0;--aW){if(a.nodeName(aX[aW],"tbody")&&!aX[aW].childNodes.length){aX[aW].parentNode.removeChild(aX[aW])}}}if(!a.support.leadingWhitespace&&W.test(aU)){aQ.insertBefore(aT.createTextNode(W.exec(aU)[0]),aQ.firstChild)}aU=aQ.childNodes}}if(aU.nodeType){a1.push(aU)}else{a1=a.merge(a1,aU)}}if(a0){for(aZ=0;a1[aZ];aZ++){if(aV&&a.nodeName(a1[aZ],"script")&&(!a1[aZ].type||a1[aZ].type.toLowerCase()==="text/javascript")){aV.push(a1[aZ].parentNode?a1[aZ].parentNode.removeChild(a1[aZ]):a1[aZ])}else{if(a1[aZ].nodeType===1){a1.splice.apply(a1,[aZ+1,0].concat(a.makeArray(a1[aZ].getElementsByTagName("script"))))}a0.appendChild(a1[aZ])}}}return a1},cleanData:function(aQ){var aT,aR,aP=a.cache,aW=a.event.special,aV=a.support.deleteExpando;for(var aU=0,aS;(aS=aQ[aU])!=null;aU++){if(aS.nodeName&&a.noData[aS.nodeName.toLowerCase()]){continue}aR=aS[a.expando];if(aR){aT=aP[aR];if(aT&&aT.events){for(var aX in aT.events){if(aW[aX]){a.event.remove(aS,aX)}else{a.removeEvent(aS,aX,aT.handle)}}}if(aV){delete aS[a.expando]}else{if(aS.removeAttribute){aS.removeAttribute(a.expando)}}delete aP[aR]}}}});function aL(aP,aQ){if(aQ.src){a.ajax({url:aQ.src,async:false,dataType:"script"})}else{a.globalEval(aQ.text||aQ.textContent||aQ.innerHTML||"")}if(aQ.parentNode){aQ.parentNode.removeChild(aQ)}}var R=/alpha\([^)]*\)/i,X=/opacity=([^)]*)/,ap=/-([a-z])/ig,r=/([A-Z])/g,aD=/^-?\d+(?:px)?$/i,aK=/^-?\d+(?:.\d+)?[^\d]*$/,az={position:"absolute",visibility:"hidden",display:"block"},T=["Left","Right"],av=["Top","Bottom"],K,af,ao,h=function(aP,aQ){return aQ.toUpperCase()};a.fn.css=function(aP,aQ){if(arguments.length===2&&aQ===z){return this}return a.access(this,aP,aQ,true,function(aS,aR,aT){return aT!==z?a.style(aS,aR,aT):a.css(aS,aR)})};a.extend({cssHooks:{opacity:{get:function(aR,aQ){if(aQ){var aP=K(aR,"opacity","opacity");return aP===""?"1":aP}else{return aR.style.opacity}}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,zoom:true,lineHeight:true},cssProps:{"float":a.support.cssFloat?"cssFloat":"styleFloat"},style:function(aR,aQ,aW,aS){if(!aR||aR.nodeType===3||aR.nodeType===8||!aR.style){return}var aV,aT=a.camelCase(aQ),aP=aR.style,aX=a.cssHooks[aT];aQ=a.cssProps[aT]||aT;if(aW!==z){if(typeof aW==="number"&&isNaN(aW)||aW==null){return}if(typeof aW==="number"&&!a.cssNumber[aT]){aW+="px"}if(!aX||!("set" in aX)||(aW=aX.set(aR,aW))!==z){try{aP[aQ]=aW}catch(aU){}}}else{if(aX&&"get" in aX&&(aV=aX.get(aR,false,aS))!==z){return aV}return aP[aQ]}},css:function(aU,aT,aQ){var aS,aR=a.camelCase(aT),aP=a.cssHooks[aR];aT=a.cssProps[aR]||aR;if(aP&&"get" in aP&&(aS=aP.get(aU,true,aQ))!==z){return aS}else{if(K){return K(aU,aT,aR)}}},swap:function(aS,aR,aT){var aP={};for(var aQ in aR){aP[aQ]=aS.style[aQ];aS.style[aQ]=aR[aQ]}aT.call(aS);for(aQ in aR){aS.style[aQ]=aP[aQ]}},camelCase:function(aP){return aP.replace(ap,h)}});a.curCSS=a.css;a.each(["height","width"],function(aQ,aP){a.cssHooks[aP]={get:function(aT,aS,aR){var aU;if(aS){if(aT.offsetWidth!==0){aU=k(aT,aP,aR)}else{a.swap(aT,az,function(){aU=k(aT,aP,aR)})}if(aU<=0){aU=K(aT,aP,aP);if(aU==="0px"&&ao){aU=ao(aT,aP,aP)}if(aU!=null){return aU===""||aU==="auto"?"0px":aU}}if(aU<0||aU==null){aU=aT.style[aP];return aU===""||aU==="auto"?"0px":aU}return typeof aU==="string"?aU:aU+"px"}},set:function(aR,aS){if(aD.test(aS)){aS=parseFloat(aS);if(aS>=0){return aS+"px"}}else{return aS}}}});if(!a.support.opacity){a.cssHooks.opacity={get:function(aQ,aP){return X.test((aP&&aQ.currentStyle?aQ.currentStyle.filter:aQ.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":aP?"1":""},set:function(aS,aT){var aR=aS.style;aR.zoom=1;var aP=a.isNaN(aT)?"":"alpha(opacity="+aT*100+")",aQ=aR.filter||"";aR.filter=R.test(aQ)?aQ.replace(R,aP):aR.filter+" "+aP}}}if(Y.defaultView&&Y.defaultView.getComputedStyle){af=function(aU,aP,aS){var aR,aT,aQ;aS=aS.replace(r,"-$1").toLowerCase();if(!(aT=aU.ownerDocument.defaultView)){return z}if((aQ=aT.getComputedStyle(aU,null))){aR=aQ.getPropertyValue(aS);if(aR===""&&!a.contains(aU.ownerDocument.documentElement,aU)){aR=a.style(aU,aS)}}return aR}}if(Y.documentElement.currentStyle){ao=function(aT,aR){var aU,aP,aQ=aT.currentStyle&&aT.currentStyle[aR],aS=aT.style;if(!aD.test(aQ)&&aK.test(aQ)){aU=aS.left;aP=aT.runtimeStyle.left;aT.runtimeStyle.left=aT.currentStyle.left;aS.left=aR==="fontSize"?"1em":(aQ||0);aQ=aS.pixelLeft+"px";aS.left=aU;aT.runtimeStyle.left=aP}return aQ===""?"auto":aQ}}K=af||ao;function k(aR,aQ,aP){var aT=aQ==="width"?T:av,aS=aQ==="width"?aR.offsetWidth:aR.offsetHeight;if(aP==="border"){return aS}a.each(aT,function(){if(!aP){aS-=parseFloat(a.css(aR,"padding"+this))||0}if(aP==="margin"){aS+=parseFloat(a.css(aR,"margin"+this))||0}else{aS-=parseFloat(a.css(aR,"border"+this+"Width"))||0}});return aS}if(a.expr&&a.expr.filters){a.expr.filters.hidden=function(aR){var aQ=aR.offsetWidth,aP=aR.offsetHeight;return(aQ===0&&aP===0)||(!a.support.reliableHiddenOffsets&&(aR.style.display||a.css(aR,"display"))==="none")};a.expr.filters.visible=function(aP){return !a.expr.filters.hidden(aP)}}var ab=a.now(),ay=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,l=/^(?:select|textarea)/i,ar=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ai=/^(?:GET|HEAD)$/,U=/\[\]$/,n=/\=\?(&|$)/,A=/\?/,aO=/([?&])_=[^&]*/,y=/^(\w+:)?\/\/([^\/?#]+)/,e=/%20/g,aN=/#.*$/,s=a.fn.load;a.fn.extend({load:function(aR,aU,aV){if(typeof aR!=="string"&&s){return s.apply(this,arguments)}else{if(!this.length){return this}}var aT=aR.indexOf(" ");if(aT>=0){var aP=aR.slice(aT,aR.length);aR=aR.slice(0,aT)}var aS="GET";if(aU){if(a.isFunction(aU)){aV=aU;aU=null}else{if(typeof aU==="object"){aU=a.param(aU,a.ajaxSettings.traditional);aS="POST"}}}var aQ=this;a.ajax({url:aR,type:aS,dataType:"html",data:aU,complete:function(aX,aW){if(aW==="success"||aW==="notmodified"){aQ.html(aP?a("<div>").append(aX.responseText.replace(ay,"")).find(aP):aX.responseText)}if(aV){aQ.each(aV,[aX.responseText,aW,aX])}}});return this},serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?a.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||l.test(this.nodeName)||ar.test(this.type))}).map(function(aP,aQ){var aR=a(this).val();return aR==null?null:a.isArray(aR)?a.map(aR,function(aT,aS){return{name:aQ.name,value:aT}}):{name:aQ.name,value:aR}}).get()}});a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(aP,aQ){a.fn[aQ]=function(aR){return this.bind(aQ,aR)}});a.extend({get:function(aP,aR,aS,aQ){if(a.isFunction(aR)){aQ=aQ||aS;aS=aR;aR=null}return a.ajax({type:"GET",url:aP,data:aR,success:aS,dataType:aQ})},getScript:function(aP,aQ){return a.get(aP,null,aQ,"script")},getJSON:function(aP,aQ,aR){return a.get(aP,aQ,aR,"json")},post:function(aP,aR,aS,aQ){if(a.isFunction(aR)){aQ=aQ||aS;aS=aR;aR={}}return a.ajax({type:"POST",url:aP,data:aR,success:aS,dataType:aQ})},ajaxSetup:function(aP){a.extend(a.ajaxSettings,aP)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new aC.XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a6){var aZ=a.extend(true,{},a.ajaxSettings,a6),ba,a5,a9,aR=aZ.type.toUpperCase(),a2=ai.test(aR);aZ.url=aZ.url.replace(aN,"");aZ.context=a6&&a6.context!=null?a6.context:aZ;if(aZ.data&&aZ.processData&&typeof aZ.data!=="string"){aZ.data=a.param(aZ.data,aZ.traditional)}if(aZ.dataType==="jsonp"){if(aR==="GET"){if(!n.test(aZ.url)){aZ.url+=(A.test(aZ.url)?"&":"?")+(aZ.jsonp||"callback")+"=?"}}else{if(!aZ.data||!n.test(aZ.data)){aZ.data=(aZ.data?aZ.data+"&":"")+(aZ.jsonp||"callback")+"=?"}}aZ.dataType="json"}if(aZ.dataType==="json"&&(aZ.data&&n.test(aZ.data)||n.test(aZ.url))){ba=aZ.jsonpCallback||("jsonp"+ab++);if(aZ.data){aZ.data=(aZ.data+"").replace(n,"="+ba+"$1")}aZ.url=aZ.url.replace(n,"="+ba+"$1");aZ.dataType="script";var a3=aC[ba];aC[ba]=function(bc){if(a.isFunction(a3)){a3(bc)}else{aC[ba]=z;try{delete aC[ba]}catch(bb){}}a9=bc;a.handleSuccess(aZ,aV,a5,a9);a.handleComplete(aZ,aV,a5,a9);if(aS){aS.removeChild(a7)}}}if(aZ.dataType==="script"&&aZ.cache===null){aZ.cache=false}if(aZ.cache===false&&a2){var aP=a.now();var a8=aZ.url.replace(aO,"$1_="+aP);aZ.url=a8+((a8===aZ.url)?(A.test(aZ.url)?"&":"?")+"_="+aP:"")}if(aZ.data&&a2){aZ.url+=(A.test(aZ.url)?"&":"?")+aZ.data}if(aZ.global&&a.active++===0){a.event.trigger("ajaxStart")}var a4=y.exec(aZ.url),aT=a4&&(a4[1]&&a4[1].toLowerCase()!==location.protocol||a4[2].toLowerCase()!==location.host);if(aZ.dataType==="script"&&aR==="GET"&&aT){var aS=Y.getElementsByTagName("head")[0]||Y.documentElement;var a7=Y.createElement("script");if(aZ.scriptCharset){a7.charset=aZ.scriptCharset}a7.src=aZ.url;if(!ba){var a0=false;a7.onload=a7.onreadystatechange=function(){if(!a0&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){a0=true;a.handleSuccess(aZ,aV,a5,a9);a.handleComplete(aZ,aV,a5,a9);a7.onload=a7.onreadystatechange=null;if(aS&&a7.parentNode){aS.removeChild(a7)}}}}aS.insertBefore(a7,aS.firstChild);return z}var aX=false;var aV=aZ.xhr();if(!aV){return}if(aZ.username){aV.open(aR,aZ.url,aZ.async,aZ.username,aZ.password)}else{aV.open(aR,aZ.url,aZ.async)}try{if((aZ.data!=null&&!a2)||(a6&&a6.contentType)){aV.setRequestHeader("Content-Type",aZ.contentType)}if(aZ.ifModified){if(a.lastModified[aZ.url]){aV.setRequestHeader("If-Modified-Since",a.lastModified[aZ.url])}if(a.etag[aZ.url]){aV.setRequestHeader("If-None-Match",a.etag[aZ.url])}}if(!aT){aV.setRequestHeader("X-Requested-With","XMLHttpRequest")}aV.setRequestHeader("Accept",aZ.dataType&&aZ.accepts[aZ.dataType]?aZ.accepts[aZ.dataType]+", */*; q=0.01":aZ.accepts._default)}catch(aW){}if(aZ.beforeSend&&aZ.beforeSend.call(aZ.context,aV,aZ)===false){if(aZ.global&&a.active--===1){a.event.trigger("ajaxStop")}aV.abort();return false}if(aZ.global){a.triggerGlobal(aZ,"ajaxSend",[aV,aZ])}var aY=aV.onreadystatechange=function(bb){if(!aV||aV.readyState===0||bb==="abort"){if(!aX){a.handleComplete(aZ,aV,a5,a9)}aX=true;if(aV){aV.onreadystatechange=a.noop}}else{if(!aX&&aV&&(aV.readyState===4||bb==="timeout")){aX=true;aV.onreadystatechange=a.noop;a5=bb==="timeout"?"timeout":!a.httpSuccess(aV)?"error":aZ.ifModified&&a.httpNotModified(aV,aZ.url)?"notmodified":"success";var bc;if(a5==="success"){try{a9=a.httpData(aV,aZ.dataType,aZ)}catch(bd){a5="parsererror";bc=bd}}if(a5==="success"||a5==="notmodified"){if(!ba){a.handleSuccess(aZ,aV,a5,a9)}}else{a.handleError(aZ,aV,a5,bc)}if(!ba){a.handleComplete(aZ,aV,a5,a9)}if(bb==="timeout"){aV.abort()}if(aZ.async){aV=null}}}};try{var aQ=aV.abort;aV.abort=function(){if(aV){Function.prototype.call.call(aQ,aV)}aY("abort")}}catch(a1){}if(aZ.async&&aZ.timeout>0){setTimeout(function(){if(aV&&!aX){aY("timeout")}},aZ.timeout)}try{aV.send(a2||aZ.data==null?null:aZ.data)}catch(aU){a.handleError(aZ,aV,null,aU);a.handleComplete(aZ,aV,a5,a9)}if(!aZ.async){aY()}return aV},param:function(aP,aR){var aQ=[],aT=function(aU,aV){aV=a.isFunction(aV)?aV():aV;aQ[aQ.length]=encodeURIComponent(aU)+"="+encodeURIComponent(aV)};if(aR===z){aR=a.ajaxSettings.traditional}if(a.isArray(aP)||aP.jquery){a.each(aP,function(){aT(this.name,this.value)})}else{for(var aS in aP){o(aS,aP[aS],aR,aT)}}return aQ.join("&").replace(e,"+")}});function o(aQ,aS,aP,aR){if(a.isArray(aS)&&aS.length){a.each(aS,function(aU,aT){if(aP||U.test(aQ)){aR(aQ,aT)}else{o(aQ+"["+(typeof aT==="object"||a.isArray(aT)?aU:"")+"]",aT,aP,aR)}})}else{if(!aP&&aS!=null&&typeof aS==="object"){if(a.isEmptyObject(aS)){aR(aQ,"")}else{a.each(aS,function(aU,aT){o(aQ+"["+aU+"]",aT,aP,aR)})}}else{aR(aQ,aS)}}}a.extend({active:0,lastModified:{},etag:{},handleError:function(aQ,aS,aP,aR){if(aQ.error){aQ.error.call(aQ.context,aS,aP,aR)}if(aQ.global){a.triggerGlobal(aQ,"ajaxError",[aS,aQ,aR])}},handleSuccess:function(aQ,aS,aP,aR){if(aQ.success){aQ.success.call(aQ.context,aR,aP,aS)}if(aQ.global){a.triggerGlobal(aQ,"ajaxSuccess",[aS,aQ])}},handleComplete:function(aQ,aR,aP){if(aQ.complete){aQ.complete.call(aQ.context,aR,aP)}if(aQ.global){a.triggerGlobal(aQ,"ajaxComplete",[aR,aQ])}if(aQ.global&&a.active--===1){a.event.trigger("ajaxStop")}},triggerGlobal:function(aR,aQ,aP){(aR.context&&aR.context.url==null?a(aR.context):a.event).trigger(aQ,aP)},httpSuccess:function(aQ){try{return !aQ.status&&location.protocol==="file:"||aQ.status>=200&&aQ.status<300||aQ.status===304||aQ.status===1223}catch(aP){}return false},httpNotModified:function(aS,aP){var aR=aS.getResponseHeader("Last-Modified"),aQ=aS.getResponseHeader("Etag");if(aR){a.lastModified[aP]=aR}if(aQ){a.etag[aP]=aQ}return aS.status===304},httpData:function(aU,aS,aR){var aQ=aU.getResponseHeader("content-type")||"",aP=aS==="xml"||!aS&&aQ.indexOf("xml")>=0,aT=aP?aU.responseXML:aU.responseText;if(aP&&aT.documentElement.nodeName==="parsererror"){a.error("parsererror")}if(aR&&aR.dataFilter){aT=aR.dataFilter(aT,aS)}if(typeof aT==="string"){if(aS==="json"||!aS&&aQ.indexOf("json")>=0){aT=a.parseJSON(aT)}else{if(aS==="script"||!aS&&aQ.indexOf("javascript")>=0){a.globalEval(aT)}}}return aT}});if(aC.ActiveXObject){a.ajaxSettings.xhr=function(){if(aC.location.protocol!=="file:"){try{return new aC.XMLHttpRequest()}catch(aQ){}}try{return new aC.ActiveXObject("Microsoft.XMLHTTP")}catch(aP){}}}a.support.ajax=!!a.ajaxSettings.xhr();var E={},aa=/^(?:toggle|show|hide)$/,ak=/^([+\-]=)?([\d+.\-]+)(.*)$/,aw,ae=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];a.fn.extend({show:function(aS,aV,aU){var aR,aT;if(aS||aS===0){return this.animate(au("show",3),aS,aV,aU)}else{for(var aQ=0,aP=this.length;aQ<aP;aQ++){aR=this[aQ];aT=aR.style.display;if(!a.data(aR,"olddisplay")&&aT==="none"){aT=aR.style.display=""}if(aT===""&&a.css(aR,"display")==="none"){a.data(aR,"olddisplay",q(aR.nodeName))}}for(aQ=0;aQ<aP;aQ++){aR=this[aQ];aT=aR.style.display;if(aT===""||aT==="none"){aR.style.display=a.data(aR,"olddisplay")||""}}return this}},hide:function(aR,aU,aT){if(aR||aR===0){return this.animate(au("hide",3),aR,aU,aT)}else{for(var aQ=0,aP=this.length;aQ<aP;aQ++){var aS=a.css(this[aQ],"display");if(aS!=="none"){a.data(this[aQ],"olddisplay",aS)}}for(aQ=0;aQ<aP;aQ++){this[aQ].style.display="none"}return this}},_toggle:a.fn.toggle,toggle:function(aR,aQ,aS){var aP=typeof aR==="boolean";if(a.isFunction(aR)&&a.isFunction(aQ)){this._toggle.apply(this,arguments)}else{if(aR==null||aP){this.each(function(){var aT=aP?aR:a(this).is(":hidden");a(this)[aT?"show":"hide"]()})}else{this.animate(au("toggle",3),aR,aQ,aS)}}return this},fadeTo:function(aP,aS,aR,aQ){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:aS},aP,aR,aQ)},animate:function(aT,aQ,aS,aR){var aP=a.speed(aQ,aS,aR);if(a.isEmptyObject(aT)){return this.each(aP.complete)}return this[aP.queue===false?"each":"queue"](function(){var aW=a.extend({},aP),a0,aX=this.nodeType===1,aY=aX&&a(this).is(":hidden"),aU=this;for(a0 in aT){var aV=a.camelCase(a0);if(a0!==aV){aT[aV]=aT[a0];delete aT[a0];a0=aV}if(aT[a0]==="hide"&&aY||aT[a0]==="show"&&!aY){return aW.complete.call(this)}if(aX&&(a0==="height"||a0==="width")){aW.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(a.css(this,"display")==="inline"&&a.css(this,"float")==="none"){if(!a.support.inlineBlockNeedsLayout){this.style.display="inline-block"}else{var aZ=q(this.nodeName);if(aZ==="inline"){this.style.display="inline-block"}else{this.style.display="inline";this.style.zoom=1}}}}if(a.isArray(aT[a0])){(aW.specialEasing=aW.specialEasing||{})[a0]=aT[a0][1];aT[a0]=aT[a0][0]}}if(aW.overflow!=null){this.style.overflow="hidden"}aW.curAnim=a.extend({},aT);a.each(aT,function(a2,a6){var a5=new a.fx(aU,aW,a2);if(aa.test(a6)){a5[a6==="toggle"?aY?"show":"hide":a6](aT)}else{var a4=ak.exec(a6),a7=a5.cur()||0;if(a4){var a1=parseFloat(a4[2]),a3=a4[3]||"px";if(a3!=="px"){a.style(aU,a2,(a1||1)+a3);a7=((a1||1)/a5.cur())*a7;a.style(aU,a2,a7+a3)}if(a4[1]){a1=((a4[1]==="-="?-1:1)*a1)+a7}a5.custom(a7,a1,a3)}else{a5.custom(a7,a6,"")}}});return true})},stop:function(aQ,aP){var aR=a.timers;if(aQ){this.queue([])}this.each(function(){for(var aS=aR.length-1;aS>=0;aS--){if(aR[aS].elem===this){if(aP){aR[aS](true)}aR.splice(aS,1)}}});if(!aP){this.dequeue()}return this}});function au(aQ,aP){var aR={};a.each(ae.concat.apply([],ae.slice(0,aP)),function(){aR[this]=aQ});return aR}a.each({slideDown:au("show",1),slideUp:au("hide",1),slideToggle:au("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(aP,aQ){a.fn[aP]=function(aR,aT,aS){return this.animate(aQ,aR,aT,aS)}});a.extend({speed:function(aR,aS,aQ){var aP=aR&&typeof aR==="object"?a.extend({},aR):{complete:aQ||!aQ&&aS||a.isFunction(aR)&&aR,duration:aR,easing:aQ&&aS||aS&&!a.isFunction(aS)&&aS};aP.duration=a.fx.off?0:typeof aP.duration==="number"?aP.duration:aP.duration in a.fx.speeds?a.fx.speeds[aP.duration]:a.fx.speeds._default;aP.old=aP.complete;aP.complete=function(){if(aP.queue!==false){a(this).dequeue()}if(a.isFunction(aP.old)){aP.old.call(this)}};return aP},easing:{linear:function(aR,aS,aP,aQ){return aP+aQ*aR},swing:function(aR,aS,aP,aQ){return((-Math.cos(aR*Math.PI)/2)+0.5)*aQ+aP}},timers:[],fx:function(aQ,aP,aR){this.options=aP;this.elem=aQ;this.prop=aR;if(!aP.orig){aP.orig={}}}});a.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(a.fx.step[this.prop]||a.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var aP=parseFloat(a.css(this.elem,this.prop));return aP&&aP>-10000?aP:0},custom:function(aU,aT,aS){var aP=this,aR=a.fx;this.startTime=a.now();this.start=aU;this.end=aT;this.unit=aS||this.unit||"px";this.now=this.start;this.pos=this.state=0;function aQ(aV){return aP.step(aV)}aQ.elem=this.elem;if(aQ()&&a.timers.push(aQ)&&!aw){aw=setInterval(aR.tick,aR.interval)}},show:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());a(this.elem).show()},hide:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(aS){var aX=a.now(),aT=true;if(aS||aX>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var aU in this.options.curAnim){if(this.options.curAnim[aU]!==true){aT=false}}if(aT){if(this.options.overflow!=null&&!a.support.shrinkWrapBlocks){var aR=this.elem,aY=this.options;a.each(["","X","Y"],function(aZ,a0){aR.style["overflow"+a0]=aY.overflow[aZ]})}if(this.options.hide){a(this.elem).hide()}if(this.options.hide||this.options.show){for(var aP in this.options.curAnim){a.style(this.elem,aP,this.options.orig[aP])}}this.options.complete.call(this.elem)}return false}else{var aQ=aX-this.startTime;this.state=aQ/this.options.duration;var aV=this.options.specialEasing&&this.options.specialEasing[this.prop];var aW=this.options.easing||(a.easing.swing?"swing":"linear");this.pos=a.easing[aV||aW](this.state,aQ,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};a.extend(a.fx,{tick:function(){var aQ=a.timers;for(var aP=0;aP<aQ.length;aP++){if(!aQ[aP]()){aQ.splice(aP--,1)}}if(!aQ.length){a.fx.stop()}},interval:13,stop:function(){clearInterval(aw);aw=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(aP){a.style(aP.elem,"opacity",aP.now)},_default:function(aP){if(aP.elem.style&&aP.elem.style[aP.prop]!=null){aP.elem.style[aP.prop]=(aP.prop==="width"||aP.prop==="height"?Math.max(0,aP.now):aP.now)+aP.unit}else{aP.elem[aP.prop]=aP.now}}}});if(a.expr&&a.expr.filters){a.expr.filters.animated=function(aP){return a.grep(a.timers,function(aQ){return aP===aQ.elem}).length}}function q(aR){if(!E[aR]){var aP=a("<"+aR+">").appendTo("body"),aQ=aP.css("display");aP.remove();if(aQ==="none"||aQ===""){aQ="block"}E[aR]=aQ}return E[aR]}var I=/^t(?:able|d|h)$/i,N=/^(?:body|html)$/i;if("getBoundingClientRect" in Y.documentElement){a.fn.offset=function(a2){var aS=this[0],aV;if(a2){return this.each(function(a3){a.offset.setOffset(this,a2,a3)})}if(!aS||!aS.ownerDocument){return null}if(aS===aS.ownerDocument.body){return a.offset.bodyOffset(aS)}try{aV=aS.getBoundingClientRect()}catch(aZ){}var a1=aS.ownerDocument,aQ=a1.documentElement;if(!aV||!a.contains(aQ,aS)){return aV||{top:0,left:0}}var aW=a1.body,aX=ag(a1),aU=aQ.clientTop||aW.clientTop||0,aY=aQ.clientLeft||aW.clientLeft||0,aP=(aX.pageYOffset||a.support.boxModel&&aQ.scrollTop||aW.scrollTop),aT=(aX.pageXOffset||a.support.boxModel&&aQ.scrollLeft||aW.scrollLeft),a0=aV.top+aP-aU,aR=aV.left+aT-aY;return{top:a0,left:aR}}}else{a.fn.offset=function(a0){var aU=this[0];if(a0){return this.each(function(a1){a.offset.setOffset(this,a0,a1)})}if(!aU||!aU.ownerDocument){return null}if(aU===aU.ownerDocument.body){return a.offset.bodyOffset(aU)}a.offset.initialize();var aX,aR=aU.offsetParent,aQ=aU,aZ=aU.ownerDocument,aS=aZ.documentElement,aV=aZ.body,aW=aZ.defaultView,aP=aW?aW.getComputedStyle(aU,null):aU.currentStyle,aY=aU.offsetTop,aT=aU.offsetLeft;while((aU=aU.parentNode)&&aU!==aV&&aU!==aS){if(a.offset.supportsFixedPosition&&aP.position==="fixed"){break}aX=aW?aW.getComputedStyle(aU,null):aU.currentStyle;aY-=aU.scrollTop;aT-=aU.scrollLeft;if(aU===aR){aY+=aU.offsetTop;aT+=aU.offsetLeft;if(a.offset.doesNotAddBorder&&!(a.offset.doesAddBorderForTableAndCells&&I.test(aU.nodeName))){aY+=parseFloat(aX.borderTopWidth)||0;aT+=parseFloat(aX.borderLeftWidth)||0}aQ=aR;aR=aU.offsetParent}if(a.offset.subtractsBorderForOverflowNotVisible&&aX.overflow!=="visible"){aY+=parseFloat(aX.borderTopWidth)||0;aT+=parseFloat(aX.borderLeftWidth)||0}aP=aX}if(aP.position==="relative"||aP.position==="static"){aY+=aV.offsetTop;aT+=aV.offsetLeft}if(a.offset.supportsFixedPosition&&aP.position==="fixed"){aY+=Math.max(aS.scrollTop,aV.scrollTop);aT+=Math.max(aS.scrollLeft,aV.scrollLeft)}return{top:aY,left:aT}}}a.offset={initialize:function(){var aP=Y.body,aQ=Y.createElement("div"),aT,aV,aU,aW,aR=parseFloat(a.css(aP,"marginTop"))||0,aS="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.extend(aQ.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});aQ.innerHTML=aS;aP.insertBefore(aQ,aP.firstChild);aT=aQ.firstChild;aV=aT.firstChild;aW=aT.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(aV.offsetTop!==5);this.doesAddBorderForTableAndCells=(aW.offsetTop===5);aV.style.position="fixed";aV.style.top="20px";this.supportsFixedPosition=(aV.offsetTop===20||aV.offsetTop===15);aV.style.position=aV.style.top="";aT.style.overflow="hidden";aT.style.position="relative";this.subtractsBorderForOverflowNotVisible=(aV.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(aP.offsetTop!==aR);aP.removeChild(aQ);aP=aQ=aT=aV=aU=aW=null;a.offset.initialize=a.noop},bodyOffset:function(aP){var aR=aP.offsetTop,aQ=aP.offsetLeft;a.offset.initialize();if(a.offset.doesNotIncludeMarginInBodyOffset){aR+=parseFloat(a.css(aP,"marginTop"))||0;aQ+=parseFloat(a.css(aP,"marginLeft"))||0}return{top:aR,left:aQ}},setOffset:function(aS,a1,aV){var aW=a.css(aS,"position");if(aW==="static"){aS.style.position="relative"}var aU=a(aS),aQ=aU.offset(),aP=a.css(aS,"top"),aZ=a.css(aS,"left"),a0=(aW==="absolute"&&a.inArray("auto",[aP,aZ])>-1),aY={},aX={},aR,aT;if(a0){aX=aU.position()}aR=a0?aX.top:parseInt(aP,10)||0;aT=a0?aX.left:parseInt(aZ,10)||0;if(a.isFunction(a1)){a1=a1.call(aS,aV,aQ)}if(a1.top!=null){aY.top=(a1.top-aQ.top)+aR}if(a1.left!=null){aY.left=(a1.left-aQ.left)+aT}if("using" in a1){a1.using.call(aS,aY)}else{aU.css(aY)}}};a.fn.extend({position:function(){if(!this[0]){return null}var aR=this[0],aQ=this.offsetParent(),aS=this.offset(),aP=N.test(aQ[0].nodeName)?{top:0,left:0}:aQ.offset();aS.top-=parseFloat(a.css(aR,"marginTop"))||0;aS.left-=parseFloat(a.css(aR,"marginLeft"))||0;aP.top+=parseFloat(a.css(aQ[0],"borderTopWidth"))||0;aP.left+=parseFloat(a.css(aQ[0],"borderLeftWidth"))||0;return{top:aS.top-aP.top,left:aS.left-aP.left}},offsetParent:function(){return this.map(function(){var aP=this.offsetParent||Y.body;while(aP&&(!N.test(aP.nodeName)&&a.css(aP,"position")==="static")){aP=aP.offsetParent}return aP})}});a.each(["Left","Top"],function(aQ,aP){var aR="scroll"+aP;a.fn[aR]=function(aU){var aS=this[0],aT;if(!aS){return null}if(aU!==z){return this.each(function(){aT=ag(this);if(aT){aT.scrollTo(!aQ?aU:a(aT).scrollLeft(),aQ?aU:a(aT).scrollTop())}else{this[aR]=aU}})}else{aT=ag(aS);return aT?("pageXOffset" in aT)?aT[aQ?"pageYOffset":"pageXOffset"]:a.support.boxModel&&aT.document.documentElement[aR]||aT.document.body[aR]:aS[aR]}}});function ag(aP){return a.isWindow(aP)?aP:aP.nodeType===9?aP.defaultView||aP.parentWindow:false}a.each(["Height","Width"],function(aQ,aP){var aR=aP.toLowerCase();a.fn["inner"+aP]=function(){return this[0]?parseFloat(a.css(this[0],aR,"padding")):null};a.fn["outer"+aP]=function(aS){return this[0]?parseFloat(a.css(this[0],aR,aS?"margin":"border")):null};a.fn[aR]=function(aT){var aU=this[0];if(!aU){return aT==null?null:this}if(a.isFunction(aT)){return this.each(function(aX){var aW=a(this);aW[aR](aT.call(this,aX,aW[aR]()))})}if(a.isWindow(aU)){return aU.document.compatMode==="CSS1Compat"&&aU.document.documentElement["client"+aP]||aU.document.body["client"+aP]}else{if(aU.nodeType===9){return Math.max(aU.documentElement["client"+aP],aU.body["scroll"+aP],aU.documentElement["scroll"+aP],aU.body["offset"+aP],aU.documentElement["offset"+aP])}else{if(aT===z){var aV=a.css(aU,aR),aS=parseFloat(aV);return a.isNaN(aS)?aV:aS}else{return this.css(aR,typeof aT==="string"?aT:aT+"px")}}}}})})(window);
;
(function(){var a=jQuery.fn.ready;jQuery.fn.asyncReady=function(){var b=this,c=arguments;if(jQuery.isReady){setTimeout(function(){a.apply(b,c)},1)}else{return a.apply(b,c)}}})();
;
(function(a){a.extend(a.fn,{livequery:function(f,e,d){var c=this,g;if(a.isFunction(f)){d=e,e=f,f=undefined}a.each(a.livequery.queries,function(h,j){if(c.selector==j.selector&&c.context==j.context&&f==j.type&&(!e||e.$lqguid==j.fn.$lqguid)&&(!d||d.$lqguid==j.fn2.$lqguid)){return(g=j)&&false}});g=g||new a.livequery(this.selector,this.context,f,e,d);g.stopped=false;a.livequery.run(g.id);return this},expire:function(f,e,d){var c=this;if(a.isFunction(f)){d=e,e=f,f=undefined}a.each(a.livequery.queries,function(g,h){if(c.selector==h.selector&&c.context==h.context&&(!f||f==h.type)&&(!e||e.$lqguid==h.fn.$lqguid)&&(!d||d.$lqguid==h.fn2.$lqguid)&&!this.stopped){a.livequery.stop(h.id)}});return this}});a.livequery=function(c,e,g,f,d){this.selector=c;this.context=e||document;this.type=g;this.fn=f;this.fn2=d;this.elements=[];this.stopped=false;this.id=a.livequery.queries.push(this)-1;f.$lqguid=f.$lqguid||a.livequery.guid++;if(d){d.$lqguid=d.$lqguid||a.livequery.guid++}return this};a.livequery.prototype={stop:function(){var c=this;if(this.type){this.elements.unbind(this.type,this.fn)}else{if(this.fn2){this.elements.each(function(d,e){c.fn2.apply(e)})}}this.elements=[];this.stopped=true},run:function(){if(this.stopped){return}var e=this;var f=this.elements,d=a(this.selector,this.context),c=d.not(f);this.elements=d;if(this.type){c.bind(this.type,this.fn);if(f.length>0){a.each(f,function(g,h){if(a.inArray(h,d)<0){a.event.remove(h,e.type,e.fn)}})}}else{c.each(function(){e.fn.apply(this)});if(this.fn2&&f.length>0){a.each(f,function(g,h){if(a.inArray(h,d)<0){e.fn2.apply(h)}})}}}};a.extend(a.livequery,{guid:0,queries:[],queue:[],running:false,timeout:null,checkQueue:function(){if(a.livequery.running&&a.livequery.queue.length){var c=a.livequery.queue.length;while(c--){a.livequery.queries[a.livequery.queue.shift()].run()}}},pause:function(){a.livequery.running=false},play:function(){a.livequery.running=true;a.livequery.run()},registerPlugin:function(){a.each(arguments,function(d,e){if(!a.fn[e]){return}var c=a.fn[e];a.fn[e]=function(){var f=c.apply(this,arguments);a.livequery.run();return f}})},run:function(c){if(c!=undefined){if(a.inArray(c,a.livequery.queue)<0){a.livequery.queue.push(c)}}else{a.each(a.livequery.queries,function(d){if(a.inArray(d,a.livequery.queue)<0){a.livequery.queue.push(d)}})}if(a.livequery.timeout){clearTimeout(a.livequery.timeout)}a.livequery.timeout=setTimeout(a.livequery.checkQueue,20)},stop:function(c){if(c!=undefined){a.livequery.queries[c].stop()}else{a.each(a.livequery.queries,function(d){a.livequery.queries[d].stop()})}}});a.livequery.registerPlugin("append","prepend","after","before","wrap","attr","removeAttr","addClass","removeClass","toggleClass","empty","remove","html");a(function(){a.livequery.play()});var b=a.prototype.init;a.prototype.init=function(d,f){var e=b.apply(this,arguments);if(d&&d.selector){e.context=d.context,e.selector=d.selector}if(typeof d=="string"){e.context=f||document,e.selector=d}return e};a.prototype.init.prototype=a.prototype})(jQuery);
;
(function(b){b.fn.ajaxSubmit=function(s){if(!this.length){a("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof s=="function"){s={success:s}}var e=b.trim(this.attr("action"));if(e){e=(e.match(/^([^#]+)/)||[])[1]}e=e||window.location.href||"";s=b.extend({url:e,type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},s||{});var u={};this.trigger("form-pre-serialize",[this,s,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(s.beforeSerialize&&s.beforeSerialize(this,s)===false){a("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var m=this.formToArray(s.semantic);if(s.data){s.extraData=s.data;for(var f in s.data){if(s.data[f] instanceof Array){for(var g in s.data[f]){m.push({name:f,value:s.data[f][g]})}}else{m.push({name:f,value:s.data[f]})}}}if(s.beforeSubmit&&s.beforeSubmit(m,this,s)===false){a("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[m,this,s,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var d=b.param(m);if(s.type.toUpperCase()=="GET"){s.url+=(s.url.indexOf("?")>=0?"&":"?")+d;s.data=null}else{s.data=d}var t=this,l=[];if(s.resetForm){l.push(function(){t.resetForm()})}if(s.clearForm){l.push(function(){t.clearForm()})}if(!s.dataType&&s.target){var p=s.success||function(){};l.push(function(j){b(s.target).html(j).each(p,arguments)})}else{if(s.success){l.push(s.success)}}s.success=function(q,k){for(var n=0,j=l.length;n<j;n++){l[n].apply(s,[q,k,t])}};var c=b("input:file",this).fieldValue();var r=false;for(var i=0;i<c.length;i++){if(c[i]){r=true}}var h=false;if((c.length&&s.iframe!==false)||s.iframe||r||h){if(s.closeKeepAlive){b.get(s.closeKeepAlive,o)}else{o()}}else{b.ajax(s)}this.trigger("form-submit-notify",[this,s]);return this;function o(){var w=t[0];if(b(":input[name=submit]",w).length){alert('Error: Form elements must not be named "submit".');return}var q=b.extend({},b.ajaxSettings,s);var G=b.extend(true,{},b.extend(true,{},b.ajaxSettings),q);var v="jqFormIO"+(new Date().getTime());var C=b('<iframe id="'+v+'" name="'+v+'" src="'+q.iframeSrc+'" />');var E=C[0];C.css({position:"absolute",top:"-1000px",left:"-1000px"});var F={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;C.attr("src",q.iframeSrc)}};var D=q.global;if(D&&!b.active++){b.event.trigger("ajaxStart")}if(D){b.event.trigger("ajaxSend",[F,q])}if(G.beforeSend&&G.beforeSend(F,G)===false){G.global&&b.active--;return}if(F.aborted){return}var k=0;var z=0;var j=w.clk;if(j){var x=j.name;if(x&&!j.disabled){s.extraData=s.extraData||{};s.extraData[x]=j.value;if(j.type=="image"){s.extraData[name+".x"]=w.clk_x;s.extraData[name+".y"]=w.clk_y}}}setTimeout(function(){var J=t.attr("target"),H=t.attr("action");w.setAttribute("target",v);if(w.getAttribute("method")!="POST"){w.setAttribute("method","POST")}if(w.getAttribute("action")!=q.url){w.setAttribute("action",q.url)}if(!s.skipEncodingOverride){t.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(q.timeout){setTimeout(function(){z=true;A()},q.timeout)}var I=[];try{if(s.extraData){for(var K in s.extraData){I.push(b('<input type="hidden" name="'+K+'" value="'+s.extraData[K]+'" />').appendTo(w)[0])}}C.appendTo("body");E.attachEvent?E.attachEvent("onload",A):E.addEventListener("load",A,false);w.submit()}finally{w.setAttribute("action",H);J?w.setAttribute("target",J):t.removeAttr("target");b(I).remove()}},10);var y=50;function A(){if(k++){return}E.detachEvent?E.detachEvent("onload",A):E.removeEventListener("load",A,false);var H=true;try{if(z){throw"timeout"}var I,L;L=E.contentWindow?E.contentWindow.document:E.contentDocument?E.contentDocument:E.document;var M=q.dataType=="xml"||L.XMLDocument||b.isXMLDoc(L);a("isXml="+M);if(!M&&(L.body==null||L.body.innerHTML=="")){if(--y){k=0;setTimeout(A,100);return}a("Could not access iframe DOM after 50 tries.");return}F.responseText=L.body?L.body.innerHTML:null;F.responseXML=L.XMLDocument?L.XMLDocument:L;F.getResponseHeader=function(O){var N={"content-type":q.dataType};return N[O]};if(q.dataType=="json"||q.dataType=="script"){var n=L.getElementsByTagName("textarea")[0];if(n){F.responseText=n.value}else{var K=L.getElementsByTagName("pre")[0];if(K){F.responseText=K.innerHTML}}}else{if(q.dataType=="xml"&&!F.responseXML&&F.responseText!=null){F.responseXML=B(F.responseText)}}I=b.httpData(F,q.dataType)}catch(J){H=false;b.handleError(q,F,"error",J)}if(H){q.success(I,"success");if(D){b.event.trigger("ajaxSuccess",[F,q])}}if(D){b.event.trigger("ajaxComplete",[F,q])}if(D&&!--b.active){b.event.trigger("ajaxStop")}if(q.complete){q.complete(F,H?"success":"error")}setTimeout(function(){C.remove();F.responseXML=null},100)}function B(n,H){if(window.ActiveXObject){H=new ActiveXObject("Microsoft.XMLDOM");H.async="false";H.loadXML(n)}else{H=(new DOMParser()).parseFromString(n,"text/xml")}return(H&&H.documentElement&&H.documentElement.tagName!="parsererror")?H:null}}};b.fn.ajaxForm=function(c){return this.ajaxFormUnbind().bind("submit.form-plugin",function(){b(this).ajaxSubmit(c);return false}).bind("click.form-plugin",function(i){var h=i.target;var f=b(h);if(!(f.is(":submit,input:image"))){var d=f.closest(":submit");if(d.length==0){return}h=d[0]}var g=this;g.clk=h;if(h.type=="image"){if(i.offsetX!=undefined){g.clk_x=i.offsetX;g.clk_y=i.offsetY}else{if(typeof b.fn.offset=="function"){var j=f.offset();g.clk_x=i.pageX-j.left;g.clk_y=i.pageY-j.top}else{g.clk_x=i.pageX-h.offsetLeft;g.clk_y=i.pageY-h.offsetTop}}}setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(q){var p=[];if(this.length==0){return p}var d=this[0];var h=q?d.getElementsByTagName("*"):d.elements;if(!h){return p}for(var k=0,m=h.length;k<m;k++){var e=h[k];var f=e.name;if(!f){continue}if(q&&d.clk&&e.type=="image"){if(!e.disabled&&d.clk==e){p.push({name:f,value:b(e).val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}continue}var r=b.fieldValue(e,true);if(r&&r.constructor==Array){for(var g=0,c=r.length;g<c;g++){p.push({name:f,value:r[g]})}}else{if(r!==null&&typeof r!="undefined"){p.push({name:f,value:r})}}}if(!q&&d.clk){var l=b(d.clk),o=l[0],f=o.name;if(f&&!o.disabled&&o.type=="image"){p.push({name:f,value:l.val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}}return p};b.fn.formSerialize=function(c){return b.param(this.formToArray(c))};b.fn.fieldSerialize=function(d){var c=[];this.each(function(){var h=this.name;if(!h){return}var f=b.fieldValue(this,d);if(f&&f.constructor==Array){for(var g=0,e=f.length;g<e;g++){c.push({name:h,value:f[g]})}}else{if(f!==null&&typeof f!="undefined"){c.push({name:this.name,value:f})}}});return b.param(c)};b.fn.fieldValue=function(h){for(var g=[],e=0,c=this.length;e<c;e++){var f=this[e];var d=b.fieldValue(f,h);if(d===null||typeof d=="undefined"||(d.constructor==Array&&!d.length)){continue}d.constructor==Array?b.merge(g,d):g.push(d)}return g};b.fieldValue=function(c,j){var e=c.name,p=c.type,q=c.tagName.toLowerCase();if(typeof j=="undefined"){j=true}if(j&&(!e||c.disabled||p=="reset"||p=="button"||(p=="checkbox"||p=="radio")&&!c.checked||(p=="submit"||p=="image")&&c.form&&c.form.clk!=c||q=="select"&&c.selectedIndex==-1)){return null}if(q=="select"){var k=c.selectedIndex;if(k<0){return null}var m=[],d=c.options;var g=(p=="select-one");var l=(g?k+1:d.length);for(var f=(g?k:0);f<l;f++){var h=d[f];if(h.selected){var o=h.value;if(!o){o=(h.attributes&&h.attributes.value&&!(h.attributes.value.specified))?h.text:h.value}if(g){return o}m.push(o)}}return m}return c.value};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var d=this.type,c=this.tagName.toLowerCase();if(d=="text"||d=="password"||c=="textarea"){this.value=""}else{if(d=="checkbox"||d=="radio"){this.checked=false}else{if(c=="select"){this.selectedIndex=-1}}}})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};b.fn.enable=function(c){if(c==undefined){c=true}return this.each(function(){this.disabled=!c})};b.fn.selected=function(c){if(c==undefined){c=true}return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio"){this.checked=c}else{if(this.tagName.toLowerCase()=="option"){var e=b(this).parent("select");if(c&&e[0]&&e[0].type=="select-one"){e.find("option").selected(false)}this.selected=c}}})};function a(){if(b.fn.ajaxSubmit.debug&&window.console&&window.console.log){window.console.log("[jquery.form] "+Array.prototype.join.call(arguments,""))}}})(jQuery);
;
(function(a){a.extend(a.fn,{delayedObserver:function(d,c,b){this.each(function(){var f=a(this);var e=e||{};f.data("oldval",f.val()).data("delay",c||0.5).data("condition",e.condition||function(){return(a(this).data("oldval")==a(this).val())}).data("callback",d)[(e.event||"keyup")](function(){if(f.data("condition").apply(f)){return}else{if(f.data("timer")){clearTimeout(f.data("timer"))}f.data("timer",setTimeout(function(){f.data("callback").apply(f)},f.data("delay")*1000));f.data("oldval",f.val())}})})}})})(jQuery);
;
jQuery.extend({historyCurrentHash:undefined,historyCallback:undefined,historyInit:function(d){jQuery.historyCallback=d;var c=location.hash;jQuery.historyCurrentHash=c;if(jQuery.browser.msie){if(jQuery.historyCurrentHash==""){jQuery.historyCurrentHash="#"}jQuery("body").prepend('<iframe id="jQuery_history" style="display: none;"></iframe>');var a=jQuery("#jQuery_history")[0];var b=a.contentWindow.document;b.open();b.close();b.location.hash=c}else{if(jQuery.browser.safari){jQuery.historyBackStack=[];jQuery.historyBackStack.length=history.length;jQuery.historyForwardStack=[];jQuery.isFirst=true}}jQuery.historyCallback(c.replace(/^#/,""));setInterval(jQuery.historyCheck,100)},historyAddHistory:function(a){jQuery.historyBackStack.push(a);jQuery.historyForwardStack.length=0;this.isFirst=true},historyCheck:function(){if(jQuery.browser.msie){var a=jQuery("#jQuery_history")[0];var d=a.contentDocument||a.contentWindow.document;var f=d.location.hash;if(f!=jQuery.historyCurrentHash){location.hash=f;jQuery.historyCurrentHash=f;jQuery.historyCallback(f.replace(/^#/,""))}}else{if(jQuery.browser.safari){if(!jQuery.dontCheck){var b=history.length-jQuery.historyBackStack.length;if(b){jQuery.isFirst=false;if(b<0){for(var c=0;c<Math.abs(b);c++){jQuery.historyForwardStack.unshift(jQuery.historyBackStack.pop())}}else{for(var c=0;c<b;c++){jQuery.historyBackStack.push(jQuery.historyForwardStack.shift())}}var e=jQuery.historyBackStack[jQuery.historyBackStack.length-1];if(e!=undefined){jQuery.historyCurrentHash=location.hash;jQuery.historyCallback(e)}}else{if(jQuery.historyBackStack[jQuery.historyBackStack.length-1]==undefined&&!jQuery.isFirst){if(document.URL.indexOf("#")>=0){jQuery.historyCallback(document.URL.split("#")[1])}else{var f=location.hash;jQuery.historyCallback("")}jQuery.isFirst=true}}}}else{var f=location.hash;if(f!=jQuery.historyCurrentHash){jQuery.historyCurrentHash=f;jQuery.historyCallback(f.replace(/^#/,""))}}}},historyLoad:function(d){var e;if(jQuery.browser.safari){e=d}else{e="#"+d;location.hash=e}jQuery.historyCurrentHash=e;if(jQuery.browser.msie){var a=jQuery("#jQuery_history")[0];var c=a.contentWindow.document;c.open();c.close();c.location.hash=e;jQuery.historyCallback(d)}else{if(jQuery.browser.safari){jQuery.dontCheck=true;this.historyAddHistory(d);var b=function(){jQuery.dontCheck=false};window.setTimeout(b,200);jQuery.historyCallback(d);location.hash=e}else{jQuery.historyCallback(d)}}}});
;
(function(b){var a=null;b.fn.autogrow=function(c){return this.each(function(){new b.autogrow(this,c)})};b.autogrow=function(c,d){this.options=d||{};this.dummy=null;this.interval=null;this.line_height=this.options.lineHeight||parseInt(b(c).css("line-height"));this.min_height=this.options.minHeight||parseInt(b(c).css("min-height"));this.max_height=this.options.maxHeight||parseInt(b(c).css("max-height"));this.textarea=b(c);if(this.line_height==NaN){this.line_height=0}this.init()};b.autogrow.fn=b.autogrow.prototype={autogrow:"1.2.2"};b.autogrow.fn.extend=b.autogrow.extend=b.extend;b.autogrow.fn.extend({init:function(){var c=this;this.textarea.css({overflow:"hidden",display:"block"});this.textarea.bind("focus",function(){c.startExpand()}).bind("blur",function(){c.stopExpand()});this.checkExpand()},startExpand:function(){var c=this;this.interval=window.setInterval(function(){c.checkExpand()},400)},stopExpand:function(){clearInterval(this.interval)},checkExpand:function(){if(this.dummy==null){this.dummy=b("<div></div>");this.dummy.css({"font-size":this.textarea.css("font-size"),"font-family":this.textarea.css("font-family"),width:this.textarea.css("width"),padding:this.textarea.css("padding"),"line-height":this.line_height+"px","overflow-x":"hidden",position:"absolute",top:0,left:-9999}).appendTo("body")}var c=this.textarea.val().replace(/(<|>)/g,"");if(b.browser.msie){c=c.replace(/\n/g,"<BR>new")}else{c=c.replace(/\n/g,"<br>new")}if(this.dummy.html()!=c){this.dummy.html(c);if(this.max_height>0&&(this.dummy.height()+this.line_height>this.max_height)){this.textarea.css("overflow-y","auto")}else{this.textarea.css("overflow-y","hidden");if(this.textarea.height()<this.dummy.height()+this.line_height||(this.dummy.height()<this.textarea.height())){this.textarea.animate({height:(this.dummy.height()+this.line_height)+"px"},100)}}}}})})(jQuery);
;
(function(A){A.fn.lightbox_me=function(B){return this.each(function(){var E=A.extend({},A.fn.lightbox_me.defaults,B),K=A(),J=A(this),L=A('<iframe id="foo" style="z-index: '+(E.zIndex+1)+';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),G=(A.browser.msie&&A.browser.version<7);if(E.showOverlay){K=A('<div class="'+E.classPrefix+'_overlay"/>')}if(G){var D=/^https/i.test(window.location.href||"")?"javascript:false":"about:blank";L.attr("src",D);A("body").append(L)}A("body").append(J.hide()).append(K);J.css({left:"50%",marginLeft:(J.outerWidth()/2)*-1,zIndex:(E.zIndex+3)});H();K.css({position:"absolute",width:"100%",top:0,left:0,right:0,bottom:0,zIndex:(E.zIndex+2),display:"none"}).css(E.overlayCSS);if(E.showOverlay){K.fadeIn(E.overlaySpeed,function(){C();J[E.appearEffect](E.lightboxSpeed,function(){H();C();E.onLoad()})})}else{J[E.appearEffect](E.lightboxSpeed,function(){E.onLoad()})}A(window).resize(H).resize(C).scroll(C).keypress(F);J.find(E.closeSelector).add(K).click(function(){I();return false});J.bind("close",I);J.bind("resize",C);function I(){if(E.disableClose){return }var M=J[0].style;if(E.destroyOnClose){J.add(K).remove()}else{J.add(K).hide()}L.remove();A(window).unbind("resize",H);A(window).unbind("resize",C);if(G){M.removeExpression("top")}E.onClose()}function F(M){if(M.keyCode==27||(M.DOM_VK_ESCAPE==27&&M.which==0)){I()}}function H(){if(A(window).height()<A(document).height()){K.css({height:A(document).height()+"px"});L.css({height:A(document).height()+"px"})}else{K.css({height:"100%"});if(G){A("html,body").css("height","100%");L.css("height","100%")}}}function C(){var N=J[0].style;if((J.height()+80>=A(window).height())&&(J.css("position")!="absolute"||G)){var M=A(document).scrollTop()+40;J.css({position:"absolute",top:M+"px",marginTop:0});if(G){N.removeExpression("top")}}else{if(J.height()+80<A(window).height()){if(G){N.position="absolute";if(E.centered){N.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');N.marginTop=0}else{var O=(E.modalCSS&&E.modalCSS.top)?parseInt(E.modalCSS.top):0;N.setExpression("top","((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+O+') + "px"')}}else{if(E.centered){J.css({position:"fixed",top:"50%",marginTop:(J.outerHeight()/2)*-1})}else{J.css({position:"fixed"}).css(E.modalCSS)}}}}}})};A.fn.lightbox_me.defaults={appearEffect:"fadeIn",overlaySpeed:300,lightboxSpeed:"fast",disableClose:false,closeSelector:".close",closeClick:true,closeEsc:true,destroyOnClose:false,showOverlay:true,onLoad:function(){},onClose:function(){},classPrefix:"lb",zIndex:999,centered:false,modalCSS:{top:"40px"},overlayCSS:{background:"black",opacity:0.6}}})(jQuery)
;
(function(){var b;b=jQuery.fn.flash=function(g,f,d,i){var h=d||b.replace;f=b.copy(b.pluginOptions,f);if(!b.hasFlash(f.version)){if(f.expressInstall&&b.hasFlash(6,0,65)){var e={flashvars:{MMredirectURL:location,MMplayerType:"PlugIn",MMdoctitle:jQuery("title").text()}}}else{if(f.update){h=i||b.update}else{return this}}}g=b.copy(b.htmlOptions,e,g);return this.each(function(){h.call(this,b.copy(g))})};b.copy=function(){var f={},e={};for(var g=0;g<arguments.length;g++){var d=arguments[g];if(d==undefined){continue}jQuery.extend(f,d);if(d.flashvars==undefined){continue}jQuery.extend(e,d.flashvars)}f.flashvars=e;return f};b.hasFlash=function(){if(/hasFlash\=true/.test(location)){return true}if(/hasFlash\=false/.test(location)){return false}var e=b.hasFlash.playerVersion().match(/\d+/g);var f=String([arguments[0],arguments[1],arguments[2]]).match(/\d+/g)||String(b.pluginOptions.version).match(/\d+/g);for(var d=0;d<3;d++){e[d]=parseInt(e[d]||0);f[d]=parseInt(f[d]||0);if(e[d]<f[d]){return false}if(e[d]>f[d]){return true}}return true};b.hasFlash.playerVersion=function(){try{try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{d.AllowScriptAccess="always"}catch(f){return"6,0,0"}}catch(f){}return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(f){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}}catch(f){}}return"0,0,0"};b.htmlOptions={height:240,flashvars:{},pluginspage:"http://www.adobe.com/go/getflashplayer",src:"#",type:"application/x-shockwave-flash",width:320};b.pluginOptions={expressInstall:false,update:true,version:"6.0.65"};b.replace=function(d){this.innerHTML='<div class="alt">'+this.innerHTML+"</div>";jQuery(this).addClass("flash-replaced").prepend(b.transform(d))};b.update=function(e){var d=String(location).split("?");d.splice(1,0,"?hasFlash=true&");d=d.join("");var f='<p>This content requires the Flash Player. <a href="http://www.adobe.com/go/getflashplayer">Download Flash Player</a>. Already have Flash Player? <a href="'+d+'">Click here.</a></p>';this.innerHTML='<span class="alt">'+this.innerHTML+"</span>";jQuery(this).addClass("flash-update").prepend(f)};function a(){var e="";for(var d in this){if(typeof this[d]!="function"){e+=d+'="'+this[d]+'" '}}return e}function c(){var e="";for(var d in this){if(typeof this[d]!="function"){e+=d+"="+encodeURIComponent(this[d])+"&"}}return e.replace(/&$/,"")}b.transform=function(d){d.toString=a;if(d.flashvars){d.flashvars.toString=c}return"<embed "+String(d)+"/>"};if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}})();
;
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
;
(function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(type,name){this.defaults.type=type;this.defaults.name=name},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);if(!settings.single.length){settings.single="metadata"}var data=$.data(elem,settings.single);if(data){return data}data="{}";if(settings.type=="class"){var m=settings.cre.exec(elem.className);if(m){data=m[1]}}else{if(settings.type=="elem"){if(!elem.getElementsByTagName){return}var e=elem.getElementsByTagName(settings.name);if(e.length){data=$.trim(e[0].innerHTML)}}else{if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);if(attr){data=attr}}}}if(data.indexOf("{")<0){data="{"+data+"}"}data=eval("("+data+")");$.data(elem,settings.single,data);return data}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts)}})(jQuery);
;
(function(c){c.fn.media=function(m,l,n){return this.each(function(){if(typeof m=="function"){n=l;l=m;m={}}var w=g(this,m);if(typeof l=="function"){l(this,w)}var v=j();var p=v.exec(w.src)||[""];w.type?p[0]=w.type:p.shift();for(var u=0;u<p.length;u++){fn=p[u].toLowerCase();if(e(fn[0])){fn="fn"+fn}if(!c.fn.media[fn]){continue}var t=c.fn.media[fn+"_player"];if(!w.params){w.params={}}if(t){var s=t.autoplayAttr=="autostart";w.params[t.autoplayAttr||"autoplay"]=s?(w.autoplay?1:0):w.autoplay?true:false}var q=c.fn.media[fn](this,w);q.css("backgroundColor",w.bgColor).width(w.width);if(typeof n=="function"){n(this,q[0],w,t.name)}break}})};c.fn.media.mapFormat=function(m,l){if(!m||!l||!c.fn.media.defaults.players[l]){return}m=m.toLowerCase();if(e(m[0])){m="fn"+m}c.fn.media[m]=c.fn.media[l];c.fn.media[m+"_player"]=c.fn.media.defaults.players[l]};c.fn.media.defaults={width:400,height:400,autoplay:0,bgColor:"#ffffff",params:{wmode:"transparent"},attrs:{},flvKeyName:"file",flashvars:{},flashVersion:"7",expressInstaller:null,flvPlayer:"mediaplayer.swf",mp3Player:"mediaplayer.swf",silverlight:{inplaceInstallPrompt:"true",isWindowless:"true",framerate:"24",version:"0.9",onError:null,onLoad:null,initParams:null,userContext:null}};c.fn.media.defaults.players={flash:{name:"flash",types:"flv,mp3,swf",oAttrs:{classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",type:"application/x-oleobject",codebase:"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+c.fn.media.defaults.flashVersion},eAttrs:{type:"application/x-shockwave-flash",pluginspage:"http://www.adobe.com/go/getflashplayer"}},quicktime:{name:"quicktime",types:"aif,aiff,aac,au,bmp,gsm,mov,mid,midi,mpg,mpeg,mp4,m4a,psd,qt,qtif,qif,qti,snd,tif,tiff,wav,3g2,3gp",oAttrs:{classid:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",codebase:"http://www.apple.com/qtactivex/qtplugin.cab"},eAttrs:{pluginspage:"http://www.apple.com/quicktime/download/"}},realplayer:{name:"real",types:"ra,ram,rm,rpm,rv,smi,smil",autoplayAttr:"autostart",oAttrs:{classid:"clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA"},eAttrs:{type:"audio/x-pn-realaudio-plugin",pluginspage:"http://www.real.com/player/"}},winmedia:{name:"winmedia",types:"asx,asf,avi,wma,wmv",autoplayAttr:"autostart",oUrl:"url",oAttrs:{classid:"clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6",type:"application/x-oleobject"},eAttrs:{type:c.browser.mozilla&&k()?"application/x-ms-wmp":"application/x-mplayer2",pluginspage:"http://www.microsoft.com/Windows/MediaPlayer/"}},iframe:{name:"iframe",types:"html,pdf"},silverlight:{name:"silverlight",types:"xaml"}};function k(){var l=navigator.plugins;for(i=0;i<l.length;i++){var m=l[i];if(m.filename=="np-mswmp.dll"){return true}}return false}var a=1;for(var h in c.fn.media.defaults.players){var d=c.fn.media.defaults.players[h].types;c.each(d.split(","),function(l,m){if(e(m[0])){m="fn"+m}c.fn.media[m]=c.fn.media[h]=b(h);c.fn.media[m+"_player"]=c.fn.media.defaults.players[h]})}function j(){var m="";for(var l in c.fn.media.defaults.players){if(m.length){m+=","}m+=c.fn.media.defaults.players[l].types}return new RegExp("\\.("+m.replace(/,/g,"|")+")$\\b")}function b(l){return function(n,m){return f(n,m,l)}}function e(l){return"0123456789".indexOf(l)>-1}function g(n,y){y=y||{};var x=c(n);var v=n.className||"";var u=c.metadata?x.metadata():c.meta?x.data():{};u=u||{};var t=u.width||parseInt(((v.match(/w:(\d+)/)||[])[1]||0));var o=u.height||parseInt(((v.match(/h:(\d+)/)||[])[1]||0));if(t){u.width=t}if(o){u.height=o}if(v){u.cls=v}var s=c.fn.media.defaults;var r=y;var q=u;var m={params:{bgColor:y.bgColor||c.fn.media.defaults.bgColor}};var l=c.extend({},s,r,q);c.each(["attrs","params","flashvars","silverlight"],function(p,w){l[w]=c.extend({},m[w]||{},s[w]||{},r[w]||{},q[w]||{})});if(typeof l.caption=="undefined"){l.caption=x.text()}l.src=l.src||x.attr("href")||x.attr("src")||"unknown";return l}c.fn.media.swf=function(q,l){if(!window.SWFObject&&!window.swfobject){if(l.flashvars){var t=[];for(var r in l.flashvars){t.push(r+"="+l.flashvars[r])}if(!l.params){l.params={}}l.params.flashvars=t.join("&")}return f(q,l,"flash")}var n=q.id?(' id="'+q.id+'"'):"";var u=l.cls?(' class="'+l.cls+'"'):"";var s=c("<div"+n+u+">");if(window.swfobject){c(q).after(s).appendTo(s);if(!q.id){q.id="movie_player_"+a++}swfobject.embedSWF(l.src,q.id,l.width,l.height,l.flashVersion,l.expressInstaller,l.flashvars,l.params,l.attrs)}else{c(q).after(s).remove();var o=new SWFObject(l.src,"movie_player_"+a++,l.width,l.height,l.flashVersion,l.bgColor);if(l.expressInstaller){o.useExpressInstall(l.expressInstaller)}for(var m in l.params){if(m!="bgColor"){o.addParam(m,l.params[m])}}for(var r in l.flashvars){o.addVariable(r,l.flashvars[r])}o.write(s[0])}if(l.caption){c("<div>").appendTo(s).html(l.caption)}return s};c.fn.media.flv=c.fn.media.mp3=function(o,p){var q=p.src;var n=/\.mp3\b/i.test(q)?c.fn.media.defaults.mp3Player:c.fn.media.defaults.flvPlayer;var m=p.flvKeyName;q=encodeURIComponent(q);p.src=n;p.src=p.src+"?"+m+"="+(q);var l={};l[m]=q;p.flashvars=c.extend({},l,p.flashvars);return c.fn.media.swf(o,p)};c.fn.media.xaml=function(r,s){if(!window.Sys||!window.Sys.Silverlight){if(c.fn.media.xaml.warning){return}c.fn.media.xaml.warning=1;alert("You must include the Silverlight.js script.");return}var q={width:s.width,height:s.height,background:s.bgColor,inplaceInstallPrompt:s.silverlight.inplaceInstallPrompt,isWindowless:s.silverlight.isWindowless,framerate:s.silverlight.framerate,version:s.silverlight.version};var o={onError:s.silverlight.onError,onLoad:s.silverlight.onLoad};var p=r.id?(' id="'+r.id+'"'):"";var n=s.id||"AG"+a++;var m=s.cls?(' class="'+s.cls+'"'):"";var l=c("<div"+p+m+">");c(r).after(l).remove();Sys.Silverlight.createObjectEx({source:s.src,initParams:s.silverlight.initParams,userContext:s.silverlight.userContext,id:n,parentElement:l[0],properties:q,events:o});if(s.caption){c("<div>").appendTo(l).html(s.caption)}return l};function f(r,l,w){var A=c(r);var q=c.fn.media.defaults.players[w];if(w=="iframe"){var q=c('<iframe width="'+l.width+'" height="'+l.height+'" >');q.attr("src",l.src);q.css("backgroundColor",q.bgColor)}else{if(c.browser.msie){var u=['<object width="'+l.width+'" height="'+l.height+'" '];for(var x in l.attrs){u.push(x+'="'+l.attrs[x]+'" ')}for(var x in q.oAttrs||{}){var y=q.oAttrs[x];if(x=="codebase"&&window.location.protocol=="https"){y=y.replace("http","https")}u.push(x+'="'+y+'" ')}u.push("></object>");var n=['<param name="'+(q.oUrl||"src")+'" value="'+l.src+'">'];for(var x in l.params){n.push('<param name="'+x+'" value="'+l.params[x]+'">')}var q=document.createElement(u.join(""));for(var s=0;s<n.length;s++){q.appendChild(document.createElement(n[s]))}}else{var u=['<embed width="'+l.width+'" height="'+l.height+'" style="display:block"'];if(l.src){u.push(' src="'+l.src+'" ')}for(var x in l.attrs){u.push(x+'="'+l.attrs[x]+'" ')}for(var x in q.eAttrs||{}){u.push(x+'="'+q.eAttrs[x]+'" ')}for(var x in l.params){if(x!="wmode"){u.push(x+'="'+l.params[x]+'" ')}}u.push("></embed>")}}var m=r.id?(' id="'+r.id+'"'):"";var z=l.cls?(' class="'+l.cls+'"'):"";var t=c("<div"+m+z+">");A.after(t).remove();(c.browser.msie||w=="iframe")?t.append(q):t.html(u.join(""));if(l.caption){c("<div>").appendTo(t).html(l.caption)}return t}})(jQuery);
;
(function(a){a.bind=function(c,d){var b=Array.prototype.slice.call(arguments,2);if(b.length){return function(){var e=[this].concat(b,a.makeArray(arguments));return d.apply(c,e)}}else{return function(){var e=a.makeArray(arguments);return d.apply(c,e)}}}})(jQuery);
;
(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.$Class=function(){};$Class.extend=function(g){var f=this.prototype;a=true;var e=new this();a=false;for(var d in g){e[d]=typeof g[d]=="function"&&typeof f[d]=="function"&&b.test(g[d])?(function(h,i){return function(){var k=this._super;this._super=f[h];var j=i.apply(this,arguments);this._super=k;return j}})(d,g[d]):g[d]}function c(){if(!a&&this.init){this.init.apply(this,arguments)}}c.prototype=e;c.constructor=c;c.extend=arguments.callee;return c}})();
;
(function(a){a.extend(a.expr[":"],{icontains:function(c,d,b){return(c.textContent||c.innerText||jQuery(c).text()||"").toLowerCase().indexOf(b[3].toLowerCase())>=0}});a.iterators={getText:function(){return a(this).text()},parseInt:function(b){return parseInt(b,10)}};a.extend({range:function(){if(!arguments.length){return[]}var f,b,g;if(arguments.length==1){f=0;b=arguments[0]-1;g=1}else{f=arguments[0];b=arguments[1]-1;g=arguments[2]||1}if(g<0&&f>=b){g*=-1;var e=f;f=b;b=e;f+=((b-f)%g)}var c=[];for(var d=f;d<=b;d+=g){c.push(d)}return c},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38},keyIs:function(b,c){return parseInt(a.keyCode[b.toUpperCase()],10)==parseInt((typeof(c)=="number")?c:c.keyCode,10)},keys:function(b){var c=[];for(k in b){c.push(k)}return c},redirect:function(b){window.location.href=b;return b},stop:function(d,c,b){if(c){d.preventDefault()}if(b){d.stopPropagation()}return c&&false||true},basename:function(c){var b=c.split("/");return b[b.length]===""&&s||b.slice(0,b.length).join("/")},filename:function(b){return b.split("/").pop()},filesizeformat:function(d,e){var c=parseInt(d,10);var f=e||["byte","bytes","KB","MB","GB"];if(isNaN(c)||c===0){return"0 "+f[0]}if(c==1){return"1 "+f[0]}if(c<1024){return c.toFixed(2)+" "+f[1]}if(c<1048576){return(c/1024).toFixed(2)+" "+f[2]}if(c<1073741824){return(c/1048576).toFixed(2)+" "+f[3]}else{return(c/1073741824).toFixed(2)+" "+f[4]}},fileExtension:function(b){var c=b.split(".");return c[c.length-1]||false},isString:function(b){return typeof(b)=="string"&&true||false},isRegExp:function(b){return b&&b.constructor.toString().indexOf("RegExp()")!=-1||false},isArray:function(b){if(!b){return false}return b.constructor&&Object.prototype.toString.apply(b.constructor.prototype)==="[object Array]"},isObject:function(b){return(typeof(b)=="object")},toCurrency:function(b){b=parseFloat(b,10).toFixed(2);return(b=="NaN")?"0.00":b},pxToEm:function(c,d){d=jQuery.extend({scope:"body",reverse:false},d);var g=(c==="")?0:parseFloat(c);var f;var e=function(){var i=document.documentElement;return self.innerWidth||(i&&i.clientWidth)||document.body.clientWidth};if(d.scope=="body"&&a.browser.msie&&(parseFloat(a("body").css("font-size"))/e()).toFixed(1)>0){var h=function(){return(parseFloat(a("body").css("font-size"))/e()).toFixed(3)*16};f=h()}else{f=parseFloat(jQuery(d.scope).css("font-size"))}var b=(d.reverse===true)?(g*f).toFixed(2)+"px":(g/f).toFixed(2)+"em";return b}});a.extend(a.fn,{selectRange:function(d,b){if(a(this).get(0).createTextRange){var c=a(this).get(0).createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",d);c.select()}else{if(a(this).get(0).setSelectionRange){a(this).bind("focus",function(f){f.preventDefault()}).get(0).setSelectionRange(d,b)}}return a(this)},equalHeights:function(b){a(this).each(function(){var c=0;a(this).children().each(function(d){if(a(this).height()>c){c=a(this).height()}});if(!b||!a.pxToEm){c=a.pxToEm(c)}if(a.browser.msie&&a.browser.version==6){a(this).children().css({height:c})}a(this).children().css({"min-height":c})});return this},delay:function(b,c){jQuery.fx.step.delay=function(){};return this.animate({delay:1},b,c)}})})(jQuery);
;
(function($){$.template=function(html,options){return new $.template.instance(html,options)};$.template.instance=function(html,options){if(options&&options.regx){options.regx=this.regx[options.regx]}this.options=$.extend({compile:false,regx:this.regx.standard},options||{});this.html=html;if(this.options.compile){this.compile()}this.isTemplate=true};$.template.regx=$.template.instance.prototype.regx={jsp:/\$\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,ext:/\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,jtemplates:/\{\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}\}/g};$.template.regx.standard=$.template.regx.jsp;$.template.helpers=$.template.instance.prototype.helpers={substr:function(value,start,length){return String(value).substr(start,length)},"if":function(value,bool){console.log(arguments);return eval(bool)?value:""}};$.extend($.template.instance.prototype,{apply:function(values){if(this.options.compile){return this.compiled(values)}else{var tpl=this;var fm=this.helpers;var fn=function(m,name,format,args){if(format){if(format.substr(0,5)=="this."){return tpl.call(format.substr(5),values[name],values)}else{if(args){var re=/^\s*['"](.*)["']\s*$/;args=args.split(",");for(var i=0,len=args.length;i<len;i++){args[i]=args[i].replace(re,"$1")}args=[values[name]].concat(args)}else{args=[values[name]]}return fm[format].apply(fm,args)}}else{return values[name]!==undefined?values[name]:""}};return this.html.replace(this.options.regx,fn)}},compile:function(){var sep=$.browser.mozilla?"+":",";var fm=this.helpers;var fn=function(m,name,format,args){if(format){args=args?","+args:"";if(format.substr(0,5)!="this."){format="fm."+format+"("}else{format='this.call("'+format.substr(5)+'", ';args=", values"}}else{args="";format="(values['"+name+"'] == undefined ? '' : "}return"'"+sep+format+"values['"+name+"']"+args+")"+sep+"'"};var body;if($.browser.mozilla){body="this.compiled = function(values){ return '"+this.html.replace(/\\/g,"\\\\").replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.options.regx,fn)+"';};"}else{body=["this.compiled = function(values){ return ['"];body.push(this.html.replace(/\\/g,"\\\\").replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.options.regx,fn));body.push("'].join('');};");body=body.join("")}eval(body);return this}})})(jQuery);
;
/*
 * jQuery Templates Plugin Library v1.1.0
 * http://www.ivorycity.com/blog/jquery-template-plugin/
 *
 * Copyright (c) 2009 Michael Collins
 * Dual licensed under the MIT and GPL licenses.
 * See MIT-LICENSE.txt and GPL-LICENSE.txt
 *
 */
jQuery.fn.extend({render:function(a,b){var e={};var c=null;var d=new RegExp("['\"](.+)['\"]","mg");b=b||[];a=jQuery.makeArray(a);this.each(function(f){var g=function(q,n,k){var m=$j("<div></div>").append($j(n).clone());jQuery.each(q,function(t,s){t=""+t;if(t.indexOf("$j(")==0||t.indexOf("@(")==0){var r=d.exec(t);if(r[1]){m.find(r[1]).render(s,{clone:t.indexOf("@")==0?true:false})}return}});var l="";var i=m.html().replace(/%7B/ig,"{").replace(/%7D/ig,"}");var p=function(s,r){replacement=l+s;if(!e[replacement]){if(r!=null&&typeof r=="object"||typeof r=="array"){var t=l;l=replacement+".";jQuery.each(r,p);l=t;return}e[replacement]=new RegExp("{"+replacement+"}","gm")}var u=e[replacement];i=i.replace(u,r)};jQuery.each(q,p);var o=$j(i);if(k.beforeUpdate){k.beforeUpdate(o)}if(k.clone){$j(n).after(o)}else{$j(n).replaceWith(o)}if(k.afterUpdate){k.afterUpdate(o)}return o};var h=$j(this);if(b.preserve_template){b.clone=true}if(b.clone){a=jQuery.makeArray(a);$j(a.reverse()).each(function(){var i=g(this,h,b);if(!c){c=$j(i)}else{c.push(i[0])}});if(!b.preserve_template){$j(this).remove()}}else{var j=(a[f]||a[a.length-1]);g(j,h,b)}});if(c){return this.pushStack(c,"render",this.selector)}else{return this}}});
;
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);
;
(function(a){a.widget("ui.slider",a.extend({},a.ui.mouse,{_init:function(){var b=this,c=this.options;this._keySliding=false;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this.range=a([]);if(c.range){if(c.range===true){this.range=a("<div></div>");if(!c.values){c.values=[this._valueMin(),this._valueMin()]}if(c.values.length&&c.values.length!=2){c.values=[c.values[0],c.values[0]]}}else{this.range=a("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(c.range=="min"||c.range=="max"){this.range.addClass("ui-slider-range-"+c.range)}this.range.addClass("ui-widget-header")}if(a(".ui-slider-handle",this.element).length==0){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}if(c.values&&c.values.length){while(a(".ui-slider-handle",this.element).length<c.values.length){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}}this.handles=a(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(d){d.preventDefault()}).hover(function(){if(!c.disabled){a(this).addClass("ui-state-hover")}},function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(!c.disabled){a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}else{a(this).blur()}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(d){a(this).data("index.ui-slider-handle",d)});this.handles.keydown(function(i){var f=true;var e=a(this).data("index.ui-slider-handle");if(b.options.disabled){return}switch(i.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:f=false;if(!b._keySliding){b._keySliding=true;a(this).addClass("ui-state-active");b._start(i,e)}break}var g,d,h=b._step();if(b.options.values&&b.options.values.length){g=d=b.values(e)}else{g=d=b.value()}switch(i.keyCode){case a.ui.keyCode.HOME:d=b._valueMin();break;case a.ui.keyCode.END:d=b._valueMax();break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g==b._valueMax()){return}d=g+h;break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g==b._valueMin()){return}d=g-h;break}b._slide(i,e,d);return f}).keyup(function(e){var d=a(this).data("index.ui-slider-handle");if(b._keySliding){b._stop(e,d);b._change(e,d);b._keySliding=false;a(this).removeClass("ui-state-active")}});this._refreshValue()},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy()},_mouseCapture:function(d){var e=this.options;if(e.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var h={x:d.pageX,y:d.pageY};var j=this._normValueFromMouse(h);var c=this._valueMax()-this._valueMin()+1,f;var k=this,i;this.handles.each(function(l){var m=Math.abs(j-k.values(l));if(c>m){c=m;f=a(this);i=l}});if(e.range==true&&this.values(1)==e.min){f=a(this.handles[++i])}this._start(d,i);k._handleIndex=i;f.addClass("ui-state-active").focus();var g=f.offset();var b=!a(d.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=b?{left:0,top:0}:{left:d.pageX-g.left-(f.width()/2),top:d.pageY-g.top-(f.height()/2)-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};j=this._normValueFromMouse(h);this._slide(d,i,j);return true},_mouseStart:function(b){return true},_mouseDrag:function(d){var b={x:d.pageX,y:d.pageY};var c=this._normValueFromMouse(b);this._slide(d,this._handleIndex,c);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._handleIndex=null;this._clickOffset=null;return false},_detectOrientation:function(){this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var c,h;if("horizontal"==this.orientation){c=this.elementSize.width;h=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;h=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}var f=(h/c);if(f>1){f=1}if(f<0){f=0}if("vertical"==this.orientation){f=1-f}var e=this._valueMax()-this._valueMin(),i=f*e,b=i%this.options.step,g=this._valueMin()+i-b;if(b>(this.options.step/2)){g+=this.options.step}return parseFloat(g.toFixed(5))},_start:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("start",d,b)},_slide:function(f,e,d){var g=this.handles[e];if(this.options.values&&this.options.values.length){var b=this.values(e?0:1);if((this.options.values.length==2&&this.options.range===true)&&((e==0&&d>b)||(e==1&&d<b))){d=b}if(d!=this.values(e)){var c=this.values();c[e]=d;var h=this._trigger("slide",f,{handle:this.handles[e],value:d,values:c});var b=this.values(e?0:1);if(h!==false){this.values(e,d,(f.type=="mousedown"&&this.options.animate),true)}}}else{if(d!=this.value()){var h=this._trigger("slide",f,{handle:this.handles[e],value:d});if(h!==false){this._setData("value",d,(f.type=="mousedown"&&this.options.animate))}}}},_stop:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("stop",d,b)},_change:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("change",d,b)},value:function(b){if(arguments.length){this._setData("value",b);this._change(null,0)}return this._value()},values:function(b,e,c,d){if(arguments.length>1){this.options.values[b]=e;this._refreshValue(c);if(!d){this._change(null,b)}}if(arguments.length){if(this.options.values&&this.options.values.length){return this._values(b)}else{return this.value()}}else{return this._values()}},_setData:function(b,d,c){a.widget.prototype._setData.apply(this,arguments);switch(b){case"disabled":if(d){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled")}else{this.handles.removeAttr("disabled")}case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue(c);break;case"value":this._refreshValue(c);break}},_step:function(){var b=this.options.step;return b},_value:function(){var b=this.options.value;if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_values:function(b){if(arguments.length){var c=this.options.values[b];if(c<this._valueMin()){c=this._valueMin()}if(c>this._valueMax()){c=this._valueMax()}return c}else{return this.options.values}},_valueMin:function(){var b=this.options.min;return b},_valueMax:function(){var b=this.options.max;return b},_refreshValue:function(c){var f=this.options.range,d=this.options,l=this;if(this.options.values&&this.options.values.length){var i,h;this.handles.each(function(p,n){var o=(l.values(p)-l._valueMin())/(l._valueMax()-l._valueMin())*100;var m={};m[l.orientation=="horizontal"?"left":"bottom"]=o+"%";a(this).stop(1,1)[c?"animate":"css"](m,d.animate);if(l.options.range===true){if(l.orientation=="horizontal"){(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({left:o+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({width:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}else{(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({bottom:(o)+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({height:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}}lastValPercent=o})}else{var j=this.value(),g=this._valueMin(),k=this._valueMax(),e=k!=g?(j-g)/(k-g)*100:0;var b={};b[l.orientation=="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[c?"animate":"css"](b,d.animate);(f=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[c?"animate":"css"]({width:e+"%"},d.animate);(f=="max")&&(this.orientation=="horizontal")&&this.range[c?"animate":"css"]({width:(100-e)+"%"},{queue:false,duration:d.animate});(f=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[c?"animate":"css"]({height:e+"%"},d.animate);(f=="max")&&(this.orientation=="vertical")&&this.range[c?"animate":"css"]({height:(100-e)+"%"},{queue:false,duration:d.animate})}}}));a.extend(a.ui.slider,{getter:"value values",version:"1.7.2",eventPrefix:"slide",defaults:{animate:false,delay:0,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null}})})(jQuery);
;
jQuery.effects||(function(d){d.effects={version:"1.7.2",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(d.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);
;
(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);
;
(function(a){a.effects.highlight=function(b){return this.queue(function(){var e=a(this),d=["backgroundImage","backgroundColor","opacity"];var h=a.effects.setMode(e,b.options.mode||"show");var c=b.options.color||"#ffff99";var g=e.css("backgroundColor");a.effects.save(e,d);e.show();e.css({backgroundImage:"none",backgroundColor:c});var f={backgroundColor:g};if(h=="hide"){f.opacity=0}e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(h=="hide"){e.hide()}a.effects.restore(e,d);if(h=="show"&&a.browser.msie){this.style.removeAttribute("filter")}if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);
;
(function(a){a.widget("ui.accordion",{_init:function(){var d=this.options,b=this;this.running=0;if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){d.collapsible=!d.alwaysOpen}if(d.navigation){var c=this.element.find("a").filter(d.navigationFilter);if(c.length){if(c.filter(d.header).length){this.active=c}else{this.active=c.parent().parent().prev();c.addClass("ui-accordion-content-active")}}}this.element.addClass("ui-accordion ui-widget ui-helper-reset");if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")}this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){a(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);if(a.browser.msie){this.element.find("a").css("zoom","1")}this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(e){return b._keydown(e)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")}if(!a.browser.safari){this.headers.find("a").attr("tabIndex","-1")}if(d.event){this.headers.bind((d.event)+".accordion",function(e){return b._clickHandler.call(b,e,this)})}},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");this.headers.find("a").removeAttr("tabindex");this.headers.children(".ui-icon").remove();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(c.autoHeight||c.fillHeight){b.css("height","")}},_setData:function(b,c){if(b=="alwaysOpen"){b="collapsible";c=!c}a.widget.prototype._setData.apply(this,arguments)},_keydown:function(e){var g=this.options,f=a.ui.keyCode;if(g.disabled||e.altKey||e.ctrlKey){return}var d=this.headers.length;var b=this.headers.index(e.target);var c=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:c=this.headers[(b+1)%d];break;case f.LEFT:case f.UP:c=this.headers[(b-1+d)%d];break;case f.SPACE:case f.ENTER:return this._clickHandler({target:e.target},e.target)}if(c){a(e.target).attr("tabIndex","-1");a(c).attr("tabIndex","0");c.focus();return false}return true},resize:function(){var e=this.options,d;if(e.fillSpace){if(a.browser.msie){var b=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();if(a.browser.msie){this.element.parent().css("overflow",b)}this.headers.each(function(){d-=a(this).outerHeight()});var c=0;this.headers.next().each(function(){c=Math.max(c,a(this).innerHeight()-a(this).height())}).height(Math.max(0,d-c)).css("overflow","auto")}else{if(e.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,a(this).outerHeight())}).height(d)}}},activate:function(b){var c=this._findActive(b)[0];this._clickHandler({target:c},c)},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,f){var d=this.options;if(d.disabled){return false}if(!b.target&&d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));this._toggle(c,h,e);return false}var g=a(b.currentTarget||f);var i=g[0]==this.active[0];if(this.running||(!d.collapsible&&i)){return false}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");if(!i){g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);g.next().addClass("ui-accordion-content-active")}var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c.find("> *"),oldContent:h.find("> *")},j=this.headers.index(this.active[0])>this.headers.index(g[0]);this.active=i?a([]):g;this._toggle(c,h,e,i,j);return false},_toggle:function(b,i,g,j,k){var d=this.options,m=this;this.toShow=b;this.toHide=i;this.data=g;var c=function(){if(!m){return}return m._completed.apply(m,arguments)};this._trigger("changestart",null,this.data);this.running=i.size()===0?b.size():i.size();if(d.animated){var f={};if(d.collapsible&&j){f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}else{f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}if(!d.proxied){d.proxied=d.animated}if(!d.proxiedDuration){d.proxiedDuration=d.duration}d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;var l=a.ui.accordion.animations,e=d.duration,h=d.animated;if(!l[h]){l[h]=function(n){this.slide(n,{easing:h,duration:e||700})}}l[h](f)}else{if(d.collapsible&&j){b.toggle()}else{i.hide();b.show()}c(true)}i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(b){var c=this.options;this.running=b?0:--this.running;if(this.running){return}if(c.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this._trigger("change",null,this.data)}});a.extend(a.ui.accordion,{version:"1.7.2",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},animations:{slide:function(j,h){j=a.extend({easing:"swing",duration:300},j,h);if(!j.toHide.size()){j.toShow.animate({height:"show"},j);return}if(!j.toShow.size()){j.toHide.animate({height:"hide"},j);return}var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;var i=j.toShow;b=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));a.each(e,function(k,m){f[m]="hide";var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);d[m]={value:l[1],unit:l[2]||"px"}});j.toShow.css({height:0,overflow:"hidden"}).show();j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){if(l.prop=="height"){g=(l.now-l.start)/(l.end-l.start)}j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit},duration:j.duration,easing:j.easing,complete:function(){if(!j.autoHeight){j.toShow.css("height","")}j.toShow.css("width",b);j.toShow.css({overflow:c});j.complete()}})},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})},easeslide:function(b){this.slide(b,{easing:"easeinout",duration:700})}}})})(jQuery);
;
jQuery.fn.fadeToggle=function(a,c,b){return this.animate({opacity:"toggle"},a,c,b)};
;
var GlobalAjaxErrorHandler=function(d,e,c,g){var a=g||null;if(typeof a=="string"){a=[g]}var f;if(typeof(c)!="undefined"){f=c}else{f=_jive_base_url}function b(h){return !a||$j.inArray(h,a)>-1}d.bind("ajaxError",function(j,h,i){if(b(i.url)){if($j.inArray("unauthenticated",e)>-1&&h.status==403){top.location=f+"/login.jspa";return false}else{if($j.inArray("notfound",e)>-1&&h.status==404){top.location=f+"/doRedirect.jspa?view=notfound";return false}else{if($j.inArray("error",e)>-1&&h.status==500){top.location=f+"/doRedirect.jspa?view=error";return false}else{if($j.inArray("unauthorized",e)>-1&&h.status==401){top.location=f+"/doRedirect.jspa?view=unauthorized";return false}}}}}});if($j.inArray("login",e)>-1){d.bind("ajaxComplete",function(j,h,i){if(b(i.url)){var k=h.getResponseHeader("Content-Type");if(!k||k.match(/html/)){if($j("#loginform",h.responseText).length>0){top.location=_jive_base_url+"/login.jspa";return false}else{if($j("#jive-loginBox",h.responseText).length>0){top.location=_jive_base_url+"/admin/login.jsp";return false}}}}})}};
;
(function(a){a.fn.safelyLoad=function(d,h,i){var e="GET",c=[],g=d.indexOf(" "),b,f=this;if(g>=0){b=d.slice(g,d.length);d=d.slice(0,g)}if(h){if(a.isFunction(h)){i=h;h=null}else{if(typeof h==="object"){h=a.param(h);e="POST"}}}a.ajax({url:d,type:e,data:h,dataType:"html",complete:function(m,k){if(k==="success"||k==="notmodified"){var n=jive.util.separateScripts(m.responseText),l=n[0],j=n[1];f.html(b?jQuery("<div>").append(l).find(b):l);j(function(){if(i){f.each(i,[m.responseText,k,m])}})}else{if(i){f.each(i,[m.responseText,k,m])}}}});return this}})(jQuery);
;
(function(a){a.suggest=function(u,i){var d=a(u).attr("autocomplete","off");var h;var t=false;var g=0;var y=[];var w=0;if(a.isArray(i.source)){d.data("results",i.source);i.clientSearch=true}if(!i.attachObject){i.attachObject=a(document.createElement("ul")).appendTo("body")}h=a(i.attachObject);h.addClass(i.resultsClass);l();a(window).load(l).resize(l);d.blur(function(){if(!a.browser.msie){setTimeout(function(){h.hide()},200)}});if(a.browser.msie){a("body").click(function(){setTimeout(function(){h.hide()},200)})}try{h.bgiframe()}catch(E){}if(a.browser.mozilla){d.keypress(q)}else{d.keydown(q)}function c(e){return e.replace(/([.*+?\^${}()|\[\]\/\\])/g,"\\$1")}function l(){if(a.isFunction(i.position)){i.position(d,h)}else{var e=d.offset();h.css({top:(e.top+u.offsetHeight)+"px",left:e.left+"px"})}}function q(J){if((/27$|38$|40$/.test(J.keyCode)&&h.is(":visible"))||(/^13$|^9$/.test(J.keyCode)&&G())){if(J.preventDefault){J.preventDefault()}if(J.stopPropagation){J.stopPropagation()}J.cancelBubble=true;J.returnValue=false;switch(J.keyCode){case 38:o();break;case 40:F();break;case 9:case 13:var I=G();if(I){C.apply(I)}break;case 27:h.hide();break}}else{if(d.val().length!=g){if(t){clearTimeout(t)}t=setTimeout(function(){n(i.limit)},i.delay);g=d.val().length}}}function A(J){var e=J.val(),I;if(i.multiple){I=e.split(i.multipleSeparator).last()}else{I=e}return a.trim(I)}function v(e){var I=a.extend({},i.extraParams);I[i.paramName]=e;return I}function p(){n(Number.MAX_VALUE)}function n(e){var K=A(d);var I=d.data("results");if(K.length>=i.minchars){var J=H(K);if(J&&i.useCache===true){m(J.items,e)}else{if(i.clientSearch&&I&&i.useCache===true){D(I,K,e)}else{a.ajax({url:i.source,type:i.requestMethod,data:v(K),success:function(L){d.data("results",L);D(L,K,e)}})}}}else{h.hide()}}function x(e,I){D(e,I,Number.MAX_VALUE)}function D(e,K,I){h.hide();var J=z(e,K);m(J,I);j(K,J,e.length)}function H(I){for(var e=0;e<y.length;e++){if(y[e]["q"]==I){y.unshift(y.splice(e,1)[0]);return y[0]}}return false}function j(K,e,I){while(y.length&&(w+I>i.maxCacheSize)){var J=y.pop();w-=J.size}y.push({q:K,size:I,items:e});w+=I}function m(N,J){if(!N){return}if(!N.length){h.hide();return}if(N.length<J){J=N.length}if(a.isFunction(i.sort)){N.sort(function(U,T){return i.sort(U.originalValue[0],T.originalValue[0])})}l();h.html("");for(var L=0;L<J;L++){var P=i.template;var O=N[L]["value"];var e=N[L]["originalValue"];var Q=N[L]["selectedByDeafult"];for(var I=0;I<e.length;I++){var S="%\\{"+I+"\\}";P=P.replace(new RegExp(S,"g"),e[I])}for(var K=0;K<O.length;K++){var R="\\{"+K+"\\}";P=P.replace(new RegExp(R,"g"),O[K])}var M=a("<li>"+P+"</li>");if(i.liClass!=""){M.addClass(i.liClass)}if(Q||N.length<=1){M.addClass(i.selectClass)}M.data("key",N[L]["key"]);M.data("value",e[0]);h.append(M)}h.show();h.children("li").mouseover(function(){h.children("li").removeClass(i.selectClass);a(this).addClass(i.selectClass)}).click(function(T){T.preventDefault();T.stopPropagation();C.apply(this)})}function k(e){m(e,Number.MAX_VALUE)}function z(J,I){var e=i.transformData?i.transformData(J):J;if(a.isArray(e)){return s(e,I)}else{return b(e,I)}}function s(J,I){var e=new RegExp(c(I),"ig");return J.map(r.partial(_,e)).filter(function(L){var K=L.value.some(function(M){return M.match(e)||!i.clientSearch});return K&&L.value.length>0})}function b(e,I){var J=e.split(i.delimiter);return s(J,I)}function r(K,I){var M=a.isArray(K)?K:a.trim(K).split(i.dataDelimiter),e=M.slice(0,Math.max(M.length-1,1)),J=M.length>1?M.last():"",L=e.some(function(N){var O=N.match(I);return O&&O[0].length==N});return{value:e.map(B.partial(_,I)),key:J,originalValue:M,selectedByDefault:L}}function B(K,I){function e(L){return L.contents().map(function(){var M;if(this.nodeType==3){return this.data.replace(I,'<span class="'+i.matchClass+'">$&</span>')}else{$j(this).html(e($j(this),I));M=$j("<div/>",{html:this});return M.html()}}).toArray().join("")}var J=$j("<div/>",{html:K});return e(J)}function G(){if(!h.is(":visible")){return false}var e=h.children("li."+i.selectClass);if(!e.length){e=false}return e}function C(){var e=a(this);f(d,e.data("value"));h.hide();d.focus();if(a(i.dataContainer)){a(i.dataContainer).val(e.data("key"))}if(i.onSelect){i.onSelect.call(d[0],e.data("key"),e.data("value"))}}function f(L,J){var I=i.multipleSeparator,K,e;if(i.multiple){K=L.val().split(I).slice(0,-1);e=K.concat([J,""]).join(I)}else{e=J}L.val(e)}function F(){var e=G();if(e){e.removeClass(i.selectClass).next().addClass(i.selectClass)}else{h.children("li:first-child").addClass(i.selectClass)}}function o(){var e=G();if(e){e.removeClass(i.selectClass).prev().addClass(i.selectClass)}else{h.children("li:last-child").addClass(i.selectClass)}}};a.fn.suggest=function(c,b){if(!c){return}b=b||{};b.source=c;b.delay=b.delay||150;b.resultsClass=b.resultsClass||"ac_results";b.selectClass=b.selectClass||"ac_over";b.matchClass=b.matchClass||"ac_match";b.liClass=b.liClass||"";b.minchars=b.minchars||2;b.delimiter=b.delimiter||"\n";b.onSelect=b.onSelect||false;b.maxCacheSize=b.maxCacheSize||65536;b.dataDelimiter=b.dataDelimiter||"\t";b.dataContainer=b.dataContainer||"#SuggestResult";b.attachObject=b.attachObject||null;b.clientSearch=b.clientSearch||false;b.template=b.template||"{0}";b.limit=b.limit&&b.limit>0?b.limit:Number.MAX_VALUE;b.multiple=b.multiple||false;b.multipleSeparator=b.multipleSeparator||", ";b.sort=b.sort||null;b.paramName=b.paramName||"q";b.extraParams=b.extraParams||{};b.requestMethod=b.requestMethod||"GET";b.transformData=b.transformData;b.useCache=b.useCache||true;b.position=b.position;this.each(function(){a.suggest(this,b)});return this}})(jQuery);
;
(function(a){a.fn.delay=function(c,b){return this.each(function(){setTimeout(b,c)})};a.fn.delayAnimation=function(b,c){a.fx.step.delay=function(){};return this.animate({delay:1},b,c)}})(jQuery);
;
// jquery.jsonp 1.0.4 (c) 2009 Julian Aubourg | MIT License
// http://code.google.com/p/jquery-jsonp/
(function($){var x=function(o){return o!==undefined&&o!==null;},H=$("head"),Z={},K={callback:"C",url:location.href};$.jsonp=function(d){d=$.extend({},K,d);if(x(d.beforeSend)){var t=0;d.abort=function(){t=1;};if(d.beforeSend(d,d)===false||t)return d;}
var _="",y="success",n="error",u=x(d.url)?d.url:_,p=x(d.data)?d.data:_,s=(typeof p)=="string",k=function(f){setTimeout(f,1);},S,P,i,j,U;p=s?p:$.param(p);x(d.callbackParameter)&&(p+=(p==_?_:"&")+escape(d.callbackParameter)+"=?");!d.cache&&!d.pageCache&&(p+=[(p==_?_:"&"),"_xx",(new Date()).getTime(),"=",1].join(_));S=u.split("?");if(p!=_){P=p.split("?");j=S.length-1;j&&(S[j]+="&"+P.shift());S=S.concat(P);}
i=S.length-2;i&&(S[i]+=d.callback+S.pop());U=S.join("?");if(d.pageCache&&x(Z[U])){k(function(){if(x(Z[U].e)){x(d.error)&&d.error(d,n);x(d.complete)&&d.complete(d,n);}else{var v=Z[U].s;x(d.dataFilter)&&(v=d.dataFilter(v));x(d.success)&&d.success(v,y);x(d.complete)&&d.complete(d,y);}});return d;}
var f=$("<iframe />");H.append(f);var F=f[0],W=F.contentWindow||F.contentDocument,D=W.document;if(!x(D)){D=W;W=D.getParentNode();}
var w,e=function(_,m){d.pageCache&&!x(m)&&(Z[U]={e:1});w();m=x(m)?m:n;x(d.error)&&d.error(d,m);x(d.complete)&&d.complete(d,m);},t=0,C=d.callback,E=C=="E"?"X":"E";D.open();W[C]=function(v){t=1;d.pageCache&&(Z[U]={s:v});k(function(){w();x(d.dataFilter)&&(v=d.dataFilter(v));x(d.success)&&d.success(v,y);x(d.complete)&&d.complete(d,y);});};W[E]=function(s){(!s||s=="complete")&&!t++&&k(e);};w=function(){W[E]=undefined;W[C]=undefined;try{delete W[E];}catch(_){}
try{delete W[C];}catch(_){}
D.open()
D.write(_);D.close();f.remove();}
k(function(){D.write(['<html><head><script src="',U,'" onload="',E,'()" onreadystatechange="',E,'(this.readyState)"></script></head><body onload="',E,'()"></body></html>'].join(_));D.close();});d.timeout>0&&setTimeout(function(){!t&&e(_,"timeout");},d.timeout);d.abort=w;return d;}
$.jsonp.setup=function(o){$.extend(K,o);};})(jQuery);
;
(function(c){var a=c.scrollTo=function(f,e,d){c(window).scrollTo(f,e,d)};a.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1};a.window=function(d){return c(window).scrollable()};c.fn.scrollable=function(){return this.map(function(){var e=this,d=!e.nodeName||c.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!d){return e}var f=(e.contentWindow||e).document||e.ownerDocument||e;return c.browser.safari||f.compatMode=="BackCompat"?f.body:f.documentElement})};c.fn.scrollTo=function(f,e,d){if(typeof e=="object"){d=e;e=0}if(typeof d=="function"){d={onAfter:d}}if(f=="max"){f=9000000000}d=c.extend({},a.defaults,d);e=e||d.speed||d.duration;d.queue=d.queue&&d.axis.length>1;if(d.queue){e/=2}d.offset=b(d.offset);d.over=b(d.over);return this.scrollable().each(function(){var m=this,k=c(m),l=f,j,h={},n=k.is("html,body");switch(typeof l){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px)?$/.test(l)){l=b(l);break}l=c(l,this);case"object":if(l.is||l.style){j=(l=c(l)).offset()}}c.each(d.axis.split(""),function(r,s){var t=s=="x"?"Left":"Top",u=t.toLowerCase(),q="scroll"+t,o=m[q],p=s=="x"?"Width":"Height";if(j){h[q]=j[u]+(n?0:o-k.offset()[u]);if(d.margin){h[q]-=parseInt(l.css("margin"+t))||0;h[q]-=parseInt(l.css("border"+t+"Width"))||0}h[q]+=d.offset[u]||0;if(d.over[u]){h[q]+=l[p.toLowerCase()]()*d.over[u]}}else{h[q]=l[u]}if(/^\d+$/.test(h[q])){h[q]=h[q]<=0?0:Math.min(h[q],g(p))}if(!r&&d.queue){if(o!=h[q]){i(d.onAfterFirst)}delete h[q]}});i(d.onAfter);function i(o){k.animate(h,e,d.easing,o&&function(){o.call(this,f,d)})}function g(s){var p="scroll"+s;if(!n){return m[p]}var r="client"+s,q=m.ownerDocument.documentElement,o=m.ownerDocument.body;return Math.max(q[p],o[p])-Math.min(q[r],o[r])}}).end()};function b(d){return typeof d=="object"?d:{top:d,left:d}}})(jQuery);
;
$j(document).ready(function(){$j("a.localScroll").live("click",function(){var b=$j(this).attr("href").split("#").last();var a=$j("a[name='"+b+"'], [id='"+b+"']");$j.scrollTo(a,200,{offset:{top:-20,left:-200}});return false});$j("a.localScrollSlow").live("click",function(){var b=$j(this).attr("href").split("#").last();var a=$j("a[name='"+b+"'], [id='"+b+"']");$j.scrollTo(a,800,{offset:{top:-20,left:-200}});return false})});
;
if(typeof addEvent!="function"){var addEvent=function(b,m,h,g){var i="addEventListener",c="on"+m,k=b,j=m,e=h,a=g;if(b[i]&&!g){return b[i](m,h,false)}if(!b._evts){b._evts={}}if(!b._evts[m]){b._evts[m]=b[c]?{b:b[c]}:{};b[c]=new Function("e",'var r = true,o = this,a = o._evts["'+m+'"],i;             for(i in a) {                 o._f = a[i];                 r = o._f(e||window.event)!=false&&r;                 o._f = null             }             return r');if(m!="unload"){addEvent(window,"unload",function(){removeEvent(k,j,e,a)})}}if(!h._i){h._i=addEvent._i++}b._evts[m][h._i]=h};addEvent._i=1;var removeEvent=function(g,b,c,a){var e="removeEventListener";if(g[e]&&!a){return g[e](b,c,false)}if(g._evts&&g._evts[b]&&c._i){delete g._evts[b][c._i]}}}function cancelEvent(a,b){a.returnValue=false;if(a.preventDefault){a.preventDefault()}if(b){a.cancelBubble=true;if(a.stopPropagation){a.stopPropagation()}}}function SuperNote(b,a){var e={myName:b,allowNesting:false,cssProp:"visibility",cssVis:"inherit",cssHid:"hidden",IESelectBoxFix:true,showDelay:0,hideDelay:500,animInSpeed:0.1,animOutSpeed:0.1,animations:[],mouseX:0,mouseY:0,notes:{},rootElm:null,onshow:null,onhide:null};for(var d in e){this[d]=(typeof a[d]=="undefined")?e[d]:a[d]}var c=this;addEvent(document,"mouseover",function(f){c.mouseHandler(f,1)});addEvent(document,"mousemove",function(f){c.mouseTrack(f)});addEvent(document,"mouseout",function(f){c.mouseHandler(f,0)});this.instance=SuperNote.instances.length;SuperNote.instances[this.instance]=this}SuperNote.instances=[];SuperNote.prototype.bTypes={};SuperNote.prototype.pTypes={};SuperNote.prototype.pTypes.mouseoffset=function(obj,noteID,nextVis,nextAnim){with(obj){var note=notes[noteID];if(nextVis&&!note.animating&&!note.visible){note.ref.style.left=checkWinX(mouseX,note)+"px";note.ref.style.top=checkWinY(mouseY,note)+"px"}}};SuperNote.prototype.pTypes.mousetrack=function(obj,noteID,nextVis,nextAnim){with(obj){var note=notes[noteID];if(nextVis&&!note.animating&&!note.visible){var posString="with("+myName+') {                  var note = notes["'+noteID+'"];                  note.ref.style.left = checkWinX(mouseX,note)+"px";                  note.ref.style.top = checkWinY(mouseY,note)+"px"              }';eval(posString);obj.IEFrameFix(noteID,1);if(!note.trackTimer){note.trackTimer=setInterval(posString,50)}}else{if(!nextVis&&!nextAnim){clearInterval(note.trackTimer);note.trackTimer=null}}}};SuperNote.prototype.pTypes.triggeroffset=function(obj,noteID,nextVis,nextAnim){with(obj){var note=notes[noteID];if(nextVis&&!note.animating&&!note.visible){var x=0,y=0,elm=note.trigRef;while(elm){x+=elm.offsetLeft;y+=elm.offsetTop;elm=elm.offsetParent}note.ref.style.left=checkWinX(x,note)+"px";note.ref.style.top=checkWinY(y,note)+"px"}}};SuperNote.prototype.bTypes.pinned=function(obj,noteID,nextVis){with(obj){return(!nextVis)?false:true}};SuperNote.prototype.docBody=function(){return document[(document.compatMode&&document.compatMode.indexOf("CSS")>-1)?"documentElement":"body"]};SuperNote.prototype.getWinW=function(){return this.docBody().clientWidth||window.innerWidth||0};SuperNote.prototype.getWinH=function(){return this.docBody().clientHeight||window.innerHeight||0};SuperNote.prototype.getScrX=function(){return this.docBody().scrollLeft||window.scrollX||0};SuperNote.prototype.getScrY=function(){return this.docBody().scrollTop||window.scrollY||0};SuperNote.prototype.checkWinX=function(newX,note){with(this){return Math.max(getScrX(),Math.min(newX,getScrX()+getWinW()-note.ref.offsetWidth-8))}};SuperNote.prototype.checkWinY=function(newY,note){with(this){return Math.max(getScrY(),Math.min(newY,getScrY()+getWinH()-note.ref.offsetHeight-8))}};SuperNote.prototype.mouseTrack=function(evt){with(this){mouseX=evt.pageX||evt.clientX+getScrX()||0;mouseY=evt.pageY||evt.clientY+getScrY()||0}};SuperNote.prototype.mouseHandler=function(evt,show){with(this){if(!document.documentElement){return true}var srcElm=evt.target||evt.srcElement,trigRE=new RegExp(myName+"-(hover|click)-([a-z0-9]+)","i"),targRE=new RegExp(myName+"-(note)-([a-z0-9]+)","i"),trigFind=1,foundNotes={};if(srcElm&&srcElm.nodeType!=1){srcElm=srcElm.parentNode}var elm=srcElm;while(elm&&elm!=rootElm){if(targRE.test(elm.id)||(trigFind&&trigRE.test(elm.className))){if(!allowNesting){trigFind=0}var click=RegExp.$1=="click"?1:0,noteID=RegExp.$2,ref=document.getElementById(myName+"-note-"+noteID),trigRef=trigRE.test(elm.className)?elm:null;if(ref){if(!notes[noteID]){notes[noteID]={click:click,ref:ref,trigRef:null,visible:0,animating:0,timer:null};ref._sn_obj=this;ref._sn_id=noteID}var note=notes[noteID];if(!note.click||(trigRef!=srcElm)){foundNotes[noteID]=true}if(!note.click||(show==2)){if(trigRef){notes[noteID].trigRef=notes[noteID].ref._sn_trig=elm}display(noteID,show);if(note.click&&(srcElm==trigRef)){cancelEvent(evt)}}}}if(elm._sn_trig){trigFind=1;elm=elm._sn_trig}else{elm=elm.parentNode}}if(show==2){for(var n in notes){if(notes[n].click&&notes[n].visible&&!foundNotes[n]){display(n,0)}}}}};SuperNote.prototype.display=function(noteID,show){with(this){with(notes[noteID]){clearTimeout(timer);if(!animating||(show?!visible:visible)){var tmt=animating?1:(show?showDelay||1:hideDelay||1);timer=setTimeout("SuperNote.instances["+instance+'].setVis("'+noteID+'",'+show+",false)",tmt)}}}};SuperNote.prototype.checkType=function(noteID,nextVis,nextAnim){with(this){var note=notes[noteID],bType,pType;if((/snp-([a-z]+)/).test(note.ref.className)){pType=RegExp.$1}if((/snb-([a-z]+)/).test(note.ref.className)){bType=RegExp.$1}if(nextAnim&&bType&&bTypes[bType]&&(bTypes[bType](this,noteID,nextVis)==false)){return false}if(pType&&pTypes[pType]){pTypes[pType](this,noteID,nextVis,nextAnim)}return true}};SuperNote.prototype.setVis=function(noteID,show,now){with(this){var note=notes[noteID];if(note&&checkType(noteID,show,1)||now){note.visible=show;note.animating=1;animate(noteID,show,now)}}};SuperNote.prototype.animate=function(noteID,show,now){with(this){var note=notes[noteID];if(!note.animTimer){note.animTimer=0}if(!note.animC){note.animC=0}with(note){clearTimeout(animTimer);var speed=(animations.length&&!now)?(show?animInSpeed:animOutSpeed):1;if(show&&!animC){if(onshow){this.onshow(noteID)}IEFrameFix(noteID,1);ref.style[cssProp]=cssVis}animC=Math.max(0,Math.min(1,animC+speed*(show?1:-1)));if(document.getElementById&&speed<1){for(var a=0;a<animations.length;a++){animations[a](ref,animC)}}if(!show&&!animC){if(onhide){this.onhide(noteID)}IEFrameFix(noteID,0);ref.style[cssProp]=cssHid}if(animC!=parseInt(animC)){animTimer=setTimeout(myName+'.animate("'+noteID+'",'+show+")",50)}else{checkType(noteID,animC?1:0,0);note.animating=0}}}};SuperNote.prototype.IEFrameFix=function(noteID,show){with(this){if(!window.createPopup||!IESelectBoxFix){return}var note=notes[noteID],ifr=note.iframe;if(!ifr){ifr=notes[noteID].iframe=document.createElement("iframe");ifr.setAttribute("src","javascript:false;");ifr.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=0)";ifr.style.position="absolute";ifr.style.borderWidth="0";note.ref.parentNode.insertBefore(ifr,note.ref.parentNode.firstChild)}if(show){ifr.style.left=note.ref.offsetLeft+"px";ifr.style.top=note.ref.offsetTop+"px";ifr.style.width=note.ref.offsetWidth+"px";ifr.style.height=note.ref.offsetHeight+"px";ifr.style.visibility="inherit"}else{ifr.style.visibility="hidden"}}};
;
if(!Array.prototype.forEach){Array.prototype.forEach=function(b){var a=this.length>>>0;if(typeof b!="function"){throw new TypeError()}var d=arguments[1];for(var c=0;c<a;c++){if(c in this){b.call(d,this[c],c,this)}}}}if(!Array.prototype.map){Array.prototype.map=function(b){var a=this.length>>>0;if(typeof b!="function"){throw new TypeError()}var e=new Array(a);var d=arguments[1];for(var c=0;c<a;c++){if(c in this){e[c]=b.call(d,this[c],c)}}return e}}if(!Array.prototype.reduce){Array.prototype.reduce=function(b){var a=this.length>>>0;if(typeof b!="function"){throw new TypeError()}if(a==0&&arguments.length==1){throw new TypeError()}var c=0;if(arguments.length>=2){var d=arguments[1]}else{do{if(c in this){d=this[c++];break}if(++c>=a){throw new TypeError()}}while(true)}for(;c<a;c++){if(c in this){d=b.call(null,d,this[c],c,this)}}return d}}if(!Array.prototype.inject){Array.prototype.inject=function(f,c,e){var b=this.length>>>0,a=f,d;if(typeof c!="function"){throw new TypeError()}for(d=0;d<b;d+=1){a=c.apply(e,[a,this[d],d])}return a}}if(!Array.prototype.filter){Array.prototype.filter=function(b){var a=this.length>>>0;if(typeof b!="function"){throw new TypeError()}var e=new Array();var d=arguments[1];for(var c=0;c<a;c++){if(c in this){var f=this[c];if(b.call(d,f,c)){e.push(f)}}}return e}}if(!Array.prototype.every){Array.prototype.every=function(b){var a=this.length>>>0;if(typeof b!="function"){throw new TypeError()}var d=arguments[1];for(var c=0;c<a;c++){if(c in this&&!b.call(d,this[c],c,this)){return false}}return true}}if(!Array.prototype.some){Array.prototype.some=function(b){var d=0,a=this.length>>>0;if(typeof b!="function"){throw new TypeError()}var c=arguments[1];for(;d<a;d++){if(d in this&&b.call(c,this[d],d,this)){return true}}return false}}if(!Array.prototype.first){Array.prototype.first=function(){return this[0]}}if(!Array.prototype.last){Array.prototype.last=function(){var a=this.length>>>0;return this[a-1]}}if(!Array.prototype.unique){Array.prototype.unique=function unique(){var a=this;return this.filter(function(c,b){return $j.inArray(c,a)>=b})}}if(!Array.prototype.flat){Array.prototype.flat=function(){return this.inject([],function(a,b){if($j.isArray(b)){b.map(function(c){a.push(c)})}else{a.push(b)}return a})}}if(!Array.prototype.zip){Array.prototype.zip=function(){var a=[this].concat(Array.prototype.slice.call(arguments,0));return this.map(function(c,b){return a.map(function(d){return typeof d[b]!="undefined"?d[b]:null})})}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,a){a||(a=0);var b=this.length;if(a<0){a=b+a}for(;a<b;a++){if(this[a]===c){return a}}return -1}};
;
if(typeof(_)=="undefined"){_=undefined}if(!Function.prototype.bind){Function.prototype.bind=function(b){var c=this;var a=Array.prototype.slice.call(arguments,1);return function(){return c.apply(b,a.concat(Array.prototype.slice.call(arguments,0)))}}}if(!Function.prototype.partial){Function.prototype.partial=function(){var c=this,a=Array.prototype.slice.call(arguments),b;var e=[],d;for(b=0;b<a.length;b+=1){if(typeof(a[b])=="undefined"){e.push(b)}}return function(){var g=a.concat(Array.prototype.slice.call(arguments,e.length)),f;for(f=0;f<Math.min(e.length,arguments.length);f+=1){g[e[f]]=arguments[f]}for(f=0;f<g.length;f+=1){if(typeof(g[f])=="undefined"){return c.partial.apply(c,g)}}return c.apply(this,g)}}}if(!Function.prototype.aritize){Function.prototype.aritize=function(b){var a=this;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}};
;
if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}}if(typeof Object.keys=="undefined"){Object.keys=function(c){var b=[];for(var a in c){if(c.hasOwnProperty(a)){b.push(a)}}return b}}if(typeof Object.values=="undefined"){Object.values=function(c){var b=[];for(var a in c){if(c.hasOwnProperty(a)){b.push(c[a])}}return b}};
;
if(!String.prototype.startsWith){String.prototype.startsWith=function(a){return this.indexOf(a)===0}}if(!String.prototype.endsWith){String.prototype.endsWith=function(a){var b=this.length-a.length;return b>=0&&this.lastIndexOf(a)===b}};
;
jQuery.ajaxSetup({dataFilter:function(b,a){return a==="json"?jQuery.trim(b.replace(/^throw [^;]*;/,"")):b},beforeSend:function(a){if(typeof _jive_auth_token!="undefined"){a.setRequestHeader("X-J-Token",_jive_auth_token)}}});
;
if(!this.JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();
;
var HOSTURL="/";var AJAXPATH="";if(typeof(jive)=="undefined"){jive={namespace:function(a,e){var d=a.split("."),c=this,b;for(b=0;b<d.length;b+=1){if(typeof(c[d[b]])==="undefined"){if(b==d.length-1&&typeof(e)!="undefined"){c[d[b]]=e}else{c[d[b]]={}}}c=c[d[b]]}return c},app:function(d,c){var e=d.split("."),b=this,a=c||"Main";return this.namespace(d,function(){var g=e.slice(0,-1).reduce(function(j,k){return j[k]},b),h=g[e.last()],i=h[a],f;if($j.isFunction(i)){$j.extend(i,h);i[a]=i;g[e.last()]=i;f=Object.create(i.prototype);i.apply(f,arguments);return f}else{throw ("No class called `"+a+"` was found in jive."+d+".")}})}}}jive.namespace("gui");jive.namespace("model");jive.namespace("ext.y");jive.namespace("ext.x");jive.namespace("xml");jive.namespace("rte.macros",[]);jive.namespace("rte.plugin");jive.namespace.call(window,"console.log",function(){});jive.namespace.call(window,"console.debug",function(){});jive.namespace.call(window,"console.error",function(){});jive.namespace.call(window,"console.warn",function(){});jive.namespace.call(window,"console.info",function(){});if(typeof(kjs)=="undefined"){kjs={};kjs.require=function(b,a){setTimeout(a,1)}};
;
jive=this.jive||{};jive.conc=jive.conc||{};jive.conc.nextTick=(function(){if(window.postMessage&&window.addEventListener){return(function(){var b=[],a="next-tick-message";function d(e){b.push(e);window.postMessage(a,"*")}function c(f){if(f.source==window&&f.data==a){f.stopPropagation();if(b.length>0){var e=b.shift();e()}}}window.addEventListener("message",c,true);return d})()}else{return function(a){setTimeout(a,0)}}})();
;
jive=this.jive||{};jive.conc=jive.conc||{};jive.conc.observable=function(a){var b=false;a.listeners=function(d){if(!this._events){this._events={}}if(!this._events[d]){this._events[d]=[]}return this._events[d]};a.addListener=function(d,e){b=true;this.emit("newListener",d,e);b=false;this.listeners(d).push(e);return this};a.removeListener=function(f,g){var e=this.listeners(f);for(var d=0;d<e.length;d+=1){if(e[d]===g||typeof g=="undefined"){e.splice(d,1);d-=1}}return this};var c=jive.conc.nextTick||function(d){setTimeout(d,0)};a.emit=function(g){var j=Array.prototype.slice.call(arguments,1),e=this.listeners(g).slice(),f=this;function h(i){c(function(){i.apply(f,j)})}for(var d=0;d<e.length;d+=1){h(e[d])}if(!b){c(function(){var n=f.listeners(g),m;for(var l=0;l<n.length;l+=1){m=false;for(var k=0;k<e.length;k+=1){if(n[l]===e[k]){m=true}}if(!m){h(n[l])}}})}return this};a.emitP=function(e){var d=Array.prototype.slice.call(arguments),f=new jive.conc.Promise();this.emit.apply(this,d.concat(f));return f};a.proxyListener=function(h,e,g,f){var d=this;if(typeof g=="function"){f=g;g=null}g=g||e;if(f){h.addListener(e,f)}h.addListener(e,function(){var i=Array.prototype.slice.call(arguments);i.unshift(g);d.emit.apply(d,i)});return this};return a};
;
jive.conc.Promise=function(){jive.conc.observable(this);var c=false,d=false,e,f,a=this;this.addCallback=function(g){this.addListener("success",g);return this};this.addErrback=function(g){this.addListener("error",g);return this};this.addCancelback=function(g){this.addListener("cancel",g);return this};this.always=function(g){this.addListener("complete",g);return this};this.emitSuccess=function(){var g=Array.prototype.slice.call(arguments,0);if(!c){c=true;this.emit.apply(this,["success"].concat(g));this.emit("complete")}};this.emitError=function(){var g=Array.prototype.slice.call(arguments,0);if(!c){c=true;this.emit.apply(this,["error"].concat(g));this.emit("complete")}};function b(){var g=Array.prototype.slice.call(arguments,0);a.emit.apply(a,["cancel"].concat(g))}this.cancel=function(){if(!d){d=true;this.removeListener("success");this.removeListener("error");this.removeListener("complete");b()}};this.timeout=function(g){if(typeof g=="undefined"){return e}e=g;if(f){clearTimeout(f);f=null}f=setTimeout(function(){f=null;if(!c&&!d){a.emitError(new Error("timeout"))}},e);return this}};
;
jive.observable=function(a){return jive.conc.observable(a)};
;
jive.Event={KEY_RETURN:13,KEY_LEFT:37,KEY_RIGHT:39,KEY_TAB:9,KEY_ESC:27,KEY_UP:38,KEY_DOWN:40,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34};
;
jive.namespace("util");(function(b){function a(c){return typeof node=="object"&&"nodeType" in node&&node.nodeType===1&&node.cloneNode}jive.util={escapeHTML:function(c){if(c instanceof b||a(c)){return b("<div/>").html(c).html()}else{return b("<div/>").text(String(c)).html()}},unescapeHTML:function(c){return b("<div/>").html(String(c)).text()},convertElementsToValues:function(d){var c=new Array();b.each(b(d),function(){c.push(b(this).val())});return c},createDynamicForm:function(d){var c=$j("<form />");if(d.method.toLowerCase()!="get"){c.attr("method",d.method)}var e=d.url.split(/[&?]/);c.attr("action",e[0]);e.shift();e.forEach(function(f){var g=f.split(/[=]/);c.append($j('<input name="'+g[0]+'" type="hidden"/>').val(decodeURIComponent(g[1])))});return c},createAndSubmitDynamicForm:function(c){jive.util.createDynamicForm(c).appendTo($j(document.body)).submit()},parseToken:function(d,f,g){var c=$j(d),e={};e.name=c.find('[name="jive.token.name"]').val();e.value=e.name?c.find('[name="'+e.name+'"]').val():null;if(!e.value&&f){jive.util.securedPost(f).addCallback(function(h){var i={name:f,value:h[f]};g(i)})}else{g(e)}},securedPost:function(c){var d=new jive.conc.Promise();$j.ajax({url:jive.rest.url("/legacy_token/"+c),type:"POST",dataType:"json",success:function(f){var e={"jive.token.name":c};e[c]=f[0];d.emitSuccess(e)},error:function(f,g,e){d.emitError(f,g,e)}});return d},securedForm:function(e){var c=$j(e),d=e.find('input[name="jive.token.name"]').val(),f=new jive.conc.Promise();jive.util.securedPost(d).addCallback(function(g){c.find('input[name="'+d+'"]').val(g[d]);f.emitSuccess(c)}).addErrback(function(h,i,g){f.emitError(h,i,g)});return f},truncateStr:function(e,d,c){d=d||49;c=c||"...";return e.length>d?e.substring(0,d)+c:e},lazyLoadJSBySels:function(f,e,c,d){$j(document).ready(function(){var g=false;$j(f.join(", ")).one(e,function(i){var h=$j(this);if(!g){kjs.require(c,function(){if(d){d()}h.trigger(i.type)});g=true}if(i.type=="click"||i.type=="submit"){i.preventDefault()}})})},lazyLoadJSByFns:function(d,c,e){$j(document).ready(function(){d.forEach(function(k){var g=false;var f=k.split(".");var i=f.pop();jive.namespace.apply(window,[f.join(".")]);function h(l){return l.reduce(function(n,m){return n[m]},window)}var j=h(f);j[i]=function(){kjs.require(c,function(){if(!g){if(e){e()}h(f)[i](arguments);g=true}})}})})},extractDataAttributes:(function(c,e){function d(f){if(e.test(f)){return f==="true"?true:false}else{return f}}return function(g,h){var f={};$j.each($j(g)[0].attributes,function(){if(c.test(this.name)){var i=this.name.replace(c,"");!h&&(i=i.camelize());f[i]=d(this.value)}});return f}})(/^data-/,/^(true|false)$/i),separateScripts:(function(){var e=/(<script[^>]*>)([\s\S]*?)<\/script>/ig,c=/\s+src=["']([^'">]+)['"]/i,f=/\s+type=["']([^'">]+)['"]/i,d=/^text\/javascript/i;return function(h,j){var g=0;function i(){g+=1;return"separateScripts-dep-"+(new Date()).getTime()+"-"+g}var k=i(),m=[k];var l=h.replace(e,function(p,o,n){var q=(o.match(f)||[])[1],s=(o.match(c)||[])[1],r;if(!q||q.match(d)){if(s&&!j){kjs.load(s,m.slice(-1).concat(k));m.push(s)}else{if(n&&!j){r=i();kjs.run(b.globalEval.bind(b,n),m.slice(-1).concat(k),[r]);m.push(r)}}return""}else{return p}});return[l,function(n){if(n){kjs.run(n,m.slice(-1).concat(k))}kjs.sat(k)}]}})(),withoutScripts:function(c){var d=jive.util.separateScripts(c,true);return d[0]},fitTextWithinNode:function(j,f,h){var e=0,g=j.length,i=g,c=i*0.2,d;do{if(i<j.length){f.text(j.slice(0,i)+"\u2026")}else{f.text(j.slice(0,i))}if((f.outerHeight()>h.outerHeight())||f.outerWidth()>h.outerWidth()){g=i}else{e=i}d=i;i=Math.floor((e+g)/2)}while(e<g-c||d!=e)}}})(jQuery);
;
jive.namespace("i18n");jive.i18n={sub:function(b,a){if(typeof a=="string"||typeof a=="undefined"){a=Array.prototype.slice.call(arguments,1)}return b.replace(/\{([^{}]+)\}/g,function(e,c){var d=c.match(/^\d+$/)?parseInt(c,10):c;if(typeof a[d]!="undefined"){return a[d]}else{return e}})},soy:function(e,b){var a={zero:0,one:1,two:2,three:3,four:4,five:5,six:6};var c=e.string,d={};Object.keys(e).filter(function(f){return f!="string"}).forEach(function(f){if(typeof a[f]!="undefined"&&typeof d[a[f]]=="undefined"){d[a[f]]=e[f]}d[f]=e[f]});b.append(jive.i18n.sub(c,d))}};
;
jive.ext.x.xMac=(navigator.appVersion.indexOf("Mac")!=-1);jive.ext.x.xWindows=!jive.ext.x.xMac;jive.ext.x.xVersion="3.15.1";jive.ext.x.xNN4=false;jive.ext.x.xOp7=false;jive.ext.x.xOp5or6=false;jive.ext.x.xIE4Up=false;jive.ext.x.xIE4=false;jive.ext.x.xIE5=false;jive.ext.x.xUA=navigator.userAgent.toLowerCase();jive.ext.x.xIE=false;jive.ext.x.xSafari=false;if(window.opera){jive.ext.x.xOp7=(jive.ext.x.xUA.indexOf("opera 7")!=-1||jive.ext.x.xUA.indexOf("opera/7")!=-1);if(!jive.ext.x.xOp7){jive.ext.x.xOp5or6=(jive.ext.x.xUA.indexOf("opera 5")!=-1||jive.ext.x.xUA.indexOf("opera/5")!=-1||jive.ext.x.xUA.indexOf("opera 6")!=-1||jive.ext.x.xUA.indexOf("opera/6")!=-1)}}else{if(document.all){jive.ext.x.xIE4Up=jive.ext.x.xUA.indexOf("msie")!=-1&&parseInt(navigator.appVersion)>=4;jive.ext.x.xIE4=jive.ext.x.xUA.indexOf("msie 4")!=-1;jive.ext.x.xIE5=jive.ext.x.xUA.indexOf("msie 5")!=-1;jive.ext.x.xIE6=jive.ext.x.xUA.indexOf("msie 6")!=-1;jive.ext.x.xIE7=jive.ext.x.xUA.indexOf("msie 7")!=-1;jive.ext.x.xIE4Up=jive.ext.x.xIE4||jive.ext.x.xIE5||jive.ext.x.xIE6;jive.ext.x.xIE=true}}if(jive.ext.x.xUA.indexOf("safari")!=-1||jive.ext.x.xUA.indexOf("Safari")!=-1){jive.ext.x.xSafari=true}jive.ext.x.xGetElementById=function(b,a){if(!$obj(a)){a=b.ownerDocument}if(b==null){return b}if(typeof(b)!="string"){return b}if(a.getElementById){b=a.getElementById(b)}else{if(a.all){b=a.all[b]}else{b=null}}return b};jive.ext.x.xParent=function(c,b){if(!(c=jive.ext.x.xGetElementById(c))){return null}var a=null;if(!b&&$def(c.offsetParent)){a=c.offsetParent}else{if($def(c.parentNode)){a=c.parentNode}else{if($def(c.parentElement)){a=c.parentElement}}}return a};var $def=function(a){return(typeof(a)!="undefined")};var $obj=function(a){return(typeof(a)=="object")};var $arr=function(a){return a!=null&&$obj(a)&&$def(a.splice)};$str=function(a){return typeof(a)=="string"};var $num=function(a){return typeof(a)=="number"};jive.ext.x.xShow=function(a){if(!(a=jive.ext.x.xGetElementById(a))){return}if(a.style&&$def(a.style.visibility)){a.style.visibility="visible"}};jive.ext.x.xHide=function(a){if(!(a=jive.ext.x.xGetElementById(a))){return}if(a.style&&$def(a.style.visibility)){a.style.visibility="hidden"}};jive.ext.x.xDisplay=function(b,a){if(!(b=jive.ext.x.xGetElementById(b))){return null}if(b.style&&$def(b.style.display)){if($str(a)){b.style.display=a}return b.style.display}return null};jive.ext.x.xDisplayNone=function(a){if(!(a=jive.ext.x.xGetElementById(a))){return}if(a.style&&$def(a.style.display)){a.style.display="none"}};jive.ext.x.xDisplayBlock=function(a){if(!(a=jive.ext.x.xGetElementById(a))){return}if(a.style&&$def(a.style.display)){a.style.display="block"}};jive.ext.x.xDisplayInline=function(a){if(!(a=jive.ext.x.xGetElementById(a))){return}if(a.style&&$def(a.style.display)){a.style.display="inline"}};jive.ext.x.xZIndex=function(b,a){if(!(b=jive.ext.x.xGetElementById(b))){return 0}if(b.style&&$def(b.style.zIndex)){if($num(a)){b.style.zIndex=a}a=parseInt(b.style.zIndex)}return a};jive.ext.x.xMoveTo=function(b,a,c){jive.ext.x.xLeft(b,a);jive.ext.x.xTop(b,c)};jive.ext.x.xLeft=function(c,a){if(!(c=jive.ext.x.xGetElementById(c))){return 0}var b=$def(c.style);if(b&&$str(c.style.left)){if($num(a)){c.style.left=a+"px"}else{a=parseInt(c.style.left);if(isNaN(a)){a=0}}}else{if(b&&$def(c.style.pixelLeft)){if($num(a)){c.style.pixelLeft=a}else{a=c.style.pixelLeft}}}return a};jive.ext.x.xTop=function(b,c){if(!(b=jive.ext.x.xGetElementById(b))){return 0}var a=$def(b.style);if(a&&$str(b.style.top)){if($num(c)){b.style.top=c+"px"}else{c=parseInt(b.style.top);if(isNaN(c)){c=0}}}else{if(a&&$def(b.style.pixelTop)){if($num(c)){b.style.pixelTop=c}else{c=b.style.pixelTop}}}return c};jive.ext.x.xPageX=function(a){var b=0;if(a.offsetParent){while(1){b+=a.offsetLeft;if(!a.offsetParent){break}a=a.offsetParent}}else{if(a.x){b+=a.x}}return b};jive.ext.x.xPageY=function(b){var a=0;if(b.offsetParent){while(1){a+=b.offsetTop;if(!b.offsetParent){break}b=b.offsetParent}}else{if(b.y){a+=b.y}}return a};jive.ext.x.xScrollLeft=function(b){var c=0,a=b.ownerDocument;if(!(b=jive.ext.x.xGetElementById(b))){if(a.documentElement&&a.documentElement.scrollLeft){c=a.documentElement.scrollLeft}else{if(a.body&&$def(a.body.scrollLeft)){c=a.body.scrollLeft}}}else{if($num(b.scrollLeft)){c=b.scrollLeft}}return c};jive.ext.x.xScrollTop=function(b){var c=0,a=b.ownerDocument;if(!(b=jive.ext.x.xGetElementById(b))){if(a.documentElement&&a.documentElement.scrollTop){c=a.documentElement.scrollTop}else{if(a.body&&$def(a.body.scrollTop)){c=a.body.scrollTop}}}else{if($num(b.scrollTop)){c=b.scrollTop}}return c};jive.ext.x.xWidth=function(g,b){if(!(g=jive.ext.x.xGetElementById(g))){return 0}if($num(b)){if(b<0){b=0}else{b=Math.round(b)}}else{b=-1}var d=$def(g.style);if(g==document||g.tagName.toLowerCase()=="html"||g.tagName.toLowerCase()=="body"){b=jive.ext.x.xClientWidth()}else{if(d&&$def(g.offsetWidth)&&$str(g.style.width)){if(b>=0){var f=0,i=0,h=0,c=0;if(document.compatMode=="CSS1Compat"){var a=jive.ext.x.xGetCS;f=a(g,"padding-left",1);if(f!==null){i=a(g,"padding-right",1);h=a(g,"border-left-width",1);c=a(g,"border-right-width",1)}else{if($def(g.offsetWidth,g.style.width)){g.style.width=b+"px";f=g.offsetWidth-b}}}b-=(f+i+h+c);if(isNaN(b)||b<0){return}else{g.style.width=b+"px"}}b=g.offsetWidth}else{if(d&&$def(g.style.pixelWidth)){if(b>=0){g.style.pixelWidth=b}b=g.style.pixelWidth}}}return b};jive.ext.x.xCamelize=function(d){var e,g,b=d.split("-");var f=b[0];for(e=1;e<b.length;++e){g=b[e].charAt(0);f+=b[e].replace(g,g.toUpperCase())}return f};jive.ext.x.xGetCS=function(f,d){try{if(!(f=jive.ext.x.xGetElementById(f))){return null}var c,a="undefined",b=f.ownerDocument.defaultView;if(b&&b.getComputedStyle){c=b.getComputedStyle(f,"");if(c){a=c.getPropertyValue(d)}}else{if(f.currentStyle){a=f.currentStyle[jive.ext.x.xCamelize(d)]}else{return null}}if($str(a)&&a.indexOf("px")>0){a=a.substr(0,a.indexOf("px"));a=parseInt(a)}return a}catch(f){return""}};jive.ext.x.xGetCSFunc=function(f,d){try{if(!(f=jive.ext.x.xGetElementById(f))){return null}var c,a="undefined",b=f.ownerDocument.defaultView;if(b&&b.getComputedStyle){c=b.getComputedStyle(f,"");if(c){return function(e){return function(h){var g=e.getPropertyValue(h);if($str(g)&&g.indexOf("px")>0){g=g.substr(0,g.indexOf("px"));g=parseInt(g)}return g}}(c)}}else{if(f.currentStyle){return function(e){return function(h){var g=e[jive.ext.x.xCamelize(h)];if($str(g)&&g.indexOf("px")>0){g=g.substr(0,g.indexOf("px"));g=parseInt(g)}return g}}(f.currentStyle)}else{return function(){return"undefined"}}}}catch(f){return function(){return"undefined"}}};jive.ext.x.xSetCH=function(e,d){var g=0,b=0,a=0,h=0,f=e.ownerDocument;if($def(f.defaultView)&&$def(f.defaultView.getComputedStyle)){g=jive.ext.x.xGetCS(e,"padding-top");b=jive.ext.x.xGetCS(e,"padding-bottom");a=jive.ext.x.xGetCS(e,"border-top-width");h=jive.ext.x.xGetCS(e,"border-bottom-width")}else{if($def(e.currentStyle,f.compatMode)){if(f.compatMode=="CSS1Compat"){g=parseInt(e.currentStyle.paddingTop);b=parseInt(e.currentStyle.paddingBottom);a=parseInt(e.currentStyle.borderTopWidth);h=parseInt(e.currentStyle.borderBottomWidth)}}else{if($def(e.offsetHeight,e.style.height)){e.style.height=d+"px";g=e.offsetHeight-d}}}if(isNaN(g)){g=0}if(isNaN(b)){b=0}if(isNaN(a)){a=0}if(isNaN(h)){h=0}var c=d-(g+b+a+h);if(isNaN(c)||c<0){return}else{e.style.height=c+"px"}};jive.ext.x.xHeight=function(c,b){if(!(c=jive.ext.x.xGetElementById(c))){return 0}if($num(b)){if(b<0){b=0}else{b=Math.round(b)}}else{b=0}var a=$def(c.style);if(a&&$def(c.offsetHeight)&&$str(c.style.height)){if(b){jive.ext.x.xSetCH(c,b)}b=c.offsetHeight}else{if(a&&$def(c.style.pixelHeight)){if(b){c.style.pixelHeight=b}b=c.style.pixelHeight}}return b};jive.ext.x.xHasPoint=function(i,e,d,b,c,a,f){if(!$num(b)){b=c=a=f=0}else{if(!$num(c)){c=a=f=b}else{if(!$num(a)){f=c;a=b}}}var h=jive.ext.x.xPageX(i),g=jive.ext.x.xPageY(i);return(e>=h+f&&e<=h+jive.ext.x.xWidth(i)-c&&d>=g+b&&d<=g+jive.ext.x.xHeight(i)-a)};jive.ext.x.xClientWidth=function(){var a=0;if(jive.ext.x.xOp5or6){a=window.innerWidth}else{if(!window.opera&&document.documentElement&&document.documentElement.clientWidth){a=document.documentElement.clientWidth}else{if(document.body&&document.body.clientWidth){a=document.body.clientWidth}else{if($def(window.innerWidth,window.innerHeight,document.height)){a=window.innerWidth;if(document.height>window.innerHeight){a-=16}}}}}return a};jive.ext.x.xClientHeight=function(){var a=0;if(jive.ext.x.xOp5or6){a=window.innerHeight}else{if(!window.opera&&document.documentElement&&document.documentElement.clientHeight){a=document.documentElement.clientHeight}else{if(document.body&&document.body.clientHeight){a=document.body.clientHeight}else{if($def(window.innerWidth,window.innerHeight,document.width)){a=window.innerHeight;if(document.width>window.innerWidth){a-=16}}}}}return a};jive.ext.x.xDocHeight=function(h){if(h){var c=h.body,g=h.documentElement}else{var c=document.body,g=document.documentElement}var d=0,i=0,f=0,a=0;if(g){d=g.scrollHeight;i=g.offsetHeight}if(c){f=c.scrollHeight;a=c.offsetHeight}return Math.max(d,i,f,a)};
;
jive.ext.x.xAddEventListener=function(e,eventType,eventListener,useCapture){if(!(e=jive.ext.x.xGetElementById(e))){return}eventType=eventType.toLowerCase();if((!jive.ext.x.xIE4Up&&!jive.ext.x.xOp7)&&e==window){if(eventType=="resize"){jive.ext.x.xPCW=jive.ext.x.xClientWidth();jive.ext.x.xPCH=jive.ext.x.xClientHeight();jive.ext.x.xREL=eventListener;jive.ext.x.xResizeEvent();return}if(eventType=="scroll"){jive.ext.x.xPSL=jive.ext.x.xScrollLeft();jive.ext.x.xPST=jive.ext.x.xScrollTop();jive.ext.x.xSEL=eventListener;jive.ext.x.xScrollEvent();return}}if(e.addEventListener){e.addEventListener(eventType,eventListener,useCapture)}else{if(e.attachEvent){e.attachEvent("on"+eventType,eventListener)}else{if(e.captureEvents){if(useCapture||(eventType.indexOf("mousemove")!=-1)){e.captureEvents(eval("Event."+eventType.toUpperCase()))}var eh="e.on"+eventType+"=eventListener";eval(eh)}else{var eh="e.on"+eventType+"=eventListener";eval(eh)}}}};jive.ext.x.xRemoveEventListener=function(e,eventType,eventListener,useCapture){if(!(e=jive.ext.x.xGetElementById(e))){return}eventType=eventType.toLowerCase();if((!jive.ext.x.xIE4Up&&!jive.ext.x.xOp7)&&e==window){if(eventType=="resize"){jive.ext.x.xREL=null;return}if(eventType=="scroll"){jive.ext.x.xSEL=null;return}}var eh="e.on"+eventType+"=null";if(e.removeEventListener){e.removeEventListener(eventType,eventListener,useCapture)}else{if(e.detachEvent){e.detachEvent("on"+eventType,eventListener)}else{if(e.releaseEvents){if(useCapture||(eventType.indexOf("mousemove")!=-1)){e.releaseEvents(eval("Event."+eventType.toUpperCase()))}eval(eh)}else{eval(eh)}}}};jive.ext.x.xStopPropagation=function(a){if(a&&a.stopPropagation){a.stopPropagation()}else{if(window.event){window.event.cancelBubble=true}}};jive.ext.x.xEvent=function(b){this.type="";this.target=null;this.keyCode=0;var f=b?b:window.event;if(!f){return}if(f.type){this.type=f.type}if(f.target){this.target=f.target}else{if(f.srcElement){this.target=f.srcElement}}var d=null;var c=null;this.pageX=function(){if(d==null){if(jive.ext.x.xOp5or6){d=f.clientX;c=f.clientY}else{if(jive.ext.x.xDef(f.clientX,f.clientY)){d=f.clientX+jive.ext.x.xScrollLeft();c=f.clientY+jive.ext.x.xScrollTop()}}}return d};this.pageY=function(){if(c==null){if(jive.ext.x.xOp5or6){d=f.clientX;c=f.clientY}else{if(jive.ext.x.xDef(f.clientX,f.clientY)){d=f.clientX+jive.ext.x.xScrollLeft();c=f.clientY+jive.ext.x.xScrollTop()}}}return c};var a=null;var g=null;this.offsetX=function(){if(a==null){if(jive.ext.x.xDef(f.layerX,f.layerY)){a=f.layerX;g=f.layerY}else{if(jive.ext.x.xDef(f.offsetX,f.offsetY)){a=f.offsetX;g=f.offsetY}else{a=this.pageX-jive.ext.x.xPageX(this.target);g=this.pageY-jive.ext.x.xPageY(this.target)}}}return a};this.offsetY=function(){if(g==null){if(jive.ext.x.xDef(f.layerX,f.layerY)){a=f.layerX;g=f.layerY}else{if(jive.ext.x.xDef(f.offsetX,f.offsetY)){a=f.offsetX;g=f.offsetY}else{a=this.pageX-jive.ext.x.xPageX(this.target);g=this.pageY-jive.ext.x.xPageY(this.target)}}}return g};if(f.keyCode){this.keyCode=f.keyCode}else{if(jive.ext.x.xDef(f.which)){this.keyCode=f.which}}};jive.ext.x.xResizeEvent=function(){if(jive.ext.x.xREL){setTimeout("jive.ext.x.xResizeEvent()",250)}var a=jive.ext.x.xClientWidth(),b=jive.ext.x.xClientHeight();if(jive.ext.x.xPCW!=a||jive.ext.x.xPCH!=b){jive.ext.x.xPCW=a;jive.ext.x.xPCH=b;if(jive.ext.x.xREL){jive.ext.x.xREL()}}};jive.ext.x.xScrollEvent=function(){if(jive.ext.x.xSEL){setTimeout("jive.ext.x.xScrollEvent()",250)}var a=jive.ext.x.xScrollLeft(),b=jive.ext.x.xScrollTop();if(jive.ext.x.xPSL!=a||jive.ext.x.xPST!=b){jive.ext.x.xPSL=a;jive.ext.x.xPST=b;if(jive.ext.x.xSEL){jive.ext.x.xSEL()}}};
;
jive.ext.x.xTimerMgr=function(){this.set=function(d,f,c,b,e){return(this.timers[this.timers.length]=new a(d,f,c,b,e))};this.timers=new Array();this.running=false;this.run=function(){if(this.running){return}this.running=true;var e,c,f=new Date(),b=f.getTime();for(e=0;e<this.timers.length;++e){c=this.timers[e];if(c&&c.running){c.elapsed=b-c.time0;if(c.elapsed>=c.preset){c.obj[c.mthd](c);if(c.type.charAt(0)=="i"){c.time0=b}else{c.stop()}}}}this.running=false};function a(b,e,f,c,d){this.stop=function(){this.running=false};this.start=function(){this.running=true};this.reset=function(){var g=new Date();this.time0=g.getTime();this.elapsed=0;this.running=true};this.data=d;this.type=b;this.obj=e;this.mthd=f;this.preset=c;this.reset()}};jive.ext.x.xTimer=new jive.ext.x.xTimerMgr();jive.ext.x.xAddEventListener(window,"load",function(){setInterval("jive.ext.x.xTimer.run()",250)});
;
jive.ext.y.HashTable=function(){var b=this;var a=0;this.getCount=function(){return a};this.undefined=new Object();this.cache=new Array();this.put=function(c,d){b.clear(c);b.cache[c]=d;a=a+1};this.get=function(c){if(typeof(b.cache[c])!="undefined"&&b.cache[c]!=b.undefined){return b.cache[c]}else{return false}};this.clear=function(c){if(b.cache[c]!=b.undefined&&b.cache[c]!=null){a=a-1}b.cache[c]=b.undefined};this.toArray=function(c){if(typeof c!="function"){c=function(){return true}}return Object.values(b.cache).filter(function(d){return c(d)&&d!=b.undefined&&d!==null})};this.toKeysArray=function(c){return Object.keys(b.cache)}};jive.ext.y.yBottom=function(b,c){if(!(b=jive.ext.x.xGetElementById(b))){return 0}var a=$def(b.style);if(a&&$str(b.style.bottom)){if($num(c)){b.style.bottom=c+"px"}else{c=parseInt(b.style.bottom);if(isNaN(c)){c=0}}}else{if(a&&$def(b.style.pixelBottom)){if($num(c)){b.style.pixelBottom=c}else{c=b.style.pixelBottom}}}return c};jive.ext.y.yOpacity=function(a,b){if(!(a=jive.ext.x.xGetElementById(a))){return}if(jotlet.external.x.xNum(b)){if(b<0){b=0}else{if(b>100){b=100}else{b=Math.round(b)}}if(jotlet.external.x.xDef(a.style.MozOpacity)){a.style.MozOpacity=(b/100);return a.style.MozOpacity*100}if(jotlet.external.x.xDef(a.style.opacity)){a.style.opacity=(b/100);return a.style.opacity*100}if(jotlet.external.x.xStr(a.style.filter)){a.style.filter="alpha(opacity="+(b)+")";a.yOpacity=b;return a.yOpacity}}if(jotlet.external.x.xDef(a.style.MozOpacity)){return a.style.MozOpacity*100}if(jotlet.external.x.xDef(a.style.opacity)){return a.style.opacity*100}if(jotlet.external.x.xDef(a.filters)&&jotlet.external.x.xDef(a.filters.alpha)&&jotlet.external.x.xDef(a.filters.alpha.opacity)){return a.filters.alpha.opacity}};
;
jive.ext.y.yAjax=function(a,d){var f=false;if(window.XMLHttpRequest){f=new XMLHttpRequest();if(f.overrideMimeType){f.overrideMimeType("text/xml")}}else{if(window.ActiveXObject){try{f=new ActiveXObject("Msxml2.XMLHTTP")}catch(c){try{f=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}}}if(!f){return false}f.onreadystatechange=b;function b(){try{if(f.readyState==4){if(f.status==200){a(f.responseText)}else{d()}}}catch(g){}}this.POST=function(e,g){f.open("POST",e,true);f.setRequestHeader("Content-type","application/x-www-form-urlencoded");f.setRequestHeader("Content-length",g.length);f.setRequestHeader("Connection","close");f.send(g)}};
;
jive.xml._Xparse_count=0;jive.xml._Xparse_index=new Array();jive.xml._entity=function(b){var a=new Array();a=b.split("&lt;");b=a.join("<");a=b.split("&gt;");b=a.join(">");a=b.split("&quot;");b=a.join('"');a=b.split("&apos;");b=a.join("'");a=b.split("&amp;");b=a.join("&");return b};jive.xml._strip=function(b){var a=new Array();a=b.split("\n");b=a.join("");a=b.split(" ");b=a.join("");a=b.split("\t");b=a.join("");return b};jive.xml._normalize=function(b){var a=new Array();a=b.split("\n");b=a.join(" ");a=b.split("\t");b=a.join(" ");return b};jive.xml._element=function(){this.type="element";this.tagName=new String();this.attributes=new Array();this.childNodes=new Array();this.nodeValue="";this.uid=jive.xml._Xparse_count++;jive.xml._Xparse_index[this.uid]=this};jive.xml._chardata=function(){this.type="chardata";this.value=new String()};jive.xml._pi=function(){this.type="pi";this.value=new String()};jive.xml._comment=function(){this.type="comment";this.value=new String()};jive.xml._frag=function(){this.str=new String();this.ary=new Array();this.end=new String()};jive.xml._tag_element=function(i){var j=i.str.indexOf(">");var f=(i.str.substring(j-1,j)=="/");if(f){j-=1}var g=jive.xml._normalize(i.str.substring(1,j));var c=g.indexOf(" ");var a=new String();var b=new String();if(c!=-1){b=g.substring(0,c);a=g.substring(c+1,g.length)}else{b=g}var h=i.ary.length;i.ary[h]=new jive.xml._element();i.ary[h].tagName=jive.xml._strip(b);if(a.length>0){i.ary[h].attributes=jive.xml._attribution(a)}if(!f){var e=new jive.xml._frag();e.str=i.str.substring(j+1,i.str.length);e.end=b;var d=e;e=jive.xml._compile(e);i.ary[h].childNodes=e.ary;i.ary[h].nodeValue=d;i.str=e.str}else{i.str=i.str.substring(j+2,i.str.length)}return i};jive.xml._tag_pi=function(d){var c=d.str.indexOf("?>");var b=d.str.substring(2,c);var a=d.ary.length;d.ary[a]=new jive.xml._pi();d.ary[a].nodeValue=b;d.str=d.str.substring(c+2,d.str.length);return d};jive.xml._tag_comment=function(d){var c=d.str.indexOf("-->");var b=d.str.substring(4,c);var a=d.ary.length;d.ary[a]=new jive.xml._comment();d.ary[a].nodeValue=b;d.str=d.str.substring(c+3,d.str.length);return d};jive.xml._tag_cdata=function(d){var c=d.str.indexOf("]]>");var b=d.str.substring(9,c);var a=d.ary.length;d.ary[a]=new jive.xml._chardata();d.ary[a].nodeValue=b;d.str=d.str.substring(c+3,d.str.length);return d};jive.xml._attribution=function(e){var f=new Array();while(1){var i=e.indexOf("=");if(e.length==0||i==-1){return f}var h=e.indexOf("'");var g=e.indexOf('"');var a=new Number();var c=new String();if((h<g&&h!=-1)||g==-1){a=h;c="'"}if((g<h||h==-1)&&g!=-1){a=g;c='"'}var j=e.indexOf(c,a+1);var d=e.substring(a+1,j);var b=jive.xml._strip(e.substring(0,i));f[b]=jive.xml._entity(d);e=e.substring(j+1,e.length)}return""};jive.xml._compile=function(c){while(1){if(c.str.length==0){return c}var a=c.str.indexOf("<");if(a!=0){var b=c.ary.length;c.ary[b]=new jive.xml._chardata();if(a==-1){c.ary[b].nodeValue=jive.xml._entity(c.str);c.str=""}else{c.ary[b].nodeValue=jive.xml._entity(c.str.substring(0,a));c.str=c.str.substring(a,c.str.length)}}else{if(c.str.substring(1,2)=="?"){c=jive.xml._tag_pi(c)}else{if(c.str.substring(1,4)=="!--"){c=jive.xml._tag_comment(c)}else{if(c.str.substring(1,9)=="![CDATA["){c=jive.xml._tag_cdata(c)}else{if(c.str.substring(1,c.end.length+3)=="/"+c.end+">"||jive.xml._strip(c.str.substring(1,c.end.length+3))=="/"+c.end){c.str=c.str.substring(c.end.length+3,c.str.length);c.end="";return c}else{c=jive.xml._tag_element(c)}}}}}}return""};jive.xml._prolog=function(c){var a=new Array();a=c.split("\r\n");c=a.join("\n");a=c.split("\r");c=a.join("\n");var e=c.indexOf("<");if(c.substring(e,e+3)=="<?x"||c.substring(e,e+3)=="<?X"){var b=c.indexOf("?>");c=c.substring(b+2,c.length)}var e=c.indexOf("<!DOCTYPE");if(e!=-1){var b=c.indexOf(">",e)+1;var d=c.indexOf("[",e);if(d<b&&d!=-1){b=c.indexOf("]>",e)+2}c=c.substring(b,c.length)}return c};jive.xml.Xparse=function(b){var c=new jive.xml._frag();c.str=jive.xml._prolog(b);var a=new Object();c=jive.xml._compile(c);if(c.ary.length>0){a.documentElement=c.ary[0]}else{a.documentElement=null}a.tagName="ROOT";a.index=jive.xml._Xparse_index;jive.xml._Xparse_index=new Array();return a};
;
jive.xml.XMLParser=function(){var g=null;if(window.ActiveXObject){var a=["MSXML4.DOMDocument","MSXML3.DOMDocument","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XmlDom"];var d=null;if(d==null){var c=false;for(var b=0;b<a.length&&!c;b++){try{d=new ActiveXObject(a[b]);c=true}catch(f){}}}if(d==null){alert("No XML parser available");return}g=function(e){d.async="false";d.loadXML(e);return d}}if(g==null&&window.DOMParser){var d=new DOMParser();g=function(i){var h=d.parseFromString(i,"text/xml");var e=h.documentElement;if((e.tagName=="parserError")||(e.namespaceURI=="http://www.mozilla.org/newlayout/xml/parsererror.xml")){return null}return h}}else{if(g==null&&document.implementation&&document.implementation.createDocument){var d=document.implementation.createDocument("","",null);g=function(e){d.async="false";d.loadXML(e);return d}}else{g=function(e){return jive.xml.Xparse(e)}}}this.parse=function(e){if(g!=null){return g(e)}else{throw"no xml parser defined"}}};
;
jive.model.Ajax=function(c,a,d){var b=this;this.POST=function(f,g){var e=function(j){try{var k=null;if(!$obj(k)||k==null||!$obj(k.documentElement)||k.documentElement==null){var m=new jive.xml.XMLParser();try{k=m.parse(j)}catch(l){d("XML Parse exception");return}}if($obj(k)&&k!=null&&$obj(k.documentElement)&&k.documentElement!=null){k=k.documentElement}else{d("XML Parse exception");return}if(k.tagName=="br"){d("Server Exception")}else{if(k.tagName=="NotLoggedInException"){c.handleLogIn(function(){b.POST(f,g)})}else{c.poke();a(k)}}}catch(l){alert("ajax error:"+l)}};var i=function(){d("500 Status")};var h=new jive.ext.y.yAjax(e,i);h.POST(f,g)}};
;
jive.model.Controller=function(){var h=this;var b=new Object();b.childNodes=new Array();this.newAjax=function(p,q){return new jive.model.Ajax(h,p,q)};var e=new jive.model.LoginManager(h);this.getLoginManager=function(){return e};var f=new jive.model.SettingsManager(h);this.getSettingsManager=function(){return f};var k=new jive.model.RefreshManager(h);this.getRefreshManager=function(){return k};var g=new jive.model.LanguageManager(h,default_lang);this.getLanguageManager=function(){return g};var o=new jive.model.ProjectCache(h);this.getProjectCache=function(){return o};var i=new jive.model.UserCache(h);this.getUserCache=function(){return i};var d=new jive.model.TaskCache(h);this.getTaskCache=function(){return d};var l=new jive.model.PlacesCache(h);this.getPlacesCache=function(){return l};var a=null;this.getTaskManager=function(){return a};this.setTaskManager=function(p){a=p};var c=null;this.getCheckPointManager=function(){return c};this.setCheckPointManager=function(p){c=p};var n=null;this.getUserID=function(){return n};this.setUserID=function(p){n=p};this.handleLogIn=function(p){h.getRefreshManager().loggedOut()};this.poke=function(){h.getRefreshManager().poke()};this.isCalendarVisibleHuh=function(p){return true};this.isReadOnly=function(){return false};this.addListener=function(p){j.push(p)};var j=new Array();var m=new Array();this.addListenerAction=function(p){m.push(p)};this.executeListenerActions=function(){while(m.length>0){m[0]();m.splice(0,1)}};this.removeListener=function(q){for(var p=0;p<j.length;p++){if(j[p]==q){j.splice(p,1)}}};this.notifyTinyMCELoaded=function(){for(var p=0;p<j.length;p++){j[p].tinyMCELoaded()}h.executeListenerActions()}};
;
jive.model.TaskController=function(){var f=this;var l=null;this.getProjectID=function(){return this.projectID};this.setProjectID=function(n){this.projectID=n};this.getCanCreate=function(){return this.canCreate};this.setCanCreate=function(n){this.canCreate=n};var j=null;this.getContainerID=function(){return this.containerID};this.setContainerID=function(n){this.containerID=n};var g=null;this.getCompleteURL=function(){return this.completeURL};this.setCompleteURL=function(n){this.completeURL=n};var c=null;this.getIncompleteURL=function(){return this.incompleteURL};this.setIncompleteURL=function(n){this.incompleteURL=n};var h=null;this.getTakeURL=function(){return this.takeURL};this.setTakeURL=function(n){this.takeURL=n};var i=null;this.getDeleteURL=function(){return this.deleteURL};this.setDeleteURL=function(n){this.deleteURL=n};var k=null;this.getDeleteConfirmMsg=function(){return this.deleteConfirmMsg};this.setDeleteConfirmMsg=function(n){this.deleteConfirmMsg=n};var d=null;this.getUnauthMsg=function(){return this.unauthMsg};this.setUnauthMsg=function(n){this.unauthMsg=n};var e=null;this.getErrorMsg=function(){return this.errorMsg};this.setErrorMsg=function(n){this.errorMsg=n};var a=null;this.setCreateURL=function(n){this.createURL=n};this.getCreateURL=function(){return this.createURL};var b=null;this.setDateI18nURL=function(n){this.dateI18nURL=n};this.getDateI18nURL=function(){return this.dateI18nURL};var m={delete_task_msg:"This action will delete the task and all it's subtask. Are you sure?",delete_task:"Delete Task",delete_sub_task:"Delete Sub Tasks",cancel:"Cancel",complete_task_msg:"This action will complete the task and all it's subtask. Are you sure?",complete_task:"Complete Task",complete_sub_task:"Complete Sub Tasks",incomplete_task_msg:"This action will mark the task and all it's subtask as incomplete. Are you sure?",incomplete_task:"Mark I",complete_sub_task:"Complete Sub Tasks",assign_task_msg:"This action will assign this task and all it's subtask. Are you sure?",assign_task:"Assign Task",assign_sub_task:"Assign Sub Tasks"};this.setI18n=function(n){m=n};this.markTaskComplete=function(o,n){if(n){$j("#dialog-confirm-message").text(m.complete_task_msg);$j(function(){var p={};p[m.complete_task]=function(){$j(this).dialog("close");f.ajaxCompleteTask(o,false)};p[m.complete_sub_task]=function(){$j(this).dialog("close");f.ajaxCompleteTask(o,true)};p[m.cancel]=function(){$j(this).dialog("close")};$j("#dialog-confirm").dialog({autoOpen:false,resizable:false,height:150,width:400,modal:true,buttons:p});$j("#dialog-confirm").dialog("open")})}else{f.ajaxCompleteTask(o,false)}};this.markTaskIncomplete=function(n){$j.post(this.getIncompleteURL(),{task:n},f.reload)};this.takeTask=function(n){$j.ajax({url:this.getTakeURL(),type:"POST",data:{task:n},success:function(){f.reload()},error:function(o){if(o.status==403){alert(f.getUnauthMsg())}else{if(o.status==500){alert(f.getErrorMsg())}}}})};this.deleteTask=function(o,n){if(n){$j("#dialog-confirm-message").text(m.delete_task_msg);$j(function(){var p={};p[m.delete_task]=function(){$j(this).dialog("close");f.ajaxDeleteTask(o,false)};p[m.delete_sub_task]=function(){$j(this).dialog("close");f.ajaxDeleteTask(o,true)};p[m.cancel]=function(){$j(this).dialog("close")};$j("#dialog-confirm").dialog({autoOpen:false,resizable:false,height:150,width:400,modal:true,buttons:p});$j("#dialog-confirm").dialog("open")})}else{f.ajaxDeleteTask(o,false)}};this.ajaxCompleteTask=function(o,n){$j.ajax({url:f.getCompleteURL(),type:"POST",data:{task:o,applyToChildren:n},success:function(){f.reload()},error:function(p){if(p.status==403){alert(f.getUnauthMsg())}else{if(p.status==500){alert(f.getErrorMsg())}}}})};this.addTask=function(n){document.location.href=f.getCreateURL()+"&dueDateTime="+n};this.dateI18nTask=function(n,o){$j.ajax({url:f.getDateI18nURL(),type:"POST",data:{time:n.getTime()},dataType:"json",success:function(q,p){o(q.date)},error:function(p){if(p.status==403){alert(f.getUnauthMsg())}else{if(p.status==500){alert(f.getErrorMsg())}}}})};this.ajaxDeleteTask=function(o,n){$j.ajax({url:f.getDeleteURL(),type:"POST",data:{task:o,applyToChildren:n},success:function(){f.reload()},error:function(p){if(p.status==403){alert(f.getUnauthMsg())}else{if(p.status==500){alert(f.getErrorMsg())}}}})};this.reload=function(){window.location.reload()}};
;
jive.model.CheckPointController=function(){var e=this;var c=null;this.getProjectID=function(){return this.projectID};this.setProjectID=function(i){this.projectID=i};this.getCanCreate=function(){return this.canCreate};this.setCanCreate=function(i){this.canCreate=i};var b=null;this.getContainerID=function(){return this.containerID};this.setContainerID=function(i){this.containerID=i};var g=null;this.getDeleteURL=function(){return this.deleteURL};this.setDeleteURL=function(i){this.deleteURL=i};var f=null;this.getDeleteConfirmMsg=function(){return this.deleteConfirmMsg};this.setDeleteConfirmMsg=function(i){this.deleteConfirmMsg=i};var h=null;this.getUnauthMsg=function(){return this.unauthMsg};this.setUnauthMsg=function(i){this.unauthMsg=i};var d=null;this.getErrorMsg=function(){return this.errorMsg};this.setErrorMsg=function(i){this.errorMsg=i};var a=null;this.setCreateURL=function(i){this.createURL=i};this.getCreateURL=function(){return this.createURL};this.addCheckPoint=function(i){document.location.href=e.getCreateURL()+"?dueDateTime="+i+"&project="+e.getProjectID()};this.deleteCheckPoint=function(i){document.location.href=e.getDeleteURL()+"?checkPointID="+i+"&project="+e.getProjectID()};this.reload=function(){window.location.reload()}};
;
jive.model.dateLTEQ=function(b,a){return(b.getFullYear()<a.getFullYear()||b.getFullYear()==a.getFullYear()&&(b.getMonth()<a.getMonth()||b.getMonth()==a.getMonth()&&(b.getDate()<=a.getDate())))};jive.model.dateLT=function(b,a){return(b.getFullYear()<a.getFullYear()||b.getFullYear()==a.getFullYear()&&(b.getMonth()<a.getMonth()||b.getMonth()==a.getMonth()&&(b.getDate()<a.getDate())))};jive.model.dateGT=function(b,a){return jive.model.dateLT(a,b)};jive.model.dateGTEQ=function(b,a){return jive.model.dateLTEQ(a,b)};jive.model.monthYearEQ=function(b,a){return b.getMonth()==a.getMonth()&&b.getFullYear()==a.getFullYear()};jive.model.dateEQ=function(b,a){return(b.getDate()==a.getDate()&&b.getMonth()==a.getMonth()&&b.getFullYear()==a.getFullYear())};jive.model.datetimeEQ=function(b,a){return(b.getFullYear()==a.getFullYear()&&b.getMonth()==a.getMonth()&&b.getDate()==a.getDate()&&b.getHours()==a.getHours()&&b.getMinutes()==a.getMinutes())};jive.model.datetimeLTEQ=function(b,a){return(b.getFullYear()<a.getFullYear()||(b.getFullYear()==a.getFullYear()&&(b.getMonth()<a.getMonth()||b.getMonth()==a.getMonth()&&(b.getDate()<a.getDate()||b.getDate()==a.getDate()&&(b.getHours()<a.getHours()||b.getHours()==a.getHours()&&b.getMinutes()<=a.getMinutes())))))};jive.model.dateMinusMonth=function(b){var a=b.getMonth();if(b.getMonth()==0){b.setFullYear(b.getFullYear()-1);b.setMonth(11)}else{b.setMonth(b.getMonth()-1)}while(b.getMonth()==a){b.setDate(b.getDate()-1)}};jive.model.dateMinusWeek=function(a){a.setDate(a.getDate()-7)};jive.model.dateMinusDay=function(a){if(a.getDate()==0&&a.getDate()==1){a.setFullYear(a.getFullYear()-1);a.setMonth(11);a.setDate(31)}else{a.setDate(a.getDate()-1)}};jive.model.DateHelper=function(d){var a=d.getSettingsManager();var c=d.getLanguageManager();var b=this;this.readableDifference=function(g,f){var j=g.getTime()-f.getTime();j=j/1000;var i=false;if(j<=0){i=true;j=-1*j}var k="";if(j<10){return"just now"}else{if(j<20){k="a few seconds"}else{if(j<60){k="less than a minute"}else{if(j<90){k="about a minute"}else{var h=Math.ceil(j/60);if(h<=50){var n=(h==1)?"":"s";k=h+" minute"+n}else{var l=Math.ceil(h/60);if(l<20){var n=(l==1)?"":"s";k=l+" hour"+n}else{var m=Math.round(l/24);if(m<7){var n=(m==1)?"":"s";k=m+" day"+n}else{var e=Math.ceil(m/7);var n=(e==1)?"":"s";k=e+" week"+n}}}}}}}if(i){return k+" ago"}else{return"in "+k}};this.readableDateDifference=function(l,i){var g=new Date();g.setTime(l.getTime());g.setHours(0);g.setMinutes(0);g.setSeconds(0);g.setMilliseconds(0);var f=new Date();f.setTime(i.getTime());f.setHours(0);f.setMinutes(0);f.setSeconds(0);f.setMilliseconds(0);var k=g.getTime()-f.getTime();k=k/1000;var j=false;if(jive.model.dateLT(g,f)){j=true}k=Math.abs(k);var m="";var h=Math.ceil(k/60);var n=Math.ceil(h/60);var o=Math.floor(n/24);if(o==0){m="today"}else{if(o==1&&j){m="yesterday"}else{if(o==1&&!j){m="tomorrow"}else{if(o<7){var p=(o==1)?"":"s";m=o+" day"+p;if(j){m=m+" ago"}else{m="in "+m}}else{var e=Math.ceil(o/7);var p=(e==1)?"":"s";m=e+" week"+p;if(j){m=m+" ago"}else{m="in "+m}}}}}return m};this.formatToDateTime=function(k){var h=k.getFullYear();var i=k.getMonth()+1;if(i<10){i="0"+i}var f=k.getDate();if(f<10){f="0"+f}var e=k.getHours();if(e<10){e="0"+e}var j=k.getMinutes();if(j<10){j="0"+j}var g=k.getSeconds();if(g<10){g="0"+g}return h+"-"+i+"-"+f+" "+e+":"+j+":"+g};this.formatTo12HourTime=function(i){var g=a.getTimeFormat();if(g=="3:00p"){var e=i.getHours();var h=i.getMinutes();if(h<10){h="0"+h}var f="a";if(e>=12){f="p";e-=12}if(e==0){e=12}return e+":"+h+f}else{var e=i.getHours();var h=i.getMinutes();if(h<10){h="0"+h}return e+":"+h}};this.formatToHourTime=function(h){var g=a.getTimeFormat();if(g=="3:00p"){var e=h.getHours();var f="a";if(e>=12){f="p";e-=12}if(e==0){e=12}return e+f}else{var e=h.getHours();return e}};this.formatToStandardTime=function(k){var h=""+k.getFullYear();var i=k.getMonth()+1;if(i<10){i="0"+i}var f=k.getDate();if(f<10){f="0"+f}var e=k.getHours();if(e<10){e="0"+e}var j=k.getMinutes();if(j<10){j="0"+j}var g=k.getSeconds();if(g<10){g="0"+g}return h+"-"+i+"-"+f};this.formatToShortDate=function(h){var g=h.getMonth()+1;var e=h.getDate();var f=a.getDateFormat();if(f=="4/30"){return g+"/"+e}else{return e+"/"+g}};this.formatToLongDate=function(j){var e=c.getActiveLanguage();var i=e.longDay(j.getDay())+", ";var h=e.longMonth(j.getMonth());var f=j.getDate();var g=a.getDateFormat();if(g=="4/30"){if(j.getDate()==1||j.getDate()==21||j.getDate()==31){f+="st"}else{if(j.getDate()==2||j.getDate()==22){f+="nd"}else{if(j.getDate()==3||j.getDate()==23){f+="rd"}else{f+="th"}}}i+=h+" "+f}else{i+=f+" "+h}i+=", "+j.getFullYear();return i};this.formatToMediumDate=function(f){var e=b.formatToMediumDateNoYear(f);e+=", "+f.getFullYear();return e};this.formatToMediumDateNoYear=function(j){var e=c.getActiveLanguage();var i=e.shortDay(j.getDay())+", ";var h=e.shortMonth(j.getMonth());var f=j.getDate();var g=a.getDateFormat();if(g=="4/30"){if(j.getDate()==1||j.getDate()==21||j.getDate()==31){f+="st"}else{if(j.getDate()==2||j.getDate()==22){f+="nd"}else{if(j.getDate()==3||j.getDate()==23){f+="rd"}else{f+="th"}}}i+=h+" "+f}else{i+=f+" "+h}return i};this.formatToMedDate=function(k){var e=c.getActiveLanguage();var i=e.shortMonth(k.getMonth());var f=k.getDate();var j="";var h=a.getDateFormat();if(h=="4/30"){var g="";if(k.getDate()==1||k.getDate()==21||k.getDate()==31){g="st"}else{if(k.getDate()==2||k.getDate()==22){g="nd"}else{if(k.getDate()==3||k.getDate()==23){g="rd"}else{g="th"}}}j=i+" "+f+g}else{j=f+" "+i}return j};this.formatToMedLongDate=function(k){var e=c.getActiveLanguage();var i=e.longMonth(k.getMonth());var f=k.getDate();var j="";var h=a.getDateFormat();if(h=="4/30"){var g="";if(k.getDate()==1||k.getDate()==21||k.getDate()==31){g="st"}else{if(k.getDate()==2||k.getDate()==22){g="nd"}else{if(k.getDate()==3||k.getDate()==23){g="rd"}else{g="th"}}}j=i+" "+f+g}else{j=f+" "+i}return j};this.getMonthName=function(f){var e=c.getActiveLanguage();return e.longMonth(f.getMonth())}};
;
var default_lang = {
"childNodes": [
	{
	"childNodes": [
		{
		"tagName": "lang_id",
		"childNodes": [{ "nodeValue": "1"
}]
		},
		{
		"tagName": "name",
		"childNodes": [{ "nodeValue": "French"
}]
		},
		{
		"childNodes": [
			{
			"tagName": "eng_name",
			"childNodes": [{ "nodeValue": "French"
}]
			},
			{
			"tagName": "name",
			"childNodes": [{ "nodeValue": "French"
}]
			},
			{
			"tagName": "january",
			"childNodes": [{ "nodeValue": "Janvier"
}]
			},
			{
			"tagName": "february",
			"childNodes": [{ "nodeValue": "Février"
}]
			},
			{
			"tagName": "march",
			"childNodes": [{ "nodeValue": "Mars"
}]
			},
			{
			"tagName": "april",
			"childNodes": [{ "nodeValue": "Avril"
}]
			},
			{
			"tagName": "may",
			"childNodes": [{ "nodeValue": "Mai"
}]
			},
			{
			"tagName": "june",
			"childNodes": [{ "nodeValue": "Juin"
}]
			},
			{
			"tagName": "july",
			"childNodes": [{ "nodeValue": "Juillet"
}]
			},
			{
			"tagName": "august",
			"childNodes": [{ "nodeValue": "Août"
}]
			},
			{
			"tagName": "september",
			"childNodes": [{ "nodeValue": "Septembre"
}]
			},
			{
			"tagName": "october",
			"childNodes": [{ "nodeValue": "Octobre"
}]
			},
			{
			"tagName": "november",
			"childNodes": [{ "nodeValue": "Novembre"
}]
			},
			{
			"tagName": "december",
			"childNodes": [{ "nodeValue": "Décembre"
}]
			},
			{
			"tagName": "sunday",
			"childNodes": [{ "nodeValue": "Dimanche"
}]
			},
			{
			"tagName": "monday",
			"childNodes": [{ "nodeValue": "Lundi"
}]
			},
			{
			"tagName": "tuesday",
			"childNodes": [{ "nodeValue": "Mardi"
}]
			},
			{
			"tagName": "wednesday",
			"childNodes": [{ "nodeValue": "Mercredi"
}]
			},
			{
			"tagName": "thursday",
			"childNodes": [{ "nodeValue": "Jeudi"
}]
			},
			{
			"tagName": "friday",
			"childNodes": [{ "nodeValue": "Vendredi"
}]
			},
			{
			"tagName": "saturday",
			"childNodes": [{ "nodeValue": "Samedi"
}]
			},
			{
			"tagName": "sh_january",
			"childNodes": [{ "nodeValue": "Jan"
}]
			},
			{
			"tagName": "sh_february",
			"childNodes": [{ "nodeValue": "Fév"
}]
			},
			{
			"tagName": "sh_march",
			"childNodes": [{ "nodeValue": "Mar"
}]
			},
			{
			"tagName": "sh_april",
			"childNodes": [{ "nodeValue": "Avr"
}]
			},
			{
			"tagName": "sh_may",
			"childNodes": [{ "nodeValue": "Mai"
}]
			},
			{
			"tagName": "sh_june",
			"childNodes": [{ "nodeValue": "Juin"
}]
			},
			{
			"tagName": "sh_july",
			"childNodes": [{ "nodeValue": "Juil"
}]
			},
			{
			"tagName": "sh_august",
			"childNodes": [{ "nodeValue": "Août"
}]
			},
			{
			"tagName": "sh_september",
			"childNodes": [{ "nodeValue": "Sep"
}]
			},
			{
			"tagName": "sh_october",
			"childNodes": [{ "nodeValue": "Oct"
}]
			},
			{
			"tagName": "sh_november",
			"childNodes": [{ "nodeValue": "Nov"
}]
			},
			{
			"tagName": "sh_december",
			"childNodes": [{ "nodeValue": "Déc"
}]
			},
			{
			"tagName": "sh_sunday",
			"childNodes": [{ "nodeValue": "Dim"
}]
			},
			{
			"tagName": "sh_monday",
			"childNodes": [{ "nodeValue": "Lun"
}]
			},
			{
			"tagName": "sh_tuesday",
			"childNodes": [{ "nodeValue": "Mar"
}]
			},
			{
			"tagName": "sh_wednesday",
			"childNodes": [{ "nodeValue": "Mer"
}]
			},
			{
			"tagName": "sh_thursday",
			"childNodes": [{ "nodeValue": "Jeu"
}]
			},
			{
			"tagName": "sh_friday",
			"childNodes": [{ "nodeValue": "Ven"
}]
			},
			{
			"tagName": "sh_saturday",
			"childNodes": [{ "nodeValue": "Sam"
}]
			},
			{
			"tagName": "loading",
			"childNodes": [{ "nodeValue": "Chargement..."
}]
			},
			{
			"tagName": "sb_actions",
			"childNodes": [{ "nodeValue": "Actions"
}]
			},
			{
			"tagName": "sb_my_calendars",
			"childNodes": [{ "nodeValue": "Mes calendriers"
}]
			},
			{
			"tagName": "sb_other_calendars",
			"childNodes": [{ "nodeValue": "Autres calendriers"
}]
			},
			{
			"tagName": "sb_alerts",
			"childNodes": [{ "nodeValue": "Alertes"
}]
			},
			{
			"tagName": "sb_general_tasks",
			"childNodes": [{ "nodeValue": "Tâches générales"
}]
			},
			{
			"tagName": "sb_no_tasks",
			"childNodes": [{ "nodeValue": "aucune tâche"
}]
			},
			{
			"tagName": "sb_reminder",
			"childNodes": [{ "nodeValue": "Rappel"
}]
			},
			{
			"tagName": "sb_reminders",
			"childNodes": [{ "nodeValue": "Rappels"
}]
			},
			{
			"tagName": "sb_alert",
			"childNodes": [{ "nodeValue": "Alerte"
}]
			},
			{
			"tagName": "motto",
			"childNodes": [{ "nodeValue": "Une gestion du temps tout à fait exceptionnelle"
}]
			},
			{
			"tagName": "nav_month",
			"childNodes": [{ "nodeValue": "mois"
}]
			},
			{
			"tagName": "nav_week",
			"childNodes": [{ "nodeValue": "semaine"
}]
			},
			{
			"tagName": "nav_day",
			"childNodes": [{ "nodeValue": "jour"
}]
			},
			{
			"tagName": "nav_today",
			"childNodes": [{ "nodeValue": "aujourd''hui"
}]
			},
			{
			"tagName": "nav_tomorrow",
			"childNodes": [{ "nodeValue": "demain"
}]
			},
			{
			"tagName": "nav_refresh",
			"childNodes": [{ "nodeValue": "rafraîchir"
}]
			},
			{
			"tagName": "nav_list",
			"childNodes": [{ "nodeValue": "liste"
}]
			},
			{
			"tagName": "nav_overview",
			"childNodes": [{ "nodeValue": "aperçu"
}]
			},
			{
			"tagName": "nav_feedback",
			"childNodes": [{ "nodeValue": "réaction"
}]
			},
			{
			"tagName": "nav_send",
			"childNodes": [{ "nodeValue": "Envoyer"
}]
			},
			{
			"tagName": "nav_settings",
			"childNodes": [{ "nodeValue": "paramètres"
}]
			},
			{
			"tagName": "nav_advanced",
			"childNodes": [{ "nodeValue": "avancé"
}]
			},
			{
			"tagName": "nav_logout",
			"childNodes": [{ "nodeValue": "déconnexion"
}]
			},
			{
			"tagName": "nav_prelogout",
			"childNodes": [{ "nodeValue": "Les modifications non enregistrées seront perdues."
}]
			},
			{
			"tagName": "nav_back",
			"childNodes": [{ "nodeValue": "Retour à :"
}]
			},
			{
			"tagName": "nav_event",
			"childNodes": [{ "nodeValue": "événement"
}]
			},
			{
			"tagName": "nav_task",
			"childNodes": [{ "nodeValue": "tâche"
}]
			},
			{
			"tagName": "nav_invite",
			"childNodes": [{ "nodeValue": "Inviter !"
}]
			},
			{
			"tagName": "nav_save",
			"childNodes": [{ "nodeValue": "Sauvegarder"
}]
			},
			{
			"tagName": "nav_filter",
			"childNodes": [{ "nodeValue": "filtre"
}]
			},
			{
			"tagName": "feedback_title",
			"childNodes": [{ "nodeValue": "Que pensez-vous de Jotlet ?"
}]
			},
			{
			"tagName": "feedback_name",
			"childNodes": [{ "nodeValue": "votre nom :"
}]
			},
			{
			"tagName": "feedback_body",
			"childNodes": [{ "nodeValue": "nous apprécions la franchise :"
}]
			},
			{
			"tagName": "feedback_error",
			"childNodes": [{ "nodeValue": "Une erreur s''est produite lors de l''envoi de votre réaction. Veuillez réessayer dans quelques minutes."
}]
			},
			{
			"tagName": "feedback_thanks",
			"childNodes": [{ "nodeValue": "Nous vous remercions pour votre réaction !"
}]
			},
			{
			"tagName": "cal_create",
			"childNodes": [{ "nodeValue": "créer un calendrier"
}]
			},
			{
			"tagName": "cal_add",
			"childNodes": [{ "nodeValue": "Ajouter un calendrier"
}]
			},
			{
			"tagName": "cal_edit",
			"childNodes": [{ "nodeValue": "Modifier un calendrier"
}]
			},
			{
			"tagName": "cal_delete",
			"childNodes": [{ "nodeValue": "Effacer un calendrier"
}]
			},
			{
			"tagName": "cal_remove",
			"childNodes": [{ "nodeValue": "Supprimer un calendrier"
}]
			},
			{
			"tagName": "cal_name",
			"childNodes": [{ "nodeValue": "nom du calendrier"
}]
			},
			{
			"tagName": "cal_color",
			"childNodes": [{ "nodeValue": "sélectionnez une couleur à appliquer au calendrier :"
}]
			},
			{
			"tagName": "color_red",
			"childNodes": [{ "nodeValue": "rouge"
}]
			},
			{
			"tagName": "color_blue",
			"childNodes": [{ "nodeValue": "bleu"
}]
			},
			{
			"tagName": "color_green",
			"childNodes": [{ "nodeValue": "vert"
}]
			},
			{
			"tagName": "color_pink",
			"childNodes": [{ "nodeValue": "rose"
}]
			},
			{
			"tagName": "color_purple",
			"childNodes": [{ "nodeValue": "violet"
}]
			},
			{
			"tagName": "color_orange",
			"childNodes": [{ "nodeValue": "orange"
}]
			},
			{
			"tagName": "color_yellow",
			"childNodes": [{ "nodeValue": "jaune"
}]
			},
			{
			"tagName": "color_grey",
			"childNodes": [{ "nodeValue": "gris"
}]
			},
			{
			"tagName": "nav_close",
			"childNodes": [{ "nodeValue": "Fermer"
}]
			},
			{
			"tagName": "nav_cancel",
			"childNodes": [{ "nodeValue": "Annuler"
}]
			},
			{
			"tagName": "event_menu",
			"childNodes": [{ "nodeValue": "Ajouter un événement à..."
}]
			},
			{
			"tagName": "event_edit",
			"childNodes": [{ "nodeValue": "modifier un événement"
}]
			},
			{
			"tagName": "event_edit_cap",
			"childNodes": [{ "nodeValue": "Modifier un événement"
}]
			},
			{
			"tagName": "event_loading",
			"childNodes": [{ "nodeValue": "Chargement de la page d''ajout d''événement..."
}]
			},
			{
			"tagName": "event_add",
			"childNodes": [{ "nodeValue": "ajouter un événement"
}]
			},
			{
			"tagName": "event_title",
			"childNodes": [{ "nodeValue": "titre de l''événement"
}]
			},
			{
			"tagName": "event_dt",
			"childNodes": [{ "nodeValue": "date et heure"
}]
			},
			{
			"tagName": "event_begins",
			"childNodes": [{ "nodeValue": "commence"
}]
			},
			{
			"tagName": "event_ends",
			"childNodes": [{ "nodeValue": "finit"
}]
			},
			{
			"tagName": "event_at",
			"childNodes": [{ "nodeValue": "à"
}]
			},
			{
			"tagName": "event_allday",
			"childNodes": [{ "nodeValue": "Cet événement se déroule sur toute la journée"
}]
			},
			{
			"tagName": "event_repeats",
			"childNodes": [{ "nodeValue": "Cet événement a lieu plusieurs fois"
}]
			},
			{
			"tagName": "event_desc",
			"childNodes": [{ "nodeValue": "description"
}]
			},
			{
			"tagName": "event_add_cap",
			"childNodes": [{ "nodeValue": "Ajouter un événement"
}]
			},
			{
			"tagName": "event_update",
			"childNodes": [{ "nodeValue": "Mettre à jour un événement"
}]
			},
			{
			"tagName": "event_remind",
			"childNodes": [{ "nodeValue": "Ajouter un rappel"
}]
			},
			{
			"tagName": "event_sb_delete",
			"childNodes": [{ "nodeValue": "Supprimer cet événement"
}]
			},
			{
			"tagName": "event_sb_delete_series",
			"childNodes": [{ "nodeValue": "Supprimer cette série"
}]
			},
			{
			"tagName": "event_sb_edit",
			"childNodes": [{ "nodeValue": "Modifier cet événement"
}]
			},
			{
			"tagName": "event_sb_export",
			"childNodes": [{ "nodeValue": "Télécharger cet événement"
}]
			},
			{
			"tagName": "event_sb_perm",
			"childNodes": [{ "nodeValue": "Il s''agit d''un calendrier partagé. Vous n''êtes pas autorisé à modifier ou à supprimer des informations."
}]
			},
			{
			"tagName": "task_menu",
			"childNodes": [{ "nodeValue": "Ajouter une tâche à..."
}]
			},
			{
			"tagName": "task_edit",
			"childNodes": [{ "nodeValue": "modifier une tâche"
}]
			},
			{
			"tagName": "task_loading",
			"childNodes": [{ "nodeValue": "Chargement de la page d''ajout de tâche..."
}]
			},
			{
			"tagName": "task_title",
			"childNodes": [{ "nodeValue": "titre de tâche"
}]
			},
			{
			"tagName": "task_due_date",
			"childNodes": [{ "nodeValue": "date escomptée"
}]
			},
			{
			"tagName": "task_due",
			"childNodes": [{ "nodeValue": "escomptée"
}]
			},
			{
			"tagName": "task_no_due",
			"childNodes": [{ "nodeValue": "Aucune date escomptée n''est associée à cette tâche"
}]
			},
			{
			"tagName": "task_repeats",
			"childNodes": [{ "nodeValue": "Cette tâche a lieu plusieurs fois"
}]
			},
			{
			"tagName": "task_add_cap",
			"childNodes": [{ "nodeValue": "Ajouter une tâche"
}]
			},
			{
			"tagName": "task_update",
			"childNodes": [{ "nodeValue": "Mettre à jour une tâche"
}]
			},
			{
			"tagName": "task_add",
			"childNodes": [{ "nodeValue": "ajouter une tâche"
}]
			},
			{
			"tagName": "task_sb_delete",
			"childNodes": [{ "nodeValue": "Supprimer cette tâche"
}]
			},
			{
			"tagName": "task_sb_delete_series",
			"childNodes": [{ "nodeValue": "Supprimer cette série"
}]
			},
			{
			"tagName": "task_sb_edit",
			"childNodes": [{ "nodeValue": "Modifier cette tâche"
}]
			},
			{
			"tagName": "task_sb_export",
			"childNodes": [{ "nodeValue": "Télécharger cette tâche"
}]
			},
			{
			"tagName": "task_sb_perm",
			"childNodes": [{ "nodeValue": "Il s''agit d''un calendrier partagé. Vous n''êtes pas autorisé à modifier ou à supprimer des informations."
}]
			},
			{
			"tagName": "info_in_cal",
			"childNodes": [{ "nodeValue": "dans le calendrier %sub%"
}]
			},
			{
			"tagName": "info_no_desc",
			"childNodes": [{ "nodeValue": "aucune description"
}]
			},
			{
			"tagName": "info_on",
			"childNodes": [{ "nodeValue": "sur"
}]
			},
			{
			"tagName": "info_never",
			"childNodes": [{ "nodeValue": "jamais"
}]
			},
			{
			"tagName": "info_no_title",
			"childNodes": [{ "nodeValue": "aucun titre"
}]
			},
			{
			"tagName": "info_more",
			"childNodes": [{ "nodeValue": "Plus d''infos"
}]
			},
			{
			"tagName": "info_allday",
			"childNodes": [{ "nodeValue": "Toute la journée"
}]
			},
			{
			"tagName": "info_minutes",
			"childNodes": [{ "nodeValue": "minutes"
}]
			},
			{
			"tagName": "info_hours",
			"childNodes": [{ "nodeValue": "heures"
}]
			},
			{
			"tagName": "info_duration",
			"childNodes": [{ "nodeValue": "durée"
}]
			},
			{
			"tagName": "day_notes",
			"childNodes": [{ "nodeValue": "cliquer pour ajouter des notes quotidiennes"
}]
			},
			{
			"tagName": "day_tasks",
			"childNodes": [{ "nodeValue": "Tâches pour la journée"
}]
			},
			{
			"tagName": "day_add_task",
			"childNodes": [{ "nodeValue": "ajouter une nouvelle tâche"
}]
			},
			{
			"tagName": "day_all_day",
			"childNodes": [{ "nodeValue": "Événements sur toute une journée"
}]
			},
			{
			"tagName": "day_click",
			"childNodes": [{ "nodeValue": "cliquer ici pour ajouter des notes"
}]
			},
			{
			"tagName": "day_saving",
			"childNodes": [{ "nodeValue": "sauvegarde..."
}]
			},
			{
			"tagName": "day_loading",
			"childNodes": [{ "nodeValue": "chargement..."
}]
			},
			{
			"tagName": "manage_cal",
			"childNodes": [{ "nodeValue": "Gestion du calendrier"
}]
			},
			{
			"tagName": "manage_prop",
			"childNodes": [{ "nodeValue": "propriétés de calendrier"
}]
			},
			{
			"tagName": "manage_share",
			"childNodes": [{ "nodeValue": "partager un calendrier"
}]
			},
			{
			"tagName": "manage_export",
			"childNodes": [{ "nodeValue": "exporter un calendrier"
}]
			},
			{
			"tagName": "manage_delete",
			"childNodes": [{ "nodeValue": "effacer un calendrier : "
}]
			},
			{
			"tagName": "manage_remove",
			"childNodes": [{ "nodeValue": "supprimer un calendrier : "
}]
			},
			{
			"tagName": "manage_edit",
			"childNodes": [{ "nodeValue": "modifier un calendrier"
}]
			},
			{
			"tagName": "manage_select_buddies",
			"childNodes": [{ "nodeValue": "Sélectionnez dans la liste à droite les potes avec qui vous souhaitez partager"
}]
			},
			{
			"tagName": "manage_add_buddy",
			"childNodes": [{ "nodeValue": "Ajouter un pote"
}]
			},
			{
			"tagName": "manage_add_buddy_link",
			"childNodes": [{ "nodeValue": "Ajouter un pote !"
}]
			},
			{
			"tagName": "manage_no_buddies",
			"childNodes": [{ "nodeValue": "Aucun pote :("
}]
			},
			{
			"tagName": "manage_buddy_email",
			"childNodes": [{ "nodeValue": "saisir l''adresse courriel du pote"
}]
			},
			{
			"tagName": "manage_buddy_name",
			"childNodes": [{ "nodeValue": "Nom du pote :"
}]
			},
			{
			"tagName": "manage_invite_buddy",
			"childNodes": [{ "nodeValue": "Inviter votre pote !"
}]
			},
			{
			"tagName": "manage_invite_buddy_to",
			"childNodes": [{ "nodeValue": "Inviter %sub% à Jotlet !"
}]
			},
			{
			"tagName": "manage_go_back",
			"childNodes": [{ "nodeValue": "Retourner"
}]
			},
			{
			"tagName": "manage_share_bang",
			"childNodes": [{ "nodeValue": "Partager !"
}]
			},
			{
			"tagName": "manage_share_self",
			"childNodes": [{ "nodeValue": "Vous ne pouvez pas partager avec vous-même ! :)"
}]
			},
			{
			"tagName": "manage_buddy_in_list",
			"childNodes": [{ "nodeValue": "%sub% fait déjà partie de votre liste de potes"
}]
			},
			{
			"tagName": "manage_valid_email",
			"childNodes": [{ "nodeValue": "Entrez une adresse courriel valide"
}]
			},
			{
			"tagName": "manage_searching",
			"childNodes": [{ "nodeValue": "Recherche en cours..."
}]
			},
			{
			"tagName": "manage_adding_buddy",
			"childNodes": [{ "nodeValue": "Ajout de pote..."
}]
			},
			{
			"tagName": "manage_done_sharing",
			"childNodes": [{ "nodeValue": "Partage effectué !"
}]
			},
			{
			"tagName": "manage_error",
			"childNodes": [{ "nodeValue": "Une erreur s''est produite lors de la tentative de partage"
}]
			},
			{
			"tagName": "manage_sharing",
			"childNodes": [{ "nodeValue": "Partage avec un pote..."
}]
			},
			{
			"tagName": "manage_add_fail",
			"childNodes": [{ "nodeValue": "impossible d''ajouter un pote :("
}]
			},
			{
			"tagName": "manage_inviting",
			"childNodes": [{ "nodeValue": "Invitation du pote..."
}]
			},
			{
			"tagName": "manage_done_inviting",
			"childNodes": [{ "nodeValue": "Invitation effectuée !"
}]
			},
			{
			"tagName": "manage_fail_inviting",
			"childNodes": [{ "nodeValue": "Erreur lors de l''invitation"
}]
			},
			{
			"tagName": "manage_done_invite_msg",
			"childNodes": [{ "nodeValue": "Nous vous informerons dès que votre pote aura accepté l''invitation à Jotlet."
}]
			},
			{
			"tagName": "manage_fail_invite_msg",
			"childNodes": [{ "nodeValue": "Erreur lors de l''invitation de votre pote. Veuillez réessayer dans quelques minutes."
}]
			},
			{
			"tagName": "manage_subscribe",
			"childNodes": [{ "nodeValue": "S''abonner"
}]
			},
			{
			"tagName": "manage_export_bang",
			"childNodes": [{ "nodeValue": "Exporter"
}]
			},
			{
			"tagName": "confirm_del_cal",
			"childNodes": [{ "nodeValue": "Effacer le calendrier \"%sub%\" ?\nCette action ne peut pas être annulée !"
}]
			},
			{
			"tagName": "confirm_rem_cal",
			"childNodes": [{ "nodeValue": "Supprimer le calendrier \"%sub%\" ?\nCette action ne peut pas être annulée !"
}]
			},
			{
			"tagName": "confirm_del_event",
			"childNodes": [{ "nodeValue": "Effacer l''événement \"%sub%\" ?\nCette action ne peut pas être annulée !"
}]
			},
			{
			"tagName": "confirm_del_event_s",
			"childNodes": [{ "nodeValue": "Effacer la série d''événements contenant \"%sub%\" ?\nCette action ne peut pas être annulée !"
}]
			},
			{
			"tagName": "confirm_del_task",
			"childNodes": [{ "nodeValue": "Effacer la tâche \"%sub%\" ?\nCette action ne peut pas être annulée !"
}]
			},
			{
			"tagName": "confirm_del_task_s",
			"childNodes": [{ "nodeValue": "Effacer la série de tâches contenant \"%sub%\" ?\nCette action ne peut pas être annulée !"
}]
			},
			{
			"tagName": "setting_title",
			"childNodes": [{ "nodeValue": "Paramètres personnels"
}]
			},
			{
			"tagName": "setting_first",
			"childNodes": [{ "nodeValue": "Prénom"
}]
			},
			{
			"tagName": "setting_last",
			"childNodes": [{ "nodeValue": "Nom"
}]
			},
			{
			"tagName": "setting_email",
			"childNodes": [{ "nodeValue": "Courriel"
}]
			},
			{
			"tagName": "setting_sms",
			"childNodes": [{ "nodeValue": "SMS"
}]
			},
			{
			"tagName": "setting_zip",
			"childNodes": [{ "nodeValue": "Code postal"
}]
			},
			{
			"tagName": "setting_language",
			"childNodes": [{ "nodeValue": "Langue"
}]
			},
			{
			"tagName": "setting_save",
			"childNodes": [{ "nodeValue": "Enregistrer le profil"
}]
			},
			{
			"tagName": "setting_old_pass",
			"childNodes": [{ "nodeValue": "Ancien mot de passe"
}]
			},
			{
			"tagName": "setting_new_pass",
			"childNodes": [{ "nodeValue": "Nouveau mot de passe"
}]
			},
			{
			"tagName": "setting_confirm",
			"childNodes": [{ "nodeValue": "Confirmer"
}]
			},
			{
			"tagName": "setting_save_pass",
			"childNodes": [{ "nodeValue": "Mettre à jour le mot de passe"
}]
			},
			{
			"tagName": "setting_zone",
			"childNodes": [{ "nodeValue": "Fuseau horaire"
}]
			},
			{
			"tagName": "setting_zone_desc",
			"childNodes": [{ "nodeValue": "Les fuseaux horaires répertoriés sont associés à un * s''ils appliquent l''heure d''été"
}]
			},
			{
			"tagName": "setting_save_zone",
			"childNodes": [{ "nodeValue": "Enregistrer les paramètres locaux"
}]
			},
			{
			"tagName": "setting_zoom",
			"childNodes": [{ "nodeValue": "Niveau de zoom"
}]
			},
			{
			"tagName": "setting_zoom_desc",
			"childNodes": [{ "nodeValue": "Le niveau de zoom a une incidence sur la durée représentée par une ligne dans l''affichage du jour. Le zoom 1 heure présentera un affichage compact, tandis que le zoom 15 minutes fournira plus de détails."
}]
			},
			{
			"tagName": "setting_zoom_15_min",
			"childNodes": [{ "nodeValue": "15 minutes"
}]
			},
			{
			"tagName": "setting_zoom_30_min",
			"childNodes": [{ "nodeValue": "30 minutes"
}]
			},
			{
			"tagName": "setting_zoom_1_hour",
			"childNodes": [{ "nodeValue": "1 heure"
}]
			},
			{
			"tagName": "setting_save_zoom",
			"childNodes": [{ "nodeValue": "Enregistrer le zoom"
}]
			},
			{
			"tagName": "setting_shade",
			"childNodes": [{ "nodeValue": "Cellules avec ombrage intelligent"
}]
			},
			{
			"tagName": "setting_shade_desc",
			"childNodes": [{ "nodeValue": "La fonction d''ombrage intelligent fonce automatiquement l''arrière-plan des jours les plus chargés dans l''affichage du mois. Plus le jour est chargé, plus la cellule est sombre."
}]
			},
			{
			"tagName": "setting_save_shade",
			"childNodes": [{ "nodeValue": "Enregistrer les paramètres de mois"
}]
			},
			{
			"tagName": "setting_profile",
			"childNodes": [{ "nodeValue": "profil utilisateur"
}]
			},
			{
			"tagName": "setting_change_pass",
			"childNodes": [{ "nodeValue": "changer de mot de passe"
}]
			},
			{
			"tagName": "setting_time_zones",
			"childNodes": [{ "nodeValue": "fuseaux horaires"
}]
			},
			{
			"tagName": "setting_day_view",
			"childNodes": [{ "nodeValue": "affichage du jour"
}]
			},
			{
			"tagName": "setting_month_view",
			"childNodes": [{ "nodeValue": "affichage du mois"
}]
			},
			{
			"tagName": "setting_start_week",
			"childNodes": [{ "nodeValue": "Début de la semaine :  "
}]
			},
			{
			"tagName": "err_cal_name",
			"childNodes": [{ "nodeValue": "Entrez le nom du calendrier"
}]
			},
			{
			"tagName": "email_invite",
			"childNodes": [{ "nodeValue": "Hé !\n\nConsultez le calendrier Jotlet sur www.jotlet.net ! Il s''agit d''un calendrier en ligne sympa et facile à utiliser.\n\nConnectez-vous pour que nous puissions partager nos plannings !"
}]
			},
			{
			"tagName": "err_task_title",
			"childNodes": [{ "nodeValue": "Entrez un titre pour votre tâche."
}]
			},
			{
			"tagName": "err_event_title",
			"childNodes": [{ "nodeValue": "Entrez un titre pour votre événement."
}]
			},
			{
			"tagName": "remind_adding",
			"childNodes": [{ "nodeValue": "Ajout de rappel..."
}]
			},
			{
			"tagName": "remind_loading",
			"childNodes": [{ "nodeValue": "Chargement de rappel..."
}]
			},
			{
			"tagName": "remind_email",
			"childNodes": [{ "nodeValue": "Courriel"
}]
			},
			{
			"tagName": "remind_sms",
			"childNodes": [{ "nodeValue": "Message textuel"
}]
			},
			{
			"tagName": "remind_both",
			"childNodes": [{ "nodeValue": "Les deux"
}]
			},
			{
			"tagName": "remind_5_min",
			"childNodes": [{ "nodeValue": "5 minutes"
}]
			},
			{
			"tagName": "remind_4_hour",
			"childNodes": [{ "nodeValue": "4 heures"
}]
			},
			{
			"tagName": "remind_0_day",
			"childNodes": [{ "nodeValue": "le même jour"
}]
			},
			{
			"tagName": "remind_1_day",
			"childNodes": [{ "nodeValue": "la veille"
}]
			},
			{
			"tagName": "remind_2_day",
			"childNodes": [{ "nodeValue": "2 jours avant"
}]
			},
			{
			"tagName": "remind_3_day",
			"childNodes": [{ "nodeValue": "3 jours avant"
}]
			},
			{
			"tagName": "remind_4_day",
			"childNodes": [{ "nodeValue": "4 jours avant"
}]
			},
			{
			"tagName": "remind_5_day",
			"childNodes": [{ "nodeValue": "5 jours avant"
}]
			},
			{
			"tagName": "remind_1_week",
			"childNodes": [{ "nodeValue": "1 semaine avant"
}]
			},
			{
			"tagName": "remind_2_week",
			"childNodes": [{ "nodeValue": "2 semaines avant"
}]
			},
			{
			"tagName": "remind_event",
			"childNodes": [{ "nodeValue": "M''envoyer un %email% %time% avant cet événement"
}]
			},
			{
			"tagName": "remind_task_due",
			"childNodes": [{ "nodeValue": "M''envoyer un %email% à %time%%date% la date escomptée"
}]
			},
			{
			"tagName": "remind_task_no",
			"childNodes": [{ "nodeValue": "M''envoyer un %email% à %time% le %date%"
}]
			},
			{
			"tagName": "recur_daily",
			"childNodes": [{ "nodeValue": "quotidiennement"
}]
			},
			{
			"tagName": "recur_daily_num",
			"childNodes": [{ "nodeValue": "tous les %num% jours"
}]
			},
			{
			"tagName": "recur_daily_weekday",
			"childNodes": [{ "nodeValue": "tous les jours ouvrés"
}]
			},
			{
			"tagName": "recur_weekly",
			"childNodes": [{ "nodeValue": "chaque semaine"
}]
			},
			{
			"tagName": "recur_weekly_num",
			"childNodes": [{ "nodeValue": "toutes les %num% semaines le :"
}]
			},
			{
			"tagName": "recur_monthly",
			"childNodes": [{ "nodeValue": "chaque mois"
}]
			},
			{
			"tagName": "recur_monthly_num",
			"childNodes": [{ "nodeValue": "le jour n° %num% tous les %num2% mois"
}]
			},
			{
			"tagName": "recur_monthly_date",
			"childNodes": [{ "nodeValue": "le %first% %weekday% tous les %num% mois"
}]
			},
			{
			"tagName": "recur_yearly",
			"childNodes": [{ "nodeValue": "chaque année"
}]
			},
			{
			"tagName": "recur_yearly_exact",
			"childNodes": [{ "nodeValue": "tous les %day% %month%"
}]
			},
			{
			"tagName": "recur_yearly_rel",
			"childNodes": [{ "nodeValue": "le %first% %weekday% de %month%"
}]
			},
			{
			"tagName": "recur_custom",
			"childNodes": [{ "nodeValue": "personnalisé"
}]
			},
			{
			"tagName": "recur_custom_desc",
			"childNodes": [{ "nodeValue": "Sélectionnez votre série personnalisée de dates dans le petit calendrier à gauche."
}]
			},
			{
			"tagName": "recur_custom_dates",
			"childNodes": [{ "nodeValue": "Dates sélectionnées : "
}]
			},
			{
			"tagName": "recur_end",
			"childNodes": [{ "nodeValue": "Fin de la série :"
}]
			},
			{
			"tagName": "recur_end_after_e",
			"childNodes": [{ "nodeValue": "Finir après %num% événements"
}]
			},
			{
			"tagName": "recur_end_after_t",
			"childNodes": [{ "nodeValue": "Finir après %num% tâches"
}]
			},
			{
			"tagName": "recur_end_by",
			"childNodes": [{ "nodeValue": "le %date%"
}]
			},
			{
			"tagName": "recur_event",
			"childNodes": [{ "nodeValue": "Réitérer cet événement : "
}]
			},
			{
			"tagName": "recur_task",
			"childNodes": [{ "nodeValue": "Réitérer cette tâche : "
}]
			},
			{
			"tagName": "recur_first",
			"childNodes": [{ "nodeValue": "premier"
}]
			},
			{
			"tagName": "recur_second",
			"childNodes": [{ "nodeValue": "seconde"
}]
			},
			{
			"tagName": "recur_third",
			"childNodes": [{ "nodeValue": "troisième"
}]
			},
			{
			"tagName": "recur_fourth",
			"childNodes": [{ "nodeValue": "quatrième"
}]
			},
			{
			"tagName": "recur_fifth",
			"childNodes": [{ "nodeValue": "cinquième"
}]
			},
			{
			"tagName": "recur_last",
			"childNodes": [{ "nodeValue": "dernier"
}]
			}
		],
		"tagName": "lang_table"
		}
	],
	"tagName": "language"
	}
],
"tagName": "languages"
};
;
jive.model.isLanguage=function(a){return $def(a)&&$obj(a)&&a!=null&&$def(a.translate)&&$def(a.getId)};jive.model.Language=function(e,b,d){var c=this;this.getId=function(){return e};this.getName=function(){return b};this.translate=function(f){var g=d.get(f);if(g==false){alert('Language Exception: key "'+f+'" not found')}else{if(g=="_"){return" "}else{g=g.replace(/#xD#xA/g,"\r\n");return g}}};var a=new Array();a.push("red"),a.push("blue"),a.push("green"),a.push("pink"),a.push("purple"),a.push("orange"),a.push("yellow"),a.push("grey");this.color=function(f){return c.translate("color_"+a[f])};this.longMonth=function(f){var g=new Array();g.push("january");g.push("february");g.push("march");g.push("april");g.push("may");g.push("june");g.push("july");g.push("august");g.push("september");g.push("october");g.push("november");g.push("december");return c.translate(g[f])};this.shortMonth=function(f){var g=new Array();g.push("sh_january");g.push("sh_february");g.push("sh_march");g.push("sh_april");g.push("sh_may");g.push("sh_june");g.push("sh_july");g.push("sh_august");g.push("sh_september");g.push("sh_october");g.push("sh_november");g.push("sh_december");return c.translate(g[f])};this.longDay=function(f){var g=new Array();g.push("sunday");g.push("monday");g.push("tuesday");g.push("wednesday");g.push("thursday");g.push("friday");g.push("saturday");return c.translate(g[f])};this.shortDay=function(f){var g=new Array();g.push("sh_sunday");g.push("sh_monday");g.push("sh_tuesday");g.push("sh_wednesday");g.push("sh_thursday");g.push("sh_friday");g.push("sh_saturday");return c.translate(g[f])};this.weekNumber=function(f){var g=new Array();g.push("recur_first");g.push("recur_second");g.push("recur_third");g.push("recur_fourth");g.push("recur_fifth");g.push("recur_last");return c.translate(g[f])}};jive.model.LanguageManager=function(d,k){var h=this;var f=null;var g=new Array();var a=new jive.ext.y.HashTable();var j=new Array();this.getActiveLanguage=function(){return f};this.setActiveLanguage=function(e){if(jive.model.isLanguage(e)){f=e;h.notifyLanguageChanged(f)}else{return false}};this.getLanguageList=function(){return a.toArray()};this.getSilentLanguages=function(){return g};this.loadLanguage=function(l){h.notifyLoadBegin();var e=d.newAjax(h.loadOk,h.loadFail);e.POST(HOSTURL+AJAXPATH+"?load_language","lang_id="+l)};this.saveLanguage=function(l){h.notifyLoadBegin();var m=function(o){return function(p){h.loadOk(p);var q=a.get(o);if($obj(q)&&q!=null){h.setActiveLanguage(q)}}}(l);var n=a.get(l);if($obj(n)&&n!=null){m=function(o){return function(p){h.setActiveLanguage(a.get(o))}}(l)}var e=d.newAjax(m,h.loadFail);e.POST(HOSTURL+AJAXPATH+"?save_language","lang_id="+l)};function c(p){var e;if(p.childNodes.length>0){if(p.childNodes[0].tagName=="language"){if(p.childNodes[0].childNodes.length>0){b=p.childNodes[0];var n="";var r=0;var q=new jive.ext.y.HashTable();for(var m=0;m<b.childNodes.length;m++){if(b.childNodes[m].tagName=="name"){n=b.childNodes[m].childNodes[0].nodeValue}else{if(b.childNodes[m].tagName=="lang_id"){r=b.childNodes[m].childNodes[0].nodeValue}else{if(b.childNodes[m].tagName=="lang_table"){var o=b.childNodes[m];for(var l=0;l<o.childNodes.length;l++){q.put(o.childNodes[l].tagName,o.childNodes[l].childNodes[0].nodeValue)}}}}}b=new jive.model.Language(r,n,q);a.put(b.getId(),b)}else{return false}}else{return false}}else{return false}return b}this.loadOk=function(e){if(!c(e)){h.notifyLoadFail()}else{h.notifyLoadFinish()}};this.loadFail=function(){h.notifyLoadFail()};this.addListener=function(e){j.push(e)};this.removeListener=function(l){for(var e=0;e<j.length;e++){if(j[e]==l){j.splice(e,1)}}};this.notifyLoadBegin=function(){for(var e=0;e<j.length;e++){j[e].beginLoadingLanguages()}};this.notifyLoad=function(l){for(var e=0;e<j.length;e++){j[e].loadLanguage(l)}};this.notifyLoadFinish=function(){for(var e=0;e<j.length;e++){j[e].doneLoadingLanguages()}};this.notifyLoadFail=function(){for(var e=0;e<j.length;e++){j[e].loadingLanguagesFailed()}};this.notifyLanguageChanged=function(l){for(var e=0;e<j.length;e++){j[e].languageChanged(l)}};try{if($def(k)){var b=c(k);if($obj(b)&&b!=null){h.setActiveLanguage(b)}else{alert("error parsing")}}else{alert("no default langauge")}}catch(i){alert("language: "+i)}};
;
jive.model.LoginManager=function(h){var f=this;var e=new Array();var b=new Array();function a(i){try{var l=new jive.xml.XMLParser();var j=l.parse(i);if($obj(j.documentElement)&&j.documentElement!=null){j=j.documentElement}else{j=new Object();j.childNodes=new Array();j.tagName="failed"}if(j.tagName=="success"){f.notifyLoginOk()}else{f.notifyLoginFail()}}catch(k){alert(k)}}function d(){f.notifyLoginFail()}this.login=function(j){var i=new jotlet.external.y.yAjax(a,d);alert("logging in via ajax")};var c=false;function g(){while(b.length>0){b[0]();b.splice(0,1)}}this.addListener=function(i){if(!c){e.push(i)}else{b.push(function(){f.addListener(i)})}};this.removeListener=function(k){if(!c){for(var j=0;j<e.length;j++){if(e[j]==k){e.splice(j,1)}}}else{b.push(function(){f.removeListener(k)})}};this.notifyLoginOk=function(){c=true;for(var j=0;j<e.length;j++){e[j].loginOk()}c=false;g()};this.notifyLoginFail=function(){c=true;for(var j=0;j<e.length;j++){e[j].loginFail()}c=false;g()}};
;
jive.model.RefreshManager=function(h){var i=this;var l=new Array();var a=h.getSettingsManager().getGMT();var d=h.getSettingsManager().getGMT();var b=true;this.poke=function(){try{if(b){a=h.getSettingsManager().getGMT()}}catch(n){alert("refresh error:"+n)}};this.loggedOut=function(){b=false};function f(s,q){try{i.notifyRefreshing();s.setTime(s.getTime()-5);var t=new jive.model.DateHelper(h);var r=t.formatToDateTime(s);var o=h.newAjax(e,g);var p=t.formatToDateTime(h.getEventCache().getMinTime());var n=t.formatToDateTime(h.getEventCache().getMaxTime());o.POST(HOSTURL+AJAXPATH+"?refresh","dt="+encodeURIComponent(r)+"&mindt="+p+"&maxdt="+n+(q?"&all":""))}catch(u){alert("refreshing: "+u)}}this.refresh=function(){if(b){f(d,false)}};this.reload=function(o){var n=d;i.notifyRefreshing();e(o);d=n};var k=new jive.ext.y.HashTable();this.getCustomCache=function(n){var o=k.get(n);if(!$obj(o)){o=new jive.ext.y.HashTable();k.put(n,o)}return o};function c(n){var o=new jive.ext.y.HashTable();k.put(n,o);return o}function m(p){for(var o=0;o<p.childNodes.length;o++){var r=c(p.childNodes[o].tagName);for(var n=0;n<p.childNodes[o].childNodes.length;n++){var q=parseInt(p.childNodes[o].childNodes[n].childNodes[0].nodeValue);r.put(q,true)}}}function e(u){try{b=true;for(var r=0;r<u.childNodes.length;r++){if(u.childNodes[r].tagName=="projects"){if(u.childNodes[r].childNodes.length>0){h.getProjectCache().loadExternalProjects(u.childNodes[r])}}else{if(u.childNodes[r].tagName=="events"){if(u.childNodes[r].childNodes.length>0){h.getEventCache().reloadEvents(u.childNodes[r])}}else{if(u.childNodes[r].tagName=="del_cals"){try{if(u.childNodes[r].childNodes.length>0){h.getCalendarCache().unloadCalendars(u.childNodes[r])}}catch(t){alert("error unloading calendars: "+t)}}else{if(u.childNodes[r].tagName=="del_events"){try{if(u.childNodes[r].childNodes.length>0){h.getEventCache().unloadEvents(u.childNodes[r])}}catch(t){alert("error unloading calendars: "+t)}}else{if(u.childNodes[r].tagName=="event_cache"){try{if(u.childNodes[r].childNodes.length>0){m(u.childNodes[r])}}catch(t){alert("error unloading calendars: "+t)}}else{if(u.childNodes[r].tagName=="reminders"){if(u.childNodes[r].childNodes.length>0){h.getReminderCache().reloadReminders(u.childNodes[r])}}else{if(u.childNodes[r].tagName=="comments"){if(u.childNodes[r].childNodes.length>0){h.getCommentCache().reloadComments(u.childNodes[r])}}else{if(u.childNodes[r].tagName=="forms"){if(u.childNodes[r].childNodes.length>0){h.getFormManager().reloadForms(u.childNodes[r])}}else{if(u.childNodes[r].tagName=="sync"){if($def(h.getSyncManager)){h.getSyncManager().reloadSync(u.childNodes[r])}}else{if(u.childNodes[r].tagName=="calendars"){if(u.childNodes[r].childNodes.length>0){h.getCalendarCache().reloadCalendars(u.childNodes[r])}}else{if(u.childNodes[r].tagName=="settings"){h.getSettingsManager().reloadSettings(u.childNodes[r])}else{if(u.childNodes[r].tagName=="deleted"){try{var w=u.childNodes[r];for(var q=0;q<w.childNodes.length;q++){if(w.childNodes[r].tagName=="event"){var x=parseInt(w.childNodes[q].nodeValue);var o=h.getEventCache().getTaskSilent(v);h.getEventCache().notifyDeletingEvent(o);h.getEventCache().notifyDoneDeletingEvent(o)}else{if(w.childNodes[r].tagName=="task"){var v=parseInt(w.childNodes[q].nodeValue);var p=h.getEventCache().getTaskSilent(v);h.getEventCache().notifyDeletingTask(p);h.getEventCache().notifyDoneDeletingTask(p)}else{if(w.childNodes[r].tagName=="calendar"){var s=parseInt(w.childNodes[q].nodeValue);var n=h.getCalendarCache().getCalendar(s);if($obj(n)&&n!=null){h.getCalendarCache().notifyDeletingCalendar(n);h.getCalendarCache().notifyDoneDeletingCalendar(n)}}}}}}catch(t){alert("exception refreshing deleted items: "+t)}}}}}}}}}}}}}}d=h.getSettingsManager().getGMT();i.notifyDoneRefreshing()}catch(t){alert("refresh.js:loadXML: "+t)}}function g(){i.notifyRefreshingFailed()}this.loadRemoteXML=function(n){i.notifyRefreshing();e(n)};this.addListener=function(n){l.push(n)};this.removeListener=function(o){for(var n=0;n<l.length;n++){if(l[n]==o){l.splice(n,1)}}};this.notifyRefreshing=function(){for(var n=0;n<l.length;n++){l[n].refreshing()}};this.notifyDoneRefreshing=function(){for(var n=0;n<l.length;n++){l[n].doneRefreshing()}};this.notifyRefreshingFailed=function(){for(var n=0;n<l.length;n++){l[n].refreshingFailed()}};var j=new Object();j.loginOk=function(){if(a.getTime()<d.getTime()){var n=a}else{var n=d}f(n,true)};j.loginFail=function(){};h.getLoginManager().addListener(j)};
;
jive.model.SettingsManager=function(e){var d="rawhtml";var a=null;var c=(new Date()).getTime();var b=0;this.getGMT=function(){var g=new Date();if(a!=null&&g.getTime()<c+500){return a}var g=new Date();var f=new Date();f.setTime(Date.parse(g.toUTCString().substring(0,g.toUTCString().length-3)));a=f;return f};this.getNOW=function(){return new Date()};this.getStartWeekOn=function(){return 1};this.getSmartShading=function(){return true};this.getWeatherImage=function(f){return""};this.getDateFormat=function(){return"4/30"};this.getWeekDayToStartOn=function(){return b};this.setWeekDayToStartOn=function(f){b=(parseInt(f)==NaN?0:parseInt(f))}};
;
jive.model.User=function(){var e=this;var d=new Array();function b(h,i){return function(){h(i)}}this.clearRevertActions=function(){d=new Array()};this.revert=function(){while(d.length>0){d[0]();d.splice(0,1)}};var g;var f;var a;var c;this.getID=function(){return g};this.getUsername=function(){return f};this.getFullName=function(){return a};this.getURL=function(){return c};this.setID=function(h){g=h};this.setUsername=function(h){f=h};this.setFullName=function(h){d.push(b(function(i){a=i},a));a=h};this.setURL=function(h){c=h};this.cleanAfterInit=function(){e.clearRevertActions();e.setID=null;e.setUsername=null;this.setURL=null}};jive.model.UserCache=function(f){var e=this;var b=new jive.ext.y.HashTable();function g(h){var i=b.get(h.getID());if($obj(i)){i.setFullName(h.getFullName());i.clearRevertActions()}else{b.put(h.getID(),h)}e.notifyLoadUser(h)}function a(k){var h=new jive.model.User();for(var i=0;i<k.childNodes.length;i++){if(k.childNodes[i].tagName=="i"){if(k.childNodes[i].childNodes.length>0){h.setID(parseInt(k.childNodes[i].childNodes[0].nodeValue))}}else{if(k.childNodes[i].tagName=="u"){h.setUsername(k.childNodes[i].childNodes[0].nodeValue)}else{if(k.childNodes[i].tagName=="n"){h.setFullName(k.childNodes[i].childNodes[0].nodeValue)}else{if(k.childNodes[i].tagName=="url"){h.setURL(k.childNodes[i].childNodes[0].nodeValue)}}}}}h.cleanAfterInit();g(h);return h}this.loadExternalUser=function(i){e.notifyLoadBegin();try{var h=a(i);e.notifyLoadFinish();return h}catch(j){e.notifyLoadFail()}return null};this.addListener=function(h){d.push(h)};var d=new Array();var c=new Array();this.addListenerAction=function(h){c.push(h)};this.executeListenerActions=function(){while(c.length>0){c[0]();c.splice(0,1)}};this.removeListener=function(j){for(var h=0;h<d.length;h++){if(d[h]==j){d.splice(h,1)}}};this.notifyLoadUser=function(j){for(var h=0;h<d.length;h++){d[h].loadUser(j)}e.executeListenerActions()};this.notifyLoadBegin=function(){for(var h=0;h<d.length;h++){d[h].beginLoadingUsers()}e.executeListenerActions()};this.notifyLoadFinish=function(){for(var h=0;h<d.length;h++){d[h].doneLoadingUsers()}e.executeListenerActions()};this.notifyLoadFail=function(){for(var h=0;h<d.length;h++){d[h].loadingUsersFailed()}e.executeListenerActions()}};
;
jive.model.PlacesCache=function(e){var g=this;var f=jive.rest.url("/places/types/ordered");var c=jive.rest.url("/places/types/followed");var d=jive.rest.url("/places/followed");var l=jive.rest.url("/places/");var h;var a;this.initCacheData=function(n){a=new jive.ext.y.HashTable();for(var m=0;m<n.length;m++){a.put(n[m].name,new Array())}};this.loadPlacesCache=function(q,o){var p=a.get(o.name).length;for(var n=0;n<q.length;n++){var m=q[n];var r=a.get(m.type.name);r.push(m);a.put(m.type.name,r)}return p};this.doLoadExternalPlaces=function(o){try{var m=o.placesCollection;for(var n=0;n<m.length;n++){var r=m[n].placeType;var p=m[n].places;if(p&&p.length){g.loadPlaces(p,r)}g.notifyLoadPlaces(r)}}catch(q){g.notifyLoadFail()}return null};this.getPlaces=function(m){return a.get(m.name)};var b=false;this.isInitialized=function(){return b};this.loadPlaces=function(n,m){return g.loadPlacesCache(n,m)};this.morePlaces=function(m){g.notifyLoadBegin();if(m.type.name.startsWith("FOLLOWED")){$j.getJSON(d,{page:m.page},function(o){var n=g.loadPlaces(o.place,m.type);if(m.refreshAllFollowedTypes){$j.getJSON(c,function(q){for(var p=0;p<q.placetype.length;p++){g.notifyLoadFinish({type:q.placetype[p],startIndex:0})}})}else{g.notifyLoadFinish(m,n)}})}else{if("COMMUNITY"==m.type.name){$j.getJSON(l+"COMMUNITY",{communityID:m.communityID,page:m.page},function(o){var n=g.loadPlaces(o.place,m.type);g.notifyLoadFinish(m,n)})}else{$j.getJSON(l+m.type.name,{page:m.page},function(o){var n=g.loadPlaces(o.place,m.type);g.notifyLoadFinish(m,n)})}}};this.loadExternalPlaces=function(m){b=true;if(!h){$j.getJSON(f,function(o){h=o.placetype;g.initCacheData(h);return n()})}else{return n()}function n(){if(m){$j.getJSON(l+m.type.name,m,function(o){g.loadPlaces(o.place,m.type);return g.notifyLoadPlaces(m.type)})}else{$j.getJSON(l,function(o){return g.doLoadExternalPlaces(o)})}}};this.doReloadPlaces=function(){$j.getJSON(c,function(n){g.notifyResetPlaces({name:"FOLLOWED_ALL"});for(var m=0;m<n.placetype.length;m++){a.put(n.placetype[m].name,new Array())}g.morePlaces({type:{name:"FOLLOWED_ALL"},page:-1,refreshAllFollowedTypes:true})})};this.reloadPlaces=function(m){if(m.name.startsWith("FOLLOWED")){g.doReloadPlaces()}};this.addListener=function(m){i.push(m)};var i=new Array();var j=0;var k=new Array();this.addListenerAction=function(m){k.push(m)};this.executeListenerActions=function(){while(k.length>0){k[0]();k.splice(0,1)}};this.removeListener=function(n){if(j==0){for(var m=0;m<i.length;m++){if(i[m]==n){i.splice(m,1)}}}else{g.addListenerAction(function(o){return function(){g.removeListener(o)}}(n))}};this.notifyLoadPlaces=function(n){j++;for(var m=0;m<i.length;m++){i[m].loadPlaces(n)}j--;g.executeListenerActions()};this.notifyLoadBegin=function(){j++;for(var m=0;m<i.length;m++){i[m].beginLoadingPlaces()}j--;g.executeListenerActions()};this.notifyLoadFinish=function(n,o){j++;for(var m=0;m<i.length;m++){i[m].doneLoadingPlaces(n,o)}j--;g.executeListenerActions()};this.notifyLoadFail=function(){j++;for(var m=0;m<i.length;m++){i[m].loadingPlacesFailed()}j--;g.executeListenerActions()};this.notifyResetPlaces=function(n){j++;for(var m=0;m<i.length;m++){i[m].resetPlaces(n)}j--;g.executeListenerActions()}};
;
jive.model.isCheckPoint=function(a){return $def(a)&&$obj(a)&&a!=null&&$def(a.isCheckPoint)};jive.model.CheckPoint=function(c){var i=this;var e=new Array();function k(l,m){return function(){l(m)}}this.clearRevertActions=function(){e=new Array()};this.revert=function(){while(e.length>0){e[0]();e.splice(0,1)}};var f=c;this.getProject=function(){return f};var b;var g=null;var d=null;var a="";var h="";var j=null;this.isCheckPoint=function(){return true};this.getID=function(){return b};this.getCreatedOn=function(){return g};this.getLastModifiedOn=function(){return d};this.getName=function(){return a};this.getDescription=function(){return h};this.getDueDate=function(){return j};this.setID=function(l){b=l};this.setCreatedOn=function(l){g=l};this.setLastModifiedOn=function(l){d=l};this.setName=function(l){e.push(k(function(m){a=m},a));a=l};this.setDescription=function(l){e.push(k(function(m){h=m},h));h=l};this.setDueDate=function(l){e.push(k(function(m){j=m},j));j=l};this.cleanAfterInit=function(){i.clearRevertActions();i.setID=null;i.setCreatedOn=null;i.setLastModifiedOn=null}};jive.model.Project=function(){var j=this;var f=new Array();function l(m,n){return function(){m(n)}}this.clearRevertActions=function(){f=new Array()};this.revert=function(){while(f.length>0){f[0]();f.splice(0,1)}};var c;var a="";var i="";var e;var k;var b;var g;var d=false;var h=new Array();this.getID=function(){return c};this.getCreator=function(){return e};this.getLastModifiedOn=function(){return b};this.getName=function(){return a};this.getDescription=function(){return i};this.getDueDate=function(){return k};this.getTasks=function(){return g};this.isEditable=function(){return d};this.getCheckPoints=function(){return h};this.setID=function(m){c=m};this.setCreator=function(m){e=m};this.setEditable=function(m){d=m};this.setLastModifiedOn=function(m){b=m};this.setName=function(m){f.push(l(function(n){a=n},a));a=m};this.setDescription=function(m){f.push(l(function(n){i=n},i));i=m};this.setDueDate=function(m){f.push(l(function(n){k=n},k));k=m};this.setTasks=function(m){g=m};this.setCheckPoints=function(m){h=m};this.cleanAfterInit=function(){j.clearRevertActions();j.setID=null;j.setCreator=null;j.setEditable=null;j.setLastModifiedOn=null;j.setCheckPoints=null}};jive.model.ProjectCache=function(g){var f=this;var c=new jive.ext.y.HashTable();this.getProject=function(i){return c.get(i)};this.getProjects=function(){return c.toArray()};function b(i){var j=c.get(i.getID());if($obj(j)){j.setCreator(i.getCreator());j.setDescription(i.getDescription());j.setDueDate(i.getDueDate());j.clearRevertActions()}else{c.put(i.getID(),i)}f.notifyLoadProject(i)}function h(t){var v=new Array();for(var r=0;r<t.childNodes.length;r++){var p=new jive.model.Project();var y=t.childNodes[r];var s=new Array();for(var q=0;q<y.childNodes.length;q++){if(y.childNodes[q].tagName=="id"){if(y.childNodes[q].childNodes.length>0){p.setID(y.childNodes[q].childNodes[0].nodeValue)}}else{if(y.childNodes[q].tagName=="name"){if(y.childNodes[q].childNodes.length>0){p.setName(y.childNodes[q].childNodes[0].nodeValue)}}else{if(y.childNodes[q].tagName=="desc"){if(y.childNodes[q].childNodes.length>0){p.setDescription(y.childNodes[q].childNodes[0].nodeValue)}}else{if(y.childNodes[q].tagName=="creator"){var w=y.childNodes[q];var A=g.getUserCache().loadExternalUser(w.childNodes[0]);p.setCreator(A)}else{if(y.childNodes[q].tagName=="d_on"){var m=y.childNodes[q].childNodes[0].nodeValue;if(m!=null){p.setDueDate(new Date(m.replace(/-/g,"/")))}else{p.setDueDate(null)}}else{if(y.childNodes[q].tagName=="m_on"){var m=y.childNodes[q].childNodes[0].nodeValue;if(m!=null){p.setLastModifiedOn(new Date(m.replace(/-/g,"/")))}else{p.setLastModifiedOn(null)}}else{if(y.childNodes[q].tagName=="editable"){p.setEditable(true)}else{if(y.childNodes[q].tagName=="tasks"){var w=y.childNodes[q];var A=g.getTaskCache().loadExternalTasks(w);p.setTasks(A)}else{if(y.childNodes[q].tagName=="cps"){var w=y.childNodes[q];for(var o=0;o<w.childNodes.length;o++){var z=w.childNodes[o];var x=new jive.model.CheckPoint(p);for(var n=0;n<z.childNodes.length;n++){if(z.childNodes[n].tagName=="id"){if(z.childNodes[n].childNodes.length>0){x.setID(z.childNodes[n].childNodes[0].nodeValue)}}else{if(z.childNodes[n].tagName=="c_on"){var m=z.childNodes[n].childNodes[0].nodeValue;if(m!=null){x.setCreatedOn(new Date(m.replace(/-/g,"/")))}else{x.setCreatedOn(null)}}else{if(z.childNodes[n].tagName=="m_on"){var m=z.childNodes[n].childNodes[0].nodeValue;if(m!=null){x.setLastModifiedOn(new Date(m.replace(/-/g,"/")))}else{x.setLastModifiedOn(null)}}else{if(z.childNodes[n].tagName=="nm"){if(z.childNodes[n].childNodes.length>0){x.setName(z.childNodes[n].childNodes[0].nodeValue)}}else{if(z.childNodes[n].tagName=="desc"){if(z.childNodes[n].childNodes.length>0){x.setDescription(z.childNodes[n].childNodes[0].nodeValue)}}else{if(z.childNodes[n].tagName=="due"){if(z.childNodes[n].childNodes.length>0){var m=z.childNodes[n].childNodes[0].nodeValue;if(m!=null){x.setDueDate(new Date(m.replace(/-/g,"/")))}else{x.setDueDate(null)}}}}}}}}}s.push(x);p.setCheckPoints(s)}}}}}}}}}}}b(p);v.push(p)}return v}this.loadExternalProjects=function(j){f.notifyLoadBegin();try{var i=h(j);f.notifyLoadFinish();return i}catch(k){f.notifyLoadFail()}return null};this.canEditProjectHuh=function(i){if(i==0){return true}};this.addListener=function(i){e.push(i)};var e=new Array();var a=0;var d=new Array();this.addListenerAction=function(i){d.push(i)};this.executeListenerActions=function(){while(d.length>0){d[0]();d.splice(0,1)}};this.removeListener=function(k){if(a==0){for(var j=0;j<e.length;j++){if(e[j]==k){e.splice(j,1)}}}else{f.addListenerAction(function(i){return function(){f.removeListener(i)}}(k))}};this.notifyLoadProject=function(k){a++;for(var j=0;j<e.length;j++){e[j].loadProject(k)}a--;f.executeListenerActions()};this.notifyLoadBegin=function(){a++;for(var j=0;j<e.length;j++){e[j].beginLoadingProjects()}a--;f.executeListenerActions()};this.notifyLoadFinish=function(){a++;for(var j=0;j<e.length;j++){e[j].doneLoadingProjects()}a--;f.executeListenerActions()};this.notifyLoadFail=function(){a++;for(var j=0;j<e.length;j++){e[j].loadingProjectsFailed()}a--;f.executeListenerActions()}};
;
jive.model.ProjectCacheListener=function(){this.loadProject=function(a){};this.beginLoadingProjects=function(){};this.doneLoadingProjects=function(){};this.loadingProjectsFailed=function(){}};
;
jive.model.isDocument=function(a){return $obj(a)&&a!=null&&$def(a.getBody)&&$def(a.getSubject)};jive.model.Document=function(){var e=this;var d=new Array();function a(g,h){return function(){g(h)}}this.clearRevertActions=function(){d=new Array()};this.revert=function(){while(d.length>0){d[0]();d.splice(0,1)}};this.confirm=function(){e.notifyTaskChanged()};var f;var b;this.getID=function(){return f};this.getHTML=function(){return b};this.setID=function(g){f=g};this.setHTML=function(g){d.push(a(function(h){b=h},b));b=g};this.cleanAfterInit=function(){e.clearRevertActions();e.setID=null};this.convertToWiki=function(){objectLookupSessionKey};var c=new Array();this.addListener=function(g){c.push(g)};this.removeListener=function(h){for(var g=0;g<c.length;g++){if(c[g]==h){c.splice(g,1)}}};this.notifyDocumentChanged=function(){for(var g=0;g<c.length;g++){c[g].documentChanged(e)}}};jive.model.DocumentCache=function(d){var f=this;var a=new jive.ext.y.HashTable();function j(){this.documentChanged=function(k){f.notifyDocumentChanged(k)}}function e(l){var k=a.get(l.getID());if($obj(k)){k.clearRevertActions()}else{l.addListener(new j());a.put(l.getID(),l)}f.notifyLoadDocument(l)}this.saveDocument=function(m){f.notifySavingDocument(m);try{var l=d.getSettingsManager();var k=d.newAjax(function(o){try{if(o.tagName=="success"){f.notifyDoneSavingDocument(m)}else{f.notifySavingDocumentFailed(m)}}catch(q){alert(q)}},function(){try{f.notifySavingDocumentFailed(m)}catch(o){alert("saving failed: "+o)}})}catch(n){f.notifySavingDocumentFailed(m)}};function c(k){f.notifyNewDocumentFromWiki(new jive.model.Document("",k))}this.newDocumentFromWiki=function(k){if(!$def(window.objectLookupSessionKey)){throw"window.objectLookupSessionKey must be defined to use newDocumentFromWiki()"}if(!$def(WikiTextConverter)){throw"WikiTextConverter must be defined to use newDocumentFromWiki()"}WikiTextConverter.convertFromWiki(k,window.objectLookupSessionKey,{callback:c,timeout:DWRTimeout,errorHandler:f.notifyNewDocumentFromWikiFailed})};function b(o){var m=new Array();for(var n=0;n<o.childNodes.length;n++){var k=new jive.model.Document();var q=o.childNodes[n];for(var l=0;l<q.childNodes.length;l++){if(q.childNodes[l].tagName=="id"){if(q.childNodes[l].childNodes.length>0){k.setID(q.childNodes[l].childNodes[0].nodeValue)}}}m.push(k);k.cleanAfterInit();e(k)}return m}this.loadExternalDocuments=function(l){f.notifyLoadBegin();try{var k=loadDocumentsXML(l);f.notifyLoadFinish();return k}catch(m){f.notifyLoadFail()}return null};this.addListener=function(k){h.push(k)};var h=new Array();var i=new Array();this.addListenerAction=function(k){i.push(k)};this.executeListenerActions=function(){while(i.length>0){i[0]();i.splice(0,1)}};this.removeListener=function(l){for(var k=0;k<h.length;k++){if(h[k]==l){h.splice(k,1)}}};this.notifyDocumentChanged=function(l){for(var k=0;k<h.length;k++){h[k].documentChanged(l)}f.executeListenerActions()};this.notifyLoadDocument=function(l){for(var k=0;k<h.length;k++){h[k].loadDocument(l)}f.executeListenerActions()};this.notifyLoadBegin=function(){for(var k=0;k<h.length;k++){h[k].beginLoadingDocuments()}f.executeListenerActions()};this.notifyLoadFinish=function(){for(var k=0;k<h.length;k++){h[k].doneLoadingDocuments()}f.executeListenerActions()};this.notifyLoadFail=function(){for(var k=0;k<h.length;k++){h[k].loadingDocumentsFailed()}f.executeListenerActions()};this.notifySavingDocument=function(l){for(var k=0;k<h.length;k++){h[k].savingDocument(l)}f.executeListenerActions()};this.notifyDoneSavingDocument=function(l){for(var k=0;k<h.length;k++){h[k].doneSavingDocument(l)}f.executeListenerActions()};this.notifySavingDocumentFailed=function(l){for(var k=0;k<h.length;k++){h[k].savingDocumentFailed(l)}f.executeListenerActions()};this.notifyNewDocumentFromWiki=function(l){for(var k=0;k<h.length;k++){h[k].newDocumentFromWiki(l)}f.executeListenerActions()};this.notifyNewDocumentFromWikiFailed=function(){for(var k=0;k<h.length;k++){h[k].newDocumentFromWikiFailed(p)}f.executeListenerActions()};var g=new jive.model.DocumentCacheListener();g.documentChanged=function(k){f.saveDocument(k)};f.addListener(g)};
;
jive.model.DocumentCacheListener=function(){this.loadingDocumentsFailed=function(){};this.doneLoadingDocuments=function(){};this.beginLoadingDocuments=function(){};this.loadDocument=function(){};this.documentChanged=function(){};this.savingDocument=function(){};this.doneSavingDocument=function(){};this.savingDocumentFailed=function(){};this.newDocumentFromWikiFailed=function(){}};
;
jive.model.TaskCacheListener=function(){this.loadingTasksFailed=function(){};this.doneLoadingTasks=function(){};this.beginLoadingTasks=function(){};this.loadTask=function(){};this.taskChanged=function(){}};
;
jive.model.isEvent=function(a){return $obj(a)&&a!=null&&$def(a.getStart)&&$def(a.getEnd)};jive.model.isTask=function(a){return $obj(a)&&a!=null&&$def(a.getDueDate)&&$def(a.getProjectID)};jive.model.Task=function(){var h=this;var j=0;var b=new Array();function a(s,t){return function(){s(t)}}this.clearRevertActions=function(){b=new Array()};this.revert=function(){while(b.length>0){b[0]();b.splice(0,1)}};this.confirm=function(){h.notifyTaskChanged()};var l;var k=j;var r=null;var e;var n;var f;var q;var d;var p;var i;var c;var g=-1;var o=false;this.getID=function(){return l};this.getProjectID=function(){return k};this.getDueDate=function(){return r};this.hasDueDate=function(){return r!=null};this.getSubject=function(){return e};this.getDescription=function(){return n};this.getCreatedBy=function(){return f};this.getCreatedOn=function(){return q};this.getAssignedBy=function(){return p};this.getAssignedTo=function(){return d};this.getURL=function(){return c};this.isComplete=function(){return i};this.getParentTaskID=function(){return g};this.isParent=function(){return o};this.setIsParent=function(s){o=s};this.setParentTaskID=function(s){g=s};this.setID=function(s){l=s};this.setProjectID=function(s){k=s};this.setCreatedBy=function(s){f=s};this.setCreatedOn=function(s){q=s};this.setComplete=function(s){i=s};this.setURL=function(s){c=s};this.setDueDate=function(s){b.push(a(function(t){r=t},r));r=s};this.setSubject=function(s){b.push(a(function(t){e=t},e));e=s};this.setDescription=function(s){b.push(a(function(t){n=t},n));n=s};this.setAssignedBy=function(s){b.push(a(function(t){p=t},p));p=s};this.setAssignedTo=function(s){b.push(a(function(t){d=t},d));d=s};this.cleanAfterInit=function(){h.clearRevertActions();h.setID=null;h.setCreatedBy=null;h.setCreatedOn=null;h.setURL=null};var m=new Array();this.addListener=function(s){m.push(s)};this.removeListener=function(t){for(var s=0;s<m.length;s++){if(m[s]==t){m.splice(s,1)}}};this.notifyTaskChanged=function(){for(var s=0;s<m.length;s++){m[s].taskChanged(h)}}};jive.model.TaskCache=function(d){var f=this;var a=new jive.ext.y.HashTable();function c(){this.taskChanged=function(j){f.notifyTaskChanged(j)}}function e(k){var j=a.get(k.getID());if($obj(j)){j.setDueDate(k.getDueDate());j.setSubject(k.getSubject());j.setDescription(k.getDescription());j.setAssignedTo(k.getAssignedTo());j.setAssignedBy(k.getAssignedBy());j.setParentTaskID(k.getParentTaskID());j.setIsParent(k.isParent());j.clearRevertActions()}else{k.addListener(new c());a.put(k.getID(),k)}f.notifyLoadTask(k)}this.saveTask=function(j){f.notifySavingTask(j);try{var l=d.getSettingsManager();var q=new jive.model.DateHelper(d);var s=d.newAjax(function(u){try{if(u.tagName=="success"){f.notifyDoneSavingTask(j)}else{f.notifySavingTaskFailed(j)}}catch(v){alert(v)}},function(){try{f.notifySavingTaskFailed(j)}catch(u){alert("saving failed: "+u)}});var p=j.getDueDate();p=(p!=null)?q.formatToDateTime(p):"";var m=!j.hasDueDate();var n=j.getStatus();var r=j.getSubject();var t=j.getDescription();var k=j.getProjectID();s.POST(HOSTURL+AJAXPATH+"?save_task","task_id="+encodeURIComponent(j.getID())+"&due="+encodeURIComponent(p)+"&status="+encodeURIComponent(n)+"&title="+encodeURIComponent(r)+"&description="+encodeURIComponent(t)+"&never_due="+encodeURIComponent(m?"1":"0")+"&project_id="+k)}catch(o){f.notifySavingTaskFailed(j)}};function b(p){var m=new Array();for(var n=0;n<p.childNodes.length;n++){var k=new jive.model.Task();var q=p.childNodes[n];for(var l=0;l<q.childNodes.length;l++){if(q.childNodes[l].tagName=="id"){if(q.childNodes[l].childNodes.length>0){k.setID(q.childNodes[l].childNodes[0].nodeValue)}}else{if(q.childNodes[l].tagName=="pid"){if(q.childNodes[l].childNodes.length>0){k.setProjectID(q.childNodes[l].childNodes[0].nodeValue)}}else{if(q.childNodes[l].tagName=="due"){var o=q.childNodes[l].childNodes[0].nodeValue;if(o!=null){k.setDueDate(new Date(o.replace(/-/g,"/")))}else{k.setDueDate(null)}}else{if(q.childNodes[l].tagName=="subj"){k.setSubject(q.childNodes[l].childNodes[0].nodeValue)}else{if(q.childNodes[l].tagName=="desc"){k.setDescription(q.childNodes[l].childNodes[0].nodeValue)}else{if(q.childNodes[l].tagName=="c_on"){var o=q.childNodes[l].childNodes[0].nodeValue;if(o!=null){k.setCreatedOn(new Date(o.replace(/-/g,"/")))}else{k.setCreatedOn(null)}}else{if(q.childNodes[l].tagName=="c_by"){k.setCreatedBy(d.getUserCache().loadExternalUser(q.childNodes[l].childNodes[0]))}else{if(q.childNodes[l].tagName=="a_by"){k.setAssignedBy(d.getUserCache().loadExternalUser(q.childNodes[l].childNodes[0]))}else{if(q.childNodes[l].tagName=="a_to"){k.setAssignedTo(d.getUserCache().loadExternalUser(q.childNodes[l].childNodes[0]))}else{if(q.childNodes[l].tagName=="url"){k.setURL(q.childNodes[l].childNodes[0].nodeValue)}else{if(q.childNodes[l].tagName=="status"){k.setComplete(q.childNodes[l].nodeValue=="c")}else{if(q.childNodes[l].tagName=="parent_task_id"){k.setParentTaskID(q.childNodes[l].childNodes[0].nodeValue)}else{if(q.childNodes[l].tagName=="is_parent"){k.setIsParent(q.childNodes[l].childNodes[0].nodeValue=="true")}}}}}}}}}}}}}}m.push(k);k.cleanAfterInit();e(k)}return m}this.loadExternalTasks=function(k){f.notifyLoadBegin();try{var j=b(k);f.notifyLoadFinish();return j}catch(l){f.notifyLoadFail()}return null};this.addListener=function(j){h.push(j)};var h=new Array();var i=new Array();this.addListenerAction=function(j){i.push(j)};this.executeListenerActions=function(){while(i.length>0){i[0]();i.splice(0,1)}};this.removeListener=function(k){for(var j=0;j<h.length;j++){if(h[j]==k){h.splice(j,1)}}};this.notifyTaskChanged=function(k){for(var j=0;j<h.length;j++){h[j].taskChanged(k)}f.executeListenerActions()};this.notifyLoadTask=function(k){for(var j=0;j<h.length;j++){h[j].loadTask(k)}f.executeListenerActions()};this.notifyLoadBegin=function(){for(var j=0;j<h.length;j++){h[j].beginLoadingTasks()}f.executeListenerActions()};this.notifyLoadFinish=function(){for(var j=0;j<h.length;j++){h[j].doneLoadingTasks()}f.executeListenerActions()};this.notifyLoadFail=function(){for(var j=0;j<h.length;j++){h[j].loadingTasksFailed()}f.executeListenerActions()};var g=new jive.model.TaskCacheListener();g.taskChanged=function(j){f.saveTask(j)};f.addListener(g)};
;
jive.rte.settings=function(E){if(typeof (E)=="object"){return E}function C(F){return computeRTEPluginStyle(F)}if(E=="mini-w-quote"){var B=false;var D=false;var A=jive.rte.settings(0);A.theme_advanced_buttons1="bold,italic,underline,strikethrough,spacerbutton,bullist,numlist,spacerbutton,jiveimage,jivevideo,spacerbutton,jivelink,jiveemoticons,jivequote,spellchecker,html";delete A.theme_advanced_buttons2;delete A.theme_advanced_buttons3;A.default_height=29;return A}else{if(E=="mini"){var B=false;var D=D;var A=jive.rte.settings(0);A.theme_advanced_buttons1="bold,italic,underline,strikethrough,spacerbutton,bullist,numlist,spacerbutton,jiveimage,jivevideo,spacerbutton,jivelink,jiveemoticons,spellchecker,html";delete A.theme_advanced_buttons2;delete A.theme_advanced_buttons3;A.default_height=29;return A}else{if(E=="widget"){var B=false;var A=jive.rte.settings(0);A.theme_advanced_statusbar_location="none";return A}else{if(E=="wiki"){var A=jive.rte.settings(0);return A}else{if(E=="blog"){var A=jive.rte.settings(0);return A}else{if(E=="thread"){var A=jive.rte.settings(0);if(_jive_gui_quote_text&&_jive_gui_quote_text.length>0){A.theme_advanced_buttons1="fontselect, fontsizeselect, removeformat, magicspacer, spacerbutton,bullist, numlist, outdent, indent, spacerbutton,jivevideo,spacerbutton,jivelink,tabletoolbar,extra,jivequote,spellchecker,html"}return A}else{if(E==0){return{theme_advanced_fonts:"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Calibri=calibri, verdana, arial, sans-serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",ie7_css:"a{\nborder: 1px solid transparent;\n}\nspan.jive_macro.active_link, a.jive_macro.active_link, a.active_link{\nborder: 1px solid blue;\n}\nspan.jive_macro, a.jive_macro{\nborder: 1px solid transparent;\n}",keep_values:true,convert_urls:true,relative_urls:false,popup_css:false,default_height:58,bool_attrs:/(checked|disabled|readonly|selected|nowrap)/,valid_child_elements:0,font_size_style_values:0,theme_advanced_buttons1:"fontselect, fontsizeselect, removeformat, magicspacer, spacerbutton,bullist, numlist, outdent, indent, sup, sub, spacerbutton,jivevideo,spacerbutton,jivelink,tabletoolbar,extra,spellchecker,html",theme_advanced_buttons2:"bold,italic,underline,strikethrough,forecolor,jivestyle, magicspacer, spacerbutton, justifyleft,justifycenter,justifyright,justifyfull, spacerbutton,jiveimage,spacerbutton,jiveemoticons, jivemacros ",theme_advanced_buttons3:"tablecontrols",fix_list_elements:false,save_callback:"RawHTMLSaveFunction",convert_fonts_to_spans:true,font_size_style_values:"8pt,10pt,12pt,14pt,18pt,24pt,36pt",max_header_count:6,strict_loading_mode:true,body_class:"jive-widget-formattedtext",theme:"advanced",plugins:"jiveutil,jivescroll,jiveresize,jiveblackout,jivebuttons,jiveemoticons,jiveGadget,jivestyle,jivelink,jivekeyboard,jivequote,jivevideo,jiveimage,spellchecker,html,style,jivelists,table,jivetablecontrols,save,advimage,advlink,inlinepopups,contextmenu,tabletoolbar,jivemacros,paste,jivemention,jiveselection,jivetable,jivetablebutton,jivemouse",paste_auto_cleanup_on_paste:true,paste_conheadvert_middot_lists:true,paste_retain_style_properties:"color,background,background-color,font-family,font-weight,text-decoration,text-indent,font-size,margin,margin-left,margin-top,margin-bottom,margin-right,border,border-top,border-bottom,border-left,border-right,border-width,border-style,border-color,padding,padding-left,padding-top,padding-right,padding-bottom,border-top-width,border-bottom-width,border-left-width,border-right-width,border-top-style,border-bottom-style,border-left-style,border-right-style,border-top-color,border-bottom-color,border-left-color,border-right-color",paste_strip_class_attributes:"mso",paste_remove_spans:false,paste_remove_styles:false,paste_block_drop:false,doctype:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"left",theme_advanced_statusbar_location:"bottom",content_css:C(CS_RESOURCE_BASE_URL+"/styles/tiny_mce3/themes/advanced/skins/default/content.css")+","+C(CS_RESOURCE_BASE_URL+"/styles/jive-icons.css"),theme_advanced_resize_horizontal:false,theme_advanced_resizing:true,apply_source_formatting:true,spellchecker_languages:SPELL_LANGS,spellchecker_rpc_url:CS_BASE_URL+"/spellcheck.jspa",jive_image_picker_url:B,jive_video_picker_url:D,add_form_submit_trigger:false,valid_elements:"a[accesskey|charset|class|coords|dir<ltr?rtl|href|hreflang|id|lang|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev|shape<circle?default?poly?rect|style|tabindex|title|target|type|jivemacro|_.*],abbr[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],acronym[class|dir<ltr?rtl|id|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],address[class|align|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],applet[align<bottom?left?middle?right?top|alt|archive|class|code|codebase|height|hspace|id|name|object|style|title|vspace|width],area[accesskey|alt|class|coords|dir<ltr?rtl|href|id|lang|nohref<nohref|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|shape<circle?default?poly?rect|style|tabindex|title|target],base[href|target],basefont[color|face|id|size],bdo[class|dir<ltr?rtl|id|lang|style|title],big[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],blockquote[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],body[alink|background|bgcolor|class|dir<ltr?rtl|id|lang|link|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onunload|style|title|text|vlink],br[class|clear<all?left?none?right|id|style|title],button[accesskey|class|dir<ltr?rtl|disabled<disabled|id|lang|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|tabindex|title|type|value],caption[align<bottom?left?right?top|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],center[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],cite[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],code[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],col[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title|valign<baseline?bottom?middle?top|width],colgroup[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title|valign<baseline?bottom?middle?top|width],dd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],del[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],dfn[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],dir[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],div[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],dl[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],dt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],em/i[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],embed[width|height|src|pluginspage|name|swliveconnect|play<true?false|loop<true?false|menu<true?false|quality<low?autolow?autohigh?high?medium?high?best|scale<default?exact?noorder|salign<l?t?r?b?tl?tr?bl?br|wmode<window?opaque?transparent|bgcolor|base|flashvars|type|allowfullscreen],fieldset[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],font[class|color|dir<ltr?rtl|face|id|lang|size|style|title],form[accept|accept-charset|action|class|dir<ltr?rtl|enctype|id|lang|method<get?post|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onreset|onsubmit|style|title|target],frame[class|frameborder|id|longdesc|marginheight|marginwidth|name|noresize<noresize|scrolling<auto?no?yes|src|style|title],frameset[class|cols|id|onload|onunload|rows|style|title],h1[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],h2[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],h3[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],h4[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],h5[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],h6[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],head[dir<ltr?rtl|lang|profile],hr[align<center?left?right|class|dir<ltr?rtl|id|lang|noshade<noshade|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style|title|width],html[dir<ltr?rtl|lang|version],iframe[align<bottom?left?middle?right?top|class|frameborder|height|id|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|style|title|width],img[align<bottom?left?middle?right?top|alt|border|class|dir<ltr?rtl|height|hspace|id|ismap<ismap|lang|longdesc|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|src|style|title|usemap|vspace|width|jivemacro|_.*|param_.*],input[accept|accesskey|align<bottom?left?middle?right?top|alt|checked<checked|class|dir<ltr?rtl|disabled<disabled|id|ismap<ismap|lang|maxlength|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect|readonly<readonly|size|src|style|tabindex|title|type<button?checkbox?file?hidden?image?password?radio?reset?submit?text|usemap|value],ins[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],isindex[class|dir<ltr?rtl|id|lang|prompt|style|title],kbd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],label[accesskey|class|dir<ltr?rtl|for|id|lang|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],legend[align<bottom?left?right?top|accesskey|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],li[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|type],link[charset|class|dir<ltr?rtl|href|hreflang|id|lang|media|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev|style|title|target|type],map[class|dir<ltr?rtl|id|lang|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],menu[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],meta[content|dir<ltr?rtl|http-equiv|lang|name|scheme],noframes[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],noscript[class|dir<ltr?rtl|id|lang|style|title],object[align<bottom?left?middle?right?top|archive|border|class|classid|codebase|codetype|data|declare|dir<ltr?rtl|height|hspace|id|lang|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|standby|style|tabindex|title|type|usemap|vspace|width],ol[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|start|style|title|type],optgroup[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],option[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|selected<selected|style|title|value],p[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],param[id|name|type|value|valuetype<DATA?OBJECT?REF],pre/listing/plaintext/xmp[align|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|width|jivemacro|_.*],q[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],s[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],samp[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],script[charset|defer|language|src|type],select[class|dir<ltr?rtl|disabled<disabled|id|lang|multiple<multiple|name|onblur|onchange|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style|tabindex|title],small[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],span[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|jivemacro|_.*],strike[class|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],strong/b[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],style[dir<ltr?rtl|lang|media|title|type],sub[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],sup[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],table[align<center?left?right|bgcolor|border|cellpadding|cellspacing|class|dir<ltr?rtl|frame|height|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rules|style|summary|title|width|jive.*],tbody[align<center?char?justify?left?right|char|class|charoff|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|valign<baseline?bottom?middle?top],td[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup|style|title|valign<baseline?bottom?middle?top|width],textarea[accesskey|class|cols|dir<ltr?rtl|disabled<disabled|id|lang|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect|readonly<readonly|rows|style|tabindex|title],tfoot[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|valign<baseline?bottom?middle?top],th[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup|style|title|valign<baseline?bottom?middle?top|width],thead[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|valign<baseline?bottom?middle?top],title[dir<ltr?rtl|lang],tr[abbr|align<center?char?justify?left?right|bgcolor|char|charoff|class|rowspan|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|valign<baseline?bottom?middle?top],tt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],u[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],ul[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|type],var[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]"}}else{return E}}}}}}}};function computeRTEPluginStyle(B){for(var A=0;A<jive.rte.defaultStyles.length;A++){B+=","+jive.rte.defaultStyles[A]}return B}
;
jive.rte.ParamSet=function(){var a=this;this.name="";this.deleteAll=false;this.params=new Array();this.addParam=function(c,b){a.params.push({name:c,value:b})}};
;
window.BOOKMARKTYPE=2;jive.rte.RTE=function(b,C,f){var i=this;var A=null;if(typeof(C)=="object"){A=C;C=A.id}var g=false;var v=false;var h=false;var a=$j("#"+C);if(a.val()==""){a.val("<p></p>")}var s=$j("<textarea/>").hide();a.before(s);var c=$j("<div/>").addClass("popOverContent");var B=$j("<div/>").addClass("rte_wrap").addClass("tiny_mce_content");var o=$j("<div/>").addClass("superRichContent");var H=$j("<div/>").addClass("rte_wrap").addClass("tiny_mce_content").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%"});if(!$def(f)){f=0}var w=0;var j=0;var G=true;if(!A){var z=jive.rte.settings(f);z.mode="exact";z.elements=C;z.images_enabled=window._jive_images_enabled;z.oninit=d;try{if(typeof(window._editor_lang)!="undefined"){z.language=_editor_lang}if(!z.jive_image_picker_url&&typeof(window._jive_image_picker_url)!="undefined"){z.jive_image_picker_url=_jive_image_picker_url}}catch(y){console.log("error during rte construction",y)}if(typeof(tinyMCE)=="undefined"){h=true;s.hide();a.show();a.height("200px")}else{try{tinyMCE.init(z)}catch(r){h=true;s.hide();a.show();a.height("200px")}}}this.getSettings=function(){return z};this.isTextOnly=function(){return h};this.isMobileOnly=function(){return v};this.setMobileOnly=function(e){if(e&&!v){v=e;s.attr("name",a.attr("name"));a.removeAttr("name")}else{if(!e&&v){v=e;a.attr("name",s.attr("name"));s.removeAttr("name")}}};this.isDisabled=function(){return g};this.setDisabled=function(e){g=e};function u(e){if(b&&b[e]){return b[e]}return null}function F(){$j.each(b,function(){if(this.teardown){this.teardown()}})}this.getImageService=function(){return u("imageService")};this.getLinkService=function(){return u("linkService")};this.getFormService=function(){return u("formService")};this.getEntitlementService=function(){return u("entitlementService")};var E=true;var p=false;function k(){var I=$j(d().getContentAreaContainer()).children("table:first td.mceIframeContainer");w=I.outerHeight()-2;j=I.outerWidth();H.css({height:i.getHeight()-i.getToolbarHeight()});var e=d().plugins.jivescroll.lastScrollY;i.getPopOverContainer().css("top",(-1*e)-i.getContentAreaHeight());i.getPopOverContainer().css("left",0)}var m=true;function d(){if(!i.isTextOnly()&&G){if(!A){A=tinyMCE.getInstanceById(C)}if(!$def(A)||!A){return null}G=false;H.append(o);$j("#"+C+"_tbl td.mceIframeContainer").prepend(H);B.append(c);$j("#"+C+"_tbl td.mceIframeContainer").append(B);w=$j(d().getContentAreaContainer()).children("table:first tr.mceIframeRow").outerHeight()-2;j=$j(d().getContentAreaContainer()).children("table:first tr.mceIframeRow").outerWidth();$j.each(A.plugins,function(){try{if(this.setRTE){this.setRTE(i)}}catch(I){console.log("Error calling setRTE in plugin",this.getInfo(),I)}});s.keyup(function(I){i.notifyOnKeyUp(I.keyCode)});s.change(function(I){i.notifyOnChange(I.keyCode)});A.onKeyUp.add(function(I,J){i.notifyOnKeyUp(J.keyCode)});A.onChange.add(function(I,J){i.notifyOnChange(J.keyCode)});A.onNodeChange.add(function(I,J){i.notifyOnNodeChange()});A.onInit.add(function(J,K){if(J.id==C){i.notifyInitFinished(i)}J.getContainer().childNodes[0].style.width="";var I=J.getBody();if(I.childNodes.length===0){I.appendChild(J.plugins.jivemacros.createEmptyPara())}if(tinymce.isIE){$j(window.document.body).find(".tiny_mce_content").addClass("ie");$j(J.getBody()).addClass("ie")}setTimeout(k,300);setTimeout(k,600);setTimeout(k,1000);setTimeout(k,2000);setTimeout(k,3000);setTimeout(k,4000)});A.onBeginSpelling.add(function(){p=true});A.onEndSpelling.add(function(){p=false});A.theme.onResize.add(function(){if(m){m=false;i.resizeTo(i.getHeight());A.theme.onResize.dispatch()}else{m=true;i.notifyResized()}k()});A.plugins.html.registerToggleFunction(i.toggleEditorMode);if(window.autoSave){var e={navigateAway:function(){if(window&&window.autoSave&&i.restoreNavigateAway){window.autoSave.confirmation=i.restoreNavigateAway;i.restoreNavigateAway=false}}};window.autoSave.addListener(e)}}return A}this.isSpellChecking=function(){return p};this.toggleSpellChecker=function(){d().execCommand("mceSpellCheck")};this.closeAllDialogs=function(){var J=d().windowManager.windows;var I=Object.keys(J);for(var e=0;e<I.length;e++){d().windowManager.close(null,J[I[e]].id)}d().plugins.jivemacros.removeDuplicateMacros(d(),false);d().plugins.jivemacros.fixBodyParagraphs();return J};this.getMacroForName=function(e){return window.jive.rte.macros.filter(function(I){return I.getName()==e}).first()||null};this.addMacro=function(e,K,P){var L=d();L.undoManager.add();if(L.selection.getNode().nodeName.toLowerCase()=="html"){var M=L.getBody();if(M.childNodes.length){M=M.childNodes[0]}L.selection.select(M);L.selection.collapse(true)}var J=L.selection.isCollapsed();var I=L.plugins.jivemacros.insertMacro(L,e,null,P);L.plugins.jivemacros.applyParameterSet(I,e,K);L.plugins.jivemacros.validateMacroElements(I);var N=i.getUIDForElement($j(I));var O=i.getHiddenElementFor(N);e.refreshPosition(i,I,O);e.refresh(i,I);L.nodeChanged();return I};this.applyParamSet=function(K,J,e){var I=d();I.plugins.jivemacros.applyParameterSet(K,J,e)};this.addTable=function(O,M){var e=d();var K="";K+="<table";for(var J=0;J<O.length;J++){K+=" "+O[J].name+"='"+O[J].value+"'"}K+=">";K+="<tbody>";for(var J=0;J<M.length;J++){var N=M[J];K+="<tr>";if(J===0){for(var I=0;I<N.length;I++){var L=N[I];K+='<th align="center" valign="middle" style="background-color:#6690BC;"><font color="#ffffff"><strong>'+L+"</strong></font></th>"}}else{for(var I=0;I<N.length;I++){var L=N[I];K+="<td><p>"+L+(tinymce.isIE?"":'<br mce_bogus="1"/>')+"</p></td>"}}K+="</tr>"}K+="</tbody>";K+="</table>";e.execCommand("mceBeginUndoLevel");e.execCommand("mceInsertContent",false,K);e.addVisual();e.execCommand("mceEndUndoLevel");return true};this.getCurrentNode=function(){return $j(d().selection.getNode())};this.destroy=function(){this.killYourself();F();$j(window).focus();tinyMCE.remove(A);$j(this.getDOM()).parent().html("");$j(this.getTextArea()).remove();s.remove()};this.getLang=function(I,e){return d().getLang(I,e)};this.isReady=function(){if(i.isTextOnly()){return true}var e=d();return !!e};this.getDOM=function(){return d().getContainer()};this.getID=function(){return C};this.setHTML=function(I){I=this.replaceWhiteSpace(I);if(i.isMobileOnly()){return s.val(I)}if(i.isTextOnly()){return a.val(I)}s.val(I);var e=d().setContent(I.replace(/>\n/g,">"));d().plugins.jivemacros.fixBodyParagraphs();return e};this.getOriginalTextBox=function(){return a};this.getHTML=function(){if(i.isMobileOnly()){return s.val()}if(i.isTextOnly()){return a.val()}if(i.isDisabled()){return a.val()}if(this.isHidden()){d().setContent(s.val().replace(/>\n/g,">"))}var e=d().getContent();if(($j.trim(e).length>0)&&e.indexOf("<body")!==0){e="<body>"+e+"</body>"}return e};this.replaceWhiteSpace=function(J){var I=[];var K=0;var e=-1;while((e=J.indexOf("  ",K))>=0){if(e<K){break}I.push(J.substring(K,e));I.push("&nbsp;");K=e+1}if(K<J.length){I.push(J.substring(K))}return I.join("")};this.show=function(){d().show();i.notifyShowing()};this.getWindow=function(){return d().getWin()};this.getDoc=function(){return d().getDoc()};var x=null;this.getHiddenContainer=function(){if(x){return x}x=$j("#"+i.getID()+"_tbl div.superRichContent");return x};var q=null;this.getPopOverContainer=function(){if(q){return q}q=$j("#"+i.getID()+"_tbl div.popOverContent");return q};this.getHiddenElementFor=function(e){var I=i.getHiddenContainer();var J=I.find("#"+e);if(J.length){return J}return null};var D=/\b_jivemacro_uid(\w+)\b/;this.getUIDForElement=function(I){var e=D.exec(I.attr("class"));if(e){return e[1]}return null};var n=new jive.ext.y.HashTable();this.getRTEElementFor=function(e){if(e){var I=n.get(e);if(I){if(I.length==1&&I.get(0).parentNode){return I}n.clear(e)}I=$j("._jivemacro_uid"+e,i.getBody());if(I.length==1){n.put(e,I)}if(I.length>0){return I}}return null};this.removeMacroWithUID=function(e){var J=n.get(e);if(J){J.remove()}n.clear(e);var I=i.getHiddenContainer();I.children("#"+e).remove()};this.setAttributeForMacroWithUID=function(e,I,J){var K=n.get(e);if(K){K.attr(I,J)}};this.generateUID=function(){return"_"+(new Date()).getTime()+Math.round(Math.random()*10000)};this.getBody=function(){return d().getBody()};this.getTextArea=function(){return a};this.appendHTML=function(e){$j(d().getBody()).append(e)};this.insertHTMLAtCursor=function(e){if(e.indexOf("<body>")>=0){e=e.replace(/<body>/g,"")}if(e.indexOf("</body>")>=0){e=e.replace(/<\/body>/g,"")}if(!d().selection.getNode()||d().selection.getNode().nodeName.toLowerCase()=="body"){i.appendHTML(e)}else{$j(d().selection.getNode()).after(e)}};this.selection=function(){return d().selection.getRng(true)};this.focus=function(){try{if(d().destroyed){return}if(typeof(force)=="undefined"){force=false}if(this.isHidden()){s.focus()}else{var I=i.getBody();d().focus();if(I.childNodes.length===0){I.appendChild(d().plugins.jivemacros.createEmptyPara());d().selection.select(I.childNodes[0].childNodes[0]);d().selection.collapse(true);return}else{if(I.childNodes.length==1){var M=I.childNodes[0];var J;if(M.childNodes.length==1&&(J=M.childNodes[0])&&J.nodeName.toLowerCase()=="br"){d().selection.select(J);d().selection.collapse(true);return}}}if(i.getCurrentNode()[0].nodeName.toLowerCase()=="body"){var K=i.getBody();while(K.nodeType==1&&K.childNodes.length>0){K=K.childNodes[0]}d().selection.select(K);d().selection.collapse(true)}}}catch(L){console.log(L)}};this.tinymceFocus=function(){d().focus()};this.collapseSelection=function(){var e=d(),I=e.selection.getNode();if(I&&!e.selection.isCollapsed()){i.focus();e.selection.collapse()}};this.select=function(I){var e=d();e.selection.select(I)};this.hide=function(){var e=d();if(!e.destroyed){e.hide()}};this.isHidden=function(){return s.is(":visible")};this.resizeTo=function(e){var K=$j(d().getContainer());var J=K.find("table:first").get(0);var I=$j(J.rows[0].cells[0]).height();if(J.rows.length>2){I+=$j(J.rows[J.rows.length-1].cells[0]).height()}var L=$j(d().getContentAreaContainer()).find("iframe");L.height(e-I);$j(J).height(e);s.height(e)};this.getHeight=function(){var I=$j(d().getContainer());var e=I.find("table:first").get(0);if(e){return $j(e).height()}else{return 100}};this.getToolbarHeight=function(){var I=$j(d().getContainer()).find("table:eq(0) tr"),e=I.eq(0).find("td, th").height();if(I.length>2){e+=I.last().find("td, th").height()}return e};this.getContentAreaHeight=function(){return w};this.getContentAreaWidth=function(){return j};this.killYourself=function(){$j.each(d().plugins,function(){if(this.killYourself){this.killYourself()}})};this.toggleEditorMode=function(I){var J,e;if(I==C){if(window.autoSave){i.restoreNavigateAway=window.autoSave.confirmation;window.autoSave.confirmation=false}if(i.isHidden()){J=s.height();s.hide();i.show();i.setHTML(s.val());i.focus();i.resizeTo(J);d().plugins.jivemacros.removeDuplicateMacros(d(),false);d().plugins.jivemacros.fixBodyParagraphs()}else{e=$j("#"+C+"_tbl");J=e.height();s.val(i.getHTML(true));i.hide();s.show();s.width("100%");a.hide();s.height(J);i.focus()}k();i.notifyDoneTogglingMode()}};this.i18n=function(I,J){if(typeof(J)=="undefined"){J=I}var e=d();return e.getLang(I,J)};var t=[];var l=[];this.addListener=function(e){if($def(e.onShow)){e.onShow()}t.push(e);if(i.initted&&e.initFinished){e.initFinished(i)}};this.addListenerAction=function(e){l.push(e)};this.executeListenerActions=function(){while(l.length>0){l[0]();l.splice(0,1)}};this.removeListener=function(I){for(var e=0;e<t.length;e++){if(t[e]==I){t.splice(e,1)}}};this.initted=false;this.notifyInitFinished=function(I){if(!i.initted){i.initted=true;for(var e=0;e<t.length;e++){t[e].initFinished(I)}i.executeListenerActions()}};this.notifyOnKeyUp=function(I){for(var e=0;e<t.length;e++){t[e].onKeyUp(I)}i.executeListenerActions()};this.notifyOnChange=function(){if(E){E=false;return}for(var e=0;e<t.length;e++){t[e].onChange()}i.executeListenerActions()};this.notifyResized=function(){for(var e=0;e<t.length;e++){t[e].onResize()}i.executeListenerActions()};this.notifyShowing=function(){for(var e=0;e<t.length;e++){t[e].onShow()}i.executeListenerActions()};this.notifyOnNodeChange=function(){for(var e=0;e<t.length;e++){t[e].onNodeChange()}i.executeListenerActions()};this.notifyDoneTogglingMode=function(){for(var e=0;e<t.length;e++){t[e].doneTogglingMode()}i.executeListenerActions()}};
;
jive.rte.RTEWrap=function(m){var j=window.jive;var c={$element:null,id:m.$element.attr("id")?m.$element.attr("id"):"wysiwygtext",controller:null,preset:"wiki",preferredMode:"advanced",startMode:"advanced",mobileUI:false,toggleText:"",alwaysUseTabText:"",editDisabledText:"",editDisabledSummary:"",isEditing:false,height:0,onReady:function(){}};m=$j.extend(c,m);if(m.autoSave==null){m.autoSave=new DummyAutoSave(true)}if(m._imagePickerUrl){window._jive_image_picker_url=m._imagePickerUrl}if(m._imagesEnabled!=null){window._jive_images_enabled=m._imagesEnabled}var e="advanced";var b=m.preferredMode?m.startMode:"advanced";if(m.mobileUI){e="rawhtml";b="rawhtml"}if(!m.$element||!m.$element.length){return}j.rte.multiRTE.push(m.id);var h="<div><div class='wysiwygtext_html_link'><a href='javascript:;' class='toggle_html' style='display:none;'>"+m.toggleText+"</a><a href='javascript:void(0);' onmousedown='return false;' class='rte_preferred' style='display:none;'>"+m.alwaysUseTabText+"</a></div><div class='jive-panel-wrapper' id='editor-panel-wrapper'><div id='wysiwyg-panel' class='current loading'></div></div></div>";var n=$j(h);m.$element.before(n);n.find(".jive-panel-wrapper #wysiwyg-panel").append(m.$element);var a=new j.rte.RTE(m.controller,m.id,m.preset);if(m.mobileUI&&m.isEditing){a.setDisabled(true);var g=$j("<div><h4></h4><p></p><br><p></p></div>");g.find("h4").text(m.editDisabledText);g.find("p:last").text(m.editDisabledSummary.replace("{0}",m.communityName));n.find(".jive-panel-wrapper #wysiwyg-panel").prepend(g).addClass("disabled")}else{if(m.mobileUI){m.$element.before("<input name='mobileEditor' value='true' type='hidden' />");a.setMobileOnly(m.mobileUI)}}function i(p){if(m.mobileUI){f();return}var o=m.autoSave.confirmation;m.autoSave.confirmation=false;WikiTextConverter.setPreferredEditorMode(p,{callback:function(){b=p;f();m.autoSave.confirmation=o},timeout:DWRTimeout,errorHandler:editorErrorHandler})}function f(){if(m.mobileUI){n.find(".toggle_html").hide();n.find(".rte_preferred").hide();return}if(e=="rawhtml"){n.find(".toggle_html").css({display:"block"})}else{n.find(".toggle_html").hide()}if(b==e){n.find(".rte_preferred").hide()}else{n.find(".rte_preferred").css({display:"block"})}}function d(){var o=new j.rte.RTEListener();o.onKeyUp=function(){m.autoSave.messageChangeHandler()};o.onChange=function(){m.autoSave.messageChangeHandler()};a.addListener(o);o=new j.rte.RTEListener();if(m.height==0){o.onResize=function(p){return function(){var q=new Date();q.setTime(q.getTime()+3600000*24*365);var r=window.editor.get(p).getHeight();setCookie("jive_wysiwygtext_height",""+r,q)}}(m.id)}o.doneTogglingMode=function(){if(e=="advanced"){e="rawhtml"}else{e="advanced"}f()};o.initFinished=function(){if(b=="rawhtml"){setTimeout(function(){a.toggleEditorMode(a.getID())},1)}n.find("#wysiwyg-panel").removeClass("loading");window.setTimeout(function(){var p;if(m.height>0){a.resizeTo(m.height)}else{try{p=parseInt(getCookie("jive_wysiwygtext_height"));if(!p){p=500}}catch(q){p=500}a.resizeTo(p)}m.onReady()},0)};a.addListener(o);n.find(".toggle_html").click(function(){a.toggleEditorMode(m.id)});$j("#subject01").keydown(function(p){if(p.keyCode==9){a.focus();return false}})}function k(){if(!a.isReady()){window.setTimeout(k,33);return}n.find("#wysiwyg-panel").show();d();f()}this.destroy=function(){a.destroy();n.remove()};for(var l in a){if(typeof(this[l])=="undefined"){this[l]=a[l]}}window.editor.put(m.id,this);n.find(".wysiwygtext_html_link a:last").click(function(){i(e)});k()};
;
jive.rte.Macro=function(e,b,f,j,c,k,d,i,g){var h=this;var a=null;if(typeof(jive.rte.plugin[e])!="undefined"){a=new jive.rte.plugin[e](e,b,f,j,c,k,d,i,g)}this.getName=function(){if(a!=null){return a.getName()}return e};this.getUrl=function(){if(a!=null){return a.getUrl()}return b};this.isButton=function(){if(a!=null){return a.isButton()}return g};this.isEnabled=function(){if(a!=null){return a.isEnabled()}return i};this.isShowSettings=function(){if(a!=null){return a.isShowSettings()}return j};this.isShowInMacroList=function(){if(a!=null){return a.isShowInMacroList()}return c};this.getMacroType=function(){if(a!=null){return a.getMacroType()}return f};this.getParameterSets=function(){if(a!=null){return a.getParameterSets()}return k};this.getAllowedParameters=function(){if(a!=null){return a.getAllowedParameters()}return d};this.refreshPosition=function(l,m,o,n){if(a!=null){return a.refreshPosition(l,m,o,n)}};this.usesCustomBackground=function(){if(a!=null){return a.usesCustomBackground()}return false};this.caresAboutChangeTo=function(l,n,m){if(a!=null&&a.caresAboutChangeTo){return a.caresAboutChangeTo(l,n,m)}return false};this.refresh=function(l,n){if(a!=null){return a.refresh(l,n)}if(n.getAttribute("jivemacro")==this.getName()){if(this.getMacroType().toLowerCase()=="inline"){var q=n.getAttribute("_title");if($def(q)&&q!=null&&q.length>0){if(!q.match(/<[^<]+=/)){n.innerHTML=q}n.attributes.removeNamedItem("_title")}else{if(tinyMCE.activeEditor.dom.hasClass(n,"default_title")){var m=n.getAttribute("jivemacro");var r=n.getAttribute("___default_attr");var p=tinyMCE.activeEditor.plugins.jivemacros.getTitleFor(m,r);if(p&&n.innerHTML!=p[0]){n.innerHTML="";n.appendChild(l.getDoc().createTextNode(p[0]))}if(n.innerHTML==""){n.innerHTML="unknown"}}}}else{if(this.getMacroType().toLowerCase()=="image"){if(n.src==""){var o=window.CS_RESOURCE_BASE_URL+"/images/tiny_mce3/plugins/jiveemoticons/images/spacer.gif";n.setAttribute("src",o);n.setAttribute("_mce_src",o)}}}}}};
;
jive.rte.EmoticonMacro=function(){var c=new Array();var d=new Array();c.push({name:"__jive_emoticon_name",value:["happy","laugh","silly","wink","plain","angry","blush","confused","cool","cry","devil","grin","love","mischief","sad","shocked","info","plus","minus","alert"]});for(var a=0;a<c[0].value.length;a++){d.push({name:c[0].value[a],deleteAll:true,params:[{name:c[0].name,value:c[0].value[a]}]})}var b=new jive.rte.Macro("emoticon","","img",false,true,d,c,true,false);this.getName=b.getName;this.getUrl=b.getUrl;this.isShowInMacroList=b.isShowInMacroList;this.isShowSettings=b.isShowSettings;this.getMacroType=b.getMacroType;this.getParameterSets=b.getParameterSets;this.getAllowedParameters=b.getAllowedParameters;this.usesCustomBackground=function(){return false};this.refresh=function(f,h){b.refresh(f,h);var g=h.getAttribute("_"+c[0].name);var e=window.CS_RESOURCE_BASE_URL+"/images/emoticons/"+g+".gif";$j(h).addClass("jive_macro").addClass("jive_emote").removeClass("jive_emoticon").attr("src",e).attr("_mce_src",e)}};jive.rte.macros.push(new jive.rte.EmoticonMacro());
;
jive.rte.RTEListener=function(){this.onKeyUp=function(a){};this.onChange=function(){};this.onResize=function(){};this.onShow=function(){};this.doneTogglingMode=function(){};this.initFinished=function(){};this.onNodeChange=function(){}};
;
jive.rest=(function(){var a=_jive_base_url+"/__services/v2/rest";return{url:function(b){return a+b},admin:{url:function(b){return a+"/admin"+b}}}})();jive.cached_rest=(function(){var a=_jive_base_url+window.CS_RESOURCE_BASE_URL+"/__services/v2/rest";return{url:function(b){return a+b}}})();jive.app.url=(function(){var a=_jive_base_url;return function(c,d){var b=d||new soy.StringBuilder();b.append(a+c.path);if(!d){return b.toString()}}})();jive.resource=(function(){var a;if(typeof(_jive_resource_url)!="undefined"){var b=_jive_resource_url;a=function(d,e){var c=e||new soy.StringBuilder();c.append(b+d.path);if(!e){return c.toString()}}}else{a=function(){throw"the global variable _jive_resource_url is undefined."}}return{url:a}})();jive.json=(function(){var a=function(b){var c=b.replace(/^throw [^;]*;/,"");return JSON.parse(c)};return{parse:a}})();
;
(function(c){var b={};jive.Template=function a(h,f){try{var d=/^[\w\-]+$/.test(h)?b[h]=b[h]||a(document.getElementById(h).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+h.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',jive.util.escapeHTML($1),'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');")}catch(g){throw ("jive.template Error parsing template: "+g)}return f?d(f):d}})(jQuery);
;
jive.gui.CPDOM=function(d,h,a,g){var f=this;var i=document.createElement("DIV");i.setAttribute("class","jive-link-checkpoint jiveTT-hover-checkpoint");i.className="jive-link-checkpoint jiveTT-hover-checkpoint";var j=document.createElement("SPAN");var c=h.getName();if(c.length==0){c="(no title)"}var b=document.createTextNode(c);var e=document.createElement("SPAN");e.setAttribute("class","month_day_cell_event_desc");e.className="month_day_cell_event_desc";var k="";if(jive.util.unescapeHTML(h.getDescription()).length>0){k=": "+jive.util.unescapeHTML(h.getDescription())}e.appendChild(document.createTextNode(k));j.appendChild(b);j.appendChild(e);i.appendChild(j);i.getCheckPoint=function(l){return function(){return l}}(h);this.lighten=function(){i.setAttribute("class","month_day_cell_item month_lighten_dom");i.className="month_day_cell_item month_lighten_dom"};this.darken=function(){i.setAttribute("class","month_day_cell_item");i.className="month_day_cell_item"};this.refresh=function(){j.removeChild(j.childNodes[1]);j.removeChild(j.childNodes[0]);j.appendChild(document.createTextNode(h.getName()));var l="";if(jive.util.unescapeHTML(h.getDescription()).length>0){l=": "+jive.util.unescapeHTML(h.getDescription())}e.removeChild(e.childNodes[0]);e.appendChild(document.createTextNode(l));j.appendChild(e)};this.showDescription=function(l){if(l){jive.ext.x.xDisplayInline(e)}else{jive.ext.x.xDisplayNone(e)}};jive.ext.x.xAddEventListener(i,"click",function(l,m,n){return function(o){l(m);jive.ext.x.xStopPropagation(o);n.setAttribute("class","month_view_day_task_title");n.className="month_view_day_task_title"}}(a,h,j));jive.ext.x.xAddEventListener(i,"dblclick",function(l,m,n){return function(o){l(m);jive.ext.x.xStopPropagation(o);n.setAttribute("class","month_view_day_task_title");n.className="month_view_day_task_title"}}(g,h,j));this.getDOM=function(){return i};this.killYourself=function(){h=null;d=null};this.getCheckPoint=i.getCheckPoint;this.setHighlight=function(l){if(l){i.setAttribute("class","month_day_cell_item_highlight");i.className="month_day_cell_item_highlight"}else{i.setAttribute("class","month_day_cell_item");i.className="month_day_cell_item"}}};
;
jive.gui.TaskDOM=function(g,a,c,j){var i=this;var m=document.createElement("A");m.setAttribute("class","month_day_cell_item");m.className="month_day_cell_item";var o=document.createElement("SPAN");o.setAttribute("class","month_view_day_task_title");o.className="month_view_day_task_title";var e=a.getSubject();if(e.length==0){e="(no title)"}var d=document.createTextNode(e);var h=document.createElement("SPAN");h.setAttribute("class","month_day_cell_event_desc");h.className="month_day_cell_event_desc";var p="";if(jive.util.unescapeHTML(a.getDescription()).length>0){p=": "+jive.util.unescapeHTML(a.getDescription())}h.appendChild(document.createTextNode(p));var b=document.createElement("INPUT");b.setAttribute("type","checkbox");b.type="checkbox";if(a.isComplete()){b.checked=true;b.checkedCache=true}else{b.checkedCache=false}jive.ext.x.xAddEventListener(b,"click",function(n,q){return function(r){try{if(n.checkedCache==n.checked){n.checkedCache=!n.checkedCache;n.checked=!n.checked}else{n.checkedCache=!n.checkedCache}if(n.checked){q.setComplete(true)}else{q.setComplete(false)}q.confirm();jive.ext.x.xStopPropagation(r)}catch(r){alert(r)}}}(b,a));m.appendChild(b);o.appendChild(d);o.appendChild(h);m.appendChild(o);m.getTask=function(n){return function(){return n}}(a);m.setDisabled=function(n){return function(q){n.disabled=q}}(b);m.isDisabledHuh=function(n){return function(){return n.disabled}}(b);m.setChecked=function(n){return function(q){n.checked=q}}(b);m.isCheckedHuh=function(n){return function(){return n.checked}}(b);this.lighten=function(){m.setAttribute("class","month_day_cell_item month_lighten_dom");m.className="month_day_cell_item month_lighten_dom"};this.darken=function(){m.setAttribute("class","month_day_cell_item");m.className="month_day_cell_item"};this.refresh=function(){o.removeChild(o.childNodes[1]);o.removeChild(o.childNodes[0]);o.appendChild(document.createTextNode(a.getSubject()));var n="";if(jive.util.unescapeHTML(a.getDescription()).length>0){n=": "+jive.util.unescapeHTML(a.getDescription())}h.removeChild(h.childNodes[0]);h.appendChild(document.createTextNode(n));o.appendChild(h);if(a.isComplete()){m.setChecked(true)}else{m.setChecked(false)}};this.showDescription=function(n){if(n){jive.ext.x.xDisplayInline(h)}else{jive.ext.x.xDisplayNone(h)}};m.setChecked(a.isComplete());jive.ext.x.xAddEventListener(m,"click",function(n,q,r){return function(s){n(q);jive.ext.x.xStopPropagation(s);r.setAttribute("class","month_view_day_task_title");r.className="month_view_day_task_title"}}(c,a,o));jive.ext.x.xAddEventListener(m,"dblclick",function(n,q,r){return function(s){n(q);jive.ext.x.xStopPropagation(s);r.setAttribute("class","month_view_day_task_title");r.className="month_view_day_task_title"}}(j,a,o));this.getDOM=function(){return m};this.killYourself=function(){a=null;g=null};this.getTask=m.getTask;this.setDisabled=m.setDisabled;this.isDisabledHuh=m.isDisabledHuh;this.setChecked=m.setChecked;this.isCheckedHuh=m.isCheckedHuh;this.setHighlight=function(n){if(n){m.setAttribute("class","month_day_cell_item_highlight");m.className="month_day_cell_item_highlight"}else{m.setAttribute("class","month_day_cell_item");m.className="month_day_cell_item"}};function l(n){if(n==null||n.isEditable()){m.setDisabled(false)}else{m.setDisabled(true)}}if(a.getProjectID()==0){l(null)}else{var f=g.getProjectCache().getProject(a.getProjectID());if($obj(f)&&f!=null){l(f)}else{var k=new jive.model.ProjectCacheListener();k.loadProject=function(n){if(n.getID()==a.getProjectID()){l(n);g.getProjectCache().removeListener(this)}};g.getProjectCache().addListener(k)}}};
;
jive.gui.isMonthEventDOM=function(a){return $def(a)&&$def(a.getEvent)};jive.gui.isMonthTaskDOM=function(a){return $def(a)&&$def(a.getTask)};jive.gui.MiniMonthView=function(o,i){var n=this;var u=false;var f=null;this.hasAddView=function(){if(f==null){f=$obj(i.getView("add_event"))}return f};this.dayCells=new jive.ext.y.HashTable();this.eventDOMHolders=new jive.ext.y.HashTable();this.taskDOMHolders=new jive.ext.y.HashTable();this.cpDOMHolders=new jive.ext.y.HashTable();var G=false;var c=new jive.ext.y.HashTable();var k=new jive.ext.y.HashTable();var F=new jive.ext.y.HashTable();var x=new jive.ext.y.HashTable();var d=new jive.ext.y.HashTable();var H=new jive.ext.y.HashTable();var e=document.createElement("DIV");e.setAttribute("class","month_view_holder");e.className="month_view_holder";var s=true;this.setItemVisibility=function(I){s=I};this.getItemVisibility=function(){return s};function m(K){var J=n.taskDOMHolders.get(K.getID());if($obj(J)&&J!=null){J.refresh();return J}var L=new jive.gui.TaskDOM(o,K,i.notifyTaskClicked,i.notifyTaskDblClicked);J=L.getDOM();J.refresh=L.refresh;J.lighten=L.lighten;J.darken=L.darken;J.getTask=L.getTask;J.killYourself=L.killYourself;J.myParent=null;n.taskDOMHolders.put(K.getID(),J);x.put(K.getID(),K.getProjectID());var I=c.get(K.getProjectID());if(!$obj(I)||I==null){I=new jive.ext.y.HashTable();c.put(K.getProjectID(),I)}I.put(K.getID(),J);if(n.getItemVisibility()){J.style.visibility="visible"}else{J.style.visibility="hidden"}return J}function l(L){var K=n.cpDOMHolders.get(L.getID());if($obj(K)&&K!=null){K.refresh();return K}var J=new jive.gui.CPDOM(o,L,i.notifyCheckPointClicked,i.notifyCheckPointDblClicked);K=J.getDOM();K.refresh=J.refresh;K.lighten=J.lighten;K.darken=J.darken;K.getCheckPoint=J.getCheckPoint;K.killYourself=J.killYourself;K.myParent=null;n.cpDOMHolders.put(L.getID(),K);d.put(L.getID(),L.getProject().getID());var I=F.get(L.getProject().getID());if(!$obj(I)||I==null){I=new jive.ext.y.HashTable();F.put(L.getProject().getID(),I)}I.put(L.getID(),K);if(n.getItemVisibility()){K.style.visibility="visible"}else{K.style.visibility="hidden"}return K}function r(L){var N=new Date();N.setTime(L.getTime());var M=N.getDate();var K=n.dayCells.get(M);if($arr(K)){for(var J=0;J<K.length;J++){if(jive.model.monthYearEQ(K[J].getDate(),N)){return K[J].getDOM()}}}else{K=new Array();n.dayCells.put(M,K)}var I=new jive.gui.MonthDayGroupedCell(o,i,n,N);K.push(I);return I.getDOM()}this.hasPrintView=function(){return true};this.isExpandedHuh=function(){return u};this.expand=function(){u=true;i.showArrows();jive.ext.x.xDisplayBlock(e)};this.collapse=function(){u=false;jive.ext.x.xDisplayNone(e)};function E(){var I=new Date();I.setTime(i.getCurrentDate().getTime());jive.model.dateMinusMonth(I);i.setCurrentDate(I);i.notifyMonthClicked(I)}function q(){var I=new Date();I.setTime(i.getCurrentDate().getTime());I.setMonth(I.getMonth()+1);while(I.getMonth()>i.getCurrentDate().getMonth()+1){jive.model.dateMinusDay(I)}i.setCurrentDate(I);i.notifyMonthClicked(I)}this.getPrevViewFunc=function(){return E};this.getNextViewFunc=function(){return q};this.getMinDate=function(){return i.getMinDate()};this.getMaxDate=function(){return i.getMaxDate()};this.getHeaderText=function(){var J=o.getLanguageManager().getActiveLanguage();var I=new Date();I.setTime(i.getCurrentDate().getTime());return J.longMonth(I.getMonth())};this.go=function(I){i.setCurrentDate(I);n.showMonth(i.getCurrentDate())};this.getName=function(){return"month"};this.getHash=function(){return"month"};this.updateText=function(){if(e.childNodes.length>0){var I=o.getSettingsManager().getStartWeekOn();var K=o.getLanguageManager().getActiveLanguage();for(var J=I;J-I<7;J++){var L=e.childNodes[0].childNodes[0].childNodes[(J-I)%7];if(L.childNodes.length>0){L.removeChild(L.childNodes[0])}L.appendChild(document.createTextNode(K.longDay(J%7)));L.setAttribute("height","2");L.height="2"}}};this.getDOM=function(){return e};var D;function w(L,O){var N;var M;var I;if($def(L.getEvent)){var K=L.getEvent();N=K.getSubject().toLowerCase();M=K.getDescription().toLowerCase();I=K.getCalendarId()}else{if($def(L.getTask)){var J=L.getTask();N=J.getSubject().toLowerCase();M=J.getDescription().toLowerCase();I=J.getProjectID()}}if(o.isCalendarVisibleHuh(I)){if(O.length==0||O.length>0&&(N.indexOf(O)>=0||M.indexOf(O)>=0)){if(L.darken){L.darken()}}else{if(L.lighten){L.lighten()}}}}var a="";var j=(new Date()).getMonth();this.filter=function(O){if(a!=O||j!=i.getCurrentDate().getMonth()){a=O;j=i.getCurrentDate().getMonth();if(n.isExpandedHuh()){D=""+(new Date()).getTime()+""+Math.random();var N=D;var M=new Date();var L=i.getMinDate();var J=i.getMaxDate();M.setTime(L.getTime());O=O.toLowerCase();while(N==D&&(M.getTime()<J.getTime()+24*60*60*1000)){var I=r(M);for(var K=1;K<I.childNodes.length;K++){w(I.childNodes[K],O)}M.setTime(M.getTime()+24*60*60*1000)}}}};this.addEvent=function(P){try{var J=o.getSettingsManager();var R=h(P);var Q=new Date();if(P.isAllDay()){Q.setTime(P.getStart().getTime())}else{Q.setTime(J.adjustDate(P.getStart()).getTime())}var K=0;var N=new Date();if(P.isAllDay()){N.setTime(P.getEnd().getTime())}else{N.setTime(J.adjustDate(P.getEnd()).getTime())}if(jive.model.dateLT(Q,o.getEventCache().getMinTime())){Q.setTime(o.getEventCache().getMinTime().getTime())}if(jive.model.dateGT(N,o.getEventCache().getMaxTime())){N.setTime(o.getEventCache().getMaxTime().getTime())}while(jive.model.dateLTEQ(Q,N)){var O=r(Q);if($def(o.getDragManager)){var L=o.getDragManager();var I=new Date();I.setTime(Q.getTime());var S=new jive.gui.CellDragListener(o,P,I,o.notifyStopDrag,o.notifyDragging);if($obj(R[K].monthViewDList)&&R[K].monthViewDList!=null){L.removeDragListener(R[K],R[K].monthViewDList)}R[K].monthViewDList=S;L.enableDrag(R[K]);L.addDragListener(R[K],S)}if(!o.isCalendarVisibleHuh(P.getCalendarId())){jive.ext.x.xDisplayNone(R[K])}else{jive.ext.x.xDisplayBlock(R[K])}var T=i.getFilterText();w(R[K],T);O.appendEventDOM(R[K]);R[K].myParent=O;K++;Q.setDate(Q.getDate()+1)}}catch(M){alert("error adding event to month view: "+M)}};this.addCheckPoint=function(M){try{var O=l(M);var N=r(M.getDueDate());N.appendCheckPointDOM(O);O.myParent=N;O.refresh();if($def(o.getDragManager)){var J=o.getDragManager();var K=new Date();K.setTime(ttask.getDueDate());var I=new jive.gui.CellDragListener(o,ttask,K,o.notifyStopDrag,o.notifyDragging);if($obj(O.monthViewDList)&&O.monthViewDList!=null){J.removeDragListener(O,O.monthViewDList)}O.monthViewDList=I;J.enableDrag(O);J.addDragListener(O,I)}if(!o.isCalendarVisibleHuh(M.getProject().getID())){jive.ext.x.xDisplayNone(O)}else{jive.ext.x.xDisplayBlock(O)}}catch(L){alert(L)}};this.addTask=function(L){try{var O=m(L);var N=r(L.getDueDate());N.appendTaskDOM(O);O.myParent=N;O.refresh();if($def(o.getDragManager)){var J=o.getDragManager();var K=new Date();K.setTime(L.getDueDate());var I=new jive.gui.CellDragListener(o,L,K,o.notifyStopDrag,o.notifyDragging);if($obj(O.monthViewDList)&&O.monthViewDList!=null){J.removeDragListener(O,O.monthViewDList)}O.monthViewDList=I;J.enableDrag(O);J.addDragListener(O,I)}if(!o.isCalendarVisibleHuh(L.getProjectID())){jive.ext.x.xDisplayNone(O)}else{jive.ext.x.xDisplayBlock(O)}}catch(M){alert(M)}};this.removeEvent=function(K){try{var M=o.getSettingsManager();var I=h(K,true);if(jive.ext.y.yArr(I)){for(var L=0;L<I.length;L++){if($def(o.getDragManager())){var J=o.getDragManager();J.removeDragListener(I[L],I[L].monthViewDList);J.disableDrag(I[L])}if($obj(jive.ext.x.xParent(I[L]))&&jive.ext.x.xParent(I[L])!=null){jive.ext.x.xParent(I[L]).removeChild(I[L]);I[L].myParent=null}else{if($obj(I[L].myParent)&&I[L].myParent!=null){I[L].myParent.removeChild(I[L]);I[L].myParent=null}}I[L].killYourself()}}}catch(N){alert("error removing event: "+N)}};this.removeTask=function(L){try{var K=o.getSettingsManager();var I=m(L);if($obj(I)){if($def(o.getDragManager)){var J=o.getDragManager();J.removeDragListener(I,I.monthViewDList);J.disableDrag(I)}if($obj(jive.ext.x.xParent(I))&&jive.ext.x.xParent(I)!=null){jive.ext.x.xParent(I).removeChild(I);I.myParent=null}else{if($obj(I.myParent)&&I.myParent!=null){I.myParent.removeChild(I);I.myParent=null}}I.killYourself()}}catch(M){alert("error removing task: "+L.getSubject()+"\nexception: "+M)}};this.flushCalendar=function(K){var J=n.eventDOMHolders.toArray(jive.gui.isMonthEventDOM);for(var I=0;I<J.length;I++){if(J[I].getEvent().getCalendarId()==K.getId()){n.flushEvent(J[I].getEvent())}}var L=n.taskDOMHolders.toArray(jive.gui.isMonthTaskDOM);for(var I=0;I<L.length;I++){if(L[I].getTask().getCalendarId()==K.getId()){n.flushTask(L[I].getTask())}}};this.flushEvent=function(K){try{n.removeEvent(K);n.eventDOMHolders.clear(K.getId());var I=H.get(K.getId());var J=k.get(I);J.clear(K.getId())}catch(L){alert("error flushing event")}};this.flushTask=function(K){try{n.removeTask(K);n.taskDOMHolders.clear(K.getID());var I=x.get(K.getID());var J=c.get(I);J.clear(K.getID())}catch(L){alert("flushEvent: "+L)}};this.refresh=function(){var M=o.getSettingsManager();var I=n.eventDOMHolders.toArray(jive.gui.isMonthEventDOM);try{for(var K=0;K<I.length;K++){var L=I[K].getEvent();var J=M.getOldTimezone();if(!jive.model.dateEQ(M.adjustDate(L.getStart()),M.adjustDate(L.getStart(),J))||!jive.model.dateEQ(M.adjustDate(L.getEnd()),M.adjustDate(L.getEnd(),J))){n.flushEvent(L);n.addEvent(L)}}}catch(N){alert(N)}if(n.isExpandedHuh()){n.showMonth(i.getCurrentDate())}n.refreshShading()};this.init=function(I){I.appendChild(e)};this.killYourself=function(){o=null;i=null};this.refreshWeather=function(){var K=new Date();K.setTime(i.getMinDate().getTime());while(jive.model.dateLTEQ(K,i.getMaxDate())){var I=r(K);var M=o.getSettingsManager().getWeatherImage(K);var J=I.style.backgroundColor;if(M.length>0){var L=22;if(K.getDate()==1){L=42}else{L=22}I.style.background="url("+M+") "+L+"px 2px no-repeat "+I.style.backgroundColor}else{I.style.background=""}I.style.backgroundColor=J;K.setDate(K.getDate()+1)}};this.refreshShading=function(){var P=o.getSettingsManager();var K=P.getStartWeekOn();var O=new Date();O.setTime(i.getMaxDate().getTime());var N=new Date();N.setTime(i.getMinDate().getTime());N.setHours(17);N.setDate(1);var I=N.getDay();if(K!=0&&I==0){I=7}N.setDate(N.getDate()-I+K);var L=new Date();L.setTime(N.getTime());var Q=new Array();Q[0]="#ffffff";Q[1]="#ffffff";Q[2]="#f7f7f7";Q[3]="#CFCFCF";Q[4]="#BFBFBF";var M=P.getNOW();var S=P.getSmartShading();var J=i.getCurrentDate().getMonth();while(L.getMonth()<=O.getMonth()&&L.getYear()==O.getYear()||L.getYear()<O.getYear()){var U=r(N);var T=jive.model.dateEQ(N,M);if(S){var R=U.countVisibleItems();if(R>1){R=2}else{if(R<0){R=0}}if(T){U.style.backgroundColor="#e4f6e7";U.outColor="#e4f6e7"}else{U.style.backgroundColor=Q[R];U.outColor=Q[R]}}else{if(U.getDate().getMonth()!=J){U.style.backgroundColor=Q[3];U.outColor=Q[3]}else{U.style.backgroundColor=Q[0];U.outColor=Q[0]}}if(T){U.style.backgroundColor="#e4f6e7";U.setAttribute("class","month_cell month_today_cell");U.className="month_cell month_today_cell";U.overColor="#ffffda"}else{U.setAttribute("class","month_cell month_day_cell");U.className="month_cell month_day_cell";U.overColor="#ffffda"}N.setDate(N.getDate()+1);if(N.getDay()==0){L.setTime(N.getTime())}}n.refreshWeather()};this.calendarVisible=function(M,K){var L=o.getSettingsManager().getShowTasks();var N=c.get(M.getId());if($obj(N)&&N!=null){N=N.toArray();for(var J=0;J<N.length;J++){if(K&&L){jive.ext.x.xDisplayBlock(N[J])}else{jive.ext.x.xDisplayNone(N[J])}}}var N=k.get(M.getId());if($obj(N)&&N!=null){N=N.toArray();for(var J=0;J<N.length;J++){for(var I=0;I<N[J].length;I++){if(K){jive.ext.x.xDisplayBlock(N[J][I])}else{jive.ext.x.xDisplayNone(N[J][I])}}}}n.refreshShading()};this.stopDrag=function(M,I,J,O){var P=false;if(n.isExpandedHuh()){if(e.childNodes.length>0){var Q=e.childNodes[0];for(var L=1;L<Q.childNodes.length;L++){tr=Q.childNodes[L];for(var K=0;K<tr.childNodes.length;K++){if(tr.childNodes[K].childNodes.length>0){var N=tr.childNodes[K];if(jive.ext.x.xHasPoint(N,J,O)){if($def(N.dropPoint)){N.dropPoint(M,I);P=true}}}}}}}return P};var A=null;var b=0;this.dragging=function(N,I,J,P){b++;var R=b;var M=false;if(A!=null){if(jive.ext.x.xHasPoint(A,J,P)){var Q=Math.floor(0.95*jive.ext.x.xWidth(A));o.showHoverOver(jive.ext.x.xPageX(A),jive.ext.x.xPageY(A),Q,jive.ext.x.xHeight(A));M=true}}if(e.childNodes.length>0&&!M){var S=e.childNodes[0];for(var L=1;L<S.childNodes.length&&R==b&&!M;L++){tr=S.childNodes[L];for(var K=0;K<tr.childNodes.length&&R==b&&!M;K++){var O=tr.childNodes[K];if(jive.ext.x.xHasPoint(O,J,P)){if($def(O.dropPoint)){var Q=Math.floor(0.95*jive.ext.x.xWidth(O));o.showHoverOver(jive.ext.x.xPageX(O),jive.ext.x.xPageY(O),Q,jive.ext.x.xHeight(O));A=O;M=true}}}}if(R!=b){return}}if(!M){o.hideHover()}return M};this.fixHeight=function(K){try{jive.ext.x.xHeight(e,K);var K=K-20;if(e.childNodes.length>0){var L=e.childNodes[0];K+=K%(L.childNodes.length-1);for(var J=1;J<L.childNodes.length;J++){var M=L.childNodes[J];jive.ext.x.xHeight(M,Math.floor(K/(L.childNodes.length-1)));if(jive.ext.x.xIE4Up){for(var I=0;I<M.childNodes.length;I++){jive.ext.x.xDisplayNone(M.childNodes[I]);jive.ext.x.xDisplayBlock(M.childNodes[I])}}}}}catch(N){alert(N)}};this.getEventsOn=function(L){var K=new Array();var I=r(L);for(var J=1;J<I.childNodes.length;J++){if($def(I.childNodes[J].getEvent)){K.push(I.childNodes[J].getEvent())}}return K};this.getTasksOn=function(K){var L=new Array();var I=r(K);for(var J=1;J<I.childNodes.length;J++){if($def(I.childNodes[J].getTask)){L.push(I.childNodes[J].getTask())}}return L};function h(N,Q){try{var I=o.getSettingsManager();var O=new Date();var L=new Date();if(N.isAllDay()){O.setTime(N.getStart().getTime());L.setTime(N.getEnd().getTime())}else{O.setTime(I.adjustDate(N.getStart()).getTime());L.setTime(I.adjustDate(N.getEnd()).getTime())}if(jive.model.dateLT(O,o.getEventCache().getMinTime())){O.setTime(o.getEventCache().getMinTime().getTime())}if(jive.model.dateGT(L,o.getEventCache().getMaxTime())){L.setTime(o.getEventCache().getMaxTime().getTime())}}catch(M){alert("top of getdomarray: "+M)}try{var P=n.eventDOMHolders.get(N.getId());if(!$obj(P)){if($def(Q)&&Q){return null}P=new Array();P.getEvent=function(){return N};n.eventDOMHolders.put(N.getId(),P);H.put(N.getId(),N.getCalendarId());var R=k.get(N.getCalendarId());if(!$obj(R)||R==null){R=new jive.ext.y.HashTable();k.put(N.getCalendarId(),R)}R.put(N.getId(),P)}var K=0;while(jive.model.dateLTEQ(O,L)){if(P.length<=K){var S=function(T){return function(U){var V=new jive.model.DateHelper(o);if(jive.model.dateEQ(I.adjustDate(U),T)){return V.formatTo12HourTime(I.adjustDate(U))}else{return V.formatToShortDate(I.adjustDate(U))}}}(O);var J=o.getEventDOMFactory().getEventDOM(N,i.notifyEventClicked,i.notifyEventDblClicked,S);J.showTimes(false);J.getDOM().myParent=null;J.getDOM().killYourself=J.killYourself;J.getDOM().refresh=J.refresh;J.getDOM().lighten=J.lighten;J.getDOM().darken=J.darken;J=J.getDOM();P[K]=J}else{P[K].refresh()}K++;O.setDate(O.getDate()+1)}while(P.length>K){if($obj(jive.ext.x.xParent(P[K]))&&jive.ext.x.xParent(P[K])!=null){jive.ext.x.xParent(P[K]).removeChild(P[K]);P[K].myParent=null}else{if($obj(P[K].myParent)&&P[K].myParent!=null){P[K].myParent.removeChild(P[K]);P[K].myParent=null}}P[K].killYourself();P.splice(K,1)}for(var K=0;K<P.length;K++){if(n.getItemVisibility()){P[K].style.visibility="visible"}else{P[K].style.visibility="hidden"}}return P}catch(M){alert("getting array dom in month: "+M)}}var g=2;this.setNumWeeks=function(I){g=I};var v=null;var z=null;var p=0;this.showMonth=function(T){var ab=o.getSettingsManager();var Q=ab.getStartWeekOn();p++;u=true;var ac=new Date();ac.setTime(T.getTime());ac.setHours(17);Q=0;var P=ac.getDay();if(Q!=0&&P==0){P=7}ac.setDate(ac.getDate()-P+Q);var N=new Date();N.setTime(T.getTime());var ad=o.getLanguageManager().getActiveLanguage();var L=new Array();if(G||v==null||!jive.model.dateEQ(v,ac)){G=false;var Y=new Date();Y.setTime(ac.getTime());i.setMinDate(Y);var J;var O;var I;var Z=document.createElement("DIV");Z.setAttribute("class","month_table");Z.className="month_table";while(e.childNodes.length>0){e.removeChild(e.childNodes[0])}I=document.createElement("DIV");Z.appendChild(I);jive.ext.x.xHeight(I,20);for(var W=Q;W-Q<7;W++){O=document.createElement("DIV");I.appendChild(O);O.setAttribute("class","month_table_th");O.className="month_table_th";if(jive.ext.x.xWidth(e)>640){O.appendChild(document.createTextNode(ad.longDay(W%7)))}else{O.appendChild(document.createTextNode(ad.shortDay(W%7)))}O.style.left=((W-Q)*14.2857)+"%"}var R=new Array();var K=0;for(var W=0;W<g*7;W++){if(ac.getDay()==Q){I=document.createElement("DIV");I.setAttribute("class","month_table_row");I.className="month_table_row";R.push(I);K=0}O=r(ac);O.updateText();O.over=false;I.appendChild(O);O.style.left=(K*14.2857)+"%";K++;var aa=new Date();aa.setTime(ac.getTime());ac=aa;ac.setDate(ac.getDate()+1);if(ac.getDay()==Q){N.setTime(ac.getTime())}if(jive.ext.x.xIE4Up){var U=n.getTasksOn(ac);L=L.concat(U)}}for(var W=0;W<R.length;W++){Z.appendChild(R[W])}i.setMaxDate(ac);var M=new Date();M.setTime(T.getTime());M.setHours(17);i.setCurrentDate(M);var ad=o.getLanguageManager().getActiveLanguage();e.appendChild(Z);for(var W=1;W<Z.childNodes.length;W++){var I=Z.childNodes[W];for(var V=0;V<I.childNodes.length;V++){var J=I.childNodes[V];if(J.childNodes.length>0){jive.ext.x.xZIndex(J.childNodes[0],10+W)}}}v=new Date();z=new Date();v.setTime(i.getMinDate().getTime());z.setTime(i.getMaxDate().getTime())}else{if(jive.ext.x.xIE4Up){while(N.getMonth()<=T.getMonth()&&N.getYear()==T.getYear()||N.getYear()<T.getYear()){var aa=new Date();aa.setTime(ac.getTime());ac=aa;ac.setDate(ac.getDate()+1);if(ac.getDay()==Q){N.setTime(ac.getTime())}var U=n.getTasksOn(ac);L=L.concat(U)}}i.setMinDate(v);i.setMaxDate(z)}if(jive.ext.x.xIE4Up){for(var W=0;W<L.length;W++){var X=m(L[W]);X.refresh()}}n.refreshShading();var S=i.getFilterText();n.filter(S);i.fixHeight()};function y(){if(jive.model.isEvent(i.getSelectedItem())){var J=h(i.getSelectedItem());for(var I=0;I<J.length;I++){w(J[I],i.getFilterText())}}if(jive.model.isTask(i.getSelectedItem())){var J=m(i.getSelectedItem());w(J,i.getFilterText())}}function C(){var J=o.getSettingsManager().getStartWeekOn();var N=i.getCurrentDate();var O=new Date();O.setTime(N.getTime());O.setHours(17);O.setDate(1);var K=O.getDay();if(J!=0&&K==0){K=7}O.setDate(O.getDate()-K+J);var I=new Date();I.setTime(N.getTime());i.setMinDate(O);while(I.getMonth()<=N.getMonth()&&I.getYear()==N.getYear()||I.getYear()<N.getYear()){var P=new Date();P.setTime(O.getTime());O=P;O.setDate(O.getDate()+1);if(O.getDay()==J){I.setTime(O.getTime())}}var M=new Date();M.setTime(O.getTime());M.setDate(M.getDate()+1);i.setMaxDate(M);var L=new Date();L.setTime(N.getTime());L.setHours(17);i.setCurrentDate(L);v=new Date();z=new Date();v.setTime(i.getMinDate().getTime());z.setTime(i.getMaxDate().getTime());G=true}function t(){var L=o.getSettingsManager().getShowTasks();if(L){var M=o.getCalendarCache().getCalendars();for(var K=0;K<M.length;K++){if(o.isCalendarVisibleHuh(M[K].getId())){var I=c.get(M[K].getId());if($obj(I)){var N=I.toArray();for(var J=0;J<N.length;J++){if($def(N[J].getTask)){jive.ext.x.xDisplayBlock(N[J])}}}}}}else{var N=n.taskDOMHolders.toArray(jive.gui.isMonthTaskDOM);for(var K=0;K<N.length;K++){if($def(N[K].getTask)){jive.ext.x.xDisplayNone(N[K])}}}}var B=new Object();B.eventClicked=function(I){y();var K=h(I);if($obj(K)){for(var J=0;J<K.length;J++){K[J].setAttribute("class","month_day_cell_item_highlight");K[J].className="month_day_cell_item_highlight"}}};B.eventDblClicked=function(I){};B.taskClicked=function(I){y();var J=m(I);if($obj(J)){J.setAttribute("class","month_day_cell_item_highlight");J.className="month_day_cell_item_highlight"}};B.taskDblClicked=function(I){};B.unselectAll=function(){y()};i.addEventListener(B);var B=new jive.model.ProjectCacheListener();B.loadProject=function(J){var K=J.getCheckPoints();for(var I=0;I<K.length;I++){n.addCheckPoint(K[I])}};o.getProjectCache().addListener(B);var B=new jive.model.TaskCacheListener();B.loadTask=function(I){if(I.hasDueDate()){n.addTask(I)}};B.doneLoadingTasks=function(){n.refreshShading()};B.taskChanged=function(I){n.refreshShading()};B.savingTask=function(I){var J=m(I);J.setDisabled(true)};B.doneSavingTask=function(K){p++;n.refreshShading();if(K.hasDueDate()){var L=m(K);L.refresh();L.setDisabled(false)}var J=x.get(K.getID());if(J!=K.getProjectID()){var I=c.get(J);I.clear(K.getID());var I=c.get(K.getProjectID());if(!$obj(I)||I==null){I=new jive.ext.y.HashTable();c.put(K.getProjectID(),I)}I.put(K.getID(),L)}};B.savingTaskFailed=function(I){n.refreshShading();var J=m(I);J.setDisabled(false);J.setChecked(I.getStatus()=="Complete")};B.deletingTask=function(I){n.refreshShading()};B.doneDeletingTask=function(I){n.refreshShading()};B.deletingTaskFailed=function(I){n.refreshShading()};B.deletingTaskSeries=function(I){n.refreshShading()};B.doneDeletingTaskSeries=function(I){n.refreshShading()};B.deletingTaskSeriesFailed=function(I){n.refreshShading()};o.getTaskCache().addListener(B);C();jive.ext.x.xDisplayNone(e)};
;
jive.gui.MonthDayCell=function(e,c,f,d){var a=new jive.gui.MonthDayGroupedCell(e,c,f,d);var b=a.getDOM();this.getTasks=b.getTasks;b.appendTaskDOM=function(g){var j=g.getTask().getSubject().toLowerCase();for(var h=0;h<b.childNodes.length;h++){if($def(b.childNodes[h].getEvent)){b.insertBefore(g,b.childNodes[h]);break}else{if($def(b.childNodes[h].getTask)){if(b.childNodes[h].getTask().getSubject().toLowerCase()>j){b.insertBefore(g,b.childNodes[h]);break}}}}if(h==b.childNodes.length){b.appendChild(g)}};this.appendTaskDOM=b.appendTaskDOM;b.removeTaskDOM=function(g){b.removeChild(g)};this.removeTaskDOM=b.removeTaskDOM;b.getTasks=function(){var g=b;var j=new Array();for(var h=1;h<g.childNodes.length;h++){if($def(g.childNodes[h].getTask)){j.push(g.childNodes[h].getTask())}}return j};this.getDOM=function(){return b}};
;
jive.gui.MonthDayGroupedCell=function(i,d,t,l){var g=this;var j=new JiveProjectTooltip(i.getTaskManager().getProjectID(),"jive-note-checkpoint-body","jive-note-tasks-body","jive-note-additems-body","","","","","");var m=i.getLanguageManager().getActiveLanguage();var s=document.createElement("DIV");var r=l.getDate();var c="month_day_cell_number no-underline";if(l.getDate()==1){r=m.shortMonth(l.getMonth())+" "+r;c+=" start_month_day_cell_number font-color-notify"}var u=new jive.ext.y.HashTable();var h=new jive.ext.y.HashTable();var b=document.createElement("SPAN");b.getDate=function(x){return function(){return x}}(l);b.setAttribute("class",c);b.className=c;var q=document.createElement("SPAN");q.id="add_link";q.setAttribute("class","month_day_cell_number_link");q.className="month_day_cell_number_link";q.appendChild(document.createTextNode("[ + ]"));jive.ext.x.xDisplayNone(q);b.appendChild(q);b.appendChild(document.createTextNode(r));s.appendChild(b);var p=0;var o=document.createElement("A");var w=document.createElement("span");var v=document.createElement("span");o.appendChild(w);w.className="jive-icon-sml jive-icon-checkpoint";w.setAttribute("class","jive-icon-sml jive-icon-checkpoint");o.href="javascript:;";o.className="jive-cal-checkpoint jiveTT-hover-checkpoint clearfix";o.setAttribute("class","jive-cal-checkpoint jiveTT-hover-checkpoint clearfix");v.setAttribute("class","j-508");s.appendChild(o);jive.ext.x.xDisplayNone(o);var a=0;var e=document.createElement("A");var n=document.createElement("span");var k=document.createElement("span");e.appendChild(n);n.className="jive-icon-sml jive-icon-task";n.setAttribute("class","jive-icon-sml jive-icon-task");e.href="javascript:;";e.className="jiveTT-hover-tasks no-underline clearfix";e.setAttribute("class","jiveTT-hover-tasks no-underline clearfix");k.setAttribute("class","j-offscreen");s.appendChild(e);jive.ext.x.xDisplayNone(e);var f=document.createElement("DIV");f.href="javascript:;";s.appendChild(f);jive.ext.x.xDisplayNone(f);jive.ext.x.xAddEventListener(e,"mouseover",function(x){return function(P){var M=j.getDOM();while(M.childNodes.length>0){M.removeChild(M.childNodes[0])}var Q=document.createElement("strong");var y=(e!=1)?_jive_project_i18n["project.calendar.tasks"]:_jive_project_i18n["project.calendar.task"];var D=i.getTaskManager();D.dateI18nTask(g.getDate(),function(T){Q.appendChild(document.createTextNode(T+" - "+a+" "+y))});var F=document.createElement("UL");var H=g.getTasks();for(var L=0;L<H.length;L++){var A=H[L];var E=document.createElement("LI");E.className="clearfix";E.setAttribute("class","clearfix");var O=document.createElement("A");O.className="jiveTT-hover-user jive-username-link";O.href=A.getAssignedTo().getURL();var R=document.createElement("IMG");R.className="jive-avatar";R.setAttribute("class","jive-avatar");if(A.getAssignedTo().getID()>0){R.src=CS_BASE_URL+"/people/"+A.getAssignedTo().getUsername()+"/avatar/22.png"}else{R.src=CS_BASE_URL+"/people/guest/avatar/22.png"}O.appendChild(R);var K=document.createElement("SPAN");if(A.getAssignedTo().getID()>0){var S=document.createElement("A");S.href=A.getAssignedTo().getURL();S.className="jiveTT-hover-user jive-username-link";S.setAttribute("class","jiveTT-hover-user jive-username-link");S.appendChild(document.createTextNode(A.getAssignedTo().getFullName()));jive.ext.x.xAddEventListener(S,"mouseover",function(T){return function(){quickuserprofile.getUserProfileTooltip(T)}}(A.getAssignedTo().getID()));jive.ext.x.xAddEventListener(S,"mouseout",function(){quickuserprofile.cancelTooltip()})}else{var S=document.createTextNode(A.getAssignedTo().getFullName())}var N=document.createElement("A");N.href=A.getURL();N.className="j-task-link";N.appendChild(document.createTextNode(A.getSubject()));K.appendChild(S);K.appendChild(N);E.appendChild(O);E.appendChild(K);F.appendChild(E);if(i.getProjectCache().getProjects()[0].isEditable()){var I=document.createElement("P");I.className="clearfix";var J=document.createElement("A");J.href=CS_BASE_URL+"/edit-task!input.jspa?project="+A.getProjectID()+"&task="+A.getID();J.appendChild(document.createTextNode(_jive_project_i18n["global.edit"]));var C=document.createElement("A");C.onclick=function(){jiveControl.getTaskManager().deleteTask(A.getID(),A.isParent());return false};C.href="javascript:void(0);";C.appendChild(document.createTextNode(_jive_project_i18n["global.delete"]));I.appendChild(J);I.appendChild(C);if(!A.isComplete()){var G=document.createElement("A");G.onclick=function(){jiveControl.getTaskManager().markTaskComplete(A.getID(),A.isParent());return false};G.href="javascript:void(0);";G.appendChild(document.createTextNode(_jive_project_i18n["project.task.mark.complete"]));I.appendChild(G);if(A.getAssignedTo().getID()!=i.getUserID()&&A.getAssignedTo().getID()<1){var z=document.createElement("A");z.onclick=function(){jiveControl.getTaskManager().takeTask(A.getID());return false};z.href="javascript:void(0);";z.appendChild(document.createTextNode(_jive_project_i18n["project.task.assign.to.me"]));I.appendChild(z)}}if(A.isComplete()){var B=document.createElement("A");B.onclick=function(){jiveControl.getTaskManager().markTaskInComplete(A.getID());return false};B.href="javascript:void(0);";B.appendChild(document.createTextNode(_jive_project_i18n["task.incomplete.link"]));I.appendChild(B)}K.appendChild(I)}}M.appendChild(Q);M.appendChild(F)}}(l));jive.ext.x.xAddEventListener(o,"mouseover",function(x){return function(F){var C=j.getCheckPointDOM();while(C.childNodes.length>0){C.removeChild(C.childNodes[0])}var I=document.createElement("strong");var L=(p!=1)?_jive_project_i18n["project.calendar.checkpoints"]:_jive_project_i18n["project.calendar.checkpoint"];var y=i.getTaskManager();y.dateI18nTask(g.getDate(),function(O){I.appendChild(document.createTextNode(O+" - "+p+" "+L))});var G=document.createElement("UL");var E=g.getCheckPoints();for(var D=0;D<E.length;D++){var H=E[D];var M=document.createElement("LI");M.className="clearfix";var K=document.createElement("DIV");var z=document.createElement("STRONG");var B=document.createElement("span");z.appendChild(B);B.className="jive-icon-med jive-icon-checkpoint";B.setAttribute("class","jive-icon-med jive-icon-checkpoint");z.appendChild(document.createTextNode(H.getName()));K.appendChild(z);if(H.getProject().isEditable()){var A=document.createElement("div");A.className="j-cplink clearfix";var J=document.createElement("A");J.href=CS_BASE_URL+"/edit-checkpoint!input.jspa?project="+H.getProject().getID()+"&checkPointID="+H.getID();J.appendChild(document.createTextNode(_jive_project_i18n["global.edit"]));var N=document.createElement("A");N.href=CS_BASE_URL+"/delete-checkpoint!input.jspa?project="+H.getProject().getID()+"&checkPointID="+H.getID();N.appendChild(document.createTextNode(_jive_project_i18n["global.delete"]));A.appendChild(J);A.appendChild(N);K.appendChild(A)}M.appendChild(K);G.appendChild(M)}C.appendChild(I);C.appendChild(G)}}(l));jive.ext.x.xAddEventListener(s,"mouseover",function(x){var F=jiveControl.getCheckPointManager().getCanCreate();var y=jiveControl.getTaskManager().getCanCreate();if(!i.getProjectCache().getProjects()[0].isEditable()||(!F&&!y)){$j("#jiveTT-note-additems").hide();return}var z=j.getCreateLinkDOM();while(z.childNodes.length>0){z.removeChild(z.childNodes[0])}var E=document.createElement("div");E.id="jive-note-add-item-body";if(F){var B=document.createElement("span");B.className="jive-icon-med jive-icon-checkpoint";var A=document.createElement("A");A.className="";A.href="#";A.onclick=function(){jiveControl.getCheckPointManager().addCheckPoint(g.getDate().getTime());return false};A.appendChild(document.createTextNode(_jive_project_i18n["project.checkPoint.create.link"]));E.appendChild(B);E.appendChild(A)}if(y){var D=document.createElement("span");D.className="jive-icon-med jive-icon-task";var C=document.createElement("A");C.href="#";C.onclick=function(){jiveControl.getTaskManager().addTask(g.getDate().getTime());return false};C.appendChild(document.createTextNode(_jive_project_i18n["project.task.create.link"]));E.appendChild(D);E.appendChild(C)}z.appendChild(E)});s.mouseover=function(){if(typeof(jive)!="undefined"){var y=s.getAttribute("class");if(y==null){y==""}if(i.getProjectCache().getProjects()[0].isEditable()){if(y.indexOf("jiveTT-hover-")==-1){s.setAttribute("class",y+" jiveTT-hover-additems");s.className=y+" jiveTT-hover-additems"}}try{if(!s.overed){s.outColor=s.style.backgroundColor}if(!i.isReadOnly()&&t.getItemVisibility()&&t.hasAddView()){jive.ext.x.xDisplayBlock(q)}s.style.backgroundColor=s.overColor;s.overed=true}catch(x){}}};s.mouseout=function(){if(typeof(jive)!="undefined"){try{jive.ext.x.xDisplayNone(q);s.style.backgroundColor=s.outColor;s.overed=false}catch(x){}}};s.updateText=function(){var x=i.getLanguageManager().getActiveLanguage();var z=l.getDate();if(l.getDate()==1){var y=b.childNodes[0];z=x.shortMonth(l.getMonth())+" "+z;while(b.childNodes.length>0){b.removeChild(b.childNodes[0])}b.appendChild(y);b.appendChild(document.createTextNode(z))}};s.getDate=function(x){return function(){return x}}(l);s.dropPoint=function(x,A){if(A!=null){var C=new Date();C.setTime(s.getDate().getTime());C.setHours(A.getHours());C.setMinutes(A.getMinutes());C.setSeconds(A.getSeconds());C.setMilliseconds(A.getMilliseconds());var D=C.getTime()-A.getTime()}if(A!=null&&D!=0&&jive.model.isEvent(x)){var z=new Date();z.setTime(x.getStart().getTime());var B=new Date();B.setTime(x.getEnd().getTime());var y=B.getTime()-z.getTime();z.setTime(z.getTime()+D);B.setTime(z.getTime()+y);x.setStart(z);x.setEnd(B);x.confirm()}else{if((A==null||D!=0)&&jive.model.isTask(x)){if(A!=null){var C=new Date();C.setTime(x.getDueDate().getTime()+D);x.setDueDate(C)}else{var C=new Date();C.setTime(s.getDate().getTime());x.setDueDate(C)}x.confirm()}}};s.appendTaskDOM=function(x){u.put(x.getTask().getID(),x.getTask());jive.ext.x.xAddEventListener(e,"mouseout",j.cancelTooltip);a++;jive.ext.x.xDisplayNone(x);while(e.childNodes.length>1){e.removeChild(e.childNodes[1])}var y=(a!=1)?_jive_project_i18n["project.calendar.tasks"]:_jive_project_i18n["project.calendar.task"];e.appendChild(document.createTextNode(""+a+""));jive.ext.x.xDisplayBlock(e)};this.appendTaskDOM=s.appendTaskDOM;s.removeTaskDOM=function(x){u.clear(x.getTask().getID());a--;if(a==0){jive.ext.x.xDisplayNone(e)}};this.removeTaskDOM=s.removeTaskDOM;s.getTasks=function(){return u.toArray(jive.model.isTask)};this.getTasks=s.getTasks;e.getTasks=g.getTasks;s.getCheckPoints=function(){return h.toArray(jive.model.isCheckPoint)};this.getCheckPoints=s.getCheckPoints;o.getCheckPoints=s.getCheckPoints;s.appendEventDOM=function(x){var y=x.getEvent();for(var z=0;z<s.childNodes.length;z++){if($def(s.childNodes[z].getEvent)){if(s.childNodes[z].getEvent().getStart()>y.getStart()){s.insertBefore(x,s.childNodes[z]);break}}}if(z==s.childNodes.length){s.appendChild(x)}};s.appendCheckPointDOM=function(x){h.put(x.getCheckPoint().getID(),x.getCheckPoint());jive.ext.x.xAddEventListener(o,"mouseout",j.cancelTooltip);p++;jive.ext.x.xDisplayNone(x);while(o.childNodes.length>1){o.removeChild(o.childNodes[1])}var y=(p!=1)?_jive_project_i18n["project.calendar.checkpoints"]:_jive_project_i18n["project.calendar.checkpoint"];o.appendChild(document.createTextNode(""+p+""));jive.ext.x.xDisplayBlock(o)};s.countVisibleItems=function(){return g.getTasks().length+g.getCheckPoints().length+1};this.countVisibleItems=s.countVisibleItems;jive.ext.x.xAddEventListener(q,"click",function(x,y){return function(z){x.notifyAddEventClicked(y.getDate());jive.ext.x.xStopPropagation(z)}}(d,b),true);jive.ext.x.xAddEventListener(s,"click",function(x,y){return function(){x.notifyDayClicked(y.getDate())}}(d,b),false);jive.ext.x.xAddEventListener(s,"mouseover",s.mouseover);jive.ext.x.xAddEventListener(s,"mouseout",s.mouseout);this.getDate=s.getDate;this.getDOM=function(){return s}};
;
jive.gui.BasicGui=function(l){var b=null;var o=new Array();var p=new Array();this.addPriorityEventListener=function(z){p.splice(0,0,z)};this.addEventListener=function(z){p.push(z)};var h=new Date();h.setHours(17);var u=new Date();u.setHours(17);var x=new Date();x.setHours(17);var i=this;var q=false;this.hasInitHuh=function(){return q};var e=document.createElement("DIV");e.className="month_view_very_inner";var m=document.createElement("DIV");m.setAttribute("class","month_view_main");m.className="month_view_main";var s=new jive.gui.SimpleHeader(l);var y=document.createElement("DIV");y.setAttribute("class","month_view_inner");y.className="month_view_inner";var n=true;this.showPrintHuh=function(z){n=z;if(z&&i.getActiveView().hasPrintView()){i.getHeader().showPrintHuh(true)}else{i.getHeader().showPrintHuh(false)}};this.shouldShowPrintHuh=function(){return n};this.setNavFilter=function(z){i.getHeader().setNavFilter(z)};this.showFilterHuh=function(z){i.getHeader().showFilterHuh(z)};this.getFilterText=function(){return i.getHeader().getFilterText()};this.getHeaderFooterHeight=function(){return i.getHeader().getHeight()};var w=function(){};var f=function(){};function d(){return w}function a(){return f}var j=new jive.ext.y.HashTable();this.isViewHuh=function(z){return z!=null&&$obj(z)&&$def(z.isExpandedHuh)};this.addView=function(z){var A=i.getView(z.getName());if(!$obj(A)||A==null){j.put(z.getHash(),z);if(i.hasInitHuh()){z.init(e);z.collapse()}}};this.removeView=function(z){j.clear(z)};this.getAllViews=function(){return j.toArray(i.isViewHuh)};this.getView=function(z){return j.get(z)};this.showView=function(D,C){var A=i.getAllViews();var z=false;for(var B=0;B<A.length;B++){if(A[B].getHash()==C){z=true}}if(!z){return i.showView(D,"month")}for(var B=0;B<A.length;B++){if(A[B].getHash()==C){if(!A[B].isExpandedHuh()){A[B].expand()}if(A[B].hasPrintView()&&n){i.getHeader().showPrintHuh(true)}else{i.getHeader().showPrintHuh(false)}A[B].go(D);i.getHeader().setTitleText(jive.util.escapeHTML(A[B].getHeaderText(D)));w=A[B].getPrevViewFunc();f=A[B].getNextViewFunc();u.setTime(A[B].getMinDate());x.setTime(A[B].getMaxDate());i.notifyTimesChanged(A[B].getMinDate(),A[B].getMaxDate())}else{if(A[B].isExpandedHuh()){A[B].collapse()}}}i.fixHeight()};this.getCurrentDate=function(){var z=new Date();z.setTime(h.getTime());return z};this.setCurrentDate=function(z){h.setTime(z.getTime())};this.notifyPrintClicked=function(A){var B=new Date();B.setTime(A.getTime());for(var z=0;z<o.length;z++){o[z].printClicked(B)}};this.hideArrows=function(){i.getHeader().showArrowsHuh(false)};this.showArrows=function(){i.getHeader().showArrowsHuh(true)};this.ensureMinDate=function(z){if(jive.model.dateLT(z,u)){u.setTime(z.getTime())}};this.ensureMaxDate=function(z){if(jive.model.dateGT(z,x)){x.setTime(z.getTime())}};this.getMinDate=function(){return u};this.setMinDate=function(z){u.setTime(z.getTime())};this.getMaxDate=function(){return x};this.setMaxDate=function(z){x.setTime(z.getTime())};var r=new jive.gui.MiniMonthView(l,i);this.updateText=function(){var A=i.getAllViews();for(var B=0;B<A.length;B++){A[B].updateText()}var z=l.getLanguageManager().getActiveLanguage();i.getHeader().updateText();i.getHeader().setTitleText(jive.util.escapeHTML(i.getActiveView().getHeaderText(i.getCurrentDate())))};m.appendChild(s.getDOM());m.appendChild(y);y.appendChild(e);this.getDOM=function(){return m};this.getEventsOn=function(z){return i.getView("month").getEventsOn(z)};this.getTasksOn=function(z){return i.getView("month").getTasksOn(z)};this.addEvent=function(A){var z=i.getAllViews();for(var B=0;B<z.length;B++){z[B].addEvent(A)}};this.addTask=function(B){var z=i.getAllViews();for(var A=0;A<z.length;A++){z[A].addTask(B)}};this.removeEvent=function(A){var z=i.getAllViews();for(var B=0;B<z.length;B++){z[B].removeEvent(A)}};this.removeTask=function(B){var z=i.getAllViews();for(var A=0;A<z.length;A++){z[A].removeTask(B)}};this.flushCalendar=function(B){var z=i.getAllViews();for(var A=0;A<z.length;A++){z[A].flushCalendar(B)}};this.flushEvent=function(A){var z=i.getAllViews();for(var B=0;B<z.length;B++){z[B].flushEvent(A)}if(jotlet.model.isEvent(b)&&b.getId()==A.getId()){b=null}};this.flushTask=function(B){var z=i.getAllViews();for(var A=0;A<z.length;A++){z[A].flushTask(B)}if(jotlet.model.isTask(b)&&b.getId()==B.getId()){b=null}};this.refreshWeather=function(){var z=i.getAllViews();for(var A=0;A<z.length;A++){if($def(z[A].refreshWeather)){z[A].refreshWeather()}}};this.refreshShading=function(){var z=i.getAllViews();for(var A=0;A<z.length;A++){if($def(z[A].refreshShading)){z[A].refreshShading()}}};this.getActiveView=function(){var z=i.getAllViews();for(var A=0;A<z.length;A++){if(z[A].isExpandedHuh()){return z[A]}}return i.getView("month")};this.showMonth=function(z){i.showView(z,"month")};this.showWeek=function(z){i.showView(z,"week")};this.showDay=function(z){i.showView(z,"day")};this.showList=function(z){i.showView(z,"list")};this.refresh=function(){var z=i.getAllViews();for(var A=0;A<z.length;A++){if(z[A].isExpandedHuh()){z[A].refresh();i.refreshShading();return}}i.showMonth(i.getCurrentDate());i.refreshShading()};this.fixHeight=function(){try{if(jive.ext.x.xParent(m)!=null){var z=jive.ext.x.xHeight(jive.ext.x.xParent(m))-i.getHeaderFooterHeight();jive.ext.x.xHeight(y,z);i.getView("month").fixHeight(z)}}catch(A){alert(A)}};this.init=function(){q=true;var z=i.getAllViews();for(var A=0;A<z.length;A++){z[A].init(e)}};this.isShowingDay=function(){return i.getView("day").isExpandedHuh()};this.isShowingWeek=function(){return i.getView("week").isExpandedHuh()};this.killYourself=function(){l=null;for(var z=0;z<j.length;z++){j[z].killYourself()}};i.addView(r);this.addListener=function(z){o.push(z)};this.notifyStopDrag=function(A,C,E,F){var D=false;var z=i.getAllViews();for(var B=0;B<z.length;B++){if(z[B].isExpandedHuh()&&$def(z[B].stopDrag)){D=z[B].stopDrag(A,C,E,F)}}if(!D){for(var B=0;B<o.length&&!D;B++){D=o[B].stopDrag(A,C,E,F)}}return D};var t=null;var c=0;this.notifyDragging=function(B,D,E,F){c++;var A=c;var G=false;var z=i.getAllViews();for(var C=0;C<z.length;C++){if(z[C].isExpandedHuh()){if($def(z[C].dragging)){G=z[C].dragging(B,D,E,F)}}}if(!G){for(var C=0;C<o.length&&!G;C++){G=G||o[C].dragging(B,D,E,F)}if(!G){l.hideHover()}}return G};this.notifyDayClicked=function(A){var B=new Date();B.setTime(A.getTime());for(var z=0;z<o.length;z++){o[z].dayClicked(B)}};this.notifyTimesChanged=function(B,A){for(var z=0;z<o.length;z++){o[z].timesChanged(B,A)}};this.notifyQuickAddTask=function(C,B,z){for(var A=0;A<o.length;A++){o[A].quickAddTask(C,B,z)}};this.filter=function(B){var z=i.getAllViews();for(var A=0;A<z.length;A++){if(z[A].isExpandedHuh()){if($def(z[A].filter)){z[A].filter(B)}}}};this.calendarVisible=function(C,B){var z=i.getAllViews();for(var A=0;A<z.length;A++){if($def(z[A].calendarVisible)){z[A].calendarVisible(C,B)}}i.refreshShading()};this.notifyEventClicked=function(z){for(var A=0;A<p.length;A++){p[A].eventClicked(z)}};this.notifyTaskClicked=function(A){try{for(var z=0;z<p.length;z++){p[z].taskClicked(A)}}catch(B){alert(B)}};this.notifyCheckPointClicked=function(B){try{for(var z=0;z<p.length;z++){p[z].checkPointClicked(B)}}catch(A){alert(A)}};this.notifyEventDblClicked=function(z){for(var A=0;A<p.length;A++){p[A].eventDblClicked(z)}};this.notifyTaskDblClicked=function(A){for(var z=0;z<p.length;z++){p[z].taskDblClicked(A)}};this.notifyCheckPointDblClicked=function(A){for(var z=0;z<p.length;z++){p[z].checkPointDblClicked(A)}};this.notifyUnselectAll=function(){for(var z=0;z<p.length;z++){p[z].unselectAll()}};var g=new Array();this.addNavListener=function(z){g.push(z)};this.removeNavListener=function(A){for(var z=0;z<g.length;z++){if(g[z]==A){g.splice(z,1)}}};this.notifyMonthClicked=function(A){for(var z=0;z<g.length;z++){g[z].monthClicked(A)}};this.notifyWeekClicked=function(A){for(var z=0;z<g.length;z++){g[z].weekClicked(A)}};this.notifyDayClicked=function(A){for(var z=0;z<g.length;z++){g[z].dayClicked(A)}};this.notifyListClicked=function(){for(var z=0;z<g.length;z++){g[z].listClicked()}};this.notifyAddEventClicked=function(A){for(var z=0;z<g.length;z++){g[z].addEventClicked(A)}};this.notifyBackClicked=function(){for(var z=0;z<g.length;z++){g[z].backClicked()}};var v=new Object();v.eventClicked=function(z){b=z};v.eventDblClicked=function(z){};v.taskClicked=function(z){b=z};v.taskDblClicked=function(z){};v.checkPointClicked=function(z){b=z};v.checkPointDblClicked=function(z){};v.unselectAll=function(){b=null};this.addEventListener(v);this.unselectAll=function(){i.notifyUnselectAll()};this.getSelectedItem=function(){return b};var k=new Object();k.printClicked=function(A,z){return function(){A(z())}}(i.notifyPrintClicked,i.getCurrentDate);k.leftClicked=function(z){return function(){var A=z();A()}}(d);k.rightClicked=function(z){return function(){var A=z();A()}}(a);k.searchByText=function(B){var z=i.getAllViews();for(var A=0;A<z.length;A++){if($def(z[A].filter)){z[A].filter(B)}}};s.addListener(k);this.setHeader=function(z){m.removeChild(s.getDOM());s.killYourself();s=z;s.addListener(k);m.insertBefore(s.getDOM(),y)};this.getHeader=function(){return s}};
;
jive.gui.SimpleHeader=function(b,e){var d;if($obj(e)){d=e}else{d=this}var g=document.createElement("DIV");g.setAttribute("class","month_view_header_button_wrap");g.className="month_view_header_button_wrap";var c=document.createElement("DIV");c.setAttribute("class","month_view_header color_header");c.className="month_view_header color_header";c.appendChild(document.createElement("DIV"));var a=document.createElement("span");a.setAttribute("class","month_view_header_link");a.className="month_view_header_link";g.appendChild(a);a.appendChild(document.createTextNode("<"));var h=document.createElement("span");h.setAttribute("class","month_view_float_r month_view_header_link");h.className="month_view_float_r month_view_header_link";h.appendChild(document.createTextNode(">"));g.appendChild(h);var i=document.createElement("SPAN");i.setAttribute("class","month_view_headerc");i.className="month_view_headerc";g.appendChild(i);c.appendChild(g);jive.ext.x.xDisplayBlock(c);this.getDOM=function(){return c};this.showArrowsHuh=function(j){if(j){jive.ext.x.xDisplayBlock(a);jive.ext.x.xShow(h)}else{jive.ext.x.xDisplayNone(a);jive.ext.x.xHide(h)}};this.showPrintHuh=function(j){};this.showFilterHuh=function(j){};this.getHeight=function(){return(jive.ext.x.xDisplay(c)=="block")?jive.ext.x.xHeight(c):0};this.setTitleText=function(j){while(i.childNodes.length>0){i.removeChild(i.childNodes[0])}i.appendChild(document.createTextNode(j))};this.setNavFilter=function(j){};this.updateText=function(){};this.getFilterText=function(){return""};var f=new Array();this.addListener=function(j){f.push(j)};this.notifyPrintClicked=function(){for(var j=0;j<f.length;j++){f[j].printClicked()}};this.notifyLeftClicked=function(){for(var j=0;j<f.length;j++){f[j].leftClicked()}};this.notifyRightClicked=function(){for(var j=0;j<f.length;j++){f[j].rightClicked()}};this.notifySearchByText=function(k){for(var j=0;j<f.length;j++){f[j].searchByText(k)}};jive.ext.x.xAddEventListener(a,"click",function(j){return function(){j.notifyLeftClicked()}}(d));jive.ext.x.xAddEventListener(h,"click",function(j){return function(){j.notifyRightClicked()}}(d));this.killYourself=function(){}};
;
jive.gui.NullHeader=function(c){var b=this;var d=document.createElement("DIV");jive.ext.x.xDisplayNone(d);this.getDOM=function(){return d};this.showArrowsHuh=function(e){};this.showPrintHuh=function(e){};this.showFilterHuh=function(e){};this.getHeight=function(){return 0};this.setTitleText=function(e){};this.setNavFilter=function(e){};this.updateText=function(){};this.getFilterText=function(){return""};var a=new Array();this.addListener=function(e){a.push(e)};this.notifyPrintClicked=function(){for(var e=0;e<a.length;e++){a[e].printClicked()}};this.notifyLeftClicked=function(){for(var e=0;e<a.length;e++){a[e].leftClicked()}};this.notifyRightClicked=function(){for(var e=0;e<a.length;e++){a[e].rightClicked()}};this.notifySearchByText=function(f){for(var e=0;e<a.length;e++){a[e].searchByText(f)}};this.killYourself=function(){}};
;
var pc=navigator.userAgent.toLowerCase();var ie4_win=(pc.indexOf("win")!=-1)&&(pc.indexOf("msie")!=-1)&&(parseInt(navigator.appVersion)>=4);var is_gecko=pc.indexOf("gecko/")!=-1&&parseFloat(pc.substring(pc.indexOf("gecko/")+6,pc.indexOf("gecko/")+14))>20030108;function styleTag(m,d,h){var e=0;var c=h.scrollTop;var a;if(document.selection){if(document.selection.createRange().parentElement().tagName=="TEXTAREA"){var f=document.selection.createRange().text;e=getSelectionRangeEnd(h);a=_markupText(f,m,d);document.selection.createRange().text=a[0];e+=a[1]}}else{if(typeof(h.selectionStart)!="undefined"&&typeof(h.selectionEnd)!="undefined"){if(h.selectionStart==h.selectionEnd){return}var g=h.textLength;var b=h.selectionStart;var i=h.selectionEnd;if(i==1||i==2){i=g}var l=(h.value).substring(0,b);var k=(h.value).substring(b,i);var j=(h.value).substring(i,g);a=_markupText(k,m,d);h.value=l+a[0]+j;e=i+a[1]}else{return}}if(e>0){setCaretTo(h,e,c)}}function _markupText(k,n,e){var a=trimLeadingSpace(k);k=a[0];var j=a[1];a=trimTrailingSpace(k);k=a[0];var f=a[1];var d=0;if(k.indexOf("\n")>0){var m=k.split("\n");var h="";for(var g=0;g<m.length;g++){var l=m[g];a=trimLeadingSpace(l);l=a[0];var c=a[1];a=trimTrailingSpace(l);l=a[0];var b=a[1];if(l==""){h+=c+l+b}else{h+=c+n+l+e+b;d+=(n.length+e.length)}if(g<m.length-1){h+="\n"}}k=j+h+f}else{k=j+n+k+e+f}a=new Array(2);a[0]=k;a[1]=d;return a}function trimLeadingSpace(c){var b="";while(c.length>0&&(c.charAt(0)==" "||c.charAt(0)=="\n"||c.charAt(0)=="\r")){b+=c.charAt(0);c=c.substring(1)}var a=new Array(2);a[0]=c;a[1]=b;return a}function trimTrailingSpace(c){var b="";while(c.length>0&&(c.charAt(c.length-1)==" "||c.charAt(c.length-1)=="\n"||c.charAt(c.length-1)=="\r")){b+=c.charAt(c.length-1);c=c.substring(0,c.length-1)}var a=new Array(2);a[0]=c;a[1]=b;return a}function getSelectionRangeText(b){if(document.selection){return document.selection.createRange().text}else{if(is_gecko){var c=b.selectionStart;var a=b.selectionEnd;return b.value.substr(c,a-c)}else{return""}}}function getSelectionRangeEnd(b){if(document.selection){var a=document.selection.createRange();var c=a.duplicate();c.moveToElementText(b);c.setEndPoint("EndToEnd",a);var d=c.text.length-a.text.length;return d+a.text.length}else{if(is_gecko){return b.selectionEnd}else{return 0}}}function setCaretTo(b,g,e){b.focus();if(b.createTextRange){var c=0;var d=0;var f=b.value;while(c>-1&&c<g){c=f.indexOf("\r\n",c);if(c>=0){d++;c+=2}}if(d>1){d--}var a=b.createTextRange();a.move("character",(g-d));a.select()}else{if(b.selectionStart){b.setSelectionRange(g,g)}}if(e>0){b.scrollTop=e}}function caret(a){if(ie4_win&&a.createTextRange&&document.selection.createRange().parentElement().tagName=="TEXTAREA"){a.caretPos=document.selection.createRange().duplicate()}}function funcname(b){var a=b.toString().match(/function (\w*)/)[1];if((a==null)||(a.length==0)){return"anonymous"}return a}function stacktrace(){var c="";for(var b=arguments.caller;b!=null;b=b.caller){c+=funcname(b.callee)+"\n";if(b.caller==b){break}}return c}function printStackTrace(){alert("stack trace is "+stacktrace())};
;
function jiveToggleTab(a,b){b.forEach(function(c){$j('[id="'+c+'-tab"]').removeClass("jive-body-tabcurrent");$j('[id="'+c+'"]').hide()});$j('[id="'+a+'-tab"]').addClass("jive-body-tabcurrent");$j('[id="'+a+'"]').show()}function jiveToggleOptions(a){var b=$j('[id="'+a+'-form"]'),c=$j('[id="'+a+'-hdr"]');if(b.is(":visible")){b.hide();c.removeClass().addClass("jive-compose-hdr-opt-closed")}else{b.show();c.removeClass().addClass("jive-compose-hdr-opt")}}function jiveShowTopicFilter(a){$j('[id="'+a+'"]').toggle()}function jiveToggleSpaceDetails(b){var a=$j('[id="'+b+'"]').toggle();if(a.is(":visible")){$j('[id="'+b+'-less"]').show();$j('[id="'+b+'-more"]').hide()}else{$j('[id="'+b+'-less"]').hide();$j('[id="'+b+'-more"]').show()}}function jiveToggleSpaceDetails2(b){var a=$j('[id="'+b+'"]');if(a.hasClass("jive-space-namedesc-full")){a.removeClass();$j('[id="'+b+'-less"]').hide();$j('[id="'+b+'-more"]').show()}else{a.removeClass().addClass("jive-space-namedesc-full");$j('[id="'+b+'-less"]').show();$j('[id="'+b+'-more"]').hide()}}function callOnLoad(a){$j(document).ready(a)}Jive={};Jive.AlertMessage=function(b,a){a=a||{};$j('[id="'+b+'"]').fadeIn(1000,function(){var c=$j(this);c.each(function(){if(a.beforeStart){a.beforeStart(this)}});setTimeout(function(){c.fadeOut(1000,function(){c.each(function(){if(a.afterFinish){a.afterFinish(this)}})})},3000)})};var TimeoutExecutor=$Class.extend({init:function(b,a){this.callback=b;this.timeout=a;this.currentlyExecuting=false;this.registerCallback()},registerCallback:function(){this.timeoutID=setTimeout(this.onTimerEvent.bind(this),this.timeout)},onTimerEvent:function(){try{this.currentlyExecuting=true;if(this.callback&&this.callback instanceof Function){this.callback()}}finally{this.currentlyExecuting=false;delete this.timeoutID}},cancel:function(){if(!this.currentlyExecuting&&this.timeoutID){clearTimeout(this.timeoutID);delete this.timeoutID}},reset:function(){if(!this.currentlyExecuting&&this.timeoutID){clearTimeout(this.timeoutID);delete this.timeoutID;this.registerCallback()}}});var QuickUserProfile=$Class.extend({init:function(d,c,b,a){this.loadingContent='<strong class="jive-tooltip2-loading">'+b+"</strong>";this.userTT=d;this.userTTURL=c.indexOf("?")<0?c+"?tooltip=true":c+"&tooltip=true";this.textErrorTT=a;this.jiveUserTips=new SuperNote("jiveTT",{showDelay:700,hideDelay:250,cssProp:"visibility",cssVis:"visible",cssHid:"hidden"})},getUserProfileTooltip:function(a,b){this.cancelTooltip();$j('[id="'+this.userTT+'"]').html(this.loadingContent);if(b){this.presence=b}this.timeoutExecutor=new TimeoutExecutor(this.getUserProfile.bind(this,a),700)},getUserProfile:function(b){var a=this;var c=this.presence;var d=this.userTTURL;if(this.presence){d=this.userTTURL+"&presencePostfix="+this.presence.getPresencePostfix()}$j.ajax({url:d,type:"GET",dataType:"html",data:{targetUser:b,presence:this.presence},success:function(e){$j('[id="'+a.userTT+'"]').html(e)},error:function(){$j('[id="'+a.userTT+'"]').text(a.textTTError)},complete:function(){if(c){c.start()}}})},getRemoteUserProfileTooltip:function(h){var b="<span><img src='"+h.avatarUrl+"' width='48' height='48' class='jive-avatar' /></span>";var g="<h5>"+h.userDisplayName+"</h5>";var a="<span class='jive-note-user-status'>"+h.userStatus+"</span>";var c="<ul class='jive-profile-tt-fields'>";var i="";if(h.userPhone){i="<li><strong>Phone Number:</strong> "+h.userPhone+"</li>"}var d="";if(h.userEmail){d="<li><strong>Email:</strong> <a href='mailto:"+h.userEmail+"'>"+h.userEmail+"</a></li>"}var f="</ul>";var e="<p><a href='"+h.profileUrl+"'>View "+h.userDisplayName+"'s profile</a></p>";$j('[id="'+this.userTT+'"]').html(b+g+a+c+i+d+f+e).show()},cancelTooltip:function(){if(this.timeoutExecutor){this.timeoutExecutor.cancel()}if(this.presence){this.presence.stop()}}});var QuickContainerSummary=$Class.extend({init:function(d,c,b,a){this.loadingContent='<strong class="jive-tooltip2-loading">'+b+"</strong>";this.containerTT=d;this.containerTTUrl=c.indexOf("?")<0?c+"?tooltip=true":c+"&tooltip=true";this.textErrorTT=a;this.jiveUserTips=new SuperNote("jivecontainerTT",{showDelay:700,hideDelay:250,cssProp:"visibility",cssVis:"visible",cssHid:"hidden"})},getContainerTooltip:function(a,b){this.cancelTooltip();$j('[id="'+this.containerTT+'"]').html(this.loadingContent);this.timeoutExecutor=new TimeoutExecutor(this.getContainerInfo.bind(this,a,b),700)},getContainerInfo:function(b,c){var a=this;$j.ajax({url:this.containerTTUrl,type:"GET",dataType:"html",data:{container:b,containerType:c},success:function(d){$j('[id="'+a.containerTT+'"]').html(d)},error:function(){$j('[id="'+a.containerTT+'"]').html(a.textTTError)}})},cancelTooltip:function(){if(this.timeoutExecutor){this.timeoutExecutor.cancel()}}});var QuickViewVideo=$Class.extend({init:function(c,d,b,a){this.loadingContent='<strong class="jive-tooltip2-loading">'+b+"</strong>";this.videoTT=c;this.videoTTURL=d.indexOf("?")<0?d+"?tooltip=true":d+"&tooltip=true";this.textErrorTT=a;this.jiveUserTips=new SuperNote("jiveTT",{showDelay:700,hideDelay:250,cssProp:"visibility",cssVis:"visible",cssHid:"hidden"})},getVideoTooltip:function(a){this.cancelTooltip();$j('[id="'+this.videoTT+'"]').html(this.loadingContent);this.timeoutExecutor=new TimeoutExecutor(this.getViewVideo.bind(this,a),700)},getViewVideo:function(b){var a=this;$j.ajax({url:this.videoTTURL,type:"GET",dataType:"html",data:{videoID:b},success:function(c){$j('[id="'+a.videoTT+'"]').html(c)},error:function(){$j('[id="'+a.videoTT+'"]').text(a.textTTError)}})},getRemoteVideoTooltip:function(b,a){$j('[id="'+this.videoTT+'"]').html("<div class=<p>View <a href="+a+">"+b+"</a></p>")},cancelTooltip:function(){if(this.timeoutExecutor){this.timeoutExecutor.cancel()}}});
;
function MultiSelector(c,a,d,b){this.list_target=c;this.addedElements=[];if(d){this.count=d}else{this.count=0}this.id=0;if(a){this.max=a}else{this.max=-1}this.removeStr=b;this.addElement=function(e){if(e.tagName=="INPUT"&&e.type=="file"){e.name="attachFile";e.id="attachFile_"+this.count;e.multi_selector=this;e.onchange=function(){if(!this.value||this.value==""){return}this.multi_selector.addedElements.push(e.id);c.style.display="block";var f=document.createElement("input");f.type="file";this.parentNode.insertBefore(f,this);this.multi_selector.addElement(f);this.multi_selector.addListRow(this);this.style.position="absolute";this.style.left="-1000px"};if(this.max!=-1&&this.count>=this.max){e.disabled=true;e.style.display="none";document.getElementById("jive-attach-maxsize").style.display="none"}else{if(this.max!=-1&&this.count>=this.max-1){document.getElementById("jive-attach-maxfiles").style.display=""}}this.count++;this.current_element=e}else{alert("Error: not a file input element")}};this.addListRow=function(h){var i=document.createElement("div");i.className="jive-attach-item";i.id="jive-attach-item"+h.id.slice("attachFile_".length);var g=document.createElement("img");g.src=_jive_base_url+"/images/attach-7x11.gif";g.alt="";g.width="7";g.height="11";g.border="0";g.style.value="margin: 3px 1px 0px 0px;";var m=document.createElement("a");m.href="#";m.innerHTML=this.removeStr;i.element=h;i.appendChild(g);i.appendChild(document.createTextNode(" "));m.onclick=function(){this.parentNode.element.parentNode.removeChild(this.parentNode.element);this.parentNode.parentNode.removeChild(this.parentNode);var p=this.parentNode.element.id;var n=this.parentNode.element.multi_selector.addedElements;for(var o=0;o<n.length;o++){if(n[o]==p&&n.length==1){this.parentNode.element.multi_selector.addedElements=[]}else{if(n[o]==p){n.splice(o,o)}}}this.parentNode.element.multi_selector.count--;if(this.parentNode.element.multi_selector.count<2){c.style.display="none"}this.parentNode.element.multi_selector.current_element.style.display="";this.parentNode.element.multi_selector.current_element.disabled=false;document.getElementById("jive-attach-maxsize").style.display="";return false};var e=navigator.userAgent;var f=e.indexOf("Windows")!=-1;var k=!f&&e.indexOf("Mac")!=-1;var l=h.value;var j=l;if(j.indexOf("\\")!=-1&&f){j=j.substring(j.lastIndexOf("\\")+1)}else{if(j.indexOf("/")!=-1){j=j.substring(j.lastIndexOf("/")+1)}else{if(j.indexOf(":")!=-1&&k){j=j.substring(j.lastIndexOf(":")+1)}}}i.appendChild(document.createTextNode(j+" "));i.appendChild(m);this.list_target.appendChild(i)};this.removeAttachment=function(f,i){var g=document.createElement("input");g.type="hidden";g.name="removeAttachID";g.value=i;var h=document.getElementById(f);h.parentNode.replaceChild(g,h);this.count--;if(this.count<2){c.style.display="none"}this.current_element.style.display="";this.current_element.disabled=false;document.getElementById("jive-attach-maxsize").style.display=""};this.haveAttachmentsBeenAdded=function(){return this.addedElements.length>0}};
;
(function(f){if(!f.browser.msie){return}var c=5;var b=0;var e=250;var g=500;function a(){if(b<=0){return}b-=1;f("body").each(function(){this.className=this.className});setTimeout(a,g)}function d(){if(b<=0){setTimeout(a,e)}b=c}f(window).live("body").load(d);f(window).ajaxStop(d)})(jQuery);
;
jQuery.ui||(function(G){var A=G.fn.remove,F=G.browser.mozilla&&(parseFloat(G.browser.version)<1.9);G.ui={version:"1.7.3",plugin:{add:function(L,K,N){var J=G.ui[L].prototype;for(var M in N){J.plugins[M]=J.plugins[M]||[];J.plugins[M].push([K,N[M]])}},call:function(M,K,L){var N=M.plugins[K];if(!N||!M.element[0].parentNode){return }for(var J=0;J<N.length;J++){if(M.options[N[J][0]]){N[J][1].apply(M.element,L)}}}},contains:function(J,K){return document.compareDocumentPosition?J.compareDocumentPosition(K)&16:J!==K&&J.contains(K)},hasScroll:function(J,L){if(G(J).css("overflow")=="hidden"){return false}var M=(L&&L=="left")?"scrollLeft":"scrollTop",K=false;if(J[M]>0){return true}J[M]=1;K=(J[M]>0);J[M]=0;return K},isOverAxis:function(K,L,J){return(K>L)&&(K<(L+J))},isOver:function(N,L,O,J,M,K){return G.ui.isOverAxis(N,O,M)&&G.ui.isOverAxis(L,J,K)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(F){var D=G.attr,E=G.fn.removeAttr,B="http://www.w3.org/2005/07/aaa",I=/^aria-/,H=/^wairole:/;G.attr=function(L,M,K){var J=K!==undefined;return(M=="role"?(J?D.call(this,L,M,"wairole:"+K):(D.apply(this,arguments)||"").replace(H,"")):(I.test(M)?(J?L.setAttributeNS(B,M.replace(I,"aaa:"),K):D.call(this,L,M.replace(I,"aaa:"))):D.apply(this,arguments)))};G.fn.removeAttr=function(J){return(I.test(J)?this.each(function(){this.removeAttributeNS(B,J.replace(I,""))}):E.call(this,J))}}G.fn.extend({remove:function(K,J){return this.each(function(){if(!J){if(!K||G.filter(K,[this]).length){G("*",this).add(this).each(function(){G(this).triggerHandler("remove")})}}return A.call(G(this),K,J)})},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var J;if((G.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(G.curCSS(this,"position",1))&&(/(auto|scroll)/).test(G.curCSS(this,"overflow",1)+G.curCSS(this,"overflow-y",1)+G.curCSS(this,"overflow-x",1))}).eq(0)}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(G.curCSS(this,"overflow",1)+G.curCSS(this,"overflow-y",1)+G.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!J.length?G(document):J}});G.extend(G.expr[":"],{data:function(J,K,L){return !!G.data(J,L[3])},focusable:function(K){var J=K.nodeName.toLowerCase(),L=G.attr(K,"tabindex");return(/input|select|textarea|button|object/.test(J)?!K.disabled:"a"==J||"area"==J?K.href||!isNaN(L):!isNaN(L))&&!G(K)["area"==J?"parents":"closest"](":hidden").length},tabbable:function(J){var K=G.attr(J,"tabindex");return(isNaN(K)||K>=0)&&G(J).is(":focusable")}});function C(J,O,N,K){function L(P){var Q=G[J][O][P]||[];return(typeof Q=="string"?Q.split(/,?\s+/):Q)}var M=L("getter");if(K.length==1&&typeof K[0]=="string"){M=M.concat(L("getterSetter"))}return(G.inArray(N,M)!=-1)}G.widget=function(K,L){var J=K.split(".")[0];K=K.split(".")[1];G.fn[K]=function(N){var P=(typeof N=="string"),O=Array.prototype.slice.call(arguments,1);if(P&&N.substring(0,1)=="_"){return this}if(P&&C(J,K,N,O)){var M=G.data(this[0],K);return(M?M[N].apply(M,O):undefined)}return this.each(function(){var Q=G.data(this,K);(!Q&&!P&&G.data(this,K,new G[J][K](this,N))._init());(Q&&P&&G.isFunction(Q[N])&&Q[N].apply(Q,O))})};G[J]=G[J]||{};G[J][K]=function(N,O){var M=this;this.namespace=J;this.widgetName=K;this.widgetEventPrefix=G[J][K].eventPrefix||K;this.widgetBaseClass=J+"-"+K;this.options=G.extend({},G.widget.defaults,G[J][K].defaults,G.metadata&&G.metadata.get(N)[K],O);this.element=G(N).bind("setData."+K,function(Q,R,P){if(Q.target==N){return M._setData(R,P)}}).bind("getData."+K,function(P,Q){if(P.target==N){return M._getData(Q)}}).bind("remove",function(){return M.destroy()})};G[J][K].prototype=G.extend({},G.widget.prototype,L);G[J][K].getterSetter="option"};G.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(K,J){var L=K,M=this;if(typeof K=="string"){if(J===undefined){return this._getData(K)}L={};L[K]=J}G.each(L,function(O,N){M._setData(O,N)})},_getData:function(J){return this.options[J]},_setData:function(K,J){this.options[K]=J;if(K=="disabled"){this.element[J?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",J)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(K,J,P){var N=this.options[K],M=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);J=G.Event(J);J.type=M;if(J.originalEvent){for(var L=G.event.props.length,O;L;){O=G.event.props[--L];J[O]=J.originalEvent[O]}}this.element.trigger(J,P);return !(G.isFunction(N)&&N.call(this.element[0],J,P)===false||J.isDefaultPrevented())}};G.widget.defaults={disabled:false};G.ui.mouse={_mouseInit:function(){var J=this;this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;K.stopImmediatePropagation();return false}});if(G.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(G.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(K){K.originalEvent=K.originalEvent||{};if(K.originalEvent.mouseHandled){return }(this._mouseStarted&&this._mouseUp(K));this._mouseDownEvent=K;var L=this,J=(K.which==1),M=(typeof this.options.cancel=="string"?G(K.target).parents().add(K.target).filter(this.options.cancel).length:false);if(!J||M||!this._mouseCapture(K)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){L.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(K)&&this._mouseDelayMet(K)){this._mouseStarted=(this._mouseStart(K)!==false);if(!this._mouseStarted){K.preventDefault();return true}}this._mouseMoveDelegate=function(N){return L._mouseMove(N)};this._mouseUpDelegate=function(N){return L._mouseUp(N)};G(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(G.browser.safari||K.preventDefault());K.originalEvent.mouseHandled=true;return true},_mouseMove:function(J){if(G.browser.msie&&!J.button){return this._mouseUp(J)}if(this._mouseStarted){this._mouseDrag(J);return J.preventDefault()}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))}return !this._mouseStarted},_mouseUp:function(J){G(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(J.target==this._mouseDownEvent.target);this._mouseStop(J)}return false},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)},_mouseDelayMet:function(J){return this.mouseDelayMet},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true}};G.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);(function(C){var A={dragStart:"start.draggable",drag:"drag.draggable",dragStop:"stop.draggable",maxHeight:"maxHeight.resizable",minHeight:"minHeight.resizable",maxWidth:"maxWidth.resizable",minWidth:"minWidth.resizable",resizeStart:"start.resizable",resize:"drag.resizable",resizeStop:"stop.resizable"},B="ui-dialog ui-widget ui-widget-content ui-corner-all ";C.widget("ui.dialog",{_init:function(){this.originalTitle=this.element.attr("title");var E=this,D=this.options,G=D.title||this.originalTitle||"&nbsp;",L=C.ui.dialog.getTitleId(this.element),F=(this.uiDialog=C("<div/>")).appendTo(document.body).hide().addClass(B+D.dialogClass).css({position:"absolute",overflow:"hidden",zIndex:D.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(N){(D.closeOnEscape&&N.keyCode&&N.keyCode==C.ui.keyCode.ESCAPE&&E.close(N))}).attr({role:"dialog","aria-labelledby":L}).mousedown(function(N){E.moveToTop(false,N)}),J=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(F),K=(this.uiDialogTitlebar=C("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(F),H=C('<a href="#"/>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){H.addClass("ui-state-hover")},function(){H.removeClass("ui-state-hover")}).focus(function(){H.addClass("ui-state-focus")}).blur(function(){H.removeClass("ui-state-focus")}).mousedown(function(N){N.stopPropagation()}).click(function(N){E.close(N);return false}).appendTo(K),I=(this.uiDialogTitlebarCloseText=C("<span/>")).addClass("ui-icon ui-icon-closethick").text(D.closeText).appendTo(H),M=C("<span/>").addClass("ui-dialog-title").attr("id",L).html(G).prependTo(K);K.find("*").add(K).disableSelection();(D.draggable&&C.fn.draggable&&this._makeDraggable());(D.resizable&&C.fn.resizable&&this._makeResizable());this._createButtons(D.buttons);this._isOpen=false;(D.bgiframe&&C.fn.bgiframe&&F.bgiframe());(D.autoOpen&&this.open())},destroy:function(){(this.overlay&&this.overlay.destroy());this.uiDialog.hide();this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();(this.originalTitle&&this.element.attr("title",this.originalTitle))},close:function(D){var F=this;if(false===F._trigger("beforeclose",D)){return }(F.overlay&&F.overlay.destroy());F.uiDialog.unbind("keypress.ui-dialog");(F.options.hide?F.uiDialog.hide(F.options.hide,function(){F._trigger("close",D)}):F.uiDialog.hide()&&F._trigger("close",D));C.ui.dialog.overlay.resize();F._isOpen=false;if(F.options.modal){var E=0;C(".ui-dialog").each(function(){if(this!=F.uiDialog[0]){E=Math.max(E,C(this).css("z-index"))}});C.ui.dialog.maxZ=E}},isOpen:function(){return this._isOpen},moveToTop:function(D,E){if((this.options.modal&&!D)||(!this.options.stack&&!this.options.modal)){return this._trigger("focus",E)}if(this.options.zIndex>C.ui.dialog.maxZ){C.ui.dialog.maxZ=this.options.zIndex}(this.overlay&&this.overlay.$el.css("z-index",C.ui.dialog.overlay.maxZ=++C.ui.dialog.maxZ));var F={scrollTop:this.element.attr("scrollTop"),scrollLeft:this.element.attr("scrollLeft")};this.uiDialog.css("z-index",++C.ui.dialog.maxZ);this.element.attr(F);this._trigger("focus",E)},open:function(){if(this._isOpen){return }var D=this.options,E=this.uiDialog;this.overlay=D.modal?new C.ui.dialog.overlay(this):null;(E.next().length&&E.appendTo("body"));this._size();this._position(D.position);E.show(D.show);this.moveToTop(true);(D.modal&&E.bind("keypress.ui-dialog",function(G){if(G.keyCode!=C.ui.keyCode.TAB){return }var H=C(":tabbable",this),F=H.filter(":first")[0],I=H.filter(":last")[0];if(G.target==I&&!G.shiftKey){setTimeout(function(){F.focus()},1)}else{if(G.target==F&&G.shiftKey){setTimeout(function(){I.focus()},1)}}}));C([]).add(E.find(".ui-dialog-content :tabbable:first")).add(E.find(".ui-dialog-buttonpane :tabbable:first")).add(E).filter(":first").focus();this._trigger("open");this._isOpen=true},_createButtons:function(D){var E=this,G=false,F=C("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiDialog.find(".ui-dialog-buttonpane").remove();(typeof D=="object"&&D!==null&&C.each(D,function(){return !(G=true)}));if(G){C.each(D,function(I,H){C('<button type="button"></button>').addClass("ui-state-default ui-corner-all").text(I).click(function(){H.apply(E.element[0],arguments)}).hover(function(){C(this).addClass("ui-state-hover")},function(){C(this).removeClass("ui-state-hover")}).focus(function(){C(this).addClass("ui-state-focus")}).blur(function(){C(this).removeClass("ui-state-focus")}).appendTo(F)});F.appendTo(this.uiDialog)}},_makeDraggable:function(){var F=this,D=this.options,E;this.uiDialog.draggable({cancel:".ui-dialog-content",handle:".ui-dialog-titlebar",containment:"document",start:function(){E=D.height;C(this).height(C(this).height()).addClass("ui-dialog-dragging");(D.dragStart&&D.dragStart.apply(F.element[0],arguments))},drag:function(){(D.drag&&D.drag.apply(F.element[0],arguments))},stop:function(){C(this).removeClass("ui-dialog-dragging").height(E);(D.dragStop&&D.dragStop.apply(F.element[0],arguments));C.ui.dialog.overlay.resize()}})},_makeResizable:function(D){D=(D===undefined?this.options.resizable:D);var G=this,E=this.options,F=typeof D=="string"?D:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",alsoResize:this.element,maxWidth:E.maxWidth,maxHeight:E.maxHeight,minWidth:E.minWidth,minHeight:E.minHeight,start:function(){C(this).addClass("ui-dialog-resizing");(E.resizeStart&&E.resizeStart.apply(G.element[0],arguments))},resize:function(){(E.resize&&E.resize.apply(G.element[0],arguments))},handles:F,stop:function(){C(this).removeClass("ui-dialog-resizing");E.height=C(this).height();E.width=C(this).width();(E.resizeStop&&E.resizeStop.apply(G.element[0],arguments));C.ui.dialog.overlay.resize()}}).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_position:function(D){var H=C(window),G=C(document),F=G.scrollTop(),I=G.scrollLeft(),E=F;if(C.inArray(D,["center","top","right","bottom","left"])>=0){D=[D=="right"||D=="left"?D:"center",D=="top"||D=="bottom"?D:"middle"]}if(D.constructor!=Array){D=["center","middle"]}if(D[0].constructor==Number){I+=D[0]}else{switch(D[0]){case"left":I+=0;break;case"right":I+=H.width()-this.uiDialog.outerWidth();break;default:case"center":I+=(H.width()-this.uiDialog.outerWidth())/2}}if(D[1].constructor==Number){F+=D[1]}else{switch(D[1]){case"top":F+=0;break;case"bottom":F+=H.height()-this.uiDialog.outerHeight();break;default:case"middle":F+=(H.height()-this.uiDialog.outerHeight())/2}}F=Math.max(F,E);this.uiDialog.css({top:F,left:I})},_setData:function(F,E){(A[F]&&this.uiDialog.data(A[F],E));switch(F){case"buttons":this._createButtons(E);break;case"closeText":this.uiDialogTitlebarCloseText.text(E);break;case"dialogClass":this.uiDialog.removeClass(this.options.dialogClass).addClass(B+E);break;case"draggable":(E?this._makeDraggable():this.uiDialog.draggable("destroy"));break;case"height":this.uiDialog.height(E);break;case"position":this._position(E);break;case"resizable":var G=this.uiDialog,D=this.uiDialog.is(":data(resizable)");(D&&!E&&G.resizable("destroy"));(D&&typeof E=="string"&&G.resizable("option","handles",E));(D||this._makeResizable(E));break;case"title":C(".ui-dialog-title",this.uiDialogTitlebar).html(E||"&nbsp;");break;case"width":this.uiDialog.width(E);break}C.widget.prototype._setData.apply(this,arguments)},_size:function(){var D=this.options;this.element.css({height:0,minHeight:0,width:"auto"});var E=this.uiDialog.css({height:"auto",width:D.width}).height();this.element.css({minHeight:Math.max(D.minHeight-E,0),height:D.height=="auto"?"auto":Math.max(D.height-E,0)})}});C.extend(C.ui.dialog,{version:"1.7.3",defaults:{autoOpen:true,bgiframe:false,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},getter:"isOpen",uuid:0,maxZ:0,getTitleId:function(D){return"ui-dialog-title-"+(D.attr("id")||++this.uuid)},overlay:function(D){this.$el=C.ui.dialog.overlay.create(D)}});C.extend(C.ui.dialog.overlay,{instances:[],maxZ:0,events:C.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(D){return D+".dialog-overlay"}).join(" "),create:function(D){if(this.instances.length===0){setTimeout(function(){if(C.ui.dialog.overlay.instances.length){C(document).bind(C.ui.dialog.overlay.events,function(G){var F=C(G.target).parents(".ui-dialog").css("zIndex")||0;return(F>C.ui.dialog.overlay.maxZ)})}},1);C(document).bind("keydown.dialog-overlay",function(F){(D.options.closeOnEscape&&F.keyCode&&F.keyCode==C.ui.keyCode.ESCAPE&&D.close(F))});C(window).bind("resize.dialog-overlay",C.ui.dialog.overlay.resize)}var E=C("<div></div>").appendTo(document.body).addClass("ui-widget-overlay").css({width:this.width(),height:this.height()});(D.options.bgiframe&&C.fn.bgiframe&&E.bgiframe());this.instances.push(E);return E},destroy:function(E){this.instances.splice(C.inArray(this.instances,E),1);if(this.instances.length===0){C([document,window]).unbind(".dialog-overlay")}E.remove();var D=0;C.each(this.instances,function(){D=Math.max(D,this.css("z-index"))});this.maxZ=D},height:function(){if(C.browser.msie&&C.browser.version<7){var D=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);var E=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(D<E){return C(window).height()+"px"}else{return D+"px"}}else{return C(document).height()+"px"}},width:function(){if(C.browser.msie&&C.browser.version<7){var E=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var D=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(E<D){return C(window).width()+"px"}else{return E+"px"}}else{return C(document).width()+"px"}},resize:function(){var D=C([]);C.each(C.ui.dialog.overlay.instances,function(){D=D.add(this)});D.css({width:0,height:0}).css({width:C.ui.dialog.overlay.width(),height:C.ui.dialog.overlay.height()})}});C.extend(C.ui.dialog.overlay.prototype,{destroy:function(){C.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);jQuery.effects||(function(D){D.effects={version:"1.7.3",save:function(G,F){for(var H=0;H<F.length;H++){if(F[H]!==null){G.data("ec.storage."+F[H],G[0].style[F[H]])}}},restore:function(G,F){for(var H=0;H<F.length;H++){if(F[H]!==null){G.css(F[H],G.data("ec.storage."+F[H]))}}},setMode:function(G,F){if(F=="toggle"){F=G.is(":hidden")?"show":"hide"}return F},getBaseline:function(H,G){var F,I;switch(H[0]){case"top":F=0;break;case"middle":F=0.5;break;case"bottom":F=1;break;default:F=H[0]/G.height}switch(H[1]){case"left":I=0;break;case"center":I=0.5;break;case"right":I=1;break;default:I=H[1]/G.width}return{x:I,y:F}},createWrapper:function(J){if(J.parent().is(".ui-effects-wrapper")){return J.parent()}var I={width:J.outerWidth(true),height:J.outerHeight(true),"float":J.css("float")};J.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var F=J.parent();if(J.css("position")=="static"){F.css({position:"relative"});J.css({position:"relative"})}else{var G=J.css("top");if(isNaN(parseInt(G,10))){G="auto"}var H=J.css("left");if(isNaN(parseInt(H,10))){H="auto"}F.css({position:J.css("position"),top:G,left:H,zIndex:J.css("z-index")}).show();J.css({position:"relative",top:0,left:0})}F.css(I);return F},removeWrapper:function(F){if(F.parent().is(".ui-effects-wrapper")){return F.parent().replaceWith(F)}return F},setTransition:function(H,F,I,G){G=G||{};D.each(F,function(J,K){unit=H.cssUnit(K);if(unit[0]>0){G[K]=unit[0]*I+unit[1]}});return G},animateClass:function(I,H,F,G){var K=(typeof F=="function"?F:(G?G:null));var J=(typeof F=="string"?F:null);return this.each(function(){var O={};var Q=D(this);var P=Q.attr("style")||"";if(typeof P=="object"){P=P.cssText}if(I.toggle){Q.hasClass(I.toggle)?I.remove=I.toggle:I.add=I.toggle}var M=D.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(I.add){Q.addClass(I.add)}if(I.remove){Q.removeClass(I.remove)}var L=D.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(I.add){Q.removeClass(I.add)}if(I.remove){Q.addClass(I.remove)}for(var N in L){if(typeof L[N]!="function"&&L[N]&&N.indexOf("Moz")==-1&&N.indexOf("length")==-1&&L[N]!=M[N]&&(N.match(/color/i)||(!N.match(/color/i)&&!isNaN(parseInt(L[N],10))))&&(M.position!="static"||(M.position=="static"&&!N.match(/left|top|bottom|right/)))){O[N]=L[N]}}Q.animate(O,H,J,function(){if(typeof D(this).attr("style")=="object"){D(this).attr("style")["cssText"]="";D(this).attr("style")["cssText"]=P}else{D(this).attr("style",P)}if(I.add){D(this).addClass(I.add)}if(I.remove){D(this).removeClass(I.remove)}if(K){K.apply(this,arguments)}})})}};function E(I,J){var G=I[1]&&I[1].constructor==Object?I[1]:{};if(J){G.mode=J}var H=I[1]&&I[1].constructor!=Object?I[1]:(G.duration?G.duration:I[2]);H=D.fx.off?0:typeof H==="number"?H:D.fx.speeds[H]||D.fx.speeds._default;var F=G.callback||(D.isFunction(I[1])&&I[1])||(D.isFunction(I[2])&&I[2])||(D.isFunction(I[3])&&I[3]);return[I[0],G,H,F]}D.fn.extend({_show:D.fn.show,_hide:D.fn.hide,__toggle:D.fn.toggle,_addClass:D.fn.addClass,_removeClass:D.fn.removeClass,_toggleClass:D.fn.toggleClass,effect:function(H,I,G,F){return D.effects[H]?D.effects[H].call(this,{method:H,options:I||{},duration:G,callback:F}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,E(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,E(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(D.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,E(arguments,"toggle"))}},addClass:function(H,I,F,G){return I?D.effects.animateClass.apply(this,[{add:H},I,F,G]):this._addClass(H)},removeClass:function(H,I,F,G){return I?D.effects.animateClass.apply(this,[{remove:H},I,F,G]):this._removeClass(H)},toggleClass:function(H,I,F,G){return((typeof I!=="boolean")&&I)?D.effects.animateClass.apply(this,[{toggle:H},I,F,G]):this._toggleClass(H,I)},morph:function(J,H,I,F,G){return D.effects.animateClass.apply(this,[{add:H,remove:J},I,F,G])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(H){var G=this.css(H),F=[];D.each(["em","px","%","pt"],function(J,I){if(G.indexOf(I)>0){F=[parseFloat(G),I]}});return F}});D.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(F,G){D.fx.step[G]=function(H){if(H.state==0){H.start=C(H.elem,G);H.end=A(H.end)}H.elem.style[G]="rgb("+[Math.max(Math.min(parseInt((H.pos*(H.end[0]-H.start[0]))+H.start[0],10),255),0),Math.max(Math.min(parseInt((H.pos*(H.end[1]-H.start[1]))+H.start[1],10),255),0),Math.max(Math.min(parseInt((H.pos*(H.end[2]-H.start[2]))+H.start[2],10),255),0)].join(",")+")"}});function A(F){var G;if(F&&F.constructor==Array&&F.length==3){return F}if(G=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return[parseInt(G[1],10),parseInt(G[2],10),parseInt(G[3],10)]}if(G=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return[parseFloat(G[1])*2.55,parseFloat(G[2])*2.55,parseFloat(G[3])*2.55]}if(G=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return[parseInt(G[1],16),parseInt(G[2],16),parseInt(G[3],16)]}if(G=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return[parseInt(G[1]+G[1],16),parseInt(G[2]+G[2],16),parseInt(G[3]+G[3],16)]}if(G=/rgba\(0, 0, 0, 0\)/.exec(F)){return B.transparent}return B[D.trim(F).toLowerCase()]}function C(F,H){var G;do{G=D.curCSS(F,H);if(G!=""&&G!="transparent"||D.nodeName(F,"body")){break}H="backgroundColor"}while(F=F.parentNode);return A(G)}var B={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};D.easing.jswing=D.easing.swing;D.extend(D.easing,{def:"easeOutQuad",swing:function(I,H,J,F,G){return D.easing[D.easing.def](I,H,J,F,G)},easeInQuad:function(I,H,J,F,G){return F*(H/=G)*H+J},easeOutQuad:function(I,H,J,F,G){return -F*(H/=G)*(H-2)+J},easeInOutQuad:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H+J}return -F/2*((--H)*(H-2)-1)+J},easeInCubic:function(I,H,J,F,G){return F*(H/=G)*H*H+J},easeOutCubic:function(I,H,J,F,G){return F*((H=H/G-1)*H*H+1)+J},easeInOutCubic:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H*H+J}return F/2*((H-=2)*H*H+2)+J},easeInQuart:function(I,H,J,F,G){return F*(H/=G)*H*H*H+J},easeOutQuart:function(I,H,J,F,G){return -F*((H=H/G-1)*H*H*H-1)+J},easeInOutQuart:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H*H*H+J}return -F/2*((H-=2)*H*H*H-2)+J},easeInQuint:function(I,H,J,F,G){return F*(H/=G)*H*H*H*H+J},easeOutQuint:function(I,H,J,F,G){return F*((H=H/G-1)*H*H*H*H+1)+J},easeInOutQuint:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H*H*H*H+J}return F/2*((H-=2)*H*H*H*H+2)+J},easeInSine:function(I,H,J,F,G){return -F*Math.cos(H/G*(Math.PI/2))+F+J},easeOutSine:function(I,H,J,F,G){return F*Math.sin(H/G*(Math.PI/2))+J},easeInOutSine:function(I,H,J,F,G){return -F/2*(Math.cos(Math.PI*H/G)-1)+J},easeInExpo:function(I,H,J,F,G){return(H==0)?J:F*Math.pow(2,10*(H/G-1))+J},easeOutExpo:function(I,H,J,F,G){return(H==G)?J+F:F*(-Math.pow(2,-10*H/G)+1)+J},easeInOutExpo:function(I,H,J,F,G){if(H==0){return J}if(H==G){return J+F}if((H/=G/2)<1){return F/2*Math.pow(2,10*(H-1))+J}return F/2*(-Math.pow(2,-10*--H)+2)+J},easeInCirc:function(I,H,J,F,G){return -F*(Math.sqrt(1-(H/=G)*H)-1)+J},easeOutCirc:function(I,H,J,F,G){return F*Math.sqrt(1-(H=H/G-1)*H)+J},easeInOutCirc:function(I,H,J,F,G){if((H/=G/2)<1){return -F/2*(Math.sqrt(1-H*H)-1)+J}return F/2*(Math.sqrt(1-(H-=2)*H)+1)+J},easeInElastic:function(L,J,M,F,G){var I=1.70158;var H=0;var K=F;if(J==0){return M}if((J/=G)==1){return M+F}if(!H){H=G*0.3}if(K<Math.abs(F)){K=F;var I=H/4}else{var I=H/(2*Math.PI)*Math.asin(F/K)}return -(K*Math.pow(2,10*(J-=1))*Math.sin((J*G-I)*(2*Math.PI)/H))+M},easeOutElastic:function(L,J,M,F,G){var I=1.70158;var H=0;var K=F;if(J==0){return M}if((J/=G)==1){return M+F}if(!H){H=G*0.3}if(K<Math.abs(F)){K=F;var I=H/4}else{var I=H/(2*Math.PI)*Math.asin(F/K)}return K*Math.pow(2,-10*J)*Math.sin((J*G-I)*(2*Math.PI)/H)+F+M},easeInOutElastic:function(L,J,M,F,G){var I=1.70158;var H=0;var K=F;if(J==0){return M}if((J/=G/2)==2){return M+F}if(!H){H=G*(0.3*1.5)}if(K<Math.abs(F)){K=F;var I=H/4}else{var I=H/(2*Math.PI)*Math.asin(F/K)}if(J<1){return -0.5*(K*Math.pow(2,10*(J-=1))*Math.sin((J*G-I)*(2*Math.PI)/H))+M}return K*Math.pow(2,-10*(J-=1))*Math.sin((J*G-I)*(2*Math.PI)/H)*0.5+F+M},easeInBack:function(J,I,K,F,G,H){if(H==undefined){H=1.70158}return F*(I/=G)*I*((H+1)*I-H)+K},easeOutBack:function(J,I,K,F,G,H){if(H==undefined){H=1.70158}return F*((I=I/G-1)*I*((H+1)*I+H)+1)+K},easeInOutBack:function(J,I,K,F,G,H){if(H==undefined){H=1.70158}if((I/=G/2)<1){return F/2*(I*I*(((H*=(1.525))+1)*I-H))+K}return F/2*((I-=2)*I*(((H*=(1.525))+1)*I+H)+2)+K},easeInBounce:function(I,H,J,F,G){return F-D.easing.easeOutBounce(I,G-H,0,F,G)+J},easeOutBounce:function(I,H,J,F,G){if((H/=G)<(1/2.75)){return F*(7.5625*H*H)+J}else{if(H<(2/2.75)){return F*(7.5625*(H-=(1.5/2.75))*H+0.75)+J}else{if(H<(2.5/2.75)){return F*(7.5625*(H-=(2.25/2.75))*H+0.9375)+J}else{return F*(7.5625*(H-=(2.625/2.75))*H+0.984375)+J}}}},easeInOutBounce:function(I,H,J,F,G){if(H<G/2){return D.easing.easeInBounce(I,H*2,0,F,G)*0.5+J}return D.easing.easeOutBounce(I,H*2-G,0,F,G)*0.5+F*0.5+J}})})(jQuery);(function(A){A.effects.pulsate=function(B){return this.queue(function(){var F=A(this);var C=A.effects.setMode(F,B.options.mode||"show");var D=B.options.times||5;var E=B.duration?B.duration/2:A.fx.speeds._default/2;if(C=="hide"){D--}if(F.is(":hidden")){F.css("opacity",0);F.show();F.animate({opacity:1},E,B.options.easing);D=D-2}for(var G=0;G<D;G++){F.animate({opacity:0},E,B.options.easing).animate({opacity:1},E,B.options.easing)}if(C=="hide"){F.animate({opacity:0},E,B.options.easing,function(){F.hide();if(B.callback){B.callback.apply(this,arguments)}})}else{F.animate({opacity:0},E,B.options.easing).animate({opacity:1},E,B.options.easing,function(){if(B.callback){B.callback.apply(this,arguments)}})}F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery)
;
eval(function(E,A,F,B,D,C){D=function(G){return(G<A?"":D(parseInt(G/A)))+((G=G%A)>35?String.fromCharCode(G+29):G.toString(36))};if(!"".replace(/^/,String)){while(F--){C[D(F)]=B[F]||D(F)}B=[function(G){return C[G]}];D=function(){return"\\w+"};F=1}while(F--){if(B[F]){E=E.replace(new RegExp("\\b"+D(F)+"\\b","g"),B[F])}}return E}(";(K($,v,A,B){I C=(K(u){P K(){P u.5Z(51[0])}})((1F&&1F.4Z)?1F.4Z.2T():\"\");I D=($.1X.2R&&1O($.1X.2L,10)<7&&1O($.1X.2L,10)>4);I E=Q;H(C(\"5e\")>-1){H(C(\"5r\")>-1||C(\"5I\")>-1||C(\"5M\")>-1){E=O}};H(C(\"62\")>-1){H(C(\"66\")>-1&&C(\"6q\")>-1){E=O}};H(C(\"6D\")>-1){E=O};H(C(\"74 7c 7r 7\")>-1){E=O};H($.X===B){I F={};$.1V([\"5x\",\"5z\",\"3Q\",\"4U\",\"5X\",\"3b\",\"60\",\"3E\"],K(i,a){F[\"[2h \"+a+\"]\"]=a.2T()});$.1c({X:K(a,b){H(a){P K(){P a.2H(b||G,51)}}},1d:K(a){P a===26?3Q(a):F[3E.3f.4R.3k(a)]||\"2h\"},4Q:K(a){H(4P a!==\"3F\"||!a){P 26}a=$.3G(a);H(/^[\\],:{}\\s]*$/.64(a.2r(/\\\\(?:[\"\\\\\\/69]|u[0-6o-6p-F]{4})/g,\"@\").2r(/\"[^\"\\\\\\n\\r]*\"|O|Q|26|-?\\d+(?:\\.\\d*)?(?:[7h][+\\-]?\\d+)?/g,\"]\").2r(/(?:^|:|,)(?:\\s*\\[)+/g,\"\"))){P v.33&&v.33.4O?v.33.4O(a):(2z 4U(\"P \"+a))()}T{4J(\"5y 33: \"+a)}}})};$.1c($.2N.3f,{5A:K(){H(G.M.2Q){G.M.2Q.3k(G.5N,G.5P,G)}($.2N.2Q[G.5Q]||$.2N.2Q.5S)(G)}});$.1c($.1G,{2B:K(x,t,b,c,d,s){H(s===B)s=1.65;P c*((t=t/d-1)*t*((s+1)*t+s)+1)+b}});$.1c({29:{4I:{1k:'2Y-16',1w:{1r:75,L:7e,J:7n},22:Q,1A:{1y:0.6},21:{13:{1x:2X,1G:\"2B\"},1o:{1x:5B,1G:\"2B\"},Z:{1x:5J,1G:\"2B\"},3h:{1x:2o,1G:\"2B\",4H:10,4G:2}},1B:{L:4y,J:4t},1f:{L:4y,J:4t},2G:{L:-1,J:-1},3e:\"1l\",1E:{1d:\"6c\",6i:Q,6j:\"1b\"}},M:{},2i:{},2w:{},1a:{},R:{16:[],S:{1o:[],2S:[],1t:[],3d:[]},1m:[],1a:[],1I:[],1b:[]},7s:[],1j:Q,1K:Q,2l:\"1a\",4s:{25:{19:/[^\\.]\\.(25)\\s*$/i},4r:{19:/4r\\.4o\\//i,11:'/',17:3,1f:1,18:\"1e://1H.3c.Y/28/%15%?1M=1&V;4n=1&V;1S=0&V;4m=1\"},3c:{19:/3c\\.Y\\/4k/i,11:'=',17:1,1f:1,18:\"1e://1H.3c.Y/28/%15%?1M=1&V;4n=1&V;1S=0&V;4m=1\"},3t:{19:/3t\\.Y/i,11:'/',17:3,1f:1,18:\"1e://3u.3t.Y/1N/%15%?6k=1&V;1M=1&V;6l=1&V;6m=1&V;6n=0&V;4j=&V;3z=1\"},3A:{19:/3A\\.Y\\/4k/i,11:'/',17:4,18:\"1e://1H.3A.Y/6r/%15%/.25?6s=6t=6C\"},3B:{19:/3B\\.Y\\/1N/i,11:'/',17:4,18:\"1e://1H.3B.Y/25/1N/%15%?6H=0&V;6Y=1\"},3C:{19:/3C\\.Y/i,11:'/',17:5,18:\"1e://1H.3C.Y/76.77?78=%15%\"},7a:{19:/2K\\.Y\\/1N\\//i,11:'1N/',17:1,18:\"1e://1H.2K.Y/2U/2U.7f.25?3H=O&V;3z=1&V;7m=O&V;4h=%15%\"},2K:{19:/2K\\.Y\\/1N:/i,11:'1N:',17:1,18:\"1e://1H.2K.Y/2U/2U.25?1M=O&V;3z=1&V;4h=%15%\"},3J:{19:/3J\\.4g/i,11:'/',17:4,18:\"1e://1H.3J.4g/1B/1N/%15%?7u=%2F&V;1M=O&V;7w=%15%&V;7y=O&V;7E=0.57&V;58=0.59&V;5b=5c\"},3L:{19:/3L\\.Y/i,11:'/',17:3,18:\"1e://1H.3L.Y/3u/%15%\"},4e:{19:/v\\.4e\\.Y/i,11:'/',17:3,18:\"1e://5i.5j.Y/3u.25?5k=%15%&V;v=1.5l\"},1D:{19:/1D\\.Y\\/5m/i,11:'=',17:1,18:\"1e://1N.1D.Y/5n.25?1M=1&V;5o=5p&V;5q=%15%\"},3O:{19:/3O\\.Y\\/5s/i,11:'/',17:4,18:\"1e://5u.3O.Y/%15%.5w?1M=O&V;23=24\"}},56:{3g:{19:/3g\\.Y\\/1z/i,11:'?',17:1,18:\"1e://1H.3g.Y/1z/28/?5C=5D-5E-5F-5G-5H&V;w=%L%&V;h=%J%&V;%15%\"},5K:{19:/1z\\.1D\\.Y(.*)5L=c/i,11:'?',17:1,18:\"1e://1z.1D.Y/?3j=7T&V;%15%\"},5O:{19:/1z\\.1D\\.Y\\/1z\\/4b/i,11:'?',17:1,18:\"1e://1z.1D.Y/1z/4b?3j=28&V;%15%\"},1D:{19:/1z\\.1D\\.Y/i,11:'?',17:1,18:\"1e://1z.1D.Y/1z?%15%&V;3j=28\"}},4a:/\\.(?:5R[e]?g|5T|5U|5V|5W)/i,1A:{36:K(a){G.M=a;G.U=$('<N 15=\"'+2z 3b().3v()+'\" 12=\"'+G.M.1k+'-1A\"></N>');G.U.W($.1c({},{'1Z':'68','1l':0,'1g':0,'1y':0,'1T':'24','z-17':G.M.1r},G.M.1w));G.U.1Q($.X(K(e){H(!G.M.22){H($.1Y(G.M.1J)){G.M.1J()}T{G.1L()}}e.2t()},G));G.2I=O;G.48();P G},48:K(){G.2W=$(A.3M);G.2W.2c(G.U);H(D){G.U.W('1Z','32');I a=1O(G.U.W('1r'),10);H(!a){a=1;I b=G.U.W('1Z');H(b==='6u'||!b){G.U.W('1Z','6A')}G.U.W('1r',a)}a=(!!(G.M.1r||G.M.1r===0)&&a>G.M.1r)?G.M.1r:a-1;H(a<0){a=1}G.1s=$('<1f 15=\"47'+2z 3b().3v()+'\" 6E=\"6G\" 46=0 2D=\"\"></1f>');G.1s.W({1r:a,1Z:'32',1l:0,1g:0,23:'24',L:0,J:0,1y:0});G.1s.71(G.U);$('1b, 3M').W({'J':'2o%','L':'2o%','3a-1g':0,'3a-2x':0})}},1q:K(x,y){G.U.W({'J':0,'L':0});H(G.1s){G.1s.W({'J':0,'L':0})};I a={x:$(A).L(),y:$(A).J()};G.U.W({'L':'2o%','J':y||a.y});H(G.1s){G.1s.W({'J':0,'L':0});G.1s.W({'1Z':'32','1g':0,'1l':0,'L':G.U.L(),'J':y||a.y})}P G},13:K(a){H(!G.2I){P G};H(G.2a){G.2a.1R()};H(G.1s){G.1s.W('1T','3l')};G.U.W({'1T':'3l','1y':0});G.2W.1p('1q',$.X(G.1q,G));G.1q();G.2I=Q;G.2a=G.U.45(G.M.44,G.M.1w.1y,$.X(K(){H(G.M.1w.1y){G.U.W(G.M.1w)};G.U.2P('13');H($.1Y(a)){a()}},G));P G},1L:K(a){H(G.2I){P G};H(G.2a){G.2a.1R()};H(G.1s){G.1s.W('1T','24')};G.2W.2e('1q');G.2I=O;G.2a=G.U.45(G.M.43,0,$.X(K(){G.U.2P('1L');H($.1Y(a)){a()};G.U.W({'J':0,'L':0,'1T':'24'})},G));P G}},36:K(a){G.M=$.1c(O,G.4I,a);I b=G.M.1k;I c=$('<N 12=\"'+b+' '+b+'-2l-1a\"><N 12=\"'+b+'-23-1l-1g\"></N><N 12=\"'+b+'-23-1l-42\"></N><N 12=\"'+b+'-23-1l-2x\"></N><a 12=\"'+b+'-1i-1o\" 1h=\"#1o\"><1u>7x</1u></a><N 12=\"'+b+'-1F\"><a 12=\"'+b+'-1i-1g\" 1h=\"#\"><1u>41</1u></a><a 12=\"'+b+'-1i-2x\" 1h=\"#\"><1u>3Y</1u></a></N><N 12=\"'+b+'-S\"><N 12=\"'+b+'-S-7G\"></N><a 12=\"'+b+'-1i-1g\" 1h=\"#\"><1u>41</1u></a><a 12=\"'+b+'-1i-1t\" 1h=\"#\"><1u>7K</1u></a><N 12=\"'+b+'-S-1U\"></N><a 12=\"'+b+'-1i-2x\" 1h=\"#\"><1u>3Y</1u></a><N 12=\"'+b+'-S-3y\"></N></N><N 12=\"'+b+'-1m\"></N><N 12=\"'+b+'-1b\"></N><N 12=\"'+b+'-23-2V-1g\"></N><N 12=\"'+b+'-23-2V-42\"></N><N 12=\"'+b+'-23-2V-2x\"></N></N>');I e=G.R;G.1A.36({1k:b,1w:G.M.1A,22:G.M.22,1r:G.M.1w.1r-1,1J:G.X(G.1o),44:(E?2:G.M.21.13.1x),43:(E?2:G.M.21.1o.1x)});e.16=c;e.1F=$('.'+b+'-1F',c);e.S.N=$('.'+b+'-S',c);e.S.1o=$('.'+b+'-1i-1o',c);e.S.2S=$('.'+b+'-1i-1g',c);e.S.1t=$('.'+b+'-1i-1t',c);e.S.3d=$('.'+b+'-1i-2x',c);e.S.1U=$('.'+b+'-S-1U',c);e.1m=$('.'+b+'-1m',c);e.1b=$('.'+b+'-1b',c);e.Z=$('<N 12=\"'+b+'-Z\"></N>').W({'1Z':'32','z-17':G.M.1w.1r,'1l':-5a}).2c(c);$('3M').2c(e.Z);G.1n=$(v);G.3X();P c},3X:K(){I a=G.1n;a[0].5d=K(){a.2P('1q')};a.1p('1q',G.X(K(){H(G.1j){G.1A.1q();H(!G.1K){G.2k()}}}));a.1p('5f',G.X(K(){H(G.1j&&!G.1K){G.2k()}}));$(A).1p('5g',G.X(K(e){H(G.1j){H(e.3D===27&&G.M.22===Q){G.1o()}H(G.2w.3W>1){H(e.3D===37){G.R.S.2S.2Z('1Q',e)}H(e.3D===39){G.R.S.3d.2Z('1Q',e)}}}}));G.R.S.1o.1p('1Q 31',{\"1C\":\"1o\"},G.X(G.1C));G.R.S.1t.1p('1Q 31',{\"1C\":\"3V\"},G.X(G.1C));G.1A.U.1p('13',G.X(K(){$(G).2Z('13')}));G.1A.U.1p('1L',G.X(K(){$(G).2Z('1o')}))},1C:K(e){G[e.2u.1C].2H(G);e.2t()},X:K(a){P $.X(a,G)},3U:K(d,f,g){I h={1d:\"\",L:\"\",J:\"\",1h:\"\"};$.1V(d,G.X(K(b,c){$.1V(c,G.X(K(i,e){H((b==\"1B\"&&f.11('?')[0].2b(e.19))||(b==\"1f\"&&f.2b(e.19))){h.1h=f;H(e.11){I a=b==\"1B\"?f.11(e.11)[e.17].11('?')[0].11('&')[0]:f.11(e.11)[e.17];h.1h=e.18.2r(\"%15%\",a).2r(\"%L%\",g.L).2r(\"%J%\",g.J)}h.1d=e.1f?\"1f\":b;h.L=g.L||G.M[h.1d].L;h.J=g.J||G.M[h.1d].J;P Q}}));H(!!h.1d)P Q}));P h},3T:K(a,b){I c=G;I d=c.R.S.2S;I f=c.R.S.3d;c.2w.3W=a.2f;H(a.2f>1){d.2e('.16');f.2e('.16');d.1p('1Q.16 31.16',K(e){e.2t();a.4u(a.5t());c.13(a)});f.1p('1Q.16 31.16',K(e){e.2t();a.3P(a.5v());c.13(a)});H(c.R.1F.W(\"1T\")===\"24\"){c.R.S.N.13()}d.13();f.13()}T{d.1L();f.1L()}},3S:K(c,d){I f=G.R;f.S.1U.1v();$.1V(c,G.X(K(i,a){I b=$('<a 1h=\"#\" 12=\"'+a['12']+'\">'+a['1b']+'</a>');b.1p('1Q',G.X(K(e){H($.1Y(a.1J)){a.1J(G.R.1a.2D,G,d)}e.2t()}));f.S.1U.2c(b)}));f.S.N.13()},13:K(d,f,g){H(G.2A.2q(d)){P Q}I h=d[0];I i='';I j=Q;I k=h.1h;I l=G.R;I m={x:G.1n.L(),y:G.1n.J()};I n,J;H(d.2f===1&&h.1d===\"U\"){i=\"U\"}G.2y();j=G.1j;G.3Z();H(j===Q){G.2k()}G.3T(d,f);f=$.1c(O,{'L':0,'J':0,'22':0,'3w':'','3s':O,'Z':-1,'1f':Q,'3r':'','2O':O,'3n':1,'2E':K(){},'34':K(){}},f||{},h);G.M.2E=f.2E;G.M.34=f.34;G.M.2O=f.2O;I o=G.49(k);f=$.1c({},f,o);H(f.L&&(\"\"+f.L).2j(\"p\")>0){f.L=4c.4d((m.x-20)*f.L.4f(0,f.L.2j(\"p\"))/2o)}H(f.J&&(\"\"+f.J).2j(\"p\")>0){f.J=4c.4d((m.y-20)*f.J.4f(0,f.J.2j(\"p\"))/2o)}G.1A.M.22=f.22;l.S.1t.2n(G.M.1k+'-1i-3I').35(G.M.1k+'-1i-1t');G.1K=!(f.Z>0||(f.Z==-1&&f.3s));H($.5Y(f.S)){G.3S(f.S,h.U)}H(G.R.S.1U.4i(\":1v\")===Q){G.R.S.N.13()}l.S.1t.1L();H(G.2A.2q(f.3w)===Q){i=f.3w}T H(f.1f){i='1f'}T H(k.2b(G.4a)){i='1a'}T{I p=G.3U({\"1B\":G.4s,\"1f\":G.56},k,f);H(!!p.1d===O){k=p.1h;i=p.1d;f.L=p.L;f.J=p.J}H(!!i===Q){H(k.2b(/#/)){I q=k.61(k.2j(\"#\"));H($(q).2f>0){i='3q';k=q}T{i='1E'}}T{i='1E'}}}H(i==='1a'){l.1a=2z 63();$(l.1a).4l(G.X(K(){I a=G.R.1a;$(a).2e('4l');H(G.1j===Q){P Q}H(f.L){n=1O(f.L,10);J=1O(f.J,10)}T{a.L=1O(a.L*f.3n,10);a.J=1O(a.J*f.3n,10);H(f.3s){I b=G.3p(a.L,a.J);n=b.L;J=b.J;H(a.L!=n||a.J!=J){G.R.S.N.13();G.R.S.1t.13()}}T{n=a.L;J=a.J}}G.R.1I=(G.2A.2q(f.1I))?Q:$('<N 12=\"'+G.M.1k+'-1I\"></N>').1b(f.1I);G.3m();G.1q(n,J)}));G.R.1a.67=G.X(K(){G.2m(\"4p 6a 1a 6b 4o 4q. 6d 6e 6f 6g.\")});G.R.1a.2D=k}T H(i=='1B'||i=='3q'||i=='1E'||i=='U'){H(i=='3q'){I r=$(k);I s=r.6h(O).13();n=f.L>0?f.L:r.3x(O);J=f.J>0?f.J:r.3i(O);G.2v(s,n,J)}T H(i=='1E'){H(f.L){n=f.L;J=f.J}T{G.2m(\"3R 4v 4w 4x 2s 4z. 4A ?16[L]=4B&16[J]=2X 4C 2s 3y 4D 2s 18.\");P Q}H(G.2i.1E){G.2i.1E.6v()}G.2i.1E=$.1E($.1c({},G.M.1E,{18:k,2m:G.X(K(a,b,c){G.2m(\"6w 6x \"+a.6y+\" \"+c)}),6z:G.X(K(a){G.2v($(a),n,J)})}))}T H(i=='1B'){I t=G.4E(k,f.L,f.J,f.3r);G.2v($(t),f.L,f.J,'1B')}T H(i==='U'){n=f.L>0?f.L:h.U.3x(O);J=f.J>0?f.J:h.U.3i(O);G.2v(h.U,n,J)}}T H(i=='1f'){H(f.L){n=f.L;J=f.J}T{G.2m(\"3R 4v 4w 4x 2s 4z. 4A ?16[L]=4B&16[J]=2X&6B[1f]=O 4C 2s 3y 4D 2s 18.\");P Q}I u='<1f 15=\"47'+(2z 3b().3v())+'\" 46=\"0\" 2D=\"'+k+'\" 1w=\"3a:0; 4F:0;\"></1f>';G.2v($(u).W({L:f.L,J:f.J}),f.L,f.J)}G.1J=$.1Y(g)?g:K(e){}},3m:K(){I a=G.R;I b=a.1m;I c=G.M.1k+'-2y';b.1p('1W',G.X(K(){b.2e('1W');H(G.1j===Q){P Q}G.38('1a');b.1v();a.1b.1v();H(a.1I){b.2c(a.1I)}b.2c(a.1a);H(D||E){b.2n(c)}T{$(a.1a).W(\"1m-4j\",\"6F(3K, 3K, 3K, 0)\");$(a.1a).1R().W(\"1y\",0).2g({\"1y\":1},2X,K(){b.2n(c)})}G.M.2E.2H(G)}))},4E:K(c,d,e,f){I g=$.1c(O,{6I:\"6J:6K-6L-6M-6N-6O\",L:d,J:e,6P:c,2D:c,1w:\"3a:0; 4F:0;\",6Q:\"O\",6R:\"6S\",6T:\"6U\",3H:\"O\",1M:\"O\",1d:\"6V/x-6W-1B\",3r:\"3H=1&1M=1&6X=1\"},f);I h=\"<2h \";I i=\"<28 \";I j=\"\";$.1V(g,K(a,b){H(b!==\"\"){h+=a+\"=\\\"\"+b+\"\\\" \";i+=a+\"=\\\"\"+b+\"\\\" \";j+=\"<4K 1k=\\\"\"+a+\"\\\" 6Z=\\\"\"+b+\"\\\"></4K>\"}});I k=h+\">\"+j+i+\"></28></2h>\";P k},2v:K(a,b,c,d){I e=G;I f=e.M;I g=e.R;I h=g.1m;e.38(\"1b\");e.1q(b+30,c+20);h.1p('1W',K(){h.2n(f.1k+'-2y');g.1b.2c(a);H(d==\"1B\"&&C(\"70\")>-1){e.R.1b.1b(a)}h.2e('1W');H(f.2O&&4P 4L!=='72'){4L.73()}f.2E.2H(G)})},2k:K(w,h){I a={x:$(G.1n).L(),y:$(G.1n).J()};I b={x:$(G.1n).4M(),y:$(G.1n).4N()};I c=G.R;I d=h!=26?h:c.16.3i();I e=w!=26?w:c.16.3x();I y=0;I x=0;x=b.x+((a.x-e)/2);H(G.1j){y=b.y+(a.y-d)/2}T H(G.M.3e==\"2V\"){y=(b.y+a.y+14)}T H(G.M.3e==\"1l\"){y=(b.y-d)-14}H(G.1j){H(!G.2i.Z){G.1P(c.Z,{'1g':x},'Z')}G.1P(c.Z,{'1l':y},'Z')}T{c.Z.W({'1g':x,'1l':y})}},1P:K(d,f,g,h,i){H(2J($.1C.2Y)<1.8){I j=$.79({2p:i||Q,1x:(E?2:G.M.21[g].1x),1G:G.M.21[g].1G,1W:($.1Y(h)?G.X(h,G):26)});P d[j.2p===Q?\"1V\":\"2p\"](K(){H(2J($.1C.2Y)>1.5){H(j.2p===Q){$.7b(G)}}I c=$.1c({},j),4S=G;c.7d=$.1c({},f);c.4T={};2M(I p 7g f){1k=p;c.4T[1k]=c.4V&&c.4V[1k]||c.1G||'7i'}$.1V(f,K(a,b){I e=2z $.2N(4S,c,a);e.1U(e.7j(O)||0,b,\"7k\")});P O})}T{d.2g(f,{2p:i||Q,1x:(E?2:G.M.21[g].1x),1G:G.M.21[g].1G,1W:($.1Y(h)?G.X(h,G):26)})}},1q:K(x,y){I a=G.R;H(G.1j){I b={x:$(G.1n).L(),y:$(G.1n).J()};I c={x:$(G.1n).4M(),y:$(G.1n).4N()};I d=(c.x+(b.x-(x+14))/2);I e=(c.y+(b.y-(y+14))/2);H($.1X.2R||($.1X.7l&&(2J($.1X.2L)<1.9))){y+=4}G.2i.Z=O;G.1P(a.Z.1R(),{'1g':(G.1K&&d<0)?0:d,'1l':(G.1K&&(y+14)>b.y)?c.y:e},'Z',$.X(K(){G.Z=Q},G.2i));G.1P(a.1b,{'J':y-20},'Z');G.1P(a.16.1R(),{'L':(x+14),'J':y-20},'Z',{},O);G.1P(a.1F,{'L':x},'Z');G.1P(a.1F,{'1l':(y-4W)/2},'Z');G.1P(a.1m.1R(),{'L':x,'J':y},'Z',K(){$(a.1m).2P('1W')})}T{a.1b.W({'J':y-20});a.16.W({'L':x+14,'J':y-20});a.1m.W({'L':x,'J':y});a.1F.W({'L':x,'J':4W})}},1o:K(a){I b=G.R;G.1j=Q;G.2w={};G.M.34();H($.1X.2R||E){b.1m.1v();b.1b.1L().1v().13();b.S.1U.1v();b.Z.W(\"1T\",\"24\");G.2k()}T{b.Z.2g({\"1y\":0,\"1l\":\"-=40\"},{2p:Q,1W:(G.X(K(){b.1m.1v();b.1b.1v();b.S.1U.1v();G.2k();b.Z.W({\"1T\":\"24\",\"1y\":1,\"3N\":\"1j\"})}))})}G.1A.1L(G.X(K(){H($.1Y(G.1J)){G.1J.2H(G,$.7o(a))}}));b.1m.1R(O,Q).2e(\"1W\")},3Z:K(){G.1j=O;H($.1X.2R){G.R.Z.7p(0).1w.7q(\"4X\")}G.R.Z.1R().W({1y:1,1T:\"3l\",3N:\"1j\"}).13();G.1A.13()},3h:K(){I z=G.M.21.3h;I x=z.4H;I d=z.1x;I t=z.2a;I o=z.4G;I l=G.R.Z.1Z().1g;I e=G.R.Z;2M(I i=0;i<o;i++){e.2g({1g:l+x},d,t);e.2g({1g:l-x},d,t)};e.2g({1g:l+x},d,t);e.2g({1g:l},d,t)},38:K(a){H(a!=G.2l){I b=G.M.1k+\"-2l-\";G.R.16.2n(b+G.2l).35(b+a);G.2l=a}G.R.Z.W(\"3N\",\"1j\")},2m:K(a){4J(a);G.1o()},49:K(d){I e=/16\\[([^\\]]*)?\\]$/i;I f={};H(d.2b(/#/)){d=d.4Y(0,d.2j(\"#\"))}d=d.4Y(d.2j('?')+1).11(\"&\");$.1V(d,K(){I a=G.11(\"=\");I b=a[0];I c=a[1];H(b.2b(e)){H(7t(c)){c=2J(c)}T H(c.2T()==\"O\"){c=O}T H(c.2T()==\"Q\"){c=Q}f[b.2b(e)[1]]=c}});P f},3p:K(x,y){I a=G.M.2G.L>0?G.M.2G.L:G.1n.L()-50;I b=G.M.2G.J>0?G.M.2G.J:G.1n.J()-50;H(x>a){y=y*(a/x);x=a;H(y>b){x=x*(b/y);y=b}}T H(y>b){x=x*(b/y);y=b;H(x>a){y=y*(a/x);x=a}}P{L:1O(x,10),J:1O(y,10)}},2y:K(){I a=G.M.1w;I b=G.R;I c=b.1m;G.38('1a');c.7v().1R(O);c.1v();b.1b.1v();b.S.N.1L();b.S.N.W(\"L\");c.35(G.M.1k+'-2y');H(G.1j==Q){G.2k(a[\"L\"],a[\"J\"]);G.1q(a[\"L\"],a[\"J\"])}},3V:K(){I a=G;I b=a.R.S;I c=a.R.1a;I d=a.M.1k;I e={};b.1t.2n(d+'-1i-3I '+d+'-1i-1t').35((a.1K)?d+'-1i-1t':d+'-1i-3I');a.2y();a.3m();b.N.13();H(a.1K){e=a.3p(c.L,c.J)}T{e=c}a.1q(e.L,e.J);a.1K=!a.1K},2C:K(a){I a=$(a);P $.1c({},{1h:a.2d(\"1h\"),1S:($.3G(a.2d(\"2u-1S\")||a.2d(\"1S\"))),52:a.2d(\"2u-1S\")?\"2u-1S\":\"1S\",1I:$.3G(a.2d(\"2u-1I\")||a.2d(\"1I\")),U:a[0]},$.4Q(a.2d(\"2u-M\")))},53:K(b,c){I d=$(c.U);I e=G.2C(d);I f=e.1S;I g=e.52;I h=c.M;I j=[];d.7z();H(c.2w){j=c.2w}T H(G.2A.2q(f)||f==='7A'){j=[e]}T{I k=[];I l=[];I m=Q;$(\"a[\"+g+\"], 7B[\"+g+\"]\",G.7C).4X(\"[\"+g+\"=\\\"\"+f+\"\\\"]\").1V($.X(K(i,a){H(d[0]===a){k.4u(G.2C(a));m=O}T H(m==Q){l.3P(G.2C(a))}T{k.3P(G.2C(a))}},G));j=k.7D(l)}$.16(j,h,c.1J,d);P Q},2A:{2q:K(a){H(a==26)P O;H(3E.3f.4R.3k(a)==='[2h 3Q]'||$.1d(a)===\"54\")P a.2f===0}}},16:K(a,b,c){I d=[];H($.29.2A.2q(a)){P $.29}H($.1d(a)===\"3F\"){d=[$.1c({},{1h:a},b)]}T H($.1d(a)===\"54\"){I e=a[0];H($.1d(e)===\"3F\"){2M(I i=0;i<a.2f;i++){d[i]=$.1c({},{1h:a[i]},b)}}T H($.1d(e)===\"2h\"){2M(I i=0;i<a.2f;i++){d[i]=$.1c({},b,a[i])}}}T H($.1d(a)===\"2h\"&&a[0].7F){d=[$.1c({},{1d:\"U\",1h:\"#\",U:a},b)]}P $.29.13(d,b,c)}});$.1C.16=K(a,b){I c={\"55\":G.55,\"M\":a,\"1J\":b};P $(G).7H('1Q',K(e){e.2t();e.7I();P $.X($.29.53,$.29)(e,$.1c({},c,{\"U\":G}))})};$(K(){H(2J($.1C.2Y)>1.2){$.29.36()}T{7J\"4p 3o 2L 7L 7M 4q 4i 7N 7O. 7P 7Q 7R 3o 1.3+\";}})})(3o,7S,5h);",62,490,"||||||||||||||||||||||||||||||||||||||||||this|if|var|height|function|width|options|div|true|return|false|esqueleto|buttons|else|element|amp|css|proxy|com|move||split|class|show||id|lightbox|index|url|reg|image|html|extend|type|http|iframe|left|href|button|visible|name|top|background|win|close|bind|resize|zIndex|shim|max|span|empty|style|duration|opacity|maps|overlay|flash|fn|google|ajax|navigator|easing|www|title|callback|maximized|hide|autoplay|video|parseInt|morph|click|stop|rel|display|custom|each|complete|browser|isFunction|position||animation|modal|border|none|swf|null||embed|LightBoxObject|transition|match|append|attr|unbind|length|animate|object|animations|indexOf|movebox|mode|error|removeClass|100|queue|isEmpty|replace|the|preventDefault|data|appendhtml|gallery|right|loading|new|utils|easeOutBack|getOptions|src|onOpen||maxsize|apply|hidden|parseFloat|collegehumor|version|for|fx|cufon|trigger|step|msie|prev|toLowerCase|moogaloop|bottom|target|400|jquery|triggerHandler||touchend|absolute|JSON|onClose|addClass|create||changemode||margin|Date|youtube|next|emergefrom|prototype|bing|shake|outerHeight|output|call|block|loadimage|ratio|jQuery|calculate|inline|flashvars|autoresize|vimeo|player|getTime|force|outerWidth|end|fullscreen|metacafe|dailymotion|gametrailers|keyCode|Object|string|trim|autostart|min|ustream|255|twitvid|body|overflow|vzaar|push|String|You|custombuttons|create_gallery|ex|maximinimize|total|addevents|Next|open||Previous|middle|closeDuration|showDuration|fadeTo|frameborder|IF_|inject|unserialize|imgsreg|ms|Math|round|wordpress|substring|tv|clip_id|is|color|watch|load|enablejsapi|fs|be|The|loaded|youtu|videoregs|360|unshift|have|to|specify|640|size|Add|600|at|of|swf2html|padding|loops|distance|defaults|alert|param|Cufon|scrollLeft|scrollTop|parse|typeof|parseJSON|toString|self|animatedProperties|Function|specialEasing|90|filter|slice|userAgent||arguments|relent|link|array|selector|mapsreg|5331|endPercent|6292|999|locale|en_US|onorientationchange|mobile|scroll|keydown|document|s0|videopress|guid|01|videoplay|googleplayer|hl|en|docId|android|videos|pop|view|shift|flashplayer|Boolean|Invalid|Number|update|200|emid|3ede2bc8|227d|8fec|d84a|00b6ff19b1cb|googletv|800|streetview|layer|htc_flyer|elem|googlev2|now|prop|jp|_default|gif|png|bmp|tiff|Array|isArray|search|RegExp|substr|opera|Image|test|70158|mini|onerror|fixed|bfnrt|requested|cannot|GET|Please|try|again|later|clone|cache|dataType|hd|show_title|show_byline|show_portrait|9a|fA|mobi|fplayer|playerVars|autoPlay|static|abort|AJAX|Error|status|success|relative|lighbox|yes|iphone|scrolling|rgba|no|additionalInfos|classid|clsid|D27CDB6E|AE6D|11cf|96B8|444553540000|movie|allowFullScreen|allowscriptaccess|always|wmode|transparent|application|shockwave|fullscreenbutton|autoStart|value|chrome|insertAfter|undefined|refresh|windows|99999|remote_wrap|php|mid|speed|collegehumornew|_mark|phone|curAnim|470|jukebox|in|eE|swing|cur|px|mozilla|use_node_id|280|makeArray|get|removeAttribute|os|matchedlnks|isFinite|loc|children|vid|Close|disabledComment|blur|nofollow|area|ownerDocument|concat|beginPercent|nodeType|init|live|stopImmediatePropagation|throw|Maximize|that|was|too|old|Lightbox|Evolution|requires|window|svembed".split("|"),0,{}))
;
jive.namespace.apply(window,["Zapatec.Calendar.bootstrap"]);Zapatec.Calendar.bootstrap=function(b,c){var a=["#"+b.button||b.displayArea||b.inputField];jive.util.lazyLoadJSBySels(a,"click","Zapatec.Calendar",function(){Zapatec.Calendar.setup(b);if(c){c()}})};
;
function userAutocompleteLoader(A){A.fn.userAutocomplete=function(C){var D={loaded:function(){},usersAdded:function(){},userAdded:function(){},userRemoved:function(){},userParam:"user",userValue:"userID",startingUsers:[],multiple:false,large:false,emailAllowed:false,userAllowed:true,inlineRemoval:false,browseModal:true,document:$j(document),existingModal:{modalContainer:"",prevContainer:"",browseContainer:""},minInputLength:2,minUsers:0,urls:{userAutocomplete:_jive_base_url+"/user-autocomplete.jspa",browseModal:_jive_base_url+"/user-autocomplete-modal.jspa"},i18nKeys:{remove:"Remove",add:"Add",change:"Change",browse:"Select Users"}};var E=A.extend(D,C);var B=E.existingModal.modalContainer!=""&&E.existingModal.prevContainer!=""&&E.existingModal.browseContainer!="";if(E.browseModal&&!B){if(E.document.find("#user-autocomplete-modal-container").length==0){E.document.find("body").append('<div class="jive-modal" id="user-autocomplete-modal-container" style="display: none;"><h2 class="jive-modal-title">'+E.i18nKeys.browse+'</h2><a href="#" class="jive-modal-close-top jive-close">Close</a><div id="user-picker-modal-content" class="jive-modal-content"></div></div>')}}return Array.prototype.slice.call(this.map(function(){var W=A(this);W.addClass("jive-chooser-input jive-form-textinput-variable");W.attr("autocomplete","off");var Q=A('<input type="hidden" name="'+E.userParam+'"/>');var I=A('<div class="jive-chooser-autocomplete"></div>').hide();var g=A('<ul class="jive-chooser-list jive-people-list clearfix ie6hack-noOverflow"></ul>').hide();if(E.large){g.addClass("user_auto_large")}else{if(E.multiple){g.addClass("user_auto_multiple")}}W.before(Q);W.after(g);A("body").append(I);var K=0;var X;var d;A(window).unload(function(){Q=null;I=null;g=null;W=null});var R=function(k){switch(k.keyCode){case A.ui.keyCode.UP:Y(K-1);return false;case A.ui.keyCode.DOWN:Y(K+1);return false;case A.ui.keyCode.ENTER:O();A.stop(k,true,true);if(K>0){T()}return false;case A.ui.keyCode.ESCAPE:G();return false;case A.ui.keyCode.LEFT:case A.ui.keyCode.RIGHT:case A.ui.keyCode.TAB:case A.ui.keyCode.HOME:case A.ui.keyCode.END:case A.ui.keyCode.PAGE_UP:case A.ui.keyCode.PAGE_DOWN:return false}O();X=setTimeout(function(){b()},400)};var J=function(){setTimeout(function(){b()},250)};var V=function(){setTimeout(function(){G()},250)};var G=function(){I.html("").hide()};var O=function(){if(X){clearTimeout(X)}};var U=function(k){K=parseInt(A(this).parent().attr("id").split("_")[1]);T();k.stopPropagation();return false};var T=function(){var o=I.find("#user-autocomplete-index_"+K)[0];if(o&&A(o).children("a")[0]){var n=A(A(o).children("a")[0]),m=n.attr("id").split("_")[1],k=n.find("span").text();var l={userID:m,userName:(n.find("img").attr("src")==null)?(n.find("span").attr("id").match(/\/people\/([^\/]+)\//)||[])[1]:(n.find("img").attr("src").match(/\/people\/([^\/]+)\//)||[])[1],avatar:(n.find("img").attr("src")==null)?n.find("span")[0]:n.find("img"),displayName:k,email:(m&&m!="email")?undefined:k};j([l]);W.val("");I.html("").hide()}};var j=function(k){if(!A.isArray(k)){k=[k]}k.forEach(function(l){S(l)});E.usersAdded(k);c()};var c=function(){var k=0;if(A.trim(Q.val())!=""){k=Q.val().split(",").length}if(k>E.minUsers){g.find(".user-autocomplete-remove").parent().show()}else{if(k==E.minUsers){g.find(".user-autocomplete-remove").parent().hide()}}};var S=function(n){var p=n.email||n[E.userValue];if(typeof p=="undefined"){return false}if(E.multiple){var k=[];if(A.trim(Q.val())!=""){k=Q.val().split(",")}if(A.inArray(p,k)==-1){k.push(p);Q.val(k.join(","));var o=A('<li class="user-autocomplete-selection clearfix ie6hack-noHeight"></li>');o.data("userValue",p);var l=A("<span/>").text(n.displayName).html();if(E.large){o.append('<a href="#" class="user-autocomplete-remove">'+n.displayName+'</a><a href="#" class="user-autocomplete-add" style="display:none">'+n.displayName+"</a>")}else{if(n.avatar){o.append(A(n.avatar).clone())}o.append('<span><span class="js-display-name">'+l+'</span> <em>(<a href="#" class="user-autocomplete-remove">'+E.i18nKeys.remove+'</a>)</em><em style="display:none;">(<a href="#" class="user-autocomplete-add">'+E.i18nKeys.add+"</a>)</em></span>")}g.append(o)}W.focus()}else{Q.val(p);W.hide().attr("disabled",true);if(E.browseModal){d.hide()}var m=A('<li class="user-autocomplete-selection clearfix ie6hack-noHeight"></li>');m.data("userValue",p);if(n.avatar){m.append(A(n.avatar).clone())}var l=A("<span/>").text(n.displayName).html();m.append("<span><span>"+l+'</span> <em>(<a href="#" class="user-autocomplete-remove">'+E.i18nKeys.change+"</a>)</em></span>");g.html(m)}g.find(".user-autocomplete-remove").click(N);g.find(".user-autocomplete-add").click(P);g.show();E.userAdded(n)};var f=function(){g.html("").hide();Q.val("")};var F=function(m){var k=Q.val().split(","),l=m(k);Q.val(l.join(","))};var e=function(k){F(function(l){return l.concat(k)})};var a=function(k){F(function(l){return l.filter(function(m){return m!=k})})};var L=function(m){var n=A(m).closest("li"),l=n.find(".js-display-name"),k=n.data("userValue");return k=="email"?l.text():k};var Z=function(m,k){var n=A(m).closest("li"),l=n.find(".js-display-name");if(E.multiple){n.find("em:has(.user-autocomplete-add)").toggle(k);n.find("em:has(.user-autocomplete-remove)").toggle(!k);l.toggleClass("excluded",!k);if(!k&&!E.inlineRemoval){n.remove();if(g.is(":empty")){g.hide()}}}};var N=function(l){var k=L(this);Z(this,false);if(E.multiple){a(k);c()}else{f();W.removeAttr("disabled").show();if(E.browseModal){d.show()}}W.focus();E.userRemoved(k);l.preventDefault()};var P=function(l){var k=L(this);Z(this,true);if(E.multiple){e(k)}l.preventDefault()};var b=function(){var k=W.val();if(k.length>=E.minInputLength){k=k+"*";I.html("");I.load(E.urls.userAutocomplete,{query:k,emailAllowed:E.emailAllowed,userAllowed:E.userAllowed},function(){if(I.html()!=""){var m=W.offset().top+W.outerHeight();var l=W.offset().left;I.css({"top":m,"left":l});I.width(W.width());I.find(".user-autocomplete-item").mouseover(function(){A(this).addClass("hover")});I.find(".user-autocomplete-item").mouseout(function(){A(this).removeClass("hover")});I.find(".user-autocomplete-item A").click(U);I.show();Y(1)}})}else{G()}};var Y=function(k){if(k>0){var l=I.find("#user-autocomplete-index_"+k).addClass("hover").get(0);if(l){I.find("li.hover:not(#user-autocomplete-index_"+k+")").removeClass("hover");K=k}}else{I.find("li.hover").removeClass("hover");K=0}};var H=function(){if(!B){E.document.find("#user-picker-modal-content").prev(".jive-close").trigger("click")}else{A(E.existingModal.modalContainer).scrollTo(A(E.existingModal.prevContainer),500)}};var h=function(k){A.ajax({url:E.urls.browseModal,data:{multiple:E.multiple},success:function(l){if(!B){E.document.find("#user-picker-modal-content").html(l);E.document.find("#user-picker-modal-content").unbind("select").bind("select",function(n){var m=Array.prototype.slice.call(arguments,1);j(m);H()});E.document.find("#user-autocomplete-modal-container").lightbox_me({closeSelector:".jive-close",zIndex:300015,onClose:function(){E.document.find("#user-autocomplete-modal-container .jive-modal-content").html("")}})}else{A(E.existingModal.browseContainer).html(l);A(E.existingModal.browseContainer).unbind("select").bind("select",function(n){var m=Array.prototype.slice.call(arguments,1);j(m);H()});A(E.existingModal.modalContainer).scrollTo(A(E.existingModal.browseContainer),500)}}});k.stopPropagation();return false};var M=function(l,k){j(k)};var i=function(l,k){g.find("li").filter(function(){return A(this).data("userValue")==k}).find("a.user-autocomplete-remove").trigger("click")};if(E.browseModal&&E.userAllowed){d=A('<a href="#" class="jive-chooser-browse">'+E.i18nKeys.browse+"</a>");W.after(d);d.click(h)}if(E.startingUsers.length>0){if(!E.multiple){j([E.startingUsers[0]])}else{E.startingUsers.forEach(function(k){j([k])})}}W.keydown(function(k){if(k.keyCode==A.ui.keyCode.ENTER){A.stop(k,true,true)}}).keyup(R);W.blur(V);W.focus(J);W.bind("addSelection",M);W.bind("removeSelection",i);W.bind("reset",f);if(E.emailAllowed&&!E.userAllowed){Q.closest("form").submit(function(){j({email:A.trim(W.val())})})}E.loaded();c();return{add:j,values:function(){return Q.val().split(/\s*,\s*/)}}}),0)}}userAutocompleteLoader(jQuery)
;
function tagAutocompleteLoader(a){a.fn.tagAutocomplete=function(b){var c={loaded:function(){},tagAdded:function(){},tagRemoved:function(){},minInputLength:2};var d=a.extend(c,b);return Array.prototype.slice.call(this.map(function(){var i=a(this);i.addClass("jive-chooser-input");i.attr("autocomplete","off");var o=a('<div class="jive-chooser-autocomplete"></div>').hide();a("body").append(o);var p=-1;var j;a(window).unload(function(){o=null;i=null});var g=function(r){switch(r.keyCode){case a.ui.keyCode.UP:m(p-1);return false;case a.ui.keyCode.DOWN:m(p+1);return false;case a.ui.keyCode.ENTER:l();a.stop(r,true,true);if(p>-1){k()}return false;case a.ui.keyCode.ESCAPE:h();return false;case a.ui.keyCode.LEFT:case a.ui.keyCode.RIGHT:case a.ui.keyCode.TAB:case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:return false}l();j=setTimeout(function(){q()},400)};var n=function(){setTimeout(function(){q()},250)};var f=function(){setTimeout(function(){h()},250)};var h=function(){o.html("").hide();p=-1};var l=function(){if(j){clearTimeout(j)}};var e=function(r){p=parseInt(a(this).parent().attr("id").split("_")[1]);k();r.stopPropagation();return false};var k=function(){var u=o.find("#tag-autocomplete-index_"+p)[0];if(u&&a(u).children("a")[0]){var s=a(a(u).children("a")[0]),r=s.text();var t=$j.trim(i.val()).split(/\s+/);t[t.length-1]=r;i.val(t.join(" "));h()}};var q=function(){if(i.val().match(/ $/)){h()}else{var r=$j.trim(i.val()).split(/\s+/);var s=r[r.length-1];if(s.length>=d.minInputLength){s=s+"*";h();$j.getJSON(jive.rest.url("/tags/search/"+s+"*"),function(u){if(u.tagSearchResult.length>0){var t=a('<ul class="jive-tags-list"></ul>');$j.each(u.tagSearchResult,function(y,x){t.append('<li id="tag-autocomplete-index_'+y+'" class="tag-autocomplete-item clearfix"><a href="#" class="font-color-normal">'+x.name+"</a></li>")});o.append(t);var w=i.offset().top+i.outerHeight();var v=i.offset().left;o.css({top:w,left:v});o.width(i.width());o.find(".tag-autocomplete-item").mouseover(function(){a(this).addClass("hover")});o.find(".tag-autocomplete-item").mouseout(function(){a(this).removeClass("hover")});o.find(".tag-autocomplete-item A").click(e);o.show()}})}else{h()}}};var m=function(r){if(r<0){o.find("li.hover").removeClass("hover");p=-1}else{var s=o.find("#tag-autocomplete-index_"+r).addClass("hover").get(0);if(s){o.find("li.hover:not(#tag-autocomplete-index_"+r+")").removeClass("hover");p=r}}};i.keydown(function(r){if(r.keyCode==a.ui.keyCode.ENTER){a.stop(r,true,true)}}).keyup(g);i.blur(f);i.focus(n);d.loaded()}),0)}}tagAutocompleteLoader(jQuery);
;
var JiveProjectChooser=$Class.extend({init:function(a){this.chooserURL=a},handleChange:function(a){if($j(a).val()==-1){this.openChooser(a.id)}},openChooser:function(a){this.win=window.open(this.chooserURL+"?id="+a,"","menubar=yes,location=no,personalbar=no,scrollbars=yes,width=600,height=800,resizable")},addProject:function(g,f,e){var a=$j("[id="+g+"]");var b=a.find("option");var c=b.filter('[value="'+f+'"]');if(c.length<1){var d=$j("<option/>",{value:f,text:e});a.find('[value=""]:first').after(d);a.attr("selectedIndex",-1);d.attr("selected","selected")}else{a.attr("selectedIndex",-1);c.attr("selected","selected")}a.focus()}});
;
if(dwr==null){var dwr={}}if(dwr.engine==null){dwr.engine={}}if(DWREngine==null){var DWREngine=dwr.engine}dwr.engine.setErrorHandler=function(a){dwr.engine._errorHandler=a};dwr.engine.setWarningHandler=function(a){dwr.engine._warningHandler=a};dwr.engine.setTextHtmlHandler=function(a){dwr.engine._textHtmlHandler=a};dwr.engine.setTimeout=function(a){dwr.engine._timeout=a};dwr.engine.setPreHook=function(a){dwr.engine._preHook=a};dwr.engine.setPostHook=function(a){dwr.engine._postHook=a};dwr.engine.setHeaders=function(a){dwr.engine._headers=a};dwr.engine.setParameters=function(a){dwr.engine._parameters=a};dwr.engine.XMLHttpRequest=1;dwr.engine.IFrame=2;dwr.engine.ScriptTag=3;dwr.engine.setRpcType=function(a){if(a!=dwr.engine.XMLHttpRequest&&a!=dwr.engine.IFrame&&a!=dwr.engine.ScriptTag){dwr.engine._handleError(null,{name:"dwr.engine.invalidRpcType",message:"RpcType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag"});return}dwr.engine._rpcType=a};dwr.engine.setHttpMethod=function(a){if(a!="GET"&&a!="POST"){dwr.engine._handleError(null,{name:"dwr.engine.invalidHttpMethod",message:"Remoting method must be one of GET or POST"});return}dwr.engine._httpMethod=a};dwr.engine.setOrdered=function(a){dwr.engine._ordered=a};dwr.engine.setAsync=function(a){dwr.engine._async=a};dwr.engine.setActiveReverseAjax=function(a){if(a){if(dwr.engine._activeReverseAjax){return}dwr.engine._activeReverseAjax=true;dwr.engine._poll()}else{if(dwr.engine._activeReverseAjax&&dwr.engine._pollReq){dwr.engine._pollReq.abort()}dwr.engine._activeReverseAjax=false}};dwr.engine.defaultErrorHandler=function(b,a){dwr.engine._debug("Error: "+a.name+", "+a.message,true);if(b==null||b==""){alert("A server error has occurred.")}else{if(b.indexOf("0x80040111")!=-1){dwr.engine._debug(b)}else{alert(b)}}};dwr.engine.defaultWarningHandler=function(b,a){dwr.engine._debug(b)};dwr.engine.beginBatch=function(){if(dwr.engine._batch){dwr.engine._handleError(null,{name:"dwr.engine.batchBegun",message:"Batch already begun"});return}dwr.engine._batch=dwr.engine._createBatch()};dwr.engine.endBatch=function(b){var a=dwr.engine._batch;if(a==null){dwr.engine._handleError(null,{name:"dwr.engine.batchNotBegun",message:"No batch in progress"});return}dwr.engine._batch=null;if(a.map.callCount==0){return}if(b){dwr.engine._mergeBatch(a,b)}if(dwr.engine._ordered&&dwr.engine._batchesLength!=0){dwr.engine._batchQueue[dwr.engine._batchQueue.length]=a}else{dwr.engine._sendData(a)}};dwr.engine.setPollMethod=function(a){dwr.engine.setPollType(a)};dwr.engine.setMethod=function(a){dwr.engine.setRpcType(a)};dwr.engine.setVerb=function(a){dwr.engine.setHttpMethod(a)};dwr.engine.setPollType=function(){dwr.engine._debug("Manually setting the Poll Type is not supported")};dwr.engine._scriptSessionId=null;dwr.engine._getScriptSessionId=function(){if(dwr.engine._scriptSessionId==null){dwr.engine._scriptSessionId=dwr.engine._origScriptSessionId+Math.floor(Math.random()*1000)}return dwr.engine._scriptSessionId};dwr.engine._errorHandler=dwr.engine.defaultErrorHandler;dwr.engine._warningHandler=dwr.engine.defaultWarningHandler;dwr.engine._preHook=null;dwr.engine._postHook=null;dwr.engine._batches={};dwr.engine._batchesLength=0;dwr.engine._batchQueue=[];dwr.engine._rpcType=dwr.engine.XMLHttpRequest;dwr.engine._httpMethod="POST";dwr.engine._ordered=false;dwr.engine._async=true;dwr.engine._batch=null;dwr.engine._timeout=0;dwr.engine._DOMDocument=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.5.0","Msxml2.DOMDocument.4.0","Msxml2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"];dwr.engine._XMLHTTP=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];dwr.engine._activeReverseAjax=false;dwr.engine._outstandingIFrames=[];dwr.engine._pollReq=null;dwr.engine._pollCometInterval=200;dwr.engine._pollRetries=0;dwr.engine._maxPollRetries=0;dwr.engine._textHtmlHandler=null;dwr.engine._headers={"X-J-Token":_jive_auth_token};dwr.engine._parameters=null;dwr.engine._postSeperator="\n";dwr.engine._defaultInterceptor=function(a){return a};dwr.engine._urlRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._contentRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._replyRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._nextBatchId=0;dwr.engine._propnames=["rpcType","httpMethod","async","timeout","errorHandler","warningHandler","textHtmlHandler"];dwr.engine._partialResponseNo=0;dwr.engine._partialResponseYes=1;dwr.engine._partialResponseFlush=2;dwr.engine._unloading=false;dwr.engine._execute=function(l,b,j,h){var e=false;if(dwr.engine._batch==null){dwr.engine.beginBatch();e=true}var d=dwr.engine._batch;var g=[];for(var c=0;c<arguments.length-3;c++){g[c]=arguments[c+3]}if(d.path==null){d.path=l}else{if(d.path!=l){dwr.engine._handleError(d,{name:"dwr.engine.multipleServlets",message:"Can't batch requests to multiple DWR Servlets."});return}}var a;var k=g[g.length-1];if(typeof k=="function"||k==null){a={callback:g.pop()}}else{a=g.pop()}dwr.engine._mergeBatch(d,a);d.handlers[d.map.callCount]={exceptionHandler:a.exceptionHandler,callback:a.callback};var f="c"+d.map.callCount+"-";d.map[f+"scriptName"]=b;d.map[f+"methodName"]=j;d.map[f+"id"]=d.map.callCount;for(c=0;c<g.length;c++){dwr.engine._serializeAll(d,[],g[c],f+"param"+c)}d.map.callCount++;if(e){dwr.engine.endBatch()}};dwr.engine._poll=function(){if(!dwr.engine._activeReverseAjax){return}var a=dwr.engine._createBatch();a.map.id=0;a.map.callCount=1;a.isPoll=true;if(dwr.engine._pollWithXhr=="true"){a.rpcType=dwr.engine.XMLHttpRequest;a.map.partialResponse=dwr.engine._partialResponseNo}else{if(navigator.userAgent.indexOf("Gecko/")!=-1){a.rpcType=dwr.engine.XMLHttpRequest;a.map.partialResponse=dwr.engine._partialResponseYes}else{a.rpcType=dwr.engine.XMLHttpRequest;a.map.partialResponse=dwr.engine._partialResponseNo}}a.httpMethod="POST";a.async=true;a.timeout=0;a.path=dwr.engine._defaultPath;a.preHooks=[];a.postHooks=[];a.errorHandler=dwr.engine._pollErrorHandler;a.warningHandler=dwr.engine._pollErrorHandler;a.handlers[0]={callback:function(b){dwr.engine._pollRetries=0;setTimeout(dwr.engine._poll,b)}};dwr.engine._sendData(a);if(a.rpcType==dwr.engine.XMLHttpRequest&&a.map.partialResponse==dwr.engine._partialResponseYes){dwr.engine._checkCometPoll()}};dwr.engine._pollErrorHandler=function(b,a){dwr.engine._pollRetries++;dwr.engine._debug("Reverse Ajax poll failed (pollRetries="+dwr.engine._pollRetries+"): "+a.name+" : "+a.message);if(dwr.engine._pollRetries<dwr.engine._maxPollRetries){setTimeout(dwr.engine._poll,10000)}else{dwr.engine._activeReverseAjax=false;dwr.engine._debug("Giving up.")}};dwr.engine._createBatch=function(){var a={map:{callCount:0,page:window.location.pathname+window.location.search,httpSessionId:dwr.engine._getJSessionId(),scriptSessionId:dwr.engine._getScriptSessionId()},charsProcessed:0,paramCount:0,parameters:{},headers:{},isPoll:false,handlers:{},preHooks:[],postHooks:[],rpcType:dwr.engine._rpcType,httpMethod:dwr.engine._httpMethod,async:dwr.engine._async,timeout:dwr.engine._timeout,errorHandler:dwr.engine._errorHandler,warningHandler:dwr.engine._warningHandler,textHtmlHandler:dwr.engine._textHtmlHandler};if(dwr.engine._preHook){a.preHooks.push(dwr.engine._preHook)}if(dwr.engine._postHook){a.postHooks.push(dwr.engine._postHook)}var c,b;if(dwr.engine._headers){for(c in dwr.engine._headers){b=dwr.engine._headers[c];if(typeof b!="function"){a.headers[c]=b}}}if(dwr.engine._parameters){for(c in dwr.engine._parameters){b=dwr.engine._parameters[c];if(typeof b!="function"){a.parameters[c]=b}}}return a};dwr.engine._mergeBatch=function(a,d){var e,c;for(var b=0;b<dwr.engine._propnames.length;b++){e=dwr.engine._propnames[b];if(d[e]!=null){a[e]=d[e]}}if(d.preHook!=null){a.preHooks.unshift(d.preHook)}if(d.postHook!=null){a.postHooks.push(d.postHook)}if(d.headers){for(e in d.headers){c=d.headers[e];if(typeof c!="function"){a.headers[e]=c}}}if(d.parameters){for(e in d.parameters){c=d.parameters[e];if(typeof c!="function"){a.map["p-"+e]=""+c}}}};dwr.engine._getJSessionId=function(){var c=document.cookie.split(";");for(var b=0;b<c.length;b++){var a=c[b];while(a.charAt(0)==" "){a=a.substring(1,a.length)}if(a.indexOf(dwr.engine._sessionCookieName+"=")==0){return a.substring(dwr.engine._sessionCookieName.length+1,a.length)}}return""};dwr.engine._checkCometPoll=function(){for(var b=0;b<dwr.engine._outstandingIFrames.length;b++){var e="";var c=dwr.engine._outstandingIFrames[b];try{e=dwr.engine._getTextFromCometIFrame(c)}catch(a){dwr.engine._handleWarning(c.batch,a)}if(e!=""){dwr.engine._processCometResponse(e,c.batch)}}if(dwr.engine._pollReq){var d=dwr.engine._pollReq;var e=d.responseText;if(e!=null){dwr.engine._processCometResponse(e,d.batch)}}if(dwr.engine._outstandingIFrames.length>0||dwr.engine._pollReq){setTimeout(dwr.engine._checkCometPoll,dwr.engine._pollCometInterval)}};dwr.engine._getTextFromCometIFrame=function(b){var a=b.contentWindow.document.body;if(a==null){return""}var c=a.innerHTML;if(c.indexOf("<PRE>")==0||c.indexOf("<pre>")==0){c=c.substring(5,c.length-7)}return c};dwr.engine._processCometResponse=function(d,e){if(e.charsProcessed==d.length){return}if(d.length==0){e.charsProcessed=0;return}var b=d.indexOf("//#DWR-START#",e.charsProcessed);if(b==-1){e.charsProcessed=d.length;return}var a=d.lastIndexOf("//#DWR-END#");if(a==-1){return}if(d.charCodeAt(a+11)==13&&d.charCodeAt(a+12)==10){e.charsProcessed=a+13}else{e.charsProcessed=a+11}var c=d.substring(b+13,a);dwr.engine._receivedBatch=e;dwr.engine._eval(c);dwr.engine._receivedBatch=null};dwr.engine._sendData=function(e){e.map.batchId=dwr.engine._nextBatchId;dwr.engine._nextBatchId++;dwr.engine._batches[e.map.batchId]=e;dwr.engine._batchesLength++;e.completed=false;for(var d=0;d<e.preHooks.length;d++){e.preHooks[d]()}e.preHooks=null;if(e.timeout&&e.timeout!=0){e.timeoutId=setTimeout(function(){dwr.engine._abortRequest(e)},e.timeout)}if(e.rpcType==dwr.engine.XMLHttpRequest){if(window.XMLHttpRequest){e.req=new XMLHttpRequest()}else{if(window.ActiveXObject&&!(navigator.userAgent.indexOf("Mac")>=0&&navigator.userAgent.indexOf("MSIE")>=0)){e.req=dwr.engine._newActiveXObject(dwr.engine._XMLHTTP)}}}var a,c;if(e.req){if(e.async){e.req.onreadystatechange=function(){if(typeof dwr!="undefined"){dwr.engine._stateChange(e)}}}if(e.isPoll){dwr.engine._pollReq=e.req;if(!(document.all&&!window.opera)){e.req.batch=e}}var b=navigator.userAgent.indexOf("Safari/");if(b>=0){var g=navigator.userAgent.substring(b+7);if(parseInt(g,10)<400){if(dwr.engine._allowGetForSafariButMakeForgeryEasier=="true"){e.httpMethod="GET"}else{dwr.engine._handleWarning(e,{name:"dwr.engine.oldSafari",message:"Safari GET support disabled. See getahead.org/dwr/server/servlet and allowGetForSafariButMakeForgeryEasier."})}}}e.mode=e.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;c=dwr.engine._constructRequest(e);try{e.req.open(e.httpMethod,c.url,e.async);try{for(a in e.headers){var j=e.headers[a];if(typeof j=="string"){e.req.setRequestHeader(a,j)}}if(!e.headers["Content-Type"]){e.req.setRequestHeader("Content-Type","text/plain")}}catch(h){dwr.engine._handleWarning(e,h)}e.req.send(c.body);if(!e.async){dwr.engine._stateChange(e)}}catch(h){dwr.engine._handleError(e,h)}}else{if(e.rpcType!=dwr.engine.ScriptTag){var f=e.isPoll?"dwr-if-poll-"+e.map.batchId:"dwr-if-"+e.map.batchId;e.div=document.createElement("div");document.body.appendChild(e.div);e.div.innerHTML="<iframe src='javascript:void(0)' frameborder='0' style='width:0px;height:0px;border:0;' id='"+f+"' name='"+f+"' onload='dwr.engine._iframeLoadingComplete ("+e.map.batchId+");'></iframe>";e.document=document;e.iframe=e.document.getElementById(f);e.iframe.batch=e;e.mode=e.isPoll?dwr.engine._ModeHtmlPoll:dwr.engine._ModeHtmlCall;if(e.isPoll){dwr.engine._outstandingIFrames.push(e.iframe)}c=dwr.engine._constructRequest(e);if(e.httpMethod=="GET"){e.iframe.setAttribute("src",c.url)}else{e.form=e.document.createElement("form");e.form.setAttribute("id","dwr-form");e.form.setAttribute("action",c.url);e.form.setAttribute("style","display:none;");e.form.setAttribute("target",f);e.form.target=f;e.form.setAttribute("method",e.httpMethod);for(a in e.map){var j=e.map[a];if(typeof j!="function"){var k=e.document.createElement("input");k.setAttribute("type","hidden");k.setAttribute("name",a);k.setAttribute("value",j);e.form.appendChild(k)}}e.document.body.appendChild(e.form);e.form.submit()}}else{e.httpMethod="GET";e.mode=e.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;c=dwr.engine._constructRequest(e);e.script=document.createElement("script");e.script.id="dwr-st-"+e.map["c0-id"];e.script.src=c.url;document.body.appendChild(e.script)}}};dwr.engine._ModePlainCall="/call/plaincall/";dwr.engine._ModeHtmlCall="/call/htmlcall/";dwr.engine._ModePlainPoll="/call/plainpoll/";dwr.engine._ModeHtmlPoll="/call/htmlpoll/";dwr.engine._constructRequest=function(b){var c={url:b.path+b.mode,body:null};if(b.isPoll==true){c.url+="ReverseAjax.dwr"}else{if(b.map.callCount==1){c.url+=b.map["c0-scriptName"]+"."+b.map["c0-methodName"]+".dwr"}else{c.url+="Multiple."+b.map.callCount+".dwr"}}var e=location.href.match(/jsessionid=([^?]+)/);if(e!=null){c.url+=";jsessionid="+e[1]}var d;if(b.httpMethod=="GET"){b.map.callCount=""+b.map.callCount;c.url+="?";for(d in b.map){if(typeof b.map[d]!="function"){c.url+=encodeURIComponent(d)+"="+encodeURIComponent(b.map[d])+"&"}}c.url=c.url.substring(0,c.url.length-1)}else{c.body="";if(document.all&&!window.opera){var a=[];for(d in b.map){if(typeof b.map[d]!="function"){a.push(d+"="+b.map[d]+dwr.engine._postSeperator)}}c.body=a.join("")}else{for(d in b.map){if(typeof b.map[d]!="function"){c.body+=d+"="+b.map[d]+dwr.engine._postSeperator}}}c.body=dwr.engine._contentRewriteHandler(c.body)}c.url=dwr.engine._urlRewriteHandler(c.url);return c};dwr.engine._stateChange=function(c){var b;if(c.completed){dwr.engine._debug("Error: _stateChange() with batch.completed");return}var f=c.req;try{if(f.readyState!=4){return}}catch(d){dwr.engine._handleWarning(c,d);dwr.engine._clearUp(c);return}if(dwr.engine._unloading){dwr.engine._debug("Ignoring reply from server as page is unloading.");return}try{var e=f.responseText;e=dwr.engine._replyRewriteHandler(e);var a=f.status;if(e==null||e==""){dwr.engine._handleWarning(c,{name:"dwr.engine.missingData",message:"No data received from server"})}else{if(a!=200){dwr.engine._handleError(c,{name:"dwr.engine.http."+a,message:f.statusText})}else{var g=f.getResponseHeader("Content-Type");if(!g.match(/^text\/plain/)&&!g.match(/^text\/javascript/)){if(g.match(/^text\/html/)&&typeof c.textHtmlHandler=="function"){c.textHtmlHandler({status:a,responseText:e,contentType:g})}else{dwr.engine._handleWarning(c,{name:"dwr.engine.invalidMimeType",message:"Invalid content type: '"+g+"'"})}}else{if(c.isPoll&&c.map.partialResponse==dwr.engine._partialResponseYes){dwr.engine._processCometResponse(e,c)}else{if(e.search("//#DWR")==-1){dwr.engine._handleWarning(c,{name:"dwr.engine.invalidReply",message:"Invalid reply from server"})}else{b=e}}}}}}catch(d){dwr.engine._handleWarning(c,d)}dwr.engine._callPostHooks(c);dwr.engine._receivedBatch=c;if(b!=null){b=b.replace(dwr.engine._scriptTagProtection,"")}dwr.engine._eval(b);dwr.engine._receivedBatch=null;dwr.engine._validateBatch(c);if(!c.completed){dwr.engine._clearUp(c)}};dwr.engine._validateBatch=function(a){if(!a.completed){for(var b=0;b<a.map.callCount;b++){if(a.handlers[b]!=null){dwr.engine._handleWarning(a,{name:"dwr.engine.incompleteReply",message:"Incomplete reply from server"});break}}}};dwr.engine._iframeLoadingComplete=function(a){var b=dwr.engine._batches[a];if(b){dwr.engine._validateBatch(b)}};dwr.engine._remoteHandleCallback=function(a,f,e){var c=dwr.engine._batches[a];if(c==null){dwr.engine._debug("Warning: batch == null in remoteHandleCallback for batchId="+a,true);return}try{var b=c.handlers[f];c.handlers[f]=null;if(!b){dwr.engine._debug("Warning: Missing handlers. callId="+f,true)}else{if(typeof b.callback=="function"){b.callback(e)}}}catch(d){dwr.engine._handleError(c,d)}};dwr.engine._remoteHandleException=function(a,e,d){var c=dwr.engine._batches[a];if(c==null){dwr.engine._debug("Warning: null batch in remoteHandleException",true);return}var b=c.handlers[e];c.handlers[e]=null;if(b==null){dwr.engine._debug("Warning: null handlers in remoteHandleException",true);return}if(d.message==undefined){d.message=""}if(typeof b.exceptionHandler=="function"){b.exceptionHandler(d.message,d)}else{if(typeof c.errorHandler=="function"){c.errorHandler(d.message,d)}}};dwr.engine._remoteHandleBatchException=function(c,a){var b=(dwr.engine._receivedBatch==null&&a!=null);if(b){dwr.engine._receivedBatch=dwr.engine._batches[a]}if(c.message==undefined){c.message=""}dwr.engine._handleError(dwr.engine._receivedBatch,c);if(b){dwr.engine._receivedBatch=null;dwr.engine._clearUp(dwr.engine._batches[a])}};dwr.engine._remotePollCometDisabled=function(c,a){dwr.engine.setActiveReverseAjax(false);var b=(dwr.engine._receivedBatch==null&&a!=null);if(b){dwr.engine._receivedBatch=dwr.engine._batches[a]}if(c.message==undefined){c.message=""}dwr.engine._handleError(dwr.engine._receivedBatch,c);if(b){dwr.engine._receivedBatch=null;dwr.engine._clearUp(dwr.engine._batches[a])}};dwr.engine._remoteBeginIFrameResponse=function(b,a){if(b!=null){dwr.engine._receivedBatch=b.batch}dwr.engine._callPostHooks(dwr.engine._receivedBatch)};dwr.engine._remoteEndIFrameResponse=function(a){dwr.engine._clearUp(dwr.engine._receivedBatch);dwr.engine._receivedBatch=null};dwr.engine._eval=function(script){if(script==null){return null}if(script==""){dwr.engine._debug("Warning: blank script",true);return null}return eval(script)};dwr.engine._abortRequest=function(a){if(a&&!a.completed){dwr.engine._clearUp(a);if(a.req){a.req.abort()}dwr.engine._handleError(a,{name:"dwr.engine.timeout",message:"Timeout"})}};dwr.engine._callPostHooks=function(a){if(a.postHooks){for(var b=0;b<a.postHooks.length;b++){a.postHooks[b]()}a.postHooks=null}};dwr.engine._clearUp=function(b){if(!b){dwr.engine._debug("Warning: null batch in dwr.engine._clearUp()",true);return}if(b.completed){dwr.engine._debug("Warning: Double complete",true);return}if(b.div){b.div.parentNode.removeChild(b.div)}if(b.iframe){for(var c=0;c<dwr.engine._outstandingIFrames.length;c++){if(dwr.engine._outstandingIFrames[c]==b.iframe){dwr.engine._outstandingIFrames.splice(c,1)}}b.iframe.parentNode.removeChild(b.iframe)}if(b.form){b.form.parentNode.removeChild(b.form)}if(b.req){if(b.req==dwr.engine._pollReq){dwr.engine._pollReq=null}delete b.req}if(b.timeoutId){clearTimeout(b.timeoutId);delete b.timeoutId}if(b.map&&(b.map.batchId||b.map.batchId==0)){delete dwr.engine._batches[b.map.batchId];dwr.engine._batchesLength--}b.completed=true;if(dwr.engine._batchQueue.length!=0){var a=dwr.engine._batchQueue.shift();dwr.engine._sendData(a)}};dwr.engine._unloader=function(){dwr.engine._unloading=true;dwr.engine._batchQueue.length=0;for(var a in dwr.engine._batches){var b=dwr.engine._batches[a];if(b&&b.map){if(b.req){b.req.abort()}dwr.engine._clearUp(b)}}};if(window.addEventListener){window.addEventListener("unload",dwr.engine._unloader,false)}else{if(window.attachEvent){window.attachEvent("onunload",dwr.engine._unloader)}}dwr.engine._handleError=function(a,b){if(typeof b=="string"){b={name:"unknown",message:b}}if(b.message==null){b.message=""}if(b.name==null){b.name="unknown"}if(a&&typeof a.errorHandler=="function"){a.errorHandler(b.message,b)}else{if(dwr.engine._errorHandler){dwr.engine._errorHandler(b.message,b)}}if(a){dwr.engine._clearUp(a)}};dwr.engine._handleWarning=function(a,b){if(typeof b=="string"){b={name:"unknown",message:b}}if(b.message==null){b.message=""}if(b.name==null){b.name="unknown"}if(a&&typeof a.warningHandler=="function"){a.warningHandler(b.message,b)}else{if(dwr.engine._warningHandler){dwr.engine._warningHandler(b.message,b)}}if(a){dwr.engine._clearUp(a)}};dwr.engine._serializeAll=function(b,d,c,a){if(c==null){b.map[a]="null:null";return}switch(typeof c){case"boolean":b.map[a]="boolean:"+c;break;case"number":b.map[a]="number:"+c;break;case"string":b.map[a]="string:"+encodeURIComponent(c);break;case"object":if(c instanceof String){b.map[a]="String:"+encodeURIComponent(c)}else{if(c instanceof Boolean){b.map[a]="Boolean:"+c}else{if(c instanceof Number){b.map[a]="Number:"+c}else{if(c instanceof Date){b.map[a]="Date:"+c.getTime()}else{if(c&&c.join){b.map[a]=dwr.engine._serializeArray(b,d,c,a)}else{b.map[a]=dwr.engine._serializeObject(b,d,c,a)}}}}}break;case"function":break;default:dwr.engine._handleWarning(null,{name:"dwr.engine.unexpectedType",message:"Unexpected type: "+typeof c+", attempting default converter."});b.map[a]="default:"+c;break}};dwr.engine._lookup=function(e,c,a){var d;for(var b=0;b<e.length;b++){if(e[b].data==c){d=e[b];break}}if(d){return"reference:"+d.name}e.push({data:c,name:a});return null};dwr.engine._serializeObject=function(c,h,g,b){var f=dwr.engine._lookup(h,g,b);if(f){return f}if(g.nodeName&&g.nodeType){return dwr.engine._serializeXml(c,h,g,b)}var e="Object_"+dwr.engine._getObjectClassName(g)+":{";var d;for(d in g){if(typeof g[d]!="function"){c.paramCount++;var a="c"+dwr.engine._batch.map.callCount+"-e"+c.paramCount;dwr.engine._serializeAll(c,h,g[d],a);e+=encodeURIComponent(d)+":reference:"+a+", "}}if(e.substring(e.length-2)==", "){e=e.substring(0,e.length-2)}e+="}";return e};dwr.engine._errorClasses={Error:Error,EvalError:EvalError,RangeError:RangeError,ReferenceError:ReferenceError,SyntaxError:SyntaxError,TypeError:TypeError,URIError:URIError};dwr.engine._getObjectClassName=function(c){if(c&&c.constructor&&c.constructor.toString){var d=c.constructor.toString();var a=d.match(/function\s+(\w+)/);if(a&&a.length==2){return a[1]}}if(c&&c.constructor){for(var b in dwr.engine._errorClasses){if(c.constructor==dwr.engine._errorClasses[b]){return b}}}if(c){var d=Object.prototype.toString.call(c);var a=d.match(/\[object\s+(\w+)/);if(a&&a.length==2){return a[1]}}return"Object"};dwr.engine._serializeXml=function(c,f,e,b){var d=dwr.engine._lookup(f,e,b);if(d){return d}var a;if(window.XMLSerializer){a=new XMLSerializer().serializeToString(e)}else{if(e.toXml){a=e.toXml}else{a=e.innerHTML}}return"XML:"+encodeURIComponent(a)};dwr.engine._serializeArray=function(h,c,f,a){var d=dwr.engine._lookup(c,f,a);if(d){return d}if(document.all&&!window.opera){var b=["Array:["];for(var g=0;g<f.length;g++){if(g!=0){b.push(",")}h.paramCount++;var j="c"+dwr.engine._batch.map.callCount+"-e"+h.paramCount;dwr.engine._serializeAll(h,c,f[g],j);b.push("reference:");b.push(j)}b.push("]");e=b.join("")}else{var e="Array:[";for(var g=0;g<f.length;g++){if(g!=0){e+=","}h.paramCount++;var j="c"+dwr.engine._batch.map.callCount+"-e"+h.paramCount;dwr.engine._serializeAll(h,c,f[g],j);e+="reference:";e+=j}e+="]"}return e};dwr.engine._unserializeDocument=function(a){var c;if(window.DOMParser){var e=new DOMParser();c=e.parseFromString(a,"text/xml");if(!c.documentElement||c.documentElement.tagName=="parsererror"){var b=c.documentElement.firstChild.data;b+="\n"+c.documentElement.firstChild.nextSibling.firstChild.data;throw b}return c}else{if(window.ActiveXObject){c=dwr.engine._newActiveXObject(dwr.engine._DOMDocument);c.loadXML(a);return c}else{var d=document.createElement("div");d.innerHTML=a;return d}}};dwr.engine._newActiveXObject=function(a){var d;for(var c=0;c<a.length;c++){try{d=new ActiveXObject(a[c]);break}catch(b){}}return d};dwr.engine._debug=function(f,d){var a=false;try{if(window.console){if(d&&window.console.trace){window.console.trace()}window.console.log(f);a=true}else{if(window.opera&&window.opera.postError){window.opera.postError(f);a=true}}}catch(c){}if(!a){var b=document.getElementById("dwr-debug");if(b){var e=f+"<br/>"+b.innerHTML;if(e.length>2048){e=e.substring(0,2048)}b.innerHTML=e}}};
;
if(dwr==null){var dwr={}}if(dwr.util==null){dwr.util={}}if(DWRUtil==null){var DWRUtil=dwr.util}dwr.util._escapeHtml=true;dwr.util.setEscapeHtml=function(a){dwr.util._escapeHtml=a};dwr.util._shouldEscapeHtml=function(a){if(a&&a.escapeHtml!=null){return a.escapeHtml}return dwr.util._escapeHtml};dwr.util.escapeHtml=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};dwr.util.unescapeHtml=function(a){return a.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")};dwr.util.replaceXmlCharacters=function(a){a=a.replace("&","+");a=a.replace("<","\u2039");a=a.replace(">","\u203A");a=a.replace("'","\u2018");a=a.replace('"',"\u201C");return a};dwr.util.containsXssRiskyCharacters=function(a){return(a.indexOf("&")!=-1||a.indexOf("<")!=-1||a.indexOf(">")!=-1||a.indexOf("'")!=-1||a.indexOf('"')!=-1)};dwr.util.onReturn=function(a,b){if(!a){a=window.event}if(a&&a.keyCode&&a.keyCode==13){b()}};dwr.util.selectRange=function(c,d,a){c=dwr.util._getElementById(c,"selectRange()");if(c==null){return}if(c.setSelectionRange){c.setSelectionRange(d,a)}else{if(c.createTextRange){var b=c.createTextRange();b.moveStart("character",d);b.moveEnd("character",a-c.value.length);b.select()}}c.focus()};if(document.getElementById){dwr.util.byId=function(){var c=new Array();for(var b=0;b<arguments.length;b++){var a=arguments[b];if(typeof a=="string"){a=document.getElementById(a)}if(arguments.length==1){return a}c.push(a)}return c}}else{if(document.all){dwr.util.byId=function(){var c=new Array();for(var b=0;b<arguments.length;b++){var a=arguments[b];if(typeof a=="string"){a=document.all[a]}if(arguments.length==1){return a}c.push(a)}return c}}}var $;if(!$){$=dwr.util.byId}dwr.util.toDescriptiveString=function(f,a,i){if(a===undefined){a=1}var c={};if(dwr.util._isObject(i)){c=i}var g={escapeHtml:false,baseIndent:"",childIndent:"\u00A0\u00A0",lineTerminator:"\n",oneLineMaxItems:5,shortStringMaxLength:13,propertyNameMaxLength:30};for(var b in g){if(!(b in c)){c[b]=g[b]}}var h={document:true,ownerDocument:true,all:true,parentElement:true,parentNode:true,offsetParent:true,children:true,firstChild:true,lastChild:true,previousSibling:true,nextSibling:true,innerHTML:true,outerHTML:true,innerText:true,outerText:true,textContent:true,attributes:true,style:true,currentStyle:true,runtimeStyle:true,parentTextEdit:true};function e(p,j,l,w){var m="";try{if(typeof p=="string"){var s=p;if(j==0&&s.length>w.shortStringMaxLength){s=s.substring(0,w.shortStringMaxLength-3)+"..."}if(w.escapeHtml){var x=s.split("\n");for(var q=0;q<x.length;q++){x[q]=dwr.util.escapeHtml(x[q])}s=x.join("\n")}if(j==0){s=s.replace(/\n|\r|\t/g,function(y){switch(y){case"\n":return"\\n";case"\r":return"";case"\t":return"\\t"}})}else{s=s.replace(/\n|\r|\t/g,function(y){switch(y){case"\n":return w.lineTerminator+d(l+1,w);case"\r":return"";case"\t":return"\\t"}})}m='"'+s+'"'}else{if(typeof p=="function"){m="function"}else{if(dwr.util._isArray(p)){if(j==0){if(p.length>0){m="[...]"}else{m="[]"}}else{var v=[];v.push("[");var r=0;for(var q=0;q<p.length;q++){if(!(q in p)){continue}var t=p[q];if(r>0){v.push(", ")}if(j==1){if(r==w.oneLineMaxItems){v.push("...");break}}else{v.push(w.lineTerminator+d(l+1,w))}if(q!=r){v.push(q);v.push(":")}v.push(e(t,j-1,l+1,w));r++}if(j>1){v.push(w.lineTerminator+d(l,w))}v.push("]");m=v.join("")}}else{if(dwr.util._isObject(p)&&!dwr.util._isDate(p)){if(j==0){m=dwr.util._detailedTypeOf(p)}else{var v=[];if(dwr.util._detailedTypeOf(p)!="Object"){v.push(dwr.util._detailedTypeOf(p));if(typeof p.valueOf()!="object"){v.push(":");v.push(e(p.valueOf(),1,l,w))}v.push(" ")}v.push("{");var u=dwr.util._isHTMLElement(p);var r=0;for(var k in p){var o=p[k];if(u){if(!o){continue}if(typeof o=="function"){continue}if(h[k]){continue}if(k.toUpperCase()==k){continue}}if(r>0){v.push(", ")}if(j==1){if(r==w.oneLineMaxItems){v.push("...");break}}else{v.push(w.lineTerminator+d(l+1,w))}v.push(k.length>w.propertyNameMaxLength?k.substring(0,w.propertyNameMaxLength-3)+"...":k);v.push(":");v.push(e(o,j-1,l+1,w));r++}if(j>1&&r>0){v.push(w.lineTerminator+d(l,w))}v.push("}");m=v.join("")}}else{m=""+p}}}}return m}catch(n){return(n.message?n.message:""+n)}}function d(l,j){var m=[];m.push(j.baseIndent);for(var k=0;k<l;k++){m.push(j.childIndent)}return m.join("")}return e(f,a,0,c)};dwr.util.useLoadingMessage=function(a){var b;if(a){b=a}else{b="Loading"}dwr.engine.setPreHook(function(){var d=dwr.util.byId("disabledZone");if(!d){d=document.createElement("div");d.setAttribute("id","disabledZone");d.style.position="absolute";d.style.zIndex="1000";d.style.left="0px";d.style.top="0px";d.style.width="100%";d.style.height="100%";document.body.appendChild(d);var c=document.createElement("div");c.setAttribute("id","messageZone");c.style.position="absolute";c.style.top="0px";c.style.right="0px";c.style.background="red";c.style.color="white";c.style.fontFamily="Arial,Helvetica,sans-serif";c.style.padding="4px";d.appendChild(c);var e=document.createTextNode(b);c.appendChild(e);dwr.util._disabledZoneUseCount=1}else{dwr.util.byId("messageZone").innerHTML=b;d.style.visibility="visible";dwr.util._disabledZoneUseCount++}});dwr.engine.setPostHook(function(){dwr.util._disabledZoneUseCount--;if(dwr.util._disabledZoneUseCount==0){dwr.util.byId("disabledZone").style.visibility="hidden"}})};dwr.util.setHighlightHandler=function(a){dwr.util._highlightHandler=a};dwr.util.yellowFadeHighlightHandler=function(a){dwr.util._yellowFadeProcess(a,0)};dwr.util._yellowFadeSteps=["d0","b0","a0","90","98","a0","a8","b0","b8","c0","c8","d0","d8","e0","e8","f0","f8"];dwr.util._yellowFadeProcess=function(a,b){a=dwr.util.byId(a);if(b<dwr.util._yellowFadeSteps.length){a.style.backgroundColor="#ffff"+dwr.util._yellowFadeSteps[b];setTimeout("dwr.util._yellowFadeProcess('"+a.id+"',"+(b+1)+")",200)}else{a.style.backgroundColor="transparent"}};dwr.util.borderFadeHighlightHandler=function(a){a.style.borderWidth="2px";a.style.borderStyle="solid";dwr.util._borderFadeProcess(a,0)};dwr.util._borderFadeSteps=["d0","b0","a0","90","98","a0","a8","b0","b8","c0","c8","d0","d8","e0","e8","f0","f8"];dwr.util._borderFadeProcess=function(a,b){a=dwr.util.byId(a);if(b<dwr.util._borderFadeSteps.length){a.style.borderColor="#ff"+dwr.util._borderFadeSteps[b]+dwr.util._borderFadeSteps[b];setTimeout("dwr.util._borderFadeProcess('"+a.id+"',"+(b+1)+")",200)}else{a.style.backgroundColor="transparent"}};dwr.util.focusHighlightHandler=function(b){try{b.focus()}catch(a){}};dwr.util._highlightHandler=null;dwr.util.highlight=function(b,a){if(a&&a.highlightHandler){a.highlightHandler(dwr.util.byId(b))}else{if(dwr.util._highlightHandler!=null){dwr.util._highlightHandler(dwr.util.byId(b))}}};dwr.util.setValue=function(f,g,c){if(g==null){g=""}if(c==null){c={}}var h=f;if(typeof f=="string"){f=dwr.util.byId(f);if(f&&f.id!=h){f=null}}var a=null;if(f==null){a=document.getElementsByName(h);if(a.length>=1){f=a.item(0)}}if(f==null){dwr.util._debug("setValue() can't find an element with id/name: "+h+".");return}dwr.util.highlight(f,c);if(dwr.util._isHTMLElement(f,"select")){if(f.type=="select-multiple"&&dwr.util._isArray(g)){dwr.util._selectListItems(f,g)}else{dwr.util._selectListItem(f,g)}return}if(dwr.util._isHTMLElement(f,"input")){if(f.type=="radio"||f.type=="checkbox"){if(a&&a.length>=1){for(var d=0;d<a.length;d++){var e=a.item(d);if(e.type!=f.type){continue}if(dwr.util._isArray(g)){e.checked=false;for(var b=0;b<g.length;b++){if(g[b]==e.value){e.checked=true}}}else{e.checked=(e.value==g)}}}else{f.checked=(g==true)}}else{f.value=g}return}if(dwr.util._isHTMLElement(f,"textarea")){f.value=g;return}if(g.nodeType){if(g.nodeType==9){g=g.documentElement}g=dwr.util._importNode(f.ownerDocument,g,true);f.appendChild(g);return}if(dwr.util._shouldEscapeHtml(c)&&typeof(g)=="string"){if(f.textContent){f.textContent=g}else{if(f.innerText){f.innerText=g}else{f.innerHTML=dwr.util.escapeHtml(g)}}}else{f.innerHTML=g}};dwr.util._selectListItems=function(d,e){var c=false;var b;var a;for(b=0;b<d.options.length;b++){d.options[b].selected=false;for(a=0;a<e.length;a++){if(d.options[b].value==e[a]){d.options[b].selected=true}}}if(c){return}for(b=0;b<d.options.length;b++){for(a=0;a<e.length;a++){if(d.options[b].text==e[a]){d.options[b].selected=true}}}};dwr.util._selectListItem=function(c,d){var b=false;var a;for(a=0;a<c.options.length;a++){if(c.options[a].value==d){c.options[a].selected=true;b=true}else{c.options[a].selected=false}}if(b){return}for(a=0;a<c.options.length;a++){c.options[a].selected=(c.options[a].text==d)}};dwr.util.getValue=function(j,k){if(k==null){k={}}var g=j;if(typeof j=="string"){j=dwr.util.byId(j);if(j&&j.id!=g){j=null}}var a=null;if(j==null){a=document.getElementsByName(g);if(a.length>=1){j=a.item(0)}}if(j==null){dwr.util._debug("getValue() can't find an element with id/name: "+g+".");return""}if(dwr.util._isHTMLElement(j,"select")){if(j.type=="select-multiple"){var d=new Array();for(var f=0;f<j.options.length;f++){var h=j.options[f];if(h.selected){var e=h.getAttributeNode("value");if(e&&e.specified){d.push(h.value)}else{d.push(h.text)}}}return d}else{var b=j.selectedIndex;if(b!=-1){var h=j.options[b];var e=h.getAttributeNode("value");if(e&&e.specified){return h.value}return h.text}else{return""}}}if(dwr.util._isHTMLElement(j,"input")){if(j.type=="radio"){if(a&&a.length>=1){for(var f=0;f<a.length;f++){var c=a.item(f);if(c.type==j.type){if(c.checked){return c.value}}}}return j.checked}if(j.type=="checkbox"){if(a&&a.length>=1){var d=[];for(var f=0;f<a.length;f++){var c=a.item(f);if(c.type==j.type){if(c.checked){d.push(c.value)}}}return d}return j.checked}return j.value}if(dwr.util._isHTMLElement(j,"textarea")){return j.value}if(dwr.util._shouldEscapeHtml(k)){if(j.textContent){return j.textContent}else{if(j.innerText){return j.innerText}}}return j.innerHTML};dwr.util.getText=function(b){b=dwr.util._getElementById(b,"getText()");if(b==null){return null}if(!dwr.util._isHTMLElement(b,"select")){dwr.util._debug("getText() can only be used with select elements. Attempt to use: "+dwr.util._detailedTypeOf(b)+" from  id: "+orig+".");return""}var a=b.selectedIndex;if(a!=-1){return b.options[a].text}else{return""}};dwr.util.setValues=function(c,a){var b="";if(a&&a.prefix){b=a.prefix}if(a&&a.idPrefix){b=a.idPrefix}dwr.util._setValuesRecursive(c,b)};dwr.util._setValuesRecursive=function(c,e){if(dwr.util._isArray(c)&&c.length>0&&dwr.util._isObject(c[0])){for(var b=0;b<c.length;b++){dwr.util._setValuesRecursive(c[b],e+"["+b+"]")}}else{if(dwr.util._isObject(c)&&!dwr.util._isArray(c)){for(var d in c){var a=e?e+"."+d:d;if(dwr.util._isObject(c[d])&&!dwr.util._isArray(c[d])||dwr.util._isArray(c[d])&&c[d].length>0&&dwr.util._isObject(c[d][0])){dwr.util._setValuesRecursive(c[d],a)}else{if(typeof c[d]=="function"){}else{if(dwr.util.byId(a)!=null||document.getElementsByName(a).length>=1){dwr.util.setValue(a,c[d])}}}}}}};dwr.util.getValues=function(c,a){if(typeof c=="string"||dwr.util._isHTMLElement(c)){return dwr.util.getFormValues(c)}else{var b="";if(a!=null&&a.prefix){b=a.prefix}if(a!=null&&a.idPrefix){b=a.idPrefix}dwr.util._getValuesRecursive(c,b);return c}};dwr.util.getFormValues=function(a){var f=null;if(typeof a=="string"){f=document.forms[a];if(f==null){f=dwr.util.byId(a)}}else{if(dwr.util._isHTMLElement(a)){f=a}}if(f!=null){if(f.elements==null){alert("getFormValues() requires an object or reference to a form element.");return null}var d={};var b;var e;for(var c=0;c<f.elements.length;c++){if(f[c].type in {button:0,submit:0,reset:0,image:0,file:0}){continue}if(f[c].name){b=f[c].name;e=dwr.util.getValue(b)}else{if(f[c].id){b=f[c].id}else{b="element"+c}e=dwr.util.getValue(f[c])}d[b]=e}return d}};dwr.util._getValuesRecursive=function(c,e){if(dwr.util._isArray(c)&&c.length>0&&dwr.util._isObject(c[0])){for(var b=0;b<c.length;b++){dwr.util._getValuesRecursive(c[b],e+"["+b+"]")}}else{if(dwr.util._isObject(c)&&!dwr.util._isArray(c)){for(var d in c){var a=e?e+"."+d:d;if(dwr.util._isObject(c[d])&&!dwr.util._isArray(c[d])||dwr.util._isArray(c[d])&&c[d].length>0&&dwr.util._isObject(c[d][0])){dwr.util._getValuesRecursive(c[d],a)}else{if(typeof c[d]=="function"){}else{if(dwr.util.byId(a)!=null||document.getElementsByName(a).length>=1){c[d]=dwr.util.getValue(a)}}}}}}};dwr.util.addOptions=function(o,f){o=dwr.util._getElementById(o,"addOptions()");if(o==null){return}var c=dwr.util._isHTMLElement(o,"select");var j=dwr.util._isHTMLElement(o,["ul","ol"]);if(!c&&!j){dwr.util._debug("addOptions() can only be used with select/ul/ol elements. Attempt to use: "+dwr.util._detailedTypeOf(o));return}if(f==null){return}var h=arguments.length;var p={};var n=arguments[h-1];if(h>2&&dwr.util._isObject(n)){p=n;h--}var g=null;if(h>=3){g=arguments[2]}var d=null;if(h>=4){d=arguments[3]}if(!p.optionCreator&&c){p.optionCreator=dwr.util._defaultOptionCreator}if(!p.optionCreator&&j){p.optionCreator=dwr.util._defaultListItemCreator}var m,k,l;if(dwr.util._isArray(f)){for(var e=0;e<f.length;e++){p.data=f[e];p.text=null;p.value=null;if(c){if(g!=null){if(d!=null){p.text=dwr.util._getValueFrom(f[e],d);p.value=dwr.util._getValueFrom(f[e],g)}else{p.text=p.value=dwr.util._getValueFrom(f[e],g)}}else{p.text=p.value=dwr.util._getValueFrom(f[e])}if(p.text!=null||p.value){var b=p.optionCreator(p);b.text=p.text;b.value=p.value;o.options[o.options.length]=b}}else{p.value=dwr.util._getValueFrom(f[e],g);if(p.value!=null){l=p.optionCreator(p);if(dwr.util._shouldEscapeHtml(p)){p.value=dwr.util.escapeHtml(p.value)}l.innerHTML=p.value;o.appendChild(l)}}}}else{if(d!=null){if(!c){alert("dwr.util.addOptions can only create select lists from objects.");return}for(var a in f){p.data=f[a];p.value=dwr.util._getValueFrom(f[a],g);p.text=dwr.util._getValueFrom(f[a],d);if(p.text!=null||p.value){var b=p.optionCreator(p);b.text=p.text;b.value=p.value;o.options[o.options.length]=b}}}else{if(!c){dwr.util._debug("dwr.util.addOptions can only create select lists from objects.");return}for(var a in f){if(typeof f[a]=="function"){continue}p.data=f[a];if(!g){p.value=a;p.text=f[a]}else{p.value=f[a];p.text=a}if(p.text!=null||p.value){var b=p.optionCreator(p);b.text=p.text;b.value=p.value;o.options[o.options.length]=b}}}}dwr.util.highlight(o,p)};dwr.util._getValueFrom=function(a,b){if(b==null){return a}else{if(typeof b=="function"){return b(a)}else{return a[b]}}};dwr.util._defaultOptionCreator=function(a){return new Option()};dwr.util._defaultListItemCreator=function(a){return document.createElement("li")};dwr.util.removeAllOptions=function(b){b=dwr.util._getElementById(b,"removeAllOptions()");if(b==null){return}var a=dwr.util._isHTMLElement(b,"select");var c=dwr.util._isHTMLElement(b,["ul","ol"]);if(!a&&!c){dwr.util._debug("removeAllOptions() can only be used with select, ol and ul elements. Attempt to use: "+dwr.util._detailedTypeOf(b));return}if(a){b.options.length=0}else{while(b.childNodes.length>0){b.removeChild(b.firstChild)}}};dwr.util.addRows=function(e,d,a,b){e=dwr.util._getElementById(e,"addRows()");if(e==null){return}if(!dwr.util._isHTMLElement(e,["table","tbody","thead","tfoot"])){dwr.util._debug("addRows() can only be used with table, tbody, thead and tfoot elements. Attempt to use: "+dwr.util._detailedTypeOf(e));return}if(!b){b={}}if(!b.rowCreator){b.rowCreator=dwr.util._defaultRowCreator}if(!b.cellCreator){b.cellCreator=dwr.util._defaultCellCreator}var c,f;if(dwr.util._isArray(d)){for(f=0;f<d.length;f++){b.rowData=d[f];b.rowIndex=f;b.rowNum=f;b.data=null;b.cellNum=-1;c=dwr.util._addRowInner(a,b);if(c!=null){e.appendChild(c)}}}else{if(typeof d=="object"){f=0;for(var g in d){b.rowData=d[g];b.rowIndex=g;b.rowNum=f;b.data=null;b.cellNum=-1;c=dwr.util._addRowInner(a,b);if(c!=null){e.appendChild(c)}f++}}}dwr.util.highlight(e,b)};dwr.util._addRowInner=function(a,b){var d=b.rowCreator(b);if(d==null){return null}for(var e=0;e<a.length;e++){var c=a[e];if(typeof c=="function"){b.data=c(b.rowData,b)}else{b.data=c||""}b.cellNum=e;var f=b.cellCreator(b);if(f!=null){if(b.data!=null){if(dwr.util._isHTMLElement(b.data)){f.appendChild(b.data)}else{if(dwr.util._shouldEscapeHtml(b)&&typeof(b.data)=="string"){f.innerHTML=dwr.util.escapeHtml(b.data)}else{f.innerHTML=b.data}}}d.appendChild(f)}}return d};dwr.util._defaultRowCreator=function(a){return document.createElement("tr")};dwr.util._defaultCellCreator=function(a){return document.createElement("td")};dwr.util.removeAllRows=function(c,a){c=dwr.util._getElementById(c,"removeAllRows()");if(c==null){return}if(!a){a={}}if(!a.filter){a.filter=function(){return true}}if(!dwr.util._isHTMLElement(c,["table","tbody","thead","tfoot"])){dwr.util._debug("removeAllRows() can only be used with table, tbody, thead and tfoot elements. Attempt to use: "+dwr.util._detailedTypeOf(c));return}var d=c.firstChild;var b;while(d!=null){b=d.nextSibling;if(a.filter(d)){c.removeChild(d)}d=b}};dwr.util.setClassName=function(b,a){b=dwr.util._getElementById(b,"setClassName()");if(b==null){return}b.className=a};dwr.util.addClassName=function(b,a){b=dwr.util._getElementById(b,"addClassName()");if(b==null){return}b.className+=" "+a};dwr.util.removeClassName=function(c,a){c=dwr.util._getElementById(c,"removeClassName()");if(c==null){return}var b=new RegExp("(^|\\s)"+a+"(\\s|$)","g");c.className=c.className.replace(b,"")};dwr.util.toggleClassName=function(c,a){c=dwr.util._getElementById(c,"toggleClassName()");if(c==null){return}var b=new RegExp("(^|\\s)"+a+"(\\s|$)");if(b.test(c.className)){c.className=c.className.replace(b,"")}else{c.className+=" "+a}};dwr.util.cloneNode=function(b,a){b=dwr.util._getElementById(b,"cloneNode()");if(b==null){return null}if(a==null){a={}}var c=b.cloneNode(true);if(a.idPrefix||a.idSuffix){dwr.util._updateIds(c,a)}else{dwr.util._removeIds(c)}b.parentNode.insertBefore(c,b);return c};dwr.util._updateIds=function(d,a){if(a==null){a={}}if(d.id){d.setAttribute("id",(a.idPrefix||"")+d.id+(a.idSuffix||""))}var c=d.childNodes;for(var b=0;b<c.length;b++){var e=c.item(b);if(e.nodeType==1){dwr.util._updateIds(e,a)}}};dwr.util._removeIds=function(c){if(c.id){c.removeAttribute("id")}var b=c.childNodes;for(var a=0;a<b.length;a++){var d=b.item(a);if(d.nodeType==1){dwr.util._removeIds(d)}}};dwr.util.cloneNodeForValues=function(a,c,b){a=dwr.util._getElementById(a,"cloneNodeForValues()");if(a==null){return null}if(b==null){b={}}var d;if(b.idPrefix!=null){d=b.idPrefix}else{d=a.id||""}return dwr.util._cloneNodeForValuesRecursive(a,c,d,b)};dwr.util._cloneNodeForValuesRecursive=function(a,c,e,j){if(dwr.util._isArray(c)){var g=[];for(var d=0;d<c.length;d++){var h=c[d];var f=dwr.util._cloneNodeForValuesRecursive(a,h,e+"["+d+"]",j);g.push(f)}return g}else{if(dwr.util._isObject(c)&&!dwr.util._isArray(c)){var f=a.cloneNode(true);if(j.updateCloneStyle&&f.style){for(var b in j.updateCloneStyle){f.style[b]=j.updateCloneStyle[b]}}dwr.util._replaceIds(f,a.id,e);a.parentNode.insertBefore(f,a);dwr.util._cloneSubArrays(c,e,j);return f}}return null};dwr.util._replaceIds=function(f,h,c){if(f.id){var b=null;if(f.id==h){b=c}else{if(f.id.length>h.length){if(f.id.substr(0,h.length)==h){var a=f.id.charAt(h.length);if(a=="."||a=="["){b=c+f.id.substr(h.length)}}}}if(b){f.setAttribute("id",b)}else{f.removeAttribute("id")}}var e=f.childNodes;for(var d=0;d<e.length;d++){var g=e.item(d);if(g.nodeType==1){dwr.util._replaceIds(g,h,c)}}};dwr.util._cloneSubArrays=function(c,f,a){for(prop in c){var b=c[prop];if(dwr.util._isArray(b)){if(b.length>0&&dwr.util._isObject(b[0])){var e=f+"."+prop;var d=dwr.util.byId(e);if(d!=null){dwr.util._cloneNodeForValuesRecursive(d,b,e,a)}}}else{if(dwr.util._isObject(b)){dwr.util._cloneSubArrays(b,f+"."+prop,a)}}}};dwr.util._getElementById=function(b,a){var c=b;b=dwr.util.byId(b);if(b==null){dwr.util._debug(a+" can't find an element with id: "+c+".")}return b};dwr.util._isHTMLElement=function(c,e){if(c==null||typeof c!="object"||c.nodeName==null){return false}if(e!=null){var d=c.nodeName.toLowerCase();if(typeof e=="string"){return d==e.toLowerCase()}if(dwr.util._isArray(e)){var a=false;for(var b=0;b<e.length&&!a;b++){if(d==e[b].toLowerCase()){a=true}}return a}dwr.util._debug("dwr.util._isHTMLElement was passed test node name that is neither a string or array of strings");return false}return true};dwr.util._detailedTypeOf=function(a){var b=typeof a;if(b=="object"){b=Object.prototype.toString.apply(a);b=b.substring(8,b.length-1)}return b};dwr.util._isObject=function(a){return(a&&typeof a=="object")};dwr.util._isArray=function(a){return(a&&a.join)};dwr.util._isDate=function(a){return(a&&a.toUTCString)?true:false};dwr.util._importNode=function(f,e,b){var d;if(e.nodeType==1){d=f.createElement(e.nodeName);for(var c=0;c<e.attributes.length;c++){var a=e.attributes[c];if(a.nodeValue!=null&&a.nodeValue!=""){d.setAttribute(a.name,a.nodeValue)}}if(typeof e.style!="undefined"){d.style.cssText=e.style.cssText}}else{if(e.nodeType==3){d=f.createTextNode(e.nodeValue)}}if(b&&e.hasChildNodes()){for(c=0;c<e.childNodes.length;c++){d.appendChild(dwr.util._importNode(f,e.childNodes[c],true))}}return d};dwr.util._debug=function(f,d){var a=false;try{if(window.console){if(d&&window.console.trace){window.console.trace()}window.console.log(f);a=true}else{if(window.opera&&window.opera.postError){window.opera.postError(f);a=true}}}catch(c){}if(!a){var b=document.getElementById("dwr-debug");if(b){var e=f+"<br/>"+b.innerHTML;if(e.length>2048){e=e.substring(0,2048)}b.innerHTML=e}}};
;
jive.Follow=function(b){var a=this;var b=b;this.startFollowingContainer=function(c,f,e,d){FollowingActionBean.followContainer(f,c,true,{callback:function(){$j("#jive-link-"+e+"-startFollowing").hide();$j("#jive-link-"+e+"-stopFollowing").show();$j("#jive-follow-error").hide();var g=jiveControl.getPlacesCache();g.reloadPlaces({name:"FOLLOWED_ALL"})},errorHandler:function(h,g){if(d){$j("#jive-follow-error").text(d)}else{$j("#jive-follow-error").text(b)}$j("#jive-follow-error").show()}})};this.stopFollowingContainer=function(c,f,e,d){FollowingActionBean.followContainer(f,c,false,{callback:function(){$j("#jive-link-"+e+"-startFollowing").show();$j("#jive-link-"+e+"-stopFollowing").hide();$j("#jive-follow-error").hide();var g=jiveControl.getPlacesCache();g.reloadPlaces({name:"FOLLOWED_ALL"})},errorHandler:function(h,g){if(d){$j("#jive-follow-error").text(d)}else{$j("#jive-follow-error").text(b)}$j("#jive-follow-error").show()}})};this.enableFollowedPlaces=function(){$j("#choose-community-radio").attr("disabled",true);$j("#widget-edit-choose-group").attr("disabled",true);$j("#choose-project-radio").attr("disabled",true);$j("#widget-edit-choose-comm").attr("disabled",true);$j("#choose-group-radio").attr("disabled",true);$j("#widget-edit-choose-proj").attr("disabled",true);$j("#rb-recursive-1").attr("disabled",true);$j("#rb-recursive-2").attr("disabled",true)};this.disableFollowedPlaces=function(){$j("#choose-community-radio").removeAttr("disabled");$j("#choose-project-radio").removeAttr("disabled");$j("#choose-group-radio").removeAttr("disabled");if($j("#choose-community-radio").is(":checked")){$j("#widget-edit-choose-comm").removeAttr("disabled")}else{if($j("#choose-project-radio").is(":checked")){$j("#widget-edit-choose-proj").removeAttr("disabled")}else{if($j("#choose-group-radio").is(":checked")){$j("#widget-edit-choose-group").removeAttr("disabled")}}}$j("#rb-recursive-1").removeAttr("disabled");$j("#rb-recursive-2").removeAttr("disabled")}};
;
function addAsFriendTT(a,d,c,b){if(c||b){$j("#jive-add-friend-hover").toggle("normal");if(c){$j("#friendReqMsgDiv").show()}$j("#jive-adding-friend-link-hover").toggle();$j("#jive-add-friend-link-hover").toggle()}else{submitFriendRequestTT(a,"")}}function submitFriendRequestTT(b,c,d){var a=$j("input.relListCB:checked").map(function(){return this.value}).toArray();FriendListAction.addFriend(b,c,a,{callback:function(e){$j("#friend-add-form-hover").hide();if(!e){$j("#friend-pending-hover").fadeIn()}else{$j("#friend-approved-hover").fadeIn();d+=1;$j("friend-count").text(d);$j("#jive-remove-rel-hover").show()}},errorHandler:function(f){var e='<span class="jive-icon-med jive-icon-redalert"></span>';$j("#jive-error-box").show();$j("#jive-error-box").text(e).append(document.createTextNode(f));setTimeout(function(){$j("#jive-error-box").fadeOut()},5000)}})}function removeAsFriendTT(a,b){FriendListAction.removeFriend(a,{callback:function(){$j("#friend-pending-hover").hide();$j("#friend-approved-hover").hide();$j("#friend-add-form-hover").show();$j("#jive-add-friend-link-hover").show();$j("#jive-adding-friend-link-hover").hide();$j("#jive-add-friend-hover").hide();$j("#jive-confirm-relationship-removal-hover").hide();b-=1;$j("#friend-count").text(b)}})};
;
jive.namespace("widgets");jive.widgets.Container=function(b){var c="#jive-widgetframe";var f=$j.extend({},b);var e=this;var a=new Array();this.addWidget=function(h){$j("#jive-widgetframe-loading_"+h).show();a.push(h)};var g=function(i,h){$j(c+"-loading_"+h).hide();$j(c+"-body_"+h).show();$j(c+"_"+f.id).trigger("frameLoaded")};var d=function(k,j){var i=$j(c+"-body_"+k).parent().hasClass("jive-widgetsize-large")?2:1;var h=$j.extend({size:i,frameID:k},f);h=$j.extend(j,h);$j(c+"-body_"+k).load(f.renderWidgetAction,h,$j.bind(null,g,k))};this.renderAll=function(){a.forEach(d)};this.refreshLink=function(j,i){var h=this;$j(c+"-refresh-link_"+j).click(function(){h.refresh(j,i)})};this.refresh=function(i,h){$j(c+"-loading_"+i).show();$j(c+"-body_"+i).hide();d(i,h);return false};this.editMode=function(j,i){var h=$j(c+"-options_"+j);if(i=="com.jivesoftware.community.widget.Widget"){h.find("li.jive-widget-edit a").click(function(){widgets.editWidgetFrame(j);return false})}h.find("li.jive-widget-minimize a").click(function(){widgets.minimizeWidgetFrame(j);return false});h.find("li.jive-widget-maximize a").click(function(){widgets.maximizeWidgetFrame(j);return false});h.find("li.jive-widget-remove a").click(function(){widgets.removeWidgetFrame(j);return false})}};
;
$j(function(){var jiveMenuTimeout;$j(document).keydown(function(evt){var keyCode=evt.keyCode;if(keyCode==27){jiveCloseAllMenus()}});$j(document.body).click(function(evt){if($j(evt.target).hasClass("jive-userbar-droplink")||$j(evt.target).parent().hasClass("jive-userbar-droplink")){if($j(evt.target).hasClass("jive-userbar-droplink")){$j(evt.target).mousedown();
/*@cc_on
                          @if (@_jscript_version < 5.8)
                            return;
                          @end
                        @*/
$j(evt.target).blur()}else{if($j(evt.target).parent().hasClass("jive-userbar-droplink")){$j(evt.target).parent().mousedown();
/*@cc_on
                         @if (@_jscript_version < 5.8)
                         return;
                         @end
                         @*/
$j(evt.target).parent().blur()}}return}else{if($j(evt.target).parents(".jive-userbar-menu").length>0){return}}jiveCloseAllMenus()});$j("div.jive-userbar-menu").each(function(){var tabId=$j(this).attr("id");$j("#"+tabId+"Link").mousedown($j.bind(null,jivetoggleMenu,tabId)).focus($j.bind(null,jivetoggleMenu,tabId)).mouseover($j.bind(null,jiveSwapMenu,tabId)).mouseout(jiveOutsideMenu).blur(jiveOutsideMenu);$j(this).mouseover(jiveInsideMenu).mouseout(jiveOutsideMenu).find("*").focus(jiveInsideMenu).blur(jiveOutsideMenu).end()});function jiveInsideMenu(){clearTimeout(jiveMenuTimeout)}function jiveOutsideMenu(evt){if($j(evt.target).is(".jive-userbar-menu *")||$j(evt.target).length<1){jiveMenuTimeout=setTimeout(jiveCloseAllMenus,1500)}}function jivetoggleMenu(evt,jiveMenu){clearTimeout(jiveMenuTimeout);$j(".jive-userbar-slidedown:visible").hide().children(".jive-userber-slidedown-container").contents().remove();$j("#jiveBookmarkCreatePanel").remove();var $jiveMenu=$j("#"+jiveMenu);if(!$jiveMenu.hasClass("jive-userbar-menu-hidden")){return}jiveCloseAllMenus();$jiveMenu.removeClass("jive-userbar-menu-hidden");$j("#"+jiveMenu+"Link").addClass("jive-userbar-droplink-on")}function jiveSwapMenu(evt,jiveMenu){clearTimeout(jiveMenuTimeout);var openMenu=$j(".jive-userbar-menu:not(.jive-userbar-menu-hidden)");if(openMenu.length<=0){return}else{if(openMenu.filter("#"+jiveMenu).length>0){return}}jiveCloseAllMenus();$j("#"+jiveMenu).removeClass("jive-userbar-menu-hidden");$j("#"+jiveMenu+"Link").addClass("jive-userbar-droplink-on").focus()}$j("#jive-userbar a.quick").click(function(){jiveChooseContainerForm($j(this).attr("href"));return false});$j("#jive-userbar a.quick-status").click(function(){jiveShowQuickWallEntryForm($j(this).attr("href"));return false});$j("#jive-userbar a.quick-task").click(function(){jiveShowQuickTaskForm($j(this).attr("href"));return false});function jiveChooseContainerForm(url){jiveCloseAllMenus();$j(document.body).addClass("jive-progresscursor");$j.ajax({url:url,success:function(html){$j("#jiveContentCreateContainer").append(html);slideDownPanel($j("#jiveContentCreatePanel"),"content");$j(document.body).removeClass("jive-progresscursor")}})}$j("#jive-userbar a.quick-bookmark").click(function(){jiveShowQuickBookmarkForm($j(this).attr("href"));return false});window.jiveShowQuickBookmarkForm=function(url){jiveCloseAllMenus();$j("#jiveBookmarkCreatePanel").remove();$j.get(url,null,function(data){$j("#jive-userbar").append(data);jiveBookmarkFormRegisterEvents()})};function jiveBookmarkFormRegisterEvents(){$j("#jiveBookmarkGetURL-cancel").click(function(){slideUpPanel($j("#jiveBookmarkCreatePanel"),"bookmark",function(){$j("#jiveBookmarkCreatePanel").remove()});return false});$j("#jive-bookmark-get-url-form").ajaxForm({beforeSubmit:function(){$j(".jive-form-buttons").find("span").show()},target:$j("#jive-quickbookmarkcreate-form .jive-bookmark-form"),success:jiveBookmarkFormRegisterEvents});if($j("#jiveBookmarkCreatePanel:visible").length<=0){slideDownPanel($j("#jiveBookmarkCreatePanel"),"bookmark",function(){$j("#url-input-field").focus()})}$j("#jive-bookmark-slidedown-form").ajaxForm({beforeSubmit:function(data){var cancel=false;for(var i=0;i<data.length;i++){if(data[i].name=="method:cancel"){cancel=true}}if(cancel){jiveRemoveQuickBookmarkForm2()}else{$j(".jive-form-buttons").find("span").show()}return !cancel},target:$j("#jive-quickbookmarkcreate-form .jive-bookmark-form"),success:jiveBookmarkFormRegisterEvents})}});function jiveRemoveQuickBookmarkForm2(){slideUpPanel($j("#jiveBookmarkCreatePanel"),"bookmark",function(){$j("#jiveBookmarkCreatePanel").remove()})}function jiveCloseAllMenus(){$j(".jive-userbar-menu:not(.jive-userbar-menu-hidden)").addClass("jive-userbar-menu-hidden").blur();$j(".jive-userbar-droplink").removeClass("jive-userbar-droplink-on")}function jiveSubmitChooseContainerForm(b,a){$j("#jive-choose-container-type").val(b);$j("#jive-choose-container-id").val(a);$j("#jiveChooseContainerForm").submit()}function jiveRemoveChooseContainerForm(){slideUpPanel($j("#jiveContentCreatePanel"),"content",function(){$j("#jiveContentCreateContainer").children().remove()})}function jiveRemoveStatusForm(){slideUpPanel($j("#jiveContentCreatePanel"),"status",function(){$j("#jiveContentCreateContainer").children().remove()})}function jiveAdvancedChooseContainerForm(b){var c=$j("#jiveChooseContainerForm"),d=$j.param({contentType:c.find("[name=contentType]").val(),upload:c.find("[name=upload]").val()}),a=b+(b.match(/\?/)?"&":"?")+d;parent.location.href=a}function jiveShowQuickTaskForm(a){jiveCloseAllMenus();$j(document.body).addClass("jive-progresscursor");var b=jiveGetSelectedText(),c=$j.param({subject:b});$j("#jiveTaskCreateContainer").load(a,c,function(){slideDownPanel($j("#jiveTaskCreatePanel"),"task",function(){$j("#jivequicktaskform [name=subject]").focus()});$j(document.body).removeClass("jive-progresscursor")})}function jiveShowQuickWallEntryForm(a){jiveCloseAllMenus();$j(document.body).addClass("jive-progresscursor");$j("#jiveContentCreateContainer").hide();$j("#jiveContentCreateContainer").safelyLoad(a,function(){$j("#jiveContentCreateContainer").show();slideDownPanel($j("#jiveContentCreatePanel"),"status");$j(document.body).removeClass("jive-progresscursor")})}function jiveSubmitQuickTaskForm(a){$j.post(a,$j("#jivequicktaskform").serialize(),function(b){$j("#jiveTaskCreateContainer").html(b)})}function jiveRemoveQuickTaskForm(){slideUpPanel($j("#jiveTaskCreateContainer"),"task",function(){$j("#jiveTaskCreateContainer").children().remove()})}function jiveSendToAdvancedTaskForm(a){var b=$j("#jivequicktaskform");var c=$j.param({subject:b.find("[name=subject]").val(),project:b.find("[name=project]").val(),owner:b.find("[name=owner]").val(),dueDate:b.find("[name=dueDate]").val()});parent.location.href=a+(a.match(/\?/)?"&":"?")+c}function jiveGetSelectedText(){var a="";if(window.getSelection){a=window.getSelection().toString()}else{if(document.all){a=document.selection.createRange().text}else{if(document.getSelection){a=document.getSelection().toString()}}}return a}function jivetoggleLogin(){$j("#jiveLoginWelcome").toggle();$j("#jiveLoginForm").toggle();if($j("#jiveLoginForm").is(":visible")){$j("#login-username").focus()}else{$j("#login-username").blur()}}function selectWriteContent(){$j("#jive-content-collab").attr("checked","checked");$j("#jive-content-type-write").addClass("jive-choose-content-type-selected");$j("#jive-content-type-upload").removeClass("jive-choose-content-type-selected")}function selectUpload(){$j("#jive-content-upload").attr("checked","checked");$j("#jive-content-type-upload").addClass("jive-choose-content-type-selected");$j("#jive-content-type-write").removeClass("jive-choose-content-type-selected")}function slideDownPanel(c,a,d){var b=c.find(".jive-userbar-slidedown-"+a);c.show();b.css("bottom",b.height()+"px").animate({bottom:"0"},500,d)}function slideUpPanel(c,a,d){var b=c.find(".jive-userbar-slidedown-"+a);c.show();b.animate({bottom:b.height()+"px"},500,d)};
;
var JiveSpotlightSearch=$Class.extend({init:function(c,b,d,e,a){this.spotlightSearchInput=c;this.spotlightSearchContainer=b;this.spotlightSearchURL=d;this.containerType=e;this.containerID=a;this.containerSearch=false;this.spotlightSearchInputHasFocus=false;this.spotlightSearchIndex=0;$j(this.spotlightSearchInput).bind("keyup",$j.bind(this,this.observeSpotlightSearchQuery));$j(this.spotlightSearchInput).bind("blur",$j.bind(this,this.onBlur));$j("#jive-spotlight-global-search").live("click",$j.bind(this,this.executeGlobalSpotlightSearch));$j("#jive-spotlight-container-search").live("click",$j.bind(this,this.executeContainerSpotlightSearch));$j(".jive-userbar-search-button").live("click",$j.bind(this,this.submitQuery))},observeSpotlightSearchQuery:function(a){switch(a.keyCode){case $j.keyCode.UP:this.selectIndex(this.spotlightSearchIndex-1);return false;case $j.keyCode.DOWN:this.selectIndex(this.spotlightSearchIndex+1);return false;case $j.keyCode.ENTER:this.clearSpotlightSearchEvent();$j.stop(a,true,true);if(this.spotlightSearchIndex>0){this.loadSelectedIndex()}return false;case $j.keyCode.ESCAPE:this.clearSpotlightSearch();return false;case $j.keyCode.LEFT:case $j.keyCode.RIGHT:case $j.keyCode.TAB:case $j.keyCode.HOME:case $j.keyCode.END:case $j.keyCode.PAGE_UP:case $j.keyCode.PAGE_DOWN:return false}this.clearSpotlightSearchEvent();this.spotlightSearchEvent=setTimeout($j.bind(this,this.executeSpotlightSearch),400)},onBlur:function(){this.spotlightSearchInputHasFocus=false;setTimeout(this.clearSpotlightSearch.bind(this),250)},clearSpotlightSearch:function(){if(!this.spotlightSearchInputHasFocus){$j(this.spotlightSearchContainer).html("")}},executeSpotlightSearch:function(){var a=$j(this.spotlightSearchInput).val();if(a.length>=3){a=a+"*";$j(this.spotlightSearchContainer).load(this.spotlightSearchURL,{query:a,containerType:this.containerType,containerID:this.containerID,filterContainer:this.containerSearch})}else{this.clearSpotlightSearch()}this.spotlightSearchIndex=0},executeContainerSpotlightSearch:function(){this.containerSearch=true;this.spotlightSearchInputHasFocus=true;setTimeout(this.executeSpotlightSearch.bind(this),50);$j(this.spotlightSearchInput).focus()},executeGlobalSpotlightSearch:function(){this.containerSearch=false;this.spotlightSearchInputHasFocus=true;setTimeout(this.executeSpotlightSearch.bind(this),50);$j(this.spotlightSearchInput).focus()},viewAllResults:function(a,c){var b=$j(this.spotlightSearchInput).val();if(b.length<=0){return}b=b+"*";$j(this.spotlightSearchInput).val(b);this.submitQuery()},selectIndex:function(b){if(b>0){var c=$j("#spotlight-index-"+b).addClass("hover").get(0);if(c){$j("#jive-spotlight-search li.hover:not(#spotlight-index-"+b+")").removeClass("hover");var a=$j(c);var d=$j(window).scrollTop();if(!((a.offset().top+a.height()>=d)&&(a.offset().top<=d+$j(window).height()))){c.scrollIntoView(false)}this.spotlightSearchIndex=b}}else{$j("#jive-spotlight-search li.hover").removeClass("hover");$j(this.spotlightSearchInput)[0].scrollIntoView(false);this.spotlightSearchIndex=0}},loadSelectedIndex:function(){var a=$j("#spotlight-index-"+this.spotlightSearchIndex)[0];if(a&&$j(a).children("a")[0]){location.href=$j(a).children("a")[0].href}},submitQuery:function(){if(this.containerSearch){if(this.containerType==3||this.containerType==2020){$j(this.spotlightSearchInput)[0].form.elements.userID.value=this.containerID}else{$j(this.spotlightSearchInput)[0].form.elements.containerType.value=this.containerType;$j(this.spotlightSearchInput)[0].form.elements.container.value=this.containerID}}$j("#jive-userbar-search-form").submit()},clearSpotlightSearchEvent:function(){if(this.spotlightSearchEvent){clearTimeout(this.spotlightSearchEvent)}}});
;
var PF = PF || {};
PF.createAccount = PF.createAccount || {};

$j.extend(PF.createAccount, {
    
    addWarningIfNecessary: function() {
        if (window.location.href.indexOf('create-account.jspa?') !== -1) {
            if (window.location.href.indexOf('expired=true') !== -1) {
                $j("#pre-registration-expired").show();
                $j("#val02").height($j("#val02").height() - 1);
            }
        }
    }
    
});

$j(PF.createAccount.addWarningIfNecessary);
;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
var path = "li[id*='anonymous'] a , li.anonymous a , div[id*='anonymous'] a, .thread-anonymous , .comment-anonymous, a.anonymous";

function set_cookie_for_register(url){
	var post_reg_url;
	
	if(typeof url !=='object' && url!==null && url!==undefined && url.indexOf('javascript:')!==0 && url.indexOf('#')!==0){
		post_reg_url= url;
			
	}else{
		post_reg_url=document.location.href;
				
	}
	if(post_reg_url.toString().indexOf("http:")==-1){
		post_login_url = useability_login_url(post_reg_url);
	}else{
		post_login_url = useability_login_url(document.location.href);
		
	}
	
	$j.cookie("post_login_url", post_login_url, { path:"/", expires:0.01 });
	$j.cookie("post_reg_url", post_reg_url, { path:"/", expires: 0.01  });
	
	
}


function useability_login_url(url){
    if(url.indexOf('://')!==-1){
       //found http, get rid of the first community
        url =url.substring(url.indexOf("://")+3);
        
    }
    url =url.substring(url.indexOf("/community")+10);
    if(url.indexOf("#")!==-1){
        url =url.substring(0,url.indexOf("#")); 
    }
   return url;
    
}


$j(document).ready(function(){
	 if(_jive_effective_user_id==-1){
		 $j(path).live('click', function(){
			 set_cookie_for_register($j(this).attr("href"));
			 document.location = "/community/login.jspa";
			 return false;
		 });
  
		 var sidebar_links = $j('div.jive-sidebar-actions ul.jive-icon-list li a[href*="choose-container"]');
		 $j(sidebar_links).parent().addClass('jive-anonymous');
		 $j(sidebar_links).live('click',function(){
			 set_cookie_for_register($j(this).attr("href"));
			 document.location = "/community/login.jspa";
			 return false;
		 });
		
 }
   
});


;
var loginLightBox=function(){var C=false;var K=null;var A=null;var L="";var B="#jive-error-box";var H="#error-container";var J=function(M,N){this.next_url=M;$j("#login_light_box_container").lightbox_me({centered:true,closeSelector:".cancel-login",disableClose:N,overlayCSS:{background:"black",opacity:0.93},onLoad:function(){$j('input[name|="username"]').focus()},onClose:function(){$j("#jive-login-formblock form").appendTo($j("#jiveLoginForm"));$j("#jive-login-rememberme").remove();$j("#jive-login-captcha").remove()}})};var E=function(M){for(i=0;i<M.errorMessages.length;i++){$j(H).append("<li>"+M.errorMessages[i]+"</li>")}D("show")};var D=function(M){if(M=="show"){$j(B).show();return }if(M=="hide"){$j(B).hide();$j(H+"> li").remove()}};var G=function(){if(typeof this.next_url!=="object"&&this.next_url!==null&&this.next_url!==undefined&&this.next_url.indexOf("javascript:")!==0&&this.next_url.indexOf("#")!==0){document.location.href=this.next_url}else{location.reload()}};var I=function(M){if(typeof this.next_url!=="object"&&this.next_url!==null&&this.next_url!==undefined&&this.next_url.indexOf("javascript:")!==0&&this.next_url.indexOf("#")!==0){post_reg_url=this.next_url}else{post_reg_url=document.location}document.referer=post_reg_url;$j.cookie("post_reg_url",post_reg_url,{path:"/"})};var F=function(){D("hide");$j(L.submit());return false};return{init:function(N,S,O,P,R,U){if(typeof (S)=="undefined"){S="Login"}var T="";var M="";var V="";var Q="";if(typeof (O)!="undefined"){T="&lgtObjectType="+O}if(typeof (P)!="undefined"){M="&lgtObjectID="+P}if(typeof (R)!="undefined"){V="&lgtContainerType="+R}if(typeof (U)!="undefined"){Q="&lgtContainerID="+U}switch(S){case"":case"Login":disableClose=false;break;default:disableClose=true;break}K=$j("#login_light_box_container");$j("#login_light_box_container").load("login-lightbox.jspa?dialogType="+S+T+M+V+Q,function(W,Y,X){if(W.indexOf("jive-login-formblock")==-1){location.reload()}if(Y=="success"){C=true;$j("#join-now").live("click",function(){I(N);$j("form#join-submitter").submit()});J(N,disableClose)}})},onLogin:function(M){J(M)}}}();$j(document).ready(function(){$j(".jive-userbar-login-loginlink > a").replaceWith('<a accesskey="L" href="#">Login</a>');$j(".jive-userbar-login-loginlink > a").click(function(){loginLightBox.init(document.location.href)});$j(".not-logged-in > a:first").attr("href","#");$j(".not-logged-in > a:first").click(function(){loginLightBox.init(document.location.href)});$j(".jive-userbar-login-new > a").click(function(){document.referer=document.location;$j.cookie("post_reg_url",document.location,{path:"/"});return true})})
;
/* 
 * $Id: calendar-setup.js 6813 2007-03-30 16:26:46Z slip $
 * The Zapatec DHTML Calendar
 *
 * Copyright (c) 2004-2006 by Zapatec, Inc.
 * http://www.zapatec.com
 * 1700 MLK Way, Berkeley, California,
 * 94709, U.S.A. 
 * All rights reserved.
 *
 * Original version written by Mihai Bazon,
 * http://www.bazon.net/mishoo/calendar.epl
 *
 * This file defines helper functions for setting up the calendar.  They are
 * intended to help non-programmers get a working calendar on their site
 * quickly.  This script should not be seen as part of the calendar.  It just
 * shows you what one can do with the calendar, while in the same time
 * providing a quick and simple method for setting it up.  If you need
 * exhaustive customization of the calendar creation process feel free to
 * modify this code to suit your needs (this is recommended and much better
 * than modifying calendar.js itself).
 */

// $Id: calendar-setup.js 6813 2007-03-30 16:26:46Z slip $

//test for the right path
Zapatec.Setup = function () {};
Zapatec.Setup.test = true;

/**
 *  This function "patches" an input field (or other element) to use a calendar
 *  widget for date selection.
 *
 *  Note that you can use the Zapatec DHTML Calendar Wizard and generate the code
 *  and modify the results.
 *  The "params" is a single object that can have the following properties:
 *
 * \code
 *    prop. name   | description
 *  -------------------------------------------------------------------------------------------------
 *   inputField    | the ID of an input field to store the date
 *   displayArea   | the ID of a DIV or other element to show the date
 *   button        | ID of a button or other element that will trigger the calendar
 *   eventName     | event that will trigger the calendar, without the "on" prefix (default: "click")
 *   closeEventName| event that will close the calendar (i.e. one can use "focus" for eventName and "blur" for closeEventName)
 *   ifFormat      | date format that will be stored in the input field
 *   daFormat      | the date format that will be used to display the date in displayArea
 *   singleClick   | (true/false) wether the calendar is in single click mode or not (default: true)
 *   firstDay      | numeric: 0 to 6.  "0" means display Sunday first, "1" means display Monday first, etc.
 *   align         | alignment (default: "Br"); if you don't know what's this see the calendar documentation
 *   range         | array with 2 elements.  Default: [1900.0, 2999.12] -- the range of years available
 *   weekNumbers   | (true/false) if it's true (default) the calendar will display week numbers
 *   flat          | null or element ID; if not null the calendar will be a flat calendar having the parent with the given ID
 *   flatCallback  | function that receives a JS Date object and returns an URL to point the browser to (for flat calendar)
 *   disableFunc   | function that receives a JS Date object and should return true if that date has to be disabled in the calendar
 *   onSelect      | function that gets called when a date is selected.  You don't _have_ to supply this (the default is generally okay)
 *   onClose       | function that gets called when the calendar is closed.  [default]
 *   onUpdate      | function that gets called after the date is updated in the input field.  Receives a reference to the calendar.
 *   date          | the date that the calendar will be initially displayed to
 *   showsTime     | default: false; if true the calendar will include a time selector
 *   timeFormat    | the time format; can be "12" or "24", default is "12"
 *   electric      | if true (default) then given fields/date areas are updated for each move; otherwise they're updated only on close
 *   sortOrder	   | ("asc"(ending)/"desc"(ending)/"none"). If "asc" (default), order of the multiple dates (when multiple dates is on) will be sorted in ascending order. Otherwise, it will be sorted in descending order. "none" means no sorting is needed.
 *   step          | configures the step of the years in drop-down boxes; default: 2
 *   position      | configures the calendar absolute position; default: null
 *   cache         | if "true" (but default: "false") it will reuse the same calendar object, where possible
 *   showOthers    | if "true" (but default: "false") it will show days from other months too
 *   saveDate      | if set (default unset) will save a cookie for this duration.
 *   numberMonths  | Have the calendar display multiple months
 *   controlMonth  | When displaying multiple months, this will be the control month. Default 1.
 *   vertical      | When displaying multiple months, months can progress in a vertical or horizontal way. Horizontal is the default.
 *   monthsInRow   | When displaying multiple months how many months in a horizontal row. Works both in vertical and horizontal mode. Default numberMonths
 *   fdowClick     | Allow click on Days of Week 1st day
 *   titleHtml     | Html you can put in title of calendar
 *   noHelp        | Disables "?" button in your calendar
 *   noCloseButton | Disables "X" button in your calendar
 *   disableYearNav| Disables year navigation buttons
 *   
 * \endcode
 *
 *  None of them is required, they all have default values.  However, if you
 *  pass none of "inputField", "displayArea" or "button" you'll get a warning
 *  saying "nothing to setup".
 */
Zapatec.Calendar.setup = function (params) {
	paramsList = ["id"];
	function param_default(pname, def) { 
		if (typeof params[pname] == "undefined") { 
			params[pname] = def; 
		} 
		paramsList.push(pname);
	};
	params.id = Zapatec.Utils.generateID("calendar");
	param_default("inputField",     null);
	param_default("displayArea",    null);
	param_default("button",         null);
	param_default("eventName",      "click");
	param_default("closeEventName", null);
	param_default("ifFormat",       "%Y/%m/%d");
	param_default("daFormat",       "%Y/%m/%d");
	param_default("singleClick",    true);
	param_default("disableFunc",    null);
	param_default("dateStatusFunc", params["disableFunc"]);	// takes precedence if both are defined
	param_default("dateText",       null);
	param_default("firstDay",       null);
	param_default("align",          "Br");
	param_default("range",          [1900, 2999]);
	param_default("weekNumbers",    true);
	param_default("flat",           null);
	param_default("flatCallback",   null);
	param_default("onSelect",       null);
	param_default("onClose",        null);
	param_default("onUpdate",       null);
	param_default("date",           null);
	param_default("showsTime",      false);
	param_default("sortOrder",      "asc");
	param_default("timeFormat",     "24");
	param_default("timeInterval",   null);
	param_default("electric",       true);
	param_default("step",           2);
	param_default("position",       null);
	param_default("cache",          false);
	param_default("showOthers",     false);
	param_default("multiple",       null);
	param_default("saveDate",       null);
	param_default("fdowClick",      false);
	param_default("titleHtml",      null);
	param_default("noHelp",         false);
	param_default("noCloseButton",  false);
	param_default("disableYearNav", false);
	param_default("disableFdowChange", false);
	if (params.weekNumbers) {
		params.disableFdowChange = true;
		params.firstDay = 1;
	}
	param_default("disableDrag", false);
	param_default("numberMonths",   1);
	if ((params.numberMonths > 12) || (params.numberMonths < 1)) {
		params.numberMonths = 1;
	}
	if (params.numberMonths > 1) {
		params.showOthers = false;
	}
	params.numberMonths = parseInt(params.numberMonths, 10);
	param_default("controlMonth",   1);
	if ((params.controlMonth > params.numberMonths) || (params.controlMonth < 1)) {
		params.controlMonth = 1;
	}
	params.controlMonth = parseInt(params.controlMonth, 10);
	param_default("vertical",       false);
	if (params.monthsInRow > params.numberMonths) {
		params.monthsInRow = params.numberMonths;
	}
	param_default("monthsInRow",    params.numberMonths);
	params.monthsInRow = parseInt(params.monthsInRow, 10);
	param_default("multiple",       false);
	if (params.multiple) {
		params.singleClick = false;
	}
	param_default("canType",   false);
	
	var tmp = ["inputField", "displayArea", "button"];
	for (var i in tmp) {
		if (typeof params[tmp[i]] == "string") {
			params[tmp[i]] = document.getElementById(params[tmp[i]]);
		}
	}
	if (!params.inputField) {
		params.canType = false;
	} else {
		params.inputField.setAttribute("autocomplete", "off");
	}
	if (!(params.flat || params.multiple || params.inputField || params.displayArea || params.button)) {
		alert("Calendar.setup '" + params.id + "':\n  Nothing to setup (no fields found).  Please check your code");
		return false;
	}
	if (((params.timeInterval) && ((params.timeInterval !== Math.floor(params.timeInterval)) || ((60 % params.timeInterval !== 0) && (params.timeInterval % 60 !== 0)))) || (params.timeInterval > 360)) {
		alert("'" + params.id + "': timeInterval option can only have the following number of minutes:\n1, 2, 3, 4, 5, 6, 10, 15, 30,  60, 120, 180, 240, 300, 360 ");
		params.timeInterval = null;
	}
	if (params.date && !Date.parse(params.date)) {
		alert("'" + params.id + "' Start Date Invalid: " + params.date + ".\nSee date option.\nDefaulting to today.");
		params.date = null;
	}
	if (params.saveDate) { //If saveDate is on We're saving the date in a cookie
		param_default("cookiePrefix", window.location.href + "--" + params.button.id);
		//fetch the cookie
		var cookieName = params.cookiePrefix;
		var newdate = Zapatec.Utils.getCookie(cookieName);
		if (newdate != null) { //if there's a cookie
			//set the value of the text field
			document.getElementById(params.inputField.id).value = newdate;
		}
	}

	for(var ii in params) {
		if (typeof params.constructor.prototype[ii] != "undefined") {
			continue;
		}
		if (Zapatec.Utils.arrIndexOf(paramsList, ii) == -1) {
			alert("Wrong config option: " + ii);
		}
	}
	function onSelect(cal) {
		var p = cal.params;
		var update = (cal.dateClicked || p.electric);
		if (update && p.flat) {
			if (typeof p.flatCallback == "function")
			{
			   if (!p.multiple) //User can call function submitFlatDates directly in Calendar object to handle the submission of multiple dates.
				p.flatCallback(cal);
			} else
				alert("'" + cal.id + "': No flatCallback given -- doing nothing.");
			return false;
		}
		if (update && p.inputField) {
			p.inputField.value = cal.currentDate.print(p.ifFormat);
			if (typeof p.inputField.onchange == "function")
				p.inputField.onchange();
		}
		if (update && p.displayArea)
			p.displayArea.innerHTML = cal.currentDate.print(p.daFormat);
		if (update && p.singleClick && cal.dateClicked)
			cal.callCloseHandler();
		if (update && typeof p.onUpdate == "function")
			p.onUpdate(cal);
		if (p.saveDate) { //save date in cookie
			//unique name of the cookie is the name of the button  + href
			var cookieName = p.cookiePrefix;
			Zapatec.Utils.writeCookie(cookieName, p.inputField.value, null, '/', p.saveDate);
		} 
	};

	if (params.flat != null) {
		if (typeof params.flat == "string")
			params.flat = document.getElementById(params.flat);
		if (!params.flat) {
			alert("Calendar.setup '" + params.id + "':\n  Flat specified but can't find parent.");
			return false;
		}
		var cal = new Zapatec.Calendar(params.firstDay, params.date, params.onSelect || onSelect);
		cal.id = params.id;
		cal.disableFdowClick = params.disableFdowChange;
		cal.showsOtherMonths = params.showOthers;
		cal.showsTime = params.showsTime;
		cal.time24 = (params.timeFormat == "24");
		cal.timeInterval = params.timeInterval;
		cal.params = params;
		cal.weekNumbers = params.weekNumbers;
		cal.sortOrder = params.sortOrder.toLowerCase();
		cal.setRange(params.range[0], params.range[1]);
		cal.setDateStatusHandler(params.dateStatusFunc);
		cal.getDateText = params.dateText;
		cal.numberMonths = params.numberMonths;
		cal.controlMonth = params.controlMonth;
		cal.vertical = params.vertical;
		cal.yearStep = params.step;
		cal.monthsInRow = params.monthsInRow;
		cal.helpButton = !params.noHelp;
		cal.closeButton = !params.noCloseButton;
		cal.yearNav = !params.disableYearNav;
		if (params.ifFormat) {
			cal.setDateFormat(params.ifFormat);
		}
		
		if (params.inputField && params.inputField.type == "text" && typeof params.inputField.value == "string") {
			cal.parseDate(params.inputField.value);
		}

		if (params.multiple) {
		   cal.setMultipleDates(params.multiple);
		}
		cal.create(params.flat);
		cal.show();
		return cal;
	}

	var triggerEl = params.button || params.displayArea || params.inputField;
	if (params.canType) {
		function cancelBubble(ev) {
			ev = ev || window.event;
			if (Zapatec.is_ie) {
				ev.cancelBubble = true;
			} else {
				ev.stopPropagation();
			}
		}
		Zapatec.Utils.addEvent(params.inputField, "mousedown", cancelBubble);
		Zapatec.Utils.addEvent(params.inputField, "keydown", cancelBubble);
		Zapatec.Utils.addEvent(params.inputField, "keypress", cancelBubble);
		Zapatec.Utils.addEvent(params.inputField, "keyup", function(ev) {
			var format = params.inputField ? params.ifFormat : params.daFormat;
			var parsedDate = Date.parseDate(params.inputField.value, format);
			var cal = window.calendar;
			if (cal && parsedDate && !cal.hidden) {
				cal.setDate(parsedDate);
			}
		});
	}
	triggerEl["on" + params.eventName] = function() {
		var dateEl = params.inputField || params.displayArea;
		//FIX for Enter key!
		if ((!params.canType || params.inputField != triggerEl) && triggerEl.blur) {
			triggerEl.blur();
		}
		var dateFmt = params.inputField ? params.ifFormat : params.daFormat;
		var mustCreate = false;
		var cal = window.calendar;
		if (params.canType && (params.inputField == triggerEl) && cal && !cal.hidden) {
			return;
		}
		// Exit if calendar is NOT hidden and user tries to create another calendar (Click or SpaceBar)
		// Rev 1.9 - this needs to be integrated, it broke the multiple month feature
		//if (cal && !cal.hidden) return false;

		if (!(cal && params.cache)) {
			window.calendar = cal = new Zapatec.Calendar(params.firstDay,
							     params.date,
							     params.onSelect || onSelect,
							     params.onClose || function(cal) {
								     if (params.cache)
									     cal.hide();
								     else
									     cal.destroy();
							     });
			cal.id = params.id;
			cal.disableFdowClick = params.disableFdowChange;
			cal.showsTime = params.showsTime;
			cal.time24 = (params.timeFormat == "24");
			cal.timeInterval = params.timeInterval;
			cal.weekNumbers = params.weekNumbers;
			cal.numberMonths = params.numberMonths;
			cal.controlMonth = params.controlMonth;
			cal.vertical = params.vertical;
			cal.monthsInRow = params.monthsInRow;			
			cal.historyDateFormat = params.ifFormat || params.daFormat;
			cal.helpButton = !params.noHelp;
			cal.disableDrag = params.disableDrag;
			cal.closeButton = !params.noCloseButton;
			cal.yearNav = !params.disableYearNav;
			cal.sortOrder = params.sortOrder.toLowerCase();
			mustCreate = true;
		} else {
			if (params.date)
				cal.setDate(params.date);
			cal.hide();
		}

		if (params.multiple) {
		   cal.setMultipleDates(params.multiple);
		}
		
		cal.showsOtherMonths = params.showOthers;
		cal.yearStep = params.step;
		cal.setRange(params.range[0], params.range[1]);
		cal.params = params;
		cal.setDateStatusHandler(params.dateStatusFunc);
		cal.getDateText = params.dateText;
		cal.setDateFormat(dateFmt);
		if (mustCreate)
			cal.create();
		if (dateEl) {
			var dateValue;
			//figure out if the it's in value or innerHTML
			if (dateEl.value) {
				dateValue = dateEl.value;
			} else {
				dateValue = dateEl.innerHTML;
			}
			if (dateValue != "") { //if there is a date to initialize from
				var parsedDate = Date.parseDate(dateEl.value || dateEl.innerHTML, dateFmt);
				//This check for when webmaster initializes the box with something like
				//"check in"
				if (parsedDate != null) { //if it's parsable
					cal.setDate(parsedDate);
				}
			}
		}
		if (!params.position)
			cal.showAtElement(params.button || params.displayArea || params.inputField, params.align);
		else
			cal.showAt(params.position[0], params.position[1]);
		return false;
	};

	if (params.closeEventName) {
		triggerEl["on" + params.closeEventName] = function() {
			if (window.calendar)
				window.calendar.callCloseHandler();
		};
	}

	return cal;
};








function restyle_sidebar(){
	
		$j('.jive-sidebar').addClass('jive-box');
		$j('#jive-thread-content-block-container').removeClass("jive-content-block-container");
		$j('#jive-thread-content-block-container').addClass('jive-sidebar').addClass('jive-sidebar-actions jive-box-actions');
		$j('#jive-thread-content-block-container > .jive-box-header').addClass('jive-sidebar-header');
		$j('#jive-thread-content-block-container > .jive-content-block').addClass('jive-sidebar').addClass('jive-sidebar-body').addClass('jive-sidebar-body-actions').addClass('jive-box-body');
		
		$j('.jive-sidebar').removeClass('jive-sidebar-actions').removeClass('jive-box-actions');
		$j('#jive-action-sidebar').removeClass('jive-sidebar-actions').removeClass('jive-box-actions');
		$j('#jive-action-sidebar > .jive-box-header').addClass('jive-sidebar-header');
		$j('#jive-thread-content-block-hider').show();
		
	
}


var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        
        if (((c < "0") || (c > "9"))) {
        	
        	return false;
        }
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strMonth=dtStr.substring(0,pos1)
	var strDay=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		
		return false
		
	}
	
	if (strMonth.length<1 || month<1 || month>12){
		
		return false
		
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		
		return false
		
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
			
		return false
			
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		
		return false
	}
return true
}



/**
 * jQuery.query - Query String Modification and Creation for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/8/13
 *
 * @author Blair Mitchelmore
 * @version 2.1.7
 *
 **/
new function(settings) { 
  // Various Settings
  var $separator = settings.separator || '&';
  var $spaces = settings.spaces === false ? false : true;
  var $suffix = settings.suffix === false ? '' : '[]';
  var $prefix = settings.prefix === false ? false : true;
  var $hash = $prefix ? settings.hash === true ? "#" : "?" : "";
  var $numbers = settings.numbers === false ? false : true;
  
  jQuery.query = new function() {
    var is = function(o, t) {
      return o != undefined && o !== null && (!!t ? o.constructor == t : true);
    };
    var parse = function(path) {
      var m, rx = /\[([^[]*)\]/g, match = /^([^[]+)(\[.*\])?$/.exec(path), base = match[1], tokens = [];
      while (m = rx.exec(match[2])) tokens.push(m[1]);
      return [base, tokens];
    };
    var set = function(target, tokens, value) {
      var o, token = tokens.shift();
      if (typeof target != 'object') target = null;
      if (token === "") {
        if (!target) target = [];
        if (is(target, Array)) {
          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
        } else if (is(target, Object)) {
          var i = 0;
          while (target[i++] != null);
          target[--i] = tokens.length == 0 ? value : set(target[i], tokens.slice(0), value);
        } else {
          target = [];
          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
        }
      } else if (token && token.match(/^\s*[0-9]+\s*$/)) {
        var index = parseInt(token, 10);
        if (!target) target = [];
        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
      } else if (token) {
        var index = token.replace(/^\s*|\s*$/g, "");
        if (!target) target = {};
        if (is(target, Array)) {
          var temp = {};
          for (var i = 0; i < target.length; ++i) {
            temp[i] = target[i];
          }
          target = temp;
        }
        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
      } else {
        return value;
      }
      return target;
    };
    
    var queryObject = function(a) {
      var self = this;
      self.keys = {};
      
      if (a.queryObject) {
        jQuery.each(a.get(), function(key, val) {
          self.SET(key, val);
        });
      } else {
        jQuery.each(arguments, function() {
          var q = "" + this;
          q = q.replace(/^[?#]/,''); // remove any leading ? || #
          q = q.replace(/[;&]$/,''); // remove any trailing & || ;
          if ($spaces) q = q.replace(/[+]/g,' '); // replace +'s with spaces
          
          jQuery.each(q.split(/[&;]/), function(){
            var key = decodeURIComponent(this.split('=')[0] || "");
            var val = decodeURIComponent(this.split('=')[1] || "");
            
            if (!key) return;
            
            if ($numbers) {
              if (/^[+-]?[0-9]+\.[0-9]*$/.test(val)) // simple float regex
                val = parseFloat(val);
              else if (/^[+-]?[0-9]+$/.test(val)) // simple int regex
                val = parseInt(val, 10);
            }
            
            val = (!val && val !== 0) ? true : val;
            
            if (val !== false && val !== true && typeof val != 'number')
              val = val;
            
            self.SET(key, val);
          });
        });
      }
      return self;
    };
    
    queryObject.prototype = {
      queryObject: true,
      has: function(key, type) {
        var value = this.get(key);
        return is(value, type);
      },
      GET: function(key) {
        if (!is(key)) return this.keys;
        var parsed = parse(key), base = parsed[0], tokens = parsed[1];
        var target = this.keys[base];
        while (target != null && tokens.length != 0) {
          target = target[tokens.shift()];
        }
        return typeof target == 'number' ? target : target || "";
      },
      get: function(key) {
        var target = this.GET(key);
        if (is(target, Object))
          return jQuery.extend(true, {}, target);
        else if (is(target, Array))
          return target.slice(0);
        return target;
      },
      SET: function(key, val) {
        var value = !is(val) ? null : val;
        var parsed = parse(key), base = parsed[0], tokens = parsed[1];
        var target = this.keys[base];
        this.keys[base] = set(target, tokens.slice(0), value);
        return this;
      },
      set: function(key, val) {
        return this.copy().SET(key, val);
      },
      REMOVE: function(key) {
        return this.SET(key, null).COMPACT();
      },
      remove: function(key) {
        return this.copy().REMOVE(key);
      },
      EMPTY: function() {
        var self = this;
        jQuery.each(self.keys, function(key, value) {
          delete self.keys[key];
        });
        return self;
      },
      load: function(url) {
        var hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
        var search = url.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
        return new queryObject(url.length == search.length ? '' : search, url.length == hash.length ? '' : hash);
      },
      empty: function() {
        return this.copy().EMPTY();
      },
      copy: function() {
        return new queryObject(this);
      },
      COMPACT: function() {
        function build(orig) {
          var obj = typeof orig == "object" ? is(orig, Array) ? [] : {} : orig;
          if (typeof orig == 'object') {
            function add(o, key, value) {
              if (is(o, Array))
                o.push(value);
              else
                o[key] = value;
            }
            jQuery.each(orig, function(key, value) {
              if (!is(value)) return true;
              add(obj, key, build(value));
            });
          }
          return obj;
        }
        this.keys = build(this.keys);
        return this;
      },
      compact: function() {
        return this.copy().COMPACT();
      },
      toString: function() {
        var i = 0, queryString = [], chunks = [], self = this;
        var encode = function(str) {
          str = str + "";
          if ($spaces) str = str.replace(/ /g, "+");
          return encodeURIComponent(str);
        };
        var addFields = function(arr, key, value) {
          if (!is(value) || value === false) return;
          var o = [encode(key)];
          if (value !== true) {
            o.push("=");
            o.push(encode(value));
          }
          arr.push(o.join(""));
        };
        var build = function(obj, base) {
          var newKey = function(key) {
            return !base || base == "" ? [key].join("") : [base, "[", key, "]"].join("");
          };
          jQuery.each(obj, function(key, value) {
            if (typeof value == 'object') 
              build(value, newKey(key));
            else
              addFields(chunks, newKey(key), value);
          });
        };
        
        build(this.keys);
        
        if (chunks.length > 0) queryString.push($hash);
        queryString.push(chunks.join($separator));
        
        return queryString.join("");
      }
    };
    
    return new queryObject(location.search, location.hash);
  };
}(jQuery.query || {}); // Pass in jQuery.query as settings object


/*NO THIS HAS TO BE MOVED.
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

(function($) {
	  
	$.fn.select_autocomplete = function(options) {
		
		// make sure we have an options object
		options = options || {};
		
		// setup our defaults
		var defaults = { 
			  minChars: 0
			, width: 310
			, matchContains: true
			, autoFill: false
			, formatItem: function(row, i, max) {
				return row.name;
			}
			, formatMatch: function(row, i, max) {
				return row.name;
			}
			, formatResult: function(row) {
				return row.name;
			}
		};
		
		options = $.extend(defaults, options);
		
		return this.each(function() {
		
			//stick each of it's options in to an items array of objects with name and value attributes 
			var $this = $(this),
				data = [],
				$input = $('<input type="text" />');
			
			if (this.tagName.toLowerCase() != 'select') { return; }
				
			
			$this.children('option').each(function() {
		
				var $option = $(this);
				
				if ($option.val() != '') { //ignore empty value options

					data.push({
						  name: $option.html()
						, value:$option.val()
					});
				}
			});
			
			// insert the input after the select
			$this.after($input);
			
			// add it our data
			options.data = data;
		
			//make the input box into an autocomplete for the select items
			$input.autocomplete(data, options);
		
			//make the result handler set the selected item in the select list
			$input.result(function(event, selected_item, formatted) { 
				$($this.find('option[value=' + selected_item.value + ']')[0]).attr('selected', true);
			});

      $input.blur(function(){
          // autocomplete has removed blank options
          // ensure that if value is removed we select the blank option if available
          if(this.value == ""){
            $($this.find('option[value=]')[0]).attr('selected', true);
          }

          /*   failsafe to ensure text box always represents the value being used in the select
           *   there are edge cases where if you leave the field part way through the word, or clear the value when no blank option is available
           *   that force a mismatch between the 2 elements
           */
          if(this.value != $this[0].options[$this[0].selectedIndex].text){
            $input.val($this[0].options[$this[0].selectedIndex].text);
          }  
      });
		
			//set the initial text value of the autocomplete input box to the text node of the selected item in the select control
		//	$input.val($this[0].options[$this[0].selectedIndex].text);
		
			//normally, you'd hide the select list but we won't for this demo
			$this.hide();
		});
	};		  
  
})(jQuery);



/*
 * Autocomplete - jQuery plugin 1.0.2
*
* Copyright (c) 2007 Dylan Verheul, Dan G. Switzer, Anjesh Tuladhar, J�rn Zaefferer
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
* Revision: $Id: jquery.autocomplete.js 5747 2008-06-25 18:30:55Z joern.zaefferer $
*
*/

(function($) {
	
$.fn.extend({
	autocomplete: function(urlOrData, options) {
		var isUrl = typeof urlOrData == "string";
		options = $.extend({}, $.Autocompleter.defaults, {
			url: isUrl ? urlOrData : null,
			data: isUrl ? null : urlOrData,
			delay: isUrl ? $.Autocompleter.defaults.delay : 10,
			max: options && !options.scroll ? 10 : 150
		}, options);
		
		// if highlight is set to false, replace it with a do-nothing function
		options.highlight = options.highlight || function(value) { return value; };
		
		// if the formatMatch option is not specified, then use formatItem for backwards compatibility
		options.formatMatch = options.formatMatch || options.formatItem;
		
		return this.each(function() {
			new $.Autocompleter(this, options);
		});
	},
	result: function(handler) {
		return this.bind("result", handler);
	},
	search: function(handler) {
		return this.trigger("search", [handler]);
	},
	flushCache: function() {
		return this.trigger("flushCache");
	},
	setOptions: function(options){
		return this.trigger("setOptions", [options]);
	},
	unautocomplete: function() {
		return this.trigger("unautocomplete");
	}
});

$.Autocompleter = function(input, options) {

	var KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};

	// Create $ object for input element
	var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

	var timeout;
	var previousValue = "";
	var cache = $.Autocompleter.Cache(options);
	var hasFocus = 0;
	var lastKeyPressCode;
	var config = {
		mouseDownOnSelect: false
	};
	var select = $.Autocompleter.Select(options, input, selectCurrent, config);
	
	var blockSubmit;
	
	// prevent form submit in opera when selecting with return key
	$.browser.opera && $(input.form).bind("submit.autocomplete", function() {
		
		if (blockSubmit) {
			blockSubmit = false;
			return false;
		}
	});
	
	// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
	$input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
		// track last key pressed
		lastKeyPressCode = event.keyCode;
		switch(event.keyCode) {
		
			case KEY.UP:
				event.preventDefault();
				if ( select.visible() ) {
					select.prev();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.DOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.next();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEUP:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageUp();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEDOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageDown();
				} else {
					onChange(0, true);
				}
				break;
			
			// matches also semicolon
			case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
			case KEY.TAB:
			case KEY.RETURN:
				if( selectCurrent() ) {
					// stop default to prevent a form submit, Opera needs special handling
					event.preventDefault();
					blockSubmit = true;
					return false;
				}
				break;
				
			case KEY.ESC:
				select.hide();
				break;
				
			default:
				clearTimeout(timeout);
				timeout = setTimeout(onChange, options.delay);
				break;
		}
	}).focus(function(){
		// track whether the field has focus, we shouldn't process any
		// results if the field no longer has focus
		hasFocus++;
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).blur(function() {
		hasFocus = 0;
		if (!config.mouseDownOnSelect) {
			hideResults();
		}
	}).click(function() {
		// show select when clicking in a focused field
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).bind("search", function() {
		// TODO why not just specifying both arguments?
		var fn = (arguments.length > 1) ? arguments[1] : null;
		function findValueCallback(q, data) {
			var result;
			if( data && data.length ) {
				for (var i=0; i < data.length; i++) {
					if( data[i].result.toLowerCase() == q.toLowerCase() ) {
						result = data[i];
						break;
					}
				}
			}
			if( typeof fn == "function" ) fn(result);
			else $input.trigger("result", result && [result.data, result.value]);
		}
		$.each(trimWords($input.val()), function(i, value) {
			request(value, findValueCallback, findValueCallback);
		});
	}).bind("flushCache", function() {
		cache.flush();
	}).bind("setOptions", function() {
		$.extend(options, arguments[1]);
		// if we've updated the data, repopulate
		if ( "data" in arguments[1] )
			cache.populate();
	}).bind("unautocomplete", function() {
		select.unbind();
		$input.unbind();
		$(input.form).unbind(".autocomplete");
	});
	
	
	function selectCurrent() {
		var selected = select.selected();
		
		if( !selected )
			return false;
		
		var v = selected.result;
		previousValue = v;
		
		if ( options.multiple ) {
			var words = trimWords($input.val());
			if ( words.length > 1 ) {
				v = words.slice(0, words.length - 1).join( options.multipleSeparator ) + options.multipleSeparator + v;
			}
			v += options.multipleSeparator;
		}
		
		$input.val(v);
		hideResultsNow();
		
		$input.trigger("result", [selected.data, selected.value]);
		
		
		return true;
	}
	
	function onChange(crap, skipPrevCheck) {
		
		if( lastKeyPressCode == KEY.DEL ) {
			select.hide();
			return;
		}
		
		var currentValue = $input.val();
		
		if ( !skipPrevCheck && currentValue == previousValue )
			return;
		
		previousValue = currentValue;
		
		currentValue = lastWord(currentValue);
		if ( currentValue.length >= options.minChars) {
			$input.addClass(options.loadingClass);
			if (!options.matchCase)
				currentValue = currentValue.toLowerCase();
			request(currentValue, receiveData, hideResultsNow);
		} else {
			stopLoading();
			select.hide();
		}
		
	};
	
	function trimWords(value) {
		if ( !value ) {
			return [""];
		}
		var words = value.split( options.multipleSeparator );
		var result = [];
		$.each(words, function(i, value) {
			if ( $.trim(value) )
				result[i] = $.trim(value);
		});
		return result;
	}
	
	function lastWord(value) {
		if ( !options.multiple )
			return value;
		var words = trimWords(value);
		return words[words.length - 1];
	}
	
	// fills in the input box w/the first match (assumed to be the best match)
	// q: the term entered
	// sValue: the first matching result
	function autoFill(q, sValue){
		// autofill in the complete box w/the first match as long as the user hasn't entered in more data
		// if the last user key pressed was backspace, don't autofill
		if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
			// select the portion of the value not typed by the user (so the next character will erase)
			
			$.Autocompleter.Selection(input, previousValue.length, previousValue.length + sValue.length);
		}
	};

	function hideResults() {
		clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		var wasVisible = select.visible();
		select.hide();
		clearTimeout(timeout);
		stopLoading();
		if (options.mustMatch) {
			// call search and run callback
			$input.search(
				function (result){
					// if no value found, clear the input box
					if( !result ) {
						if (options.multiple) {
							var words = trimWords($input.val()).slice(0, -1);
							$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
						}
						else
							$input.val( "" );
					}
				}
			);
		}
		if (wasVisible)
			// position cursor at end of input field
			$.Autocompleter.Selection(input, input.value.length, input.value.length);
	};

	function receiveData(q, data) {
		if ( data && data.length && hasFocus ) {
			stopLoading();
			select.display(data, q);
			autoFill(q, data[0].value);
			select.show();
		} else {
			hideResultsNow();
		}
	};

	function request(term, success, failure) {
		if (!options.matchCase)
			term = term.toLowerCase();
		var data = cache.load(term);
		// recieve the cached data
		if (data && data.length) {
			success(term, data);
		// if an AJAX url has been supplied, try loading the data now
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){
			
			var extraParams = {
				timestamp: +new Date()
			};
			$.each(options.extraParams, function(key, param) {
				extraParams[key] = typeof param == "function" ? param() : param;
			});
			
			$.ajax({
				// try to leverage ajaxQueue plugin to abort previous requests
				mode: "abort",
				// limit abortion to this input
				port: "autocomplete" + input.name,
				dataType: options.dataType,
				url: options.url,
				data: $.extend({
					q: lastWord(term),
					limit: options.max
				}, extraParams),
				success: function(data) {
					var parsed = options.parse && options.parse(data) || parse(data);
					cache.add(term, parsed);
					success(term, parsed);
				}
			});
		} else {
			// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
			select.emptyList();
			failure(term);
		}
	};
	
	function parse(data) {
		var parsed = [];
		var rows = data.split("\n");
		for (var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				row = row.split("|");
				parsed[parsed.length] = {
					data: row,
					value: row[0],
					result: options.formatResult && options.formatResult(row, row[0]) || row[0]
				};
			}
		}
		return parsed;
	};

	function stopLoading() {
		$input.removeClass(options.loadingClass);
	};

};

$.Autocompleter.defaults = {
	inputClass: "ac_input",
	resultsClass: "ac_results",
	loadingClass: "ac_loading",
	minChars: 1,
	delay: 400,
	matchCase: false,
	matchSubset: true,
	matchContains: false,
	cacheLength: 10,
	max: 100,
	mustMatch: false,
	extraParams: {},
	selectFirst: true,
	formatItem: function(row) { return row[0]; },
	formatMatch: null,
	autoFill: false,
	width: 0,
	multiple: false,
	multipleSeparator: ", ",
	highlight: function(value, term) {
		return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
	},
   scroll: true,
   scrollHeight: 180
};

$.Autocompleter.Cache = function(options) {

	var data = {};
	var length = 0;
	
	function matchSubset(s, sub) {
		if (!options.matchCase) 
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};
	
	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){ 
			length++;
		}
		data[q] = value;
	}
	
	function populate(){
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
			nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;
		
		// track all options for minChars = 0
		stMatchSets[""] = [];
		
		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
			
			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;
				
			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] ) 
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};
			
			// push the current match into the set list
			stMatchSets[firstChar].push(row);

			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);
			}
		};

		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
		});
	}
	
	// populate any existing data
	setTimeout(populate, 25);
	
	function flush(){
		data = {};
		length = 0;
	}
	
	return {
		flush: flush,
		add: add,
		populate: populate,
		load: function(q) {
			if (!options.cacheLength || !length)
				return null;
			/* 
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}				
				return csub;
			} else 
			// if the exact item exists, use it
			if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.Autocompleter.Select = function (options, input, select, config) {
	var CLASSES = {
		ACTIVE: "ac_over"
	};
	
	var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;
	
	// Create results
	function init() {
		if (!needsInit)
			return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);
	
		list = $("<ul/>").appendTo(element).mouseover( function(event) {
			if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
	            active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
			    $(target(event)).addClass(CLASSES.ACTIVE);            
	        }
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
			// TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
			input.focus();
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});
		
		if( options.width > 0 )
			element.css("width", options.width);
			
		needsInit = false;
	} 
	
	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
       var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
       if(options.scroll) {
           var offset = 0;
           listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
           if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
               list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
           } else if(offset < list.scrollTop()) {
               list.scrollTop(offset);
           }
       }
	};
	
	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}
	
	function limitNumberOfItems(available) {
		return options.max && options.max < available
			? options.max
			: available;
	}
	
	function fillList() {
		list.empty();
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			if ( formatted === false )
				continue;
			var li = $("<li/>").html( options.highlight(formatted, term) ).addClass(i%2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
			$.data(li, "ac_data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}
	
	return {
		display: function(d, q) {
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function() {
			moveSelect(1);
		},
		prev: function() {
			moveSelect(-1);
		},
		pageUp: function() {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active );
			} else {
				moveSelect(-8);
			}
		},
		pageDown: function() {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active );
			} else {
				moveSelect(8);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE);
			active = -1;
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();
           if(options.scroll) {
               list.scrollTop(0);
               list.css({
					maxHeight: options.scrollHeight,
					overflow: 'auto'
				});
				
               if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
                   list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
               }
               
           }
		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ac_data");
		},
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.Autocompleter.Selection = function(field, start, end) {
	if( field.createTextRange ){
		var selRange = field.createTextRange();
		selRange.collapse(true);
		selRange.moveStart("character", start);
		selRange.moveEnd("character", end);
		selRange.select();
	} else if( field.setSelectionRange ){
		field.setSelectionRange(start, end);
	} else {
		if( field.selectionStart ){
			field.selectionStart = start;
			field.selectionEnd = end;
		}
	}
	field.focus();
};

})(jQuery);



/*
 * 
 * jquery pagination
 * 
 */
//----------------------------------------------------------------------------
//Pagination Plugin - A jQuery Plugin to paginate content
//v 1.0 Beta
//Dual licensed under the MIT and GPL licenses.
//----------------------------------------------------------------------------
//Copyright (C) 2010 Rohit Singh Sengar
//http://rohitsengar.cueblocks.net/
//----------------------------------------------------------------------------
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.
//----------------------------------------------------------------------------



//------------ initializing all the values needed in paginator. -----------------



	//--- Variables for internal use ----

	var pageElement = Array();

	var paginatorId = '';

	var currentPage = 1; // current page, default 1

	var allItems = 0; // no. of repeating items in the container where paginator is applied

	var lastPage = 1; // last page, default 1

	

	//--- Attributes that can be changed according to use ---

	var startPage = 1; // start page

	var itemsPerPage = 8; // no. of items you want to show on one page

	var firstPageSymbol = '<<'; // to indicate First Page

	var previousPageSymbol = '<'; // to indicate Previous Page

	var nextPageSymbol = '>'; // to indicate Next Page

	var lastPageSymbol = '>>'; // to indicate Last Page

	var separator = ' '; // To separate paginator's items

	var paginatorPosition = 'top'; // where you want the paginator to be. Accepted values are 'top','bottom','both'

	var paginatorStyle = 1; // To define which style of paginator you need.

	// 1 - for << | < | 1 | 2 | 3 | > | >>

	// 2 - for << | < | 1/8 | > | >>

	// 3 - for < | 1 | 2 | 3 | >

	// 4 - for < | >
	var enablePageOfOption = false; // it shows on which are you currently, i.e. Page 3 of 6 Page(s), if turned true
	var enableGoToPage = false; // shows a drop down of all pages for go/jump to any page user want to go, if turned true. Useful incase there are large no. of pages
	var textGoToPage = 'Jump to'; // text for above option. You can change it to 'Jump to Page' or anything you like. The above option needs to turned on for this.
	var enableSelectNoItems = false; // if you want to change items per page on the fly.
	var textSelectNoItems = 'Items Per Page'; // text for above option. You can change it to 'Change No. of tag/page' or anything you like. The above option needs to turned on for this.

	var paginatorValues = Array(5,10,15,20,25,30); // list of values for above option (enableSelectNoItems).

 var anchorLink = 'javascript:void(0);'; // if you want to change href of the paginator anchor text (links for page) to '#' or to something else. As # is append on the address bar upon clicking I used javascript:void(); which is clean.
 
 var showIfSinglePage = false; // set it to false if you don't want to show paginator incase there is only one page, true if show paginator even if there is just one page.

//-----------functions starts----------------------------------------------------


 // function for extending function to dom object. Read more about it in jQuery docs.

	jQuery.fn.extend({

		pagination: function() {

			paginatorId=this; 

			switch(paginatorPosition) // create paginator div (container for paginator) according to the position mentioned by user.

			{
				

				case 'top': { paginatorId.before('<div class="paginator"></div>'); break; }

				case 'bottom': { paginatorId.after('<div class="paginator"></div>'); break; }

				case 'both': {  paginatorId.before('<div class="paginator"></div>');

								paginatorId.after('<div class="paginator"></div>'); break; }
                             
             default: { paginatorId.after('<div class="paginator"></div>'); }

			} 

			initPaginator(); // calling function to start pagination.

		},
     
     depagination: function() {

			$j('.paginator').remove(); // removing paginator class.

			paginatorId.children().show(); // show all content of the div where pagination was applied.

		}

	});

	

	function initPaginator()  // for initializing the paginator

	{

		if(itemsPerPage < 1)

			itemsPerPage = 5;

		allItems = paginatorId.children().length; // finding number of total items in content

		if(allItems%itemsPerPage == 0) // calculating last page of the paginator

			lastPage = parseInt(allItems/itemsPerPage);

		else

			lastPage = parseInt(allItems/itemsPerPage)+1;

		if((startPage < 1)||(startPage > lastPage))	// start page for pagination

			startPage = 1;
         
     if(!showIfSinglePage) // check if option is set to false
     {
         if(lastPage > 1)  // show pagination only if there is more than 1 page.
             appendContent(startPage, 1);
     }
     else
         appendContent(startPage, 1); // call function to show start page for first time. Fading effect is not required initially.

	}

	
 // function for appending the content of selected page. called everytime whenever user clicks on any active link of paginator. set effect true/1 for fading effects, false/0 for changing contents for 

	function appendContent(page, effect) 

	{

		if(page < 0)

		{

			if(page == -1)

				page = currentPage - 1;

			else

				page = currentPage + 1;

		}

		currentPage = page; // get current page or page selected.

		

		till = (currentPage-1)*itemsPerPage;

		

		if(!effect)  // Page change without fading effect

		{
			paginatorId.fadeOut("medium", function () { // fade out the current content 
				createPaginator();  // create new paginator
				paginatorId.children().hide();  // hide all child element of content
				paginatorId.children().slice(till, itemsPerPage+till).show(); // show only those items according to page selected. 
				paginatorId.fadeIn("medium"); // use nice fade in effect to show the items of that selected page.
			});

		}

		else //with fading effect

		{
         createPaginator();   // create new paginator
			paginatorId.children().hide();  // hide all child element of content
			paginatorId.children().slice(till, itemsPerPage+till).show();  // show only those items according to page selected.

		}

	}
 
 
	function createPaginator()  // for creating the paginator

	{

		$j(".paginator").html("");

		

		var style1 = ''; // for << | < | 1 | 2 | 3 | > | >>

		var style2 = ''; // for << | < | 1/8 | > | >>

		var style3 = ''; // for < | 1 | 2 | 3 | >

		var style4 = ''; // for < | >

		var pageOfOption = ' Page '+currentPage+' of '+lastPage+' Page(s) ';  // for showing page info option

		var goToPage = ' '+textGoToPage+' <select onchange="appendContent(this.value);" >'; // for go to page option 

		var selectNoItems = ' '+textSelectNoItems+' <select onchange="itemsPerPage=Number(this.value);initPaginator();" >';  // for changing items per page option
		

		for(var i=0;i<paginatorValues.length;i++) // preparing drop down for selectNoItems option

		{

			if(itemsPerPage == paginatorValues[i])

				selectNoItems += '<option value="'+paginatorValues[i]+'" selected="selected">'+paginatorValues[i]+'</option>';

			else

				selectNoItems += '<option value="'+paginatorValues[i]+'">'+paginatorValues[i]+'</option>';

		}

		

		selectNoItems += '</select>';

		

		if(currentPage == 1) // for setting paginator style if current page is first page

		{

			style = '<a href="'+anchorLink+'" class="inactive" title="First Page">'+firstPageSymbol+'</a>' + separator;

			style1 = style2 = style;

			style = '<a href="'+anchorLink+'" class="inactive" title="Previous Page">'+previousPageSymbol+'</a>' + separator;

			style1 += style; 

			style2 += style;

			style3 += style;

			style4 += style;

		}	

		else // for setting paginator style for first page links

		{

			style = '<a href="'+anchorLink+'" class="active" onclick="appendContent(1);" title="First Page">'+firstPageSymbol+'</a>' + separator;

			style1 = style2 = style;

			style = '<a href="'+anchorLink+'" class="active" onclick="appendContent(-1);" title="Previous Page">'+previousPageSymbol+'</a>' + separator;

			style1 += style;

			style2 += style;

			style3 += style;

			style4 += style;

		}

		

		

		for(var i=1;i<=lastPage;i++) // prepareing links for pages 

		{

			if(i == currentPage) // if page is current page then set anchor class to inactive and no onclick function.

				{

					style1 += '<a href="'+anchorLink+'" class="inactive" title="Page '+i+'">'+i+'</a>' + separator;

					style2 += '<a href="'+anchorLink+'" class="inactive" title="Page '+i+'">'+i+'/'+lastPage+'</a>' + separator;

					style3 += '<a href="'+anchorLink+'" class="inactive" title="Page '+i+'">'+i+'</a>' + separator;

					goToPage += '<option value="'+i+'" selected="selected">'+i+'</option>'; // preparing go to option drop down

				}

			else // if page is not current page then set anchor class to active and put onclick appendContent function.

				{

					style = '<a href="'+anchorLink+'" class="active" onclick="appendContent('+i+');" title="Page '+i+'">'+i+'</a>' + separator;

					style1 += style;

					style3 += style;

					goToPage += '<option value="'+i+'">'+i+'</option>';  // preparing go to option drop down

				}

		}

		

		goToPage += '</select>';  // preparing go to option drop down

		

		if(currentPage == lastPage) // for setting paginator style if current page is last page

		{

			style = '<a href="'+anchorLink+'" class="inactive" title="Next Page">'+nextPageSymbol+'</a>';

			style1 += style;

			style2 += style;

			style3 += style;

			style4 += style;

			style = separator + '<a href="'+anchorLink+'" class="inactive" title="Last Page">'+lastPageSymbol+'</a>';

			style1 += style;

			style2 += style;

		}

		else // for setting paginator style for last page links

		{

			style = '<a href="'+anchorLink+'" class="active" onclick="appendContent(-2);" title="Next Page">'+nextPageSymbol+'</a>';

			style1 += style;

			style2 += style;

			style3 += style;

			style4 += style;

			style = separator + '<a href="'+anchorLink+'" class="active" onclick="appendContent('+lastPage+');" title="Last Page">'+lastPageSymbol+'</a>';

			style1 += style;

			style2 += style;

		}

			

		switch (paginatorStyle) // getting which style of pagination is mentioned.

		{

			case 1 : style = style1; break;

			case 2 : style = style2; break;

			case 3 : style = style3; break;

			case 4 : style = style4; break;

			default : style = style1;

		}

		
     
     // appending various other options if they are enabled or set to true.

		if(enablePageOfOption)

			style += '<span class="inactive" title="Page Information">' + pageOfOption + '</span>';

		if(enableGoToPage)

			style += '<span class="inactive" title="Select Page">' + goToPage + '</span>';

		if(enableSelectNoItems)

			style += '<span class="inactive" title="Select no. of items per page">' + selectNoItems + '</span>';

		

		$j(".paginator").html(style);	

	}
 
//--------------------- Plugin Ends ----------------------------

	
	/**
	 * Convert a single file-input element into a 'multiple' input list
	 *
	 * Usage:
	 *
	 *   1. Create a file input element (no name)
	 *      eg. <input type="file" id="first_file_element">
	 *
	 *   2. Create a DIV for the output to be written to
	 *      eg. <div id="files_list"></div>
	 *
	 *   3. Instantiate a MultiSelector object, passing in the DIV and an (optional) maximum number of files
	 *      eg. var multi_selector = new MultiSelector( document.getElementById( 'files_list' ), 3 );
	 *
	 *   4. Add the first element
	 *      eg. multi_selector.addElement( document.getElementById( 'first_file_element' ) );
	 *
	 *   5. That's it.
	 *
	 *   You might (will) want to play around with the addListRow() method to make the output prettier.
	 *
	 *   You might also want to change the line
	 *       element.name = 'file_' + this.count;
	 *   ...to a naming convention that makes more sense to you.
	 *
	 * Licence:
	 *   Use this however/wherever you like, just don't blame me if it breaks anything.
	 *
	 * Credit:
	 *   If you're nice, you'll leave this bit:
	 *
	 *   Class by Stickman -- http://www.the-stickman.com
	 *      with thanks to:
	 *      [for Safari fixes]
	 *         Luis Torrefranca -- http://www.law.pitt.edu
	 *         and
	 *         Shawn Parker & John Pennypacker -- http://www.fuzzycoconut.com
	 *      [for duplicate name bug]
	 *         'neal'
	 *         
	 *         
	 *      Customized by Matt Kantor to have a traverseable DOM   
	 */
	function SolutionMultiSelector(list_target, max, current, remove_i18n, alreadyHasImage) {
	    // Where to write the list
	    this.list_target = list_target;
	    this.addedElements = [];
	    this.hasImage=alreadyHasImage;
	    // How many elements?
	    if (current) {
	        this.count = current;
	    }
	    else {
	        this.count = 0;
	    }
	    // How many elements?
	    this.id = 0;
	    // Is there a maximum?
	    if (max) {
	        this.max = max;
	    }
	    else {
	        this.max = -1;
	    }

	    this.removeStr = remove_i18n;

	    /**
	     * Add a new file input element
	     */
	   
	    
	    this.addElement = function(element) {
	    	//make sure its not another image
	    	
	    	
	        // Make sure it's a file input element
	        if (element.tagName == 'INPUT' && element.type == 'file') {
	            // Element name
	            element.name = 'attachFile';
	            // Element ID
	            element.id = 'attachFile_' + this.count;

	            // Add reference to this object
	            element.multi_selector = this;

	            // What to do when a file is selected
	            element.onchange = function() {
	                // CS-12324 Google Chrome triggers the change event even if no file is added (esc or cancel is hit) 
	                if (!this.value || this.value == '') {
	                    return;
	                }
	                //check for multiple images
	                if(this.value.indexOf("jpeg")>-1 || this.value.indexOf("jpg")>-1 || this.value.indexOf("gif")>-1 || this.value.indexOf("bmp")>-1){
		                
	                	if(this.multi_selector.hasImage==true ){
	                			alert('too many images');
	                			this.value="";
	                			return false;
	                	}else{
	                		this.multi_selector.hasImage=true;
	                	}
	                }
	                
	                this.multi_selector.addedElements.push(element.id);
	                // unhide the list
	                list_target.style.display = "block";

	                // New file input
	                var new_element = document.createElement('input');
	                new_element.type = 'file';

	                // Add new element
	                this.parentNode.insertBefore(new_element, this);

	                // Apply 'update' to element
	                this.multi_selector.addElement(new_element);

	                // Update list
	                this.multi_selector.addListRow(this);

	                // Hide this: we can't use display:none because Safari doesn't like it
	                this.style.position = 'absolute';
	                this.style.left = '-1000px';

	            };
	            // If we've reached maximum number, disable input element
	            if (this.max != -1 && this.count >= this.max) {
	                element.disabled = true;
	                element.style.display = "none";
	                document.getElementById("jive-attach-maxsize").style.display = "none";
	            }
	            // If we are one away from the max number, show maximum count
	            else if (this.max != -1 && this.count >= this.max-1) {
	                document.getElementById("jive-attach-maxfiles").style.display = "";
	            }

	            // File element counter
	            this.count++;
	            // Most recent element
	            this.current_element = element;
	        }
	        else {
	            // This can only be applied to file input elements!
	            alert('Error: not a file input element');
	        }
	    };

	    /**
	     * Add a new row to the list of files
	     */
	    this.addListRow = function(element) {
	        // Row div
	        var new_row = document.createElement('div');
	        new_row.className = "jive-attach-item";
	        new_row.id = "jive-attach-item" + element.id.slice("attachFile_".length);

	        // attachment icon
	        var new_row_image = document.createElement('img');
	        // ADDED _jive_base_url because multifile.js is used on document edit
	        // which is referenced as /clearspace/docs/DOC-1283/edit, which would
	        // cause src = 'images/attach-7x11.gif' to fail
	        new_row_image.src = _jive_base_url + "/images/attach-7x11.gif";
	        new_row_image.alt = "";
	        new_row_image.width = "7";
	        new_row_image.height = "11";
	        new_row_image.border = "0";
	        new_row_image.style.value = "margin: 3px 1px 0px 0px;"

	        // Delete link
	        var new_row_link = document.createElement('a');
	        new_row_link.href = '#';
	        new_row_link.innerHTML = this.removeStr;

	        // References
	        new_row.element = element;

	        new_row.appendChild(new_row_image);
	        new_row.appendChild(document.createTextNode(" "));

	        // Remove function
	        new_row_link.onclick = function() {
	            // Remove element from form
	            this.parentNode.element.parentNode.removeChild(this.parentNode.element);

	            // Remove this row from the list
	            this.parentNode.parentNode.removeChild(this.parentNode);
	            //find out if its an image
	            
	            
	            var id = this.parentNode.element.id;
	            var addedElements = this.parentNode.element.multi_selector.addedElements;
	            for (var i = 0; i < addedElements.length; i++) {
	                if (addedElements[i] == id && addedElements.length == 1) {
	                    // not sure why but in ff splice(0, 0) wouldn't work.
	                    this.parentNode.element.multi_selector.addedElements = [];
	                }
	                else if (addedElements[i] == id) {
	                    addedElements.splice(i, i);
	                }
	            }

	            // Decrement counter
	            this.parentNode.element.multi_selector.count--;

	            // hide list if no elements left
	            if (this.parentNode.element.multi_selector.count < 2) {
	                list_target.style.display = "none";
	            }

	            // Re-enable input element (if it's disabled)
	            this.parentNode.element.multi_selector.current_element.style.display = "";
	            this.parentNode.element.multi_selector.current_element.disabled = false;
	            document.getElementById("jive-attach-maxsize").style.display = "";

	            // Appease Safari
	            // without it Safari wants to reload the browser window
	            // which nixes your already queued uploads
	            return false;
	        };

	        var ua = navigator.userAgent;
	        var isWindows = ua.indexOf('Windows') != -1;
	        var isMac = !isWindows && ua.indexOf('Mac') != -1;

	        // Set row value
	        var elValue = element.value;
	        // grab only the filename minus the path
	        var fName = elValue;
	        if (fName.indexOf('\\') != -1 && isWindows) {
	            fName = fName.substring(fName.lastIndexOf('\\') + 1);
	        }
	        else if (fName.indexOf('/') != -1) {
	            fName = fName.substring(fName.lastIndexOf('/') + 1);
	        }
	        else if (fName.indexOf(':') != -1 && isMac) {
	            fName = fName.substring(fName.lastIndexOf(':') + 1);
	        }
	        nameDiv = new_row.appendChild(document.createElement('span'));
	        $j(nameDiv).html(fName);
	        // Add remove link
	        space = new_row.appendChild(document.createElement('span'));
	        $j(space).html(" ");
	        
	        new_row.appendChild(new_row_link);

	        // Add it to the list
	        this.list_target.appendChild(new_row);
	    };

	    this.removeAttachment = function(elementID, id) {
	        // Add a hidden field removeAttachID -> id
	        var new_element = document.createElement('input');
	        new_element.type = 'hidden';
	        new_element.name = "removeAttachID";
	        new_element.value = id;
	        //check for image and remove it
	        var e = document.getElementById(elementID);
	       
	        
	        a_element = $j('li#'+elementID+ ' > a > img');
	        if($j(a_element)){
	        	this.hasImage=false;
	        }
	        // Replace div with hidden field
	        
	        
	        
	        e.parentNode.replaceChild(new_element, e);

	        // decrement the counter
	        this.count--;

	        // hide list if no elements left
	        if (this.count < 2) {
	            list_target.style.display = "none";
	        }
	        
	        // Re-enable input element (if it's disabled)
	        this.current_element.style.display = "";
	        this.current_element.disabled = false;
	        document.getElementById("jive-attach-maxsize").style.display = "";
	    };
	    this.haveAttachmentsBeenAdded = function() {
	        return this.addedElements.length > 0;
	    }
	};
	$j(document).ready(function(){
		$j('a[href*="index.jspa?view=solution"]').attr("href", "/community/solutions/");
	});
	
;

if(typeof(jive) != "undefined"){

    /**
     * defines a simple Macro interface to mimic the RenderMacro class on the server
     */
    jive.rte.plugin.videomacro = function(shortname, url, macrotag, settingsHuh, displayHuh, paramSets, params, enabled, button){
        var that = this;

        params = [{}];

        /**
         * gets the unique name for this macro
         * i.e. "code" or "youtube"
         */
        this.getName = function(){
            return shortname;
        }

        /**
         * gets the optional url for this macro
         */
        this.getUrl = function(){
            return url;
        }

        /**
         * returns true if it should be a button or not
         */
        this.isButton = function(){
            return button;
        }

        this.isEnabled = function(){
            return enabled;
        }

        this.isShowSettings = function(){
            return settingsHuh;
        }

        /**
         * Display in RTE Insert List?
         */
        this.isShowInMacroList = function(){
            return displayHuh;
        }

        /**
         * returns true if this macro accepts
         * raw text input, like a code macro,
         * or false if it doesn't, like
         * a youtube macro
         */
        this.getMacroType = function(){
            return macrotag;
        }

        /**
         * returns an array of allowed parameters
         */
        this.getAllowedParameters = function(){
            return params;
        }

        this.usesCustomBackground = function(){
            return true;
        }

        /**
         * update the position of $obj to properly display behind ele's content
         * in the RTE
         * @param rte the jive RTE object
         * @param ele the DOM element /inside/ the RTE proper. this should
         * be clear so show through to $obj behind it
         * @param $ele the DOM element /behind/ the RTE that shows rich content
         */
        this.refreshPosition= function(rte, ele, $ele){
//

            that.updatePreviewContentPosition(ele, $ele); //todo not sure we need this extra call
        }

        this.updatePreviewContentPosition = function (ele, $ele) {
            // get offset inside the RTE
            var t = jive.ext.x.xPageY(ele);
            var l = jive.ext.x.xPageX(ele);

            if($ele.css("top") != t) {
                $ele.css("top", t);
            }

            if($ele.css("left") != l) {
                $ele.css("left", l);
            }
        }

        /**
         * update the element's display w/ the latest
         * parameter value.
         */
        this.refresh = function(rte, ele){
            var $ele = rte.getHiddenElementFor($j(ele).attr("_jivemacro_uid"));

            if($ele.data("init") == null){
                // because this is called *immediately* after the insert macro
                // the browser hasn't actually set the width/height correctly
                // so we need to wait for just a bit before refreshing the graph
                setTimeout(function(rte, ele, $ele){ return function(){
                    that.displayVideo(rte, ele, $ele);
                    that.updatePreviewContentPosition(ele, $ele);
                }}(rte, ele, $ele), 333);
            }else{
                that.displayVideo(rte, ele, $ele);
            }
        }

        this.displayVideo = function(rte, ele, $ele) {
            var uid = ele.getAttribute("_jivemacro_uid");

                $j(ele).width(520);
                $j(ele).height(333);
                $j($ele).width(520);
                $j($ele).height(333);
                var imgHTML = "<img src='"+ele.getAttribute("_imageURL")+"/520'/>";
                $j($ele).html(imgHTML);
                $j(ele).html(imgHTML);
            
        }


        this.retrieveInsertionUUID = function($ele) {
            return $j($ele, '#insertionUUID').attr("id");
        }

        this.getEditorWindowHandle = function() {
            var w;

                if (typeof(window.parent.editor) == "undefined") {
                    w = window.parent.tinyMCE.activeEditor.getWin().parent;
                }
                else {
                    w = window.parent;
                }
            return w;
        }

       this.doSetResizedDimensions = function(ele, $ele, width, height, superRichContentMaxWidth) {
           $ele.width(superRichContentMaxWidth - 500 > width? superRichContentMaxWidth-500 : width);
           $ele.height(height);
           $j(ele).width(superRichContentMaxWidth - 500 > width? superRichContentMaxWidth-500 : width);
           $j(ele).height(height);
           $j(ele).attr('src', "/images/tiny_mce3/plugins/alignment/img/spacer.gif");
        }
    }

}
;
Zapatec.Setup=function(){};Zapatec.Setup.test=true;Zapatec.Calendar.setup=function(B){paramsList=["id"];function F(L,M){if(typeof B[L]=="undefined"){B[L]=M}paramsList.push(L)}B.id=Zapatec.Utils.generateID("calendar");F("inputField",null);F("displayArea",null);F("button",null);F("eventName","click");F("closeEventName",null);F("ifFormat","%Y/%m/%d");F("daFormat","%Y/%m/%d");F("singleClick",true);F("disableFunc",null);F("dateStatusFunc",B["disableFunc"]);F("dateText",null);F("firstDay",null);F("align","Br");F("range",[1900,2999]);F("weekNumbers",true);F("flat",null);F("flatCallback",null);F("onSelect",null);F("onClose",null);F("onUpdate",null);F("date",null);F("showsTime",false);F("sortOrder","asc");F("timeFormat","24");F("timeInterval",null);F("electric",true);F("step",2);F("position",null);F("cache",false);F("showOthers",false);F("multiple",null);F("saveDate",null);F("fdowClick",false);F("titleHtml",null);F("noHelp",false);F("noCloseButton",false);F("disableYearNav",false);F("disableFdowChange",false);if(B.weekNumbers){B.disableFdowChange=true;B.firstDay=1}F("disableDrag",false);F("numberMonths",1);if((B.numberMonths>12)||(B.numberMonths<1)){B.numberMonths=1}if(B.numberMonths>1){B.showOthers=false}B.numberMonths=parseInt(B.numberMonths,10);F("controlMonth",1);if((B.controlMonth>B.numberMonths)||(B.controlMonth<1)){B.controlMonth=1}B.controlMonth=parseInt(B.controlMonth,10);F("vertical",false);if(B.monthsInRow>B.numberMonths){B.monthsInRow=B.numberMonths}F("monthsInRow",B.numberMonths);B.monthsInRow=parseInt(B.monthsInRow,10);F("multiple",false);if(B.multiple){B.singleClick=false}F("canType",false);var D=["inputField","displayArea","button"];for(var E in D){if(typeof B[D[E]]=="string"){B[D[E]]=document.getElementById(B[D[E]])}}if(!B.inputField){B.canType=false}else{B.inputField.setAttribute("autocomplete","off")}if(!(B.flat||B.multiple||B.inputField||B.displayArea||B.button)){alert("Calendar.setup '"+B.id+"':\n  Nothing to setup (no fields found).  Please check your code");return false}if(((B.timeInterval)&&((B.timeInterval!==Math.floor(B.timeInterval))||((60%B.timeInterval!==0)&&(B.timeInterval%60!==0))))||(B.timeInterval>360)){alert("'"+B.id+"': timeInterval option can only have the following number of minutes:\n1, 2, 3, 4, 5, 6, 10, 15, 30,  60, 120, 180, 240, 300, 360 ");B.timeInterval=null}if(B.date&&!Date.parse(B.date)){alert("'"+B.id+"' Start Date Invalid: "+B.date+".\nSee date option.\nDefaulting to today.");B.date=null}if(B.saveDate){F("cookiePrefix",window.location.href+"--"+B.button.id);var I=B.cookiePrefix;var G=Zapatec.Utils.getCookie(I);if(G!=null){document.getElementById(B.inputField.id).value=G}}for(var J in B){if(typeof B.constructor.prototype[J]!="undefined"){continue}if(Zapatec.Utils.arrIndexOf(paramsList,J)==-1){alert("Wrong config option: "+J)}}function H(M){var L=M.params;var O=(M.dateClicked||L.electric);if(O&&L.flat){if(typeof L.flatCallback=="function"){if(!L.multiple){L.flatCallback(M)}}else{alert("'"+M.id+"': No flatCallback given -- doing nothing.")}return false}if(O&&L.inputField){L.inputField.value=M.currentDate.print(L.ifFormat);if(typeof L.inputField.onchange=="function"){L.inputField.onchange()}}if(O&&L.displayArea){L.displayArea.innerHTML=M.currentDate.print(L.daFormat)}if(O&&L.singleClick&&M.dateClicked){M.callCloseHandler()}if(O&&typeof L.onUpdate=="function"){L.onUpdate(M)}if(L.saveDate){var N=L.cookiePrefix;Zapatec.Utils.writeCookie(N,L.inputField.value,null,"/",L.saveDate)}}if(B.flat!=null){if(typeof B.flat=="string"){B.flat=document.getElementById(B.flat)}if(!B.flat){alert("Calendar.setup '"+B.id+"':\n  Flat specified but can't find parent.");return false}var A=new Zapatec.Calendar(B.firstDay,B.date,B.onSelect||H);A.id=B.id;A.disableFdowClick=B.disableFdowChange;A.showsOtherMonths=B.showOthers;A.showsTime=B.showsTime;A.time24=(B.timeFormat=="24");A.timeInterval=B.timeInterval;A.params=B;A.weekNumbers=B.weekNumbers;A.sortOrder=B.sortOrder.toLowerCase();A.setRange(B.range[0],B.range[1]);A.setDateStatusHandler(B.dateStatusFunc);A.getDateText=B.dateText;A.numberMonths=B.numberMonths;A.controlMonth=B.controlMonth;A.vertical=B.vertical;A.yearStep=B.step;A.monthsInRow=B.monthsInRow;A.helpButton=!B.noHelp;A.closeButton=!B.noCloseButton;A.yearNav=!B.disableYearNav;if(B.ifFormat){A.setDateFormat(B.ifFormat)}if(B.inputField&&B.inputField.type=="text"&&typeof B.inputField.value=="string"){A.parseDate(B.inputField.value)}if(B.multiple){A.setMultipleDates(B.multiple)}A.create(B.flat);A.show();return A}var K=B.button||B.displayArea||B.inputField;if(B.canType){function C(L){L=L||window.event;if(Zapatec.is_ie){L.cancelBubble=true}else{L.stopPropagation()}}Zapatec.Utils.addEvent(B.inputField,"mousedown",C);Zapatec.Utils.addEvent(B.inputField,"keydown",C);Zapatec.Utils.addEvent(B.inputField,"keypress",C);Zapatec.Utils.addEvent(B.inputField,"keyup",function(M){var O=B.inputField?B.ifFormat:B.daFormat;var L=Date.parseDate(B.inputField.value,O);var N=window.calendar;if(N&&L&&!N.hidden){N.setDate(L)}})}K["on"+B.eventName]=function(){var L=B.inputField||B.displayArea;if((!B.canType||B.inputField!=K)&&K.blur){K.blur()}var O=B.inputField?B.ifFormat:B.daFormat;var Q=false;var P=window.calendar;if(B.canType&&(B.inputField==K)&&P&&!P.hidden){return }if(!(P&&B.cache)){window.calendar=P=new Zapatec.Calendar(B.firstDay,B.date,B.onSelect||H,B.onClose||function(R){if(B.cache){R.hide()}else{R.destroy()}});P.id=B.id;P.disableFdowClick=B.disableFdowChange;P.showsTime=B.showsTime;P.time24=(B.timeFormat=="24");P.timeInterval=B.timeInterval;P.weekNumbers=B.weekNumbers;P.numberMonths=B.numberMonths;P.controlMonth=B.controlMonth;P.vertical=B.vertical;P.monthsInRow=B.monthsInRow;P.historyDateFormat=B.ifFormat||B.daFormat;P.helpButton=!B.noHelp;P.disableDrag=B.disableDrag;P.closeButton=!B.noCloseButton;P.yearNav=!B.disableYearNav;P.sortOrder=B.sortOrder.toLowerCase();Q=true}else{if(B.date){P.setDate(B.date)}P.hide()}if(B.multiple){P.setMultipleDates(B.multiple)}P.showsOtherMonths=B.showOthers;P.yearStep=B.step;P.setRange(B.range[0],B.range[1]);P.params=B;P.setDateStatusHandler(B.dateStatusFunc);P.getDateText=B.dateText;P.setDateFormat(O);if(Q){P.create()}if(L){var M;if(L.value){M=L.value}else{M=L.innerHTML}if(M!=""){var N=Date.parseDate(L.value||L.innerHTML,O);if(N!=null){P.setDate(N)}}}if(!B.position){P.showAtElement(B.button||B.displayArea||B.inputField,B.align)}else{P.showAt(B.position[0],B.position[1])}return false};if(B.closeEventName){K["on"+B.closeEventName]=function(){if(window.calendar){window.calendar.callCloseHandler()}}}return A};function restyle_sidebar(){$j(".jive-sidebar").addClass("jive-box");$j("#jive-thread-content-block-container").removeClass("jive-content-block-container");$j("#jive-thread-content-block-container").addClass("jive-sidebar").addClass("jive-sidebar-actions jive-box-actions");$j("#jive-thread-content-block-container > .jive-box-header").addClass("jive-sidebar-header");$j("#jive-thread-content-block-container > .jive-content-block").addClass("jive-sidebar").addClass("jive-sidebar-body").addClass("jive-sidebar-body-actions").addClass("jive-box-body");$j(".jive-sidebar").removeClass("jive-sidebar-actions").removeClass("jive-box-actions");$j("#jive-action-sidebar").removeClass("jive-sidebar-actions").removeClass("jive-box-actions");$j("#jive-action-sidebar > .jive-box-header").addClass("jive-sidebar-header");$j("#jive-thread-content-block-hider").show()}var dtCh="/";var minYear=1900;var maxYear=2100;function isInteger(B){var A;for(A=0;A<B.length;A++){var C=B.charAt(A);if(((C<"0")||(C>"9"))){return false}}return true}function stripCharsInBag(C,D){var B;var A="";for(B=0;B<C.length;B++){var E=C.charAt(B);if(D.indexOf(E)==-1){A+=E}}return A}function daysInFebruary(A){return(((A%4==0)&&((!(A%100==0))||(A%400==0)))?29:28)}function DaysArray(B){for(var A=1;A<=B;A++){this[A]=31;if(A==4||A==6||A==9||A==11){this[A]=30}if(A==2){this[A]=29}}return this}function isDate(D){var A=DaysArray(12);var E=D.indexOf(dtCh);var C=D.indexOf(dtCh,E+1);var H=D.substring(0,E);var G=D.substring(E+1,C);var F=D.substring(C+1);strYr=F;if(G.charAt(0)=="0"&&G.length>1){G=G.substring(1)}if(H.charAt(0)=="0"&&H.length>1){H=H.substring(1)}for(var B=1;B<=3;B++){if(strYr.charAt(0)=="0"&&strYr.length>1){strYr=strYr.substring(1)}}month=parseInt(H);day=parseInt(G);year=parseInt(strYr);if(E==-1||C==-1){return false}if(H.length<1||month<1||month>12){return false}if(G.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>A[month]){return false}if(F.length!=4||year==0||year<minYear||year>maxYear){return false}if(D.indexOf(dtCh,C+1)!=-1||isInteger(stripCharsInBag(D,dtCh))==false){return false}return true}new function(E){var D=E.separator||"&";var C=E.spaces===false?false:true;var A=E.suffix===false?"":"[]";var G=E.prefix===false?false:true;var B=G?E.hash===true?"#":"?":"";var F=E.numbers===false?false:true;jQuery.query=new function(){var H=function(M,L){return M!=undefined&&M!==null&&(!!L?M.constructor==L:true)};var I=function(Q){var L,P=/\[([^[]*)\]/g,M=/^([^[]+)(\[.*\])?$/.exec(Q),N=M[1],O=[];while(L=P.exec(M[2])){O.push(L[1])}return[N,O]};var K=function(R,Q,P){var S,O=Q.shift();if(typeof R!="object"){R=null}if(O===""){if(!R){R=[]}if(H(R,Array)){R.push(Q.length==0?P:K(null,Q.slice(0),P))}else{if(H(R,Object)){var N=0;while(R[N++]!=null){}R[--N]=Q.length==0?P:K(R[N],Q.slice(0),P)}else{R=[];R.push(Q.length==0?P:K(null,Q.slice(0),P))}}}else{if(O&&O.match(/^\s*[0-9]+\s*$/)){var M=parseInt(O,10);if(!R){R=[]}R[M]=Q.length==0?P:K(R[M],Q.slice(0),P)}else{if(O){var M=O.replace(/^\s*|\s*$/g,"");if(!R){R={}}if(H(R,Array)){var L={};for(var N=0;N<R.length;++N){L[N]=R[N]}R=L}R[M]=Q.length==0?P:K(R[M],Q.slice(0),P)}else{return P}}}return R};var J=function(L){var M=this;M.keys={};if(L.queryObject){jQuery.each(L.get(),function(N,O){M.SET(N,O)})}else{jQuery.each(arguments,function(){var N=""+this;N=N.replace(/^[?#]/,"");N=N.replace(/[;&]$/,"");if(C){N=N.replace(/[+]/g," ")}jQuery.each(N.split(/[&;]/),function(){var O=decodeURIComponent(this.split("=")[0]||"");var P=decodeURIComponent(this.split("=")[1]||"");if(!O){return }if(F){if(/^[+-]?[0-9]+\.[0-9]*$/.test(P)){P=parseFloat(P)}else{if(/^[+-]?[0-9]+$/.test(P)){P=parseInt(P,10)}}}P=(!P&&P!==0)?true:P;if(P!==false&&P!==true&&typeof P!="number"){P=P}M.SET(O,P)})})}return M};J.prototype={queryObject:true,has:function(L,M){var N=this.get(L);return H(N,M)},GET:function(M){if(!H(M)){return this.keys}var L=I(M),N=L[0],P=L[1];var O=this.keys[N];while(O!=null&&P.length!=0){O=O[P.shift()]}return typeof O=="number"?O:O||""},get:function(L){var M=this.GET(L);if(H(M,Object)){return jQuery.extend(true,{},M)}else{if(H(M,Array)){return M.slice(0)}}return M},SET:function(M,R){var O=!H(R)?null:R;var L=I(M),N=L[0],Q=L[1];var P=this.keys[N];this.keys[N]=K(P,Q.slice(0),O);return this},set:function(L,M){return this.copy().SET(L,M)},REMOVE:function(L){return this.SET(L,null).COMPACT()},remove:function(L){return this.copy().REMOVE(L)},EMPTY:function(){var L=this;jQuery.each(L.keys,function(M,N){delete L.keys[M]});return L},load:function(L){var N=L.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1");var M=L.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");return new J(L.length==M.length?"":M,L.length==N.length?"":N)},empty:function(){return this.copy().EMPTY()},copy:function(){return new J(this)},COMPACT:function(){function L(O){var N=typeof O=="object"?H(O,Array)?[]:{}:O;if(typeof O=="object"){function M(R,P,Q){if(H(R,Array)){R.push(Q)}else{R[P]=Q}}jQuery.each(O,function(P,Q){if(!H(Q)){return true}M(N,P,L(Q))})}return N}this.keys=L(this.keys);return this},compact:function(){return this.copy().COMPACT()},toString:function(){var N=0,R=[],Q=[],M=this;var O=function(S){S=S+"";if(C){S=S.replace(/ /g,"+")}return encodeURIComponent(S)};var L=function(S,T,U){if(!H(U)||U===false){return }var V=[O(T)];if(U!==true){V.push("=");V.push(O(U))}S.push(V.join(""))};var P=function(T,S){var U=function(V){return !S||S==""?[V].join(""):[S,"[",V,"]"].join("")};jQuery.each(T,function(V,W){if(typeof W=="object"){P(W,U(V))}else{L(Q,U(V),W)}})};P(this.keys);if(Q.length>0){R.push(B)}R.push(Q.join(D));return R.join("")}};return new J(location.search,location.hash)}}(jQuery.query||{});if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());(function(A){A.fn.select_autocomplete=function(B){B=B||{};var C={minChars:0,width:310,matchContains:true,autoFill:false,formatItem:function(F,E,D){return F.name},formatMatch:function(F,E,D){return F.name},formatResult:function(D){return D.name}};B=A.extend(C,B);return this.each(function(){var E=A(this),D=[],F=A('<input type="text" />');if(this.tagName.toLowerCase()!="select"){return }E.children("option").each(function(){var G=A(this);if(G.val()!=""){D.push({name:G.html(),value:G.val()})}});E.after(F);B.data=D;F.autocomplete(D,B);F.result(function(H,G,I){A(E.find("option[value="+G.value+"]")[0]).attr("selected",true)});F.blur(function(){if(this.value==""){A(E.find("option[value=]")[0]).attr("selected",true)}if(this.value!=E[0].options[E[0].selectedIndex].text){F.val(E[0].options[E[0].selectedIndex].text)}});E.hide()})}})(jQuery);(function(A){A.fn.extend({autocomplete:function(B,C){var D=typeof B=="string";C=A.extend({},A.Autocompleter.defaults,{url:D?B:null,data:D?null:B,delay:D?A.Autocompleter.defaults.delay:10,max:C&&!C.scroll?10:150},C);C.highlight=C.highlight||function(E){return E};C.formatMatch=C.formatMatch||C.formatItem;return this.each(function(){new A.Autocompleter(this,C)})},result:function(B){return this.bind("result",B)},search:function(B){return this.trigger("search",[B])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(B){return this.trigger("setOptions",[B])},unautocomplete:function(){return this.trigger("unautocomplete")}});A.Autocompleter=function(L,G){var C={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var B=A(L).attr("autocomplete","off").addClass(G.inputClass);var J;var P="";var M=A.Autocompleter.Cache(G);var E=0;var U;var X={mouseDownOnSelect:false};var R=A.Autocompleter.Select(G,L,D,X);var W;A.browser.opera&&A(L.form).bind("submit.autocomplete",function(){if(W){W=false;return false}});B.bind((A.browser.opera?"keypress":"keydown")+".autocomplete",function(Y){U=Y.keyCode;switch(Y.keyCode){case C.UP:Y.preventDefault();if(R.visible()){R.prev()}else{T(0,true)}break;case C.DOWN:Y.preventDefault();if(R.visible()){R.next()}else{T(0,true)}break;case C.PAGEUP:Y.preventDefault();if(R.visible()){R.pageUp()}else{T(0,true)}break;case C.PAGEDOWN:Y.preventDefault();if(R.visible()){R.pageDown()}else{T(0,true)}break;case G.multiple&&A.trim(G.multipleSeparator)==","&&C.COMMA:case C.TAB:case C.RETURN:if(D()){Y.preventDefault();W=true;return false}break;case C.ESC:R.hide();break;default:clearTimeout(J);J=setTimeout(T,G.delay);break}}).focus(function(){E++;if(E++>1&&!R.visible()){T(0,true)}}).blur(function(){E=0;if(!X.mouseDownOnSelect){S()}}).click(function(){if(E++>1&&!R.visible()){T(0,true)}}).bind("search",function(){var Y=(arguments.length>1)?arguments[1]:null;function Z(d,c){var a;if(c&&c.length){for(var b=0;b<c.length;b++){if(c[b].result.toLowerCase()==d.toLowerCase()){a=c[b];break}}}if(typeof Y=="function"){Y(a)}else{B.trigger("result",a&&[a.data,a.value])}}A.each(H(B.val()),function(a,b){F(b,Z,Z)})}).bind("flushCache",function(){M.flush()}).bind("setOptions",function(){A.extend(G,arguments[1]);if("data" in arguments[1]){M.populate()}}).bind("unautocomplete",function(){R.unbind();B.unbind();A(L.form).unbind(".autocomplete")});function D(){var Z=R.selected();if(!Z){return false}var Y=Z.result;P=Y;if(G.multiple){var a=H(B.val());if(a.length>1){Y=a.slice(0,a.length-1).join(G.multipleSeparator)+G.multipleSeparator+Y}Y+=G.multipleSeparator}B.val(Y);V();B.trigger("result",[Z.data,Z.value]);return true}function T(a,Z){if(U==C.DEL){R.hide();return }var Y=B.val();if(!Z&&Y==P){return }P=Y;Y=I(Y);if(Y.length>=G.minChars){B.addClass(G.loadingClass);if(!G.matchCase){Y=Y.toLowerCase()}F(Y,K,V)}else{N();R.hide()}}function H(Z){if(!Z){return[""]}var a=Z.split(G.multipleSeparator);var Y=[];A.each(a,function(b,c){if(A.trim(c)){Y[b]=A.trim(c)}});return Y}function I(Y){if(!G.multiple){return Y}var Z=H(Y);return Z[Z.length-1]}function Q(Y,Z){if(G.autoFill&&(I(B.val()).toLowerCase()==Y.toLowerCase())&&U!=C.BACKSPACE){B.val(B.val()+Z.substring(I(P).length));A.Autocompleter.Selection(L,P.length,P.length+Z.length)}}function S(){clearTimeout(J);J=setTimeout(V,200)}function V(){var Y=R.visible();R.hide();clearTimeout(J);N();if(G.mustMatch){B.search(function(Z){if(!Z){if(G.multiple){var a=H(B.val()).slice(0,-1);B.val(a.join(G.multipleSeparator)+(a.length?G.multipleSeparator:""))}else{B.val("")}}})}if(Y){A.Autocompleter.Selection(L,L.value.length,L.value.length)}}function K(Z,Y){if(Y&&Y.length&&E){N();R.display(Y,Z);Q(Z,Y[0].value);R.show()}else{V()}}function F(Z,b,Y){if(!G.matchCase){Z=Z.toLowerCase()}var a=M.load(Z);if(a&&a.length){b(Z,a)}else{if((typeof G.url=="string")&&(G.url.length>0)){var c={timestamp:+new Date()};A.each(G.extraParams,function(d,e){c[d]=typeof e=="function"?e():e});A.ajax({mode:"abort",port:"autocomplete"+L.name,dataType:G.dataType,url:G.url,data:A.extend({q:I(Z),limit:G.max},c),success:function(e){var d=G.parse&&G.parse(e)||O(e);M.add(Z,d);b(Z,d)}})}else{R.emptyList();Y(Z)}}}function O(b){var Y=[];var a=b.split("\n");for(var Z=0;Z<a.length;Z++){var c=A.trim(a[Z]);if(c){c=c.split("|");Y[Y.length]={data:c,value:c[0],result:G.formatResult&&G.formatResult(c,c[0])||c[0]}}}return Y}function N(){B.removeClass(G.loadingClass)}};A.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(B){return B[0]},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(C,B){return C.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+B.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180};A.Autocompleter.Cache=function(C){var F={};var D=0;function H(K,J){if(!C.matchCase){K=K.toLowerCase()}var I=K.indexOf(J);if(I==-1){return false}return I==0||C.matchContains}function G(J,I){if(D>C.cacheLength){B()}if(!F[J]){D++}F[J]=I}function E(){if(!C.data){return false}var J={},I=0;if(!C.url){C.cacheLength=1}J[""]=[];for(var L=0,K=C.data.length;L<K;L++){var O=C.data[L];O=(typeof O=="string")?[O]:O;var N=C.formatMatch(O,L+1,C.data.length);if(N===false){continue}var M=N.charAt(0).toLowerCase();if(!J[M]){J[M]=[]}var P={value:N,data:O,result:C.formatResult&&C.formatResult(O)||N};J[M].push(P);if(I++<C.max){J[""].push(P)}}A.each(J,function(Q,R){C.cacheLength++;G(Q,R)})}setTimeout(E,25);function B(){F={};D=0}return{flush:B,add:G,populate:E,load:function(L){if(!C.cacheLength||!D){return null}if(!C.url&&C.matchContains){var K=[];for(var I in F){if(I.length>0){var M=F[I];A.each(M,function(O,N){if(H(N.value,L)){K.push(N)}})}}return K}else{if(F[L]){return F[L]}else{if(C.matchSubset){for(var J=L.length-1;J>=C.minChars;J--){var M=F[L.substr(0,J)];if(M){var K=[];A.each(M,function(O,N){if(H(N.value,L)){K[K.length]=N}});return K}}}}}return null}}};A.Autocompleter.Select=function(E,J,L,P){var I={ACTIVE:"ac_over"};var K,F=-1,R,M="",S=true,C,O;function N(){if(!S){return }C=A("<div/>").hide().addClass(E.resultsClass).css("position","absolute").appendTo(document.body);O=A("<ul/>").appendTo(C).mouseover(function(T){if(Q(T).nodeName&&Q(T).nodeName.toUpperCase()=="LI"){F=A("li",O).removeClass(I.ACTIVE).index(Q(T));A(Q(T)).addClass(I.ACTIVE)}}).click(function(T){A(Q(T)).addClass(I.ACTIVE);L();J.focus();return false}).mousedown(function(){P.mouseDownOnSelect=true}).mouseup(function(){P.mouseDownOnSelect=false});if(E.width>0){C.css("width",E.width)}S=false}function Q(U){var T=U.target;while(T&&T.tagName!="LI"){T=T.parentNode}if(!T){return[]}return T}function H(T){K.slice(F,F+1).removeClass(I.ACTIVE);G(T);var V=K.slice(F,F+1).addClass(I.ACTIVE);if(E.scroll){var U=0;K.slice(0,F).each(function(){U+=this.offsetHeight});if((U+V[0].offsetHeight-O.scrollTop())>O[0].clientHeight){O.scrollTop(U+V[0].offsetHeight-O.innerHeight())}else{if(U<O.scrollTop()){O.scrollTop(U)}}}}function G(T){F+=T;if(F<0){F=K.size()-1}else{if(F>=K.size()){F=0}}}function B(T){return E.max&&E.max<T?E.max:T}function D(){O.empty();var U=B(R.length);for(var V=0;V<U;V++){if(!R[V]){continue}var W=E.formatItem(R[V].data,V+1,U,R[V].value,M);if(W===false){continue}var T=A("<li/>").html(E.highlight(W,M)).addClass(V%2==0?"ac_even":"ac_odd").appendTo(O)[0];A.data(T,"ac_data",R[V])}K=O.find("li");if(E.selectFirst){K.slice(0,1).addClass(I.ACTIVE);F=0}if(A.fn.bgiframe){O.bgiframe()}}return{display:function(U,T){N();R=U;M=T;D()},next:function(){H(1)},prev:function(){H(-1)},pageUp:function(){if(F!=0&&F-8<0){H(-F)}else{H(-8)}},pageDown:function(){if(F!=K.size()-1&&F+8>K.size()){H(K.size()-1-F)}else{H(8)}},hide:function(){C&&C.hide();K&&K.removeClass(I.ACTIVE);F=-1},visible:function(){return C&&C.is(":visible")},current:function(){return this.visible()&&(K.filter("."+I.ACTIVE)[0]||E.selectFirst&&K[0])},show:function(){var V=A(J).offset();C.css({width:typeof E.width=="string"||E.width>0?E.width:A(J).width(),top:V.top+J.offsetHeight,left:V.left}).show();if(E.scroll){O.scrollTop(0);O.css({maxHeight:E.scrollHeight,overflow:"auto"});if(A.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var T=0;K.each(function(){T+=this.offsetHeight});var U=T>E.scrollHeight;O.css("height",U?E.scrollHeight:T);if(!U){K.width(O.width()-parseInt(K.css("padding-left"))-parseInt(K.css("padding-right")))}}}},selected:function(){var T=K&&K.filter("."+I.ACTIVE).removeClass(I.ACTIVE);return T&&T.length&&A.data(T[0],"ac_data")},emptyList:function(){O&&O.empty()},unbind:function(){C&&C.remove()}}};A.Autocompleter.Selection=function(D,E,C){if(D.createTextRange){var B=D.createTextRange();B.collapse(true);B.moveStart("character",E);B.moveEnd("character",C);B.select()}else{if(D.setSelectionRange){D.setSelectionRange(E,C)}else{if(D.selectionStart){D.selectionStart=E;D.selectionEnd=C}}}D.focus()}})(jQuery);var pageElement=Array();var paginatorId="";var currentPage=1;var allItems=0;var lastPage=1;var startPage=1;var itemsPerPage=8;var firstPageSymbol="<<";var previousPageSymbol="<";var nextPageSymbol=">";var lastPageSymbol=">>";var separator=" ";var paginatorPosition="top";var paginatorStyle=1;var enablePageOfOption=false;var enableGoToPage=false;var textGoToPage="Jump to";var enableSelectNoItems=false;var textSelectNoItems="Items Per Page";var paginatorValues=Array(5,10,15,20,25,30);var anchorLink="javascript:void(0);";var showIfSinglePage=false;jQuery.fn.extend({pagination:function(){paginatorId=this;switch(paginatorPosition){case"top":paginatorId.before('<div class="paginator"></div>');break;case"bottom":paginatorId.after('<div class="paginator"></div>');break;case"both":paginatorId.before('<div class="paginator"></div>');paginatorId.after('<div class="paginator"></div>');break;default:paginatorId.after('<div class="paginator"></div>')}initPaginator()},depagination:function(){$j(".paginator").remove();paginatorId.children().show()}});function initPaginator(){if(itemsPerPage<1){itemsPerPage=5}allItems=paginatorId.children().length;if(allItems%itemsPerPage==0){lastPage=parseInt(allItems/itemsPerPage)}else{lastPage=parseInt(allItems/itemsPerPage)+1}if((startPage<1)||(startPage>lastPage)){startPage=1}if(!showIfSinglePage){if(lastPage>1){appendContent(startPage,1)}}else{appendContent(startPage,1)}}function appendContent(B,A){if(B<0){if(B==-1){B=currentPage-1}else{B=currentPage+1}}currentPage=B;till=(currentPage-1)*itemsPerPage;if(!A){paginatorId.fadeOut("medium",function(){createPaginator();paginatorId.children().hide();paginatorId.children().slice(till,itemsPerPage+till).show();paginatorId.fadeIn("medium")})}else{createPaginator();paginatorId.children().hide();paginatorId.children().slice(till,itemsPerPage+till).show()}}function createPaginator(){$j(".paginator").html("");var H="";var G="";var E="";var B="";var F=" Page "+currentPage+" of "+lastPage+" Page(s) ";var D=" "+textGoToPage+' <select onchange="appendContent(this.value);" >';var A=" "+textSelectNoItems+' <select onchange="itemsPerPage=Number(this.value);initPaginator();" >';for(var C=0;C<paginatorValues.length;C++){if(itemsPerPage==paginatorValues[C]){A+='<option value="'+paginatorValues[C]+'" selected="selected">'+paginatorValues[C]+"</option>"}else{A+='<option value="'+paginatorValues[C]+'">'+paginatorValues[C]+"</option>"}}A+="</select>";if(currentPage==1){style='<a href="'+anchorLink+'" class="inactive" title="First Page">'+firstPageSymbol+"</a>"+separator;H=G=style;style='<a href="'+anchorLink+'" class="inactive" title="Previous Page">'+previousPageSymbol+"</a>"+separator;H+=style;G+=style;E+=style;B+=style}else{style='<a href="'+anchorLink+'" class="active" onclick="appendContent(1);" title="First Page">'+firstPageSymbol+"</a>"+separator;H=G=style;style='<a href="'+anchorLink+'" class="active" onclick="appendContent(-1);" title="Previous Page">'+previousPageSymbol+"</a>"+separator;H+=style;G+=style;E+=style;B+=style}for(var C=1;C<=lastPage;C++){if(C==currentPage){H+='<a href="'+anchorLink+'" class="inactive" title="Page '+C+'">'+C+"</a>"+separator;G+='<a href="'+anchorLink+'" class="inactive" title="Page '+C+'">'+C+"/"+lastPage+"</a>"+separator;E+='<a href="'+anchorLink+'" class="inactive" title="Page '+C+'">'+C+"</a>"+separator;D+='<option value="'+C+'" selected="selected">'+C+"</option>"}else{style='<a href="'+anchorLink+'" class="active" onclick="appendContent('+C+');" title="Page '+C+'">'+C+"</a>"+separator;H+=style;E+=style;D+='<option value="'+C+'">'+C+"</option>"}}D+="</select>";if(currentPage==lastPage){style='<a href="'+anchorLink+'" class="inactive" title="Next Page">'+nextPageSymbol+"</a>";H+=style;G+=style;E+=style;B+=style;style=separator+'<a href="'+anchorLink+'" class="inactive" title="Last Page">'+lastPageSymbol+"</a>";H+=style;G+=style}else{style='<a href="'+anchorLink+'" class="active" onclick="appendContent(-2);" title="Next Page">'+nextPageSymbol+"</a>";H+=style;G+=style;E+=style;B+=style;style=separator+'<a href="'+anchorLink+'" class="active" onclick="appendContent('+lastPage+');" title="Last Page">'+lastPageSymbol+"</a>";H+=style;G+=style}switch(paginatorStyle){case 1:style=H;break;case 2:style=G;break;case 3:style=E;break;case 4:style=B;break;default:style=H}if(enablePageOfOption){style+='<span class="inactive" title="Page Information">'+F+"</span>"}if(enableGoToPage){style+='<span class="inactive" title="Select Page">'+D+"</span>"}if(enableSelectNoItems){style+='<span class="inactive" title="Select no. of items per page">'+A+"</span>"}$j(".paginator").html(style)}function RoadtestMultiSelector(D,B,E,C,A){this.list_target=D;this.addedElements=[];this.hasImage=A;if(E){this.count=E}else{this.count=0}this.id=0;if(B){this.max=B}else{this.max=-1}this.removeStr=C;this.addElement=function(F){if(F.tagName=="INPUT"&&F.type=="file"){F.name="attachFile";F.id="attachFile_"+this.count;F.multi_selector=this;F.onchange=function(){if(!this.value||this.value==""){return }if(this.value.indexOf("jpeg")>-1||this.value.indexOf("jpg")>-1||this.value.indexOf("gif")>-1||this.value.indexOf("bmp")>-1){if(this.multi_selector.hasImage==true){alert("too many images");this.value="";return false}else{this.multi_selector.hasImage=true}}this.multi_selector.addedElements.push(F.id);D.style.display="block";var G=document.createElement("input");G.type="file";this.parentNode.insertBefore(G,this);this.multi_selector.addElement(G);this.multi_selector.addListRow(this);this.style.position="absolute";this.style.left="-1000px"};if(this.max!=-1&&this.count>=this.max){F.disabled=true;F.style.display="none";document.getElementById("jive-attach-maxsize").style.display="none"}else{if(this.max!=-1&&this.count>=this.max-1){document.getElementById("jive-attach-maxfiles").style.display=""}}this.count++;this.current_element=F}else{alert("Error: not a file input element")}};this.addListRow=function(I){var J=document.createElement("div");J.className="jive-attach-item";J.id="jive-attach-item"+I.id.slice("attachFile_".length);var H=document.createElement("img");H.src=_jive_base_url+"/images/attach-7x11.gif";H.alt="";H.width="7";H.height="11";H.border="0";H.style.value="margin: 3px 1px 0px 0px;";var N=document.createElement("a");N.href="#";N.innerHTML=this.removeStr;J.element=I;J.appendChild(H);J.appendChild(document.createTextNode(" "));N.onclick=function(){this.parentNode.element.parentNode.removeChild(this.parentNode.element);this.parentNode.parentNode.removeChild(this.parentNode);var Q=this.parentNode.element.id;var O=this.parentNode.element.multi_selector.addedElements;for(var P=0;P<O.length;P++){if(O[P]==Q&&O.length==1){this.parentNode.element.multi_selector.addedElements=[]}else{if(O[P]==Q){O.splice(P,P)}}}this.parentNode.element.multi_selector.count--;if(this.parentNode.element.multi_selector.count<2){D.style.display="none"}this.parentNode.element.multi_selector.current_element.style.display="";this.parentNode.element.multi_selector.current_element.disabled=false;document.getElementById("jive-attach-maxsize").style.display="";return false};var F=navigator.userAgent;var G=F.indexOf("Windows")!=-1;var L=!G&&F.indexOf("Mac")!=-1;var M=I.value;var K=M;if(K.indexOf("\\")!=-1&&G){K=K.substring(K.lastIndexOf("\\")+1)}else{if(K.indexOf("/")!=-1){K=K.substring(K.lastIndexOf("/")+1)}else{if(K.indexOf(":")!=-1&&L){K=K.substring(K.lastIndexOf(":")+1)}}}nameDiv=J.appendChild(document.createElement("span"));$j(nameDiv).html(K);space=J.appendChild(document.createElement("span"));$j(space).html(" ");J.appendChild(N);this.list_target.appendChild(J)};this.removeAttachment=function(F,I){var G=document.createElement("input");G.type="hidden";G.name="removeAttachID";G.value=I;var H=document.getElementById(F);a_element=$j("li#"+F+" > a > img");if($j(a_element)){this.hasImage=false}H.parentNode.replaceChild(G,H);this.count--;if(this.count<2){D.style.display="none"}this.current_element.style.display="";this.current_element.disabled=false;document.getElementById("jive-attach-maxsize").style.display=""};this.haveAttachmentsBeenAdded=function(){return this.addedElements.length>0}}$j(document).ready(function(){$j('a[href*="index.jspa?view=roadTest"]').attr("href","/community/roadTests/")})
;
ProductSearch=function(F,D,I,G,A,E,B,H,C,J){this.loadingContent=F;this.popupId="product-link-info-wrapper";this.popupContentId="product-link-info";this.addToListIcon=D;this.addToListAlt=I;this.productNotFoundTitle=G;this.zeroResults=A;this.multipleResultsTitle=E;this.closeLink=B;this.engineID=H;this.isLoggedIn=C;this.i18n=J;this.multiResultHTML=""};$j.extend(ProductSearch.prototype,{getSearchResults:function(E,C,F,D){if(F==""&&D==""){return }var H=E.indexOf("-multi")>-1;var A=this;var G=getSKUforCountry(_jive_country,F,D,H);if(H){var B=$j("#"+A.popupContentId);B.html(this.loadingContent)}else{this.showPopup(C,E)}console.log("searching for "+G);OpenSearchQuery.getSearchResultsByEngineID(A.engineID,G,{callback:function(J){var I=$j("#"+A.popupContentId);var M=getProductResultsJSON(J.results);var L={country:_jive_country,sku:G,farnellCode:F,newarkCode:D,isLoggedIn:A.isLoggedIn};var K=getProductHTML(E,M,A.i18n,L);I.html(K);console.log(M.length);if(M.length>1){$j(".pf-prod-row>tbody>tr>td").live("mouseover",function(){$j(this).parent().addClass("prod-multi-hover")}).live("mouseout",function(){$j(this).parent().removeClass("prod-multi-hover")})}else{if(M.length==1){A.getDatasheetsForSKU(A.i18n,_jive_country,G,A.isLoggedIn,E);e14GetRoadTestScore("sku",G,"#roadTestProduct");e14OshwCheck("sku",G,"#oshwProduct")}}pfTrackEvent(true,_jive_current_user.username,"event61","productDetailPopup-"+E)},errorHandler:function(J,I){console.log("ERROR - #jive-search-opensearch-"+A.engineID+"-"+randomID+"-resultcount")}})},getDatasheetsForSKU:function(I,E,F,D,B){var H=this;var G="https://api.element14.com/catalog/products?term=id%3A**SKU**&storeInfo.id=**STORE**&resultsSettings.offset=0&resultsSettings.numberOfResults=1&resultsSettings.responseGroup=medium&callInfo.responseDataFormat=JSON&callinfo.apiKey=6ayk7fwykyakewdebxfewehr";G=G.replace("**SKU**",F);G=G.replace("**STORE**",getStoreForCountryCode(E));var C=G;$j("#product-tab-datasheets-progress").html("("+I.lblSearching+")");$j("#product-panel-datasheets").html('<table border=0 cellpadding=2 cellspacing=0 width=385 style="border-top:1px solid #ffffff"><tr class="pf-product-info-attr-row-even"><td class="pf-product-info-attr-name"><br>'+I.lblSearchingProper+"...<br><br></td></tr></table>");var A=setTimeout(function(){H.datasheetError(I)},10000);$j.ajax({url:C,success:function(J){clearTimeout(A);pfFormatProductDatasheets(I,J,D,B)},jsonp:"callInfo.callback",dataType:"jsonp"})},datasheetError:function(A){$j("#product-tab-datasheets-progress").html("(err)");$j("#product-panel-datasheets").html('<table border=0 cellpadding=2 cellspacing=0 width=385 style="border-top:1px solid #ffffff"><tr class="pf-product-info-attr-row-even"><td class="pf-product-info-attr-name"><br>'+A.lblResultsProblem+"<br><br></td></tr></table>")},showMultiSearchResults:function(B,D,E,C){var A=this;A.getSearchResults("embedded-link-auto",B,E,C)},showPopup:function(C,D){this.createPopup();var B=$j("#"+this.popupId);var A=$j("#"+this.popupContentId);A.html(this.loadingContent);var E=$j(C).offset();if(E.left+385>$j(window).width()){B.css("left",E.left-385)}else{B.css("left",E.left)}if(D=="drawer-part-list"){B.css("top",40);B.css("left",105);B.css("position","fixed")}else{if(D=="embedded-link-preview"){B.css("top",E.top+20);B.css("position","absolute")}else{B.css("top",E.top+20);B.css("position","absolute")}}if($j.browser.msie){$j(B).show()}else{$j(B).fadeIn("fast")}},closePopup:function(){$j("#"+this.popupId).fadeOut("fast")},createPopup:function(){if($j("#"+this.popupId).length==0){var A="<div id="+this.popupId+' class="jive-product-info-popup" style="display:none">';A=A+"<div id="+this.popupContentId+' class="clearfix">';A=A+"</div></div>";$j("body").append(A)}},enableProductLinkIfAvailable:function(D,C,B){var A=this;var E=getSKUforCountry(_jive_country,C,B,false);if(E==""||E=="null"){return }OpenSearchQuery.getSearchResultsByEngineID(A.engineID,E,{callback:function(G){try{var J=G.results;var H=J.length;if(H>0){for(var F=0;F<H;F++){if(J[F].title!=A.productNotFoundTitle){$j("#"+D+"-linked").show();$j("#"+D+"-unlinked").hide();return }}}}catch(I){}},errorHandler:function(G,F){console.log("ERROR - #jive-search-opensearch-"+A.engineID+"-"+randomID+"-resultcount")}})}})
;
function JiveContainerAutoComplete(j,n,b,k,d,i,o,l,c){var h=this;var e=jive.rest.url("/places/types/ordered");var a=jive.rest.url("/places/search/");this.showDetail="true";this.query=j;this.resultFilterBeanName=n;this.allowedContainerIds=b;this.rootContainerID=k;this.rootContainerType=d;this.target=i;this.clickStrategy=o;this.showDescription=l;this.noResultsText=c;var g;$j(".search-results-scrollable").scroll(function(){h.doScroll($j(this))});this.addListEntries=function m(p,r){for(var t=0;t<p.length;t++){var q=p[t];var s=$j("<li class='clearfix' id='"+q.objectType+"_"+q.ID+"'></li>");s.append(this.createObjectLink(q));r.append(s);r.removeClass("jive-striped");r.find("li:even").addClass("jive-striped")}};this.createObjectLink=function f(q){var p;if(q.disabledPlace=="true"){p=$j("<span></span>")}else{var r=this.showDetail=="true"?"jivecontainerTT-hover-container":"";if(q.onClickJs&&q.onClickJs.length>0){p=$j("<a href='#' class='"+r+" no-underline' onclick='"+q.onClickJs+"'); return false;'></a>")}else{p=$j("<a href='"+q.objectURL+"' class='"+r+" no-underline'></a>")}}var t=$j("<span class='jive-places-name'></span>");t.text(q.name);var u=$j("<span class='"+q.iconCssClass+"'></span>");p.append(u);p.append(t);if(this.showDetail=="true"){p.bind("mouseover",q,function(w){var v=w.data;quickcontainersummary.getContainerTooltip(v.ID,v.objectType)});p.mouseout(function(){quickcontainersummary.cancelTooltip()})}if(this.showDescription=="true"){var s=$j("<span class='jive-description'>"+q.description+"</span>");return $j.merge(p,s)}else{return p}};this.clearPlaces=function(){$j(this.target).empty()};this.loadPlaces=function(p,q){this.addListEntries(p,$j(q))};this.doLoadExternalPlaces=function(r){var p=r.placesCollection;if(!p||p.length==0){$j(this.target).append("<li>"+this.noResultsText+"</li>")}for(var q=0;q<p.length;q++){var s=p[q].places;h.loadPlaces(s,this.target)}};this.loadExternalPlaces=function(p){if(!g){$j.getJSON(e,function(q){g=q.placetype})}h.doLoadExternalPlaces(p)};this.doScroll=function(p){if(p[0].scrollHeight-p.scrollTop()==p.outerHeight()){var q=p.find("li").length;if(q%30==0){var r={};if(this.resultFilterBeanName){r.resultFilterBeanName=this.resultFilterBeanName}if(this.allowedContainerIds){r.allowedContainerIds=this.allowedContainerIds}if(this.rootContainerID){r.rootContainerID=this.rootContainerID}if(this.rootContainerType){r.rootContainerType=this.rootContainerType}if(q){r.startPos=q}if(this.maxReturned){r.maxReturned=this.maxReturned}if(this.clickStrategy){r.clickStrategy=this.clickStrategy}$j.getJSON(a+j,r,function(s){$j.each(s.placesCollection,function(t,u){h.loadPlaces(u.places,h.target)})})}}}};
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.user=="undefined"){jive.user={}}if(typeof jive.user.soy=="undefined"){jive.user.soy={}}jive.user.soy.avatar=function(a,c){var b=c||new soy.StringBuilder();if(!a.user.anonymous){b.append('<a href="');jive.app.url({path:"/people/"+soy.$$escapeHtml(a.user.username)},b);b.append('" class="jiveTT-hover-user" onmouseover="quickuserprofile.getUserProfileTooltip(',soy.$$escapeHtml(a.user.ID),');" onmouseout="quickuserprofile.cancelTooltip();">');if(!a.user.enabled){b.append('<img class="jive-avatar" src="');jive.resource.url({path:"/images/jive-avatar-disabled.png"},b);b.append('" width="',soy.$$escapeHtml(a.size),'" height="',soy.$$escapeHtml(a.size),'" border="0"/>')}else{b.append('<img class="jive-avatar" src="');jive.app.url({path:"/people/"+soy.$$escapeHtml(a.user.username)},b);b.append("/avatar/",soy.$$escapeHtml(a.size),".png?a=",soy.$$escapeHtml(a.user.avatarID),'" border="0" height="',soy.$$escapeHtml(a.size),'" width="',soy.$$escapeHtml(a.size),'" alt="',soy.$$escapeHtml(a.user.displayName),'"/>')}b.append("</a>")}else{b.append('<img class="jive-avatar" src="');jive.app.url({path:"/people/guest/avatar"},b);b.append("/",soy.$$escapeHtml(a.size),'.png" border="0" height="',soy.$$escapeHtml(a.size),'" width="',soy.$$escapeHtml(a.size),'" alt="',soy.$$escapeHtml(a.user.displayName),'" title="',soy.$$escapeHtml(a.user.displayName),'"/>')}if(!c){return b.toString()}};jive.user.soy.displayNameLink=function(a,c){var b=c||new soy.StringBuilder();if(!a.user.anonymous){b.append('<a href="');jive.app.url({path:"/people/"+soy.$$escapeHtml(a.user.username)},b);b.append('" onmouseover="quickuserprofile.getUserProfileTooltip(',soy.$$escapeHtml(a.user.ID),');" onmouseout="quickuserprofile.cancelTooltip();" class="jiveTT-hover-user ',(!a.user.enabled)?"jive-user-disabled":"",'">',soy.$$escapeHtml(a.user.displayName),"</a>")}else{b.append("<span>",soy.$$escapeHtml(a.user.displayName),"</span>")}if(!c){return b.toString()}};
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.acclaim=="undefined"){jive.acclaim={}}if(typeof jive.acclaim.soy=="undefined"){jive.acclaim.soy={}}jive.acclaim.soy.renderAcclaimModal=function(a,c){var b=c||new soy.StringBuilder();b.append('<div id="jive-acclaim-mini-modal-',soy.$$escapeHtml(a.uniqueKey),'" class="j-mini-modal j-acclaim-mini-modal">',(a.likes==1)?'<h4 id="jive-acclaim-modal-header" class="font-color-meta-light">'+soy.$$escapeHtml(a.likes)+" "+soy.$$escapeHtml(a.i18n.acclaimLikingLiked)+"</h4>":'<h4 id="jive-acclaim-modal-header" class="font-color-meta-light">'+soy.$$escapeHtml(a.likes)+" "+soy.$$escapeHtml(a.i18n.acclaimLikingLikedPlural)+"</h4>",'<a id="j-modal-close" class="j-modal-close-top" href="#">',soy.$$escapeHtml(a.i18n.globalClose),'</a><div class="j-modal-content"><strong class="font-color-normal">',soy.$$escapeHtml(a.i18n.acclaimPeopleLiked),":</strong>");if(a.hasVoted){b.append("<div><strong>");jive.acclaim.soy.displayYou({username:a.youUsername,ID:a.youID,i18n:a.i18n},b);b.append("</strong></div>")}b.append((a.isGuest)?'<div><div id="modal-liked-everyone" class="liked-everyone-list"></div></div>':'<div><strong class="font-color-meta">'+soy.$$escapeHtml(a.i18n.acclaimLikedFriends)+': </strong><div id="modal-liked-friends" class="liked-friends-list"></div></div><div><strong class="font-color-meta">'+soy.$$escapeHtml(a.i18n.acclaimLikedEveryone)+': </strong><div id="modal-liked-everyone" class="liked-everyone-list"></div></div>','<div class="j-modal-tail"></div></div></div>');if(!c){return b.toString()}};jive.acclaim.soy.displayYou=function(a,c){var b=c||new soy.StringBuilder();b.append('<a href="');jive.app.url({path:"/people/"+soy.$$escapeHtml(a.username)},b);b.append('" onmouseover="quickuserprofile.getUserProfileTooltip(',soy.$$escapeHtml(a.ID),');" onmouseout="quickuserprofile.cancelTooltip();" class="jiveTT-hover-user">',soy.$$escapeHtml(a.i18n.acclaimLikedYou),"</a>");if(!c){return b.toString()}};
;
jive.Acclaim=function(e,q){var r=0;var u=0;var z=e.friendsRange;var C=e.everyoneRange;var a,m,y,c;var s;var v;var D;var i;var o;var k;j();function w(E,F){return jive.rest.url("/acclaim/"+E+"/"+F)}function h(){$j.getJSON(w(s,v)+"/scoredisplay",{ratingType:D},function(E){b(E)});return false}function b(F){var E="";if(i){E+=q.acclaimLikingUnlike}else{E+='<span class="jive-icon-sml jive-icon-like"></span> ';E+=q.acclaimLikingLike}$j("#jive-acclaim-likelink-"+k).html(E);$j("#jive-acclaim-likedlink-"+k).html(F)}function n(){x();t();B();$j("#jive-acclaim-mini-modal-"+k).click(function(E){E.stopPropagation()});$j("#jive-acclaim-mini-modal-"+k).show()}function x(){$j(".j-acclaim-mini-modal").remove();return false}function B(){if(!e.isGuest){$j.getJSON(w(s,v)+"/likedlist",{ratingType:D,connectionType:1,start:r,range:z+1},function(F){if(F.user.length==0){$j("#modal-liked-friends").append(q.acclaimLikedNone)}else{var G='<a href="#" id="jive-acclaim-friends-more-'+k+'" class="jive-acclaim-more">'+q.globalMore+"...</a>";for(var E=0;E<F.user.length;E++){if(E==z){$j("#modal-liked-friends").append(", "+G);$j("#jive-acclaim-friends-more-"+k).show();$j("#jive-acclaim-friends-more-"+k).click(function(){a=z;m=z+z;p(1);return false});break}if(E!=0){$j("#modal-liked-friends").append(", ")}$j("#modal-liked-friends").append(jive.user.soy.displayNameLink({user:F.user[E]}))}}})}$j.getJSON(w(s,v)+"/likedlist",{ratingType:D,connectionType:2,start:u,range:C+1},function(F){if(F.user.length==0){$j("#modal-liked-everyone").append(q.acclaimLikedNone)}else{var G='<a href="#" id="jive-acclaim-everyone-more-'+k+'" class="jive-acclaim-more">'+q.globalMore+"...</a>";for(var E=0;E<F.user.length;E++){if(E==C){$j("#modal-liked-everyone").append(", "+G);$j("#jive-acclaim-everyone-more-"+k).show();$j("#jive-acclaim-everyone-more-"+k).click(function(){y=C;c=C+C;p(2);return false});break}if(E!=0){$j("#modal-liked-everyone").append(", ")}$j("#modal-liked-everyone").append(jive.user.soy.displayNameLink({user:F.user[E]}))}}});$j.getJSON(w(s,v)+"/scoredisplay",{ratingType:D},function(F){var E=F+" ";if(F==1){E+=q.acclaimLikingLiked}else{E+=q.acclaimLikingLikedPlural}$j("#jive-acclaim-modal-header").html(E)});return false}function p(E){if(E==1&&!e.isGuest){$j.getJSON(w(s,v)+"/likedlist",{ratingType:D,connectionType:1,start:a,range:m+1},function(G){if(G.user.length==0){$j("#modal-liked-friends").append(q.acclaimLikedNone)}else{var H='<a href="#" id="jive-acclaim-friends-more-'+k+'" class="jive-acclaim-more">'+q.globalMore+"...</a>";$j("#jive-acclaim-friends-more-"+k).remove();for(var F=0;F<G.user.length;F++){if(F==z){$j("#modal-liked-friends").append(", "+H);$j("#jive-acclaim-friends-more-"+k).show();$j("#jive-acclaim-friends-more-"+k).click(function(){a=m;m=m+z;p(1);return false});break}if(F!=0){$j("#modal-liked-friends").append(", ")}$j("#modal-liked-friends").append(jive.user.soy.displayNameLink({user:G.user[F]}))}}})}else{$j.getJSON(w(s,v)+"/likedlist",{ratingType:D,connectionType:2,start:y,range:c+1},function(G){if(G.user.length==0){$j("#modal-liked-everyone").append(q.acclaimLikedNone)}else{var H='<a href="#" id="jive-acclaim-everyone-more-'+k+'" class="jive-acclaim-more">'+q.globalMore+"...</a>";$j("#jive-acclaim-everyone-more-"+k).remove();for(var F=0;F<G.user.length;F++){if(F==C){$j("#modal-liked-everyone").append(", "+H);$j("#jive-acclaim-everyone-more-"+k).show();$j("#jive-acclaim-everyone-more-"+k).click(function(){y=c;c=c+C;p(2);return false});break}if(F!=0){$j("#modal-liked-everyone").append(", ")}$j("#modal-liked-everyone").append(jive.user.soy.displayNameLink({user:G.user[F]}))}}})}}function g(E){if(!i){$j.post(w(s,v),{ratingType:D,voteValue:E});i=true;b(parseInt(o,10)+1);$j("#jive-acclaim-like-container-"+k).attr("data-hasVoted","true");$j("#jive-acclaim-like-container-"+k).attr("data-likes",parseInt(o,10)+1)}}function l(){if(i){$j.post(w(s,v)+"/removevote",{ratingType:D});i=false;b(parseInt(o,10)-1);$j("#jive-acclaim-like-container-"+k).attr("data-hasVoted","false");$j("#jive-acclaim-like-container-"+k).attr("data-likes",parseInt(o,10)-1)}}function j(){$j(document).click(function(){x()});$j(window).resize(function(){A()});$j(".jive-acclaim-likedlink").live("click",function(){f(this);n();return false});d()}function d(){$j(".jive-acclaim-likelink").live("click",function(){f(this);if(!i){g(1)}else{l()}return false})}function f(E){s=$j(E).parent().attr("data-uniqueKey").split("-")[0];v=$j(E).parent().attr("data-uniqueKey").split("-")[1];k=$j(E).parent().attr("data-uniqueKey");D=$j(E).parent().attr("data-ratingType");o=$j(E).parent().attr("data-likes");i=$j(E).parent().attr("data-hasVoted")==="true"}function t(){var E=jive.acclaim.soy.renderAcclaimModal({uniqueKey:k,likes:o,hasVoted:i,youUsername:e.youUsername,youID:e.youID,i18n:q,isGuest:e.isGuest});$j(document.body).append(E);A();$j("#j-modal-close").click(x)}function A(){if(k==undefined){return}var H=50;var J=30;var E=$j("#jive-acclaim-likedlink-"+k).offset();var I=$j("#jive-acclaim-mini-modal-"+k);var F=I.find(".j-modal-tail");var G=parseInt(F.css("width"))/2;I.css("top",E.top+J+"px");if(E.left+I.width()<$j(window).width()){I.css("left",E.left-H+"px");F.css("left",H-G+"px")}else{I.css("left",E.left+H-I.width()+"px");F.css("left",I.width()-H-G+"px")}}};
;
if(typeof ScrapboxUILite=="undefined"){var ScrapboxUILite=(function(C){var A=null;var B={};var D={getCookie:function(F){var G,E,I,H=document.cookie.split(";");for(G=0;G<H.length;G++){E=H[G].substr(0,H[G].indexOf("="));I=H[G].substr(H[G].indexOf("=")+1);E=E.replace(/^\s+|\s+$/g,"");if(E==F){return unescape(I)}}},setCookie:function(E,H,F){var I=new Date();I.setDate(I.getDate()+F);var G=escape(H)+((F==null)?"":"; expires="+I.toUTCString());document.cookie=E+"="+H+";path=/"},init:function(E){$j.extend(B,E);$j("#part-list-link").removeClass("display_none");$j("#content-list-link").removeClass("display_none");$j("#email-link").removeClass("display_none");$j("#scrapbox li.scrapbox-col-sep").removeClass("display_none");$j("#action-notification").addClass("display_none")}};return{getInstance:function(){if(A==null){A=D}return A}}})(jQuery)}
;
if(typeof ScrapboxUIManager=="undefined"){var ScrapboxUIManager=(function(D){var K=null;var H=null;var A=null;var G=null;var I={};var E=-1;var C=-1;var B=0;var J=0;var F={partsHandler:{addPart:function(M,L){if(C==I["no_result"]){if(!$j("#login_light_box_container").is(":visible")){loginLightBox.init(document.location.href)}return false}}},init_lite:function(L){$j.extend(I,L);A=ScrapboxUILite.getInstance();A.init(L)},init:function(M,L,N){F.init_lite(N)}};return{getInstance:function(){if(K==null){K=F}return K}}})(jQuery)}
;
(function(A){var K,T,R,L,d,w,k,J,O,z;var D=0,H={},g=[],e=0,F={},y=[];var f=null,m=new Image,I=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,j=/[^\.]\.(swf)\s*$/i;var q,M=1;var a,c,P=false,C=20,t=A.extend(A("<div/>")[0],{prop:0}),i=0,S=!A.support.opacity&&!window.XMLHttpRequest;A.fn.fixPNG=function(){return this.each(function(){var W=A(this).css("backgroundImage");if(W.match(/^url\(["']?(.*\.png)["']?\)$/i)){W=RegExp.$1;A(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod="+(A(this).css("backgroundRepeat")=="no-repeat"?"crop":"scale")+", src='"+W+"')"}).each(function(){var X=A(this).css("position");if(X!="absolute"&&X!="relative"){A(this).css("position","relative")}}).css("zoom",1)}})};A.fn.fancybox=function(W){A(this).data("fancybox",A.extend({},W));A(this).unbind("click.fb").bind("click.fb",function(Y){Y.preventDefault();if(P){return}P=true;A(this).blur();g=[];D=0;var X=A(this).attr("rel")||"";if(!X||X==""||X==="nofollow"){g.push(this)}else{g=A("a[rel="+X+"], area[rel="+X+"]");D=g.index(this)}l();return false});return this};A.fancybox=function(Z,Y){if(P){return}P=true;g=[];D=0;if(A.isArray(Z)){for(var X=0,W=Z.length;X<W;X++){if(typeof Z[X]=="object"){A(Z[X]).data("fancybox",A.extend({},Y,Z[X]))}else{Z[X]=A({}).data("fancybox",A.extend({content:Z[X]},Y))}}g=jQuery.merge(g,Z)}else{if(typeof Z=="object"){A(Z).data("fancybox",A.extend({},Y,Z))}else{Z=A({}).data("fancybox",A.extend({content:Z},Y))}g.push(Z)}l()};A.fancybox.showActivity=function(){clearInterval(q);T.show();q=setInterval(n,66)};A.fancybox.hideActivity=function(){T.hide()};A.fancybox.next=function(){return A.fancybox.pos(e+1)};A.fancybox.prev=function(){return A.fancybox.pos(e-1)};A.fancybox.pos=function(W){if(P){return}W=parseInt(W);if(W>-1&&y.length>W){D=W;l()}if(F.cyclic&&y.length>1&&W<0){D=y.length-1;l()}if(F.cyclic&&y.length>1&&W>=y.length){D=0;l()}return};A.fancybox.cancel=function(){if(P){return}P=true;A.event.trigger("fancybox-cancel");h();if(H&&A.isFunction(H.onCancel)){H.onCancel(g,D,H)}P=false};A.fancybox.close=function(){if(P||L.is(":hidden")){return}P=true;if(F&&A.isFunction(F.onCleanup)){if(F.onCleanup(y,e,F)===false){P=false;return}}h();A(J.add(O).add(z)).hide();A("#fancybox-title").remove();L.add(w).add(R).unbind();A(window).unbind("resize.fb scroll.fb");A(document).unbind("keydown.fb");function W(){R.fadeOut("fast");L.hide();A.event.trigger("fancybox-cleanup");w.empty();if(A.isFunction(F.onClosed)){F.onClosed(y,e,F)}y=H=[];e=D=0;F=H={};P=false}w.css("overflow","hidden");if(F.transitionOut=="elastic"){a=V();var X=L.position();c={top:X.top,left:X.left,width:L.width(),height:L.height()};if(F.opacity){c.opacity=1}t.prop=1;A(t).animate({prop:0},{duration:F.speedOut,easing:F.easingOut,step:G,complete:W})}else{L.fadeOut(F.transitionOut=="none"?0:F.speedOut,W)}};A.fancybox.resize=function(){if(P||L.is(":hidden")){return}P=true;var X=w.wrapInner("<div style='overflow:auto'></div>").children();var W=X.height();L.css({height:W+(F.padding*2)+i});w.css({height:W});X.replaceWith(X.children());A.fancybox.center()};A.fancybox.center=function(){P=true;var W=E();var X=F.margin;var Y={};Y.top=W[3]+((W[1]-((L.height()-i)+(C*2)))*0.5);Y.left=W[2]+((W[0]-(L.width()+(C*2)))*0.5);Y.top=Math.max(W[3]+X,Y.top);Y.left=Math.max(W[2]+X,Y.left);L.css(Y);P=false};function h(){T.hide();m.onerror=m.onload=null;if(f){f.abort()}K.empty()}function p(){A.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>',{scrolling:"no",padding:20,transitionIn:"none",transitionOut:"none"})}function l(){h();var ab=g[D];H=A.extend({},A.fn.fancybox.defaults,(typeof A(ab).data("fancybox")=="undefined"?H:A(ab).data("fancybox")));var Y,Z,ad=ab.title||A(ab).title||H.title||"";if(ab.nodeName&&!H.orig){H.orig=A(ab).children("img:first").length?A(ab).children("img:first"):A(ab)}if(ad==""&&H.orig){ad=H.orig.attr("alt")}if(ab.nodeName&&(/^(?:javascript|#)/i).test(ab.href)){Y=H.href||null}else{Y=H.href||ab.href||null}if(H.type){Z=H.type;if(!Y){Y=H.content}}else{if(H.content){Z="html"}else{if(Y){if(Y.match(I)){Z="image"}else{if(Y.match(j)){Z="swf"}else{if(A(ab).hasClass("iframe")){Z="iframe"}else{if(Y.match(/#/)){ab=Y.substr(Y.indexOf("#"));Z=A(ab).length>0?"inline":"ajax"}else{Z="ajax"}}}}}else{Z="inline"}}}H.type=Z;H.href=Y;H.title=ad;if(H.autoDimensions&&H.type!=="iframe"&&H.type!=="swf"){H.width="auto";H.height="auto"}if(H.modal){H.overlayShow=true;H.hideOnOverlayClick=false;H.hideOnContentClick=false;H.enableEscapeButton=false;H.showCloseButton=false}if(A.isFunction(H.onStart)){if(H.onStart(g,D,H)===false){P=false;return}}K.css("padding",(C+H.padding+H.margin));A(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){A(this).replaceWith(w.children())});switch(Z){case"html":K.html(H.content);s();break;case"inline":A('<div class="fancybox-inline-tmp" />').hide().insertBefore(A(ab)).bind("fancybox-cleanup",function(){A(this).replaceWith(w.children())}).bind("fancybox-cancel",function(){A(this).replaceWith(K.children())});A(ab).appendTo(K);s();break;case"image":P=false;A.fancybox.showActivity();m=new Image;m.onerror=function(){p()};m.onload=function(){m.onerror=null;m.onload=null;Q()};m.src=Y;break;case"swf":var ac="";var X="";ac+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+H.width+'" height="'+H.height+'"><param name="movie" value="'+Y+'"></param>';A.each(H.swf,function(ae,af){ac+='<param name="'+ae+'" value="'+af+'"></param>';X+=" "+ae+'="'+af+'"'});ac+='<embed src="'+Y+'" type="application/x-shockwave-flash" width="'+H.width+'" height="'+H.height+'"'+X+"></embed></object>";K.html(ac);s();break;case"ajax":var W=Y.split("#",2);var aa=H.ajax.data||{};if(W.length>1){Y=W[0];typeof aa=="string"?aa+="&selector="+W[1]:aa.selector=W[1]}P=false;A.fancybox.showActivity();f=A.ajax(A.extend(H.ajax,{url:Y,data:aa,error:p,success:function(af,ag,ae){if(f.status==200){K.html(af);fancybox_proc;ess_inline()}}}));break;case"iframe":A('<iframe id="fancybox-frame" name="fancybox-frame'+new Date().getTime()+'" frameborder="0" hspace="0" scrolling="'+H.scrolling+'" src="'+H.href+'"></iframe>').appendTo(K);u();break}}function Q(){P=true;H.width=m.width;H.height=m.height;A("<img />").attr({id:"fancybox-img",src:m.src,alt:H.title}).appendTo(K);u()}function s(){K.width(H.width);K.height(H.height);if(H.width=="auto"){H.width=K.width()}if(H.height=="auto"){H.height=K.height()}u()}function u(){T.hide();if(L.is(":visible")&&A.isFunction(F.onCleanup)){if(F.onCleanup(y,e,F)===false){A.event.trigger("fancybox-cancel");P=false;return}}y=g;e=D;F=H;w.get(0).scrollTop=0;w.get(0).scrollLeft=0;if(F.overlayShow){if(S){A("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"})}R.css({"background-color":F.overlayColor,opacity:F.overlayOpacity}).unbind().show()}c=b();r();if(L.is(":visible")){A(J.add(O).add(z)).hide();var X=L.position();a={top:X.top,left:X.left,width:L.width(),height:L.height()};var W=(a.width==c.width&&a.height==c.height);w.fadeOut(F.changeFade,function(){A.event.trigger("fancybox-change");w.css({top:F.padding,left:F.padding,width:Math.max(a.width-(F.padding*2),1),height:Math.max(a.height-(F.padding*2),1)}).empty().css("overflow","hidden");function Y(){w.html(K.contents()).fadeIn(F.changeFade,v)}t.prop=0;A(t).animate({prop:1},{duration:W?0:F.changeSpeed,easing:F.easingChange,step:G,complete:Y})});return}L.css("opacity",1);if(F.transitionIn=="elastic"){a=V();w.css({top:F.padding,left:F.padding,width:Math.max(a.width-(F.padding*2),1),height:Math.max(a.height-(F.padding*2),1)}).html(K.contents());L.css(a).show();if(F.opacity){c.opacity=0}t.prop=0;A(t).animate({prop:1},{duration:F.speedIn,easing:F.easingIn,step:G,complete:v})}else{w.css({top:F.padding,left:F.padding,width:Math.max(c.width-(F.padding*2),1),height:Math.max(c.height-(F.padding*2)-i,1)}).html(K.contents());L.css(c).fadeIn(F.transitionIn=="none"?0:F.speedIn,v)}}function G(aa){var X=Math.round(a.width+(c.width-a.width)*aa);var W=Math.round(a.height+(c.height-a.height)*aa);var Z=Math.round(a.top+(c.top-a.top)*aa);var Y=Math.round(a.left+(c.left-a.left)*aa);L.css({width:X+"px",height:W+"px",top:Z+"px",left:Y+"px"});X=Math.max(X-F.padding*2,0);W=Math.max(W-(F.padding*2+(i*aa)),0);w.css({width:X+"px",height:W+"px"});if(typeof c.opacity!=="undefined"){L.css("opacity",(aa<0.5?0.5:aa))}}function v(){w.css("overflow",overflow=(F.scrolling=="auto"?(F.type=="image"||F.type=="iframe"||F.type=="swf"?"hidden":"auto"):(F.scrolling=="yes"?"auto":"visible")));if(!A.support.opacity){w.get(0).style.removeAttribute("filter");L.get(0).style.removeAttribute("filter")}A("#fancybox-title").show();if(F.hideOnContentClick){w.one("click",A.fancybox.close)}if(F.hideOnOverlayClick){R.one("click",A.fancybox.close)}if(F.showCloseButton){J.show()}o();A(window).bind("resize.fb",A.fancybox.center);F.centerOnScroll?A(window).bind("scroll.fb",A.fancybox.center):A(window).unbind("scroll.fb");if(A.isFunction(F.onComplete)){F.onComplete(y,e,F)}P=false;U()}function b(){var W=E();var ad={};var ab=F.margin;var X=F.autoScale;var ac=(C+ab)*2;var aa=(C+ab)*2;var Y=(F.padding*2);if(F.width.toString().indexOf("%")>-1){ad.width=((W[0]*parseFloat(F.width))/100)-(C*2);X=false}else{ad.width=F.width+Y}if(F.height.toString().indexOf("%")>-1){ad.height=((W[1]*parseFloat(F.height))/100)-(C*2);X=false}else{ad.height=F.height+Y}if(X&&(ad.width>(W[0]-ac)||ad.height>(W[1]-aa))){if(H.type=="image"||H.type=="swf"){ac+=Y;aa+=Y;var Z=Math.min(Math.min(W[0]-ac,F.width)/F.width,Math.min(W[1]-aa,F.height)/F.height);ad.width=Math.round(Z*(ad.width-Y))+Y;ad.height=Math.round(Z*(ad.height-Y))+Y}else{ad.width=Math.min(ad.width,(W[0]-ac));ad.height=Math.min(ad.height,(W[1]-aa))}}ad.top=W[3]+((W[1]-(ad.height+(C*2)))*0.5);ad.left=W[2]+((W[0]-(ad.width+(C*2)))*0.5);if(F.autoScale==false){ad.top=Math.max(W[3]+ab,ad.top);ad.left=Math.max(W[2]+ab,ad.left)}return ad}function V(){var Z=H.orig?A(H.orig):false;var Y={};if(Z&&Z.length){var X=x(Z);Y={width:(X.width+(F.padding*2)),height:(X.height+(F.padding*2)),top:(X.top-F.padding-C),left:(X.left-F.padding-C)}}else{var W=E();Y={width:1,height:1,top:W[3]+W[1]*0.5,left:W[2]+W[0]*0.5}}return Y}function o(){A(document).unbind("keydown.fb").bind("keydown.fb",function(W){if(W.keyCode==27&&F.enableEscapeButton){W.preventDefault();A.fancybox.close()}else{if(W.keyCode==37){W.preventDefault();A.fancybox.prev()}else{if(W.keyCode==39){W.preventDefault();A.fancybox.next()}}}});if(A.fn.mousewheel){L.unbind("mousewheel.fb");if(y.length>1){L.bind("mousewheel.fb",function(W,X){W.preventDefault();if(P||X==0){return}X>0?A.fancybox.prev():A.fancybox.next()})}}if(!F.showNavArrows){return}if((F.cyclic&&y.length>1)||e!=0){O.show()}if((F.cyclic&&y.length>1)||e!=(y.length-1)){z.show()}}function U(){if((y.length-1)>e){var W=y[e+1].href;if(typeof W!=="undefined"&&W.match(I)){var X=new Image();X.src=W}}if(e>0){var W=y[e-1].href;if(typeof W!=="undefined"&&W.match(I)){var X=new Image();X.src=W}}}function n(){if(!T.is(":visible")){clearInterval(q);return}A("div",T).css("top",(M*-40)+"px");M=(M+1)%12}function E(){return[A(window).width(),A(window).height(),A(document).scrollLeft(),A(document).scrollTop()]}function x(W){var X=W.offset();X.top+=parseFloat(W.css("paddingTop"))||0;X.left+=parseFloat(W.css("paddingLeft"))||0;X.top+=parseFloat(W.css("border-top-width"))||0;X.left+=parseFloat(W.css("border-left-width"))||0;X.width=W.width();X.height=W.height();return X}function r(){A("#fancybox-title").remove();i=0;if(F.titleShow==false){return}var Y=y[e];var Z=F.title;Z=A.isFunction(F.titleFormat)?F.titleFormat(Z,y,e,F):N(Z);if(!Z||Z==""){return}var X=c.width-(F.padding*2);var W="fancybox-title-"+F.titlePosition;A('<div id="fancybox-title" class="'+W+'" />').css({width:X,paddingLeft:F.padding,paddingRight:F.padding}).html(Z).appendTo("body");switch(F.titlePosition){case"inside":i=A("#fancybox-title").outerHeight(true)-F.padding;c.height+=i;break;case"over":A("#fancybox-title").css("bottom",F.padding);break;default:A("#fancybox-title").css("bottom",A("#fancybox-title").outerHeight(true)*-1);break}A("#fancybox-title").appendTo(d).hide();if(S){A("#fancybox-title span").fixPNG()}}function N(W){if(W&&W.length){switch(F.titlePosition){case"inside":return W;break;case"over":return'<span id="fancybox-title-over">'+W+"</span>";break;default:return'<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">'+W+'</span><span id="fancybox-title-right"></span></span>';break}}return false}function B(){if(A(document.body).find("#fancybox-wrap").length){return}A(document.body).append(K=A('<div id="fancybox-tmp"></div>'),T=A('<div id="fancybox-loading"><div></div></div>'),R=A('<div id="fancybox-overlay"></div>'),L=A('<div id="fancybox-wrap"></div>'));d=A('<div id="fancybox-outer" class="j-mini-modal"></div>').appendTo(L);d.append(w=A('<div id="fancybox-inner"></div>'),J=A('<a id="fancybox-close"></a>'),O=A('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),z=A('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));J.click(A.fancybox.close);T.click(A.fancybox.cancel);O.click(function(W){W.preventDefault();A.fancybox.prev()});z.click(function(W){W.preventDefault();A.fancybox.next()});if(!A.support.opacity){d.find(".fancy-bg").fixPNG()}if(S){A(J.add(".fancy-ico").add("div",T)).fixPNG();R.get(0).style.setExpression("height","document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");T.get(0).style.setExpression("top","(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");d.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>')}}A.fn.fancybox.defaults={padding:10,margin:20,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.3,overlayColor:"#666",titleShow:true,titlePosition:"outside",titleFormat:null,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,onStart:null,onCancel:null,onComplete:null,onCleanup:null,onClosed:null};A(document).ready(function(){B()})})(jQuery);
;
(function(b){var d,c=1,a=new Image;b.fn.lightbox_media=function(e){return this.each(function(){var h=b.extend({},b.fn.lightbox_media.defaults,e),j=b(this),i,g;if(j.get(0).lightboxBound){return}else{j.get(0).lightboxBound=true}j.click(function(){i=b('<div class="modal-loading"><div></div></div>');clearInterval(d);b("body").append(i.show());d=setInterval(f,66);var k=b('<div class="jive-modal" id="lb_image_wrapper"/>');k.append(b('<a class="j-icon-close jive-close" href="#"/>'));if(h.type=="image"){a=new Image;a.onload=function(){a.onload=null;g=b("<img/>").attr({id:"lb_image",src:j.attr("href")});k.append(g);b(".modal-loading").remove();b("body").append(k);b("body").append(k.css({position:"absolute",left:"-1000px",visibility:"hidden",display:"block"}));if(g.outerWidth()+parseInt(k.css("padding-left"))*2>b(window).width()){var p=b(window).width()-(parseInt(k.css("padding-left"))*4);if(b.browser.msie&&b.browser.version<7){var o=p/g.outerWidth();g.height(g.height()*o)}g.width(p)}k.css({position:"static",left:"auto",display:"none",visibility:"visible"});k.lightbox_me({closeSelector:".jive-close",destroyOnClose:true,centered:true})}}else{if(h.type=="video"){var n=j.attr("href").replace(new RegExp("watch\\?v=","i"),"v/");var m="";var l="";m+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="480" height="385"><param name="movie" value="'+n+'"></param>';m+='<param name="wmode" value="transparent"></param>';m+='<param name="allowfullscreen" value="true"></param>';l+=' wmode="transparent"';l+=' allowfullscreen="true"';m+='<embed src="'+n+'" type="application/x-shockwave-flash" width="480" height="385"'+l+"></embed></object>";k.html(m).append(b('<a class="j-icon-close jive-close" href="#"/>'));b(".modal-loading").remove();k.lightbox_me({closeSelector:".jive-close",destroyOnClose:true,centered:true})}}a.src=j.attr("href");return false});function f(){if(!i.is(":visible")){clearInterval(d);return}b("div",i).css("top",(c*-40)+"px");c=(c+1)%12}})};b.fn.lightbox_media.defaults={type:"image"}})(jQuery);(function(){var c=/\.(?:jpg|jpeg|jpe|png|gif)$/i;function b(){$j("a[href]").filter(function(){return c.test(this.href)}).lightbox_media()}function a(){$j("a.j-js-youtube, a[rel=fb]").each(function(){$j(this).lightbox_media({type:"video"})})}jive.bindLightboxMedia=function(e,f){var d=f||new soy.StringBuilder();window.setTimeout(function(){b();a()},1);if(!f){return d.toString()}};$j(document).ready(jive.bindLightboxMedia)})();
;
var soy=soy||{};(function(){var b=navigator.userAgent;var a=b.indexOf("Opera")==0;soy.IS_OPERA_=a;soy.IS_IE_=!a&&b.indexOf("MSIE")!=-1;soy.IS_WEBKIT_=!a&&b.indexOf("WebKit")!=-1})();soy.StringBuilder=function(a,b){this.buffer_=soy.IS_IE_?[]:"";if(a!=null){this.append.apply(this,arguments)}};soy.StringBuilder.prototype.bufferLength_=0;soy.StringBuilder.prototype.append=function(b,a,d){if(soy.IS_IE_){if(a==null){this.buffer_[this.bufferLength_++]=b}else{this.buffer_.push.apply(this.buffer_,arguments);this.bufferLength_=this.buffer_.length}}else{this.buffer_+=b;if(a!=null){for(var c=1;c<arguments.length;c++){this.buffer_+=arguments[c]}}}return this};soy.StringBuilder.prototype.clear=function(){if(soy.IS_IE_){this.buffer_.length=0;this.bufferLength_=0}else{this.buffer_=""}};soy.StringBuilder.prototype.toString=function(){if(soy.IS_IE_){var a=this.buffer_.join("");this.clear();if(a){this.append(a)}return a}else{return(this.buffer_)}};soy.renderElement=function(b,c,a){b.innerHTML=c(a)};soy.renderAsFragment=function(d,a){var c=document.createElement("div");c.innerHTML=d(a);if(c.childNodes.length==1){return c.firstChild}else{var b=document.createDocumentFragment();while(c.firstChild){b.appendChild(c.firstChild)}return b}};soy.$$augmentData=function(e,a){function d(){}d.prototype=e;var c=new d();for(var b in a){c[b]=a[b]}return c};soy.$$escapeHtml=function(a){a=String(a);if(!soy.$$EscapeHtmlRe_.ALL_SPECIAL_CHARS.test(a)){return a}if(a.indexOf("&")!=-1){a=a.replace(soy.$$EscapeHtmlRe_.AMP,"&amp;")}if(a.indexOf("<")!=-1){a=a.replace(soy.$$EscapeHtmlRe_.LT,"&lt;")}if(a.indexOf(">")!=-1){a=a.replace(soy.$$EscapeHtmlRe_.GT,"&gt;")}if(a.indexOf('"')!=-1){a=a.replace(soy.$$EscapeHtmlRe_.QUOT,"&quot;")}return a};soy.$$EscapeHtmlRe_={ALL_SPECIAL_CHARS:/[&<>\"]/,AMP:/&/g,LT:/</g,GT:/>/g,QUOT:/\"/g};soy.$$escapeJs=function(b){b=String(b);var c=[];for(var a=0;a<b.length;a++){c[a]=soy.$$escapeChar(b.charAt(a))}return c.join("")};soy.$$escapeChar=function(d){if(d in soy.$$escapeCharJs_){return soy.$$escapeCharJs_[d]}var b=d;var a=d.charCodeAt(0);if(a>31&&a<127){b=d}else{if(a<256){b="\\x";if(a<16||a>256){b+="0"}}else{b="\\u";if(a<4096){b+="0"}}b+=a.toString(16).toUpperCase()}return soy.$$escapeCharJs_[d]=b};soy.$$escapeCharJs_={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"'":"\\'","\\":"\\\\"};soy.$$escapeUri=function(a){a=String(a);if(!soy.$$ENCODE_URI_REGEXP_.test(a)){return encodeURIComponent(a)}else{return a}};soy.$$ENCODE_URI_REGEXP_=/^[a-zA-Z0-9\-_.!~*'()]*$/;soy.$$insertWordBreaks=function(j,a){j=String(j);var f=[];var h=0;var b=false;var k=false;var g=0;var d=0;for(var e=0,c=j.length;e<c;++e){var l=j.charCodeAt(e);if(g>=a&&l!=soy.$$CharCode_.SPACE){f[h++]=j.substring(d,e);d=e;f[h++]=soy.WORD_BREAK_;g=0}if(b){if(l==soy.$$CharCode_.GREATER_THAN){b=false}}else{if(k){switch(l){case soy.$$CharCode_.SEMI_COLON:k=false;++g;break;case soy.$$CharCode_.LESS_THAN:k=false;b=true;break;case soy.$$CharCode_.SPACE:k=false;g=0;break}}else{switch(l){case soy.$$CharCode_.LESS_THAN:b=true;break;case soy.$$CharCode_.AMPERSAND:k=true;break;case soy.$$CharCode_.SPACE:g=0;break;default:++g;break}}}}f[h++]=j.substring(d);return f.join("")};soy.$$CharCode_={SPACE:32,AMPERSAND:38,SEMI_COLON:59,LESS_THAN:60,GREATER_THAN:62};soy.WORD_BREAK_=soy.IS_WEBKIT_?"<wbr></wbr>":soy.IS_OPERA_?"&shy;":"<wbr>";soy.$$changeNewlineToBr=function(a){a=String(a);if(!soy.$$CHANGE_NEWLINE_TO_BR_RE_.test(a)){return a}return a.replace(/(\r\n|\r|\n)/g,"<br>")};soy.$$CHANGE_NEWLINE_TO_BR_RE_=/[\r\n]/;soy.$$bidiTextDir=function(b,a){b=soy.$$bidiStripHtmlIfNecessary_(b,a);if(!b){return 0}return soy.$$bidiDetectRtlDirectionality_(b)?-1:1};soy.$$bidiDirAttr=function(c,d,a){var b=soy.$$bidiTextDir(d,a);if(b!=c){return b<0?"dir=rtl":b>0?"dir=ltr":""}return""};soy.$$bidiMarkAfter=function(c,d,a){var b=soy.$$bidiTextDir(d,a);return soy.$$bidiMarkAfterKnownDir(c,b,d,a)};soy.$$bidiMarkAfterKnownDir=function(c,b,d,a){return(c>0&&(b<0||soy.$$bidiIsRtlExitText_(d,a))?"\u200E":c<0&&(b>0||soy.$$bidiIsLtrExitText_(d,a))?"\u200F":"")};soy.$$bidiStripHtmlIfNecessary_=function(b,a){return a?b.replace(soy.$$BIDI_HTML_SKIP_RE_," "):b};soy.$$BIDI_HTML_SKIP_RE_=/<[^>]*>|&[^;]+;/g;soy.$$bidiSpanWrap=function(a,d){d=String(d);var c=soy.$$bidiTextDir(d,true);var b=soy.$$bidiMarkAfterKnownDir(a,c,d,true);if(c>0&&a<=0){d="<span dir=ltr>"+d+"</span>"}else{if(c<0&&a>=0){d="<span dir=rtl>"+d+"</span>"}}return d+b};soy.$$bidiUnicodeWrap=function(a,d){d=String(d);var c=soy.$$bidiTextDir(d,true);var b=soy.$$bidiMarkAfterKnownDir(a,c,d,true);if(c>0&&a<=0){d="\u202A"+d+"\u202C"}else{if(c<0&&a>=0){d="\u202B"+d+"\u202C"}}return d+b};soy.$$bidiLtrChars_="A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";soy.$$bidiNeutralChars_="\u0000-\u0020!-@[-`{-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u2BFF";soy.$$bidiRtlChars_="\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";soy.$$bidiRtlDirCheckRe_=new RegExp("^[^"+soy.$$bidiLtrChars_+"]*["+soy.$$bidiRtlChars_+"]");soy.$$bidiNeutralDirCheckRe_=new RegExp("^["+soy.$$bidiNeutralChars_+"]*$|^http://");soy.$$bidiIsRtlText_=function(a){return soy.$$bidiRtlDirCheckRe_.test(a)};soy.$$bidiIsNeutralText_=function(a){return soy.$$bidiNeutralDirCheckRe_.test(a)};soy.$$bidiRtlDetectionThreshold_=0.4;soy.$$bidiRtlWordRatio_=function(e){var b=0;var a=0;var d=e.split(" ");for(var c=0;c<d.length;c++){if(soy.$$bidiIsRtlText_(d[c])){b++;a++}else{if(!soy.$$bidiIsNeutralText_(d[c])){a++}}}return a==0?0:b/a};soy.$$bidiDetectRtlDirectionality_=function(a){return soy.$$bidiRtlWordRatio_(a)>soy.$$bidiRtlDetectionThreshold_};soy.$$bidiLtrExitDirCheckRe_=new RegExp("["+soy.$$bidiLtrChars_+"][^"+soy.$$bidiRtlChars_+"]*$");soy.$$bidiRtlExitDirCheckRe_=new RegExp("["+soy.$$bidiRtlChars_+"][^"+soy.$$bidiLtrChars_+"]*$");soy.$$bidiIsLtrExitText_=function(b,a){b=soy.$$bidiStripHtmlIfNecessary_(b,a);return soy.$$bidiLtrExitDirCheckRe_.test(b)};soy.$$bidiIsRtlExitText_=function(b,a){b=soy.$$bidiStripHtmlIfNecessary_(b,a);return soy.$$bidiRtlExitDirCheckRe_.test(b)};
;
eval(function(h,b,i,d,g,f){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){while(i--){f[g(i)]=d[i]||g(i)}d=[function(a){return f[a]}];g=function(){return"\\w+"};i=1}while(i--){if(d[i]){h=h.replace(new RegExp("\\b"+g(i)+"\\b","g"),d[i])}}return h}("h.i['1a']=h.i['z'];h.O(h.i,{y:'D',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});",62,74,"||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce".split("|"),0,{}));
;
function $pf(A){return document.getElementById(A)}function getElementsByClass(G,E,A){var D=new Array();if(E==null){E=document}if(A==null){A="*"}var C=E.getElementsByTagName(A);var B=C.length;var F=new RegExp("(^|\\s)"+G+"(\\s|$)");for(i=0,j=0;i<B;i++){if(F.test(C[i].className)){D[j]=C[i];j++}}return D}var pfLanguageDetected=false;var pfLanguageListName;function pfLanguageDone(A){$j(pfLanguageListName+" option[value='"+A.replace("zh-CHT","zh").replace("zh-CHS","zh_TW").replace("-","_")+"']").attr("selected","selected")}function pfDetectLang(C,A){if(C.length>=100&&!pfLanguageDetected){pfLanguageDetected=true;C=encodeURIComponent(C);var B="//api.microsofttranslator.com/V2/Ajax.svc/Detect?oncomplete=pfLanguageDone&appId=A4F9472398BD33F8E9A230BFEC7BF316854220E0&text="+C.substr(1,(C.length>400?400:C.length));pfLanguageListName=A;$j.ajax({url:B,dataType:"jsonp",timeout:10000,error:function(D,F,E){pfLanguageDetected=false}})}else{if(C.length<100){pfLanguageDetected=false}}}function pfSetCookie(A,D,B){var E=new Date();E.setDate(E.getDate()+B);var C=escape(D)+((B==null)?"":"; expires="+E.toUTCString()+"; path=/");document.cookie=A+"="+C}function pfGetCookie(B){var C,A,E,D=document.cookie.split(";");for(C=0;C<D.length;C++){A=D[C].substr(0,D[C].indexOf("="));E=D[C].substr(D[C].indexOf("=")+1);A=A.replace(/^\s+|\s+$/g,"");if(A==B){return unescape(E)}}}function getUrlVars(){var D=[],C;var A=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(var B=0;B<A.length;B++){C=A[B].split("=");D.push(C[0]);D[C[0]]=C[1]}return D}function cookieDirShow(A){$j(".pf-cookie-directive").show();$j("#scrapbox").css("top","100px");$j(document.body).css("margin-top","127px");var B="199";if(A=="TW"||A=="CN"||A=="HK"){B="232"}$j(document.body).css("backgroundPosition","-249px "+B+"px")}function cookieDirDismiss(A){pfSetCookie("cookieDirectiveDismissed","true",1825);$j(".pf-cookie-directive").effect("highlight",{color:"#E6EFC2"},300,function(){$j(".pf-cookie-directive").hide();$j("#scrapbox").css("top","0");$j(document.body).css("margin-top","27px");var B="99";if(A=="TW"||A=="CN"||A=="HK"){B="132"}$j(document.body).css("backgroundPosition","-249px "+B+"px")})}function getBrand(A){var B="AU,HK,IN,MY,NZ,PH,SG,TH,KO,TW,KR,CN";var C="CA,MX,US,BR";if(C.indexOf(A)>-1){return"Newark"}if(B.indexOf(A)>-1){return"element14"}return"Farnell"}function getSKUforCountry(B,A,C,E){var D="CA,MX,US,BR";if(E){if(A==""){return C.toUpperCase()}if(C==""){return A}}if(D.indexOf(B)>-1){return C.toUpperCase()}return A}function getStoreForCountryCode(A){var B="AU,HK,IN,MY,NZ,PH,SG,TH,KO,TW,KR,CN";var C="CA,MX,US,BR";if(C.indexOf(A)>-1){return"www.newark.com"}if(B.indexOf(A)>-1){return"au.element14.com"}return"uk.farnell.com"}function extractValue(F,C,A){var D="";var B=F.indexOf(C);if(B>0){if(A==""){D=F.substring(B+C.length)}else{var E=F.indexOf(A,B+C.length+1);if(E>0){D=F.substring(B+C.length,E)}}}return D}function extractTagsAfter(F,C,A){var D="";var B=F.indexOf(C);if(B>0){if(A==""){D=F.substring(B+C.length)}else{var E=F.indexOf(A,B+C.length+1);if(E>0){D=F.substring(E+1)}}}return D}function extractPFData(A,B){switch(A){case"image":return extractValue(B,'src="','"');break;case"msku":return extractValue(B,'Product-translatedManufacturerPartNumber" >',"<");break;case"manuf":return extractValue(B,'Product-brandName" >',"<");break;case"fsku":return extractValue(B,"sku=","");break;case"price":return extractValue(B,'Product-price">',"<");break;case"avail":return extractValue(B,'Product-availability">',"<");break;case"cat-dimension-name":return extractValue(B,'Refinement-parentDimensionName" >',"<");break;case"cat-name":return extractValue(B,'Refinement-name" > >',"<");break;case"cat-record-count":return extractValue(B,'Refinement-recordCount">',"<");break;case"attribs":return extractTagsAfter(B,'Product-availability">',">");break;case"new-prod-description":var C=B.indexOf("<a href");if(C>-1){return B.substring(0,C)}else{return""}break;case"new-prod-skus":if(B.indexOf("SKUS=")>-1){return extractValue(B,"SKUS=","")}if(B.indexOf("SKU=")>-1){return extractValue(B,"SKU=","")}return"";break;case"refinementNValue":return extractValue(B,"browse.jsp?N=","&");break;case"searchTerm":return extractValue(B,"Ntt=","&");break}}function toggleWidgetBody(A){if($j("#jive-widgetframe-body_"+A).show()){$j("#jive-widgetframe-body_"+A).hide();$j("#jive-widgetframe-arrow_"+A).addClass("pf-widget-arrow-left pf-widget-map")}else{$j("#jive-widgetframe-body_"+A).show();$j("#jive-widgetframe-arrow_"+A).addClass("pf-widget-arrow-down pf-widget-map")}}function pfTrackEvent(E,F,D,B){if(typeof s_gi=="undefined"){return }var C=s_gi("pfcommunity");C.linkTrackEvents=D;C.prop2=F;C.events=D;var A=E.href!=null?C.lt(E.href):"";if(A==""){C.tl(E,"o",B)}}function closeLightbox(A){$j(A).trigger("close")}function showFASLightbox(){var A='<iframe src="/community/post-FAS!input.jspa" width="750" height="650"></iframe>';$j("#fas_form_light_box_container").html(A).lightbox_me({closeSelector:".close",centered:true})}var dynaloadedBrightcove=false;function dynaloadBrightcove(){if(dynaloadedBrightcove==false){dynaloadedBrightcove=true;$j.getScript("http://admin.brightcove.com/js/BrightcoveExperiences.js",function(A,C,B){brightcove.createExperiences()})}else{brightcove.createExperiences()}}function pfAddURLParameter(A,C){var B="";if(A.indexOf("#")>-1){B=A.substring(A.indexOf("#"));A=A.substring(0,A.indexOf("#"))}var D="?";if(A.indexOf("?")>-1){D="&"}A=A+D+C+B;return A}function pfRemoveURLParameter(B,H){var E=B.split("?");if(E.length>=2){var A=E.shift();var G=E.join("?");var F=encodeURIComponent(H)+"=";var D=G.split(/[&;]/g);for(var C=D.length;C-->0;){if(D[C].lastIndexOf(F,0)!==-1){D.splice(C,1)}}B=A+"?"+D.join("&")}return B}function hrefICID(B,C){var A=B.href;A=pfAddURLParameter(A,"ICID="+C);window.location=A;return false}function processTransactionalLinks(){$j(".pf-transactional-link").each(function(A){if($j(this).attr("href").indexOf("COM=")==-1){var B="e14";if(typeof currentContainerName=="string"&&currentContainerName!=""){B=B+"_"+currentContainerName}$j(this).attr("href",pfAddURLParameter($j(this).attr("href"),"COM="+B))}})}Jive.AlertMessage=function(B,A){A=A||{};$j('[id="'+B+'"]').fadeIn(1000,function(){var C=$j(this);C.each(function(){if(A.beforeStart){A.beforeStart(this)}});setTimeout(function(){C.fadeOut(1000,function(){C.each(function(){if(A.afterFinish){A.afterFinish(this)}})})},5000)})};function injectComAndNofollow(A){$j("a").each(function(){injectNofollow($j(this));appendCom(A,$j(this))})}function injectNofollow(B){var A=B.attr("href");if(!isInternal(A)){B.attr("rel","nofollow")}}function isInternal(A){if(A==undefined){return true}result=false;if(A.toLowerCase().indexOf("element14.com")>=0){result=true}else{if(A.substr(0,1)==="/"){result=true}else{if(A.substr(0,2)==="./"){result=true}else{if(A.substr(0,3)==="../"){result=true}else{if(A.toLowerCase().indexOf(".")<0){result=true}else{result=false}}}}}return result}function appendCom(C,B){if(isTransactional(B.attr("href"))){if(!hasCom(B.attr("href"))){var A=B.attr("href");if(A.toLowerCase().indexOf("mailto:")!=0){var D="COM="+C;if(A.charAt(A.length-1)==="?"){B.attr("href",A+D)}else{if(A.indexOf("?")>0){B.attr("href",A+"&"+D)}else{B.attr("href",A+"?"+D)}}}}}}function hasCom(A){if(A==undefined){return true}result=false;if(A.toLowerCase().indexOf("&com")>=0){result=true}else{if(A.toLowerCase().indexOf("?com")>=0){result=true}}return result}function isTransactional(A){if(A==undefined){return false}result=false;if(A.toLowerCase().indexOf("www.element14.com")>=0){result=false}else{if(A.toLowerCase().indexOf("farnell.com")>=0){result=true}else{if(A.toLowerCase().indexOf("newark.com")>=0){result=true}else{if(A.toLowerCase().indexOf(".element14.com")>=0){result=true}else{result=false}}}}return result}function getCurrentContainerName(){if((window.currentContainerName!="")&&(window.currentContainerName!="undefined")){return window.currentContainerName}else{return"element14"}}window.Date.prototype.f=function(g){if(g=="@"){return this.getTime()}else{if(g=="REL"){var Q=(((new Date()).getTime()-this.getTime())/1000),D=Math.floor(Q/86400);return D==0&&(Q>-60&&"right now"||Q>-120&&"1 minute from now"||Q>-3600&&-(Math.floor(Q/60))+" minutes from now"||Q>-7200&&"1 hour ago"||Q>-86400&&-(Math.floor(Q/3600))+" hours from now"||Q<60&&"just now"||Q<120&&"1 minute ago"||Q<3600&&Math.floor(Q/60)+" minutes ago"||Q<7200&&"1 hour ago"||Q<86400&&Math.floor(Q/3600)+" hours ago")||D==0&&"Tomorrow"||D>-7&&-(D)+" days from now"||-(Math.ceil(D/7))==1&&"1 week from now"||D>-78&&-(Math.ceil(D/7))+" weeks from now"||D>-730&&-(Math.ceil(D/30))+" months from now"||D<=-730&&-(Math.ceil(D/365))+" years from now"||D==1&&"Yesterday"||D<7&&D+" days ago"||(Math.ceil(D/7))==1&&"1 week ago"||D<78&&Math.ceil(D/7)+" weeks ago"||D<730&&Math.ceil(D/30)+" months ago"||Math.ceil(D/365)+" years ago"}}var L=["January","February","March","April","May","June","July","August","September","October","November","December"],X=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=function(E){return(E<0||E>9?"":"0")+E},o=this,g=g+"",N="",W=0,n="",F="",J=o.getYear()+"",G=o.getMonth()+1,l=o.getDate(),P=o.getDay(),O=o.getHours(),Z=o.getMinutes(),S=o.getSeconds(),U,V,B,T,p,C,f,e,a,R,t,O,q,I,A,b,Y=new Object();if(J.length<4){J=""+(J-0+1900)}Y.y=""+J;Y.yyyy=J;Y.yy=J.substr(2,4);Y.M=G;Y.MM=r(G);Y.MMM=L[G-1];Y.NNN=L[G-1].substr(0,3);Y.N=L[G-1].substr(0,1);Y.d=l;Y.dd=r(l);Y.e=X[P].substr(0,1);Y.ee=X[P].substr(0,2);Y.E=X[P].substr(0,3);Y.EE=X[P];Y.H=O;Y.HH=r(O);if(O==0){Y.h=12}else{if(O>12){Y.h=O-12}else{Y.h=O}}Y.hh=r(Y.h);if(O>11){Y.K=O-12}else{Y.K=O}Y.k=O+1;Y.KK=r(Y.K);Y.kk=r(Y.k);if(O>11){Y.a="PM"}else{Y.a="AM"}Y.m=Z;Y.mm=r(Z);Y.s=S;Y.ss=r(S);while(W<g.length){n=g.charAt(W);F="";while((g.charAt(W)==n)&&(W<g.length)){F+=g.charAt(W++)}if(Y[F]!=null){N=N+Y[F]}else{N=N+F}}return N};window.Date.prototype.diff=function(date,breakdown){var options={};if(typeof date=="string"){if((new Date(date))!="Invalid Date"&&(new Date(date))!="NaN"){date=new Date(date)}else{breakdown=date;date=new Date()}}else{if(typeof date=="object"&&!date.getTime){options=date;date=new Date()}}if(typeof breakdown=="object"){options=breakdown;breakdown=options.breakdown||"*"}options.labels=options.labels||{};if(breakdown){function processTime(trg){var result=null;if(diff>=tl[trg]){if(trg=="Y"||trg=="D"||trg=="C"||trg=="T"){for(var yr=(min);yr.getFullYear()<=max.getFullYear();yr.setYear(yr.getFullYear()+1)){if(yr.isLeapYear()){diff-=tl.d}}}if(diff>=tl[trg]){result=Math.floor(diff/tl[trg])+" "+(Math.floor(diff/tl[trg])==1&&names[trg][0]||names[trg][1]);diff=diff%tl[trg]}}eval("breakdown = breakdown.replace(/"+trg+'/g, "")');return result}var min=date<=this&&date||date>this&&this,max=date>this&&date||date<=this&&this,diff=(max.getTime()-min.getTime()),tl={T:1000*60*60*24*365*100*10,C:1000*60*60*24*365*100,D:1000*60*60*24*365*10,Y:1000*60*60*24*365,M:1000*60*60*24*28,W:1000*60*60*24*7,d:1000*60*60*24,H:1000*60*60,m:1000*60,S:1000,N:1},names={T:options.labels.T||["Mellinium","Mellinia"],C:options.labels.C||["Century","Centuries"],D:options.labels.D||["Decade","Decades"],Y:options.labels.Y||["Year","Years"],M:options.labels.M||["Month","Months"],W:options.labels.W||["Week","Weeks"],d:options.labels.d||["Day","Days"],H:options.labels.H||["Hour","Hours"],m:options.labels.m||["Minute","Minutes"],S:options.labels.S||["Second","Seconds"],N:options.labels.N||["Millisecond","Milliseconds"]};if(options.len){for(var x in names){names[x]=names[x].substr(0,options.len)}}var testDt=new Date(min.toString());if(max.getFullYear()-testDt.getFullYear()>1){testDt.setYear(max.getFullYear()-1)}while(testDt<max){if(testDt.isDayLightSavingsDay()&&testDt.getMonth()<5){diff+=tl.H}else{if(testDt.isDayLightSavingsDay()){diff-=tl.H}}testDt.setDate(testDt.getDate()+1)}if(((max.getMonth()==max.getDayLightSavingsDays()[0].getMonth()&&max.getDate()<max.getDayLightSavingsDays()[0].getDate())||max.getMonth()<max.getDayLightSavingsDays()[0].getMonth())&&max.getMonth()==min.getMonth()){diff+=tl.H}else{if(((min.getMonth()==min.getDayLightSavingsDays()[1].getMonth()&&min.getDate()>min.getDayLightSavingsDays()[1].getDate())||min.getMonth()<min.getDayLightSavingsDays()[1].getMonth())&&min.getMonth()==min.getMonth()){diff-=tl.H}}var result=[],out;while(diff>0){if(breakdown=="*"){breakdown="TCDYMWdHmSN"}else{if(breakdown.indexOf("T")>-1){if(out=processTime("T")){result[result.length]=out}}else{if(breakdown.indexOf("C")>-1){if(out=processTime("C")){result[result.length]=out}}else{if(breakdown.indexOf("D")>-1){if(out=processTime("D")){result[result.length]=out}}else{if(breakdown.indexOf("Y")>-1){if(out=processTime("Y")){result[result.length]=out}}else{if(breakdown.indexOf("M")>-1){if(diff>=tl.M){var cur=(new Date(max.getTime()-diff));var monthCount=0;var lastVal=0;for(var yr=cur.getFullYear();yr<=max.getFullYear();yr++){while(cur.getFullYear()==yr){lastVal=cur.getTime();cur.setMonth(cur.getMonth()+1);if(diff-(cur.getTime()-lastVal)>=0){monthCount++;diff-=(cur.getTime()-lastVal)}if(yr==max.getFullYear()&&cur.getMonth()==max.getMonth()){break}}}if(monthCount){result[result.length]=monthCount+" "+(monthCount==1&&names.M[0]||names.M[1])}}breakdown=breakdown.replace(/M/g,"")}else{if(breakdown.indexOf("W")>-1){if(out=processTime("W")){result[result.length]=out}}else{if(breakdown.indexOf("d")>-1){if(out=processTime("d")){result[result.length]=out}}else{if(breakdown.indexOf("H")>-1){if(out=processTime("H")){result[result.length]=out}}else{if(breakdown.indexOf("m")>-1){if(out=processTime("m")){result[result.length]=out}}else{if(breakdown.indexOf("S")>-1){if(out=processTime("S")){result[result.length]=out}}else{if(breakdown.indexOf("N")>-1){if(out=processTime("N")){result[result.length]=out}}else{diff=0}}}}}}}}}}}}}options.divider=options.divider||", ";if(options.divider==", "&&result.length>1&&!options.hideAnd){result[result.length-1]="and "+result[result.length-1]}diff=result.join(options.divider)}if(diff==""){diff="Same"}if(options.lc){diff=diff.toLowerCase()}return diff};window.Date.prototype.getDaysInMonth=function(){return[31,28,31,30,31,30,31,31,30,31,30,31][this.getMonth()]};window.Date.prototype.isLeapYear=function(){return(new Date(this.getFullYear(),2-1,29)).getDate()==29};window.Date.prototype.getDayLightSavingsDays=function(){var A=[];var C=new Date("03/07/"+this.getFullYear());var B=new Date("03/06/"+this.getFullYear());while(C.getMonth()<3||(C.getMonth()==3&&C.getDate()<16)){if((C.getTime()-B.getTime())/1000/60/60!=24){A[A.length]=new Date(B.getTime())}C.setDate(C.getDate()+1);B.setDate(B.getDate()+1)}var C=new Date("10/31/"+this.getFullYear());var B=new Date("10/30/"+this.getFullYear());while(C.getMonth()<11||(C.getMonth()==10&&C.getDate()<9)){if((C.getTime()-B.getTime())/1000/60/60!=24){A[A.length]=new Date(B.getTime())}C.setDate(C.getDate()+1);B.setDate(B.getDate()+1)}return A};window.Date.prototype.isDayLightSavingsDay=function(){var A=new Date(this.getTime());A.setDate(A.getDate()+1);return(A.getTime()-this.getTime())/1000/60/60!=24}
;
var s_account="pfcommunity";var s=s_gi(s_account);s.charSet="ISO-8859-1";s.currencyCode="USD";s.trackDownloadLinks=true;s.trackExternalLinks=true;s.trackInlineStats=true;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";s.linkInternalFilters="javascript:,community.premierfarnell.com,element-14.com,element14.com";s.linkLeaveQueryString=false;s.linkTrackVars="s.prop1,s.prop2,s.prop3,s.prop4,s.prop5,s.prop6,s.prop7,s.eVar1,s.eVar2,s.eVar3,s.eVar4,s.eVar5,s.eVar6,s.eVar7,s.eVar8,s.eVar9,events";s.linkTrackEvents="event1,event2,event3,event4,event5,event6,event7,event8,event9";s.dynamicAccountSelection=false;s.charSet="UTF-8";s.visitorNamespace="premierfarnell";s.dc="112";s.trackingServerSecure="smetrics.newark.com";s.trackingServer="metrics.newark.com";s.usePlugins=true;function s_doPlugins(A){if(!A.campaign){A.campaign=A.getValOnce(A.getQueryParam("CMP"),"CMP_cookie")}if(!A.eVar7){A.eVar7=A.getValOnce(A.getQueryParam("ICID"),"ICID_cookie")}}s.doPlugins=s_doPlugins;s.getQueryParam=new Function("p","d","u","var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");s.p_gpv=new Function("k","u","var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");s.p_gvf=new Function("t","k","if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");s.getValOnce=new Function("v","c","e","var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");var s_code="",s_objectID;function s_gi(E,F,N){var H="s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s.an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else{x=x?s.rep(escape(''+x),'+','%2B'):x;if(x&&c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;return x?unescape(s.rep(''+x,'+',' ')):x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(wd){var s=this,c=''+s_gi,a=c.indexOf(\"{\"),b=c.lastIndexOf(\"}\"),m;c=s_fe(a>0&&b>0?c.substring(a+1,b):0);if(wd&&wd.document&&c){wd.setTimeout('function s_sv(o,n,k){var v=o[k],i;if(v){if(typeof(v)==\"string\"||typeof(v)==\"number\")n[k]=v;else if (typeof(v)==\"array\"){n[k]=new Array;for(i=0;i<v.length;i++)s_sv(v,n[k],i)}else if (typeof(v)==\"object\"){n[k]=new Object;for(i in v)s_sv(v,n[k],i)}}}function s_si(t){var wd=window,s,i,j,c,a,b;wd.s_gi=new Function(\"un\",\"pg\",\"ss\",\"'+c+'\");wd.s=s_gi(\"'+s.oun+'\");s=wd.s;s.sa(\"'+s.un+'\");s.tfs=wd;s.pt(s.vl_g,\",\",\"vo1\",t);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3=\\'\\';if(t.m_l&&t.m_nl)for(i=0;i<t.m_nl.length;i++){n=t.m_nl[i];if(n){m=t[n];c=t[\"m_\"+n];if(m&&c){c=\"\"+c;if(c.indexOf(\"function\")>=0){a=c.indexOf(\"{\");b=c.lastIndexOf(\"}\");c=a>0&&b>0?c.substring(a+1,b):0;s[\"m_\"+n+\"_c\"]=c;if(m._e)s.loadModule(n);if(s[n])for(j=0;j<m._l.length;j++)s_sv(m,s[n],m._l[j])}}}}}var e,o,t;try{o=window.opener;if(o&&o.s_gi){t=o.s_gi(\"'+s.un+'\");if(t)s_si(t)}}catch(e){}',1)}};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.20.3/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac){if(s.apv>5.5)rs=s.fl(rs,4095);else rs=s.fl(rs,2047)}if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(rs.indexOf('&pe=')>=0&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if(t=='INPUT'&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(o.value&&(t=='INPUT'||t=='SUBMIT')){n=o.value;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?','+t.substring(0,e)+',':'';return u&&u.indexOf(','+un+',')>=0?s.epa(t.substring(e+1)):''};s.rq=function(un){var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta='',q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}if((vo&&vo._t)||!s.m_m('d')){s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}ta=n?o.target:1;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq(s.un)),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<51;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",J=window,C=J.s_c_il,A=navigator,L=A.userAgent,K=A.appVersion,G=K.indexOf("MSIE "),B=L.indexOf("Netscape6/"),I,D,M;if(E){E=E.toLowerCase();if(C){for(D=0;D<C.length;D++){M=C[D];if(!M._c||M._c=="s_c"){if(M.oun==E){return M}else{if(M.fs&&M.sa&&M.fs(M.oun,E)){M.sa(E);return M}}}}}}J.s_an="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";J.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");J.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");J.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");J.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");J.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");J.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");J.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");H=s_d(H);if(G>0){I=parseInt(D=K.substring(G+5));if(I>3){I=parseFloat(D)}}else{if(B>0){I=parseFloat(L.substring(B+10))}else{I=parseFloat(K)}}if(I>=5&&K.indexOf("Opera")<0&&L.indexOf("Opera")<0){J.s_c=new Function("un","pg","ss","var s=this;"+H);return new s_c(E,F,N)}else{M=new Function("un","pg","ss","var s=new Object;"+s_ft(H)+";return s")}return M(E,F,N)}
;

// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (EmbeddedProductLink == null) var EmbeddedProductLink = {};
EmbeddedProductLink._path = '/community/dwr';
EmbeddedProductLink.getSearchResults = function(p0, p1, callback) {
  dwr.engine._execute(EmbeddedProductLink._path, 'EmbeddedProductLink', 'getSearchResults', p0, p1, callback);
}

;

// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (FollowingActionBean == null) var FollowingActionBean = {};
FollowingActionBean._path = '/community/dwr';
FollowingActionBean.followContainer = function(p0, p1, p2, callback) {
  dwr.engine._execute(FollowingActionBean._path, 'FollowingActionBean', 'followContainer', p0, p1, p2, callback);
}

;

// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (FriendListAction == null) var FriendListAction = {};
FriendListAction._path = '/community/dwr';
FriendListAction.getFriends = function(callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'getFriends', callback);
}
FriendListAction.getFriends = function(p0, p1, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'getFriends', p0, p1, callback);
}
FriendListAction.createList = function(p0, p1, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'createList', p0, p1, callback);
}
FriendListAction.updateList = function(p0, p1, p2, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'updateList', p0, p1, p2, callback);
}
FriendListAction.deleteList = function(p0, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'deleteList', p0, callback);
}
FriendListAction.getListsForUser = function(p0, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'getListsForUser', p0, callback);
}
FriendListAction.addRelationshipsToList = function(p0, p1, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'addRelationshipsToList', p0, p1, callback);
}
FriendListAction.removeRelationshipsFromList = function(p0, p1, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'removeRelationshipsFromList', p0, p1, callback);
}
FriendListAction.emailFriends = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'emailFriends', p0, p1, p2, p3, callback);
}
FriendListAction.watchFriends = function(p0, p1, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'watchFriends', p0, p1, callback);
}
FriendListAction.removeFriend = function(p0, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'removeFriend', p0, callback);
}
FriendListAction.removeFriends = function(p0, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'removeFriends', p0, callback);
}
FriendListAction.addFriend = function(p0, p1, p2, callback) {
  dwr.engine._execute(FriendListAction._path, 'FriendListAction', 'addFriend', p0, p1, p2, callback);
}

;

// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (OpenSearchQuery == null) var OpenSearchQuery = {};
OpenSearchQuery._path = '/community/dwr';
OpenSearchQuery.getSearchResultsByEngineID = function(p0, p1, callback) {
  dwr.engine._execute(OpenSearchQuery._path, 'OpenSearchQuery', 'getSearchResultsByEngineID', p0, p1, callback);
}
OpenSearchQuery.getExternalSearchableURLByEngineID = function(p0, p1, callback) {
  dwr.engine._execute(OpenSearchQuery._path, 'OpenSearchQuery', 'getExternalSearchableURLByEngineID', p0, p1, callback);
}

;
function getProductResultsJSON(A){if(A.length>0&&typeof (A[0].title)=="object"&&A[0].title==null){return[]}var B=rowDetailExtractor("product-detail",A,150);if(B==null||B.length<=0){return[]}else{return B}}function e14GetRoadTestScore(B,C,A){$j.ajax({url:"/community/roadtest-score-json.jspa?action=query_"+B+"&"+B+"="+C,dataType:"json",success:function(D){e14DisplayRoadTestScore(D,A)}})}function e14DisplayRoadTestScore(B,A){if(B&&B.stars&&B.ID&&B.reviews){$j(A).html('<br>RoadTest Score: <span class="pf-widget-map e14-rt-score-format e14-rt-score_'+B.stars+'"></span> <span class="e14-rt-score-reviews">(<a href="/community/groups/roadtest?view=roadTestReview&roadtestid='+B.ID+'">'+B.reviews+" reviews)")}}function e14OshwCheck(B,C,A){$j.ajax({url:"/community/oshw-json.jspa?action=query_"+B+"&"+B+"="+C,dataType:"json",success:function(D){e14DisplayOshw(D,A)}})}function e14DisplayOshw(B,A){if(B){$j(A).html('<br><a href="/community/groups/open-source-hardware#oshwintro" target="_blank"><span class="pf-widget-map e14-rt-score-format oshw-logo"></a></div>')}}function pfAddMultipleProducts(C,D){var A=C.split(",");var E=D.split(",");var B=A.length;if(B<E.length){B=E.length}A.length=B;E.length=B;for(var F=0;F<B;F++){if(typeof A[F]=="undefined"){fsku=""}else{fsku=A[F]}if(typeof E[F]=="undefined"){nsku=""}else{nsku=E[F]}scrapboxUIManager.partsHandler.addPart(fsku,nsku)}}function getProductPopupTargetType(A){switch(A){case"embedded-link":case"embedded-link-list":case"embedded-link-rt":case"embedded-link-solution":case"embedded-link-preview":case"embedded-link-auto":case"product-search-adv-widget":case"related-widget":case"superwidget-link":case"knode-product-selector":case"drawer-part-list":case"main-search":return"popup";break}if(A.indexOf("-multi")>-1){return"popup"}}function getUrlWithTracking(B,D){var C="";var A="";switch(D){case"embedded-link":case"embedded-link-list":case"embedded-link-rt":case"embedded-link-solution":case"embedded-link-preview":case"embedded-link-list-multi":case"embedded-link-auto":case"product-search-adv-widget":case"related-widget":case"superwidget-link":case"knode-product-selector":C=D;if(typeof currentContainerName=="string"&&currentContainerName!=""){C+="_"+currentContainerName}break;case"drawer-part-list":case"drawer-cart-request":case"main-search":case"main-search-datasheet":case"main-search-category":C=D;break}if(B!=undefined&&C!=""){if(B.indexOf("COM=")<0){A="COM="+C;if(B.indexOf("?")>-1){A="&"+A}else{A="?"+A}}}return B+A}function pfProductSwitchPanel(A,B){var C=A.parentNode.id.substring(12);$j("span[id^=product-panel-]:visible").hide();$j("span[id^=product-tab-]").removeClass("pf-body-tabcurrent");$j("#product-panel-"+C).show();$j("#product-tab-"+C).addClass("pf-body-tabcurrent");if(C=="datasheets"){pfTrackEvent(true,_jive_current_user.username,"event67","productDetailShowDatasheets-"+B)}}function getProductHTML(A,I,M,H){var B=getProductPopupTargetType(A);var F=A.indexOf("-multi")>0;var G="";if(B=="popup"){G='<div style="top:2px;right:1px;position:absolute;"><a onclick="productSearch.closePopup();" href="javascript:void(0)" class="cancel-login" id="close-ec-dialog" style="float:right"><img src="/community/resources/scripts/fancyzoom/images/closebox.png"></a></div>'}var K="";if(F){G+='<div style="top:2px;left:2px;position:absolute;"><a onclick="$j(\'#\'+productSearch.popupContentId).html(productSearch.multiResultHTML);" href="javascript:void(0)" class="cancel-login" id="close-ec-dialog" style="float:left"><img src="/community/themes/e14/images/back-icon.png"></a></div>';K=' style="padding-left:30px;"'}if(I.length==0){G+=M.msgNoResults}else{if(I.length==1){G+="<table border=0 cellpadding=2 cellspacing=0 width=385>";G+="<tr>";G+="  <td colspan=2>";G+='  <table border=0 cellpadding=2 cellspacing=0 width="100%">';G+='    <tr><td class="pf-product-info-title" width="95%"'+K+">"+I[0].title+'</td><td width="32">&nbsp;</td></tr>';G+="  </table>";G+="  </td>";G+="</tr><tr>";G+='  <td width="160" valign="top" style="border:1px solid #999999;"><img src="'+I[0].imageFull+'" class="pf-product-info-main-image"><br><span class="pf-product-info-illustrative">'+M.lblImage+"</span></td>";G+='  <td style="padding-left:8px;border:0px;">';G+="  "+M.lblManufacturer+"<b>"+I[0].manuf+"</b><br>";G+="  "+M.lblMfgPartNumber+"<b>"+I[0].msku+"</b><br>";G+="  "+M.lblPrice+I[0].price+"<br>";G+='<div id="roadTestProduct"></div>';G+='<div id="oshwProduct"></div>';G+="  <br>";if(I[0].avail>0){G+=M.lblAvail+'<br><span class="pf-product-info-available">'+I[0].avail+" "+M.lblShip+"</span><br>"}else{G+=M.lblAvail+' <span id="pf-product-info-nostock">'+resolveAvailability(M,I[0].avail)+"</span><br>"}G+="  <br>";G+='  <div class="nicebuttons">';G+='  <button type="button" class="buy" onclick="window.open(\''+getUrlWithTracking(I[0].link,A)+"'); pfTrackEvent(true, _jive_current_user.username, 'event62', 'productDetailViewOnStore-"+A+'\');"><span class="pf-widget-map pf-product-cart-icon" alt="'+M.lblBuyNow+'" style="margin-right:2px;"></span> '+M.lblBuyNow+"</button>";if(A!="drawer-part-list"){G+='  <button type="button" class="standard" style="margin-top:5px;margin-bottom:5px;" onclick="scrapboxUIManager.partsHandler.addPart(\''+H.farnellCode+"', '"+H.newarkCode+'\');"><span class="pf-widget-map pf-product-add-icon-nopadding" alt="'+M.lblAdd+'" style="margin-right:2px;"></span> '+M.lblAdd+"</button>"}G+="  </div>";G+="  </td>";G+="</tr>";G+="</table>";G+='<div id="product-tabbed-panel" style="margin-top:5px;">';G+='<div id="product-detail-tabs"><span id="product-tab-description" class="pf-body-tab pf-body-tabcurrent"><a href="javascript:;" onclick="pfProductSwitchPanel(this, \''+A+'\');" style="text-decoration:none">'+M.lblDesc+"</a></span>";G+='<span id="product-tab-datasheets" class="pf-body-tab"><a href="javascript:;" onclick="pfProductSwitchPanel(this, \''+A+'\');"  style="text-decoration:none">'+M.lblDatasheets+'<span id="product-tab-datasheets-progress"></span></a></span></div>';G+='<span id="product-panel-description" style="float:left;">';if(I[0].attribs.length>0){G+='<table border=0 cellpadding=2 cellspacing=0 width=385 style="border-top:1px solid #ffffff">';for(var J=0;J<I[0].attribs.length;J++){oddeven=(J%2==0)?"even":"odd";G+='<tr class="pf-product-info-attr-row-'+oddeven+'"><td class="pf-product-info-attr-name">'+I[0].attribs[J].name+'</td><td class="pf-product-info-attr-value">'+I[0].attribs[J].value+"</td></tr>"}G+="</table>"}G+="</span>";G+='<span id="product-panel-datasheets" style="float:left;display:none;">';if(I[0].attribs.length>0){}G+="</span>";G+="</div>"}else{var E=I[0].link.split("/")[2];var C=new Array();for(var L=0;L<I.length;L++){C.push(I[L].oursku)}G+="<table border=0 cellpadding=2 cellspacing=0 width=385>";G+='<tr><td align="left">';G+='<div class="nicebuttons">';G+='<button type="button" class="buy" onclick="window.open(\''+getUrlWithTracking("http://"+E+"/jsp/search/productListing.jsp?SKUS="+C.join(","),A)+"'); pfTrackEvent(true, _jive_current_user.username, 'event63', 'productDetailViewListOnStore-"+A+'\');"><span class="pf-widget-map pf-product-cart-icon" alt="'+M.lblBuyNow+'" style="margin-right:2px;"></span> '+M.lblBuyNow+"</button>";G+='<div style="height:35px;">&nbsp;</div>';var D="pfAddMultipleProducts('"+H.farnellCode+"', '"+H.newarkCode+"');";if(_jive_current_user.ID==-1){D="loginLightBox.init(document.location.href);"}G+='<button type="button" class="standard" style="margin-top:5px;" onclick="'+D+'"><span class="pf-widget-map pf-product-add-icon-nopadding" alt="'+M.lblAdd+'" style="margin-right:2px;"></span> '+M.lblAddAll+"</button>";G+="</div>";G+="</td></tr>";for(L=0;L<I.length;L++){G+="<tr><td>";G+='  <table border=0 cellpadding=2 cellspacing=0 width=385 style="margin-top:5px" class="pf-prod-row">';G+='  <tr><td width="45" align="center" valign="middle" style="border:1px solid #999999;background-color:#ffffff;"><img src="'+I[L].imageThumb+'" class="prod-multi-hover-image"></td>';G+='  <td valign="top" style="padding-left:8px;" onclick="productSearch.getSearchResults(\''+A+"-multi', this, '"+I[L].oursku+"', '');\">"+I[L].title+"<br>"+I[L].manuf+", "+I[L].msku+"<br>"+I[L].price+"&nbsp;&nbsp;";if(I[L].avail>0){G+=" "+I[L].avail+" "+M.lblShip}else{G+=resolveAvailability(M,I[L].avail)}G+="  </td></tr>";G+="  </table>";G+="</td></tr>"}G+="</table>";productSearch.multiResultHTML=G}}return G}function pfFormatProductDatasheets(I,D,B,A){var E='<table border=0 cellpadding=2 cellspacing=0 width=385 style="border-top:1px solid #ffffff">';if(D.premierFarnellPartNumberReturn&&D.premierFarnellPartNumberReturn.products&&D.premierFarnellPartNumberReturn.products[0].datasheets&&D.premierFarnellPartNumberReturn.products[0].datasheets.length>0){var H=D.premierFarnellPartNumberReturn.products[0].rohsStatusCode=="YES";var C=0;if(H){C=1}$j("#product-tab-datasheets-progress").html("("+(C+D.premierFarnellPartNumberReturn.products[0].datasheets.length)+")");if(H){E+='<tr class="pf-product-info-attr-row-even"><td class="pf-product-info-attr-name"><a href="http://uk.farnell.com/jsp/level5/rohsCertificate.jsp?sku='+D.premierFarnellPartNumberReturn.products[0].sku+'" target="_blank">RoHS Certificate of Compliance</a></td></tr>'}if(!B){E+='<tr class="pf-product-info-attr-row-odd"><td class="pf-product-info-attr-name" colspan=2 style="background-color:#FFFFE7;padding:12px 15px 12px 15px"><b>'+I.lblLoginToDownload+"</b></td></tr>"}for(var G=0;G<D.premierFarnellPartNumberReturn.products[0].datasheets.length;G++){oddeven=(G%2==0)?"odd":"even";E+='<tr class="pf-product-info-attr-row-'+oddeven+'"><td class="pf-product-info-attr-name">';if(B){var F="pfTrackEvent(true, _jive_current_user.username, 'event64', 'productDetailDownloadDatasheet-"+A+"');";if(D.premierFarnellPartNumberReturn.products[0].datasheets[G].description.indexOf("CadSoft")>-1){F="pfTrackEvent(true, _jive_current_user.username, 'event66', 'productDetailDownloadCAD-"+A+"');"}E+='<a href="'+D.premierFarnellPartNumberReturn.products[0].datasheets[G].url+'" target="_blank" onclick="'+F+'">'}E+=D.premierFarnellPartNumberReturn.products[0].datasheets[G].description;if(B){E+="</a>"}E+="</td></tr>"}$j("#product-tab-datasheets").effect("highlight")}else{$j("#product-tab-datasheets-progress").html("(0)");if(D.Fault){E+='<tr class="pf-product-info-attr-row-odd"><td class="pf-product-info-attr-name"><br>'+I.lblResultsProblem+"<br><br></td></tr>"}else{E+='<tr class="pf-product-info-attr-row-odd"><td class="pf-product-info-attr-name"><br>'+I.lblNoResults+"<br><br></td></tr>"}}if(D.premierFarnellPartNumberReturn&&D.premierFarnellPartNumberReturn.products){updateAvailability(I,D.premierFarnellPartNumberReturn.products[0])}E+="</table>";$j("#product-panel-datasheets").html(E)}function resolveAvailability(B,A){switch(A){case"-1":return B.lblStockAwaitingDelivery;case"-2":return B.lblStockShortLeadTime;case"-3":return B.lblStockNotManufactured;case"-4":return B.lblStockNotStocked;case"-6":return B.lblStockReplacedRoHS;case"-7":return B.lblStockStockedonDemand;case"-8":return B.lblStockObsolete;default:return B.lblStockOutOfStock}}function updateAvailability(B,A){if(A.comingSoon){$j("#pf-product-info-nostock").html('<br><span class="pf-product-info-available">'+B.lblStockComingSoon+"</span>")}}function rowDetailExtractor(S,J,Q){var T=[];var B=J.length;if(B>Q){B=Q}for(var R=0;R<B;R++){switch(S){case"product-detail":var U=J[R].title;var M=J[R].description;var F=J[R].resourceURL;var C=extractPFData("manuf",M);var P=extractPFData("msku",M);var N=extractPFData("fsku",F);var K=extractPFData("image",M);if(K.indexOf("http:")==-1){K=""}var E=K.replace("thumbnail","standard");var L=extractPFData("price",M);var G=extractPFData("avail",M);var D=extractPFData("attribs",M);var H=[];var A=D.split("</span>");for(var O=0;O<A.length-1;O++){A[O]=A[O].replace("</span>","");A[O]=extractTagsAfter(A[O],'title="',"");var I=A[O].split('">');H.push({name:I[0],value:I[1]})}T.push({id:N,link:F,title:U,oursku:N,msku:P,manuf:C,imageFull:E,imageThumb:K,price:L,avail:G,attribs:H});break}}return T}
;
