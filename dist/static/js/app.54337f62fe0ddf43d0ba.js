webpackJsonp([1],{NHnr:function(t,s,e){"use strict";function a(t){e("mgS4")}Object.defineProperty(s,"__esModule",{value:!0});var n=e("+RKF"),i={name:"app"},o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"inp",attrs:{id:"app"}},[e("router-view")],1)},l=[],r={render:o,staticRenderFns:l},u=r,c=e("C7Lr"),p=c(i,u,!1,null,null,null),d=p.exports,v=e("wlOD"),y={name:"inp",data:function(){return{key:"",itemCount:"",showResult:!1,isPlay:!1,isLoop:!1,items:[],tip:"",detial:"just listening"}},methods:{clickFun:function(){var t=this,s=new XMLHttpRequest;s.open("get","http://musicapi.leanapp.cn/search?keywords="+this.key,!0),s.send(),s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){var e=JSON.parse(s.responseText);e.result?(t.showResult=!0,t.items=e.result.songs,t.itemCount=e.result.songCount):(t.showResult=!1,alert("未找到资源！"))}}},sing:function(t){var s=this,e=t.target.id,a=new XMLHttpRequest;a.open("get","https://api.imjad.cn/cloudmusic/?type=song&id="+e+"&search_type=1",!0),a.send(),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var e=JSON.parse(a.responseText);audio.src=e.data[0].url,s.detial=t.target.innerHTML,audio.play(),s.isPlay=!0}}},createSongsList:function(){},playIng:function(){this.isPlay||(this.isPlay=!0)},playEnd:function(){this.isPlay=!1},playOrPause:function(){audio.src?(this.isPlay?audio.pause():audio.play(),this.isPlay=!this.isPlay):alert("播放列表还没歌曲哦！")},loopOrList:function(){this.isLoop?audio.loop=!1:audio.loop=!0,this.isLoop=!this.isLoop},tipWindow:function(){}}},f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"inp"},[e("header",[e("div",{staticClass:"searchBox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"scanIn",attrs:{placeholder:"找首歌儿给自己听",type:"text"},domProps:{value:t.key},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.clickFun(s)},input:function(s){s.target.composing||(t.key=s.target.value)}}}),t._v(" "),e("input",{staticClass:"search",attrs:{type:"button",value:"查找"},on:{click:t.clickFun}})])]),t._v(" "),e("div",{staticClass:"content"},[t.showResult?t._e():e("h2",{staticClass:"defaultTip"},[t._v("只听好歌，不听话！")]),t._v(" "),t.showResult?e("ol",{staticClass:"resultList"},t._l(t.items,function(s){return e("li",{staticClass:"resultItem"},[s.al?e("div",{staticClass:"resultImg playDef"}):t._e(),t._v(" "),e("p",{staticClass:"songName"},[e("span",{attrs:{id:s.id},on:{click:function(s){return s.stopPropagation(),t.sing(s)}}},[t._v(t._s(s.name))])]),t._v(" "),e("p",{staticClass:"singerName"},t._l(s.ar,function(a){return s.ar?e("span",[t._v(t._s(a.name)+" ")]):t._e()}),0)])}),0):t._e()]),t._v(" "),e("footer",[e("div",{staticClass:"controlBtns"},[e("img",{staticClass:"poster",attrs:{alt:"poster",src:"static/icon/icon.png"}}),t._v(" "),e("div",{staticClass:"befSong"}),t._v(" "),e("div",{class:{playSong:!t.isPlay,pauseSong:t.isPlay},on:{click:function(s){return s.stopPropagation(),t.playOrPause(s)}}}),t._v(" "),e("div",{staticClass:"nextSong"}),t._v(" "),e("div",{class:{loopList:!t.isLoop,loopOne:t.isLoop},on:{click:function(s){return s.stopPropagation(),t.loopOrList(s)}}})]),t._v(" "),e("div",{staticClass:"lyric"},[t._v(t._s(t.detial))]),t._v(" "),e("audio",{attrs:{id:"audio"},on:{ended:t.playEnd,play:t.playIng}})])])},g=[],_={render:f,staticRenderFns:g},h=_,m=e("C7Lr"),C=a,k=m(y,h,!1,C,null,null),P=k.exports;n.a.use(v.a);var L=new v.a({routes:[{path:"/",name:"findMusic",component:P}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:L,template:"<App/>",components:{App:d}})},mgS4:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.54337f62fe0ddf43d0ba.js.map