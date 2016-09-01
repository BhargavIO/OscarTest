/***

    MochiKit.MochiKit 1.4 : PACKED VERSION
    + DragAndDrop.js

***/

if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Base");
}
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.Base)=="undefined"){
MochiKit.Base={};
}
if(typeof (MochiKit.__export__)=="undefined"){
MochiKit.__export__=(MochiKit.__compat__||(typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined"));
}
MochiKit.Base.VERSION="1.4";
MochiKit.Base.NAME="MochiKit.Base";
MochiKit.Base.update=function(_1,_2){
if(_1===null){
_1={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
_1[k]=o[k];
}
}
}
return _1;
};
MochiKit.Base.update(MochiKit.Base,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},camelize:function(_6){
var _7=_6.split("-");
var cc=_7[0];
for(var i=1;i<_7.length;i++){
cc+=_7[i].charAt(0).toUpperCase()+_7[i].substring(1);
}
return cc;
},counter:function(n){
if(arguments.length===0){
n=1;
}
return function(){
return n++;
};
},clone:function(obj){
var me=arguments.callee;
if(arguments.length==1){
me.prototype=obj;
return new me();
}
},_flattenArray:function(res,lst){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(o instanceof Array){
arguments.callee(res,o);
}else{
res.push(o);
}
}
return res;
},flattenArray:function(lst){
return MochiKit.Base._flattenArray([],lst);
},flattenArguments:function(lst){
var res=[];
var m=MochiKit.Base;
var _15=m.extend(null,arguments);
while(_15.length){
var o=_15.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
for(var i=o.length-1;i>=0;i--){
_15.unshift(o[i]);
}
}else{
res.push(o);
}
}
return res;
},extend:function(_16,obj,_17){
if(!_17){
_17=0;
}
if(obj){
var l=obj.length;
if(typeof (l)!="number"){
if(typeof (MochiKit.Iter)!="undefined"){
obj=MochiKit.Iter.list(obj);
l=obj.length;
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(!_16){
_16=[];
}
for(var i=_17;i<l;i++){
_16.push(obj[i]);
}
}
return _16;
},updatetree:function(_19,obj){
if(_19===null){
_19={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
var v=o[k];
if(typeof (_19[k])=="object"&&typeof (v)=="object"){
arguments.callee(_19[k],v);
}else{
_19[k]=v;
}
}
}
}
return _19;
},setdefault:function(_21,obj){
if(_21===null){
_21={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
for(var k in o){
if(!(k in _21)){
_21[k]=o[k];
}
}
}
return _21;
},keys:function(obj){
var _22=[];
for(var _23 in obj){
_22.push(_23);
}
return _22;
},values:function(obj){
var _24=[];
for(var _25 in obj){
_24.push(obj[_25]);
}
return _24;
},items:function(obj){
var _26=[];
var e;
for(var _28 in obj){
var v;
try{
v=obj[_28];
}
catch(e){
continue;
}
_26.push([_28,v]);
}
return _26;
},_newNamedError:function(_29,_30,_31){
_31.prototype=new MochiKit.Base.NamedError(_29.NAME+"."+_30);
_29[_30]=_31;
},operator:{truth:function(a){
return !!a;
},lognot:function(a){
return !a;
},identity:function(a){
return a;
},not:function(a){
return ~a;
},neg:function(a){
return -a;
},add:function(a,b){
return a+b;
},sub:function(a,b){
return a-b;
},div:function(a,b){
return a/b;
},mod:function(a,b){
return a%b;
},mul:function(a,b){
return a*b;
},and:function(a,b){
return a&b;
},or:function(a,b){
return a|b;
},xor:function(a,b){
return a^b;
},lshift:function(a,b){
return a<<b;
},rshift:function(a,b){
return a>>b;
},zrshift:function(a,b){
return a>>>b;
},eq:function(a,b){
return a==b;
},ne:function(a,b){
return a!=b;
},gt:function(a,b){
return a>b;
},ge:function(a,b){
return a>=b;
},lt:function(a,b){
return a<b;
},le:function(a,b){
return a<=b;
},seq:function(a,b){
return a===b;
},sne:function(a,b){
return a!==b;
},ceq:function(a,b){
return MochiKit.Base.compare(a,b)===0;
},cne:function(a,b){
return MochiKit.Base.compare(a,b)!==0;
},cgt:function(a,b){
return MochiKit.Base.compare(a,b)==1;
},cge:function(a,b){
return MochiKit.Base.compare(a,b)!=-1;
},clt:function(a,b){
return MochiKit.Base.compare(a,b)==-1;
},cle:function(a,b){
return MochiKit.Base.compare(a,b)!=1;
},logand:function(a,b){
return a&&b;
},logor:function(a,b){
return a||b;
},contains:function(a,b){
return b in a;
}},forwardCall:function(_34){
return function(){
return this[_34].apply(this,arguments);
};
},itemgetter:function(_35){
return function(arg){
return arg[_35];
};
},typeMatcher:function(){
var _37={};
for(var i=0;i<arguments.length;i++){
var typ=arguments[i];
_37[typ]=typ;
}
return function(){
for(var i=0;i<arguments.length;i++){
if(!(typeof (arguments[i]) in _37)){
return false;
}
}
return true;
};
},isNull:function(){
for(var i=0;i<arguments.length;i++){
if(arguments[i]!==null){
return false;
}
}
return true;
},isUndefinedOrNull:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(typeof (o)=="undefined"||o===null)){
return false;
}
}
return true;
},isEmpty:function(obj){
return !MochiKit.Base.isNotEmpty.apply(this,arguments);
},isNotEmpty:function(obj){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(o&&o.length)){
return false;
}
}
return true;
},isArrayLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
var typ=typeof (o);
if((typ!="object"&&!(typ=="function"&&typeof (o.item)=="function"))||o===null||typeof (o.length)!="number"||o.nodeType===3){
return false;
}
}
return true;
},isDateLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="object"||o===null||typeof (o.getTime)!="function"){
return false;
}
}
return true;
},xmap:function(fn){
if(fn===null){
return MochiKit.Base.extend(null,arguments,1);
}
var _40=[];
for(var i=1;i<arguments.length;i++){
_40.push(fn(arguments[i]));
}
return _40;
},map:function(fn,lst){
var m=MochiKit.Base;
var itr=MochiKit.Iter;
var _42=m.isArrayLike;
if(arguments.length<=2){
if(!_42(lst)){
if(itr){
lst=itr.list(lst);
if(fn===null){
return lst;
}
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
return m.extend(null,lst);
}
var _43=[];
for(var i=0;i<lst.length;i++){
_43.push(fn(lst[i]));
}
return _43;
}else{
if(fn===null){
fn=Array;
}
var _44=null;
for(i=1;i<arguments.length;i++){
if(!_42(arguments[i])){
if(itr){
return itr.list(itr.imap.apply(null,arguments));
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
var l=arguments[i].length;
if(_44===null||_44>l){
_44=l;
}
}
_43=[];
for(i=0;i<_44;i++){
var _45=[];
for(var j=1;j<arguments.length;j++){
_45.push(arguments[j][i]);
}
_43.push(fn.apply(this,_45));
}
return _43;
}
},xfilter:function(fn){
var _47=[];
if(fn===null){
fn=MochiKit.Base.operator.truth;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(fn(o)){
_47.push(o);
}
}
return _47;
},filter:function(fn,lst,_48){
var _49=[];
var m=MochiKit.Base;
if(!m.isArrayLike(lst)){
if(MochiKit.Iter){
lst=MochiKit.Iter.list(lst);
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
fn=m.operator.truth;
}
if(typeof (Array.prototype.filter)=="function"){
return Array.prototype.filter.call(lst,fn,_48);
}else{
if(typeof (_48)=="undefined"||_48===null){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(fn(o)){
_49.push(o);
}
}
}else{
for(i=0;i<lst.length;i++){
o=lst[i];
if(fn.call(_48,o)){
_49.push(o);
}
}
}
}
return _49;
},_wrapDumbFunction:function(_50){
return function(){
switch(arguments.length){
case 0:
return _50();
case 1:
return _50(arguments[0]);
case 2:
return _50(arguments[0],arguments[1]);
case 3:
return _50(arguments[0],arguments[1],arguments[2]);
}
var _51=[];
for(var i=0;i<arguments.length;i++){
_51.push("arguments["+i+"]");
}
return eval("(func("+_51.join(",")+"))");
};
},methodcaller:function(_52){
var _53=MochiKit.Base.extend(null,arguments,1);
if(typeof (_52)=="function"){
return function(obj){
return _52.apply(obj,_53);
};
}else{
return function(obj){
return obj[_52].apply(obj,_53);
};
}
},method:function(_54,_55){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([_55,_54],arguments,2));
},compose:function(f1,f2){
var _58=[];
var m=MochiKit.Base;
if(arguments.length===0){
throw new TypeError("compose() requires at least one argument");
}
for(var i=0;i<arguments.length;i++){
var fn=arguments[i];
if(typeof (fn)!="function"){
throw new TypeError(m.repr(fn)+" is not a function");
}
_58.push(fn);
}
return function(){
var _59=arguments;
for(var i=_58.length-1;i>=0;i--){
_59=[_58[i].apply(this,_59)];
}
return _59[0];
};
},bind:function(_60,_61){
if(typeof (_60)=="string"){
_60=_61[_60];
}
var _62=_60.im_func;
var _63=_60.im_preargs;
var _64=_60.im_self;
var m=MochiKit.Base;
if(typeof (_60)=="function"&&typeof (_60.apply)=="undefined"){
_60=m._wrapDumbFunction(_60);
}
if(typeof (_62)!="function"){
_62=_60;
}
if(typeof (_61)!="undefined"){
_64=_61;
}
if(typeof (_63)=="undefined"){
_63=[];
}else{
_63=_63.slice();
}
m.extend(_63,arguments,2);
var _65=function(){
var _66=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_66=m.concat(me.im_preargs,_66);
}
var _61=me.im_self;
if(!_61){
_61=this;
}
return me.im_func.apply(_61,_66);
};
_65.im_self=_64;
_65.im_func=_62;
_65.im_preargs=_63;
return _65;
},bindMethods:function(_67){
var _68=MochiKit.Base.bind;
for(var k in _67){
var _69=_67[k];
if(typeof (_69)=="function"){
_67[k]=_68(_69,_67);
}
}
},registerComparator:function(_70,_71,_72,_73){
MochiKit.Base.comparatorRegistry.register(_70,_71,_72,_73);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _74=(typeof (a)=="undefined"||a===null);
var _75=(typeof (b)=="undefined"||b===null);
if(_74&&_75){
return 0;
}else{
if(_74){
return -1;
}else{
if(_75){
return 1;
}
}
}
var m=MochiKit.Base;
var _76=m._primitives;
if(!(typeof (a) in _76&&typeof (b) in _76)){
try{
return m.comparatorRegistry.match(a,b);
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
}
if(a<b){
return -1;
}else{
if(a>b){
return 1;
}
}
var _77=m.repr;
throw new TypeError(_77(a)+" and "+_77(b)+" can not be compared");
},compareDateLike:function(a,b){
return MochiKit.Base.compare(a.getTime(),b.getTime());
},compareArrayLike:function(a,b){
var _78=MochiKit.Base.compare;
var _79=a.length;
var _80=0;
if(_79>b.length){
_80=1;
_79=b.length;
}else{
if(_79<b.length){
_80=-1;
}
}
for(var i=0;i<_79;i++){
var cmp=_78(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _80;
},registerRepr:function(_82,_83,_84,_85){
MochiKit.Base.reprRegistry.register(_82,_83,_84,_85);
},repr:function(o){
if(typeof (o)=="undefined"){
return "undefined";
}else{
if(o===null){
return "null";
}
}
try{
if(typeof (o.__repr__)=="function"){
return o.__repr__();
}else{
if(typeof (o.repr)=="function"&&o.repr!=arguments.callee){
return o.repr();
}
}
return MochiKit.Base.reprRegistry.match(o);
}
catch(e){
if(typeof (o.NAME)=="string"&&(o.toString==Function.prototype.toString||o.toString==Object.prototype.toString)){
return o.NAME;
}
}
try{
var _86=(o+"");
}
catch(e){
return "["+typeof (o)+"]";
}
if(typeof (o)=="function"){
o=_86.replace(/^\s+/,"");
var idx=o.indexOf("{");
if(idx!=-1){
o=o.substr(0,idx)+"{...}";
}
}
return _86;
},reprArrayLike:function(o){
var m=MochiKit.Base;
return "["+m.map(m.repr,o).join(", ")+"]";
},reprString:function(o){
return ("\""+o.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
},reprNumber:function(o){
return o+"";
},registerJSON:function(_88,_89,_90,_91){
MochiKit.Base.jsonRegistry.register(_88,_89,_90,_91);
},evalJSON:function(){
return eval("("+arguments[0]+")");
},serializeJSON:function(o){
var _92=typeof (o);
if(_92=="number"||_92=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}
}
var m=MochiKit.Base;
var _93=m.reprString;
if(_92=="string"){
return _93(o);
}
var me=arguments.callee;
var _94;
if(typeof (o.__json__)=="function"){
_94=o.__json__();
if(o!==_94){
return me(_94);
}
}
if(typeof (o.json)=="function"){
_94=o.json();
if(o!==_94){
return me(_94);
}
}
if(_92!="function"&&typeof (o.length)=="number"){
var res=[];
for(var i=0;i<o.length;i++){
var val=me(o[i]);
if(typeof (val)!="string"){
val="undefined";
}
res.push(val);
}
return "["+res.join(", ")+"]";
}
try{
_94=m.jsonRegistry.match(o);
if(o!==_94){
return me(_94);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_92=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_92=="function"){
return null;
}
res=[];
for(var k in o){
var _96;
if(typeof (k)=="number"){
_96="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_96=_93(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_96+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_97,arr){
if(_97.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_97,arr)===0);
},concat:function(){
var _99=[];
var _100=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_100(_99,arguments[i]);
}
return _99;
},keyComparator:function(key){
var m=MochiKit.Base;
var _102=m.compare;
if(arguments.length==1){
return function(a,b){
return _102(a[key],b[key]);
};
}
var _103=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_103.length);i++){
var key=_103[i];
rval=_102(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _105=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _105(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_107,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _109=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_109(o,cur)==_107){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_110,_111,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_111)=="undefined"||_111===null){
_111=0;
}
for(var i=_111;i<end;i++){
if(lst[i]===_110){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _115=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_115+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_115<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_115;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _117=data.length/2;
return (data[_117]+data[_117-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_118,_119,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_119)=="undefined"||_119===null){
_119=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_119;i<end;i++){
if(cmp(lst[i],_118)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_121){
var _122=[node];
var _123=MochiKit.Base.extend;
while(_122.length){
var res=_121(_122.shift());
if(res){
_123(_122,res);
}
}
},nameFunctions:function(_124){
var base=_124.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _124){
var o=_124[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_127,_128){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_127)=="string"||(typeof (_127.nodeType)!="undefined"&&_127.nodeType>0))){
var kv=MochiKit.DOM.formContents(_127);
_127=kv[0];
_128=kv[1];
}else{
if(arguments.length==1){
if(typeof (_127.length)=="number"&&_127.length==2){
return arguments.callee(_127[0],_127[1]);
}
var o=_127;
_127=[];
_128=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(typeof (v)!="string"&&typeof (v.length)=="number"){
for(var i=0;i<v.length;i++){
_127.push(k);
_128.push(v[i]);
}
}else{
_127.push(k);
_128.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_127.length,_128.length);
var _131=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_128[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_131(_127[i])+"="+_131(v));
}
}
return rval.join("&");
},parseQueryString:function(_132,_133){
var qstr=(_132.charAt(0)=="?")?_132.substring(1):_132;
var _135=qstr.replace(/\+/g,"%20").split(/(\&amp\;|\&\#38\;|\&#x26;|\&)/);
var o={};
var _136;
if(typeof (decodeURIComponent)!="undefined"){
_136=decodeURIComponent;
}else{
_136=unescape;
}
if(_133){
for(var i=0;i<_135.length;i++){
var pair=_135[i].split("=");
if(pair.length!==2){
continue;
}
var name=_136(pair[0]);
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_136(pair[1]));
}
}else{
for(i=0;i<_135.length;i++){
pair=_135[i].split("=");
if(pair.length!==2){
continue;
}
o[_136(pair[0])]=_136(pair[1]);
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_138,wrap,_140){
if(_140){
this.pairs.unshift([name,_138,wrap]);
}else{
this.pairs.push([name,_138,wrap]);
}
},match:function(){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[1].apply(this,arguments)){
return pair[2].apply(this,arguments);
}
}
throw MochiKit.Base.NotFound;
},unregister:function(name){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[0]==name){
this.pairs.splice(i,1);
return true;
}
}
return false;
}};
MochiKit.Base.EXPORT=["flattenArray","noop","camelize","counter","clone","extend","update","updatetree","setdefault","keys","values","items","NamedError","operator","forwardCall","itemgetter","typeMatcher","isCallable","isUndefined","isUndefinedOrNull","isNull","isEmpty","isNotEmpty","isArrayLike","isDateLike","xmap","map","xfilter","filter","methodcaller","compose","bind","bindMethods","NotFound","AdapterRegistry","registerComparator","compare","registerRepr","repr","objEqual","arrayEqual","concat","keyComparator","reverseKeyComparator","partial","merge","listMinMax","listMax","listMin","objMax","objMin","nodeWalk","zip","urlEncode","queryString","serializeJSON","registerJSON","evalJSON","parseQueryString","findValue","findIdentical","flattenArguments","method","average","mean","median"];
MochiKit.Base.EXPORT_OK=["nameFunctions","comparatorRegistry","reprRegistry","jsonRegistry","compareDateLike","compareArrayLike","reprArrayLike","reprString","reprNumber"];
MochiKit.Base._exportSymbols=function(_141,_142){
if(!MochiKit.__export__){
return;
}
var all=_142.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_141[all[i]]=_142[all[i]];
}
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m.forward=m.forwardCall;
m.find=m.findValue;
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_144){
return encodeURIComponent(_144).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_145){
return escape(_145).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
};
}
m.NamedError=function(name){
this.message=name;
this.name=name;
};
m.NamedError.prototype=new Error();
m.update(m.NamedError.prototype,{repr:function(){
if(this.message&&this.message!=this.name){
return this.name+"("+m.repr(this.message)+")";
}else{
return this.name+"()";
}
},toString:m.forwardCall("repr")});
m.NotFound=new m.NamedError("MochiKit.Base.NotFound");
m.listMax=m.partial(m.listMinMax,1);
m.listMin=m.partial(m.listMinMax,-1);
m.isCallable=m.typeMatcher("function");
m.isUndefined=m.typeMatcher("undefined");
m.merge=m.partial(m.update,null);
m.zip=m.partial(m.map,null);
m.average=m.mean;
m.comparatorRegistry=new m.AdapterRegistry();
m.registerComparator("dateLike",m.isDateLike,m.compareDateLike);
m.registerComparator("arrayLike",m.isArrayLike,m.compareArrayLike);
m.reprRegistry=new m.AdapterRegistry();
m.registerRepr("arrayLike",m.isArrayLike,m.reprArrayLike);
m.registerRepr("string",m.typeMatcher("string"),m.reprString);
m.registerRepr("numbers",m.typeMatcher("number","boolean"),m.reprNumber);
m.jsonRegistry=new m.AdapterRegistry();
var all=m.concat(m.EXPORT,m.EXPORT_OK);
m.EXPORT_TAGS={":common":m.concat(m.EXPORT_OK),":all":all};
m.nameFunctions(this);
};
MochiKit.Base.__new__();
if(MochiKit.__export__){
compare=MochiKit.Base.compare;
compose=MochiKit.Base.compose;
serializeJSON=MochiKit.Base.serializeJSON;
}
MochiKit.Base._exportSymbols(this,MochiKit.Base);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Iter");
dojo.require("MochiKit.Base");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Iter depends on MochiKit.Base!";
}
if(typeof (MochiKit.Iter)=="undefined"){
MochiKit.Iter={};
}
MochiKit.Iter.NAME="MochiKit.Iter";
MochiKit.Iter.VERSION="1.4";
MochiKit.Base.update(MochiKit.Iter,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},registerIteratorFactory:function(name,_146,_147,_148){
MochiKit.Iter.iteratorRegistry.register(name,_146,_147,_148);
},iter:function(_149,_150){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_150;
},_149);
}
if(typeof (_149.next)=="function"){
return _149;
}else{
if(typeof (_149.iter)=="function"){
return _149.iter();
}
}
try{
return self.iteratorRegistry.match(_149);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_149)+": "+m.repr(_149)+" is not iterable");
}
throw e;
}
},count:function(n){
if(!n){
n=0;
}
var m=MochiKit.Base;
return {repr:function(){
return "count("+n+")";
},toString:m.forwardCall("repr"),next:m.counter(n)};
},cycle:function(p){
var self=MochiKit.Iter;
var m=MochiKit.Base;
var lst=[];
var _153=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_153.next();
lst.push(rval);
return rval;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
if(lst.length===0){
this.next=function(){
throw self.StopIteration;
};
}else{
var i=-1;
this.next=function(){
i=(i+1)%lst.length;
return lst[i];
};
}
return this.next();
}
}};
},repeat:function(elem,n){
var m=MochiKit.Base;
if(typeof (n)=="undefined"){
return {repr:function(){
return "repeat("+m.repr(elem)+")";
},toString:m.forwardCall("repr"),next:function(){
return elem;
}};
}
return {repr:function(){
return "repeat("+m.repr(elem)+", "+n+")";
},toString:m.forwardCall("repr"),next:function(){
if(n<=0){
throw MochiKit.Iter.StopIteration;
}
n-=1;
return elem;
}};
},next:function(_155){
return _155.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _158=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_158);
}};
},ifilter:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilter(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(pred(rval)){
return rval;
}
}
return undefined;
}};
},ifilterfalse:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilterfalse(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
return rval;
}
}
return undefined;
}};
},islice:function(seq){
var self=MochiKit.Iter;
var m=MochiKit.Base;
seq=self.iter(seq);
var _161=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_161=arguments[1];
stop=arguments[2];
}else{
_161=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_161,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_161){
rval=seq.next();
i++;
}
if(_161>=stop){
throw self.StopIteration;
}
_161+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _165=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_165));
}};
},applymap:function(fun,seq,self){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
return {repr:function(){
return "applymap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(self,seq.next());
}};
},chain:function(p,q){
var self=MochiKit.Iter;
var m=MochiKit.Base;
if(arguments.length==1){
return self.iter(arguments[0]);
}
var _167=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_167.length>1){
try{
return _167[0].next();
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_167.shift();
}
}
if(_167.length==1){
var arg=_167.shift();
this.next=m.bind("next",arg);
return this.next();
}
throw self.StopIteration;
}};
},takewhile:function(pred,seq){
var self=MochiKit.Iter;
seq=self.iter(seq);
return {repr:function(){
return "takewhile(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=seq.next();
if(!pred(rval)){
this.next=function(){
throw self.StopIteration;
};
this.next();
}
return rval;
}};
},dropwhile:function(pred,seq){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
var bind=m.bind;
return {"repr":function(){
return "dropwhile(...)";
},"toString":m.forwardCall("repr"),"next":function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
break;
}
}
this.next=bind("next",seq);
return rval;
}};
},_tee:function(_169,sync,_171){
sync.pos[_169]=-1;
var m=MochiKit.Base;
var _172=m.listMin;
return {repr:function(){
return "tee("+_169+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_169];
if(i==sync.max){
rval=_171.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_169]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_169]+=1;
if(i==sync.min&&_172(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_173,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_173=self.iter(_173);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_173));
}
return rval;
},list:function(_175){
var m=MochiKit.Base;
if(typeof (_175.slice)=="function"){
return _175.slice();
}else{
if(m.isArrayLike(_175)){
return m.concat(_175);
}
}
var self=MochiKit.Iter;
_175=self.iter(_175);
var rval=[];
try{
while(true){
rval.push(_175.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_176,_177){
var i=0;
var x=_177;
var self=MochiKit.Iter;
_176=self.iter(_176);
if(arguments.length<3){
try{
x=_176.next();
}
catch(e){
if(e==self.StopIteration){
e=new TypeError("reduce() of empty sequence with no initial value");
}
throw e;
}
i++;
}
try{
while(true){
x=fn(x,_176.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _179=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_179=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_179=arguments[0];
stop=arguments[1];
step=arguments[2];
}else{
throw new TypeError("range() takes 1, 2, or 3 arguments!");
}
}
}
if(step===0){
throw new TypeError("range() step must not be 0");
}
return {next:function(){
if((step>0&&_179>=stop)||(step<0&&_179<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_179;
_179+=step;
return rval;
},repr:function(){
return "range("+[_179,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_180,_181){
if(typeof (_181)=="undefined"||_181===null){
_181=0;
}
var x=_181;
var self=MochiKit.Iter;
_180=self.iter(_180);
try{
while(true){
x+=_180.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_182){
var self=MochiKit.Iter;
_182=self.iter(_182);
try{
while(true){
_182.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_183,func,self){
var m=MochiKit.Base;
if(arguments.length>2){
func=m.bind(func,self);
}
if(m.isArrayLike(_183)){
try{
for(var i=0;i<_183.length;i++){
func(_183[i]);
}
}
catch(e){
if(e!=MochiKit.Iter.StopIteration){
throw e;
}
}
}else{
self=MochiKit.Iter;
self.exhaust(self.imap(func,_183));
}
},every:function(_184,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_184).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_185,cmp){
var rval=MochiKit.Iter.list(_185);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_186){
var rval=MochiKit.Iter.list(_186);
rval.reverse();
return rval;
},some:function(_187,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_187).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_188){
if(MochiKit.Base.isArrayLike(_188)){
for(var i=0;i<_188.length;i++){
lst.push(_188[i]);
}
}else{
var self=MochiKit.Iter;
_188=self.iter(_188);
try{
while(true){
lst.push(_188.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_189,_190){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_190=m.operator.identity;
}
_189=self.iter(_189);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_189.next();
k=_190(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _193=true;
var _194=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_194(k,pk)===0){
fetch();
if(_193){
_193=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_194(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_195,_196){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_196=m.operator.identity;
}
_195=self.iter(_195);
var _197=[];
var _198=true;
var _199;
var _200=m.compare;
while(true){
try{
var _201=_195.next();
var key=_196(_201);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_198||_200(key,_199)!==0){
var _202=[];
_197.push([key,_202]);
}
_202.push(_201);
_198=false;
_199=key;
}
return _197;
},arrayLikeIter:function(_203){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_203.length){
throw MochiKit.Iter.StopIteration;
}
return _203[i++];
}};
},hasIterateNext:function(_204){
return (_204&&typeof (_204.iterateNext)=="function");
},iterateNextIter:function(_205){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_205.iterateNext();
if(rval===null||rval===undefined){
throw MochiKit.Iter.StopIteration;
}
return rval;
}};
}});
MochiKit.Iter.EXPORT_OK=["iteratorRegistry","arrayLikeIter","hasIterateNext","iterateNextIter",];
MochiKit.Iter.EXPORT=["StopIteration","registerIteratorFactory","iter","count","cycle","repeat","next","izip","ifilter","ifilterfalse","islice","imap","applymap","chain","takewhile","dropwhile","tee","list","reduce","range","sum","exhaust","forEach","every","sorted","reversed","some","iextend","groupby","groupby_as_array"];
MochiKit.Iter.__new__=function(){
var m=MochiKit.Base;
if(typeof (StopIteration)!="undefined"){
this.StopIteration=StopIteration;
}else{
this.StopIteration=new m.NamedError("StopIteration");
}
this.iteratorRegistry=new m.AdapterRegistry();
this.registerIteratorFactory("arrayLike",m.isArrayLike,this.arrayLikeIter);
this.registerIteratorFactory("iterateNext",this.hasIterateNext,this.iterateNextIter);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Iter.__new__();
if(MochiKit.__export__){
reduce=MochiKit.Iter.reduce;
}
MochiKit.Base._exportSymbols(this,MochiKit.Iter);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Logging");
dojo.require("MochiKit.Base");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Logging depends on MochiKit.Base!";
}
if(typeof (MochiKit.Logging)=="undefined"){
MochiKit.Logging={};
}
MochiKit.Logging.NAME="MochiKit.Logging";
MochiKit.Logging.VERSION="1.4";
MochiKit.Logging.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Logging.toString=function(){
return this.__repr__();
};
MochiKit.Logging.EXPORT=["LogLevel","LogMessage","Logger","alertListener","logger","log","logError","logDebug","logFatal","logWarning"];
MochiKit.Logging.EXPORT_OK=["logLevelAtLeast","isLogMessage","compareLogMessage"];
MochiKit.Logging.LogMessage=function(num,_207,info){
this.num=num;
this.level=_207;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_209){
var self=MochiKit.Logging;
if(typeof (_209)=="string"){
_209=self.LogLevel[_209];
}
return function(msg){
var _211=msg.level;
if(typeof (_211)=="string"){
_211=self.LogLevel[_211];
}
return _211>=_209;
};
},isLogMessage:function(){
var _212=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _212)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_213){
this.counter=0;
if(typeof (_213)=="undefined"||_213===null){
_213=-1;
}
this.maxSize=_213;
this._messages=[];
this.listeners={};
this.useNativeConsole=false;
};
MochiKit.Logging.Logger.prototype={clear:function(){
this._messages.splice(0,this._messages.length);
},logToConsole:function(msg){
if(typeof (window)!="undefined"&&window.console&&window.console.log){
window.console.log(msg.replace(/%/g,"\uff05"));
}else{
if(typeof (opera)!="undefined"&&opera.postError){
opera.postError(msg);
}else{
if(typeof (printfire)=="function"){
printfire(msg);
}else{
if(typeof (Debug)!="undefined"&&Debug.writeln){
Debug.writeln(msg);
}else{
if(typeof (debug)!="undefined"&&debug.trace){
debug.trace(msg);
}
}
}
}
}
},dispatchListeners:function(msg){
for(var k in this.listeners){
var pair=this.listeners[k];
if(pair.ident!=k||(pair[0]&&!pair[0](msg))){
continue;
}
pair[1](msg);
}
},addListener:function(_214,_215,_216){
if(typeof (_215)=="string"){
_215=MochiKit.Logging.logLevelAtLeast(_215);
}
var _217=[_215,_216];
_217.ident=_214;
this.listeners[_214]=_217;
},removeListener:function(_218){
delete this.listeners[_218];
},baseLog:function(_219,_220){
var msg=new MochiKit.Logging.LogMessage(this.counter,_219,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_221){
var _222=0;
if(!(typeof (_221)=="undefined"||_221===null)){
_222=Math.max(0,this._messages.length-_221);
}
return this._messages.slice(_222);
},getMessageText:function(_223){
if(typeof (_223)=="undefined"||_223===null){
_223=30;
}
var _224=this.getMessages(_223);
if(_224.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_224);
lst.unshift("LAST "+_224.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_225){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_225||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _226=m.partial;
var _227=this.Logger;
var _228=_227.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_226(_228,"DEBUG"),log:_226(_228,"INFO"),error:_226(_228,"ERROR"),fatal:_226(_228,"FATAL"),warning:_226(_228,"WARNING")});
var self=this;
var _229=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_229("log");
this.logError=_229("error");
this.logDebug=_229("debug");
this.logFatal=_229("fatal");
this.logWarning=_229("warning");
this.logger=new _227();
this.logger.useNativeConsole=true;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
if(typeof (printfire)=="undefined"&&typeof (document)!="undefined"&&document.createEvent&&typeof (dispatchEvent)!="undefined"){
printfire=function(){
printfire.args=arguments;
var ev=document.createEvent("Events");
ev.initEvent("printfire",false,true);
dispatchEvent(ev);
};
}
MochiKit.Logging.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Logging);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.DateTime");
}
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.DateTime)=="undefined"){
MochiKit.DateTime={};
}
MochiKit.DateTime.NAME="MochiKit.DateTime";
MochiKit.DateTime.VERSION="1.4";
MochiKit.DateTime.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DateTime.toString=function(){
return this.__repr__();
};
MochiKit.DateTime.isoDate=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var iso=str.split("-");
if(iso.length===0){
return null;
}
return new Date(iso[0],iso[1]-1,iso[2]);
};
MochiKit.DateTime._isoRegexp=/(\d{4,})(?:-(\d{1,2})(?:-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d+))?)?(?:(Z)|([+-])(\d{1,2})(?::(\d{1,2}))?)?)?)?)?/;
MochiKit.DateTime.isoTimestamp=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var res=str.match(MochiKit.DateTime._isoRegexp);
if(typeof (res)=="undefined"||res===null){
return null;
}
var year,month,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
month=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,month,day);
}
hour=parseInt(res[4],10);
min=parseInt(res[5],10);
sec=(typeof (res[6])!="undefined"&&res[6]!=="")?parseInt(res[6],10):0;
if(typeof (res[7])!="undefined"&&res[7]!==""){
msec=Math.round(1000*parseFloat("0."+res[7]));
}else{
msec=0;
}
if((typeof (res[8])=="undefined"||res[8]==="")&&(typeof (res[9])=="undefined"||res[9]==="")){
return new Date(year,month,day,hour,min,sec,msec);
}
var ofs;
if(typeof (res[9])!="undefined"&&res[9]!==""){
ofs=parseInt(res[10],10)*3600000;
if(typeof (res[11])!="undefined"&&res[11]!==""){
ofs+=parseInt(res[11],10)*60000;
}
if(res[9]=="-"){
ofs=-ofs;
}
}else{
ofs=0;
}
return new Date(Date.UTC(year,month,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_236){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_236&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_240){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_240?"T":" ";
var foot=_240?"Z":"";
if(_240){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_240)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _243=MochiKit.DateTime._padTwo;
return [date.getFullYear(),_243(date.getMonth()+1),_243(date.getDate())].join("-");
};
MochiKit.DateTime.americanDate=function(d){
d=d+"";
if(typeof (d)!="string"||d.length===0){
return null;
}
var a=d.split("/");
return new Date(a[2],a[0]-1,a[1]);
};
MochiKit.DateTime._padTwo=function(n){
return (n>9)?n:"0"+n;
};
MochiKit.DateTime.toPaddedAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
var _245=MochiKit.DateTime._padTwo;
return [_245(d.getMonth()+1),_245(d.getDate()),d.getFullYear()].join("/");
};
MochiKit.DateTime.toAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
return [d.getMonth()+1,d.getDate(),d.getFullYear()].join("/");
};
MochiKit.DateTime.EXPORT=["isoDate","isoTimestamp","toISOTime","toISOTimestamp","toISODate","americanDate","toPaddedAmericanDate","toAmericanDate"];
MochiKit.DateTime.EXPORT_OK=[];
MochiKit.DateTime.EXPORT_TAGS={":common":MochiKit.DateTime.EXPORT,":all":MochiKit.DateTime.EXPORT};
MochiKit.DateTime.__new__=function(){
var base=this.NAME+".";
for(var k in this){
var o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.DateTime.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.DateTime);
}else{
(function(_246,_247){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_247.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_246[all[i]]=_247[all[i]];
}
}
})(this,MochiKit.DateTime);
}
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Format");
}
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.Format)=="undefined"){
MochiKit.Format={};
}
MochiKit.Format.NAME="MochiKit.Format";
MochiKit.Format.VERSION="1.4";
MochiKit.Format.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Format.toString=function(){
return this.__repr__();
};
MochiKit.Format._numberFormatter=function(_248,_249,_250,_251,_252,_253,_254,_255,_256){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _248;
}
var _257=_249;
var _258=_250;
if(num<0){
num=-num;
}else{
_257=_257.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_251);
if(_252){
num=num*100;
_258=fmt.percent+_258;
}
num=MochiKit.Format.roundToFixed(num,_253);
var _260=num.split(/\./);
var _261=_260[0];
var frac=(_260.length==1)?"":_260[1];
var res="";
while(_261.length<_254){
_261="0"+_261;
}
if(_255){
while(_261.length>_255){
var i=_261.length-_255;
res=fmt.separator+_261.substring(i,_261.length)+res;
_261=_261.substring(0,i);
}
}
res=_261+res;
if(_253>0){
while(frac.length<_256){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _257+res+_258;
};
};
MochiKit.Format.numberFormatter=function(_263,_264,_265){
if(typeof (_264)=="undefined"){
_264="";
}
var _266=_263.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_266){
throw TypeError("Invalid pattern");
}
var _267=_263.substr(0,_266.index);
var _268=_263.substr(_266.index+_266[0].length);
if(_267.search(/-/)==-1){
_267=_267+"-";
}
var _269=_266[1];
var frac=(typeof (_266[2])=="string"&&_266[2]!="")?_266[2]:"";
var _270=(typeof (_266[3])=="string"&&_266[3]!="");
var tmp=_269.split(/,/);
var _272;
if(typeof (_265)=="undefined"){
_265="default";
}
if(tmp.length==1){
_272=null;
}else{
_272=tmp[1].length;
}
var _273=_269.length-_269.replace(/0/g,"").length;
var _274=frac.length-frac.replace(/0/g,"").length;
var _275=frac.length;
var rval=MochiKit.Format._numberFormatter(_264,_267,_268,_265,_270,_275,_273,_272,_274);
var m=MochiKit.Base;
if(m){
var fn=arguments.callee;
var args=m.concat(arguments);
rval.repr=function(){
return [self.NAME,"(",map(m.repr,args).join(", "),")"].join("");
};
}
return rval;
};
MochiKit.Format.formatLocale=function(_276){
if(typeof (_276)=="undefined"||_276===null){
_276="default";
}
if(typeof (_276)=="string"){
var rval=MochiKit.Format.LOCALE[_276];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_276]=rval;
}
return rval;
}else{
return _276;
}
};
MochiKit.Format.twoDigitAverage=function(_277,_278){
if(_278){
var res=_277/_278;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(_277/_278);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_279){
var sign=(_279<0?"-":"");
var s=Math.floor(Math.abs(_279)*100).toString();
if(s=="0"){
return s;
}
if(s.length<3){
while(s.charAt(s.length-1)=="0"){
s=s.substring(0,s.length-1);
}
return sign+"0."+s;
}
var head=sign+s.substring(0,s.length-2);
var tail=s.substring(s.length-2,s.length);
if(tail=="00"){
return head;
}else{
if(tail.charAt(1)=="0"){
return head+"."+tail.charAt(0);
}else{
return head+"."+tail;
}
}
};
MochiKit.Format.lstrip=function(str,_284){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_284){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_284+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_285){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_285){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_285+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_286){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_286),_286);
};
MochiKit.Format.truncToFixed=function(_287,_288){
_287=Math.floor(_287*Math.pow(10,_288));
var res=(_287*Math.pow(10,-_288)).toFixed(_288);
if(res.charAt(0)=="."){
res="0"+res;
}
return res;
};
MochiKit.Format.roundToFixed=function(_289,_290){
return MochiKit.Format.truncToFixed(_289+0.5*Math.pow(10,-_290),_290);
};
MochiKit.Format.percentFormat=function(_291){
return MochiKit.Format.twoDigitFloat(100*_291)+"%";
};
MochiKit.Format.EXPORT=["truncToFixed","roundToFixed","numberFormatter","formatLocale","twoDigitAverage","twoDigitFloat","percentFormat","lstrip","rstrip","strip"];
MochiKit.Format.LOCALE={en_US:{separator:",",decimal:".",percent:"%"},de_DE:{separator:".",decimal:",",percent:"%"},fr_FR:{separator:" ",decimal:",",percent:"%"},"default":"en_US"};
MochiKit.Format.EXPORT_OK=[];
MochiKit.Format.EXPORT_TAGS={":all":MochiKit.Format.EXPORT,":common":MochiKit.Format.EXPORT};
MochiKit.Format.__new__=function(){
var base=this.NAME+".";
var k,v,o;
for(k in this.LOCALE){
o=this.LOCALE[k];
if(typeof (o)=="object"){
o.repr=function(){
return this.NAME;
};
o.NAME=base+"LOCALE."+k;
}
}
for(k in this){
o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.Format.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.Format);
}else{
(function(_292,_293){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_293.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_292[all[i]]=_293[all[i]];
}
}
})(this,MochiKit.Format);
}
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Async");
dojo.require("MochiKit.Base");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Async depends on MochiKit.Base!";
}
if(typeof (MochiKit.Async)=="undefined"){
MochiKit.Async={};
}
MochiKit.Async.NAME="MochiKit.Async";
MochiKit.Async.VERSION="1.4";
MochiKit.Async.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Async.toString=function(){
return this.__repr__();
};
MochiKit.Async.Deferred=function(_294){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_294;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _295;
if(this.fired==-1){
_295="unfired";
}else{
if(this.fired===0){
_295="success";
}else{
_295="error";
}
}
return "Deferred("+this.id+", "+_295+")";
},toString:MochiKit.Base.forwardCall("repr"),_nextId:MochiKit.Base.counter(),cancel:function(){
var self=MochiKit.Async;
if(this.fired==-1){
if(this.canceller){
this.canceller(this);
}else{
this.silentlyCancelled=true;
}
if(this.fired==-1){
this.errback(new self.CancelledError(this));
}
}else{
if((this.fired===0)&&(this.results[0] instanceof self.Deferred)){
this.results[0].cancel();
}
}
},_resback:function(res){
this.fired=((res instanceof Error)?1:0);
this.results[this.fired]=res;
this._fire();
},_check:function(){
if(this.fired!=-1){
if(!this.silentlyCancelled){
throw new MochiKit.Async.AlreadyCalledError(this);
}
this.silentlyCancelled=false;
return;
}
},callback:function(res){
this._check();
if(res instanceof MochiKit.Async.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
this._resback(res);
},errback:function(res){
this._check();
var self=MochiKit.Async;
if(res instanceof self.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
if(!(res instanceof Error)){
res=new self.GenericError(res);
}
this._resback(res);
},addBoth:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,fn);
},addCallback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,null);
},addErrback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(null,fn);
},addCallbacks:function(cb,eb){
if(this.chained){
throw new Error("Chained Deferreds can not be re-used");
}
this.chain.push([cb,eb]);
if(this.fired>=0){
this._fire();
}
return this;
},_fire:function(){
var _298=this.chain;
var _299=this.fired;
var res=this.results[_299];
var self=this;
var cb=null;
while(_298.length>0&&this.paused===0){
var pair=_298.shift();
var f=pair[_299];
if(f===null){
continue;
}
try{
res=f(res);
_299=((res instanceof Error)?1:0);
if(res instanceof MochiKit.Async.Deferred){
cb=function(res){
self._resback(res);
self.paused--;
if((self.paused===0)&&(self.fired>=0)){
self._fire();
}
};
this.paused++;
}
}
catch(err){
_299=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_299;
this.results[_299]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(){
return eval("("+arguments[0].responseText+")");
},succeed:function(_301){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_302){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _303=[function(){
return new XMLHttpRequest();
},function(){
return new ActiveXObject("Msxml2.XMLHTTP");
},function(){
return new ActiveXObject("Microsoft.XMLHTTP");
},function(){
return new ActiveXObject("Msxml2.XMLHTTP.4.0");
},function(){
throw new MochiKit.Async.BrowserComplianceError("Browser does not support XMLHttpRequest");
}];
for(var i=0;i<_303.length;i++){
var func=_303[i];
try{
self.XMLHttpRequest=func;
return func();
}
catch(e){
}
}
}
return self.XMLHttpRequest();
},_xhr_onreadystatechange:function(d){
var m=MochiKit.Base;
if(this.readyState==4){
try{
this.onreadystatechange=null;
}
catch(e){
try{
this.onreadystatechange=m.noop;
}
catch(e){
}
}
var _304=null;
try{
_304=this.status;
if(!_304&&m.isNotEmpty(this.responseText)){
_304=304;
}
}
catch(e){
}
if(_304==200||_304==201||_304==204||_304==304||_304==1223){
d.callback(this);
}else{
var err=new MochiKit.Async.XMLHttpRequestError(this,"Request failed");
if(err.number){
d.errback(err);
}else{
d.errback(err);
}
}
}
},_xhr_canceller:function(req){
try{
req.onreadystatechange=null;
}
catch(e){
try{
req.onreadystatechange=MochiKit.Base.noop;
}
catch(e){
}
}
req.abort();
},sendXMLHttpRequest:function(req,_307){
if(typeof (_307)=="undefined"||_307===null){
_307="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_307);
}
catch(e){
try{
req.onreadystatechange=null;
}
catch(ignore){
}
d.errback(e);
}
return d;
},doXHR:function(url,opts){
var m=MochiKit.Base;
opts=m.update({method:"GET",sendContent:""},opts);
var self=MochiKit.Async;
var req=self.getXMLHttpRequest();
if(opts.queryString){
var qs=m.queryString(opts.queryString);
if(qs){
url+="?"+qs;
}
}
req.open(opts.method,url,true,opts.username,opts.password);
if(req.overrideMimeType&&opts.mimeType){
req.overrideMimeType(opts.mimeType);
}
if(opts.headers){
var _311=opts.headers;
if(!m.isArrayLike(_311)){
_311=m.items(_311);
}
for(var i=0;i<_311.length;i++){
var _312=_311[i];
var name=_312[0];
var _313=_312[1];
req.setRequestHeader(name,_313);
}
}
return self.sendXMLHttpRequest(req,opts.sendContent);
},_buildURL:function(url){
if(arguments.length>1){
var m=MochiKit.Base;
var qs=m.queryString.apply(null,m.extend(null,arguments,1));
if(qs){
return url+"?"+qs;
}
}
return url;
},doSimpleXMLHttpRequest:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
return self.doXHR(url);
},loadJSONDoc:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
var d=self.doXHR(url,{"mimeType":"text/plain","headers":[["Accept","application/json"]]});
d=d.addCallback(self.evalJSONRequest);
return d;
},wait:function(_314,_315){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_315)!="undefined"){
d.addCallback(function(){
return _315;
});
}
var _316=setTimeout(m.bind("callback",d),Math.floor(_314*1000));
d.canceller=function(){
try{
clearTimeout(_316);
}
catch(e){
}
};
return d;
},callLater:function(_317,func){
var m=MochiKit.Base;
var _318=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_317).addCallback(function(res){
return _318();
});
}});
MochiKit.Async.DeferredLock=function(){
this.waiting=[];
this.locked=false;
this.id=this._nextId();
};
MochiKit.Async.DeferredLock.prototype={__class__:MochiKit.Async.DeferredLock,acquire:function(){
var d=new MochiKit.Async.Deferred();
if(this.locked){
this.waiting.push(d);
}else{
this.locked=true;
d.callback(this);
}
return d;
},release:function(){
if(!this.locked){
throw TypeError("Tried to release an unlocked DeferredLock");
}
this.locked=false;
if(this.waiting.length>0){
this.locked=true;
this.waiting.shift().callback(this);
}
},_nextId:MochiKit.Base.counter(),repr:function(){
var _319;
if(this.locked){
_319="locked, "+this.waiting.length+" waiting";
}else{
_319="unlocked";
}
return "DeferredLock("+this.id+", "+_319+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_321,_322,_323,_324){
MochiKit.Async.Deferred.apply(this,[_324]);
this.list=list;
var _325=[];
this.resultList=_325;
this.finishedCount=0;
this.fireOnOneCallback=_321;
this.fireOnOneErrback=_322;
this.consumeErrors=_323;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_325.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_321){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_326,_327,_328){
this.resultList[_326]=[_327,_328];
this.finishedCount+=1;
if(this.fired==-1){
if(_327&&this.fireOnOneCallback){
this.callback([_326,_328]);
}else{
if(!_327&&this.fireOnOneErrback){
this.errback(_328);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_327&&this.consumeErrors){
_328=null;
}
return _328;
};
MochiKit.Async.gatherResults=function(_329){
var d=new MochiKit.Async.DeferredList(_329,false,true,false);
d.addCallback(function(_330){
var ret=[];
for(var i=0;i<_330.length;i++){
ret.push(_330[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _331;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_331=r;
}else{
if(r instanceof Error){
_331=self.fail(r);
}else{
_331=self.succeed(r);
}
}
}
catch(e){
_331=self.fail(e);
}
return _331;
};
MochiKit.Async.EXPORT=["AlreadyCalledError","CancelledError","BrowserComplianceError","GenericError","XMLHttpRequestError","Deferred","succeed","fail","getXMLHttpRequest","doSimpleXMLHttpRequest","loadJSONDoc","wait","callLater","sendXMLHttpRequest","DeferredLock","DeferredList","gatherResults","maybeDeferred","doXHR"];
MochiKit.Async.EXPORT_OK=["evalJSONRequest"];
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_334){
this.deferred=_334;
});
ne("CancelledError",function(_335){
this.deferred=_335;
});
ne("BrowserComplianceError",function(msg){
this.message=msg;
});
ne("GenericError",function(msg){
this.message=msg;
});
ne("XMLHttpRequestError",function(req,msg){
this.req=req;
this.message=msg;
try{
this.number=req.status;
}
catch(e){
}
});
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Async.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Async);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.DOM");
dojo.require("MochiKit.Base");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.DOM depends on MochiKit.Base!";
}
if(typeof (MochiKit.DOM)=="undefined"){
MochiKit.DOM={};
}
MochiKit.DOM.NAME="MochiKit.DOM";
MochiKit.DOM.VERSION="1.4";
MochiKit.DOM.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DOM.toString=function(){
return this.__repr__();
};
MochiKit.DOM.EXPORT=["removeEmptyTextNodes","formContents","currentWindow","currentDocument","withWindow","withDocument","registerDOMConverter","coerceToDOM","createDOM","createDOMFunc","isChildNode","getNodeAttribute","setNodeAttribute","updateNodeAttributes","appendChildNodes","replaceChildNodes","removeElement","swapDOM","BUTTON","TT","PRE","H1","H2","H3","BR","CANVAS","HR","LABEL","TEXTAREA","FORM","STRONG","SELECT","OPTION","OPTGROUP","LEGEND","FIELDSET","P","UL","OL","LI","TD","TR","THEAD","TBODY","TFOOT","TABLE","TH","INPUT","SPAN","A","DIV","IMG","getElement","$","getElementsByTagAndClassName","addToCallStack","addLoadEvent","focusOnLoad","setElementClass","toggleElementClass","addElementClass","removeElementClass","swapElementClass","hasElementClass","escapeHTML","toHTML","emitHTML","scrapeText","isParent","makeClipping","undoClipping","makePositioned","undoPositioned","getFirstElementByTagAndClassName"];
MochiKit.DOM.EXPORT_OK=["domConverters"];
MochiKit.DOM.DEPRECATED=[["computedStyle","MochiKit.Style.computedStyle","1.4"],["elementDimensions","MochiKit.Style.getElementDimensions","1.4"],["elementPosition","MochiKit.Style.getElementPosition","1.4"],["hideElement","MochiKit.Style.hideElement","1.4"],["setElementDimensions","MochiKit.Style.setElementDimensions","1.4"],["setElementPosition","MochiKit.Style.setElementPosition","1.4"],["setDisplayForElement","MochiKit.Style.setDisplayForElement","1.4"],["setOpacity","MochiKit.Style.setOpacity","1.4"],["showElement","MochiKit.Style.showElement","1.4"],["Coordinates","MochiKit.Style.Coordinates","1.4"],["Dimensions","MochiKit.Style.Dimensions","1.4"]];
MochiKit.DOM.getViewportDimensions=new Function(""+"if (!MochiKit[\"Style\"]) {"+"    throw new Error(\"This function has been deprecated and depends on MochiKit.Style.\");"+"}"+"return MochiKit.Style.getViewportDimensions.apply(this, arguments);");
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _337=self._document;
var _338=self._win;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_338;
self._document=_337;
throw e;
}
self._window=_338;
self._document=_337;
return rval;
},formContents:function(elem){
var _339=[];
var _340=[];
var m=MochiKit.Base;
var self=MochiKit.DOM;
if(typeof (elem)=="undefined"||elem===null){
elem=self._document.body;
}else{
elem=self.getElement(elem);
}
m.nodeWalk(elem,function(elem){
var name=elem.name;
if(m.isNotEmpty(name)){
var _341=elem.tagName.toUpperCase();
if(_341==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_341==="SELECT"){
if(elem.type=="select-one"){
if(elem.selectedIndex>=0){
var opt=elem.options[elem.selectedIndex];
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_339.push(name);
_340.push(v);
return null;
}
_339.push(name);
_340.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_339.push(name);
_340.push("");
return null;
}
for(var i=0;i<opts.length;i++){
var opt=opts[i];
if(!opt.selected){
continue;
}
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_339.push(name);
_340.push(v);
}
return null;
}
}
if(_341==="FORM"||_341==="P"||_341==="SPAN"||_341==="DIV"){
return elem.childNodes;
}
_339.push(name);
_340.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_339,_340];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _345=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_345;
throw e;
}
self._document=_345;
return rval;
},registerDOMConverter:function(name,_346,wrap,_347){
MochiKit.DOM.domConverters.register(name,_346,wrap,_347);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _351=im.repeat;
var map=m.map;
}
var _352=self.domConverters;
var _353=arguments.callee;
var _354=m.NotFound;
while(true){
if(typeof (node)=="undefined"||node===null){
return null;
}
if(typeof (node.nodeType)!="undefined"&&node.nodeType>0){
return node;
}
if(typeof (node)=="number"||typeof (node)=="boolean"){
node=node.toString();
}
if(typeof (node)=="string"){
return self._document.createTextNode(node);
}
if(typeof (node.__dom__)=="function"){
node=node.__dom__(ctx);
continue;
}
if(typeof (node.dom)=="function"){
node=node.dom(ctx);
continue;
}
if(typeof (node)=="function"){
node=node.apply(ctx,[ctx]);
continue;
}
if(im){
var _355=null;
try{
_355=iter(node);
}
catch(e){
}
if(_355){
return map(_353,_355,_351(ctx));
}
}
try{
node=_352.match(node,ctx);
continue;
}
catch(e){
if(e!=_354){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_356){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_356)=="string"){
_356=self.getElement(_356);
}
if(node===_356){
return true;
}
while(node&&node.tagName.toUpperCase()!="BODY"){
node=node.parentNode;
if(node===_356){
return true;
}
}
return false;
},setNodeAttribute:function(node,attr,_358){
var o={};
o[attr]=_358;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _359=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_359){
return node[_359];
}
return node.getAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_360){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_360){
var _361=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _360){
var v=_360[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
_361(elem[k],v);
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
}
}else{
var _362=self.attributeArray.renames;
for(k in _360){
v=_360[k];
var _363=_362[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_363)=="string"){
elem[_363]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
_361(elem[k],v);
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
}
}
}
}
}
return elem;
},appendChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _364=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _365=MochiKit.Base.concat;
while(_364.length){
var n=_364.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_364=_365(n,_364);
}
}
}
return elem;
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _366;
while((_366=elem.firstChild)){
elem.removeChild(_366);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_367){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_367)=="string"||typeof (_367)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _368=self._xhtml;
if(_367&&!self.attributeArray.compliant){
var _369="";
if("name" in _367){
_369+=" name=\""+self.escapeHTML(_367.name)+"\"";
}
if(name=="input"&&"type" in _367){
_369+=" type=\""+self.escapeHTML(_367.type)+"\"";
}
if(_369){
name="<"+name+_369+">";
_368=false;
}
}
var d=self._document;
if(_368&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_367){
self.updateNodeAttributes(elem,_367);
}
if(arguments.length<=2){
return elem;
}else{
var args=m.extend([elem],arguments,2);
return self.appendChildNodes.apply(this,args);
}
},createDOMFunc:function(){
var m=MochiKit.Base;
return m.partial.apply(this,m.extend([MochiKit.DOM.createDOM],arguments));
},removeElement:function(elem){
var e=MochiKit.DOM.getElement(elem);
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _372=dest.parentNode;
if(src){
src=self.getElement(src);
_372.replaceChild(src,dest);
}else{
_372.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_374,_375,_376){
var self=MochiKit.DOM;
if(typeof (_374)=="undefined"||_374===null){
_374="*";
}
if(typeof (_376)=="undefined"||_376===null){
_376=self._document;
}
_376=self.getElement(_376);
var _377=(_376.getElementsByTagName(_374)||self._document.all);
if(typeof (_375)=="undefined"||_375===null){
return MochiKit.Base.extend(null,_377);
}
var _378=[];
for(var i=0;i<_377.length;i++){
var _379=_377[i];
var cls=_379.className;
if(!cls){
continue;
}
var _381=cls.split(" ");
for(var j=0;j<_381.length;j++){
if(_381[j]==_375){
_378.push(_379);
break;
}
}
}
return _378;
},_newCallStack:function(path,once){
var rval=function(){
var _384=arguments.callee.callStack;
for(var i=0;i<_384.length;i++){
if(_384[i].apply(this,arguments)===false){
break;
}
}
if(once){
try{
this[path]=null;
}
catch(e){
}
}
};
rval.callStack=[];
return rval;
},addToCallStack:function(_385,path,func,once){
var self=MochiKit.DOM;
var _386=_385[path];
var _387=_386;
if(!(typeof (_386)=="function"&&typeof (_386.callStack)=="object"&&_386.callStack!==null)){
_387=self._newCallStack(path,once);
if(typeof (_386)=="function"){
_387.callStack.push(_386);
}
_385[path]=_387;
}
_387.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_388){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_388=self.getElement(_388);
if(_388){
_388.focus();
}
});
},setElementClass:function(_389,_390){
var self=MochiKit.DOM;
var obj=self.getElement(_389);
if(self.attributeArray.compliant){
obj.setAttribute("class",_390);
}else{
obj.setAttribute("className",_390);
}
},toggleElementClass:function(_391){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_391)){
self.removeElementClass(obj,_391);
}
}
},addElementClass:function(_392,_393){
var self=MochiKit.DOM;
var obj=self.getElement(_392);
var cls=obj.className;
if(cls==undefined||cls.length===0){
self.setElementClass(obj,_393);
return true;
}
if(cls==_393){
return false;
}
var _394=cls.split(" ");
for(var i=0;i<_394.length;i++){
if(_394[i]==_393){
return false;
}
}
self.setElementClass(obj,cls+" "+_393);
return true;
},removeElementClass:function(_395,_396){
var self=MochiKit.DOM;
var obj=self.getElement(_395);
var cls=obj.className;
if(cls==undefined||cls.length===0){
return false;
}
if(cls==_396){
self.setElementClass(obj,"");
return true;
}
var _397=cls.split(" ");
for(var i=0;i<_397.length;i++){
if(_397[i]==_396){
_397.splice(i,1);
self.setElementClass(obj,_397.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_398,_399,_400){
var obj=MochiKit.DOM.getElement(_398);
var res=MochiKit.DOM.removeElementClass(obj,_399);
if(res){
MochiKit.DOM.addElementClass(obj,_400);
}
return res;
},hasElementClass:function(_401,_402){
var obj=MochiKit.DOM.getElement(_401);
var cls=obj.className;
if(!cls){
return false;
}
var _403=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_403.length;j++){
if(_403[j]==arguments[i]){
good=true;
break;
}
}
if(!good){
return false;
}
}
return true;
},escapeHTML:function(s){
return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
},toHTML:function(dom){
return MochiKit.DOM.emitHTML(dom).join("");
},emitHTML:function(dom,lst){
if(typeof (lst)=="undefined"||lst===null){
lst=[];
}
var _406=[dom];
var self=MochiKit.DOM;
var _407=self.escapeHTML;
var _408=self.attributeArray;
while(_406.length){
dom=_406.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _409=[];
var _410=_408(dom);
for(var i=0;i<_410.length;i++){
var a=_410[i];
_409.push([" ",a.name,"=\"",_407(a.value),"\""]);
}
_409.sort();
for(i=0;i<_409.length;i++){
var _411=_409[i];
for(var j=0;j<_411.length;j++){
lst.push(_411[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_406.push("</"+dom.tagName.toLowerCase()+">");
var _412=dom.childNodes;
for(i=_412.length-1;i>=0;i--){
_406.push(_412[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_407(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_413){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _415=node.nodeValue;
if(typeof (_415)=="string"){
rval.push(_415);
}
})(MochiKit.DOM.getElement(node));
if(_413){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_416){
_416=MochiKit.DOM.getElement(_416);
for(var i=0;i<_416.childNodes.length;i++){
var node=_416.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},makeClipping:function(_417){
_417=MochiKit.DOM.getElement(_417);
var _418=_417.style.overflow;
if((MochiKit.Style.getStyle(_417,"overflow")||"visible")!="hidden"){
_417.style.overflow="hidden";
}
return _418;
},undoClipping:function(_419,_420){
_419=MochiKit.DOM.getElement(_419);
if(!_420){
return;
}
_419.style.overflow=_420;
},makePositioned:function(_421){
_421=MochiKit.DOM.getElement(_421);
var pos=MochiKit.Style.getStyle(_421,"position");
if(pos=="static"||!pos){
_421.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_421.style.top=0;
_421.style.left=0;
}
}
},undoPositioned:function(_423){
_423=MochiKit.DOM.getElement(_423);
if(_423.style.position=="relative"){
_423.style.position=_423.style.top=_423.style.left=_423.style.bottom=_423.style.right="";
}
},getFirstElementByTagAndClassName:function(_424,_425,_426){
var self=MochiKit.DOM;
if(typeof (_424)=="undefined"||_424===null){
_424="*";
}
if(typeof (_426)=="undefined"||_426===null){
_426=self._document;
}
_426=self.getElement(_426);
var _427=(_426.getElementsByTagName(_424)||self._document.all);
if(typeof (_425)=="undefined"||_425===null){
return _427[0];
}
for(var i=0;i<_427.length;i++){
var _428=_427[i];
var _429=_428.className.split(" ");
for(var j=0;j<_429.length;j++){
if(_429[j]==_425){
return _428;
}
}
}
},isParent:function(_430,_431){
if(!_430.parentNode||_430==_431){
return false;
}
if(_430.parentNode==_431){
return true;
}
return MochiKit.DOM.isParent(_430.parentNode,_431);
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _432="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_432);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _433=this._document.createElement("span");
var _434;
if(_433&&_433.attributes&&_433.attributes.length>0){
var _435=m.filter;
_434=function(node){
return _435(_434.ignoreAttrFilter,node.attributes);
};
_434.ignoreAttr={};
var _436=_433.attributes;
var _437=_434.ignoreAttr;
for(var i=0;i<_436.length;i++){
var a=_436[i];
_437[a.name]=a.value;
}
_434.ignoreAttrFilter=function(a){
return (_434.ignoreAttr[a.name]!=a.value);
};
_434.compliant=false;
_434.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor"};
}else{
_434=function(node){
return node.attributes;
};
_434.compliant=true;
_434.renames={};
}
this.attributeArray=_434;
var _438=function(_439,arr){
var _440=arr[1].split(".");
var str="";
var obj={};
str+="if (!MochiKit."+_440[1]+") { throw new Error(\"";
str+="This function has been deprecated and depends on MochiKit.";
str+=_440[1]+".\");}";
str+="return MochiKit."+_440[1]+"."+arr[0];
str+=".apply(this, arguments);";
obj[_440[2]]=new Function(str);
MochiKit.Base.update(MochiKit[_439],obj);
};
for(var i;i<MochiKit.DOM.DEPRECATED.length;i++){
_438("DOM",MochiKit.DOM.DEPRECATED[i]);
}
var _441=this.createDOMFunc;
this.UL=_441("ul");
this.OL=_441("ol");
this.LI=_441("li");
this.TD=_441("td");
this.TR=_441("tr");
this.TBODY=_441("tbody");
this.THEAD=_441("thead");
this.TFOOT=_441("tfoot");
this.TABLE=_441("table");
this.TH=_441("th");
this.INPUT=_441("input");
this.SPAN=_441("span");
this.A=_441("a");
this.DIV=_441("div");
this.IMG=_441("img");
this.BUTTON=_441("button");
this.TT=_441("tt");
this.PRE=_441("pre");
this.H1=_441("h1");
this.H2=_441("h2");
this.H3=_441("h3");
this.BR=_441("br");
this.HR=_441("hr");
this.LABEL=_441("label");
this.TEXTAREA=_441("textarea");
this.FORM=_441("form");
this.P=_441("p");
this.SELECT=_441("select");
this.OPTION=_441("option");
this.OPTGROUP=_441("optgroup");
this.LEGEND=_441("legend");
this.FIELDSET=_441("fieldset");
this.STRONG=_441("strong");
this.CANVAS=_441("canvas");
this.$=this.getElement;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.DOM.__new__(((typeof (window)=="undefined")?this:window));
if(MochiKit.__export__){
withWindow=MochiKit.DOM.withWindow;
withDocument=MochiKit.DOM.withDocument;
}
MochiKit.Base._exportSymbols(this,MochiKit.DOM);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Selector");
dojo.require("MochiKit.Base");
dojo.require("MochiKit.DOM");
dojo.require("MochiKit.Iter");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
JSAN.use("MochiKit.DOM",[]);
JSAN.use("MochiKit.Iter",[]);
}
try{
if(typeof (MochiKit.Base)==="undefined"||typeof (MochiKit.DOM)==="undefined"||typeof (MochiKit.Iter)==="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Selector depends on MochiKit.Base, MochiKit.DOM and MochiKit.Iter!";
}
if(typeof (MochiKit.Selector)=="undefined"){
MochiKit.Selector={};
}
MochiKit.Selector.NAME="MochiKit.Selector";
MochiKit.Selector.VERSION="1.4";
MochiKit.Selector.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Selector.toString=function(){
return this.__repr__();
};
MochiKit.Selector.Selector=function(_442){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_442.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_443){
throw "Parse error in selector: "+_443;
}
if(this.expression==""){
abort("empty expression");
}
var _444=this.params;
var expr=this.expression;
var _446,modifier,clause,rest;
while(_446=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_444.attributes=_444.attributes||[];
_444.attributes.push({name:_446[2],operator:_446[3],value:_446[4]||_446[5]||""});
expr=_446[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_446=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
modifier=_446[1];
clause=_446[2];
rest=_446[3];
switch(modifier){
case "#":
_444.id=clause;
break;
case ".":
_444.classNames.push(clause);
break;
case ":":
_444.pseudoClassNames.push(clause);
break;
case "":
case undefined:
_444.tagName=clause.toUpperCase();
break;
default:
abort(repr(expr));
}
expr=rest;
}
if(expr.length>0){
abort(repr(expr));
}
},buildMatchExpression:function(){
var _447=this.params;
var _448=[];
var _449,i;
function childElements(_450){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_450+".childNodes)";
}
if(_447.wildcard){
_448.push("true");
}
if(_449=_447.id){
_448.push("element.id == "+repr(_449));
}
if(_449=_447.tagName){
_448.push("element.tagName.toUpperCase() == "+repr(_449));
}
if((_449=_447.classNames).length>0){
for(i=0;i<_449.length;i++){
_448.push("MochiKit.DOM.hasElementClass(element, "+repr(_449[i])+")");
}
}
if((_449=_447.pseudoClassNames).length>0){
for(i=0;i<_449.length;i++){
var _451=_449[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _452=_451[1];
var _453=_451[2];
switch(_452){
case "root":
_448.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_451=_453.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_451){
throw "Invalid argument to pseudo element nth-child: "+_453;
}
var a,b;
if(_451[0]=="odd"){
a=2;
b=1;
}else{
if(_451[0]=="even"){
a=2;
b=0;
}else{
a=_451[2]&&parseInt(_451)||null;
b=parseInt(_451[3]);
}
}
_448.push("this.nthChild(element,"+a+","+b+","+!!_452.match("^nth-last")+","+!!_452.match("of-type$")+")");
break;
case "first-child":
_448.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_448.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_448.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_448.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_448.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_448.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_448.push("element.childNodes.length == 0");
break;
case "enabled":
_448.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_448.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_448.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _454=new MochiKit.Selector.Selector(_453);
_448.push("!( "+_454.buildMatchExpression()+")");
break;
}
}
}
if(_449=_447.attributes){
MochiKit.Base.map(function(_455){
var _456="MochiKit.DOM.getNodeAttribute(element, "+repr(_455.name)+")";
var _457=function(_458){
return _456+" && "+_456+".split("+repr(_458)+")";
};
switch(_455.operator){
case "=":
_448.push(_456+" == "+repr(_455.value));
break;
case "~=":
_448.push("MochiKit.Base.findValue("+_457(" ")+", "+repr(_455.value)+") > -1");
break;
case "^=":
_448.push(_456+".substring(0, "+_455.value.length+") == "+repr(_455.value));
break;
case "$=":
_448.push(_456+".substring("+_456+".length - "+_455.value.length+") == "+repr(_455.value));
break;
case "*=":
_448.push(_456+".match("+repr(_455.value)+")");
break;
case "|=":
_448.push(_457("-")+"[0].toUpperCase() == "+repr(_455.value.toUpperCase()));
break;
case "!=":
_448.push(_456+" != "+repr(_455.value));
break;
case "":
case undefined:
_448.push(_456+" != null");
break;
default:
throw "Unknown operator "+_455.operator+" in selector";
}
},_449);
}
return _448.join(" && ");
},compileMatcher:function(){
this.match=new Function("element","if (!element.tagName) return false;                 return "+this.buildMatchExpression());
},nthChild:function(_459,a,b,_460,_461){
var _462=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_459.parentNode.childNodes);
if(_461){
_462=MochiKit.Base.filter(function(node){
return node.tagName==_459.tagName;
},_462);
}
if(_460){
_462=MochiKit.Iter.reversed(_462);
}
if(a){
var _463=MochiKit.Base.findIdentical(_462,_459);
return ((_463+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_462,_459)+1;
}
},isUIElement:function(_464){
return findValue(["input","button","select","option","textarea","object"],_464.tagName.toLowerCase())>-1;
},findElements:function(_465,axis){
var _467;
if(axis==undefined){
axis="";
}
function inScope(_467,_465){
if(axis==""){
return MochiKit.DOM.isChildNode(_467,_465);
}else{
if(axis==">"){
return _467.parentNode==_465;
}else{
if(axis=="+"){
return _467==nextSiblingElement(_465);
}else{
if(axis=="~"){
var _468=_465;
while(_468=nextSiblingElement(_468)){
if(_467==_468){
return true;
}
}
return false;
}else{
throw "Invalid axis: "+axis;
}
}
}
}
}
if(element=MochiKit.DOM.getElement(this.params.id)){
if(this.match(element)){
if(!scope||inScope(element,scope)){
return [element];
}
}
}
function nextSiblingElement(node){
node=node.nextSibling;
while(node&&node.nodeType!=1){
node=node.nextSibling;
}
return node;
}
if(axis==""){
scope=(scope||currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!scope){
throw "> combinator not allowed without preceeding expression";
}
scope=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},scope.childNodes);
}else{
if(axis=="+"){
if(!scope){
throw "+ combinator not allowed without preceeding expression";
}
scope=nextSiblingElement(scope)&&[nextSiblingElement(scope)];
}else{
if(axis=="~"){
if(!scope){
throw "~ combinator not allowed without preceeding expression";
}
var _469=[];
while(nextSiblingElement(scope)){
scope=nextSiblingElement(scope);
_469.push(scope);
}
scope=_469;
}
}
}
}
if(!scope){
return [];
}
var _470=MochiKit.Base.filter(MochiKit.Base.bind(function(_471){
return this.match(_471);
},this),scope);
return _470;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_472,_473){
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_474){
var _475="";
return MochiKit.Iter.reduce(function(_476,expr){
if(match=expr.match(/^[>+~]$/)){
_475=match[0];
return _476;
}else{
var _477=new MochiKit.Selector.Selector(expr);
var _478=MochiKit.Iter.reduce(function(_478,_479){
return MochiKit.Base.extend(_478,_477.findElements(_479||_472,_475));
},_476,[]);
_475="";
return elements;
}
},_474.replace(/(^\s+|\s+$)/g,"").split(/\s+/),[null]);
},_473));
}});
function $$(){
return MochiKit.Selector.findChildElements(MochiKit.DOM.currentDocument(),arguments);
}
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Style");
dojo.require("MochiKit.Base");
dojo.require("MochiKit.DOM");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Style depends on MochiKit.Base!";
}
try{
if(typeof (MochiKit.DOM)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Style depends on MochiKit.DOM!";
}
if(typeof (MochiKit.Style)=="undefined"){
MochiKit.Style={};
}
MochiKit.Style.NAME="MochiKit.Style";
MochiKit.Style.VERSION="1.4";
MochiKit.Style.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Style.toString=function(){
return this.__repr__();
};
MochiKit.Style.EXPORT_OK=[];
MochiKit.Style.EXPORT=["setOpacity","getOpacity","setStyle","getStyle","computedStyle","getElementDimensions","elementDimensions","setElementDimensions","getElementPosition","elementPosition","setElementPosition","setDisplayForElement","hideElement","showElement","getViewportDimensions","getViewportPosition","Dimensions","Coordinates"];
MochiKit.Style.Dimensions=function(w,h){
this.w=w;
this.h=h;
};
MochiKit.Style.Dimensions.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{w: "+repr(this.w)+", h: "+repr(this.h)+"}";
};
MochiKit.Style.Dimensions.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Style.Coordinates=function(x,y){
this.x=x;
this.y=y;
};
MochiKit.Style.Coordinates.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{x: "+repr(this.x)+", y: "+repr(this.y)+"}";
};
MochiKit.Style.Coordinates.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Base.update(MochiKit.Style,{computedStyle:function(elem,_483){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_483=MochiKit.Base.camelize(_483);
if(!elem||elem==d){
return undefined;
}
if(_483=="opacity"&&elem.filters){
try{
return elem.filters.item("DXImageTransform.Microsoft.Alpha").opacity/100;
}
catch(e){
try{
return elem.filters.item("alpha").opacity/100;
}
catch(e){
}
}
}
if(elem.currentStyle){
return elem.currentStyle[_483];
}
if(typeof (d.defaultView)=="undefined"){
return undefined;
}
if(d.defaultView===null){
return undefined;
}
var _484=d.defaultView.getComputedStyle(elem,null);
if(typeof (_484)=="undefined"||_484===null){
return undefined;
}
var _485=_483.replace(/([A-Z])/g,"-$1").toLowerCase();
return _484.getPropertyValue(_485);
},getStyle:function(elem,_486){
elem=MochiKit.DOM.getElement(elem);
var _487=elem.style[MochiKit.Base.camelize(_486)];
if(!_487){
if(document.defaultView&&document.defaultView.getComputedStyle){
var css=document.defaultView.getComputedStyle(elem,null);
_487=css?css.getPropertyValue(_486):null;
}else{
if(elem.currentStyle){
_487=elem.currentStyle[MochiKit.Base.camelize(_486)];
}
}
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.find(["left","top","right","bottom"],_486)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_487="auto";
}
}
return _487=="auto"?null:_487;
},setStyle:function(elem,_489){
elem=MochiKit.DOM.getElement(elem);
for(name in _489){
elem.style[MochiKit.Base.camelize(name)]=_489[name];
}
},getOpacity:function(elem){
var _490;
if(_490=MochiKit.Style.getStyle(elem,"opacity")){
return parseFloat(_490);
}
if(_490=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/)){
if(_490[1]){
return parseFloat(_490[1])/100;
}
}
return 1;
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _491=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|Safari|KHTML/.test(navigator.userAgent));
self.setStyle(elem,{opacity:_491?0.999999:1});
if(/MSIE/.test(navigator.userAgent)){
self.setStyle(elem,{filter:self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"")});
}
}else{
if(o<0.00001){
o=0;
}
self.setStyle(elem,{opacity:o});
if(/MSIE/.test(navigator.userAgent)){
self.setStyle(elem,{filter:self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"")+"alpha(opacity="+o*100+")"});
}
}
},getElementPosition:function(elem,_492){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem||(!(elem.x&&elem.y)&&(!elem.parentNode==null||self.computedStyle(elem,"display")=="none"))){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _495=null;
var d=MochiKit.DOM._document;
var de=d.documentElement;
var b=d.body;
if(!elem.parentNode&&elem.x&&elem.y){
c.x+=elem.x||0;
c.y+=elem.y||0;
}else{
if(elem.getBoundingClientRect){
box=elem.getBoundingClientRect();
c.x+=box.left+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
c.y+=box.top+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}else{
if(elem.offsetParent){
c.x+=elem.offsetLeft;
c.y+=elem.offsetTop;
_495=elem.offsetParent;
if(_495!=elem){
while(_495){
c.x+=_495.offsetLeft;
c.y+=_495.offsetTop;
_495=_495.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("safari")!=-1&&self.computedStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
}
}
}
if(typeof (_492)!="undefined"){
_492=arguments.callee(_492);
if(_492){
c.x-=(_492.x||0);
c.y-=(_492.y||0);
}
}
if(elem.parentNode){
_495=elem.parentNode;
}else{
_495=null;
}
while(_495){
var _498=_495.tagName.toUpperCase();
if(_498==="BODY"||_498==="HTML"){
break;
}
c.x-=_495.scrollLeft;
c.y-=_495.scrollTop;
if(_495.parentNode){
_495=_495.parentNode;
}else{
_495=null;
}
}
return c;
},setElementPosition:function(elem,_499,_500){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_500)=="undefined"){
_500="px";
}
var _501={};
var _502=MochiKit.Base.isUndefinedOrNull;
if(!_502(_499.x)){
_501["left"]=_499.x+_500;
}
if(!_502(_499.y)){
_501["top"]=_499.y+_500;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_501});
},getElementDimensions:function(elem){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
if(typeof (elem.w)=="number"||typeof (elem.h)=="number"){
return new self.Dimensions(elem.w||0,elem.h||0);
}
elem=dom.getElement(elem);
if(!elem){
return undefined;
}
var disp=self.computedStyle(elem,"display");
if(disp!="none"&&disp!=""&&typeof (disp)!="undefined"){
return new self.Dimensions(elem.offsetWidth||0,elem.offsetHeight||0);
}
var s=elem.style;
var _504=s.visibility;
var _505=s.position;
s.visibility="hidden";
s.position="absolute";
s.display="";
var _506=elem.offsetWidth;
var _507=elem.offsetHeight;
s.display="none";
s.position=_505;
s.visibility=_504;
return new self.Dimensions(_506,_507);
},setElementDimensions:function(elem,_508,_509){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_509)=="undefined"){
_509="px";
}
var _510={};
var _511=MochiKit.Base.isUndefinedOrNull;
if(!_511(_508.w)){
_510["width"]=_508.w+_509;
}
if(!_511(_508.h)){
_510["height"]=_508.h+_509;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_510});
},setDisplayForElement:function(_512,_513){
var _514=MochiKit.Base.extend(null,arguments,1);
var _515=MochiKit.DOM.getElement;
for(var i=0;i<_514.length;i++){
var _513=_515(_514[i]);
if(_513){
_513.style.display=_512;
}
}
},getViewportDimensions:function(){
var d=new MochiKit.Style.Dimensions();
var w=MochiKit.DOM._window;
var b=MochiKit.DOM._document.body;
if(w.innerWidth){
d.w=w.innerWidth;
d.h=w.innerHeight;
}else{
if(b.parentElement.clientWidth){
d.w=b.parentElement.clientWidth;
d.h=b.parentElement.clientHeight;
}else{
if(b&&b.clientWidth){
d.w=b.clientWidth;
d.h=b.clientHeight;
}
}
}
return d;
},getViewportPosition:function(){
var c=new MochiKit.Style.Coordinates(0,0);
var d=MochiKit.DOM._document;
var de=d.documentElement;
var db=d.body;
if(de&&(de.scrollTop||de.scrollLeft)){
c.x=de.scrollLeft;
c.y=de.scrollTop;
}else{
if(db){
c.x=db.scrollLeft;
c.y=db.scrollTop;
}
}
return c;
},__new__:function(){
var m=MochiKit.Base;
this.elementPosition=this.getElementPosition;
this.elementDimensions=this.getElementDimensions;
this.hideElement=m.partial(this.setDisplayForElement,"none");
this.showElement=m.partial(this.setDisplayForElement,"block");
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.Style.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Style);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.LoggingPane");
dojo.require("MochiKit.Logging");
dojo.require("MochiKit.Base");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Logging",[]);
JSAN.use("MochiKit.Base",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"||typeof (MochiKit.Logging)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.LoggingPane depends on MochiKit.Base and MochiKit.Logging!";
}
if(typeof (MochiKit.LoggingPane)=="undefined"){
MochiKit.LoggingPane={};
}
MochiKit.LoggingPane.NAME="MochiKit.LoggingPane";
MochiKit.LoggingPane.VERSION="1.4";
MochiKit.LoggingPane.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.LoggingPane.toString=function(){
return this.__repr__();
};
MochiKit.LoggingPane.createLoggingPane=function(_517){
var m=MochiKit.LoggingPane;
_517=!(!_517);
if(m._loggingPane&&m._loggingPane.inline!=_517){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_517,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_518,_519){
if(typeof (_519)=="undefined"||_519===null){
_519=MochiKit.Logging.logger;
}
this.logger=_519;
var _520=MochiKit.Base.update;
var _521=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _522=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_518){
var url=win.location.href.split("?")[0].replace(/[#:\/.><&-]/g,"_");
var name=uid+"_"+url;
var nwin=win.open("",name,"dependent,resizable,height=200");
if(!nwin){
alert("Not able to open debugging window due to pop-up blocking.");
return undefined;
}
nwin.document.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" "+"\"http://www.w3.org/TR/html4/loose.dtd\">"+"<html><head><title>[MochiKit.LoggingPane]</title></head>"+"<body></body></html>");
nwin.document.close();
nwin.document.title+=" "+win.document.title;
win=nwin;
}
var doc=win.document;
this.doc=doc;
var _525=doc.getElementById(uid);
var _526=!!_525;
if(_525&&typeof (_525.loggingPane)!="undefined"){
_525.loggingPane.logger=this.logger;
_525.loggingPane.buildAndApplyFilter();
return _525.loggingPane;
}
if(_526){
var _527;
while((_527=_525.firstChild)){
_525.removeChild(_527);
}
}else{
_525=doc.createElement("div");
_525.id=uid;
}
_525.loggingPane=this;
var _528=doc.createElement("input");
var _529=doc.createElement("input");
var _530=doc.createElement("button");
var _531=doc.createElement("button");
var _532=doc.createElement("button");
var _533=doc.createElement("button");
var _534=doc.createElement("div");
var _535=doc.createElement("div");
var _536=uid+"_Listener";
this.colorTable=_522(this.colorTable);
var _537=[];
var _538=null;
var _539=function(msg){
var _540=msg.level;
if(typeof (_540)=="number"){
_540=MochiKit.Logging.LogLevel[_540];
}
return _540;
};
var _541=function(msg){
return msg.info.join(" ");
};
var _542=bind(function(msg){
var _543=_539(msg);
var text=_541(msg);
var c=this.colorTable[_543];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_543;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_543+": "+text));
_535.appendChild(p);
_535.appendChild(doc.createElement("br"));
if(_534.offsetHeight>_534.scrollHeight){
_534.scrollTop=0;
}else{
_534.scrollTop=_534.scrollHeight;
}
},this);
var _545=function(msg){
_537[_537.length]=msg;
_542(msg);
};
var _546=function(){
var _547,infore;
try{
_547=new RegExp(_528.value);
infore=new RegExp(_529.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_547.test(_539(msg))&&infore.test(_541(msg)));
};
};
var _548=function(){
while(_535.firstChild){
_535.removeChild(_535.firstChild);
}
};
var _549=function(){
_537=[];
_548();
};
var _550=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_536);
try{
try{
_525.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_518){
_525.parentNode.removeChild(_525);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _551=function(){
_548();
for(var i=0;i<_537.length;i++){
var msg=_537[i];
if(_538===null||_538(msg)){
_542(msg);
}
}
};
this.buildAndApplyFilter=function(){
_538=_546();
_551();
this.logger.removeListener(_536);
this.logger.addListener(_536,_538,_545);
};
var _552=bind(function(){
_537=this.logger.getMessages();
_551();
},this);
var _553=bind(function(_554){
_554=_554||window.event;
key=_554.which||_554.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
//var _555="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
var _555="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_518){
_555+="; height: 10em; border-top: 2px solid black";
}else{
_555+="; height: 100%;";
}
_525.style.cssText=_555;
if(!_526){
doc.body.appendChild(_525);
}
_555={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_521(_528,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_553,"style":_555});
_525.appendChild(_528);
_521(_529,{"value":".*","onkeypress":_553,"style":_555});
_525.appendChild(_529);
_555="width: 8%; display:inline; font: "+this.logFont;
_530.appendChild(doc.createTextNode("Filter"));
_530.onclick=bind("buildAndApplyFilter",this);
_530.style.cssText=_555;
_525.appendChild(_530);
_531.appendChild(doc.createTextNode("Load"));
_531.onclick=_552;
_531.style.cssText=_555;
_525.appendChild(_531);
_532.appendChild(doc.createTextNode("Clear"));
_532.onclick=_549;
_532.style.cssText=_555;
_525.appendChild(_532);
_533.appendChild(doc.createTextNode("Close"));
_533.onclick=_550;
_533.style.cssText=_555;
_525.appendChild(_533);
_534.style.cssText="overflow: auto; width: 100%";
_535.style.cssText="width: 100%; height: "+(_518?"8em":"100%");
_534.appendChild(_535);
_525.appendChild(_534);
this.buildAndApplyFilter();
_552();
if(_518){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_518;
this.closePane=_550;
this.closed=false;
return this;
};
MochiKit.LoggingPane.LoggingPane.prototype={"logFont":"8pt Verdana,sans-serif","colorTable":{"ERROR":"red","FATAL":"darkred","WARNING":"blue","INFO":"black","DEBUG":"green"}};
MochiKit.LoggingPane.EXPORT_OK=["LoggingPane"];
MochiKit.LoggingPane.EXPORT=["createLoggingPane"];
MochiKit.LoggingPane.__new__=function(){
this.EXPORT_TAGS={":common":this.EXPORT,":all":MochiKit.Base.concat(this.EXPORT,this.EXPORT_OK)};
MochiKit.Base.nameFunctions(this);
MochiKit.LoggingPane._loggingPane=null;
};
MochiKit.LoggingPane.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.LoggingPane);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Color");
dojo.require("MochiKit.Base");
dojo.require("MochiKit.DOM");
dojo.require("MochiKit.Style");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
JSAN.use("MochiKit.DOM",[]);
JSAN.use("MochiKit.Style",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Color depends on MochiKit.Base";
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Color depends on MochiKit.DOM";
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Color depends on MochiKit.Style";
}
if(typeof (MochiKit.Color)=="undefined"){
MochiKit.Color={};
}
MochiKit.Color.NAME="MochiKit.Color";
MochiKit.Color.VERSION="1.4";
MochiKit.Color.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Color.toString=function(){
return this.__repr__();
};
MochiKit.Color.Color=function(red,_557,blue,_559){
if(typeof (_559)=="undefined"||_559===null){
_559=1;
}
this.rgb={r:red,g:_557,b:blue,a:_559};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_560){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_560);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_564){
var hsl=this.asHSL();
hsl.s=_564;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_565){
var hsl=this.asHSL();
hsl.l=_565;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_566){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_566,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_567){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_567,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_568,_569){
if(typeof (_569)=="undefined"||_569===null){
_569=0.5;
}
var sf=1-_569;
var s=this.rgb;
var d=_568.rgb;
var df=_569;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_572){
var a=this.asRGB();
var b=_572.asRGB();
return MochiKit.Base.compare([a.r,a.g,a.b,a.a],[b.r,b.g,b.b,b.a]);
},isLight:function(){
return this.asHSL().b>0.5;
},isDark:function(){
return (!this.isLight());
},toHSLString:function(){
var c=this.asHSL();
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hslString;
if(!rval){
var mid=(ccc(c.h,360).toFixed(0)+","+ccc(c.s,100).toPrecision(4)+"%"+","+ccc(c.l,100).toPrecision(4)+"%");
var a=c.a;
if(a>=1){
a=1;
rval="hsl("+mid+")";
}else{
if(a<=0){
a=0;
}
rval="hsla("+mid+","+a+")";
}
this._hslString=rval;
}
return rval;
},toRGBString:function(){
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._rgbString;
if(!rval){
var mid=(ccc(c.r,255).toFixed(0)+","+ccc(c.g,255).toFixed(0)+","+ccc(c.b,255).toFixed(0));
if(c.a!=1){
rval="rgba("+mid+","+c.a+")";
}else{
rval="rgb("+mid+")";
}
this._rgbString=rval;
}
return rval;
},asRGB:function(){
return MochiKit.Base.clone(this.rgb);
},toHexString:function(){
var m=MochiKit.Color;
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hexString;
if(!rval){
rval=("#"+m.toColorPart(ccc(c.r,255))+m.toColorPart(ccc(c.g,255))+m.toColorPart(ccc(c.b,255)));
this._hexString=rval;
}
return rval;
},asHSV:function(){
var hsv=this.hsv;
var c=this.rgb;
if(typeof (hsv)=="undefined"||hsv===null){
hsv=MochiKit.Color.rgbToHSV(this.rgb);
this.hsv=hsv;
}
return MochiKit.Base.clone(hsv);
},asHSL:function(){
var hsl=this.hsl;
var c=this.rgb;
if(typeof (hsl)=="undefined"||hsl===null){
hsl=MochiKit.Color.rgbToHSL(this.rgb);
this.hsl=hsl;
}
return MochiKit.Base.clone(hsl);
},toString:function(){
return this.toRGBString();
},repr:function(){
var c=this.rgb;
var col=[c.r,c.g,c.b,c.a];
return this.__class__.NAME+"("+col.join(", ")+")";
}};
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_577,blue,_578){
var _579=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_577=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_578=undefined;
}else{
_578=rgb.a;
}
}
return new _579(red,_577,blue,_578);
},fromHSL:function(hue,_580,_581,_582){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_583,_584,_585){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _586=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _587=_586._namedColors[name.toLowerCase()];
if(typeof (_587)=="string"){
return _586.fromHexString(_587);
}else{
if(name=="transparent"){
return _586.transparentColor();
}
}
return null;
},fromString:function(_588){
var self=MochiKit.Color.Color;
var _589=_588.substr(0,3);
if(_589=="rgb"){
return self.fromRGBString(_588);
}else{
if(_589=="hsl"){
return self.fromHSLString(_588);
}else{
if(_588.charAt(0)=="#"){
return self.fromHexString(_588);
}
}
}
return self.fromName(_588);
},fromHexString:function(_590){
if(_590.charAt(0)=="#"){
_590=_590.substring(1);
}
var _591=[];
var i,hex;
if(_590.length==3){
for(i=0;i<3;i++){
hex=_590.substr(i,1);
_591.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_590.substr(i,2);
_591.push(parseInt(hex,16)/255);
}
}
var _592=MochiKit.Color.Color;
return _592.fromRGB.apply(_592,_591);
},_fromColorString:function(pre,_594,_595,_596){
if(_596.indexOf(pre)===0){
_596=_596.substring(_596.indexOf("(",3)+1,_596.length-1);
}
var _597=_596.split(/\s*,\s*/);
var _598=[];
for(var i=0;i<_597.length;i++){
var c=_597[i];
var val;
var _599=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_599=="deg"){
val=parseFloat(c)/360;
}else{
if(_599=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_595[i]*parseFloat(c);
}
}
}
_598.push(val);
}
return this[_594].apply(this,_598);
},fromComputedStyle:function(elem,_600){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _601=MochiKit.Style.computedStyle.apply(d,arguments);
if(!_601){
continue;
}
var _602=cls.fromString(_601);
if(!_602){
break;
}
if(_602.asRGB().a>0){
return _602;
}
}
return null;
},fromBackground:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"backgroundColor","background-color")||cls.whiteColor();
},fromText:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"color","color")||cls.blackColor();
},namedColors:function(){
return MochiKit.Base.clone(MochiKit.Color.Color._namedColors);
}});
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_603){
v*=_603;
if(v<0){
return 0;
}else{
if(v>_603){
return _603;
}else{
return v;
}
}
},_hslValue:function(n1,n2,hue){
if(hue>6){
hue-=6;
}else{
if(hue<0){
hue+=6;
}
}
var val;
if(hue<1){
val=n1+(n2-n1)*hue;
}else{
if(hue<3){
val=n2;
}else{
if(hue<4){
val=n1+(n2-n1)*(4-hue);
}else{
val=n1;
}
}
}
return val;
},hsvToRGB:function(hue,_606,_607,_608){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_606=hsv.s;
_607=hsv.v;
_608=hsv.a;
}
var red;
var _609;
var blue;
if(_606===0){
red=0;
_609=0;
blue=0;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_607*(1-_606);
var q=_607*(1-(_606*f));
var t=_607*(1-(_606*(1-f)));
switch(i){
case 1:
red=q;
_609=_607;
blue=p;
break;
case 2:
red=p;
_609=_607;
blue=t;
break;
case 3:
red=p;
_609=q;
blue=_607;
break;
case 4:
red=t;
_609=p;
blue=_607;
break;
case 5:
red=_607;
_609=p;
blue=q;
break;
case 6:
case 0:
red=_607;
_609=t;
blue=p;
break;
}
}
return {r:red,g:_609,b:blue,a:_608};
},hslToRGB:function(hue,_611,_612,_613){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_611=hsl.s;
_612=hsl.l;
_613=hsl.a;
}
var red;
var _614;
var blue;
if(_611===0){
red=_612;
_614=_612;
blue=_612;
}else{
var m2;
if(_612<=0.5){
m2=_612*(1+_611);
}else{
m2=_612+_611-(_612*_611);
}
var m1=(2*_612)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_614=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_614,b:blue,a:_613};
},rgbToHSV:function(red,_618,blue,_619){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_618=rgb.g;
blue=rgb.b;
_619=rgb.a;
}
var max=Math.max(Math.max(red,_618),blue);
var min=Math.min(Math.min(red,_618),blue);
var hue;
var _622;
var _623=max;
if(min==max){
hue=0;
_622=0;
}else{
var _624=(max-min);
_622=_624/max;
if(red==max){
hue=(_618-blue)/_624;
}else{
if(_618==max){
hue=2+((blue-red)/_624);
}else{
hue=4+((red-_618)/_624);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_622,v:_623,a:_619};
},rgbToHSL:function(red,_625,blue,_626){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_625=rgb.g;
blue=rgb.b;
_626=rgb.a;
}
var max=Math.max(red,Math.max(_625,blue));
var min=Math.min(red,Math.min(_625,blue));
var hue;
var _627;
var _628=(max+min)/2;
var _629=max-min;
if(_629===0){
hue=0;
_627=0;
}else{
if(_628<=0.5){
_627=_629/(max+min);
}else{
_627=_629/(2-max-min);
}
if(red==max){
hue=(_625-blue)/_629;
}else{
if(_625==max){
hue=2+((blue-red)/_629);
}else{
hue=4+((red-_625)/_629);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_627,l:_628,a:_626};
},toColorPart:function(num){
num=Math.round(num);
var _630=num.toString(16);
if(num<16){
return "0"+_630;
}
return _630;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _631=1/3;
var _632={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_631,_631,_631],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_631,2*_631,2*_631],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
var _633=function(name,r,g,b,a){
var rval=this.fromRGB(r,g,b,a);
this[name]=function(){
return rval;
};
return rval;
};
for(var k in _632){
var name=k+"Color";
var _635=m.concat([_633,this.Color,name],_632[k]);
this.Color[name]=m.bind.apply(null,_635);
}
var _636=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof Color)){
return false;
}
}
return true;
};
var _637=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_636,_637);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
}});
MochiKit.Color.EXPORT=["Color"];
MochiKit.Color.EXPORT_OK=["clampColorComponent","rgbToHSL","hslToRGB","rgbToHSV","hsvToRGB","toColorPart"];
MochiKit.Color.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Color);
MochiKit.Color.Color._namedColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Signal");
dojo.require("MochiKit.Base");
dojo.require("MochiKit.DOM");
dojo.require("MochiKit.Style");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
JSAN.use("MochiKit.DOM",[]);
JSAN.use("MochiKit.Style",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Signal depends on MochiKit.Base!";
}
try{
if(typeof (MochiKit.DOM)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Signal depends on MochiKit.DOM!";
}
try{
if(typeof (MochiKit.Style)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Signal depends on MochiKit.Style!";
}
if(typeof (MochiKit.Signal)=="undefined"){
MochiKit.Signal={};
}
MochiKit.Signal.NAME="MochiKit.Signal";
MochiKit.Signal.VERSION="1.4";
MochiKit.Signal._observers=[];
MochiKit.Signal.Event=function(src,e){
this._event=e||window.event;
this._src=src;
};
MochiKit.Base.update(MochiKit.Signal.Event.prototype,{__repr__:function(){
var repr=MochiKit.Base.repr;
var str="{event(): "+repr(this.event())+", src(): "+repr(this.src())+", type(): "+repr(this.type())+", target(): "+repr(this.target())+", modifier(): "+"{alt: "+repr(this.modifier().alt)+", ctrl: "+repr(this.modifier().ctrl)+", meta: "+repr(this.modifier().meta)+", shift: "+repr(this.modifier().shift)+", any: "+repr(this.modifier().any)+"}";
if(this.type()&&this.type().indexOf("key")===0){
str+=", key(): {code: "+repr(this.key().code)+", string: "+repr(this.key().string)+"}";
}
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
str+=", mouse(): {page: "+repr(this.mouse().page)+", client: "+repr(this.mouse().client);
if(this.type()!="mousemove"){
str+=", button: {left: "+repr(this.mouse().button.left)+", middle: "+repr(this.mouse().button.middle)+", right: "+repr(this.mouse().button.right)+"}}";
}else{
str+="}";
}
}
if(this.type()=="mouseover"||this.type()=="mouseout"){
str+=", relatedTarget(): "+repr(this.relatedTarget());
}
str+="}";
return str;
},toString:function(){
return this.__repr__();
},src:function(){
return this._src;
},event:function(){
return this._event;
},type:function(){
return this._event.type||undefined;
},target:function(){
return this._event.target||this._event.srcElement;
},_relatedTarget:null,relatedTarget:function(){
if(this._relatedTarget!==null){
return this._relatedTarget;
}
var elem=null;
if(this.type()=="mouseover"){
elem=(this._event.relatedTarget||this._event.fromElement);
}else{
if(this.type()=="mouseout"){
elem=(this._event.relatedTarget||this._event.toElement);
}
}
if(elem!==null){
this._relatedTarget=elem;
return elem;
}
return undefined;
},_modifier:null,modifier:function(){
if(this._modifier!==null){
return this._modifier;
}
var m={};
m.alt=this._event.altKey;
m.ctrl=this._event.ctrlKey;
m.meta=this._event.metaKey||false;
m.shift=this._event.shiftKey;
m.any=m.alt||m.ctrl||m.shift||m.meta;
this._modifier=m;
return m;
},_key:null,key:function(){
if(this._key!==null){
return this._key;
}
var k={};
if(this.type()&&this.type().indexOf("key")===0){
if(this.type()=="keydown"||this.type()=="keyup"){
k.code=this._event.keyCode;
k.string=(MochiKit.Signal._specialKeys[k.code]||"KEY_UNKNOWN");
this._key=k;
return k;
}else{
if(this.type()=="keypress"){
k.code=0;
k.string="";
if(typeof (this._event.charCode)!="undefined"&&this._event.charCode!==0&&!MochiKit.Signal._specialMacKeys[this._event.charCode]){
k.code=this._event.charCode;
k.string=String.fromCharCode(k.code);
}else{
if(this._event.keyCode&&typeof (this._event.charCode)=="undefined"){
k.code=this._event.keyCode;
k.string=String.fromCharCode(k.code);
}
}
this._key=k;
return k;
}
}
}
return undefined;
},_mouse:null,mouse:function(){
if(this._mouse!==null){
return this._mouse;
}
var m={};
var e=this._event;
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
m.client=new MochiKit.Style.Coordinates(0,0);
if(e.clientX||e.clientY){
m.client.x=(!e.clientX||e.clientX<0)?0:e.clientX;
m.client.y=(!e.clientY||e.clientY<0)?0:e.clientY;
}
m.page=new MochiKit.Style.Coordinates(0,0);
if(e.pageX||e.pageY){
m.page.x=(!e.pageX||e.pageX<0)?0:e.pageX;
m.page.y=(!e.pageY||e.pageY<0)?0:e.pageY;
}else{
var de=MochiKit.DOM._document.documentElement;
var b=MochiKit.DOM._document.body;
m.page.x=e.clientX+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
m.page.y=e.clientY+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}
if(this.type()!="mousemove"){
m.button={};
m.button.left=false;
m.button.right=false;
m.button.middle=false;
if(e.which){
m.button.left=(e.which==1);
m.button.middle=(e.which==2);
m.button.right=(e.which==3);
}else{
m.button.left=!!(e.button&1);
m.button.right=!!(e.button&2);
m.button.middle=!!(e.button&4);
}
}
this._mouse=m;
return m;
}
return undefined;
},stop:function(){
this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){
if(this._event.stopPropagation){
this._event.stopPropagation();
}else{
this._event.cancelBubble=true;
}
},preventDefault:function(){
if(this._event.preventDefault){
this._event.preventDefault();
}else{
if(this._confirmUnload===null){
this._event.returnValue=false;
}
}
},_confirmUnload:null,confirmUnload:function(msg){
if(this.type()=="beforeunload"){
this._confirmUnload=msg;
this._event.returnValue=msg;
}
}});
MochiKit.Signal._specialMacKeys={3:"KEY_ENTER",63289:"KEY_NUM_PAD_CLEAR",63276:"KEY_PAGE_UP",63277:"KEY_PAGE_DOWN",63275:"KEY_END",63273:"KEY_HOME",63234:"KEY_ARROW_LEFT",63232:"KEY_ARROW_UP",63235:"KEY_ARROW_RIGHT",63233:"KEY_ARROW_DOWN",63302:"KEY_INSERT",63272:"KEY_DELETE"};
(function(){
var _638=MochiKit.Signal._specialMacKeys;
for(i=63236;i<=63242;i++){
_638[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _639=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_639[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_639[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_639[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_639[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Base.update(MochiKit.Signal,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},_unloadCache:function(){
var self=MochiKit.Signal;
var _640=self._observers;
for(var i=0;i<_640.length;i++){
self._disconnect(_640[i]);
}
delete self._observers;
try{
window.onload=undefined;
}
catch(e){
}
try{
window.onunload=undefined;
}
catch(e){
}
},_listener:function(src,func,obj,_641){
var self=MochiKit.Signal;
var E=self.Event;
if(!_641){
return MochiKit.Base.bind(func,obj);
}
obj=obj||src;
if(typeof (func)=="string"){
return function(_643){
obj[func].apply(obj,[new E(src,_643)]);
};
}else{
return function(_644){
func.apply(obj,[new E(src,_644)]);
};
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_646){
var e=new E(src,_646);
try{
e.relatedTarget().nodeName;
}
catch(err){
return;
}
e.stop();
if(MochiKit.DOM.isChildNode(e.relatedTarget(),src)){
return;
}
e.type=function(){
return sig;
};
if(typeof (func)=="string"){
return obj[func].apply(obj,[e]);
}else{
return func.apply(obj,[e]);
}
};
},_getDestPair:function(_647,_648){
var obj=null;
var func=null;
if(typeof (_648)!="undefined"){
obj=_647;
func=_648;
if(typeof (_648)=="string"){
if(typeof (_647[_648])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_648)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_647)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_647;
}
}
return [obj,func];
},connect:function(src,sig,_649,_650){
src=MochiKit.DOM.getElement(src);
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _651=self._getDestPair(_649,_650);
var obj=_651[0];
var func=_651[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _652=!!(src.addEventListener||src.attachEvent);
if(_652&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _653=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
var _653=self._listener(src,func,obj,_652);
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_653,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_653);
}
}
var _654=[src,sig,_653,_652,_649,_650,true];
self._observers.push(_654);
if(!_652&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_654],arguments,1);
src.__connect__.apply(src,args);
}
return _654;
},_disconnect:function(_655){
if(!_655[6]){
return;
}
_655[6]=false;
if(!_655[3]){
return;
}
var src=_655[0];
var sig=_655[1];
var _656=_655[2];
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_656,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_656);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_657){
var self=MochiKit.Signal;
var _658=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=MochiKit.DOM.getElement(arguments[0]);
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_658.length-1;i>=0;i--){
var o=_658[i];
if(o[0]===src&&o[1]===sig&&o[4]===obj&&o[5]===func){
self._disconnect(o);
if(!self._lock){
_658.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_658,_657);
if(idx>=0){
self._disconnect(_657);
if(!self._lock){
_658.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_659,_660){
var self=MochiKit.Signal;
var _661=self._observers;
var _662=self._disconnect;
var _663=self._lock;
var _664=self._dirty;
if(typeof (_660)==="undefined"){
_660=null;
}
for(var i=_661.length-1;i>=0;i--){
var _665=_661[i];
if(_665[4]===_659&&(_660===null||_665[5]===_660)){
_662(_665);
if(_663){
_664=true;
}else{
_661.splice(i,1);
}
}
}
self._dirty=_664;
},disconnectAll:function(src,sig){
src=MochiKit.DOM.getElement(src);
var m=MochiKit.Base;
var _666=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _667=self._disconnect;
var _668=self._observers;
var i,ident;
var _669=self._lock;
var _670=self._dirty;
if(_666.length===0){
for(i=_668.length-1;i>=0;i--){
ident=_668[i];
if(ident[0]===src){
_667(ident);
if(!_669){
_668.splice(i,1);
}else{
_670=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_666.length;i++){
sigs[_666[i]]=true;
}
for(i=_668.length-1;i>=0;i--){
ident=_668[i];
if(ident[0]===src&&ident[1] in sigs){
_667(ident);
if(!_669){
_668.splice(i,1);
}else{
_670=true;
}
}
}
}
self._dirty=_670;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _672=self._observers;
src=MochiKit.DOM.getElement(src);
var args=MochiKit.Base.extend(null,arguments,2);
var _673=[];
self._lock=true;
for(var i=0;i<_672.length;i++){
var _674=_672[i];
if(_674[0]===src&&_674[1]===sig){
try{
_674[2].apply(src,args);
}
catch(e){
_673.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_672.length-1;i>=0;i--){
if(!_672[i][6]){
_672.splice(i,1);
}
}
}
if(_673.length==1){
throw _673[0];
}else{
if(_673.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_673;
throw e;
}
}
}});
MochiKit.Signal.EXPORT_OK=[];
MochiKit.Signal.EXPORT=["connect","disconnect","signal","disconnectAll","disconnectAllTo"];
MochiKit.Signal.__new__=function(win){
var m=MochiKit.Base;
this._document=document;
this._window=win;
this._lock=false;
this._dirty=false;
try{
this.connect(window,"onunload",this._unloadCache);
}
catch(e){
}
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Signal.__new__(this);
if(MochiKit.__export__){
connect=MochiKit.Signal.connect;
disconnect=MochiKit.Signal.disconnect;
disconnectAll=MochiKit.Signal.disconnectAll;
signal=MochiKit.Signal.signal;
}
MochiKit.Base._exportSymbols(this,MochiKit.Signal);
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Position");
dojo.require("MochiKit.Base");
dojo.require("MochiKit.DOM");
dojo.require("MochiKit.Style");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
JSAN.use("MochiKit.DOM",[]);
JSAN.use("MochiKit.Style",[]);
}
try{
if(typeof (MochiKit.Base)=="undefined"||typeof (MochiKit.Style)=="undefined"||typeof (MochiKit.DOM)=="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Style depends on MochiKit.Base, MochiKit.DOM, and MochiKit.Style!";
}
if(typeof (MochiKit.Position)=="undefined"){
MochiKit.Position={};
}
MochiKit.Position.NAME="MochiKit.Position";
MochiKit.Position.VERSION="1.4";
MochiKit.Position.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Position.toString=function(){
return this.__repr__();
};
MochiKit.Position.EXPORT_OK=[];
MochiKit.Position.EXPORT=[];
MochiKit.Base.update(MochiKit.Position,{includeScrollOffsets:false,prepare:function(){
var _675=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _676=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_675,_676);
},cumulativeOffset:function(_677){
var _678=0;
var _679=0;
do{
_678+=_677.offsetTop||0;
_679+=_677.offsetLeft||0;
_677=_677.offsetParent;
}while(_677);
return new MochiKit.Style.Coordinates(_679,_678);
},realOffset:function(_680){
var _681=0;
var _682=0;
do{
_681+=_680.scrollTop||0;
_682+=_680.scrollLeft||0;
_680=_680.parentNode;
}while(_680);
return new MochiKit.Style.Coordinates(_682,_681);
},within:function(_683,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_683,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_683);
if(_683.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_683.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_683.offsetWidth);
},withinIncludingScrolloffsets:function(_684,x,y){
var _685=this.realOffset(_684);
this.xcomp=x+_685.x-this.windowOffset.x;
this.ycomp=y+_685.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_684);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_684.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_684.offsetWidth);
},overlap:function(mode,_687){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_687.offsetHeight)-this.ycomp)/_687.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_687.offsetWidth)-this.xcomp)/_687.offsetWidth;
}
},absolutize:function(_688){
_688=MochiKit.DOM.getElement(_688);
if(_688.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _689=MochiKit.Position.positionedOffset(_688);
var _690=_688.clientWidth;
var _691=_688.clientHeight;
var _692={"position":_688.style.position,"left":_689.x-parseFloat(_688.style.left||0),"top":_689.y-parseFloat(_688.style.top||0),"width":_688.style.width,"height":_688.style.height};
_688.style.position="absolute";
_688.style.top=_689.y+"px";
_688.style.left=_689.x+"px";
_688.style.width=_690+"px";
_688.style.height=_691+"px";
return _692;
},positionedOffset:function(_693){
var _694=0,valueL=0;
do{
_694+=_693.offsetTop||0;
valueL+=_693.offsetLeft||0;
_693=_693.offsetParent;
if(_693){
p=MochiKit.Style.getStyle(_693,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_693);
return new MochiKit.Style.Coordinates(valueL,_694);
},relativize:function(_695,_696){
_695=MochiKit.DOM.getElement(_695);
if(_695.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_695.style.top||0)-(_696["top"]||0);
var left=parseFloat(_695.style.left||0)-(_696["left"]||0);
_695.style.position=_696["position"];
_695.style.top=top+"px";
_695.style.left=left+"px";
_695.style.width=_696["width"];
_695.style.height=_696["height"];
},clone:function(_699,_700){
_699=MochiKit.DOM.getElement(_699);
_700=MochiKit.DOM.getElement(_700);
_700.style.position="absolute";
var _701=this.cumulativeOffset(_699);
_700.style.top=_701.y+"px";
_700.style.left=_701.x+"px";
_700.style.width=_699.offsetWidth+"px";
_700.style.height=_699.offsetHeight+"px";
},page:function(_702){
var _703=0;
var _704=0;
var _705=_702;
do{
_703+=_705.offsetTop||0;
_704+=_705.offsetLeft||0;
if(_705.offsetParent==document.body&&MochiKit.Style.getStyle(_705,"position")=="absolute"){
break;
}
}while(_705=_705.offsetParent);
_705=_702;
do{
_703-=_705.scrollTop||0;
_704-=_705.scrollLeft||0;
}while(_705=_705.parentNode);
return new MochiKit.Style.Coordinates(_704,_703);
}});
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Visual");
dojo.require("MochiKit.Base");
dojo.require("MochiKit.DOM");
dojo.require("MochiKit.Style");
dojo.require("MochiKit.Color");
dojo.require("MochiKit.Position");
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit.Base",[]);
JSAN.use("MochiKit.DOM",[]);
JSAN.use("MochiKit.Style",[]);
JSAN.use("MochiKit.Color",[]);
JSAN.use("MochiKit.Position",[]);
}
try{
if(typeof (MochiKit.Base)==="undefined"||typeof (MochiKit.DOM)==="undefined"||typeof (MochiKit.Style)==="undefined"||typeof (MochiKit.Position)==="undefined"||typeof (MochiKit.Color)==="undefined"){
throw "";
}
}
catch(e){
throw "MochiKit.Visual depends on MochiKit.Base, MochiKit.DOM, MochiKit.Style, MochiKit.Position and MochiKit.Color!";
}
if(typeof (MochiKit.Visual)=="undefined"){
MochiKit.Visual={};
}
MochiKit.Visual.NAME="MochiKit.Visual";
MochiKit.Visual.VERSION="1.4";
MochiKit.Visual.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Visual.toString=function(){
return this.__repr__();
};
MochiKit.Visual._RoundCorners=function(e,_706){
e=MochiKit.DOM.getElement(e);
this._setOptions(_706);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _707=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_707=C.fromBackground(e);
}else{
if(!(_707 instanceof C)){
_707=C.fromString(_707);
}
}
this.isTransparent=(_707.asRGB().a<=0);
var _709=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_709=C.fromBackground(e.offsetParent);
}else{
if(!(_709 instanceof C)){
_709=C.fromString(_709);
}
}
this._roundCornersImpl(e,_707,_709);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _710=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _711=doc.defaultView.getComputedStyle(e,null);
if(typeof (_711)==="undefined"||_711===null){
return e;
}
var _712=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_711.getPropertyValue("padding-top"),marginRight:_711.getPropertyValue("padding-right"),marginBottom:_711.getPropertyValue("padding-bottom"),marginLeft:_711.getPropertyValue("padding-left"),padding:"0px"}});
_712.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_712);
return e;
},_roundCornersImpl:function(e,_713,_714){
if(this.options.border){
this._renderBorder(e,_714);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_713,_714);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_713,_714);
}
},_renderBorder:function(el,_716){
var _717="1px solid "+this._borderColor(_716);
var _718="border-left: "+_717;
var _719="border-right: "+_717;
var _720="style='"+_718+";"+_719+"'";
el.innerHTML="<div "+_720+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_721,_722){
var _723=this._createCorner(_722);
for(var i=0;i<this.options.numSlices;i++){
_723.appendChild(this._createCornerSlice(_721,_722,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_723,el.firstChild);
},_roundBottomCorners:function(el,_724,_725){
var _726=this._createCorner(_725);
for(var i=(this.options.numSlices-1);i>=0;i--){
_726.appendChild(this._createCornerSlice(_724,_725,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_726);
},_createCorner:function(_727){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_727.toString()}});
},_createCornerSlice:function(_728,_729,n,_730){
var _731=MochiKit.DOM.SPAN();
var _732=_731.style;
_732.backgroundColor=_728.toString();
_732.display="block";
_732.height="1px";
_732.overflow="hidden";
_732.fontSize="1px";
var _733=this._borderColor(_728,_729);
if(this.options.border&&n===0){
_732.borderTopStyle="solid";
_732.borderTopWidth="1px";
_732.borderLeftWidth="0px";
_732.borderRightWidth="0px";
_732.borderBottomWidth="0px";
_732.height="0px";
_732.borderColor=_733.toString();
}else{
if(_733){
_732.borderColor=_733.toString();
_732.borderStyle="solid";
_732.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_732.height="2px";
}
this._setMargin(_731,n,_730);
this._setBorder(_731,n,_730);
return _731;
},_setOptions:function(_734){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_734);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _735=this.options.corners;
if(this._hasString(_735,"all","top")){
return "";
}
var _736=(_735.indexOf("tl")!=-1);
var _737=(_735.indexOf("tr")!=-1);
if(_736&&_737){
return "";
}
if(_736){
return "left";
}
if(_737){
return "right";
}
return "";
},_whichSideBottom:function(){
var _738=this.options.corners;
if(this._hasString(_738,"all","bottom")){
return "";
}
var _739=(_738.indexOf("bl")!=-1);
var _740=(_738.indexOf("br")!=-1);
if(_739&&_740){
return "";
}
if(_739){
return "left";
}
if(_740){
return "right";
}
return "";
},_borderColor:function(_741,_742){
if(_741=="transparent"){
return _742;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _742.blendedColor(_741);
}
}
}
return "";
},_setMargin:function(el,n,_743){
var _744=this._marginSize(n)+"px";
var _745=(_743=="top"?this._whichSideTop():this._whichSideBottom());
var _746=el.style;
if(_745=="left"){
_746.marginLeft=_744;
_746.marginRight="0px";
}else{
if(_745=="right"){
_746.marginRight=_744;
_746.marginLeft="0px";
}else{
_746.marginLeft=_744;
_746.marginRight=_744;
}
}
},_setBorder:function(el,n,_747){
var _748=this._borderSize(n)+"px";
var _749=(_747=="top"?this._whichSideTop():this._whichSideBottom());
var _750=el.style;
if(_749=="left"){
_750.borderLeftWidth=_748;
_750.borderRightWidth="0px";
}else{
if(_749=="right"){
_750.borderRightWidth=_748;
_750.borderLeftWidth="0px";
}else{
_750.borderLeftWidth=_748;
_750.borderRightWidth=_748;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _751=[1,0];
return _751[n];
}else{
if(o.compact){
var _752=[2,1];
return _752[n];
}else{
if(o.blend){
var _753=[3,2,1,0];
return _753[n];
}else{
var _754=[5,3,2,1];
return _754[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _755;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_755=[1,0];
}else{
if(o.blend){
_755=[2,1,1,1];
}else{
if(o.border){
_755=[0,2,0,0];
}else{
if(this.isTransparent){
_755=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _755[n];
},_hasString:function(str){
for(var i=1;i<arguments.length;i++){
if(str.indexOf(arguments[i])!=-1){
return true;
}
}
return false;
},_isTopRounded:function(){
return this._hasString(this.options.corners,"all","top","tl","tr");
},_isBottomRounded:function(){
return this._hasString(this.options.corners,"all","bottom","bl","br");
},_hasSingleTextChild:function(el){
return (el.childNodes.length==1&&el.childNodes[0].nodeType==3);
}};
MochiKit.Visual.roundElement=function(e,_756){
new MochiKit.Visual._RoundCorners(e,_756);
};
MochiKit.Visual.roundClass=function(_757,_758,_759){
var _760=MochiKit.DOM.getElementsByTagAndClassName(_757,_758);
for(var i=0;i<_760.length;i++){
MochiKit.Visual.roundElement(_760[i],_759);
}
};
MochiKit.Visual.tagifyText=function(_761,_762){
var _762=_762||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_762+=";zoom:1";
}
_761=MochiKit.DOM.getElement(_761);
var ma=MochiKit.Base.map;
ma(function(_764){
if(_764.nodeType==3){
ma(function(_765){
_761.insertBefore(MochiKit.DOM.SPAN({style:_762},_765==" "?String.fromCharCode(160):_765),_764);
},_764.nodeValue.split(""));
MochiKit.DOM.removeElement(_764);
}
},_761.childNodes);
};
MochiKit.Visual.forceRerendering=function(_766){
try{
_766=MochiKit.DOM.getElement(_766);
var n=document.createTextNode(" ");
_766.appendChild(n);
_766.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_767,_768,_769){
_769=MochiKit.Base.update({speed:0.1,delay:0},_769||{});
var _770=_769.delay;
var _771=0;
MochiKit.Base.map(function(_772){
_769.delay=_771*_769.speed+_770;
new _768(_772,_769);
_771+=1;
},_767);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_773,_774,_775){
_773=MochiKit.DOM.getElement(_773);
_774=(_774||"appear").toLowerCase();
_775=MochiKit.Base.update({queue:{position:"end",scope:(_773.id||"global"),limit:1}},_775||{});
var v=MochiKit.Visual;
v[_773.style.display!="none"?v.PAIRS[_774][1]:v.PAIRS[_774][0]](_773,_775);
};
MochiKit.Visual.Transitions={};
MochiKit.Visual.Transitions.linear=function(pos){
return pos;
};
MochiKit.Visual.Transitions.sinoidal=function(pos){
return (-Math.cos(pos*Math.PI)/2)+0.5;
};
MochiKit.Visual.Transitions.reverse=function(pos){
return 1-pos;
};
MochiKit.Visual.Transitions.flicker=function(pos){
return ((-Math.cos(pos*Math.PI)/4)+0.75)+Math.random()/4;
};
MochiKit.Visual.Transitions.wobble=function(pos){
return (-Math.cos(pos*Math.PI*(9*pos))/2)+0.5;
};
MochiKit.Visual.Transitions.pulse=function(pos){
return (Math.floor(pos*10)%2==0?(pos*10-Math.floor(pos*10)):1-(pos*10-Math.floor(pos*10)));
};
MochiKit.Visual.Transitions.none=function(pos){
return 0;
};
MochiKit.Visual.Transitions.full=function(pos){
return 1;
};
MochiKit.Visual.ScopedQueue=function(){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls();
}
this.__init__();
};
MochiKit.Base.update(MochiKit.Visual.ScopedQueue.prototype,{__init__:function(){
this.effects=[];
this.interval=null;
},add:function(_776){
var _777=new Date().getTime();
var _778=(typeof (_776.options.queue)=="string")?_776.options.queue:_776.options.queue.position;
var ma=MochiKit.Base.map;
switch(_778){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_776.finishOn;
e.finishOn+=_776.finishOn;
}
},this.effects);
break;
case "end":
var _779;
ma(function(e){
var i=e.finishOn;
if(i>=(_779||i)){
_779=i;
}
},this.effects);
_777=_779||_777;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
}
_776.startOn+=_777;
_776.finishOn+=_777;
if(!_776.options.queue.limit||this.effects.length<_776.options.queue.limit){
this.effects.push(_776);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_780){
return setInterval(func,_780);
},remove:function(_781){
this.effects=MochiKit.Base.filter(function(e){
return e!=_781;
},this.effects);
if(this.effects.length==0){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_782){
clearInterval(_782);
},loop:function(){
var _783=new Date().getTime();
MochiKit.Base.map(function(_784){
_784.loop(_783);
},this.effects);
}});
MochiKit.Visual.Queues={instances:{},get:function(_785){
if(typeof (_785)!="string"){
return _785;
}
if(!this.instances[_785]){
this.instances[_785]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_785];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.DefaultOptions={transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_786){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_786||{},v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_787){
if(_787>=this.startOn){
if(_787>=this.finishOn){
return this.finalize();
}
var pos=(_787-this.startOn)/(this.finishOn-this.startOn);
var _788=Math.round(pos*this.options.fps*this.options.duration);
if(_788>this.currentFrame){
this.render(pos);
this.currentFrame=_788;
}
}
},render:function(pos){
if(this.state=="idle"){
this.state="running";
this.event("beforeSetup");
this.setup();
this.event("afterSetup");
}
if(this.state=="running"){
if(this.options.transition){
pos=this.options.transition(pos);
}
pos*=(this.options.to-this.options.from);
pos+=this.options.from;
this.event("beforeUpdate");
this.update(pos);
this.event("afterUpdate");
}
},cancel:function(){
if(!this.options.sync){
MochiKit.Visual.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).remove(this);
}
this.state="finished";
},finalize:function(){
this.render(1);
this.cancel();
this.event("beforeFinish");
this.finish();
this.event("afterFinish");
},setup:function(){
},finish:function(){
},update:function(_789){
},event:function(_790){
if(this.options[_790+"Internal"]){
this.options[_790+"Internal"](this);
}
if(this.options[_790]){
this.options[_790](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_791,_792){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_791,_792);
}
this.__init__(_791,_792);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__init__:function(_793,_794){
this.effects=_793||[];
this.start(_794);
},update:function(_795){
MochiKit.Base.map(function(_796){
_796.render(_795);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_797){
_797.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_798,_799){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_798,_799);
}
this.__init__(_798,_799);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__init__:function(_800,_801){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_800);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_801=b.update({from:s.getOpacity(this.element)||0,to:1},_801||{});
this.start(_801);
},update:function(_802){
MochiKit.Style.setOpacity(this.element,_802);
}});
MochiKit.Visual.Move=function(_803,_804){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_803,_804);
}
this.__init__(_803,_804);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__init__:function(_805,_806){
this.element=MochiKit.DOM.getElement(_805);
_806=MochiKit.Base.update({x:0,y:0,mode:"relative"},_806||{});
this.start(_806);
},setup:function(){
MochiKit.DOM.makePositioned(this.element);
var s=this.element.style;
var _807=s.visibility;
var _808=s.display;
if(_808=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_808=="none"){
s.visibility=_807;
s.display=_808;
}
},update:function(_809){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_809+this.originalLeft)+"px",top:Math.round(this.options.y*_809+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_810,_811,_812){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_810,_811,_812);
}
this.__init__(_810,_811,_812);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__init__:function(_813,_814,_815){
this.element=MochiKit.DOM.getElement(_813);
_815=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_814},_815||{});
this.start(_815);
},setup:function(){
this.restoreAfterFinish=this.options.restoreAfterFinish||false;
this.elementPositioning=MochiKit.Style.getStyle(this.element,"position");
var ma=MochiKit.Base.map;
var b=MochiKit.Base.bind;
this.originalStyle={};
ma(b(function(k){
this.originalStyle[k]=this.element.style[k];
},this),["top","left","width","height","fontSize"]);
this.originalTop=this.element.offsetTop;
this.originalLeft=this.element.offsetLeft;
var _816=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_817){
if(_816.indexOf(_817)>0){
this.fontSize=parseFloat(_816);
this.fontSizeType=_817;
}
},this),["em","px","%"]);
this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;
if(/^content/.test(this.options.scaleMode)){
this.dims=[this.element.scrollHeight,this.element.scrollWidth];
}else{
if(this.options.scaleMode=="box"){
this.dims=[this.element.offsetHeight,this.element.offsetWidth];
}else{
this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];
}
}
},update:function(_818){
var _819=(this.options.scaleFrom/100)+(this.factor*_818);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_819+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_819,this.dims[1]*_819);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_820,_821){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_821)+"px";
}
if(this.options.scaleY){
d.height=r(_820)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_820-this.dims[0])/2;
var _823=(_821-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_823+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_823+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_824,_825){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_824,_825);
}
this.__init__(_824,_825);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__init__:function(_826,_827){
this.element=MochiKit.DOM.getElement(_826);
_827=MochiKit.Base.update({startcolor:"#ffff99"},_827||{});
this.start(_827);
},setup:function(){
var b=MochiKit.Base;
var s=MochiKit.Style;
if(s.getStyle(this.element,"display")=="none"){
this.cancel();
return;
}
this.oldStyle={backgroundImage:s.getStyle(this.element,"background-image")};
s.setStyle(this.element,{backgroundImage:"none"});
if(!this.options.endcolor){
this.options.endcolor=MochiKit.Color.Color.fromBackground(this.element).toHexString();
}
if(b.isUndefinedOrNull(this.options.restorecolor)){
this.options.restorecolor=s.getStyle(this.element,"background-color");
}
this._base=b.map(b.bind(function(i){
return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this._delta=b.map(b.bind(function(i){
return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i];
},this),[0,1,2]);
},update:function(_828){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_828));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_829,_830){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_829,_830);
}
this.__init__(_829,_830);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__init__:function(_831,_832){
this.element=MochiKit.DOM.getElement(_831);
this.start(_832||{});
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _833=p.cumulativeOffset(this.element);
if(this.options.offset){
_833.y+=this.options.offset;
}
var max;
if(window.innerHeight){
max=window.innerHeight-window.height;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
max=document.documentElement.clientHeight-document.body.scrollHeight;
}else{
if(document.body){
max=document.body.clientHeight-document.body.scrollHeight;
}
}
}
this.scrollStart=p.windowOffset.y;
this.delta=(_833.y>max?max:_833.y)-this.scrollStart;
},update:function(_834){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_834*this.delta));
}});
MochiKit.Visual.fade=function(_835,_836){
var s=MochiKit.Style;
var _837=MochiKit.DOM.getElement(_835).style.opacity||"";
_836=MochiKit.Base.update({from:s.getOpacity(_835)||1,to:0,afterFinishInternal:function(_838){
if(_838.options.to!==0){
return;
}
s.hideElement(_838.element);
s.setStyle(_838.element,{opacity:_837});
}},_836||{});
return new MochiKit.Visual.Opacity(_835,_836);
};
MochiKit.Visual.appear=function(_839,_840){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_840=MochiKit.Base.update({from:(s.getStyle(_839,"display")=="none"?0:s.getOpacity(_839)||0),to:1,afterFinishInternal:function(_841){
v.forceRerendering(_841.element);
},beforeSetupInternal:function(_842){
s.setOpacity(_842.element,_842.options.from);
s.showElement(_842.element);
}},_840||{});
return new v.Opacity(_839,_840);
};
MochiKit.Visual.puff=function(_843,_844){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_843=MochiKit.DOM.getElement(_843);
var _845={opacity:_843.style.opacity||"",position:s.getStyle(_843,"position"),top:_843.style.top,left:_843.style.left,width:_843.style.width,height:_843.style.height};
_844=MochiKit.Base.update({beforeSetupInternal:function(_846){
MochiKit.Position.absolutize(_846.effects[0].element);
},afterFinishInternal:function(_847){
s.hideElement(_847.effects[0].element);
s.setStyle(_847.effects[0].element,_845);
}},_844||{});
return new v.Parallel([new v.Scale(_843,200,{sync:true,scaleFromCenter:true,scaleContent:true,restoreAfterFinish:true}),new v.Opacity(_843,{sync:true,to:0})],_844);
};
MochiKit.Visual.blindUp=function(_848,_849){
var d=MochiKit.DOM;
_848=d.getElement(_848);
var _850=d.makeClipping(_848);
_849=MochiKit.Base.update({scaleContent:false,scaleX:false,restoreAfterFinish:true,afterFinishInternal:function(_851){
MochiKit.Style.hideElement(_851.element);
d.undoClipping(_851.element,_850);
}},_849||{});
return new MochiKit.Visual.Scale(_848,0,_849);
};
MochiKit.Visual.blindDown=function(_852,_853){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_852=d.getElement(_852);
var _854=s.getElementDimensions(_852);
var _855;
_853=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_854.h,originalWidth:_854.w},restoreAfterFinish:true,afterSetupInternal:function(_856){
_855=d.makeClipping(_856.element);
s.setStyle(_856.element,{height:"0px"});
s.showElement(_856.element);
},afterFinishInternal:function(_857){
d.undoClipping(_857.element,_855);
}},_853||{});
return new MochiKit.Visual.Scale(_852,100,_853);
};
MochiKit.Visual.switchOff=function(_858,_859){
var d=MochiKit.DOM;
_858=d.getElement(_858);
var _860=_858.style.opacity||"";
var _861;
var _859=MochiKit.Base.update({duration:0.3,scaleFromCenter:true,scaleX:false,scaleContent:false,restoreAfterFinish:true,beforeSetupInternal:function(_862){
d.makePositioned(_862.element);
_861=d.makeClipping(_862.element);
},afterFinishInternal:function(_863){
MochiKit.Style.hideElement(_863.element);
d.undoClipping(_863.element,_861);
d.undoPositioned(_863.element);
MochiKit.Style.setStyle(_863.element,{opacity:_860});
}},_859||{});
var v=MochiKit.Visual;
return new v.appear(_858,{duration:0.4,from:0,transition:v.Transitions.flicker,afterFinishInternal:function(_864){
new v.Scale(_864.element,1,_859);
}});
};
MochiKit.Visual.dropOut=function(_865,_866){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_865=d.getElement(_865);
var _867={top:s.getStyle(_865,"top"),left:s.getStyle(_865,"left"),opacity:_865.style.opacity||""};
_866=MochiKit.Base.update({duration:0.5,beforeSetupInternal:function(_868){
d.makePositioned(_868.effects[0].element);
},afterFinishInternal:function(_869){
s.hideElement(_869.effects[0].element);
d.undoPositioned(_869.effects[0].element);
s.setStyle(_869.effects[0].element,_867);
}},_866||{});
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_865,{x:0,y:100,sync:true}),new v.Opacity(_865,{sync:true,to:0})],_866);
};
MochiKit.Visual.shake=function(_870,_871){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_870=d.getElement(_870);
_871=MochiKit.Base.update({x:-20,y:0,duration:0.05,afterFinishInternal:function(_872){
d.undoPositioned(_872.element);
s.setStyle(_872.element,oldStyle);
}},_871||{});
var _873={top:s.getStyle(_870,"top"),left:s.getStyle(_870,"left")};
return new v.Move(_870,{x:20,y:0,duration:0.05,afterFinishInternal:function(_874){
new v.Move(_874.element,{x:-40,y:0,duration:0.1,afterFinishInternal:function(_874){
new v.Move(_874.element,{x:40,y:0,duration:0.1,afterFinishInternal:function(_874){
new v.Move(_874.element,{x:-40,y:0,duration:0.1,afterFinishInternal:function(_874){
new v.Move(_874.element,{x:40,y:0,duration:0.1,afterFinishInternal:function(_874){
new v.Move(_874.element,_871);
}});
}});
}});
}});
}});
};
MochiKit.Visual.slideDown=function(_875,_876){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_875=d.getElement(_875);
if(!_875.firstChild){
throw "MochiKit.Visual.slideDown must be used on a element with a child";
}
d.removeEmptyTextNodes(_875);
var _877=s.getStyle(_875.firstChild,"bottom")||0;
var _878=s.getElementDimensions(_875);
var _879;
_876=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_878.h,originalWidth:_878.w},restoreAfterFinish:true,afterSetupInternal:function(_880){
d.makePositioned(_880.element);
d.makePositioned(_880.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_880.element,{top:""});
}
_879=d.makeClipping(_880.element);
s.setStyle(_880.element,{height:"0px"});
s.showElement(_880.element);
},afterUpdateInternal:function(_881){
s.setStyle(_881.element.firstChild,{bottom:(_881.dims[0]-_881.element.clientHeight)+"px"});
},afterFinishInternal:function(_882){
d.undoClipping(_882.element,_879);
if(/MSIE/.test(navigator.userAgent)){
d.undoPositioned(_882.element);
d.undoPositioned(_882.element.firstChild);
}else{
d.undoPositioned(_882.element.firstChild);
d.undoPositioned(_882.element);
}
s.setStyle(_882.element.firstChild,{bottom:_877});
}},_876||{});
return new MochiKit.Visual.Scale(_875,100,_876);
};
MochiKit.Visual.slideUp=function(_883,_884){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_883=d.getElement(_883);
if(!_883.firstChild){
throw "MochiKit.Visual.slideUp must be used on a element with a child";
}
d.removeEmptyTextNodes(_883);
var _885=s.getStyle(_883.firstChild,"bottom");
var _886;
_884=b.update({scaleContent:false,scaleX:false,scaleMode:"box",scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_887){
d.makePositioned(_887.element);
d.makePositioned(_887.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_887.element,{top:""});
}
_886=d.makeClipping(_887.element);
s.showElement(_887.element);
},afterUpdateInternal:function(_888){
s.setStyle(_888.element.firstChild,{bottom:(_888.dims[0]-_888.element.clientHeight)+"px"});
},afterFinishInternal:function(_889){
s.hideElement(_889.element);
d.undoClipping(_889.element,_886);
d.undoPositioned(_889.element.firstChild);
d.undoPositioned(_889.element);
s.setStyle(_889.element.firstChild,{bottom:_885});
}},_884||{});
return new MochiKit.Visual.Scale(_883,0,_884);
};
MochiKit.Visual.squish=function(_890,_891){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var _892;
_891=b.update({restoreAfterFinish:true,beforeSetupInternal:function(_893){
_892=d.makeClipping(_893.element);
},afterFinishInternal:function(_894){
MochiKit.Style.hideElement(_894.element);
d.undoClipping(_894.element,_892);
}},_891||{});
return new MochiKit.Visual.Scale(_890,/Opera/.test(navigator.userAgent)?1:0,_891);
};
MochiKit.Visual.grow=function(_895,_896){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_895=d.getElement(_895);
_896=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full},_896||{});
var _897={top:_895.style.top,left:_895.style.left,height:_895.style.height,width:_895.style.width,opacity:_895.style.opacity||""};
var dims=s.getElementDimensions(_895);
var _899,initialMoveY;
var _900,moveY;
switch(_896.direction){
case "top-left":
_899=initialMoveY=_900=moveY=0;
break;
case "top-right":
_899=dims.w;
initialMoveY=moveY=0;
_900=-dims.w;
break;
case "bottom-left":
_899=_900=0;
initialMoveY=dims.h;
moveY=-dims.h;
break;
case "bottom-right":
_899=dims.w;
initialMoveY=dims.h;
_900=-dims.w;
moveY=-dims.h;
break;
case "center":
_899=dims.w/2;
initialMoveY=dims.h/2;
_900=-dims.w/2;
moveY=-dims.h/2;
break;
}
var _901=MochiKit.Base.update({beforeSetupInternal:function(_902){
s.setStyle(_902.effects[0].element,{height:"0px"});
s.showElement(_902.effects[0].element);
},afterFinishInternal:function(_903){
d.undoClipping(_903.effects[0].element);
d.undoPositioned(_903.effects[0].element);
s.setStyle(_903.effects[0].element,_897);
}},_896||{});
return new v.Move(_895,{x:_899,y:initialMoveY,duration:0.01,beforeSetupInternal:function(_904){
s.hideElement(_904.element);
d.makeClipping(_904.element);
d.makePositioned(_904.element);
},afterFinishInternal:function(_905){
new v.Parallel([new v.Opacity(_905.element,{sync:true,to:1,from:0,transition:_896.opacityTransition}),new v.Move(_905.element,{x:_900,y:moveY,sync:true,transition:_896.moveTransition}),new v.Scale(_905.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_896.scaleTransition,restoreAfterFinish:true})],_901);
}});
};
MochiKit.Visual.shrink=function(_906,_907){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_906=d.getElement(_906);
_907=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none},_907||{});
var _908={top:_906.style.top,left:_906.style.left,height:_906.style.height,width:_906.style.width,opacity:_906.style.opacity||""};
var dims=s.getElementDimensions(_906);
var _909,moveY;
switch(_907.direction){
case "top-left":
_909=moveY=0;
break;
case "top-right":
_909=dims.w;
moveY=0;
break;
case "bottom-left":
_909=0;
moveY=dims.h;
break;
case "bottom-right":
_909=dims.w;
moveY=dims.h;
break;
case "center":
_909=dims.w/2;
moveY=dims.h/2;
break;
}
var _910;
var _911=MochiKit.Base.update({beforeStartInternal:function(_912){
_910=d.makePositioned(_912.effects[0].element);
d.makeClipping(_912.effects[0].element);
},afterFinishInternal:function(_913){
s.hideElement(_913.effects[0].element);
d.undoClipping(_913.effects[0].element,_910);
d.undoPositioned(_913.effects[0].element);
s.setStyle(_913.effects[0].element,_908);
}},_907||{});
return new v.Parallel([new v.Opacity(_906,{sync:true,to:0,from:1,transition:_907.opacityTransition}),new v.Scale(_906,/Opera/.test(navigator.userAgent)?1:0,{sync:true,transition:_907.scaleTransition,restoreAfterFinish:true}),new v.Move(_906,{x:_909,y:moveY,sync:true,transition:_907.moveTransition})],_911);
};
MochiKit.Visual.pulsate=function(_914,_915){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _916=d.getElement(_914).style.opacity||"";
_915=b.update({duration:3,from:0,afterFinishInternal:function(_917){
MochiKit.Style.setStyle(_917.element,{opacity:_916});
}},_915||{});
var _918=_915.transition||v.Transitions.sinoidal;
var _919=b.bind(function(pos){
return _918(1-v.Transitions.pulse(pos));
},_918);
b.bind(_919,_918);
return new v.Opacity(_914,b.update({transition:_919},_915));
};
MochiKit.Visual.fold=function(_920,_921){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_920=d.getElement(_920);
var _922={top:_920.style.top,left:_920.style.left,width:_920.style.width,height:_920.style.height};
var _923=d.makeClipping(_920);
_921=MochiKit.Base.update({scaleContent:false,scaleX:false,afterFinishInternal:function(_924){
new v.Scale(_920,1,{scaleContent:false,scaleY:false,afterFinishInternal:function(_924){
s.hideElement(_924.element);
d.undoClipping(_924.element,_923);
s.setStyle(_924.element,_922);
}});
}},_921||{});
return new v.Scale(_920,5,_921);
};
MochiKit.Visual.Color=MochiKit.Color.Color;
MochiKit.Visual.getElementsComputedStyle=MochiKit.DOM.computedStyle;
MochiKit.Visual.__new__=function(){
var m=MochiKit.Base;
m.nameFunctions(this);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
};
MochiKit.Visual.EXPORT=["roundElement","roundClass","tagifyText","multiple","toggle","Parallel","Opacity","Move","Scale","Highlight","ScrollTo","fade","appear","puff","blindUp","blindDown","switchOff","dropOut","shake","slideDown","slideUp","squish","grow","shrink","pulsate","fold"];
MochiKit.Visual.EXPORT_OK=["Base","PAIRS"];
MochiKit.Visual.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Visual);
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.MochiKit)=="undefined"){
MochiKit.MochiKit={};
}
MochiKit.MochiKit.NAME="MochiKit.MochiKit";
MochiKit.MochiKit.VERSION="1.4";
MochiKit.MochiKit.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.MochiKit.toString=function(){
return this.__repr__();
};
MochiKit.MochiKit.SUBMODULES=["Base","Iter","Logging","DateTime","Format","Async","DOM","Selector","Style","LoggingPane","Color","Signal","Position","Visual"];
if(typeof (JSAN)!="undefined"||typeof (dojo)!="undefined"){
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.MochiKit");
dojo.require("MochiKit.*");
}
if(typeof (JSAN)!="undefined"){
(function(lst){
for(var i=0;i<lst.length;i++){
JSAN.use("MochiKit."+lst[i],[]);
}
})(MochiKit.MochiKit.SUBMODULES);
}
(function(){
var _925=MochiKit.Base.extend;
var self=MochiKit.MochiKit;
var _926=self.SUBMODULES;
var _927=[];
var _928=[];
var _929={};
var i,k,m,all;
for(i=0;i<_926.length;i++){
m=MochiKit[_926[i]];
_925(_927,m.EXPORT);
_925(_928,m.EXPORT_OK);
for(k in m.EXPORT_TAGS){
_929[k]=_925(_929[k],m.EXPORT_TAGS[k]);
}
all=m.EXPORT_TAGS[":all"];
if(!all){
all=_925(null,m.EXPORT,m.EXPORT_OK);
}
var j;
for(j=0;j<all.length;j++){
k=all[j];
self[k]=m[k];
}
}
self.EXPORT=_927;
self.EXPORT_OK=_928;
self.EXPORT_TAGS=_929;
}());
}else{
if(typeof (MochiKit.__compat__)=="undefined"){
MochiKit.__compat__=true;
}
(function(){
if(typeof (document)=="undefined"){
return;
}
var _930=document.getElementsByTagName("script");
var _931="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _932=null;
var _933={};
var i;
for(i=0;i<_930.length;i++){
var src=_930[i].getAttribute("src");
if(!src){
continue;
}
_933[src]=true;
if(src.match(/MochiKit.js$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_932=_930[i];
}
}
if(base===null){
return;
}
var _934=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_934.length;i++){
if(MochiKit[_934[i]]){
continue;
}
var uri=base+_934[i]+".js";
if(uri in _933){
continue;
}
if(document.documentElement&&document.documentElement.namespaceURI==_931){
var s=document.createElementNS(_931,"script");
s.setAttribute("id","MochiKit_"+base+_934[i]);
s.setAttribute("src",uri);
s.setAttribute("type","application/x-javascript");
_932.parentNode.appendChild(s);
}else{
document.write("<script src=\""+uri+"\" type=\"text/javascript\"></script>");
}
}
})();
}



