/*swfkrpanomousewheel.js v1.1 for SWFObject 1.5;*/
function SWFkrpanoMouseWheel(swfObject){SWFkrpanoMouseWheel.isMac=navigator.appVersion.toLowerCase().indexOf("mac")!=-1;SWFkrpanoMouseWheel.isSafari=navigator.appVersion.toLowerCase().indexOf("safari")!=-1;this.so=swfObject;this.init();}
SWFkrpanoMouseWheel.prototype={init:function(){if(!SWFkrpanoMouseWheel.instances){SWFkrpanoMouseWheel.instances=new Array();if(window.addEventListener){window.addEventListener('DOMMouseScroll',krpmw_we,false);}if(window.opera){window.attachEvent("onmousewheel",krpmw_we);}else{window.onmousewheel=document.onmousewheel=krpmw_we;}if(window.opera||SWFkrpanoMouseWheel.isMac||SWFkrpanoMouseWheel.isSafari){var oldonload=window.onload;if(typeof window.onload!="function"){window.onload=krpmw_red;}else{window.onload=function(){oldonload();krpmw_red();}}}}SWFkrpanoMouseWheel.instances.push(this);},handleMacWheel:function(delta){var obj=document[this.so.getAttribute('id')];if(obj&&obj.externalMouseEvent){obj.externalMouseEvent(delta);}},hasWheelEvent:function(){return document[this.so.getAttribute('id')].get("has_mousewheel_event()")=="true";}};
function krpmw_red(){setTimeout(krpmw_re,1000);}
function krpmw_re(){var i=0;var cnt=SWFkrpanoMouseWheel.instances.length;for(i=0;i<cnt;i++){var objid=SWFkrpanoMouseWheel.instances[i].so.getAttribute('id');var obj=document[objid];if(obj){if (!SWFkrpanoMouseWheel.overobj){SWFkrpanoMouseWheel.overobj=objid;}if(SWFkrpanoMouseWheel.isSafari && !SWFkrpanoMouseWheel.isMac){if(obj.enable_mousewheel_js_bugfix){obj.enable_mousewheel_js_bugfix();}}else{obj.onmouseover=krpmw_ove;obj.onmouseout=krpmw_oue;}}}}
function krpmw_ove(e){SWFkrpanoMouseWheel.overobj=e.target.id;if(SWFkrpanoMouseWheel.isSafari&&SWFkrpanoMouseWheel.isMac){SWFkrpanoMouseWheel.spx=window.pageXOffset;SWFkrpanoMouseWheel.spy=window.pageYOffset;}}
function krpmw_oue(e){SWFkrpanoMouseWheel.overobj=null;}
function krpmw_we(e){if(!e)e=window.event;var delta=0;if(e.wheelDelta){delta=e.wheelDelta/120.0;if(window.opera){if(SWFkrpanoMouseWheel.isMac==false){delta=-delta;}}}else if(e.detail){delta=-e.detail;}var stopevent=false;if(delta){var i=0;var cnt=SWFkrpanoMouseWheel.instances.length;for(i=0;i<cnt;i++){var objid=SWFkrpanoMouseWheel.instances[i].so.getAttribute('id');var obj=document[objid];if(SWFkrpanoMouseWheel.isSafari&&!SWFkrpanoMouseWheel.isMac){SWFkrpanoMouseWheel.instances[i].handleMacWheel(delta);}else{if(SWFkrpanoMouseWheel.isMac||SWFkrpanoMouseWheel.isSafari){if(SWFkrpanoMouseWheel.overobj==objid){SWFkrpanoMouseWheel.instances[i].handleMacWheel(delta);document[objid].focus();stopevent=true;break;}}if(SWFkrpanoMouseWheel.instances[i].hasWheelEvent()){stopevent=true;break;}}}}if(SWFkrpanoMouseWheel.overobj){stopevent=true;}if(stopevent){if(SWFkrpanoMouseWheel.isSafari&&SWFkrpanoMouseWheel.isMac){window.scrollTo(SWFkrpanoMouseWheel.spx,SWFkrpanoMouseWheel.spy);}if(e.stopPropagation) e.stopPropagation();if(e.preventDefault) e.preventDefault();e.cancelBubble=true;e.cancel=true;e.returnValue=false;}}
