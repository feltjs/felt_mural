var G=Object.defineProperty;var I=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(I(t,typeof e!="symbol"?e+"":e,n),n);function M(){}const ft=t=>t;function F(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function _t(){return Object.create(null)}function J(t){t.forEach(U)}function K(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e}function mt(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const i of e)i(void 0);return M}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t){let e;return L(t,n=>e=n)(),e}function yt(t,e,n){t.$$.on_destroy.push(L(e,n))}function gt(t,e,n,i){if(t){const s=S(t,e,n,i);return t[0](s)}}function S(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function xt(t,e,n,i,s,c){if(s){const r=S(e,n,i,c);t.p(r,s)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t,e,n){return t.set(n),e}function Et(t){return t&&K(t.destroy)?t.destroy:M}let b=!1;function Tt(){b=!0}function Nt(){b=!1}function Q(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:Q(1,s,q=>e[n[q]].claim_order,a))-1;i[o]=n[u]+1;const A=u+1;n[A]=o,s=Math.max(A,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[o],u)}}function j(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=x("style");return e.textContent="/* empty */",Y(X(t),e),e.sheet}function Y(t,e){return j(t.head||t,e),e.sheet}function Z(t,e){if(b){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function tt(t,e,n){b&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Ct(){return N(" ")}function Dt(){return N("")}function k(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function O(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const et=["width","height"];function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&et.indexOf(i)===-1?t[i]=e[i]:O(t,i,e[i])}function Mt(t,e){for(const n in e)O(t,n,e[n])}function Lt(t){return t.dataset.svelteH}function St(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,s=!1){z(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function R(t,e,n,i){return B(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Pt(t,e,n){return R(t,e,n,x)}function Ot(t,e,n){return R(t,e,n,P)}function nt(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function zt(t){return nt(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Bt(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new D(e);z(t);const s=t.splice(n,i-n+1);y(s[0]),y(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(e,c)}function Rt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Wt(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let p;function it(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function Gt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=x("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=it();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=k(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=k(i.contentWindow,"resize",e),e()}),j(t,i),()=>{(s||c&&i.contentWindow)&&c(),y(i)}}function It(t,e,n){t.classList.toggle(e,!!n)}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ft(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class rt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=P(n.nodeName):this.e=x(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class D extends rt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)tt(this.t,this.n[i],n)}}function Ut(t,e){return new t(e)}let g;function w(t){g=t}function h(){if(!g)throw new Error("Function called outside component initialization");return g}function Jt(t){h().$$.on_mount.push(t)}function Kt(t){h().$$.after_update.push(t)}function Qt(t){h().$$.on_destroy.push(t)}function Vt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=st(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Xt(t,e){return h().$$.context.set(t,e),e}function Yt(t){return h().$$.context.get(t)}function Zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],H=[];let d=[];const E=[],W=Promise.resolve();let T=!1;function ct(){T||(T=!0,W.then(lt))}function $t(){return ct(),W}function ot(t){d.push(t)}function te(t){E.push(t)}const v=new Set;let _=0;function lt(){if(_!==0)return;const t=g;do{try{for(;_<m.length;){const e=m[_];_++,w(e),at(e.$$)}}catch(e){throw m.length=0,_=0,e}for(w(null),m.length=0,_=0;H.length;)H.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];v.has(n)||(v.add(n),n())}d.length=0}while(m.length);for(;E.length;)E.pop()();T=!1,v.clear(),w(t)}function at(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}function ee(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{F as $,Kt as A,Jt as B,qt as C,$t as D,H as E,k as F,L as G,P as H,Ot as I,X as J,At as K,K as L,ot as M,st as N,ft as O,_t as P,lt as Q,mt as R,ee as S,g as T,w as U,U as V,m as W,ct as X,Tt as Y,Nt as Z,It as _,jt as a,Mt as a0,kt as a1,Ht as a2,D as a3,Bt as a4,Gt as a5,Ft as a6,Vt as a7,Qt as a8,vt as a9,pt as aa,Et as ab,Zt as ac,te as ad,Wt as ae,St as af,nt as b,Pt as c,y as d,x as e,zt as f,Z as g,Rt as h,tt as i,M as j,yt as k,dt as l,Lt as m,ht as n,O as o,gt as p,wt as q,J as r,Ct as s,N as t,xt as u,bt as v,Yt as w,Xt as x,Ut as y,Dt as z};