/***
MochiKit.DragAndDrop 1.4

See <http://mochikit.com/> for documentation, downloads, license, etc.

Copyright (c) 2005 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
    Mochi-ized By Thomas Herve (_firstname_@nimail.org)

***/

if (typeof(dojo) != 'undefined') {
    dojo.provide('MochiKit.DragAndDrop');
    dojo.require('MochiKit.Base');
    dojo.require('MochiKit.DOM');
    dojo.require('MochiKit.Iter');
    dojo.require('MochiKit.Visual');
    dojo.require('MochiKit.Signal');
}

if (typeof(JSAN) != 'undefined') {
    JSAN.use("MochiKit.Base", []);
    JSAN.use("MochiKit.DOM", []);
    JSAN.use("MochiKit.Visual", []);
    JSAN.use("MochiKit.Iter", []);
    JSAN.use("MochiKit.Signal", []);
}

try {
    if (typeof(MochiKit.Base) == 'undefined' ||
        typeof(MochiKit.DOM) == 'undefined' ||
        typeof(MochiKit.Visual) == 'undefined' ||
        typeof(MochiKit.Signal) == 'undefined' ||
        typeof(MochiKit.Iter) == 'undefined') {
        throw "";
    }
} catch (e) {
    throw "MochiKit.DragAndDrop depends on MochiKit.Base, MochiKit.DOM, MochiKit.Visual, MochiKit.Signal and MochiKit.Iter!";
}

