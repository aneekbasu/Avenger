/*
	swfkrpano.js
	krpano 1.0.8.11

	usage informations:
		http://krpano.com/docu/swfkrpanojs/

	this script has the SWFObject v1.5 script embedded:
		SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
		SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
		http://www.opensource.org/licenses/mit-license.php
*/
if(typeof(deconcept)=="undefined"){var deconcept=new Object();}if(typeof(deconcept.util)=="undefined"){deconcept.util=new Object();}if(typeof(deconcept.SWFObjectUtil)=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";
this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");
this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");
if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];
if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};
window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
function SWFkrpanoMouseWheel(a){SWFkrpanoMouseWheel.isMac=navigator.appVersion.toLowerCase().indexOf("mac")!=-1;var b=String(a.params.wmode).toLowerCase();this.wmodefix=b=="opaque"||b=="transparent";this.so=a;this.init()}
SWFkrpanoMouseWheel.prototype={init:function(){if(!SWFkrpanoMouseWheel.instances){SWFkrpanoMouseWheel.instances=[];window.addEventListener&&window.addEventListener("DOMMouseScroll",SWFkrpanoMouseWheel_wheelEvent,false);if(window.opera)window.attachEvent("onmousewheel",SWFkrpanoMouseWheel_wheelEvent);else window.onmousewheel=document.onmousewheel=SWFkrpanoMouseWheel_wheelEvent;if(SWFkrpanoMouseWheel.isMac||this.wmodefix){document.onmouseup=SWFkrpanoMouseWheel_upEvent;var a=window.onload;window.onload=
typeof window.onload!="function"?SWFkrpanoMouseWheel_registerEvents_delayed:function(){a();SWFkrpanoMouseWheel_registerEvents_delayed()}}}SWFkrpanoMouseWheel.instances.push(this)},handleMacWheel:function(a){var b=document[this.so.getAttribute("id")];b&&b.externalMouseEvent&&b.externalMouseEvent(a)},hasWheelEvent:function(){var a=document[this.so.getAttribute("id")];if(a&&a.get)return a.get("has_mousewheel_event()")=="true";return false}};
function SWFkrpanoMouseWheel_registerEvents_delayed(){setTimeout(SWFkrpanoMouseWheel_registerEvents,1E3)}
function SWFkrpanoMouseWheel_registerEvents(){var a=0,b=SWFkrpanoMouseWheel.instances.length;for(a=0;a<b;a++){var d=SWFkrpanoMouseWheel.instances[a].so,c=d.getAttribute("id");if(c=document[c]){c.wmodefix=SWFkrpanoMouseWheel.instances[a].wmodefix;if(window.opera&&SWFkrpanoMouseWheel.isMac)if(b==1)SWFkrpanoMouseWheel.overobj=d.getAttribute("id");c.onclick=SWFkrpanoMouseWheel_overEvent;c.onmouseover=SWFkrpanoMouseWheel_overEvent;c.onmouseout=SWFkrpanoMouseWheel_outEvent;if(c.wmodefix)if(c.enable_mousewheel_js_bugfix){c.enable_mousewheel_js_bugfix();
c.jsmwfix_on=true}}}}function SWFkrpanoMouseWheel_overEvent(a){if(a=a&&a.target&&a.target.id?a.target.id:this.id){var b=document[a];SWFkrpanoMouseWheel.overobj=a;if(b.wmodefix)if(b.jsmwfix_on!=true)if(b.enable_mousewheel_js_bugfix){b.enable_mousewheel_js_bugfix();b.jsmwfix_on=true}}}function SWFkrpanoMouseWheel_outEvent(){SWFkrpanoMouseWheel.overobj=null}
function SWFkrpanoMouseWheel_upEvent(){var a=0,b=SWFkrpanoMouseWheel.instances.length;for(a=0;a<b;a++){var d=SWFkrpanoMouseWheel.instances[a].so.getAttribute("id");if((d=document[d])&&(SWFkrpanoMouseWheel.isMac||d.wmodefix))d.externalMouseEvent2&&d.externalMouseEvent2(0,"mouseUp")}}
function SWFkrpanoMouseWheel_wheelEvent(a){if(!a)a=window.event;var b=0;if(a.wheelDelta){b=a.wheelDelta/120;if(window.opera)if(SWFkrpanoMouseWheel.isMac==false)b=-b}else if(a.detail)b=-a.detail;var d=false;if(b){var c=0,f=SWFkrpanoMouseWheel.instances.length;for(c=0;c<f;c++){var e=SWFkrpanoMouseWheel.instances[c].so.getAttribute("id"),g=document[e];if(SWFkrpanoMouseWheel.isMac||g.wmodefix)if(SWFkrpanoMouseWheel.overobj==e){SWFkrpanoMouseWheel.instances[c].handleMacWheel(b);document[e].focus();d=true;
break}if(SWFkrpanoMouseWheel.instances[c].hasWheelEvent()){d=true;break}}}if(SWFkrpanoMouseWheel.overobj)d=true;if(d){a.stopPropagation&&a.stopPropagation();a.preventDefault&&a.preventDefault();a.cancelBubble=true;a.cancel=true;a.returnValue=false}};
function createjsviewer(h){document.write('<script src="'+h+'krpanoiphone.license.js" type="text/javascript" charset="UTF-8"><\/script>');document.write('<script src="'+h+'krpanoiphone.js" type="text/javascript"><\/script>');var b={};b.vars={};b.addVariable=function(a,f){b.vars[String(a).toLowerCase()]=f};b.passQueryParameters=function(){var a=document.location.search||document.location.hash;if(a){a=a.substring(1).split("&");for(var f=0;f<a.length;f++){var e=a[f],g=e.indexOf("=");if(g==-1)g=e.length;
var c=e.substring(0,g);e=e.substring(g+1);b.addVariable(c,e)}}};b.embed=function(a){b.htmltarget=a;window.onload=function(){if(typeof krpanojs_init==="undefined")document.getElementById(a).innerHTML='<table width="100%" height="100%"><tr valign="middle"><td><center>ERROR:<br/><br/>iPhone / iPad Version not available!<br/><br/><br/><br/></center></td></tr></table>';else krpanojs_init(b)}};return b}
function createswf(h,b,a,f,e){ua=navigator.userAgent.toLowerCase();if(ua.indexOf("ipad")>=0||ua.indexOf("iphone")>=0||ua.indexOf("ipod")>=0){b="./";a=h.lastIndexOf("/");if(a>=0)b=h.slice(0,a+1);return createjsviewer(b)}if(typeof b==="undefined")b="krpanoSWFObject";if(typeof a==="undefined")a="100%";if(typeof f==="undefined")f="100%";if(typeof e==="undefined")e="#000000";var g="";if(typeof deconcept!=="undefined")if(deconcept.SWFObjectUtil.getPlayerVersion().major>=9){var c=new SWFObject(h,b,a,f,"9.0.28",
e);c.addParam("allowFullScreen","true");c.addParam("allowScriptAccess","always");c.embed=function(d){if(c.write(d))d=new SWFkrpanoMouseWheel(c)};c.passQueryParameters=function(){var d=document.location.search||document.location.hash;if(d){d=d.substring(1).split("&");for(var j=0;j<d.length;j++){var i=d[j],k=i.indexOf("=");if(k==-1)k=i.length;var l=i.substring(0,k);i=i.substring(k+1);c.addVariable(l,i)}}};return c}else g='Adobe Flash Player 9/10 or higher needed<br/><br/><br/><a href="http://www.adobe.com/go/getflashplayer/" target="_blank"><IMG SRC="http://www.macromedia.com/images/shared/download_buttons/get_flash_player.gif" BORDER="1" /></a><br/><small>...click here to download...</small><br/><br/>';
else g="corrupt swfkrpano.js";c={};c.addVariable=function(d,j){};c.passQueryParameters=function(){};c.embed=function(d){document.getElementById(d).innerHTML='<table width="100%" height="100%"><tr valign="middle"><td><center>ERROR:<br/><br/>'+g+"<br/><br/></center></td></tr></table>"};return c};
