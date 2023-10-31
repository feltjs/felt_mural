import{n as ze,e as k,s as R,t as ee,c as w,a as B,d as v,f as W,b as te,m as we,o as _,y as oe,i as q,g as o,I as $,h as Se,j as Ae,r as Re,a8 as ct,J as Fe,aa as Oe,E as Te,A as De,ad as It,G as ue,ae as _e,ab as $e,K as dt,L as mt,af as Le,ag as xe}from"../chunks/scheduler.27454928.js";import{S as We,i as He,g as ht,e as pt,a as ce,t as de,c as be,b as ge,m as ye,d as Ie,h as fe}from"../chunks/index.d1757bfb.js";import{r as ae,S as kt,T as wt,C as Et}from"../chunks/Scaled.6314a6f6.js";import{a as Lt}from"../chunks/tome.f774b283.js";import{g as Tt}from"../chunks/globals.7f7f1b26.js";import{e as Me,u as Qe,o as vt,d as St}from"../chunks/each.2d894c8c.js";import{w as et}from"../chunks/index.a6a5cb79.js";import{D as At,a as Dt,t as Je,b as Ve,S as Mt,u as Nt,p as tt,c as jt,d as Ct,M as Bt,e as lt}from"../chunks/Mural_Item.20269c57.js";function Ut(l){let t;return{c(){t=ee("👁")},l(e){t=te(e,"👁")},m(e,i){q(e,t,i)},d(e){e&&v(t)}}}function Pt(l){let t;return{c(){t=ee("•")},l(e){t=te(e,"•")},m(e,i){q(e,t,i)},d(e){e&&v(t)}}}function Ot(l){let t,e,i,d,n,c="stroke-width",a,s,u=Je(l[4]).length+"",m,h,f,p,S,P="points",U,D,I,j,G,O,z,F,V,b,E,g,T,y,Q,L,N=(!l[3]||l[7]==="none")&&it();return{c(){t=k("label"),e=k("input"),d=R(),n=k("small"),n.textContent=c,a=R(),s=k("span"),m=ee(u),h=R(),f=k("br"),p=R(),S=k("small"),S.textContent=P,U=R(),D=k("div"),I=k("div"),j=k("input"),O=R(),z=k("label"),F=k("input"),E=R(),g=k("small"),N&&N.c(),T=ee("fill"),this.h()},l(A){t=w(A,"LABEL",{class:!0});var H=B(t);e=w(H,"INPUT",{class:!0,type:!0}),d=W(H),n=w(H,"SMALL",{"data-svelte-h":!0}),we(n)!=="svelte-1jo13fj"&&(n.textContent=c),H.forEach(v),a=W(A),s=w(A,"SPAN",{class:!0});var x=B(s);m=te(x,u),h=W(x),f=w(x,"BR",{}),p=W(x),S=w(x,"SMALL",{"data-svelte-h":!0}),we(S)!=="svelte-les35l"&&(S.textContent=P),x.forEach(v),U=W(A),D=w(A,"DIV",{class:!0});var ie=B(D);I=w(ie,"DIV",{class:!0});var le=B(I);j=w(le,"INPUT",{type:!0,title:!0,class:!0}),le.forEach(v),O=W(ie),z=w(ie,"LABEL",{title:!0,class:!0});var ne=B(z);F=w(ne,"INPUT",{class:!0,type:!0}),E=W(ne),g=w(ne,"SMALL",{});var Z=B(g);N&&N.l(Z),T=te(Z,"fill"),Z.forEach(v),ne.forEach(v),ie.forEach(v),this.h()},h(){_(e,"class","item-input svelte-lx0erj"),_(e,"type","number"),e.value=i=l[4].strokeWidth??Ve,_(t,"class","svelte-lx0erj"),_(s,"class","content svelte-lx0erj"),_(j,"type","checkbox"),j.checked=l[3],_(j,"title",G="the "+l[4].type+"'s fill is "+(l[4].enableFill?"enabled":"disabled")),_(j,"class","svelte-lx0erj"),_(I,"class","togglable-checkbox-wrapper svelte-lx0erj"),_(F,"class","item-input svelte-lx0erj"),_(F,"type","color"),F.disabled=V=!l[3],F.value=b=l[7]==="none"?"#000000":l[7],_(z,"title",y="modify the "+l[4].type+"'s fill color"),_(z,"class","svelte-lx0erj"),_(D,"class","togglable svelte-lx0erj")},m(A,H){q(A,t,H),o(t,e),o(t,d),o(t,n),q(A,a,H),q(A,s,H),o(s,m),o(s,h),o(s,f),o(s,p),o(s,S),q(A,U,H),q(A,D,H),o(D,I),o(I,j),o(D,O),o(D,z),o(z,F),o(z,E),o(z,g),N&&N.m(g,null),o(g,T),Q||(L=[$(e,"input",l[19]),$(j,"input",l[20]),$(F,"input",l[21])],Q=!0)},p(A,H){H&16&&i!==(i=A[4].strokeWidth??Ve)&&e.value!==i&&(e.value=i),H&16&&u!==(u=Je(A[4]).length+"")&&Se(m,u),H&8&&(j.checked=A[3]),H&16&&G!==(G="the "+A[4].type+"'s fill is "+(A[4].enableFill?"enabled":"disabled"))&&_(j,"title",G),H&8&&V!==(V=!A[3])&&(F.disabled=V),H&128&&b!==(b=A[7]==="none"?"#000000":A[7])&&(F.value=b),!A[3]||A[7]==="none"?N||(N=it(),N.c(),N.m(g,T)):N&&(N.d(1),N=null),H&16&&y!==(y="modify the "+A[4].type+"'s fill color")&&_(z,"title",y)},d(A){A&&(v(t),v(a),v(s),v(U),v(D)),N&&N.d(),Q=!1,Re(L)}}}function Ft(l){let t,e,i,d,n,c="x",a,s,u,m,h,f,p,S="y",P,U,D,I,j,G,O,z="radius",F,V,b,E,g,T,y,Q,L,N,A,H,x,ie,le,ne,Z,he,K=(!l[3]||l[7]==="none")&&nt();return{c(){t=k("label"),e=k("input"),d=R(),n=k("small"),n.textContent=c,s=R(),u=k("label"),m=k("input"),f=R(),p=k("small"),p.textContent=S,U=R(),D=k("label"),I=k("input"),G=R(),O=k("small"),O.textContent=z,V=R(),b=k("div"),E=R(),g=k("div"),T=k("div"),y=k("input"),L=R(),N=k("label"),A=k("input"),ie=R(),le=k("small"),K&&K.c(),ne=ee("fill"),this.h()},l(C){t=w(C,"LABEL",{title:!0,class:!0});var Y=B(t);e=w(Y,"INPUT",{class:!0,type:!0}),d=W(Y),n=w(Y,"SMALL",{"data-svelte-h":!0}),we(n)!=="svelte-il6oia"&&(n.textContent=c),Y.forEach(v),s=W(C),u=w(C,"LABEL",{title:!0,class:!0});var se=B(u);m=w(se,"INPUT",{class:!0,type:!0}),f=W(se),p=w(se,"SMALL",{"data-svelte-h":!0}),we(p)!=="svelte-urgvm9"&&(p.textContent=S),se.forEach(v),U=W(C),D=w(C,"LABEL",{title:!0,class:!0});var r=B(D);I=w(r,"INPUT",{class:!0,type:!0}),G=W(r),O=w(r,"SMALL",{"data-svelte-h":!0}),we(O)!=="svelte-1uimsee"&&(O.textContent=z),r.forEach(v),V=W(C),b=w(C,"DIV",{}),B(b).forEach(v),E=W(C),g=w(C,"DIV",{class:!0});var J=B(g);T=w(J,"DIV",{class:!0});var me=B(T);y=w(me,"INPUT",{type:!0,title:!0,class:!0}),me.forEach(v),L=W(J),N=w(J,"LABEL",{class:!0});var pe=B(N);A=w(pe,"INPUT",{class:!0,type:!0}),ie=W(pe),le=w(pe,"SMALL",{});var ke=B(le);K&&K.l(ke),ne=te(ke,"fill"),ke.forEach(v),pe.forEach(v),J.forEach(v),this.h()},h(){_(e,"class","item-input svelte-lx0erj"),_(e,"type","number"),e.value=i=l[4].cx,_(t,"title",a="modify the "+l[4].type+"'s x position"),_(t,"class","svelte-lx0erj"),_(m,"class","item-input svelte-lx0erj"),_(m,"type","number"),m.value=h=l[4].cy,_(u,"title",P="modify the "+l[4].type+"'s y position"),_(u,"class","svelte-lx0erj"),_(I,"class","item-input svelte-lx0erj"),_(I,"type","number"),I.value=j=l[4].r,_(D,"title",F="modify the "+l[4].type+"'s radius"),_(D,"class","svelte-lx0erj"),Te(b,"flex","1"),_(y,"type","checkbox"),y.checked=l[3],_(y,"title",Q="the "+l[4].type+"'s fill is "+(l[4].enableFill?"enabled":"disabled")),_(y,"class","svelte-lx0erj"),_(T,"class","togglable-checkbox-wrapper svelte-lx0erj"),_(A,"class","item-input svelte-lx0erj"),_(A,"type","color"),A.disabled=H=!l[3],A.value=x=l[7]==="none"?"#000000":l[7],_(N,"class","svelte-lx0erj"),_(g,"class","togglable svelte-lx0erj")},m(C,Y){q(C,t,Y),o(t,e),o(t,d),o(t,n),q(C,s,Y),q(C,u,Y),o(u,m),o(u,f),o(u,p),q(C,U,Y),q(C,D,Y),o(D,I),o(D,G),o(D,O),q(C,V,Y),q(C,b,Y),q(C,E,Y),q(C,g,Y),o(g,T),o(T,y),o(g,L),o(g,N),o(N,A),o(N,ie),o(N,le),K&&K.m(le,null),o(le,ne),Z||(he=[$(e,"input",l[14]),$(m,"input",l[15]),$(I,"input",l[16]),$(y,"input",l[17]),$(A,"input",l[18])],Z=!0)},p(C,Y){Y&16&&i!==(i=C[4].cx)&&e.value!==i&&(e.value=i),Y&16&&a!==(a="modify the "+C[4].type+"'s x position")&&_(t,"title",a),Y&16&&h!==(h=C[4].cy)&&m.value!==h&&(m.value=h),Y&16&&P!==(P="modify the "+C[4].type+"'s y position")&&_(u,"title",P),Y&16&&j!==(j=C[4].r)&&I.value!==j&&(I.value=j),Y&16&&F!==(F="modify the "+C[4].type+"'s radius")&&_(D,"title",F),Y&8&&(y.checked=C[3]),Y&16&&Q!==(Q="the "+C[4].type+"'s fill is "+(C[4].enableFill?"enabled":"disabled"))&&_(y,"title",Q),Y&8&&H!==(H=!C[3])&&(A.disabled=H),Y&128&&x!==(x=C[7]==="none"?"#000000":C[7])&&(A.value=x),!C[3]||C[7]==="none"?K||(K=nt(),K.c(),K.m(le,ne)):K&&(K.d(1),K=null)},d(C){C&&(v(t),v(s),v(u),v(U),v(D),v(V),v(b),v(E),v(g)),K&&K.d(),Z=!1,Re(he)}}}function it(l){let t;return{c(){t=ee(`no
					`)},l(e){t=te(e,`no
					`)},m(e,i){q(e,t,i)},d(e){e&&v(t)}}}function nt(l){let t;return{c(){t=ee(`no
					`)},l(e){t=te(e,`no
					`)},m(e,i){q(e,t,i)},d(e){e&&v(t)}}}function Vt(l){let t,e,i,d,n=l[4].type+"",c,a,s,u,m,h,f,p,S=ae(l[6],2)+"",P,U,D,I,j="🗙",G,O;function z(T,y){return T[8]?Pt:Ut}let F=z(l),V=F(l);function b(T,y){if(T[4].type==="circle")return Ft;if(T[4].type==="polyline")return Ot}let E=b(l),g=E&&E(l);return{c(){t=k("li"),e=k("button"),V.c(),i=R(),d=k("div"),c=ee(n),a=R(),s=k("label"),u=k("input"),h=R(),f=k("small"),p=ee("opacity: "),P=ee(S),U=R(),g&&g.c(),D=R(),I=k("button"),I.textContent=j,this.h()},l(T){t=w(T,"LI",{class:!0,"aria-hidden":!0});var y=B(t);e=w(y,"BUTTON",{class:!0});var Q=B(e);V.l(Q),Q.forEach(v),i=W(y),d=w(y,"DIV",{class:!0});var L=B(d);c=te(L,n),L.forEach(v),a=W(y),s=w(y,"LABEL",{class:!0});var N=B(s);u=w(N,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0,title:!0}),h=W(N),f=w(N,"SMALL",{});var A=B(f);p=te(A,"opacity: "),P=te(A,S),A.forEach(v),N.forEach(v),U=W(y),g&&g.l(y),D=W(y),I=w(y,"BUTTON",{class:!0,"data-svelte-h":!0}),we(I)!=="svelte-g330tp"&&(I.textContent=j),y.forEach(v),this.h()},h(){_(e,"class","icon_button plain"),oe(e,"selected",l[8]),_(d,"class","type svelte-lx0erj"),_(u,"class","item-input svelte-lx0erj"),_(u,"type","range"),_(u,"min",0),_(u,"max",1),_(u,"step",.01),u.value=l[6],_(u,"title",m="modify the "+l[4].type+"'s opacity"),_(s,"class","svelte-lx0erj"),_(I,"class","icon_button plain"),_(t,"class","mural-item-list-item selectable svelte-lx0erj"),_(t,"aria-hidden",""),oe(t,"hidden",l[8]),oe(t,"selected",l[9])},m(T,y){q(T,t,y),o(t,e),V.m(e,null),o(t,i),o(t,d),o(d,c),o(t,a),o(t,s),o(s,u),o(s,h),o(s,f),o(f,p),o(f,P),o(t,U),g&&g.m(t,null),o(t,D),o(t,I),G||(O=[$(e,"click",l[12]),$(u,"input",l[13]),$(I,"click",l[22]),$(t,"click",l[23])],G=!0)},p(T,[y]){F!==(F=z(T))&&(V.d(1),V=F(T),V&&(V.c(),V.m(e,null))),y&256&&oe(e,"selected",T[8]),y&16&&n!==(n=T[4].type+"")&&Se(c,n),y&64&&(u.value=T[6]),y&16&&m!==(m="modify the "+T[4].type+"'s opacity")&&_(u,"title",m),y&64&&S!==(S=ae(T[6],2)+"")&&Se(P,S),E===(E=b(T))&&g?g.p(T,y):(g&&g.d(1),g=E&&E(T),g&&(g.c(),g.m(t,D))),y&256&&oe(t,"hidden",T[8]),y&512&&oe(t,"selected",T[9])},i:Ae,o:Ae,d(T){T&&v(t),V.d(),g&&g.d(),G=!1,Re(O)}}}function zt(l,t,e){let i,d,n,c,a,s,u,m,h=Ae,f=()=>(h(),h=Fe(U,L=>e(4,m=L)),U),p,S=Ae,P=()=>(S(),S=Fe(D,L=>e(5,p=L)),D);l.$$.on_destroy.push(()=>h()),l.$$.on_destroy.push(()=>S());let{item:U}=t;f();let{itemSelection:D}=t;P();const I=ct(),j=()=>I("action",{type:"updateItem",id:m.id,data:{hidden:!m.hidden}}),G=L=>I("action",{type:"updateItem",id:m.id,data:{opacity:Number(L.currentTarget.value)}}),O=L=>I("action",{type:"updateItem",id:m.id,data:{cx:Number(L.currentTarget.value)}}),z=L=>I("action",{type:"updateItem",id:m.id,data:{cy:Number(L.currentTarget.value)}}),F=L=>I("action",{type:"updateItem",id:m.id,data:{r:Number(L.currentTarget.value)}}),V=L=>I("action",{type:"updateItem",id:m.id,data:{enableFill:L.currentTarget.checked}}),b=L=>I("action",{type:"updateItem",id:m.id,data:{fill:L.currentTarget.value}}),E=L=>I("action",{type:"updateItem",id:m.id,data:{strokeWidth:Number(L.currentTarget.value)}}),g=L=>I("action",{type:"updateItem",id:m.id,data:{enableFill:L.currentTarget.checked,fill:n??(L.currentTarget.checked?Dt:void 0)}}),T=L=>I("action",{type:"updateItem",id:m.id,data:{fill:L.currentTarget.value}}),y=()=>I("action",{type:"removeItem",id:m.id}),Q=()=>Oe(D,p=U,p);return l.$$set=L=>{"item"in L&&f(e(0,U=L.item)),"itemSelection"in L&&P(e(1,D=L.itemSelection))},l.$$.update=()=>{l.$$.dirty&33&&e(9,i=p===U),l.$$.dirty&16&&e(3,{enableFill:d,fill:n,hidden:c,opacity:a}=m,d,(e(2,n),e(4,m)),(e(8,c),e(4,m)),(e(11,a),e(4,m))),l.$$.dirty&12&&e(7,s=d?n??At:void 0),l.$$.dirty&2048&&e(6,u=a??1)},[U,D,n,d,m,p,u,s,c,i,I,a,j,G,O,z,F,V,b,E,g,T,y,Q]}class Rt extends We{constructor(t){super(),He(this,t,zt,Vt,ze,{item:0,itemSelection:1})}}function st(l,t,e){const i=l.slice();return i[4]=t[e],i}function at(l,t){let e,i,d;return i=new Rt({props:{item:t[4],itemSelection:t[0]}}),i.$on("action",t[3]),{key:l,first:null,c(){e=De(),be(i.$$.fragment),this.h()},l(n){e=De(),ge(i.$$.fragment,n),this.h()},h(){this.first=e},m(n,c){q(n,e,c),ye(i,n,c),d=!0},p(n,c){t=n;const a={};c&2&&(a.item=t[4]),c&1&&(a.itemSelection=t[0]),i.$set(a)},i(n){d||(ce(i.$$.fragment,n),d=!0)},o(n){de(i.$$.fragment,n),d=!1},d(n){n&&v(e),Ie(i,n)}}}function Wt(l){let t,e=[],i=new Map,d,n=Me(l[1]);const c=a=>a[4];for(let a=0;a<n.length;a+=1){let s=st(l,n,a),u=c(s);i.set(u,e[a]=at(u,s))}return{c(){t=k("ul");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=w(a,"UL",{class:!0});var s=B(t);for(let u=0;u<e.length;u+=1)e[u].l(s);s.forEach(v),this.h()},h(){_(t,"class","width_md svelte-1gkqiw5")},m(a,s){q(a,t,s);for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(t,null);d=!0},p(a,[s]){s&3&&(n=Me(a[1]),ht(),e=Qe(e,s,c,1,a,n,i,t,vt,at,null,st),pt())},i(a){if(!d){for(let s=0;s<n.length;s+=1)ce(e[s]);d=!0}},o(a){for(let s=0;s<e.length;s+=1)de(e[s]);d=!1},d(a){a&&v(t);for(let s=0;s<e.length;s+=1)e[s].d()}}}function Ht(l,t,e){let i,{items:d}=t,{itemSelection:n}=t;function c(a){It.call(this,l,a)}return l.$$set=a=>{"items"in a&&e(2,d=a.items),"itemSelection"in a&&e(0,n=a.itemSelection)},l.$$.update=()=>{l.$$.dirty&4&&e(1,i=d.slice().reverse())},[n,i,d,c]}class Yt extends We{constructor(t){super(),He(this,t,Ht,Wt,ze,{items:2,itemSelection:0})}}const{Map:bt}=Tt;function rt(l,t,e){const i=l.slice();return i[38]=t[e],i}function ot(l,t,e){const i=l.slice();return i[41]=t[e],i}function ut(l,t){let e,i,d;return i=new Bt({props:{item:t[41]}}),{key:l,first:null,c(){e=De(),be(i.$$.fragment),this.h()},l(n){e=De(),ge(i.$$.fragment,n),this.h()},h(){this.first=e},m(n,c){q(n,e,c),ye(i,n,c),d=!0},p(n,c){t=n;const a={};c[0]&8&&(a.item=t[41]),i.$set(a)},i(n){d||(ce(i.$$.fragment,n),d=!0)},o(n){de(i.$$.fragment,n),d=!1},d(n){n&&v(e),Ie(i,n)}}}function _t(l){let t,e,i,d,n;return{c(){t=dt("line"),this.h()},l(c){t=mt(c,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),B(t).forEach(v),this.h()},h(){_(t,"x1",e=l[13].at(-2)),_(t,"y1",i=l[13].at(-1)),_(t,"x2",l[1]),_(t,"y2",l[2]),_(t,"stroke",d=l[11].stroke??lt),_(t,"stroke-width",n=l[11].strokeWidth??Ve)},m(c,a){q(c,t,a)},p(c,a){a[0]&8192&&e!==(e=c[13].at(-2))&&_(t,"x1",e),a[0]&8192&&i!==(i=c[13].at(-1))&&_(t,"y1",i),a[0]&2&&_(t,"x2",c[1]),a[0]&4&&_(t,"y2",c[2]),a[0]&2048&&d!==(d=c[11].stroke??lt)&&_(t,"stroke",d),a[0]&2048&&n!==(n=c[11].strokeWidth??Ve)&&_(t,"stroke-width",n)},d(c){c&&v(t)}}}function Gt(l){var u,m;let t,e=[],i=new bt,d,n,c=Me(l[3]);const a=h=>h[41];for(let h=0;h<c.length;h+=1){let f=ot(l,c,h),p=a(f);i.set(p,e[h]=ut(p,f))}let s=l[4]&&!l[0]&&l[6]==="polyline"&&((u=l[11])==null?void 0:u.type)==="polyline"&&((m=l[13])==null?void 0:m.length)&&_t(l);return{c(){t=dt("svg");for(let h=0;h<e.length;h+=1)e[h].c();d=De(),s&&s.c(),this.h()},l(h){t=mt(h,"svg",{class:!0});var f=B(t);for(let p=0;p<e.length;p+=1)e[p].l(f);d=De(),s&&s.l(f),f.forEach(v),this.h()},h(){_(t,"class","svelte-tev7zh")},m(h,f){q(h,t,f);for(let p=0;p<e.length;p+=1)e[p]&&e[p].m(t,null);o(t,d),s&&s.m(t,null),n=!0},p(h,f){var p,S;f[0]&8&&(c=Me(h[3]),ht(),e=Qe(e,f,a,1,h,c,i,t,vt,ut,d,ot),pt()),h[4]&&!h[0]&&h[6]==="polyline"&&((p=h[11])==null?void 0:p.type)==="polyline"&&((S=h[13])!=null&&S.length)?s?s.p(h,f):(s=_t(h),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i(h){if(!n){for(let f=0;f<c.length;f+=1)ce(e[f]);n=!0}},o(h){for(let f=0;f<e.length;f+=1)de(e[f]);n=!1},d(h){h&&v(t);for(let f=0;f<e.length;f+=1)e[f].d();s&&s.d()}}}function Kt(l){let t,e,i,d,n,c;function a(f){l[24](f)}function s(f){l[25](f)}function u(f){l[26](f)}function m(f){l[27](f)}let h={scale:l[5],cancel_on_leave:!1,$$slots:{default:[Gt]},$$scope:{ctx:l}};return l[4]!==void 0&&(h.pointing=l[4]),l[0]!==void 0&&(h.pointer_down=l[0]),l[1]!==void 0&&(h.pointer_x=l[1]),l[2]!==void 0&&(h.pointer_y=l[2]),t=new Mt({props:h}),ue.push(()=>fe(t,"pointing",a)),ue.push(()=>fe(t,"pointer_down",s)),ue.push(()=>fe(t,"pointer_x",u)),ue.push(()=>fe(t,"pointer_y",m)),{c(){be(t.$$.fragment)},l(f){ge(t.$$.fragment,f)},m(f,p){ye(t,f,p),c=!0},p(f,p){const S={};p[0]&32&&(S.scale=f[5]),p[0]&10335|p[1]&8192&&(S.$$scope={dirty:p,ctx:f}),!e&&p[0]&16&&(e=!0,S.pointing=f[4],_e(()=>e=!1)),!i&&p[0]&1&&(i=!0,S.pointer_down=f[0],_e(()=>i=!1)),!d&&p[0]&2&&(d=!0,S.pointer_x=f[1],_e(()=>d=!1)),!n&&p[0]&4&&(n=!0,S.pointer_y=f[2],_e(()=>n=!1)),t.$set(S)},i(f){c||(ce(t.$$.fragment,f),c=!0)},o(f){de(t.$$.fragment,f),c=!1},d(f){Ie(t,f)}}}function ft(l,t){let e,i=t[38]+"",d,n,c,a;function s(){return t[29](t[38])}return{key:l,first:null,c(){e=k("button"),d=ee(i),n=R(),this.h()},l(u){e=w(u,"BUTTON",{});var m=B(e);d=te(m,i),n=W(m),m.forEach(v),this.h()},h(){oe(e,"selected",t[15]&&t[6]===t[38]),this.first=e},m(u,m){q(u,e,m),o(e,d),o(e,n),c||(a=$(e,"click",s),c=!0)},p(u,m){t=u,m[0]&512&&i!==(i=t[38]+"")&&Se(d,i),m[0]&33344&&oe(e,"selected",t[15]&&t[6]===t[38])},d(u){u&&v(e),c=!1,a()}}}function qt(l){let t,e,i,d,n,c,a,s=[],u=new bt,m,h,f,p,S,P,U=`${l[7]}px`,D=`${l[8]}px`,I,j,G;function O(b){l[28](b)}let z={width:l[7],height:l[8],$$slots:{default:[Kt]},$$scope:{ctx:l}};l[5]!==void 0&&(z.scale=l[5]),i=new kt({props:z}),ue.push(()=>fe(i,"scale",O));let F=Me(l[9]);const V=b=>b[38];for(let b=0;b<F.length;b+=1){let E=rt(l,F,b),g=V(E);u.set(g,s[b]=ft(g,E))}return P=new Yt({props:{items:l[3],itemSelection:l[10]}}),P.$on("action",l[31]),{c(){t=k("div"),e=k("div"),be(i.$$.fragment),n=R(),c=k("div"),a=k("div");for(let b=0;b<s.length;b+=1)s[b].c();m=R(),h=k("button"),f=ee("clear all"),S=R(),be(P.$$.fragment),this.h()},l(b){t=w(b,"DIV",{class:!0});var E=B(t);e=w(E,"DIV",{class:!0});var g=B(e);ge(i.$$.fragment,g),g.forEach(v),n=W(E),c=w(E,"DIV",{class:!0});var T=B(c);a=w(T,"DIV",{class:!0});var y=B(a);for(let L=0;L<s.length;L+=1)s[L].l(y);y.forEach(v),m=W(T),h=w(T,"BUTTON",{});var Q=B(h);f=te(Q,"clear all"),Q.forEach(v),T.forEach(v),S=W(E),ge(P.$$.fragment,E),E.forEach(v),this.h()},h(){_(e,"class","content svelte-tev7zh"),_(a,"class","row"),h.disabled=p=!l[3].length,_(c,"class","controls svelte-tev7zh"),_(t,"class","mural svelte-tev7zh"),oe(t,"active",l[0]),Te(t,"--width",U),Te(t,"--height",D)},m(b,E){q(b,t,E),o(t,e),ye(i,e,null),o(t,n),o(t,c),o(c,a);for(let g=0;g<s.length;g+=1)s[g]&&s[g].m(a,null);o(c,m),o(c,h),o(h,f),o(t,S),ye(P,t,null),I=!0,j||(G=$(h,"click",l[30]),j=!0)},p(b,E){const g={};E[0]&128&&(g.width=b[7]),E[0]&256&&(g.height=b[8]),E[0]&10367|E[1]&8192&&(g.$$scope={dirty:E,ctx:b}),!d&&E[0]&32&&(d=!0,g.scale=b[5],_e(()=>d=!1)),i.$set(g),E[0]&37440&&(F=Me(b[9]),s=Qe(s,E,V,1,b,F,u,a,St,ft,null,rt)),(!I||E[0]&8&&p!==(p=!b[3].length))&&(h.disabled=p);const T={};E[0]&8&&(T.items=b[3]),E[0]&1024&&(T.itemSelection=b[10]),P.$set(T),(!I||E[0]&1)&&oe(t,"active",b[0]),E[0]&128&&U!==(U=`${b[7]}px`)&&Te(t,"--width",U),E[0]&256&&D!==(D=`${b[8]}px`)&&Te(t,"--height",D)},i(b){I||(ce(i.$$.fragment,b),ce(P.$$.fragment,b),I=!0)},o(b){de(i.$$.fragment,b),de(P.$$.fragment,b),I=!1},d(b){b&&v(t),Ie(i);for(let E=0;E<s.length;E+=1)s[E].d();Ie(P),j=!1,G()}}}function Jt(l,t,e){let i,d,n,c,a=Ae,s=()=>(a(),a=Fe(d,r=>e(11,c=r)),d),u,m=Ae,h=()=>(m(),m=Fe(N,r=>e(12,u=r)),N);l.$$.on_destroy.push(()=>a()),l.$$.on_destroy.push(()=>m());const f=ct();let{items:p=[]}=t,{width:S}=t,{height:P}=t,{pointing:U=void 0}=t,{pointer_down:D=void 0}=t,{pointer_x:I=void 0}=t,{pointer_y:j=void 0}=t,{scale:G=void 0}=t;const O=()=>{const r=L==="pen"||L==="polyline"?jt():L==="circle"?Ct(I,j):null;return r||null};let{addItem:z=(r,J)=>r.concat(J)}=t,{updateItem:F=(r,J)=>Nt(r,J)}=t,{selectItemToDraw:V=r=>u||r.at(-1)}=t,{removeItem:b=(r,J)=>r.filter(me=>me!==J)}=t,{removeAllItems:E=r=>[]}=t;const g=new Map,T=r=>{switch(r.type){case"addItem":{const J=et(r.item);g.set(r.item.id,J),e(3,p=z(p,J,r.item.id));break}case"updateItem":{const J=g.get(r.id);if(!J)return;F(J,r.data);break}case"removeItem":{const J=g.get(r.id);if(!J)return;g.delete(r.id),e(3,p=b(p,J,r.id));break}case"removeAllItems":{g.clear(),e(3,p=E(p));break}}},y=r=>{f("action",r),T(r)};let{brushes:Q=["pen","polyline","circle"]}=t,{selectedBrush:L=Q[0]}=t,{itemSelection:N=et(null)}=t;h();let A=!1;const H=()=>{if(A||(e(23,A=!0),u))return;const r=O();r&&(y({type:"addItem",item:r}),L==="polyline"&&Oe(N,u=p.find(J=>$e(J).id===r.id)||null,u))},x=()=>{A&&e(23,A=!1)},ie=(r,J)=>{const me=V(p);if(!me)return;const{id:pe,type:ke}=$e(me);ke==="polyline"&&y({type:"updateItem",id:pe,data:{appendPoints:[tt.x(r),tt.y(J)]}})};function le(r){U=r,e(4,U)}function ne(r){D=r,e(0,D)}function Z(r){I=r,e(1,I)}function he(r){j=r,e(2,j)}function K(r){G=r,e(5,G)}const C=r=>{Oe(N,u=null,u),e(6,L=r)},Y=()=>{Oe(N,u=null,u),y({type:"removeAllItems"})},se=r=>y(r.detail);return l.$$set=r=>{"items"in r&&e(3,p=r.items),"width"in r&&e(7,S=r.width),"height"in r&&e(8,P=r.height),"pointing"in r&&e(4,U=r.pointing),"pointer_down"in r&&e(0,D=r.pointer_down),"pointer_x"in r&&e(1,I=r.pointer_x),"pointer_y"in r&&e(2,j=r.pointer_y),"scale"in r&&e(5,G=r.scale),"addItem"in r&&e(17,z=r.addItem),"updateItem"in r&&e(18,F=r.updateItem),"selectItemToDraw"in r&&e(19,V=r.selectItemToDraw),"removeItem"in r&&e(20,b=r.removeItem),"removeAllItems"in r&&e(21,E=r.removeAllItems),"brushes"in r&&e(9,Q=r.brushes),"selectedBrush"in r&&e(6,L=r.selectedBrush),"itemSelection"in r&&h(e(10,N=r.itemSelection))},l.$$.update=()=>{l.$$.dirty[0]&1&&(D?H():D===!1&&x()),l.$$.dirty[0]&8388614&&A&&I!==void 0&&j!==void 0&&ie(I,j),l.$$.dirty[0]&4096&&e(15,i=u===null),l.$$.dirty[0]&4096&&s(e(14,d=u)),l.$$.dirty[0]&2048&&e(13,n=(c==null?void 0:c.type)==="polyline"?Je(c):void 0)},[D,I,j,p,U,G,L,S,P,Q,N,c,u,n,d,i,y,z,F,V,b,E,T,A,le,ne,Z,he,K,C,Y,se]}class Qt extends We{constructor(t){super(),He(this,t,Jt,qt,ze,{items:3,width:7,height:8,pointing:4,pointer_down:0,pointer_x:1,pointer_y:2,scale:5,addItem:17,updateItem:18,selectItemToDraw:19,removeItem:20,removeAllItems:21,handleAction:22,brushes:9,selectedBrush:6,itemSelection:10},null,[-1,-1])}get handleAction(){return this.$$.ctx[22]}}function Xt(l){let t,e,i,d,n,c,a,s,u,m,h,f,p,S,P,U,D="<code>--mural_bg</code>",I,j,G,O,z,F,V,b=ae(l[0],1)+"",E,g,T,y,Q,L,N,A,H,x=ae(l[1],1)+"",ie,le,ne,Z,he,K,C,Y,se,r,J;function me(M){l[10](M)}function pe(M){l[11](M)}function ke(M){l[12](M)}function gt(M){l[13](M)}function yt(M){l[14](M)}let Ee={width:l[0],height:l[1]};return l[7]!==void 0&&(Ee.items=l[7]),l[3]!==void 0&&(Ee.scale=l[3]),l[4]!==void 0&&(Ee.pointer_down=l[4]),l[5]!==void 0&&(Ee.pointer_x=l[5]),l[6]!==void 0&&(Ee.pointer_y=l[6]),e=new Qt({props:Ee}),ue.push(()=>fe(e,"items",me)),ue.push(()=>fe(e,"scale",pe)),ue.push(()=>fe(e,"pointer_down",ke)),ue.push(()=>fe(e,"pointer_x",gt)),ue.push(()=>fe(e,"pointer_y",yt)),m=new Et({props:{content:`<Mural
	width="${l[0]}px"
	height="${l[1]}px"
	scale={${l[3]&&ae(l[3],3)}}
	pointer_x={${l[5]&&ae(l[5],1)}}
	pointer_y={${l[6]&&ae(l[6],1)}}
	pointer_down={${l[4]}}
>
	<Mural_Item_List
		items={[ ... ]}
	/>
</Mural>`}}),{c(){t=k("div"),be(e.$$.fragment),s=R(),u=k("section"),be(m.$$.fragment),h=R(),f=k("section"),p=k("form"),S=k("fieldset"),P=k("label"),U=k("div"),U.innerHTML=D,I=R(),j=k("input"),G=R(),O=k("label"),z=k("div"),F=ee("width "),V=k("code"),E=ee(b),g=ee("px"),T=R(),y=k("input"),Q=R(),L=k("label"),N=k("div"),A=ee("height "),H=k("code"),ie=ee(x),le=ee("px"),ne=R(),Z=k("input"),he=R(),K=k("button"),C=ee("reset settings"),this.h()},l(M){t=w(M,"DIV",{class:!0});var X=B(t);ge(e.$$.fragment,X),s=W(X),u=w(X,"SECTION",{class:!0});var re=B(u);ge(m.$$.fragment,re),re.forEach(v),h=W(X),f=w(X,"SECTION",{class:!0});var Ne=B(f);p=w(Ne,"FORM",{});var Xe=B(p);S=w(Xe,"FIELDSET",{});var ve=B(S);P=w(ve,"LABEL",{});var Be=B(P);U=w(Be,"DIV",{class:!0,"data-svelte-h":!0}),we(U)!=="svelte-iv5je9"&&(U.innerHTML=D),I=W(Be),j=w(Be,"INPUT",{type:!0}),Be.forEach(v),G=W(ve),O=w(ve,"LABEL",{});var Ue=B(O);z=w(Ue,"DIV",{class:!0});var Ye=B(z);F=te(Ye,"width "),V=w(Ye,"CODE",{});var Ge=B(V);E=te(Ge,b),g=te(Ge,"px"),Ge.forEach(v),Ye.forEach(v),T=W(Ue),y=w(Ue,"INPUT",{type:!0,min:!0,max:!0}),Ue.forEach(v),Q=W(ve),L=w(ve,"LABEL",{});var Pe=B(L);N=w(Pe,"DIV",{class:!0});var Ke=B(N);A=te(Ke,"height "),H=w(Ke,"CODE",{});var qe=B(H);ie=te(qe,x),le=te(qe,"px"),qe.forEach(v),Ke.forEach(v),ne=W(Pe),Z=w(Pe,"INPUT",{type:!0,min:!0,max:!0}),Pe.forEach(v),he=W(ve),K=w(ve,"BUTTON",{type:!0,class:!0});var Ze=B(K);C=te(Ze,"reset settings"),Ze.forEach(v),ve.forEach(v),Xe.forEach(v),Ne.forEach(v),X.forEach(v),this.h()},h(){_(u,"class","svelte-17r4wzu"),_(U,"class","title"),_(j,"type","color"),_(z,"class","title"),_(y,"type","range"),_(y,"min",0),_(y,"max",je*2),_(N,"class","title"),_(Z,"type","range"),_(Z,"min",0),_(Z,"max",Ce),_(K,"type","button"),K.disabled=Y=l[4]===void 0&&l[5]===void 0&&l[6]===void 0&&l[0]===je&&l[1]===Ce&&l[2]===void 0,_(K,"class","svelte-17r4wzu"),_(f,"class","markup svelte-17r4wzu"),_(t,"class","box width_full"),Te(t,"--mural_bg",xt)},m(M,X){q(M,t,X),ye(e,t,null),o(t,s),o(t,u),ye(m,u,null),o(t,h),o(t,f),o(f,p),o(p,S),o(S,P),o(P,U),o(P,I),o(P,j),Le(j,l[2]),o(S,G),o(S,O),o(O,z),o(z,F),o(z,V),o(V,E),o(V,g),o(O,T),o(O,y),Le(y,l[0]),o(S,Q),o(S,L),o(L,N),o(N,A),o(N,H),o(H,ie),o(H,le),o(L,ne),o(L,Z),Le(Z,l[1]),o(S,he),o(S,K),o(K,C),se=!0,r||(J=[$(j,"input",l[15]),$(y,"change",l[16]),$(y,"input",l[16]),$(Z,"change",l[17]),$(Z,"input",l[17]),$(K,"click",l[9])],r=!0)},p(M,X){const re={};X&1&&(re.width=M[0]),X&2&&(re.height=M[1]),!i&&X&128&&(i=!0,re.items=M[7],_e(()=>i=!1)),!d&&X&8&&(d=!0,re.scale=M[3],_e(()=>d=!1)),!n&&X&16&&(n=!0,re.pointer_down=M[4],_e(()=>n=!1)),!c&&X&32&&(c=!0,re.pointer_x=M[5],_e(()=>c=!1)),!a&&X&64&&(a=!0,re.pointer_y=M[6],_e(()=>a=!1)),e.$set(re);const Ne={};X&123&&(Ne.content=`<Mural
	width="${M[0]}px"
	height="${M[1]}px"
	scale={${M[3]&&ae(M[3],3)}}
	pointer_x={${M[5]&&ae(M[5],1)}}
	pointer_y={${M[6]&&ae(M[6],1)}}
	pointer_down={${M[4]}}
>
	<Mural_Item_List
		items={[ ... ]}
	/>
</Mural>`),m.$set(Ne),X&4&&Le(j,M[2]),(!se||X&1)&&b!==(b=ae(M[0],1)+"")&&Se(E,b),X&1&&Le(y,M[0]),(!se||X&2)&&x!==(x=ae(M[1],1)+"")&&Se(ie,x),X&2&&Le(Z,M[1]),(!se||X&119&&Y!==(Y=M[4]===void 0&&M[5]===void 0&&M[6]===void 0&&M[0]===je&&M[1]===Ce&&M[2]===void 0))&&(K.disabled=Y)},i(M){se||(ce(e.$$.fragment,M),ce(m.$$.fragment,M),se=!0)},o(M){de(e.$$.fragment,M),de(m.$$.fragment,M),se=!1},d(M){M&&v(t),Ie(e),Ie(m),r=!1,Re(J)}}}function Zt(l){let t,e;return t=new wt({props:{tome:l[8],$$slots:{default:[Xt]},$$scope:{ctx:l}}}),{c(){be(t.$$.fragment)},l(i){ge(t.$$.fragment,i)},m(i,d){ye(t,i,d),e=!0},p(i,[d]){const n={};d&262399&&(n.$$scope={dirty:d,ctx:i}),t.$set(n)},i(i){e||(ce(t.$$.fragment,i),e=!0)},o(i){de(t.$$.fragment,i),e=!1},d(i){Ie(t,i)}}}const $t="Mural",je=750,Ce=512,xt="var(--bg)";function el(l,t,e){const i=Lt($t);let d=je,n=Ce,c,a,s,u,m;const h=()=>{e(4,s=void 0),e(5,u=void 0),e(6,m=void 0),e(0,d=je),e(1,n=Ce),e(2,c=void 0)};let f=[];function p(O){f=O,e(7,f)}function S(O){a=O,e(3,a)}function P(O){s=O,e(4,s)}function U(O){u=O,e(5,u)}function D(O){m=O,e(6,m)}function I(){c=this.value,e(2,c)}function j(){d=xe(this.value),e(0,d)}function G(){n=xe(this.value),e(1,n)}return[d,n,c,a,s,u,m,f,i,h,p,S,P,U,D,I,j,G]}class ul extends We{constructor(t){super(),He(this,t,el,Zt,ze,{})}}export{ul as component};