if (typeof(MochiKit.DragAndDrop) == 'undefined') {
    MochiKit.DragAndDrop = {};
}

MochiKit.DragAndDrop.NAME = 'MochiKit.DragAndDrop';
MochiKit.DragAndDrop.VERSION = '1.4';

MochiKit.DragAndDrop.__repr__ = function () {
    return '[' + this.NAME + ' ' + this.VERSION + ']';
};

MochiKit.DragAndDrop.toString = function () {
    return this.__repr__();
};

MochiKit.DragAndDrop.EXPORT = [
    "Droppable",
    "Draggable"
];

MochiKit.DragAndDrop.EXPORT_OK = [
    "Droppables",
    "Draggables"
];

MochiKit.DragAndDrop.Droppables = {
    /***

    Manage all droppables. Shouldn't be used, use the Droppable object instead.

    ***/
    drops: [],

    remove: function (element) {
        this.drops = MochiKit.Base.filter(function (d) {
            return d.element != MochiKit.DOM.getElement(element)
        }, this.drops);
    },

    register: function (drop) {
        this.drops.push(drop);
    },

    unregister: function (drop) {
        this.drops = MochiKit.Base.filter(function (d) {
            return d != drop;
        }, this.drops);
    },

    prepare: function (element) {
        MochiKit.Base.map(function (drop) {
            if (drop.isAccepted(element)) {
                if (drop.options.activeclass) {
                    MochiKit.DOM.addElementClass(drop.element,
                                                 drop.options.activeclass);
                }
                drop.options.onactive(drop.element, element);
            }
        }, this.drops);
    },

    findDeepestChild: function (drops) {
        deepest = drops[0];

        for (i = 1; i < drops.length; ++i) {
            if (MochiKit.DOM.isParent(drops[i].element, deepest.element)) {
                deepest = drops[i];
            }
        }
        return deepest;
    },

    show: function (point, element) {
        if (!this.drops.length) {
            return;
        }
        var affected = [];

        if (this.last_active) {
            this.last_active.deactivate();
        }
        MochiKit.Iter.forEach(this.drops, function (drop) {
            if (drop.isAffected(point, element)) {
                affected.push(drop);
            }
        });
        if (affected.length > 0) {
            drop = this.findDeepestChild(affected);
            MochiKit.Position.within(drop.element, point.page.x, point.page.y);
            drop.options.onhover(element, drop.element,
                MochiKit.Position.overlap(drop.options.overlap, drop.element));
            drop.activate();
        }
    },

    fire: function (event, element) {
        if (!this.last_active) {
            return;
        }
        MochiKit.Position.prepare();

        if (this.last_active.isAffected(event.mouse(), element)) {
            this.last_active.options.ondrop(element,
               this.last_active.element, event);
        }
    },

    reset: function (element) {
        MochiKit.Base.map(function (drop) {
            if (drop.options.activeclass) {
                MochiKit.DOM.removeElementClass(drop.element,
                                                drop.options.activeclass);
            }
            drop.options.ondesactive(drop.element, element);
        }, this.drops);
        if (this.last_active) {
            this.last_active.deactivate();
        }
    }
};

