(this["webpackJsonpreact-virtual-list-demo"]=this["webpackJsonpreact-virtual-list-demo"]||[]).push([[0],{17:function(e,t,a){e.exports=a(39)},22:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var i,n,r,s,o=a(0),l=a.n(o),c=a(4),u=a.n(c),m=(a(22),a(6)),d=a(42),h=a(41),f=a(13),v=a(1),p=a(10);!function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(s||(s={}));var E,g=(i={},Object(v.a)(i,s.VERTICAL,"scrollTop"),Object(v.a)(i,s.HORIZONTAL,"scrollLeft"),i);!function(e){e.AUTO="auto",e.START="start",e.CENTER="center",e.END="end"}(E||(E={}));var z=(n={},Object(v.a)(n,s.VERTICAL,"height"),Object(v.a)(n,s.HORIZONTAL,"width"),n),S=(r={},Object(v.a)(r,s.VERTICAL,"top"),Object(v.a)(r,s.HORIZONTAL,"left"),r),I=a(14),b=a(15),x=function(){function e(t){var a=t.itemCount,i=t.itemSizeGetter,n=t.estimatedItemSize;Object(I.a)(this,e),this.itemSizeGetter=void 0,this.itemCount=void 0,this.estimatedItemSize=void 0,this.lastMeasuredIndex=void 0,this.itemSizeAndPositionData=void 0,this.itemSizeGetter=i,this.itemCount=a,this.estimatedItemSize=n,this.itemSizeAndPositionData={},this.lastMeasuredIndex=-1}return Object(b.a)(e,[{key:"updateConfig",value:function(e){var t=e.itemCount,a=e.itemSizeGetter,i=e.estimatedItemSize;null!=t&&(this.itemCount=t),null!=i&&(this.estimatedItemSize=i),null!=a&&(this.itemSizeGetter=a)}},{key:"getLastMeasuredIndex",value:function(){return this.lastMeasuredIndex}},{key:"getSizeAndPositionForIndex",value:function(e){if(e<0||e>=this.itemCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this.itemCount));if(e>this.lastMeasuredIndex){for(var t=this.getSizeAndPositionOfLastMeasuredItem(),a=t.offset+t.size,i=this.lastMeasuredIndex+1;i<=e;i++){var n=this.itemSizeGetter(i);if(null==n||isNaN(n))throw Error("Invalid size returned for index ".concat(i," of value ").concat(n));this.itemSizeAndPositionData[i]={offset:a,size:n},a+=n}this.lastMeasuredIndex=e}return this.itemSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredItem",value:function(){return this.lastMeasuredIndex>=0?this.itemSizeAndPositionData[this.lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredItem();return e.offset+e.size+(this.itemCount-this.lastMeasuredIndex-1)*this.estimatedItemSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,a=void 0===t?E.START:t,i=e.containerSize,n=e.currentOffset,r=e.targetIndex;if(i<=0)return 0;var s,o=this.getSizeAndPositionForIndex(r),l=o.offset,c=l-i+o.size;switch(a){case E.END:s=c;break;case E.CENTER:s=l-(i-o.size)/2;break;case E.START:s=l;break;default:s=Math.max(c,Math.min(l,n))}var u=this.getTotalSize();return Math.max(0,Math.min(u-i,s))}},{key:"getVisibleRange",value:function(e){var t=e.containerSize,a=e.offset,i=e.overscanCount;if(0===this.getTotalSize())return{};var n=a+t,r=this.findNearestItem(a);if("undefined"===typeof r)throw Error("Invalid offset ".concat(a," specified"));for(var s=this.getSizeAndPositionForIndex(r),o=s.offset+s.size,l=r;o<n&&l<this.itemCount-1;)l++,o+=this.getSizeAndPositionForIndex(l).size;return i&&(r=Math.max(0,r-i),l=Math.min(l+i,this.itemCount-1)),{start:r,stop:l}}},{key:"resetItem",value:function(e){this.lastMeasuredIndex=Math.min(this.lastMeasuredIndex,e-1)}},{key:"findNearestItem",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredItem(),a=Math.max(0,this.lastMeasuredIndex);return t.offset>=e?this.binarySearch({high:a,low:0,offset:e}):this.exponentialSearch({index:a,offset:e})}},{key:"binarySearch",value:function(e){for(var t=e.low,a=e.high,i=e.offset,n=0,r=0;t<=a;){if(n=t+Math.floor((a-t)/2),(r=this.getSizeAndPositionForIndex(n).offset)===i)return n;r<i?t=n+1:r>i&&(a=n-1)}return t>0?t-1:0}},{key:"exponentialSearch",value:function(e){for(var t=e.index,a=e.offset,i=1;t<this.itemCount&&this.getSizeAndPositionForIndex(t).offset<a;)t+=i,i*=2;return this.binarySearch({high:Math.min(t,this.itemCount-1),low:Math.floor(t/2),offset:a})}}]),e}(),O=(a(35),{position:"absolute",top:0,left:0,width:"100%"}),y=function(e,t,a){var i,n=e.getSizeAndPositionForIndex(t),r=n.size,s=n.offset;return Object(p.a)(Object(p.a)({},O),{},(i={},Object(v.a)(i,z[a],r),Object(v.a)(i,S[a],s),i))},N=function(e){var t=e.dataSource,a=e.renderListItem,i=e.height,n=e.itemSize,r=e.width,c=e.overscanCount,u=void 0===c?5:c,d=e.scrollDirection,h=void 0===d?s.VERTICAL:d,f=e.className,p=e.renderCellWarpper,E=e.estimatedItemSize,S=void 0===E?50:E,I=Object(o.useRef)(null),b=Object(o.useRef)(new x({itemCount:t.length,itemSizeGetter:"function"===typeof n?n:function(){return n},estimatedItemSize:S})),O=Object(o.useState)(0),N=Object(m.a)(O,2),A=N[0],C=N[1];Object(o.useEffect)((function(){var e=I.current,t=function(){if(e){var t=e[g[h]];if(t<0||t===A)return;C(t)}};return e&&e.addEventListener("scroll",t,{passive:!0}),function(){e&&e.removeEventListener("scroll",t)}}),[]),Object(o.useEffect)((function(){t&&b&&b.current.updateConfig({itemCount:t.length,itemSizeGetter:"function"===typeof n?n:function(){return n},estimatedItemSize:S})}),[t,n,S]);var M=[],k=b.current.getVisibleRange({containerSize:e[z[h]]||0,offset:A,overscanCount:u}),j=k.start,L=k.stop;if("undefined"!==typeof j&&"undefined"!==typeof L)for(var T=j;T<=L;T++)M.push(a(t[T],T,y(b.current,T,h)));var P={};i&&(P.height="".concat(i,"px")),r&&(P.width="".concat(r,"px"));var w=Object(v.a)({width:"100%",minHeight:"100%",position:"relative"},z[h],b.current.getTotalSize());return l.a.createElement("div",{ref:I,className:"virtual-list ".concat(f),style:P},p?p(M,w):l.a.createElement("div",{className:"virtual-list-container",style:w},M))},A=(a(36),new f.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}})),C=function(e){return e[Math.floor(Math.random()*e.length)]},M=function(){var e=Object(o.useState)(Array.from(new Array(1e4)).map((function(e,t){return{title:A.generateSentences(1),content:A.generateParagraphs(1),imgUrl:C(["https://i.picsum.photos/id/399/200/200.jpg?hmac=LCWCFY16G50iBPpqU6-FCw79ovEqvznYsxoQNCIldV8","https://i.picsum.photos/id/477/200/200.jpg?hmac=pGA68LBET23UPGB7L8xL1pA7PYT_x7JazGX__CnlliU","https://i.picsum.photos/id/696/200/200.jpg?hmac=JE4lFckorKxM41-eM1nTxXjpOeCf3aZkAxrLl3ZAYI0","https://i.picsum.photos/id/1024/200/200.jpg?hmac=LR-PJPi70YREc_0NdDp68FkLt6-f1sKeJWwgOhCeyBU","https://i.picsum.photos/id/791/200/200.jpg?hmac=bPVayqOX5aUzsnsX99AgWaxWB3WzWqwaiSDJ-lNHUk4","https://i.picsum.photos/id/464/200/200.jpg?hmac=rT0rkzkukXVK3LYD1qHhc-Yqk0dFyIYoFk8wuNpCkAY","https://i.picsum.photos/id/687/200/200.jpg?hmac=U-mrTuk3Y5M3brBJ76mYvaj-bZ3ggY1OD8YOIPw89uI"]),id:t}}))),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(o.useState)([{id:-1}].concat(Array.from(new Array(5e4)).map((function(e,t){return{customer:C(["\u5f20\u4e09","\u674e\u56db","\u738b\u4e94","Jack","Marry"]),goods:C(["\u6d17\u8863\u673a","\u7535\u51b0\u7bb1","\u7535\u89c6\u673a","\u822a\u7a7a\u6bcd\u8230","\u7535\u8111"]),shop:C(["\u94f6\u6cf0","\u5929\u8857","\u5927\u6da6\u53d1","\u7269\u7f8e","\u6c83\u5c14\u739b"]),id:t,quantity:Math.floor(100*Math.random())+1,city:C(["\u5317\u4eac","\u4e0a\u6d77","\u676d\u5dde","\u6210\u90fd","\u6df1\u5733"]),sales:Math.floor(1e3*Math.random())+1}})))),r=Object(m.a)(n,2),s=r[0],c=(r[1],Object(o.useState)(!0)),u=Object(m.a)(c,2),f=u[0],v=u[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"React virutal list demo"),l.a.createElement("div",{className:"setting"},l.a.createElement("div",{className:"item"},l.a.createElement("input",{type:"checkbox",id:"animation",name:"animation",checked:f,onChange:function(e){v(e.target.checked)}}),l.a.createElement("label",{htmlFor:"scales"},"Turn ",f?"off":"on"," animation"))),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"column"},l.a.createElement("h4",null,"Feed(10000 records)"),l.a.createElement(N,{className:"dialog-list",height:600,itemSize:120,dataSource:a,overscanCount:0,renderCellWarpper:function(e,t){return l.a.createElement(d.a,{style:t},e)},renderListItem:function(e,t,n){return l.a.createElement(h.a,{key:e.id,timeout:500,classNames:"item-vertical"},l.a.createElement("div",{className:"list-item vertical",style:n},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:e.imgUrl,alt:"avatar"})),l.a.createElement("div",{className:"bubble"},l.a.createElement("div",{className:"title"},l.a.createElement("div",{className:"text"},e.title),l.a.createElement("div",{className:"btn",onClick:function(){i(a.filter((function(t){return t.id!==e.id})))}},"Delete")),l.a.createElement("div",{className:"content"},e.content))))}})),l.a.createElement("div",{className:"column"},l.a.createElement("h4",null,"Data Preview(50000 records)"),l.a.createElement(N,{className:"list table-list",height:400,itemSize:50,dataSource:s,renderCellWarpper:function(e,t){return l.a.createElement("table",{style:t,className:"table"},l.a.createElement("thead",{className:"table-header"},l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"\u987e\u5ba2\u540d"),l.a.createElement("th",null,"\u5546\u573a"),l.a.createElement("th",null,"\u57ce\u5e02"),l.a.createElement("th",null,"\u5546\u54c1"),l.a.createElement("th",null,"\u6570\u91cf"),l.a.createElement("th",null,"\u9500\u552e\u989d"))),l.a.createElement("tbody",null,e))},renderListItem:function(e,t,a){return-1===e.id?l.a.createElement("tr",{key:e.id,className:"list-item horizontal",style:a}):l.a.createElement("tr",{key:e.id,className:"list-item horizontal",style:a},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.customer),l.a.createElement("td",null,e.shop),l.a.createElement("td",null,e.city),l.a.createElement("td",null,e.goods),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.sales))}}))))};u.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b434e103.chunk.js.map