import{t as q,a as z}from"./index.lx0Epbk5.js";import{r as B}from"./scheduler.ESLvGD48.js";function E(t){return t?.length!==void 0?t:Array.from(t)}function F(t,c){t.d(1),c.delete(t.key)}function G(t,c){q(t,1,1,()=>{c.delete(t.key)})}function H(t,c,M,v,S,y,d,x,m,A,h,j){let i=t.length,o=y.length,a=i;const r={};for(;a--;)r[t[a].key]=a;const f=[],w=new Map,u=new Map,g=[];for(a=o;a--;){const e=j(S,y,a),n=M(e);let s=d.get(n);s?v&&g.push(()=>s.p(e,c)):(s=A(n,e),s.c()),w.set(n,f[a]=s),n in r&&u.set(n,Math.abs(a-r[n]))}const p=new Set,k=new Set;function _(e){z(e,1),e.m(x,h),d.set(e.key,e),h=e.first,o--}for(;i&&o;){const e=f[o-1],n=t[i-1],s=e.key,l=n.key;e===n?(h=e.first,i--,o--):w.has(l)?!d.has(s)||p.has(s)?_(e):k.has(l)?i--:u.get(s)>u.get(l)?(k.add(s),_(e)):(p.add(l),i--):(m(n,d),i--)}for(;i--;){const e=t[i];w.has(e.key)||m(e,d)}for(;o;)_(f[o-1]);return B(g),f}export{F as d,E as e,G as o,H as u};