/** @id MochiKit.DragAndDrop.Droppable */
MochiKit.DragAndDrop.Droppable = function (element, options) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(element, options);
    }
    this.__init__(element, options);
};

MochiKit.DragAndDrop.Droppable.prototype = {
    /***

    A droppable object. Simple use is to create giving an element:

        new MochiKit.DragAndDrop.Droppable('myelement');

    Generally you'll want to define the 'ondrop' function and maybe the
    'accept' option to filter draggables.

    ***/
    __class__: MochiKit.DragAndDrop.Droppable,

    __init__: function (element, /* optional */options) {
        var d = MochiKit.DOM;
        var b = MochiKit.Base;
        this.element = d.getElement(element);
        this.options = b.update({

            /** @id MochiKit.DragAndDrop.greedy */
            greedy: true,

            /** @id MochiKit.DragAndDrop.hoverclass */
            hoverclass: null,

            /** @id MochiKit.DragAndDrop.activeclass */
            activeclass: null,

            /** @id MochiKit.DragAndDrop.hoverfunc */
            hoverfunc: b.noop,

            /** @id MochiKit.DragAndDrop.accept */
            accept: null,

            /** @id MochiKit.DragAndDrop.onactive */
            onactive: b.noop,

            /** @id MochiKit.DragAndDrop.ondesactive */
            ondesactive: b.noop,

            /** @id MochiKit.DragAndDrop.onhover */
            onhover: b.noop,

            /** @id MochiKit.DragAndDrop.ondrop */
            ondrop: b.noop,

            /** @id MochiKit.DragAndDrop.containment */
            containment: [],
            tree: false
        }, options || {});

        // cache containers
        this.options._containers = [];
        b.map(MochiKit.Base.bind(function (c) {
            this.options._containers.push(d.getElement(c));
        }, this), this.options.containment);

        d.makePositioned(this.element); // fix IE

        MochiKit.DragAndDrop.Droppables.register(this);
    },

    /** @id MochiKit.DragAndDrop.isContained */
    isContained: function (element) {
        if (this.options._containers.length) {
            var containmentNode;
            if (this.options.tree) {
                containmentNode = element.treeNode;
            } else {
                containmentNode = element.parentNode;
            }
            return MochiKit.Iter.some(this.options._containers, function (c) {
                return containmentNode == c;
            });
        } else {
            return true;
        }
    },

    /** @id MochiKit.DragAndDrop.isAccepted */
    isAccepted: function (element) {
        return ((!this.options.accept) || MochiKit.Iter.some(
          this.options.accept, function (c) {
            return MochiKit.DOM.hasElementClass(element, c);
        }));
    },

    /** @id MochiKit.DragAndDrop.isAffected */
    isAffected: function (point, element) {
        return ((this.element != element) &&
                this.isContained(element) &&
                this.isAccepted(element) &&
                MochiKit.Position.within(this.element, point.page.x,
                                                       point.page.y));
    },

    /** @id MochiKit.DragAndDrop.deactivate */
    deactivate: function () {
        /***

        A droppable is deactivate when a draggable has been over it and left.

        ***/
        if (this.options.hoverclass) {
            MochiKit.DOM.removeElementClass(this.element,
                                            this.options.hoverclass);
        }
        this.options.hoverfunc(this.element, false);
        MochiKit.DragAndDrop.Droppables.last_active = null;
    },

    /** @id MochiKit.DragAndDrop.activate */
    activate: function () {
        /***

        A droppable is active when a draggable is over it.

        ***/
        if (this.options.hoverclass) {
            MochiKit.DOM.addElementClass(this.element, this.options.hoverclass);
        }
        this.options.hoverfunc(this.element, true);
        MochiKit.DragAndDrop.Droppables.last_active = this;
    },

    /** @id MochiKit.DragAndDrop.destroy */
    destroy: function () {
        /***

        Delete this droppable.

        ***/
        MochiKit.DragAndDrop.Droppables.unregister(this);
    },

    /** @id MochiKit.DragAndDrop.repr */
    repr: function () {
        return '[' + this.__class__.NAME + ", options:" + MochiKit.Base.repr(this.options) + "]";
    }
};

