import{n as X,p as G,e as H,c as J,a as D,d,o as f,i as g,I as y,u as V,q as z,v as Q,r as Z,G as x,A as k,j as m,J as $,K,L as U}from"./scheduler.27454928.js";import{S as T,i as S,a as ee,t as te}from"./index.d1757bfb.js";import{s as L}from"./dom.affe8f60.js";import{r as P}from"./Scaled.548fb4ef.js";function ne(i){let e,t,r,c;const s=i[14].default,n=G(s,i,i[13],null);return{c(){e=H("div"),n&&n.c(),this.h()},l(o){e=J(o,"DIV",{class:!0,tabindex:!0,role:!0});var u=D(e);n&&n.l(u),u.forEach(d),this.h()},h(){f(e,"class","surface svelte-1ktoghv"),f(e,"tabindex","0"),f(e,"role","button")},m(o,u){g(o,e,u),n&&n.m(e,null),i[15](e),t=!0,r||(c=[y(e,"pointerdown",i[1]),y(e,"pointerup",i[2]),y(e,"pointermove",i[3]),y(e,"pointerenter",i[4]),y(e,"pointerleave",i[5]),y(e,"pointercancel",i[6])],r=!0)},p(o,[u]){n&&n.p&&(!t||u&8192)&&V(n,s,o,o[13],t?Q(s,o[13],u,null):z(o[13]),null)},i(o){t||(ee(n,o),t=!0)},o(o){te(n,o),t=!1},d(o){o&&d(e),n&&n.d(o),i[15](null),r=!1,Z(c)}}}function ie(i,e,t){let{$$slots:r={},$$scope:c}=e,{scale:s=1}=e,{pointing:n=void 0}=e,{pointerDown:o=void 0}=e,{pointerX:u=void 0}=e,{pointerY:_=void 0}=e,{cancelOnLeave:a=!0}=e;const p=(l,B)=>{const I=h.getBoundingClientRect();t(9,u=(l-I.left)/s),t(10,_=(B-I.top)/s)},b=l=>{l.shiftKey||l.button>=3||(L(l),p(l.clientX,l.clientY),t(8,o=!0),W())},A=l=>{l.shiftKey||l.button>=3||(L(l),p(l.clientX,l.clientY),t(8,o=!1))},C=l=>{l.shiftKey||(L(l),p(l.clientX,l.clientY))},R=l=>{l.shiftKey||(L(l),p(l.clientX,l.clientY),t(7,n=!0))},q=l=>{l.shiftKey||(L(l),p(l.clientX,l.clientY),t(7,n=!1),a&&o&&(t(8,o=!1),E()))},M=l=>{l.shiftKey||(L(l),o&&(t(8,o=!1),E()))};let h;const W=()=>{document.activeElement!==h&&h.focus()},E=()=>{document.activeElement===h&&h.blur()};function j(l){x[l?"unshift":"push"](()=>{h=l,t(0,h)})}return i.$$set=l=>{"scale"in l&&t(11,s=l.scale),"pointing"in l&&t(7,n=l.pointing),"pointerDown"in l&&t(8,o=l.pointerDown),"pointerX"in l&&t(9,u=l.pointerX),"pointerY"in l&&t(10,_=l.pointerY),"cancelOnLeave"in l&&t(12,a=l.cancelOnLeave),"$$scope"in l&&t(13,c=l.$$scope)},[h,b,A,C,R,q,M,n,o,u,_,s,a,c,r,j]}class de extends T{constructor(e){super(),S(this,e,ie,ne,X,{scale:11,pointing:7,pointerDown:8,pointerX:9,pointerY:10,cancelOnLeave:12})}}const oe=i=>{const e=[];let t,r=!0,c="",s="";const n=i.length;for(let o=0;o<n;o++)t=i[o],t===" "?c&&s?(e.push(Number(c),Number(s)),c="",s="",r=!0):(c="",s=""):t===","?r=!1:r?c+=t:s+=t;return c&&s&&e.push(Number(c),Number(s)),e},be=i=>i.pointsData||(i.pointsData=oe(i.points)),Y="#666666",v=3,w="none",ye="#c7beef",le="#75a6d7",Le=()=>({id:crypto.randomUUID(),type:"polyline",points:""}),ge=(i=0,e=0,t=25,r=le)=>({id:crypto.randomUUID(),type:"circle",cx:i,cy:e,r:t,enableFill:!0,fill:r}),se={x:i=>P(i,1),y:i=>P(i,1)},ke=(i,e)=>i.update(t=>{var c;const r={...t};for(const s in e){const n=e[s];if(n===void 0)continue;const o=se[s],u=o?o(n):n;if(u!==void 0)if(s==="appendPoints"){const _=r;for(let a=0;a<n.length;a+=2)_.points+=" "+n[a]+","+n[a+1],(c=_.pointsData)==null||c.push(n[a],n[a+1])}else r[s]=u}return r});function re(i){const e=i.slice(),t=e[1];return e[10]=t.points,e[11]=t.stroke,e[12]=t.strokeWidth,e}function ce(i){const e=i.slice(),t=e[1];return e[7]=t.cx,e[8]=t.cy,e[9]=t.r,e}function F(i){let e;function t(n,o){return n[1].type==="circle"?O:n[1].type==="polyline"?N:fe}function r(n,o){return o===O?ce(n):o===N?re(n):n}let c=t(i),s=c(r(i,c));return{c(){s.c(),e=k()},l(n){s.l(n),e=k()},m(n,o){s.m(n,o),g(n,e,o)},p(n,o){c===(c=t(n))&&s?s.p(r(n,c),o):(s.d(1),s=c(r(n,c)),s&&(s.c(),s.m(e.parentNode,e)))},d(n){n&&d(e),s.d(n)}}}function fe(i){return{c:m,l:m,m,p:m,d:m}}function N(i){let e,t,r,c,s;return{c(){e=K("polyline"),this.h()},l(n){e=U(n,"polyline",{points:!0,pathLength:!0,fill:!0,opacity:!0,stroke:!0,"stroke-width":!0}),D(e).forEach(d),this.h()},h(){f(e,"points",t=i[10]),f(e,"pathLength",i[5]),f(e,"fill",r=i[4]?i[3]??w:"none"),f(e,"opacity",i[2]),f(e,"stroke",c=i[11]??Y),f(e,"stroke-width",s=i[12]??v)},m(n,o){g(n,e,o)},p(n,o){o&2&&t!==(t=n[10])&&f(e,"points",t),o&32&&f(e,"pathLength",n[5]),o&24&&r!==(r=n[4]?n[3]??w:"none")&&f(e,"fill",r),o&4&&f(e,"opacity",n[2]),o&2&&c!==(c=n[11]??Y)&&f(e,"stroke",c),o&2&&s!==(s=n[12]??v)&&f(e,"stroke-width",s)},d(n){n&&d(e)}}}function O(i){let e,t,r,c,s;return{c(){e=K("circle"),this.h()},l(n){e=U(n,"circle",{cx:!0,cy:!0,r:!0,pathLength:!0,fill:!0,opacity:!0}),D(e).forEach(d),this.h()},h(){f(e,"cx",t=i[7]),f(e,"cy",r=i[8]),f(e,"r",c=i[9]),f(e,"pathLength",i[5]),f(e,"fill",s=i[4]?i[3]||"red":"none"),f(e,"opacity",i[2])},m(n,o){g(n,e,o)},p(n,o){o&2&&t!==(t=n[7])&&f(e,"cx",t),o&2&&r!==(r=n[8])&&f(e,"cy",r),o&2&&c!==(c=n[9])&&f(e,"r",c),o&32&&f(e,"pathLength",n[5]),o&24&&s!==(s=n[4]?n[3]||"red":"none")&&f(e,"fill",s),o&4&&f(e,"opacity",n[2])},d(n){n&&d(e)}}}function ue(i){let e,t=!i[6]&&F(i);return{c(){t&&t.c(),e=k()},l(r){t&&t.l(r),e=k()},m(r,c){t&&t.m(r,c),g(r,e,c)},p(r,[c]){r[6]?t&&(t.d(1),t=null):t?t.p(r,c):(t=F(r),t.c(),t.m(e.parentNode,e))},i:m,o:m,d(r){r&&d(e),t&&t.d(r)}}}function ae(i,e,t){let r,c,s,n,o,u,_=m,a=()=>(_(),_=$(p,b=>t(1,u=b)),p);i.$$.on_destroy.push(()=>_());let{item:p}=e;return a(),i.$$set=b=>{"item"in b&&a(t(0,p=b.item))},i.$$.update=()=>{i.$$.dirty&2&&t(6,{hidden:r,pathLength:c,enableFill:s,fill:n,opacity:o}=u,r,(t(5,c),t(1,u)),(t(4,s),t(1,u)),(t(3,n),t(1,u)),(t(2,o),t(1,u)))},[p,u,o,n,s,c,r]}class De extends T{constructor(e){super(),S(this,e,ae,ue,X,{item:0})}}export{w as D,De as M,de as S,ye as a,v as b,Le as c,ge as d,Y as e,se as p,be as t,ke as u};
