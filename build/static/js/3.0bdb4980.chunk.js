(this["webpackJsonpkomp-konfigurator"]=this["webpackJsonpkomp-konfigurator"]||[]).push([[3],{57:function(t,e,r){"use strict";r.r(e);var n=r(3),c=r.n(n),a=r(5),o=r(4),u=r(1),s=r(9),i=r(10),d=r(11),p=r.n(d),l=function(){function t(){Object(s.a)(this,t)}return Object(i.a)(t,null,[{key:"getGroup",value:function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("data/products_".concat(e,".json"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u043e\u0432",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}]),t}(),f=r(0),j=function(t){var e=t.product,r=t.handleProductAddToCard,n=t.accessoryId;return Object(f.jsx)("div",{onClick:function(){return r(e,n)},style:{cursor:"pointer",padding:"10px"},children:Object(f.jsxs)("div",{style:{borderBottom:"1px solid blueviolet"},children:[e.title,Object(f.jsxs)("span",{style:{color:"grey",paddingLeft:"20px"},children:[e.price," \u0440\u0443\u0431."]})]})})},b=r(26);e.default=function(t){var e=t.accessoryId,r=t.handleProductAddToCard,n=Object(u.useState)([]),s=Object(o.a)(n,2),i=s[0],d=s[1];function p(){return(p=Object(a.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getGroup(e);case 2:(r=t.sent)&&d(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.useEffect)((function(){return function(){p.apply(this,arguments)}(),function(){}}),[]),Object(f.jsx)("div",{children:i.length?i.map((function(t,n){return Object(f.jsx)(j,{accessoryId:e,product:t,handleProductAddToCard:r},n)})):Object(f.jsx)(b.a,{})})}}}]);
//# sourceMappingURL=3.0bdb4980.chunk.js.map