MochiKit.DragAndDrop.Draggables = {
    /***

    Manage draggables elements. Not intended to direct use.

    ***/
    drags: [],

    register: function (draggable) {
        if (this.drags.length === 0) {
            var conn = MochiKit.Signal.connect;
            this.eventMouseUp = conn(document, 'onmouseup', this, this.endDrag);
            this.eventMouseMove = conn(document, 'onmousemove', this,
                                       this.updateDrag);
            this.eventKeypress = conn(document, 'onkeypress', this,
                                      this.keyPress);
        }
        this.drags.push(draggable);
    },

    unregister: function (draggable) {
        this.drags = MochiKit.Base.filter(function (d) {
            return d != draggable;
        }, this.drags);
        if (this.drags.length === 0) {
            var disc = MochiKit.Signal.disconnect
            disc(this.eventMouseUp);
            disc(this.eventMouseMove);
            disc(this.eventKeypress);
        }
    },

    activate: function (draggable) {
        // allows keypress events if window is not currently focused
        // fails for Safari
        window.focus();
        this.activeDraggable = draggable;
    },

    deactivate: function () {
        this.activeDraggable = null;
    },

    updateDrag: function (event) {
        if (!this.activeDraggable) {
            return;
        }
        var pointer = event.mouse();
        // Mozilla-based browsers fire successive mousemove events with
        // the same coordinates, prevent needless redrawing (moz bug?)
        if (this._lastPointer && (MochiKit.Base.repr(this._lastPointer.page) ==
                                  MochiKit.Base.repr(pointer.page))) {
            return;
        }
        this._lastPointer = pointer;
        this.activeDraggable.updateDrag(event, pointer);
    },

    endDrag: function (event) {
        if (!this.activeDraggable) {
            return;
        }
        this._lastPointer = null;
        this.activeDraggable.endDrag(event);
        this.activeDraggable = null;
    },

    keyPress: function (event) {
        if (this.activeDraggable) {
            this.activeDraggable.keyPress(event);
        }
    },

    notify: function (eventName, draggable, event) {
        MochiKit.Signal.signal(this, eventName, draggable, event);
    }
};

