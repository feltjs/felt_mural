import{n as Fe,E as Ge,e as m,s as S,t as w,c as $,a as g,d,f as C,b,m as ze,o as v,C as u,i as A,g as a,ae as J,F as K,ad as Ye,h as H,r as Ze,af as We}from"../chunks/scheduler.a18b0e8d.js";import{S as je,i as Je,c as x,b as ee,m as te,a as se,t as le,d as ae,h as Ke}from"../chunks/index.a1abe0a0.js";import{T as Qe,r as V,C as ye,S as Be}from"../chunks/Scaled.f26c42db.js";import{a as xe}from"../chunks/tome.5b802c2f.js";function et(t){let e,l,f,o,h=`${t[0]}px`,_=`${t[1]}px`;return{c(){e=m("div"),l=w(t[0]),f=w("x"),o=w(t[1]),this.h()},l(n){e=$(n,"DIV",{class:!0});var i=g(e);l=b(i,t[0]),f=b(i,"x"),o=b(i,t[1]),i.forEach(d),this.h()},h(){v(e,"class","surface-wrapper svelte-1qdhm3w"),u(e,"--width",h),u(e,"--height",_),u(e,"box-shadow",t[2])},m(n,i){A(n,e,i),a(e,l),a(e,f),a(e,o)},p(n,i){i&1&&H(l,n[0]),i&2&&H(o,n[1]),i&1&&h!==(h=`${n[0]}px`)&&u(e,"--width",h),i&2&&_!==(_=`${n[1]}px`)&&u(e,"--height",_),i&4&&u(e,"box-shadow",n[2])},d(n){n&&d(e)}}}function tt(t){let e,l,f,o,h=`${t[1]}px`,_=`${t[0]}px`;return{c(){e=m("div"),l=w(t[1]),f=w("x"),o=w(t[0]),this.h()},l(n){e=$(n,"DIV",{class:!0});var i=g(e);l=b(i,t[1]),f=b(i,"x"),o=b(i,t[0]),i.forEach(d),this.h()},h(){v(e,"class","surface-wrapper svelte-1qdhm3w"),u(e,"--width",h),u(e,"--height",_),u(e,"box-shadow",t[2])},m(n,i){A(n,e,i),a(e,l),a(e,f),a(e,o)},p(n,i){i&2&&H(l,n[1]),i&1&&H(o,n[0]),i&2&&h!==(h=`${n[1]}px`)&&u(e,"--width",h),i&1&&_!==(_=`${n[0]}px`)&&u(e,"--height",_),i&4&&u(e,"box-shadow",n[2])},d(n){n&&d(e)}}}function st(t){let e,l=V(t[0],1)+"",f,o,h=V(t[1],1)+"",_,n=`${t[0]}px`,i=`${t[1]}px`;return{c(){e=m("div"),f=w(l),o=w("x"),_=w(h),this.h()},l(c){e=$(c,"DIV",{class:!0});var p=g(e);f=b(p,l),o=b(p,"x"),_=b(p,h),p.forEach(d),this.h()},h(){v(e,"class","surface-wrapper svelte-1qdhm3w"),u(e,"--width",n),u(e,"--height",i),u(e,"box-shadow",t[2])},m(c,p){A(c,e,p),a(e,f),a(e,o),a(e,_)},p(c,p){p&1&&l!==(l=V(c[0],1)+"")&&H(f,l),p&2&&h!==(h=V(c[1],1)+"")&&H(_,h),p&1&&n!==(n=`${c[0]}px`)&&u(e,"--width",n),p&2&&i!==(i=`${c[1]}px`)&&u(e,"--height",i),p&4&&u(e,"box-shadow",c[2])},d(c){c&&d(e)}}}function lt(t){let e,l,f,o,h,_,n=`${pe}px`,i=`${pe}px`,c,p,I,ce=`${pe}px`,ge=`${pe}px`,ne,M,q,ve,ie,E,B,P,we,Z,Q=V(t[0],1)+"",oe,be,Ee,T,Ie,U,k,Te,j,y=V(t[1],1)+"",he,De,Se,D,Ce,R,W,Pe="box shadow",Ae,X,qe,L,Le,fe,F,Ne,Ue;l=new ye({props:{content:`<Scaled
	width={${t[0]}}
	height={${t[1]}}
>
	...
</Scaled>`}}),_=new Be({props:{width:t[0],height:t[1],$$slots:{default:[et]},$$scope:{ctx:t}}}),I=new Be({props:{width:t[1],height:t[0],$$slots:{default:[tt]},$$scope:{ctx:t}}});function Xe(s){t[6](s)}let ke={width:t[0],height:t[1],$$slots:{default:[st]},$$scope:{ctx:t}};return t[3]!==void 0&&(ke.scale=t[3]),q=new Be({props:ke}),Ge.push(()=>Ke(q,"scale",Xe)),{c(){e=m("section"),x(l.$$.fragment),f=S(),o=m("section"),h=m("div"),x(_.$$.fragment),c=S(),p=m("div"),x(I.$$.fragment),ne=S(),M=m("section"),x(q.$$.fragment),ie=S(),E=m("form"),B=m("label"),P=m("div"),we=w("width "),Z=m("code"),oe=w(Q),be=w("px"),Ee=S(),T=m("input"),Ie=S(),U=m("label"),k=m("div"),Te=w("height "),j=m("code"),he=w(y),De=w("px"),Se=S(),D=m("input"),Ce=S(),R=m("label"),W=m("div"),W.textContent=Pe,Ae=S(),X=m("input"),qe=S(),L=m("button"),Le=w("reset state"),this.h()},l(s){e=$(s,"SECTION",{});var r=g(e);ee(l.$$.fragment,r),r.forEach(d),f=C(s),o=$(s,"SECTION",{class:!0});var G=g(o);h=$(G,"DIV",{class:!0});var z=g(h);ee(_.$$.fragment,z),z.forEach(d),c=C(G),p=$(G,"DIV",{class:!0});var Y=g(p);ee(I.$$.fragment,Y),Y.forEach(d),G.forEach(d),ne=C(s),M=$(s,"SECTION",{class:!0});var N=g(M);ee(q.$$.fragment,N),N.forEach(d),ie=C(s),E=$(s,"FORM",{});var O=g(E);B=$(O,"LABEL",{});var re=g(B);P=$(re,"DIV",{class:!0});var Oe=g(P);we=b(Oe,"width "),Z=$(Oe,"CODE",{});var Ve=g(Z);oe=b(Ve,Q),be=b(Ve,"px"),Ve.forEach(d),Oe.forEach(d),Ee=C(re),T=$(re,"INPUT",{type:!0,min:!0,max:!0}),re.forEach(d),Ie=C(O),U=$(O,"LABEL",{});var _e=g(U);k=$(_e,"DIV",{class:!0});var He=g(k);Te=b(He,"height "),j=$(He,"CODE",{});var Me=g(j);he=b(Me,y),De=b(Me,"px"),Me.forEach(d),He.forEach(d),Se=C(_e),D=$(_e,"INPUT",{type:!0,min:!0,max:!0}),_e.forEach(d),Ce=C(O),R=$(O,"LABEL",{});var de=g(R);W=$(de,"DIV",{class:!0,"data-svelte-h":!0}),ze(W)!=="svelte-2zgwdq"&&(W.textContent=Pe),Ae=C(de),X=$(de,"INPUT",{}),de.forEach(d),qe=C(O),L=$(O,"BUTTON",{type:!0});var Re=g(L);Le=b(Re,"reset state"),Re.forEach(d),O.forEach(d),this.h()},h(){v(h,"class","panel small-example-1 svelte-1qdhm3w"),u(h,"width",n),u(h,"height",i),v(p,"class","panel small-example-2 svelte-1qdhm3w"),u(p,"width",ce),u(p,"height",ge),v(o,"class","small-examples svelte-1qdhm3w"),v(M,"class","interactive panel svelte-1qdhm3w"),v(P,"class","title"),v(T,"type","range"),v(T,"min",0),v(T,"max",it),v(k,"class","title"),v(D,"type","range"),v(D,"min",0),v(D,"max",ot),v(W,"class","title"),v(L,"type","button"),L.disabled=fe=t[0]===ue&&t[1]===me&&t[2]===$e},m(s,r){A(s,e,r),te(l,e,null),A(s,f,r),A(s,o,r),a(o,h),te(_,h,null),a(o,c),a(o,p),te(I,p,null),A(s,ne,r),A(s,M,r),te(q,M,null),A(s,ie,r),A(s,E,r),a(E,B),a(B,P),a(P,we),a(P,Z),a(Z,oe),a(Z,be),a(B,Ee),a(B,T),J(T,t[0]),a(E,Ie),a(E,U),a(U,k),a(k,Te),a(k,j),a(j,he),a(j,De),a(U,Se),a(U,D),J(D,t[1]),a(E,Ce),a(E,R),a(R,W),a(R,Ae),a(R,X),J(X,t[2]),a(E,qe),a(E,L),a(L,Le),F=!0,Ne||(Ue=[K(T,"change",t[7]),K(T,"input",t[7]),K(D,"change",t[8]),K(D,"input",t[8]),K(X,"input",t[9]),K(L,"click",t[5])],Ne=!0)},p(s,r){const G={};r&3&&(G.content=`<Scaled
	width={${s[0]}}
	height={${s[1]}}
>
	...
</Scaled>`),l.$set(G);const z={};r&1&&(z.width=s[0]),r&2&&(z.height=s[1]),r&1031&&(z.$$scope={dirty:r,ctx:s}),_.$set(z);const Y={};r&2&&(Y.width=s[1]),r&1&&(Y.height=s[0]),r&1031&&(Y.$$scope={dirty:r,ctx:s}),I.$set(Y);const N={};r&1&&(N.width=s[0]),r&2&&(N.height=s[1]),r&1031&&(N.$$scope={dirty:r,ctx:s}),!ve&&r&8&&(ve=!0,N.scale=s[3],Ye(()=>ve=!1)),q.$set(N),(!F||r&1)&&Q!==(Q=V(s[0],1)+"")&&H(oe,Q),r&1&&J(T,s[0]),(!F||r&2)&&y!==(y=V(s[1],1)+"")&&H(he,y),r&2&&J(D,s[1]),r&4&&X.value!==s[2]&&J(X,s[2]),(!F||r&7&&fe!==(fe=s[0]===ue&&s[1]===me&&s[2]===$e))&&(L.disabled=fe)},i(s){F||(se(l.$$.fragment,s),se(_.$$.fragment,s),se(I.$$.fragment,s),se(q.$$.fragment,s),F=!0)},o(s){le(l.$$.fragment,s),le(_.$$.fragment,s),le(I.$$.fragment,s),le(q.$$.fragment,s),F=!1},d(s){s&&(d(e),d(f),d(o),d(ne),d(M),d(ie),d(E)),ae(l),ae(_),ae(I),ae(q),Ne=!1,Ze(Ue)}}}function at(t){let e,l;return e=new Qe({props:{tome:t[4],$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(f){ee(e.$$.fragment,f)},m(f,o){te(e,f,o),l=!0},p(f,[o]){const h={};o&1039&&(h.$$scope={dirty:o,ctx:f}),e.$set(h)},i(f){l||(se(e.$$.fragment,f),l=!0)},o(f){le(e.$$.fragment,f),l=!1},d(f){ae(e,f)}}}const nt="Scaled",it=1280,ue=1024,ot=1280,me=128,$e="0 0 50px #0002, 0 0 20px #0001",pe=300;function ht(t,e,l){const f=xe(nt);let o=ue,h=me,_=$e,n;const i=()=>{l(0,o=ue),l(1,h=me),l(2,_=$e)};function c(ge){n=ge,l(3,n)}function p(){o=We(this.value),l(0,o)}function I(){h=We(this.value),l(1,h)}function ce(){_=this.value,l(2,_)}return[o,h,_,n,f,i,c,p,I,ce]}class pt extends je{constructor(e){super(),Je(this,e,ht,at,Fe,{})}}export{pt as component};