/** @id MochiKit.DragAndDrop.Draggable */
MochiKit.DragAndDrop.Draggable = function (element, options) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(element, options);
    }
    this.__init__(element, options);
};

MochiKit.DragAndDrop.Draggable.prototype = {
    /***

    A draggable object. Simple instantiate :

        new MochiKit.DragAndDrop.Draggable('myelement');

    ***/
    __class__ : MochiKit.DragAndDrop.Draggable,

    __init__: function (element, /* optional */options) {
        var v = MochiKit.Visual;
        var b = MochiKit.Base;
        options = b.update({

            /** @id MochiKit.DragAndDrop.handle */
            handle: false,

            /** @id MochiKit.DragAndDrop.starteffect */
            starteffect: function (innerelement) {
                this._savedOpacity = MochiKit.Style.getOpacity(innerelement) || 1.0;
                new v.Opacity(innerelement, {duration:0.2, from:this._savedOpacity, to:0.7});
            },
            /** @id MochiKit.DragAndDrop.reverteffect */
            reverteffect: function (innerelement, top_offset, left_offset) {
                var dur = Math.sqrt(Math.abs(top_offset^2) +
                          Math.abs(left_offset^2))*0.02;
                return new v.Move(innerelement,
                            {x: -left_offset, y: -top_offset, duration: dur});
            },

            /** @id MochiKit.DragAndDrop.endeffect */
            endeffect: function (innerelement) {
                new v.Opacity(innerelement, {duration:0.2, from:0.7, to:this._savedOpacity});
            },

            /** @id MochiKit.DragAndDrop.onchange */
            onchange: b.noop,

            /** @id MochiKit.DragAndDrop.zindex */
            zindex: 1000,

            /** @id MochiKit.DragAndDrop.revert */
            revert: false,

            /** @id MochiKit.DragAndDrop.scroll */
            scroll: false,

            /** @id MochiKit.DragAndDrop.scrollSensitivity */
            scrollSensitivity: 20,

            /** @id MochiKit.DragAndDrop.scrollSpeed */
            scrollSpeed: 15,
            // false, or xy or [x, y] or function (x, y){return [x, y];}

            /** @id MochiKit.DragAndDrop.snap */
            snap: false
        }, options || {});

        var d = MochiKit.DOM;
        this.element = d.getElement(element);

        if (options.handle && (typeof(options.handle) == 'string')) {
            this.handle = d.getFirstElementByTagAndClassName(null,
                                       options.handle, this.element);
        }
        if (!this.handle) {
            this.handle = d.getElement(options.handle);
        }
        if (!this.handle) {
            this.handle = this.element;
        }

        if (options.scroll && !options.scroll.scrollTo && !options.scroll.outerHTML) {
            options.scroll = d.getElement(options.scroll);
            this._isScrollChild = MochiKit.DOM.isChildNode(this.element, options.scroll);
        }

        d.makePositioned(this.element);  // fix IE

        this.delta = this.currentDelta();
        this.options = options;
        this.dragging = false;

        this.eventMouseDown = MochiKit.Signal.connect(this.handle,
                              'onmousedown', this, this.initDrag);
        MochiKit.DragAndDrop.Draggables.register(this);
    },

    /** @id MochiKit.DragAndDrop.destroy */
    destroy: function () {
        MochiKit.Signal.disconnect(this.eventMouseDown);
        MochiKit.DragAndDrop.Draggables.unregister(this);
    },

    /** @id MochiKit.DragAndDrop.currentDelta */
    currentDelta: function () {
        var s = MochiKit.Style.getStyle;
        return [
          parseInt(s(this.element, 'left') || '0'),
          parseInt(s(this.element, 'top') || '0')];
    },

    /** @id MochiKit.DragAndDrop.initDrag */
    initDrag: function (event) {
        if (!event.mouse().button.left) {
            return;
        }
        // abort on form elements, fixes a Firefox issue
        var src = event.target();
        var tagName = (src.tagName || '').toUpperCase();
        if (tagName === 'INPUT' || tagName === 'SELECT' ||
            tagName === 'OPTION' || tagName === 'BUTTON' ||
            tagName === 'TEXTAREA') {
            return;
        }

        if (this._revert) {
            this._revert.cancel();
            this._revert = null;
        }

        var pointer = event.mouse();
        var pos = MochiKit.Position.cumulativeOffset(this.element);
        this.offset = [pointer.page.x - pos.x, pointer.page.y - pos.y]

        MochiKit.DragAndDrop.Draggables.activate(this);
        event.stop();
    },

    /** @id MochiKit.DragAndDrop.startDrag */
    startDrag: function (event) {
        this.dragging = true;
        if (this.options.selectclass) {
            MochiKit.DOM.addElementClass(this.element,
                                         this.options.selectclass);
        }
        if (this.options.zindex) {
            this.originalZ = parseInt(MochiKit.Style.getStyle(this.element,
                                      'z-index') || '0');
            this.element.style.zIndex = this.options.zindex;
        }

        if (this.options.ghosting) {
            this._clone = this.element.cloneNode(true);
            this.ghostPosition = MochiKit.Position.absolutize(this.element);
            this.element.parentNode.insertBefore(this._clone, this.element);
        }

        if (this.options.scroll) {
            if (this.options.scroll == window) {
                var where = this._getWindowScroll(this.options.scroll);
                this.originalScrollLeft = where.left;
                this.originalScrollTop = where.top;
            } else {
                this.originalScrollLeft = this.options.scroll.scrollLeft;
                this.originalScrollTop = this.options.scroll.scrollTop;
            }
        }

        MochiKit.DragAndDrop.Droppables.prepare(this.element);
        MochiKit.DragAndDrop.Draggables.notify('start', this, event);
        if (this.options.starteffect) {
            this.options.starteffect(this.element);
        }
    },

    /** @id MochiKit.DragAndDrop.updateDrag */
    updateDrag: function (event, pointer) {
        if (!this.dragging) {
            this.startDrag(event);
        }
        MochiKit.Position.prepare();
        MochiKit.DragAndDrop.Droppables.show(pointer, this.element);
        MochiKit.DragAndDrop.Draggables.notify('drag', this, event);
        this.draw(pointer);
        this.options.onchange(this);

        if (this.options.scroll) {
            this.stopScrolling();
            var p, q;
            if (this.options.scroll == window) {
                var s = this._getWindowScroll(this.options.scroll);
                p = new MochiKit.Style.Coordinates(s.left, s.top);
                q = new MochiKit.Style.Coordinates(s.left + s.width,
                                                   s.top + s.height);
            } else {
                p = MochiKit.Position.page(this.options.scroll);
                p.x += this.options.scroll.scrollLeft;
                p.y += this.options.scroll.scrollTop;
                p.x += (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
                p.y += (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
                q = new MochiKit.Style.Coordinates(p.x + this.options.scroll.offsetWidth,
                                                   p.y + this.options.scroll.offsetHeight);
            }
            var speed = [0, 0];
            if (pointer.page.x > (q.x - this.options.scrollSensitivity)) {
                speed[0] = pointer.page.x - (q.x - this.options.scrollSensitivity);
            } else if (pointer.page.x < (p.x + this.options.scrollSensitivity)) {
                speed[0] = pointer.page.x - (p.x + this.options.scrollSensitivity);
            }
            if (pointer.page.y > (q.y - this.options.scrollSensitivity)) {
                speed[1] = pointer.page.y - (q.y - this.options.scrollSensitivity);
            } else if (pointer.page.y < (p.y + this.options.scrollSensitivity)) {
                speed[1] = pointer.page.y - (p.y + this.options.scrollSensitivity);
            }
            this.startScrolling(speed);
        }

        // fix AppleWebKit rendering
        if (/AppleWebKit'/.test(navigator.appVersion)) {
            window.scrollBy(0, 0);
        }
        event.stop();
    },

    /** @id MochiKit.DragAndDrop.finishDrag */
    finishDrag: function (event, success) {
        var dr = MochiKit.DragAndDrop;
        this.dragging = false;
        if (this.options.selectclass) {
            MochiKit.DOM.removeElementClass(this.element,
                                            this.options.selectclass);
        }

        if (this.options.ghosting) {
            // XXX: from a user point of view, it would be better to remove
            // the node only *after* the MochiKit.Visual.Move end when used
            // with revert.
            MochiKit.Position.relativize(this.element, this.ghostPosition);
            MochiKit.DOM.removeElement(this._clone);
            this._clone = null;
        }

        if (success) {
            dr.Droppables.fire(event, this.element);
        }
        dr.Draggables.notify('end', this, event);

        var revert = this.options.revert;
        if (revert && typeof(revert) == 'function') {
            revert = revert(this.element);
        }

        var d = this.currentDelta();
        if (revert && this.options.reverteffect) {
            this._revert = this.options.reverteffect(this.element,
                d[1] - this.delta[1], d[0] - this.delta[0]);
        } else {
            this.delta = d;
        }

        if (this.options.zindex) {
            this.element.style.zIndex = this.originalZ;
        }

        if (this.options.endeffect) {
            this.options.endeffect(this.element);
        }

        dr.Draggables.deactivate();
        dr.Droppables.reset(this.element);
    },

    /** @id MochiKit.DragAndDrop.keyPress */
    keyPress: function (event) {
        if (event.key().string != "KEY_ESCAPE") {
            return;
        }
        this.finishDrag(event, false);
        event.stop();
    },

    /** @id MochiKit.DragAndDrop.endDrag */
    endDrag: function (event) {
        if (!this.dragging) {
            return;
        }
        this.stopScrolling();
        this.finishDrag(event, true);
        event.stop();
    },

    /** @id MochiKit.DragAndDrop.draw */
    draw: function (point) {
        var pos = MochiKit.Position.cumulativeOffset(this.element);
        var d = this.currentDelta();
        pos.x -= d[0];
        pos.y -= d[1];

        if (this.options.scroll && (this.options.scroll != window && this._isScrollChild)) {
            pos.x -= this.options.scroll.scrollLeft - this.originalScrollLeft;
            pos.y -= this.options.scroll.scrollTop - this.originalScrollTop;
        }

        var p = [point.page.x - pos.x - this.offset[0],
                 point.page.y - pos.y - this.offset[1]]

        if (this.options.snap) {
            if (typeof(this.options.snap) == 'function') {
                p = this.options.snap(p[0], p[1]);
            } else {
                if (this.options.snap instanceof Array) {
                    var i = -1;
                    p = MochiKit.Base.map(MochiKit.Base.bind(function (v) {
                            i += 1;
                            return Math.round(v/this.options.snap[i]) *
                                   this.options.snap[i]
                        }, this), p)
                } else {
                    p = MochiKit.Base.map(MochiKit.Base.bind(function (v) {
                        return Math.round(v/this.options.snap) *
                               this.options.snap
                        }, this), p)
                }
            }
        }
        var style = this.element.style;
        if ((!this.options.constraint) ||
            (this.options.constraint == 'horizontal')) {
            style.left = p[0] + 'px';
        }
        if ((!this.options.constraint) ||
            (this.options.constraint == 'vertical')) {
            style.top = p[1] + 'px';
        }
        if (style.visibility == 'hidden') {
            style.visibility = '';  // fix gecko rendering
        }
    },

    /** @id MochiKit.DragAndDrop.stopScrolling */
    stopScrolling: function () {
        if (this.scrollInterval) {
            clearInterval(this.scrollInterval);
            this.scrollInterval = null;
            MochiKit.DragAndDrop.Draggables._lastScrollPointer = null;
        }
    },

    /** @id MochiKit.DragAndDrop.startScrolling */
    startScrolling: function (speed) {
        if (!speed[0] && !speed[1]) {
            return;
        }
        this.scrollSpeed = [speed[0] * this.options.scrollSpeed,
                            speed[1] * this.options.scrollSpeed];
        this.lastScrolled = new Date();
        this.scrollInterval = setInterval(MochiKit.Base.bind(this.scroll, this), 10);
    },

    /** @id MochiKit.DragAndDrop.scroll */
    scroll: function () {
        var current = new Date();
        var delta = current - this.lastScrolled;
        this.lastScrolled = current;

        if (this.options.scroll == window) {
            var s = this._getWindowScroll(this.options.scroll);
            if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
                var d = delta / 1000;
                this.options.scroll.scrollTo(s.left + d * this.scrollSpeed[0],
                                             s.top + d * this.scrollSpeed[1]);
            }
        } else {
            this.options.scroll.scrollLeft += this.scrollSpeed[0] * delta / 1000;
            this.options.scroll.scrollTop += this.scrollSpeed[1] * delta / 1000;
        }

        var d = MochiKit.DragAndDrop;

        MochiKit.Position.prepare();
        d.Droppables.show(d.Draggables._lastPointer, this.element);
        d.Draggables.notify('drag', this);
        if (this._isScrollChild) {
            d.Draggables._lastScrollPointer = d.Draggables._lastScrollPointer || d.Draggables._lastPointer;
            d.Draggables._lastScrollPointer.x += this.scrollSpeed[0] * delta / 1000;
            d.Draggables._lastScrollPointer.y += this.scrollSpeed[1] * delta / 1000;
            if (d.Draggables._lastScrollPointer.x < 0) {
                d.Draggables._lastScrollPointer.x = 0;
            }
            if (d.Draggables._lastScrollPointer.y < 0) {
                d.Draggables._lastScrollPointer.y = 0;
            }
            this.draw(d.Draggables._lastScrollPointer);
        }

        this.options.onchange(this);
    },

    _getWindowScroll: function (w) {
        var vp, w, h;
        MochiKit.DOM.withWindow(w, function () {
            vp = MochiKit.Style.getViewportPosition(w.document);
        });
        if (w.innerWidth) {
            w = w.innerWidth;
            h = w.innerHeight;
        } else if (w.document.documentElement && w.document.documentElement.clientWidth) {
            w = w.document.documentElement.clientWidth;
            h = w.document.documentElement.clientHeight;
        } else {
            w = w.document.body.offsetWidth;
            h = w.document.body.offsetHeight
        }
        return {top: vp.x, left: vp.y, width: w, height: h};
    },

    /** @id MochiKit.DragAndDrop.repr */
    repr: function () {
        return '[' + this.__class__.NAME + ", options:" + MochiKit.Base.repr(this.options) + "]";
    }
};

MochiKit.DragAndDrop.__new__ = function () {
    MochiKit.Base.nameFunctions(this);

    this.EXPORT_TAGS = {
        ":common": this.EXPORT,
        ":all": MochiKit.Base.concat(this.EXPORT, this.EXPORT_OK)
    };
};

MochiKit.DragAndDrop.__new__();

MochiKit.Base._exportSymbols(this, MochiKit.DragAndDrop);


if (typeof(MochiKit.Animator) == "undefined") {
    MochiKit.Animator = {};
}

MochiKit.Animator.NAME = "MochiKit.Animator";
MochiKit.Animator.VERSION = "0.9.2";

MochiKit.Animator.__repr__ = function () {
    return "[" + this.NAME + " " + this.VERSION + "]";
};

MochiKit.Animator.toString = function () {
    return this.__repr__();
};

/** @id MochiKit.Animator.Animation */
MochiKit.Animator.Animation = function(options){
    this.__init__(options);
};

MochiKit.Animator.Animation.prototype = {
    __init__:   function(options){
        this.setOptions(options);
        this.timerDelegate = MochiKit.Base.bind(this._onTimerEvent,this);
        this.subjects = [];
        this.target = 0;
        this.state = 0;
        this._direction = 0;
        this._prev = null;
        this._next = null;

        //these aliases are for animator.js code compat.
        this.addEffect = this.addSubject;
        this.removeEffect = this.removeSubject;
        this.clearEffects = this.clearSubjects;
    },
    /** @id MochiKit.Animator.Animation.setOptions */
    setOptions: function(options){
        this.options = MochiKit.Base.update({
            interval: 40,  // time between animation frames
            duration: 400, // length of animation,
            onComplete: function(){},
            onForward: function(){},
            onBackward: function(){},
            onStep: function(){},
            transition: MochiKit.Animator.transitions.easeInOut
        },options);
    },
    /** @id MochiKit.Animator.Animation.seekTo */
    seekTo: function(to,_direction){
        return this.seekFromTo(this.state,to,_direction);
    },
    /** @id MochiKit.Animator.Animation.seekFromTo */
    seekFromTo: function(from,to,_direction){
        this.target = Math.max(0, Math.min(1, to));
        this.state = Math.max(0, Math.min(1, from));

        var pres = 0;
        var nres = 0;
        //Maintain the invariant. If we're seeking, all previous nodes must have their state == 1.
        if(this._prev && _direction != this._playDirection.REVERSE){
            pres = this._prev.seekTo(1,this._playDirection.FORWARD);
        }
        //Maintain the invariant. If we're seeking, all next nodes must have their state == 0.
        if(this._next && _direction != this._playDirection.FORWARD){
            nres = this._next.seekTo(0,this._playDirection.REVERSE);
        }
        //If we're at our destination, no need to set up the animation timer
        if(this.target == this.state){
            return 0;
        }
        //variants maintained, we're going to move somehow, so set our direction
        this._direction = _direction || 0;
        //something else is chaining. we've set the state for this animation, the chained timer will kick us off
        if(pres != 0 || nres != 0){ return -1; }
        this._setupAnimationTimer()
        return 1;
    },
    _setupAnimationTimer: function(){
        if (!this.intervalId){
            this.intervalId = window.setInterval(this.timerDelegate, this.options.interval);
        }
    },
    /** @id MochiKit.Animator.Animation.jumpTo */
    jumpTo: function(to){
        this._direction = 0;
        if(this._prev && this._prev.state != 1) this._prev.jumpTo(1)
        if(this._next && this._next.state != 0) this._next.jumpTo(0)
        this.target = this.state = Math.max(0, Math.min(1,to));
        this._onTimerEvent();
    },
    play: function() {
        //jump to the beginning
        var cur = this;
        while(cur._prev){ cur = cur._prev; }
        cur.jumpTo(0);

        //play to the end
        cur = this;
        while(cur._next){ cur = cur._next; }
        cur.seekFromTo(0, 1, this._playDirection.FORWARD)
    },
    reverse: function() {
        //jump to the end
        var cur = this;
        while(cur._next){ cur = cur._next; }
        cur.jumpTo(1);

        //play to the beginning
        cur = this;
        while(cur._prev){ cur = cur._prev; }
        cur.seekFromTo(1, 0, this._playDirection.REVERSE)

    },
    /** @id MochiKit.Animator.Animation.toggle */
    toggle: function(){
        var dir = (1 - this.target) - this.state;
        var cur = this;
        if(dir >= 0){
            //log('dir forward')
            while(cur._next){
                cur = cur._next;
            }
            cur.seekTo(1);
        }else{
            //log('dir reverse')
            while(cur._prev){
                cur = cur._prev;
            }
            cur.seekTo(0);
        }
    },
    _playDirection: {
        REVERSE: -1,
        NO_PROPAGATE: 0,
        FORWARD: 1
    },
    /** @id MochiKit.Animator.Animation.chain */
    chain: function(animation){
        var me = this;

        if(animation._prev){
            me._prev = animation._prev;
            me._prev._next = me;
        }
        animation._prev = me;
        me._next = animation;

        return this;
    },
    /** @id MochiKit.Animator.Animation.addSubject */
    addSubject: function(subject){
        this.subjects[this.subjects.length] = subject;
        return this;
    },
    /** @id MochiKit.Animator.Animation.removeSubject */
    removeSubject: function(subject){
        this.subjects = this.subjects.reject(function(item){return item == subject;});
    },
    /** @id MochiKit.Animator.Animation.clearSubjects */
    clearSubjects: function(){
        this.subjects = [];
    },
    /** @id MochiKit.Animator.Animation._propagate */
    _propagate: function(){
        var unclampedValue = this.options.transition(this.state);
        var value = Math.max(0, Math.min(1, unclampedValue));
        for(var i = 0; i < this.subjects.length; i++){
            if(this.subjects[i].setState){
                this.subjects[i].setState(value,unclampedValue,this.state);
            } else {
                this.subjects[i](value,unclampedValue,this.state);
            }
        }
    },
    _onTimerEvent: function(){
        var movement = (this.options.interval / this.options.duration) * (this.state < this.target ? 1 : -1);
        if (Math.abs(movement) >= Math.abs(this.state - this.target)){
            this.state = this.target;
        } else {
            this.state += movement;
        }
        this._propagate();
        this.options.onStep.call(this);
        if (this.target == this.state) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
            if(this.state == 1 && movement > 0 && this._direction > 0){
                this._direction = 0;
                this.options.onForward.call(this,this);
                if(this._next){
                    //log('propagate forward')
                    this._next._setupAnimationTimer();
                }
            }
            else if(this.state == 0 && movement < 0 && this._direction < 0 ){
                this._direction = 0;
                this.options.onBackward.call(this,this);
                if(this._prev){
                    //log('propagate reverse')
                    this._prev._setupAnimationTimer();
                }
            }
            //var logstr = '{this.state:'+this.state+' this.targ:'+this.target+' this._direction:'+this._direction+'}';
            //if(this._prev)
            //    logstr = '{state:'+this._prev.state+' targ:'+this._prev.target+' _direction:'+this._prev._direction+'}'+(movement > 0 ? '->': '<-')+logstr;
            //if(this._next)
            //    logstr = logstr+(movement > 0 ? '->': '<-')+'{state:'+this._next.state+' targ:'+this._next.target+' _direction:'+this._next._direction+'}';
            //log(logstr);
            this.options.onComplete.call(this,this);
        }
    }
};
/** @id MochiKit.Animator.Animation.apply */
MochiKit.Animator.Animation.apply = function(el, style, options) {
    /* for animator original compat */
    return MochiKit.Animator.cssAnimation(style,options,el);
}

/** @id MochiKit.Animator.makeEaseIn */
MochiKit.Animator.makeEaseIn = function(a){
    return function(state){
        return Math.pow(state, a * 2);
    }
};

/** @id MochiKit.Animator.makeEaseOut */
MochiKit.Animator.makeEaseOut = function(a){
    return function(state){
        return 1 - Math.pow(1 - state, a * 2);
    }
};

MochiKit.Animator.transitions = {
    //new equations
    pulse: function (pos) {
        return MochiKit.Animator.transitions.easeInOut(1 - Math.abs(0.5-pos) * 2);
    },
    //Equations from the original animator.js
    linear: function(x){return x;},
    easeIn: MochiKit.Animator.makeEaseIn(1.5),
    easeOut: MochiKit.Animator.makeEaseOut(1.5),
    makeEaseIn: MochiKit.Animator.makeEaseIn,
    makeEaseOut: MochiKit.Animator.makeEaseOut,
    //These equations are taken from scriptaculous
    //pulsate is scriptaculous' pulse renamed, a pulse happens once.
    pulsate: function(pos){
        return (Math.floor(pos*10) % 2 == 0 ?
            (pos*10 - Math.floor(pos*10)) : 1 - (pos*10 - Math.floor(pos*10)));
    },
    wobble: function (pos) {
        return (-Math.cos(pos*Math.PI*(9*pos))/2) + 0.5;
    },
    flicker: function (pos) {
        return ((-Math.cos(pos*Math.PI)/4) + 0.75) + Math.random()/4;
    },
    //These equations are courtesy Robert Penner
    quadIn: function(t){
        return t*t;
    },
    quadOut: function(t){
        return -t*(t-2);
    },
    quadInOut: function(t){
        if ((t*=2) < 1) return 0.5*t*t;
        return -0.5 * ((--t)*(t-2) - 1);
    },
    cubicIn: function(t){
        return t*t*t;
    },
    cubicOut: function(t){
        return ((t-1)*t*t + 1);
    },
    cubicInOut: function(t){
        if ((t*=2) < 1) return 0.5*t*t*t;
        return 0.5*((t-=2)*t*t + 2);
    },
    quartIn: function(t){
        return t*t*t*t;
    },
    quartOut: function(t){
        return -((t-1)*t*t*t-1);
    },
    quartInOut: function(t){
        if ((t*=2) < 1) return 0.5*t*t*t*t;
        return -0.5 * ((t-=2)*t*t*t - 2);
    },
    quintIn: function(t){
        return t*t*t*t*t;
    },
    quintOut: function(t){
        return ((t-1)*t*t*t*t + 1);
    },
    quintInOut: function(t){
        if ((t*=2) < 1) return 0.5*t*t*t*t*t;
        return 0.5*((t-=2)*t*t*t*t + 2);
    },
    sineIn: function(t){
        return - Math.cos(t/ (Math.PI/2)) + 1;
    },
    sineOut: function(t){
        return  Math.sin(t/ (Math.PI/2));
    },
    sineInOut: function(t){
        return -0.5 * (Math.cos(Math.PI*t) - 1);
    },
    expoIn: function(t){
        return (t==0) ? 0 :  Math.pow(2, 10 * (t - 1));
    },
    expoOut: function(t){
        return (t==1) ? 1 :  (-Math.pow(2, -10 * t) + 1);
    },
    expoInOut: function(t){
        if (t==0) return 0;
        if (t==1) return 1;
        if ((t*=2) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
        return 0.5 * (-Math.pow(2, -10 * --t) + 2);
    },
    circIn: function(t){
        return - (Math.sqrt(1 - t*t) - 1);
    },
    circOut: function(t){
        return  Math.sqrt(1 - (t-1)*t);
    },
    circInOut: function(t){
        if ((t*=2) < 1) return -0.5 * (Math.sqrt(1 - t*t) - 1);
        return 0.5 * (Math.sqrt(1 - (t-=2)*t) + 1);
    },
    elasticIn: function(t, a, p){
        if (t==0) return 0;  if (t==1) return 1;  if (!p) p=.3; if (!a) a = 1;
        if (a < Math.abs(1)){ a=1; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin(1/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*1-s)*(2*Math.PI)/p ));
    },
    elasticOut: function(t, a, p){
        if (t==0) return 0;  if (t==1) return 1;  if (!p) p=.3; if (!a) a = 1;
        if (a < Math.abs(1)){ a=1; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin(1/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*1-s)*(2*Math.PI)/p ) + 1;
    },
    elasticInOut: function(t, a, p){
        if (t==0) return 0;  if ((t*=2)==2) return 1;  if (!p) p=(.3*1.5); if (!a) a = 1;
        if (a < Math.abs(1)){ a=1; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin(1/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*1-s)*(2*Math.PI)/p ));
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*1-s)*(2*Math.PI)/p )*.5 + 1;
    },
    backIn: function(t, s){
        if (!s) s = 1.70158;
        return t*t*((s+1)*t - s);
    },
    backOut: function(t, s){
        if (!s) s = 1.70158;
        return ((t-1)*t*((s+1)*t + s) + 1);
    },
    backInOut: function(t, s){
        if (!s) s = 1.70158;
        if ((t*=2) < 1) return 0.5*(t*t*(((s*=(1.525))+1)*t - s));
        return 0.5*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2);
    },
    bounceIn: function(t){
        return 1 - MochiKit.Animator.transitions.bounceOut (1-t);
    },
    bounceOut: function(t){
        if (t < (1/2.75)){
            return (7.5625*t*t);
        } else if (t < (2/2.75)){
            return (7.5625*(t-=(1.5/2.75))*t + .75);
        } else if (t < (2.5/2.75)){
            return (7.5625*(t-=(2.25/2.75))*t + .9375);
        } else {
            return (7.5625*(t-=(2.625/2.75))*t + .984375);
        }
    },
    bounceInOut: function(t){
        if (t < 0.5) return MochiKit.Animator.transitions.bounceIn(t*2) * .5;
        return MochiKit.Animator.transitions.bounceOut(t*2-1) * .5 + .5;
    }
};
//easeInOut is hereby "whatever easeInOut I like for this release"
MochiKit.Animator.transitions.easeInOut= MochiKit.Animator.transitions.cubicInOut;

// Returns an array of tuples of type [from, to, [matchingElements]]
MochiKit.Animator._optimizeAnimation = function(els,property,fromList,toList){
    var B = MochiKit.Base;
    var animationMap = {}
    var isFromList = B.isArrayLike(fromList);
    var isToList = B.isArrayLike(toList);
    var from = fromList, to= toList;
    for(var i = 0; i <els.length; i++){
        if(isFromList) from = fromList[i];
        if(isToList) to = toList[i];
        if(!animationMap[from]) animationMap[from] = {};
        if(!animationMap[from][to]){
            animationMap[from][to] = [from,to,[els[i]]];
        }else{
            animationMap[from][to][2].push(els[i]);
        }
    }
    var toReturn = [];
    for(fromK in animationMap){
        for(toK in animationMap[fromK]){
            toReturn.push(animationMap[fromK][toK]);
        }
    }
    return toReturn;
}

MochiKit.Animator.AnimatedStyleNumeric = function(els, property, from, to, preferredUnits){
    this.__init__(els,property,from,to,preferredUnits);
}
MochiKit.Animator.AnimatedStyleNumeric.prototype = {
    __init__: function(els, property, from, to, preferredUnits){
        var B = MochiKit.Base, I = MochiKit.Iter, A = MochiKit.Animator;

        if(B.isCallable(els)){
            els = argument.call(this);
        }
        els = B.map(MochiKit.DOM.getElement, A._toArray(els));
        if(B.isEmpty(els))
            throw new Error("No elements passed! This Numeric effect needs something to Animate.");

        this.property = B.camelize(property);
        var processTo = A._processArgument(to,els,null,'to');
        var processFrom = A._processArgument(from,els,property,'from');
        var processUnits = A._processArgument(preferredUnits,els,null,'preferredUnits');

        //I optimize before parsing here but I think we're pretty unlikely
        // to have homonyms here and if we do, it'll probably error anyway,
        // plus the lists returned by parse don't work as "keys" in our hash,
        // so I'd have to convert them back and parse them again anyway.
        // I'm probably thinking about this more than I need to.
        var processList = A._optimizeAnimation(els, property, processFrom, processTo);
        var units = processUnits || 'px', isUnitsList = B.isArrayLike(processUnits);
        this.processList = new Array();
        for(var i = 0; i < processList.length; i++){
            if(isUnitsList) units = processUnits[i] || 'px';
            from = this._parseValue(processList[i][0],property,units);
            to = this._parseValue(processList[i][1],property,units);
            if(from[1] == to[1]){
                this.processList.push([from[0],to[0],from[1],processList[i][2]]);
            }else{
                this.processList.push([from[0],to[0],units,processList[i][2]]);
            }
        }
    },
    _parseValue: function(value,property,preferredUnits){
        if(typeof(value) == "number")
            return [value, preferredUnits]
        var floatParsed = parseFloat(value);
        var intParsed = parseInt(value);
        if(isNaN(floatParsed) && isNaN(intParsed))
            throw TypeError("Numeric animator was passed "+value+
                " for property "+property+", which isn't a number.");
        var units = /em|ex|px|in|cm|mm|pt|pc|%/.exec(value.toLowerCase());
        units = units? units[0]: preferredUnits;
        if(!isNaN(intParsed) && floatParsed == intParsed){
            return [intParsed,units];
        }else{
            return [floatParsed, units];
        }
    },
    _figureOutValue: function(from,to,preferred){
        var pfrom = this._parseValue(from,property,preferred);
        var pto = this._parseValue(to,property,preferred);
        if(pfrom[1] == pto[1]){
            return [pfrom[0],pto[0],pfrom[1]]
        }else{
            //this probably isn't a good idea but do some testing
            //before converting this case to an error
            return [pfrom[0],pto[0],preferred]
        }
    },
    setState: function(state,unclampedState,rawState){
        var els, from, to, units;
        var calcstate, style;
        if(this.transition){
            unclampedState = this.transition(rawState);
            state = Math.max(0,Math.min(1,unclampedState));
        }
        for(var i = 0; i < this.processList.length; i++){
            from = this.processList[i][0];
            to = this.processList[i][1];
            units = this.processList[i][2];
            els = this.processList[i][3];
            if(this.property == 'opacity'){
                style = from + ((to - from) * state);
            } else {
                calcstate = from + ((to - from) * unclampedState);
                style = Math.round(calcstate) + units;
            }
            for(var j = 0; j < els.length; j++){
                if(this.property == 'opacity'){
                    MochiKit.Style.setOpacity(els[j], style);
                }else{
                    els[j].style[this.property] = style;
                }
            }
        }
    }
};

/** @id MochiKit.Animator.AnimatedStyleColor */
MochiKit.Animator.AnimatedStyleColor = function(els, property, from, to){
    this.__init__(els, property, from, to);
};
MochiKit.Animator.AnimatedStyleColor.prototype = {
    __init__: function(els, property, from, to){
        var B = MochiKit.Base, I = MochiKit.Iter, A = MochiKit.Animator;

        if(B.isCallable(els)){
            els = argument.call(this);
        }
        els = B.map(MochiKit.DOM.getElement, A._toArray(els));
        if(B.isEmpty(els))
            throw new Error("No elements passed! This Numeric effect needs something to Animate.");

        this.property = B.camelize(property);
        var processTo = B.map(
                            function(c){ var C = MochiKit.Color.Color; return c instanceof C ? c : C.fromString(c)},
                            A._toArray(A._processArgument(to,els,null,'to')));
        var processFrom = B.map(
                            function(c){ var C = MochiKit.Color.Color; return c instanceof C ? c : C.fromString(c)},
                            A._toArray(A._processArgument(from,els,property,'from')));
        if(processFrom.length == 1) processFrom = processFrom[0];
        if(processTo.length == 1) processTo = processTo[0];

        this.processList = A._optimizeAnimation(els, property, processFrom, processTo);
    },
    setState: function(state,unclampedState,rawState){
        var els, from, to, units;
        var color;
        if(this.transition){
            unclampedState = this.transition(rawState);
            state = Math.max(0,Math.min(1,unclampedState));
        }
        for(var i = 0; i < this.processList.length; i++){
            from = this.processList[i][0];
            to = this.processList[i][1];
            els = this.processList[i][2];
            color = from.blendedColor(to,state).toHexString();
            for(var j = 0; j < els.length; j++){
                els[j].style[this.property] = color;
            }
        }
    }
};

MochiKit.Animator._toArray = function(maybeIterator){
    if(maybeIterator == null)
        return [null];
    if(MochiKit.Base.isArrayLike(maybeIterator))
        return maybeIterator;
    try{
        return MochiKit.Iter.list(MochiKit.Iter.iter(maybeIterator));
    }catch (e){
        if(!e instanceof TypeError) throw e;
        return [maybeIterator];
    }
};
MochiKit.Animator._getStylesFromElement = function(styles,e){
    var B = MochiKit.Base;
    var ret = {};
    MochiKit.Iter.forEach(styles,function(k){
        ret[k] = MochiKit.Style.getStyle(e,k);
    });
    return ret;
};
MochiKit.Animator._processArgument = function(argument, els, property, argumentName){
    var toArray = MochiKit.Animator._toArray;
    if(MochiKit.Base.isCallable(argument)){
        argument = toArray(argument.call(this,els));
    }else{
        argument = toArray(argument);
    }
    if(property != null){
        var argList = argument.length != 1;
        var arg = argument[0];
        if(argList || arg == null){
            if(arg == null) argument = new Array(els.length);
            for(var i = 0; i < els.length; i++){
                if(argument[i] == null) {
                    //this is, on occasion, null in IE. I expect it not to be, hence the 0.
                    // seems to only apply to numeric values.
                    argument[i] = MochiKit.Style.getStyle(els[i],property) || '0';
                    //alert(property+" "+repr(els[i].outerHTML)+argumentName+" "+repr(els[i].currentStyle)+" "+MochiKit.Style.getStyle(els[i],property));
                }
            }
        }
    }
    if(argument.length == 1){
        return argument[0];
    }else if(argument.length == els.length){
        return argument;
    }else{
        throw new Error((argumentName || '') + " Argument and Element list are not the same length");
    }
};

MochiKit.Animator._createEffect = function(els,prop,fromStyle,toStyle,units){
        var to, fromList, toList, unitsList, match, type;
        var A = MochiKit.Animator;
        var numericalRe = /^[0-9.-]+(%|em|ex|px|in|cm|mm|pt|pc)?$/i;

        if(!prop) return;

        fromList = A._processArgument(fromStyle, els, prop,'fromStyle');
        toList = A._processArgument(toStyle, els, null,'toStyle');
        unitsList = A._processArgument(units, els, null,'units');

        to = MochiKit.Base.isArrayLike(toList) ?  toList[0] : toList;
        from = MochiKit.Base.isArrayLike(fromList) ?  fromList[0] : fromList;

        //if(!toStyle) {
        //    if(typeof(MochiKit.Logging) != 'undefined'){
        //        MochiKit.Logging.logError("No toStyle provided for '" + prop + '"');
        //    }
        //}
        if(to instanceof MochiKit.Color.Color || typeof(to) == "string" && MochiKit.Color.Color.fromString(to)){
            //from = fromStyle != null ? MochiKit.Color.Color.fromString(fromStyle) : null;
            type = MochiKit.Animator.AnimatedStyleColor;
            unitsList = null;
        } else if(match = numericalRe.exec(to)){
            type = MochiKit.Animator.AnimatedStyleNumeric;
            var frommatch = numericalRe.exec(from);
            frommatch = frommatch? frommatch[1] : null;
            unitsList = unitsList || match[1] || frommatch;
        } else {
            throw new TypeError("Unrecognised format for value of " +
                                  prop + ": '" + to + "'");
        }
        return new type(els, prop, fromList, toList, units);
};

MochiKit.Animator.AnimatedProperties = function(els, propertyObj){
    this.__init__(els, propertyObj);
};

MochiKit.Animator.AnimatedProperties.prototype = {
    __init__: function(els, propertyObj){
        var B = MochiKit.Base, I = MochiKit.Iter, A = MochiKit.Animator;
        if(B.isCallable(els)){
            els = argument.call(this);
        }
        if(B.isCallable(propertyObj)){
            propertyObj = propertyObj.call(this,els);
        }
        els = B.map(MochiKit.DOM.getElement, A._toArray(els));
        this.subjects = B.map( function(key_value){
            return A._createEffect.apply(this,B.extend([els, key_value[0]], key_value[1]));
            },B.items(propertyObj));
        if(I.some(this.subjects,B.operator.lognot))
            throw new Error("Invalid propertyObj"); //TODO: Better error reporting
    },
    setState: function(state,unclampedState,rawState) {
        if(this.transition){
            unclampedState = this.transition(rawState);
            state = Math.max(0,Math.min(1,unclampedState));
        }
        for(var i = 0; i < this.subjects.length; i++){
            this.subjects[i].setState(state,unclampedState,rawState);
        }
    }
};

MochiKit.Animator.AnimatedCSS = function(els, style1, style2){
    this.__init__(els, style1, style2);
};
MochiKit.Animator.AnimatedCSS.prototype = {
    __init__: function(els, style1, style2){
        var B = MochiKit.Base, I = MochiKit.Iter, A = MochiKit.Animator;

        if(B.isCallable(els)){
            els = argument.call(this);
        }
        els = B.map(MochiKit.DOM.getElement, A._toArray(els));
        //no sense in doing a lot of work if there's nothing to process
        if(B.isEmpty(els)) return; 

        var toStyle, fromStyle;
        if(style2){
            fromStyle = this.parseStyle(style1);
            toStyle = this.parseStyle(style2);
        } else {
            toStyle = this.parseStyle(style1);
            fromStyle = {};
            I.forEach(B.keys(toStyle),
                function(key){ fromStyle[key] = null; });
        }
        this.subjects = B.map(
                function(prop){return A._createEffect(els,prop,fromStyle[prop],toStyle[prop])},
                B.keys(toStyle));
    },
    parseStyle: function(style){
        var styles = style.split(';');
        var rtn = {};
        var ruleRe = /^\s*([a-zA-Z\-]+)\s*:\s*(\S(.+\S)?)\s*$/;
        for (var i=0; i<styles.length; i++) {
            var parts = ruleRe.exec(styles[i]);
            if (parts) {
                rtn[parts[1]] = parts[2];
            }
        }
        return rtn;
    },
    setState: function(state,unclampedState,rawState) {
        if(this.transition){
            unclampedState = this.transition(rawState);
            state = Math.max(0,Math.min(1,unclampedState));
        }
        for(var i = 0; i < this.subjects.length; i++){
            this.subjects[i].setState(state,unclampedState,rawState);
        }
    }
};

/** @id MochiKit.Animator.cssAnimation */
MochiKit.Animator._cssFactory = function(animation, style/* [options], el/* ... */) {
    var expectedArgsLength = 4;
    var options = arguments[2];
    var el;
    if(options != null && !(typeof(options.length) == "undefined" && typeof(options.nodeType) == 'undefined')){
        expectedArgsLength = expectedArgsLength - 1;
        options = null;
    }
    el = MochiKit.Base.extend(null,arguments,expectedArgsLength-1)
    el = MochiKit.Base.flattenArguments(el);
    if(el.length == 0)
        throw new TypeError("MochiKit.Animator.css"+(animation ? "Animation":"Effect")+" is missing an element to animate.");
    if (MochiKit.Base.isArrayLike(style)) {
        if(style.length > 1){
            if(animation){
                return new MochiKit.Animator.Animation(options).addSubject(new MochiKit.Animator.AnimatedCSS(el, style[0], style[1]));
            }else{
                return new MochiKit.Animator.AnimatedCSS(el, style[0], style[1]);
            }
        } else{
            if(animation){
                return new MochiKit.Animator.Animation(options).addSubject(new MochiKit.Animator.AnimatedCSS(el, style[0]));
            }else{
                return new MochiKit.Animator.AnimatedCSS(el, style[0]);
            }
        }
    } else if(typeof(style) == "string"){
        if(animation){
        return new MochiKit.Animator.Animation(options).addSubject(new MochiKit.Animator.AnimatedCSS(el, style));
        }else{
        return new MochiKit.Animator.AnimatedCSS(el, style);
        }
    } else if(style != null){ //must be an object
        if(animation){
            return new MochiKit.Animator.Animation(options).addSubject(new MochiKit.Animator.AnimatedProperties(el, style));
        }else{
            return new MochiKit.Animator.AnimatedProperties(el, style);
        }
    }
};

/** @id MochiKit.Animator.cssAnimation */
MochiKit.Animator.cssAnimation = function(style/*, [options], el ... */){
    return MochiKit.Animator._cssFactory.apply(this,MochiKit.Base.extend([true],arguments));
};
/** @id MochiKit.Animator.cssEffect */
MochiKit.Animator.cssEffect = function(style/*, [options], el ... */){
    return MochiKit.Animator._cssFactory.apply(this,MochiKit.Base.extend([false],arguments));
};

/** @id MochiKit.Animator.valueAnimation */
MochiKit.Animator.valueAnimation = function(fn, /* optional */ options){
    return new MochiKit.Animator.Animation(options).addSubject(fn||MochiKit.Base.operator.identity);
}

MochiKit.Animator.pauseAnimation = function(duration, /* optional */ options){
    var opts = MochiKit.Base.update({interval: Math.min(500,duration/3)},options);
    opts.duration = duration;
    return new MochiKit.Animator.Animation(opts);
}

MochiKit.Animator.chainAnimations = function(/*iterable ...*/){
    var B = MochiKit.Base, I = MochiKit.Iter, A = MochiKit.Animator;
    var iterable = B.flattenArguments(arguments);
    return I.reduce(function(chained,start){ start.chain(chained); return start; },
                  I.reversed(iterable));
}

MochiKit.Animator.__new__ = function(){
    MochiKit.Base.nameFunctions(this);
    this.EXPORT_TAGS = {
        ":common": this.EXPORT,
        ":all": MochiKit.Base.concat(this.EXPORT, this.EXPORT_OK)
    }
};


MochiKit.Animator.EXPORT = [
    "Animation",
    "transitions",
    "AnimatedStyleNumeric",
    "AnimatedStyleColor",
    "AnimatedCSS",
    "AnimatedProperties",
    "cssAnimation",
    "cssEffect",
    "pauseAnimation",
    "valueAnimation",
    "chainAnimations"
];
MochiKit.Animator.EXPORT_OK = [
];

MochiKit.Animator.__new__();
MochiKit.Base._exportSymbols(this, MochiKit.Animator);




