import{S as xe,i as $e,s as Ge,k as V,q as ae,a as Q,l as P,m as d,r as le,h as l,c as Z,n as t,b as te,G as n,J as Y,u as ut,H as J,K as He,I as ce,o as ft,L as Ee,w as pt,e as et,M as tt,N as ht,p as e,O as it,P as rt,Q as p,R as h,T as g,U as mt,y as je,z as Ie,A as De,g as X,d as ee,B as Oe,f as ot,v as st}from"../chunks/index.31a6af15.js";import{w as Xe}from"../chunks/index.def649d7.js";const Te=Xe(!1),Le=Xe(null),K=Xe([]);function gt(a){let i,r,o,s,f,k,_,M,m,u,b,c;return{c(){i=V("dialog"),r=V("div"),o=ae(a[1]),s=Q(),f=V("footer"),k=V("button"),_=ae("Copy to clipboard"),M=Q(),m=V("button"),u=ae("Return to start"),this.h()},l(v){i=P(v,"DIALOG",{class:!0});var w=d(i);r=P(w,"DIV",{class:!0});var I=d(r);o=le(I,a[1]),I.forEach(l),s=Z(w),f=P(w,"FOOTER",{class:!0});var W=d(f);k=P(W,"BUTTON",{class:!0});var j=d(k);_=le(j,"Copy to clipboard"),j.forEach(l),M=Z(W),m=P(W,"BUTTON",{class:!0});var T=d(m);u=le(T,"Return to start"),T.forEach(l),W.forEach(l),w.forEach(l),this.h()},h(){t(r,"class","map svelte-1wj6c54"),t(k,"class","buttonClass1 svelte-1wj6c54"),t(m,"class","buttonClass1 svelte-1wj6c54"),t(f,"class","svelte-1wj6c54"),t(i,"class","svelte-1wj6c54")},m(v,w){te(v,i,w),n(i,r),n(r,o),n(i,s),n(i,f),n(f,k),n(k,_),n(f,M),n(f,m),n(m,u),a[5](i),b||(c=[Y(k,"click",a[3]),Y(m,"click",a[4])],b=!0)},p(v,[w]){w&2&&ut(o,v[1])},i:J,o:J,d(v){v&&l(i),a[5](null),b=!1,He(c)}}}function kt(a,i,r){let o,s;ce(a,K,u=>r(6,o=u)),ce(a,Te,u=>r(2,s=u));let f,k=`<img src = "" alt="" usemap="">
    <map name="">`;ft(()=>{f.showModal();for(let u=0;u<o.length;u++)r(1,k=k+` <area shape="rect" coords="${o[u].x}, ${o[u].y}, ${o[u].x+o[u].width}, ${o[u].y-o[u].heigth}" alt="" href="${o[u].link}">`);return r(1,k=k+"</map>"),k});function _(){navigator.clipboard.writeText(k)}const M=()=>Ee(Te,s=!1,s);function m(u){pt[u?"unshift":"push"](()=>{f=u,r(0,f)})}return[f,k,s,_,M,m]}class vt extends xe{constructor(i){super(),$e(this,i,kt,gt,Ge,{})}}function _t(a){let i,r,o,s,f,k,_;return{c(){i=V("div"),r=V("input"),o=Q(),s=V("button"),f=ae("Generate map"),this.h()},l(M){i=P(M,"DIV",{class:!0});var m=d(i);r=P(m,"INPUT",{type:!0,class:!0}),o=Z(m),s=P(m,"BUTTON",{class:!0});var u=d(s);f=le(u,"Generate map"),u.forEach(l),m.forEach(l),this.h()},h(){t(r,"type","file"),t(r,"class","svelte-12p0c69"),t(s,"class","generateButton"),t(i,"class","buttonContainer svelte-12p0c69")},m(M,m){te(M,i,m),n(i,r),n(i,o),n(i,s),n(s,f),k||(_=[Y(r,"change",a[2]),Y(s,"click",a[3])],k=!0)},p:J,i:J,o:J,d(M){M&&l(i),k=!1,He(_)}}}function yt(a,i,r){let o,s;ce(a,Le,_=>r(0,o=_)),ce(a,Te,_=>r(1,s=_));function f(){o=this.files,Le.set(o)}const k=()=>Ee(Te,s=!0,s);return a.$$.update=()=>{a.$$.dirty&1&&console.log(o)},[o,s,f,k]}class bt extends xe{constructor(i){super(),$e(this,i,yt,_t,Ge,{})}}function nt(a,i,r){const o=a.slice();return o[14]=i[r],o[15]=i,o[16]=r,o}function at(a){let i,r,o,s,f,k,_,M=a[0],m=[];for(let u=0;u<M.length;u+=1)m[u]=lt(nt(a,M,u));return{c(){i=V("div"),r=V("div"),o=V("img"),f=Q();for(let u=0;u<m.length;u+=1)m[u].c();this.h()},l(u){i=P(u,"DIV",{class:!0});var b=d(i);r=P(b,"DIV",{class:!0});var c=d(r);o=P(c,"IMG",{src:!0,class:!0}),f=Z(c);for(let v=0;v<m.length;v+=1)m[v].l(c);c.forEach(l),b.forEach(l),this.h()},h(){tt(o.src,s=URL.createObjectURL(a[1][0]))||t(o,"src",s),t(o,"class","svelte-c7h9cf"),t(r,"class","imageCanvasWrap svelte-c7h9cf"),t(i,"class","completeWrap svelte-c7h9cf")},m(u,b){te(u,i,b),n(i,r),n(r,o),n(r,f);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(r,null);k||(_=Y(r,"mousedown",a[4]),k=!0)},p(u,b){if(b&2&&!tt(o.src,s=URL.createObjectURL(u[1][0]))&&t(o,"src",s),b&237){M=u[0];let c;for(c=0;c<M.length;c+=1){const v=nt(u,M,c);m[c]?m[c].p(v,b):(m[c]=lt(v),m[c].c(),m[c].m(r,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=M.length}},d(u){u&&l(i),ht(m,u),k=!1,_()}}}function lt(a){let i,r,o,s,f,k,_;function M(){a[8].call(r,a[16])}function m(...b){return a[9](a[16],...b)}function u(...b){return a[10](a[16],...b)}return{c(){i=V("div"),r=V("input"),o=Q(),s=V("div"),f=Q(),this.h()},l(b){i=P(b,"DIV",{class:!0,style:!0});var c=d(i);r=P(c,"INPUT",{class:!0,placeholder:!0,type:!0}),o=Z(c),s=P(c,"DIV",{class:!0,style:!0}),d(s).forEach(l),f=Z(c),c.forEach(l),this.h()},h(){t(r,"class","linkInput svelte-c7h9cf"),t(r,"placeholder","submit link here"),t(r,"type","text"),t(s,"class","circle svelte-c7h9cf"),e(s,"position","absolute"),e(s,"bottom","-5px"),e(s,"right","-5px"),e(s,"overflow","visible"),t(i,"class","areaRect svelte-c7h9cf"),e(i,"height",a[0][a[16]].heigth+"px"),e(i,"width",a[0][a[16]].width+"px"),e(i,"top",a[0][a[16]].y+"px"),e(i,"left",a[0][a[16]].x+"px")},m(b,c){te(b,i,c),n(i,r),it(r,a[0][a[16]].link),n(i,o),n(i,s),n(i,f),k||(_=[Y(r,"input",M),Y(s,"mousedown",rt(m)),Y(s,"mouseup",a[3]),Y(i,"mousedown",rt(u)),Y(i,"mousemove",a[6]),Y(i,"mouseup",a[7])],k=!0)},p(b,c){a=b,c&1&&r.value!==a[0][a[16]].link&&it(r,a[0][a[16]].link),c&1&&e(i,"height",a[0][a[16]].heigth+"px"),c&1&&e(i,"width",a[0][a[16]].width+"px"),c&1&&e(i,"top",a[0][a[16]].y+"px"),c&1&&e(i,"left",a[0][a[16]].x+"px")},d(b){b&&l(i),k=!1,He(_)}}}function wt(a){var o;let i,r=((o=a[1])==null?void 0:o[0])&&at(a);return{c(){r&&r.c(),i=et()},l(s){r&&r.l(s),i=et()},m(s,f){r&&r.m(s,f),te(s,i,f)},p(s,[f]){var k;(k=s[1])!=null&&k[0]?r?r.p(s,f):(r=at(s),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},i:J,o:J,d(s){r&&r.d(s),s&&l(i)}}}function Et(a,i,r){let o,s;ce(a,K,j=>r(0,o=j)),ce(a,Le,j=>r(1,s=j));let f=!1,k=!0,_;function M(j,T){k=!0,_=T}function m(j){k=!1}function u(j){o.push({x:j.offsetX,y:j.offsetY,link:"",heigth:50,width:200}),K.set(o)}function b(j,T){f=!0,_=T}function c(j){f?(Ee(K,o[_].x+=j.movementX,o),Ee(K,o[_].y+=j.movementY,o),K.set(o)):k&&(Ee(K,o[_].heigth=j.movementY-o[_].heigth,o),Ee(K,o[_].width=j.movementX-o[_].width,o),K.set(o))}function v(j){f=!1}function w(j){o[j].link=this.value,K.set(o)}return[o,s,M,m,u,b,c,v,w,(j,T)=>M(T,j),(j,T)=>b(T,j)]}class xt extends xe{constructor(i){super(),$e(this,i,Et,wt,Ge,{})}}function $t(a){let i,r,o,s,f,k,_,M,m,u,b,c,v,w,I,W,j,T,F,y,ie,de,ue,fe,pe,he,me,ge,ke,ve,_e,ye,we,Re,re,ze,Se,Be,Ce,H,O,oe,D,se,C,U,R,z,E,G,x,$,B,N,L,Ve,S,Pe;return{c(){i=p("svg"),r=p("defs"),o=p("linearGradient"),s=p("stop"),f=p("stop"),k=p("inkscape:path-effect"),_=p("inkscape:path-effect"),M=p("inkscape:path-effect"),m=p("inkscape:path-effect"),u=p("inkscape:path-effect"),b=p("inkscape:path-effect"),c=p("inkscape:path-effect"),v=p("inkscape:path-effect"),w=p("inkscape:path-effect"),I=p("inkscape:path-effect"),W=p("inkscape:path-effect"),j=p("inkscape:path-effect"),T=p("inkscape:path-effect"),F=p("linearGradient"),y=p("sodipodi:namedview"),ie=p("inkscape:grid"),de=p("sodipodi:guide"),ue=p("sodipodi:guide"),fe=p("sodipodi:guide"),pe=p("sodipodi:guide"),he=p("sodipodi:guide"),me=p("sodipodi:guide"),ge=p("sodipodi:guide"),ke=p("sodipodi:guide"),ve=p("sodipodi:guide"),_e=p("sodipodi:guide"),ye=p("sodipodi:guide"),we=p("metadata"),Re=p("rdf:RDF"),re=p("cc:Work"),ze=p("dc:format"),Se=ae("image/svg+xml"),Be=p("dc:type"),Ce=p("dc:title"),H=p("g"),O=p("rect"),oe=p("g"),D=p("rect"),se=p("g"),C=p("rect"),U=p("g"),R=p("rect"),z=p("rect"),E=p("path"),G=p("path"),x=p("path"),$=p("path"),B=p("path"),N=p("text"),L=p("tspan"),Ve=ae("NO IMAGE"),S=p("tspan"),Pe=ae("SELECTED"),this.h()},l(Me){i=h(Me,"svg",{"xmlns:dc":!0,"xmlns:cc":!0,"xmlns:rdf":!0,"xmlns:svg":!0,xmlns:!0,"xmlns:xlink":!0,"xmlns:sodipodi":!0,"xmlns:inkscape":!0,"sodipodi:docname":!0,"inkscape:version":!0,version:!0,id:!0,viewBox:!0,height:!0,width:!0});var be=d(i);r=h(be,"defs",{id:!0});var A=d(r);o=h(A,"linearGradient",{id:!0,"inkscape:collect":!0});var We=d(o);s=h(We,"stop",{id:!0,offset:!0,style:!0}),d(s).forEach(l),f=h(We,"stop",{id:!0,offset:!0,style:!0}),d(f).forEach(l),We.forEach(l),k=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(k).forEach(l),_=h(A,"inkscape:path-effect",{lpeversion:!0,effect:!0,id:!0,is_visible:!0}),d(_).forEach(l),M=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(M).forEach(l),m=h(A,"inkscape:path-effect",{lpeversion:!0,effect:!0,id:!0,is_visible:!0}),d(m).forEach(l),u=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(u).forEach(l),b=h(A,"inkscape:path-effect",{lpeversion:!0,effect:!0,id:!0,is_visible:!0}),d(b).forEach(l),c=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(c).forEach(l),v=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(v).forEach(l),w=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(w).forEach(l),I=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(I).forEach(l),W=h(A,"inkscape:path-effect",{lpeversion:!0,effect:!0,id:!0,is_visible:!0}),d(W).forEach(l),j=h(A,"inkscape:path-effect",{lpeversion:!0,is_visible:!0,id:!0,effect:!0}),d(j).forEach(l),T=h(A,"inkscape:path-effect",{lpeversion:!0,effect:!0,id:!0,is_visible:!0}),d(T).forEach(l),F=h(A,"linearGradient",{gradientTransform:!0,gradientUnits:!0,y2:!0,x2:!0,y1:!0,x1:!0,id:!0,"xlink:href":!0,"inkscape:collect":!0}),d(F).forEach(l),A.forEach(l),y=h(be,"sodipodi:namedview",{"inkscape:document-rotation":!0,"inkscape:window-maximized":!0,"inkscape:window-y":!0,"inkscape:window-x":!0,"inkscape:window-height":!0,"inkscape:window-width":!0,units:!0,"fit-margin-bottom":!0,"fit-margin-right":!0,"fit-margin-left":!0,"fit-margin-top":!0,"inkscape:guide-bbox":!0,"inkscape:snap-smooth-nodes":!0,showguides:!0,"inkscape:object-nodes":!0,showgrid:!0,"inkscape:current-layer":!0,"inkscape:document-units":!0,"inkscape:cy":!0,"inkscape:cx":!0,"inkscape:zoom":!0,"inkscape:pageshadow":!0,"inkscape:pageopacity":!0,borderopacity:!0,bordercolor:!0,pagecolor:!0,id:!0});var q=d(y);ie=h(q,"inkscape:grid",{originy:!0,originx:!0,id:!0,type:!0}),d(ie).forEach(l),de=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(de).forEach(l),ue=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(ue).forEach(l),fe=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(fe).forEach(l),pe=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(pe).forEach(l),he=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(he).forEach(l),me=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(me).forEach(l),ge=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(ge).forEach(l),ke=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(ke).forEach(l),ve=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(ve).forEach(l),_e=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(_e).forEach(l),ye=h(q,"sodipodi:guide",{id:!0,orientation:!0,position:!0}),d(ye).forEach(l),q.forEach(l),we=h(be,"metadata",{id:!0});var Ye=d(we);Re=h(Ye,"rdf:RDF",{});var Je=d(Re);re=h(Je,"cc:Work",{"rdf:about":!0});var Ue=d(re);ze=h(Ue,"dc:format",{});var Ke=d(ze);Se=le(Ke,"image/svg+xml"),Ke.forEach(l),Be=h(Ue,"dc:type",{"rdf:resource":!0}),d(Be).forEach(l),Ce=h(Ue,"dc:title",{}),d(Ce).forEach(l),Ue.forEach(l),Je.forEach(l),Ye.forEach(l),H=h(be,"g",{transform:!0,id:!0,"inkscape:groupmode":!0,"inkscape:label":!0});var Ne=d(H);O=h(Ne,"rect",{ry:!0,y:!0,x:!0,height:!0,width:!0,id:!0,style:!0}),d(O).forEach(l),oe=h(Ne,"g",{transform:!0,id:!0});var Ae=d(oe);D=h(Ae,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0,ry:!0,transform:!0}),d(D).forEach(l),se=h(Ae,"g",{id:!0,transform:!0});var Fe=d(se);C=h(Fe,"rect",{ry:!0,y:!0,x:!0,height:!0,width:!0,id:!0,style:!0}),d(C).forEach(l),U=h(Fe,"g",{style:!0,transform:!0,id:!0});var ne=d(U);R=h(ne,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),d(R).forEach(l),z=h(ne,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),d(z).forEach(l),E=h(ne,"path",{style:!0,d:!0,id:!0,"inkscape:path-effect":!0,"inkscape:original-d":!0,"inkscape:connector-curvature":!0,"sodipodi:nodetypes":!0}),d(E).forEach(l),G=h(ne,"path",{style:!0,d:!0,transform:!0,id:!0,"inkscape:connector-curvature":!0,"sodipodi:nodetypes":!0}),d(G).forEach(l),x=h(ne,"path",{"inkscape:connector-curvature":!0,"inkscape:original-d":!0,"inkscape:path-effect":!0,id:!0,d:!0,style:!0,"sodipodi:nodetypes":!0}),d(x).forEach(l),$=h(ne,"path",{style:!0,d:!0,id:!0,"inkscape:path-effect":!0,"inkscape:original-d":!0,"inkscape:connector-curvature":!0,"sodipodi:nodetypes":!0}),d($).forEach(l),B=h(ne,"path",{style:!0,d:!0,id:!0,"inkscape:connector-curvature":!0,"sodipodi:nodetypes":!0}),d(B).forEach(l),ne.forEach(l),Fe.forEach(l),Ae.forEach(l),N=h(Ne,"text",{id:!0,y:!0,x:!0,style:!0,"xml:space":!0});var qe=d(N);L=h(qe,"tspan",{style:!0,y:!0,x:!0,id:!0,"sodipodi:role":!0});var Qe=d(L);Ve=le(Qe,"NO IMAGE"),Qe.forEach(l),S=h(qe,"tspan",{style:!0,id:!0,y:!0,x:!0,"sodipodi:role":!0});var Ze=d(S);Pe=le(Ze,"SELECTED"),Ze.forEach(l),qe.forEach(l),Ne.forEach(l),be.forEach(l),this.h()},h(){t(s,"id","stop963"),t(s,"offset","0"),e(s,"stop-color","#c2c2c2"),e(s,"stop-opacity","1"),t(f,"id","stop965"),t(f,"offset","1"),e(f,"stop-color","#9f9f9f"),e(f,"stop-opacity","1"),t(o,"id","linearGradient967"),t(o,"inkscape:collect","always"),g(k,"lpeversion","0"),g(k,"is_visible","true"),g(k,"id","path-effect3414"),g(k,"effect","spiro"),g(_,"lpeversion","0"),g(_,"effect","spiro"),g(_,"id","path-effect3410"),g(_,"is_visible","true"),g(M,"lpeversion","0"),g(M,"is_visible","true"),g(M,"id","path-effect3406"),g(M,"effect","spiro"),g(m,"lpeversion","0"),g(m,"effect","spiro"),g(m,"id","path-effect3402"),g(m,"is_visible","true"),g(u,"lpeversion","0"),g(u,"is_visible","true"),g(u,"id","path-effect3398"),g(u,"effect","spiro"),g(b,"lpeversion","0"),g(b,"effect","spiro"),g(b,"id","path-effect3392"),g(b,"is_visible","true"),g(c,"lpeversion","0"),g(c,"is_visible","true"),g(c,"id","path-effect3388"),g(c,"effect","spiro"),g(v,"lpeversion","0"),g(v,"is_visible","true"),g(v,"id","path-effect3372"),g(v,"effect","spiro"),g(w,"lpeversion","0"),g(w,"is_visible","true"),g(w,"id","path-effect3368"),g(w,"effect","spiro"),g(I,"lpeversion","0"),g(I,"is_visible","true"),g(I,"id","path-effect3364"),g(I,"effect","spiro"),g(W,"lpeversion","0"),g(W,"effect","spiro"),g(W,"id","path-effect3360"),g(W,"is_visible","true"),g(j,"lpeversion","0"),g(j,"is_visible","true"),g(j,"id","path-effect3346"),g(j,"effect","spiro"),g(T,"lpeversion","0"),g(T,"effect","spiro"),g(T,"id","path-effect3392-8"),g(T,"is_visible","true"),t(F,"gradientTransform","translate(-45.254833,0.35355338)"),t(F,"gradientUnits","userSpaceOnUse"),t(F,"y2","108.77648"),t(F,"x2","658.45801"),t(F,"y1","6.5995569"),t(F,"x1","660.06653"),t(F,"id","linearGradient969"),mt(F,"xlink:href","#linearGradient967"),t(F,"inkscape:collect","always"),t(r,"id","defs4"),t(ie,"originy","-510.42818"),t(ie,"originx","-399.13435"),t(ie,"id","grid3336"),t(ie,"type","xygrid"),t(de,"id","guide3375"),t(de,"orientation","0,1"),t(de,"position","-117.13437,-25.564321"),t(ue,"id","guide3377"),t(ue,"orientation","0,1"),t(ue,"position","-114.13437,-23.564321"),t(fe,"id","guide3380"),t(fe,"orientation","0,1"),t(fe,"position","-121.13437,-27.564321"),t(pe,"id","guide3382"),t(pe,"orientation","0,1"),t(pe,"position","-114.13437,-22.564321"),t(he,"id","guide3384"),t(he,"orientation","0,1"),t(he,"position","-114.13437,-21.564321"),t(me,"id","guide3416"),t(me,"orientation","-2,0.5"),t(me,"position","-115.13437,-25.564311"),t(ge,"id","guide3420"),t(ge,"orientation","-2,0.5"),t(ge,"position","-115.13437,-25.564311"),t(ke,"id","guide4180"),t(ke,"orientation","0.24382204,-0.96981999"),t(ke,"position","206.80442,220.41193"),t(ve,"id","guide4182"),t(ve,"orientation","1,0"),t(ve,"position","86.804424,280.52227"),t(_e,"id","guide4186"),t(_e,"orientation","1,0"),t(_e,"position","206.80442,250.52231"),t(ye,"id","guide4188"),t(ye,"orientation","-0.24382199,0.96982"),t(ye,"position","206.80442,190.30156"),t(y,"inkscape:document-rotation","0"),t(y,"inkscape:window-maximized","1"),t(y,"inkscape:window-y","42"),t(y,"inkscape:window-x","0"),t(y,"inkscape:window-height","1004"),t(y,"inkscape:window-width","1920"),t(y,"units","px"),t(y,"fit-margin-bottom","0"),t(y,"fit-margin-right","0"),t(y,"fit-margin-left","0"),t(y,"fit-margin-top","0"),t(y,"inkscape:guide-bbox","true"),t(y,"inkscape:snap-smooth-nodes","true"),t(y,"showguides","false"),t(y,"inkscape:object-nodes","true"),t(y,"showgrid","false"),t(y,"inkscape:current-layer","layer1"),t(y,"inkscape:document-units","px"),t(y,"inkscape:cy","109.10202"),t(y,"inkscape:cx","148.40044"),t(y,"inkscape:zoom","0.7071068"),t(y,"inkscape:pageshadow","2"),t(y,"inkscape:pageopacity","0.0"),t(y,"borderopacity","1.0"),t(y,"bordercolor","#666666"),t(y,"pagecolor","#ffffff"),t(y,"id","base"),t(Be,"rdf:resource","http://purl.org/dc/dcmitype/StillImage"),t(re,"rdf:about",""),t(we,"id","metadata7"),t(O,"ry","7.0136137"),t(O,"y","122.79051"),t(O,"x","399.13437"),t(O,"height","406.00739"),t(O,"width","329.77792"),t(O,"id","rect1017"),e(O,"fill","#eeeeee"),e(O,"fill-opacity","1"),e(O,"fill-rule","nonzero"),e(O,"stroke","none"),e(O,"stroke-width","1.59331"),e(O,"stroke-linecap","round"),e(O,"stroke-linejoin","round"),e(O,"stroke-miterlimit","4"),e(O,"stroke-dasharray","none"),e(O,"stroke-opacity","1"),e(D,"fill","#9f9f9f"),e(D,"fill-opacity","1"),e(D,"fill-rule","nonzero"),e(D,"stroke","none"),e(D,"stroke-width","2.2995"),e(D,"stroke-linecap","round"),e(D,"stroke-linejoin","round"),e(D,"stroke-miterlimit","4"),e(D,"stroke-dasharray","none"),e(D,"stroke-opacity","1"),t(D,"id","rect1002"),t(D,"width","82.489967"),t(D,"height","90.470001"),t(D,"x","398.75827"),t(D,"y","178.74706"),t(D,"ry","8.3970251"),t(D,"transform","rotate(-16.342822)"),t(C,"ry","4.5961938"),t(C,"y","1.6498091"),t(C,"x","547.18585"),t(C,"height","115.96551"),t(C,"width","107.83378"),t(C,"id","rect961"),e(C,"fill","url(#linearGradient969)"),e(C,"fill-opacity","1"),e(C,"fill-rule","nonzero"),e(C,"stroke","#ffffff"),e(C,"stroke-width","5.398"),e(C,"stroke-linecap","round"),e(C,"stroke-linejoin","round"),e(C,"stroke-miterlimit","4"),e(C,"stroke-dasharray","none"),e(R,"color","#000000"),e(R,"clip-rule","nonzero"),e(R,"display","inline"),e(R,"overflow","visible"),e(R,"visibility","visible"),e(R,"opacity","1"),e(R,"isolation","auto"),e(R,"mix-blend-mode","normal"),e(R,"color-interpolation","sRGB"),e(R,"color-interpolation-filters","linearRGB"),e(R,"solid-color","#000000"),e(R,"solid-opacity","1"),e(R,"fill","#cccccc"),e(R,"fill-opacity","1"),e(R,"fill-rule","evenodd"),e(R,"stroke","#ffffff"),e(R,"stroke-width","13.0708"),e(R,"stroke-linecap","round"),e(R,"stroke-linejoin","round"),e(R,"stroke-miterlimit","4"),e(R,"stroke-dasharray","none"),e(R,"stroke-dashoffset","0"),e(R,"stroke-opacity","1"),e(R,"marker","none"),e(R,"color-rendering","auto"),e(R,"image-rendering","auto"),e(R,"shape-rendering","auto"),e(R,"text-rendering","auto"),e(R,"enable-background","accumulate"),t(R,"id","rect3338"),t(R,"width","491.10556"),t(R,"height","449.99814"),t(R,"x","270"),t(R,"y","107.36227"),e(z,"color","#000000"),e(z,"clip-rule","nonzero"),e(z,"display","inline"),e(z,"overflow","visible"),e(z,"visibility","visible"),e(z,"opacity","1"),e(z,"isolation","auto"),e(z,"mix-blend-mode","normal"),e(z,"color-interpolation","sRGB"),e(z,"color-interpolation-filters","linearRGB"),e(z,"solid-color","#000000"),e(z,"solid-opacity","1"),e(z,"fill","#ffffff"),e(z,"fill-opacity","1"),e(z,"fill-rule","evenodd"),e(z,"stroke","#ffffff"),e(z,"stroke-width","13.0708"),e(z,"stroke-linecap","round"),e(z,"stroke-linejoin","round"),e(z,"stroke-miterlimit","4"),e(z,"stroke-dasharray","none"),e(z,"stroke-dashoffset","0"),e(z,"stroke-opacity","1"),e(z,"marker","none"),e(z,"color-rendering","auto"),e(z,"image-rendering","auto"),e(z,"shape-rendering","auto"),e(z,"text-rendering","auto"),e(z,"enable-background","accumulate"),t(z,"id","rect3342"),t(z,"width","491.10559"),t(z,"height","209.99976"),t(z,"x","270"),t(z,"y","107.36227"),e(E,"color","#000000"),e(E,"clip-rule","nonzero"),e(E,"display","inline"),e(E,"overflow","visible"),e(E,"visibility","visible"),e(E,"opacity","1"),e(E,"isolation","auto"),e(E,"mix-blend-mode","normal"),e(E,"color-interpolation","sRGB"),e(E,"color-interpolation-filters","linearRGB"),e(E,"solid-color","#000000"),e(E,"solid-opacity","1"),e(E,"fill","#cccccc"),e(E,"fill-opacity","1"),e(E,"fill-rule","evenodd"),e(E,"stroke","#ffffff"),e(E,"stroke-width","13.0708"),e(E,"stroke-linecap","round"),e(E,"stroke-linejoin","round"),e(E,"stroke-miterlimit","4"),e(E,"stroke-dasharray","none"),e(E,"stroke-dashoffset","0"),e(E,"stroke-opacity","1"),e(E,"marker","none"),e(E,"paint-order","stroke"),e(E,"color-rendering","auto"),e(E,"image-rendering","auto"),e(E,"shape-rendering","auto"),e(E,"text-rendering","auto"),e(E,"enable-background","accumulate"),t(E,"d","m 300,317.36255 38.46147,-53.53818 60.53097,-45.16084 15.88277,18.57394 13.61285,-38.68356 8.20133,-2.98188 13.3106,-28.2093 180,179.99979"),t(E,"id","path3344"),t(E,"inkscape:path-effect","#path-effect3346"),t(E,"inkscape:original-d","m 300,317.36255 38.46147,-53.53818 60.53097,-45.16084 15.88277,18.57394 13.61285,-38.68356 8.20133,-2.98188 13.3106,-28.2093 180,179.99979"),t(E,"inkscape:connector-curvature","0"),t(E,"sodipodi:nodetypes","cccccccc"),e(G,"color","#000000"),e(G,"clip-rule","nonzero"),e(G,"display","inline"),e(G,"overflow","visible"),e(G,"visibility","visible"),e(G,"opacity","1"),e(G,"isolation","auto"),e(G,"mix-blend-mode","normal"),e(G,"color-interpolation","sRGB"),e(G,"color-interpolation-filters","linearRGB"),e(G,"solid-color","#000000"),e(G,"solid-opacity","1"),e(G,"fill","#b3b3b3"),e(G,"fill-opacity","1"),e(G,"fill-rule","evenodd"),e(G,"stroke","#ffffff"),e(G,"stroke-width","13.0708"),e(G,"stroke-linecap","round"),e(G,"stroke-linejoin","round"),e(G,"stroke-miterlimit","4"),e(G,"stroke-dasharray","none"),e(G,"stroke-dashoffset","0"),e(G,"stroke-opacity","1"),e(G,"marker","none"),e(G,"paint-order","stroke"),e(G,"color-rendering","auto"),e(G,"image-rendering","auto"),e(G,"shape-rendering","auto"),e(G,"text-rendering","auto"),e(G,"enable-background","accumulate"),t(G,"d","m 180,60 c 4.09311,16.474688 7.71219,33.067277 10.85156,49.75 2.38256,12.66097 4.48857,25.37408 6.31641,38.12695 l -22.06445,-7.16015 -46.11133,-29.41602 5.32422,46.42578 -1.61524,24.78711 10.05274,30.37695 73.18554,-11.75585 L 300,180 252.19922,102.56641 242.5,117.5 215.375,95.375 Z"),t(G,"transform","translate(270,107.36227)"),t(G,"id","path3390-0"),t(G,"inkscape:connector-curvature","0"),t(G,"sodipodi:nodetypes","cscccccccccccc"),t(x,"inkscape:connector-curvature","0"),t(x,"inkscape:original-d","m 419.99999,347.36252 81.89918,-74.42959 18.50574,-9.68009 23.6512,-44.18894 25.94388,-21.70121 179.99999,179.99979"),t(x,"inkscape:path-effect","#path-effect3360"),t(x,"id","path3358"),t(x,"d","m 419.99999,347.36252 81.89918,-74.42959 18.50574,-9.68009 23.6512,-44.18894 25.94388,-21.70121 179.99999,179.99979"),e(x,"color","#000000"),e(x,"clip-rule","nonzero"),e(x,"display","inline"),e(x,"overflow","visible"),e(x,"visibility","visible"),e(x,"opacity","1"),e(x,"isolation","auto"),e(x,"mix-blend-mode","normal"),e(x,"color-interpolation","sRGB"),e(x,"color-interpolation-filters","linearRGB"),e(x,"solid-color","#000000"),e(x,"solid-opacity","1"),e(x,"fill","#cccccc"),e(x,"fill-opacity","1"),e(x,"fill-rule","evenodd"),e(x,"stroke","#ffffff"),e(x,"stroke-width","13.0708"),e(x,"stroke-linecap","round"),e(x,"stroke-linejoin","round"),e(x,"stroke-miterlimit","4"),e(x,"stroke-dasharray","none"),e(x,"stroke-dashoffset","0"),e(x,"stroke-opacity","1"),e(x,"marker","none"),e(x,"paint-order","stroke"),e(x,"color-rendering","auto"),e(x,"image-rendering","auto"),e(x,"shape-rendering","auto"),e(x,"text-rendering","auto"),e(x,"enable-background","accumulate"),t(x,"sodipodi:nodetypes","cccccc"),e($,"color","#000000"),e($,"clip-rule","nonzero"),e($,"display","inline"),e($,"overflow","visible"),e($,"visibility","visible"),e($,"opacity","1"),e($,"isolation","auto"),e($,"mix-blend-mode","normal"),e($,"color-interpolation","sRGB"),e($,"color-interpolation-filters","linearRGB"),e($,"solid-color","#000000"),e($,"solid-opacity","1"),e($,"fill","#b3b3b3"),e($,"fill-opacity","1"),e($,"fill-rule","evenodd"),e($,"stroke","#ffffff"),e($,"stroke-width","13.0708"),e($,"stroke-linecap","round"),e($,"stroke-linejoin","round"),e($,"stroke-miterlimit","4"),e($,"stroke-dasharray","none"),e($,"stroke-dashoffset","0"),e($,"stroke-opacity","1"),e($,"marker","none"),e($,"paint-order","stroke"),e($,"color-rendering","auto"),e($,"image-rendering","auto"),e($,"shape-rendering","auto"),e($,"text-rendering","auto"),e($,"enable-background","accumulate"),t($,"d","m 569.99999,197.36269 35.9388,80.91289 v 30.11038 30.11038 l 22.45864,19.46652 c 6.52453,-6.45031 14.14893,-11.78526 22.44431,-15.70477 14.8245,-7.00447 31.33823,-9.35959 47.17057,-13.6217 6.42776,-1.73037 12.90672,-3.85419 18.21343,-7.87277 1.35174,-1.02362 2.61592,-2.16281 3.77424,-3.40107 h -30 l -40.52149,-40.55006 -29.85645,-48.91972 -10.25307,8.83886 z"),t($,"id","path3386"),t($,"inkscape:path-effect","#path-effect3388"),t($,"inkscape:original-d","m 569.99999,197.36269 35.9388,80.91289 v 30.11038 30.11038 l 22.45864,19.46652 c 5.77311,-6.36416 13.54339,-11.40815 22.44431,-15.70477 13.00316,-6.27685 32.0432,-8.74899 47.17057,-13.6217 6.8762,-2.21491 12.68001,-4.81998 18.21343,-7.87277 1.55883,-0.86001 1.99765,-2.671 3.77424,-3.40107 h -30 l -40.52149,-40.55006 -29.85645,-48.91972 -10.25307,8.83886 z"),t($,"inkscape:connector-curvature","0"),t($,"sodipodi:nodetypes","cccccssscccccc"),e(B,"color","#000000"),e(B,"clip-rule","nonzero"),e(B,"display","inline"),e(B,"overflow","visible"),e(B,"visibility","visible"),e(B,"opacity","1"),e(B,"isolation","auto"),e(B,"mix-blend-mode","normal"),e(B,"color-interpolation","sRGB"),e(B,"color-interpolation-filters","linearRGB"),e(B,"solid-color","#000000"),e(B,"solid-opacity","1"),e(B,"fill","#ffffff"),e(B,"fill-opacity","1"),e(B,"fill-rule","evenodd"),e(B,"stroke","#ffffff"),e(B,"stroke-width","13.0708"),e(B,"stroke-linecap","round"),e(B,"stroke-linejoin","round"),e(B,"stroke-miterlimit","4"),e(B,"stroke-dasharray","none"),e(B,"stroke-dashoffset","0"),e(B,"stroke-opacity","1"),e(B,"marker","none"),e(B,"paint-order","stroke"),e(B,"color-rendering","auto"),e(B,"image-rendering","auto"),e(B,"shape-rendering","auto"),e(B,"text-rendering","auto"),e(B,"enable-background","accumulate"),t(B,"d","m 419.99999,557.36227 c -0.41699,-9.60089 -8.81759,-17.60878 17.1252,-30.66806 31.8318,-16.02389 125.895,-35.88836 152.1537,-59.98434 19.42709,-17.82687 -70.4154,-37.66945 -55.0191,-59.07323 6.981,-9.70528 59.037,-19.96947 82.1463,-30.27386 21.90569,-9.76799 15.14129,-19.80328 31.4046,-29.97507 15.7092,-9.82558 68.3499,-19.77358 72.18929,-30.02516 -10.41359,10.52188 -68.83379,20.40327 -89.99999,30.00026 -22.3377,10.128 -21.4689,19.93018 -49.4313,29.48367 -30.1245,10.29239 -89.142,20.55268 -102.7077,30.51626 -28.4133,20.86858 46.863,42.59995 16.2024,59.99993 C 452.54309,490.92554 344.7219,510.65712 300,527.3626 c -30.9039,11.54369 -28.4079,17.74799 -30,29.99967"),t(B,"id","path3370"),t(B,"inkscape:connector-curvature","0"),t(B,"sodipodi:nodetypes","cssssscsssssc"),e(U,"stroke","#ffffff"),e(U,"stroke-width","13.0708"),e(U,"stroke-miterlimit","4"),e(U,"stroke-dasharray","none"),e(U,"stroke-opacity","1"),t(U,"transform","matrix(0.17265471,0,0,0.17265471,512.49324,-6.3296456)"),t(U,"id","g875"),t(se,"id","g1000"),t(se,"transform","rotate(16.320529,538.13563,-184.89727)"),t(oe,"transform","translate(43.778173,191.04163)"),t(oe,"id","g1015"),e(L,"font-style","normal"),e(L,"font-variant","normal"),e(L,"font-weight","bold"),e(L,"font-stretch","normal"),e(L,"font-size","32px"),e(L,"font-family","sans-serif"),e(L,"-inkscape-font-specification","'sans-serif Bold'"),e(L,"text-align","center"),e(L,"text-anchor","middle"),t(L,"y","412.12527"),t(L,"x","562.00677"),t(L,"id","tspan1019"),t(L,"sodipodi:role","line"),e(S,"font-style","normal"),e(S,"font-variant","normal"),e(S,"font-weight","bold"),e(S,"font-stretch","normal"),e(S,"font-size","32px"),e(S,"font-family","sans-serif"),e(S,"-inkscape-font-specification","'sans-serif Bold'"),e(S,"text-align","center"),e(S,"text-anchor","middle"),t(S,"id","tspan1023"),t(S,"y","452.12527"),t(S,"x","562.00677"),t(S,"sodipodi:role","line"),t(N,"id","text1021"),t(N,"y","412.12527"),t(N,"x","562.00677"),e(N,"font-style","normal"),e(N,"font-weight","normal"),e(N,"font-size","32px"),e(N,"line-height","1.25"),e(N,"font-family","sans-serif"),e(N,"fill","#767676"),e(N,"fill-opacity","1"),e(N,"stroke","none"),t(N,"xml:space","preserve"),t(H,"transform","translate(-399.13437,-122.79051)"),t(H,"id","layer1"),t(H,"inkscape:groupmode","layer"),t(H,"inkscape:label","Layer 1"),t(i,"xmlns:dc","http://purl.org/dc/elements/1.1/"),t(i,"xmlns:cc","http://creativecommons.org/ns#"),t(i,"xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),t(i,"xmlns:svg","http://www.w3.org/2000/svg"),t(i,"xmlns","http://www.w3.org/2000/svg"),t(i,"xmlns:xlink","http://www.w3.org/1999/xlink"),t(i,"xmlns:sodipodi","http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"),t(i,"xmlns:inkscape","http://www.inkscape.org/namespaces/inkscape"),t(i,"sodipodi:docname","No-Image-Placeholder.svg"),t(i,"inkscape:version","1.0 (4035a4fb49, 2020-05-01)"),t(i,"version","1.1"),t(i,"id","svg2"),t(i,"viewBox","0 0 329.77792 406.00738"),t(i,"height","406.00739"),t(i,"width","329.77792")},m(Me,be){te(Me,i,be),n(i,r),n(r,o),n(o,s),n(o,f),n(r,k),n(r,_),n(r,M),n(r,m),n(r,u),n(r,b),n(r,c),n(r,v),n(r,w),n(r,I),n(r,W),n(r,j),n(r,T),n(r,F),n(i,y),n(y,ie),n(y,de),n(y,ue),n(y,fe),n(y,pe),n(y,he),n(y,me),n(y,ge),n(y,ke),n(y,ve),n(y,_e),n(y,ye),n(i,we),n(we,Re),n(Re,re),n(re,ze),n(ze,Se),n(re,Be),n(re,Ce),n(i,H),n(H,O),n(H,oe),n(oe,D),n(oe,se),n(se,C),n(se,U),n(U,R),n(U,z),n(U,E),n(U,G),n(U,x),n(U,$),n(U,B),n(H,N),n(N,L),n(L,Ve),n(N,S),n(S,Pe)},p:J,i:J,o:J,d(Me){Me&&l(i)}}}class Gt extends xe{constructor(i){super(),$e(this,i,null,$t,Ge,{})}}function Rt(a){let i,r,o;return r=new Gt({}),{c(){i=V("div"),je(r.$$.fragment),this.h()},l(s){i=P(s,"DIV",{class:!0});var f=d(i);Ie(r.$$.fragment,f),f.forEach(l),this.h()},h(){t(i,"class","svelte-8y53z5")},m(s,f){te(s,i,f),De(r,i,null),o=!0},p:J,i(s){o||(X(r.$$.fragment,s),o=!0)},o(s){ee(r.$$.fragment,s),o=!1},d(s){s&&l(i),Oe(r)}}}class zt extends xe{constructor(i){super(),$e(this,i,null,Rt,Ge,{})}}function ct(a){let i,r;return i=new vt({}),{c(){je(i.$$.fragment)},l(o){Ie(i.$$.fragment,o)},m(o,s){De(i,o,s),r=!0},i(o){r||(X(i.$$.fragment,o),r=!0)},o(o){ee(i.$$.fragment,o),r=!1},d(o){Oe(i,o)}}}function dt(a){let i,r;return i=new zt({}),{c(){je(i.$$.fragment)},l(o){Ie(i.$$.fragment,o)},m(o,s){De(i,o,s),r=!0},i(o){r||(X(i.$$.fragment,o),r=!0)},o(o){ee(i.$$.fragment,o),r=!1},d(o){Oe(i,o)}}}function Bt(a){let i,r,o,s,f,k,_,M,m,u,b,c=a[0]&&ct();_=new bt({});let v=!a[1]&&dt();return u=new xt({}),{c(){c&&c.c(),i=Q(),r=V("div"),o=V("header"),s=V("h1"),f=ae("Image-map Generator"),k=Q(),je(_.$$.fragment),M=Q(),v&&v.c(),m=Q(),je(u.$$.fragment),this.h()},l(w){c&&c.l(w),i=Z(w),r=P(w,"DIV",{class:!0});var I=d(r);o=P(I,"HEADER",{class:!0});var W=d(o);s=P(W,"H1",{class:!0});var j=d(s);f=le(j,"Image-map Generator"),j.forEach(l),W.forEach(l),k=Z(I),Ie(_.$$.fragment,I),M=Z(I),v&&v.l(I),m=Z(I),Ie(u.$$.fragment,I),I.forEach(l),this.h()},h(){t(s,"class","svelte-1d0klag"),t(o,"class","svelte-1d0klag"),t(r,"class","pageWrapper")},m(w,I){c&&c.m(w,I),te(w,i,I),te(w,r,I),n(r,o),n(o,s),n(s,f),n(r,k),De(_,r,null),n(r,M),v&&v.m(r,null),n(r,m),De(u,r,null),b=!0},p(w,[I]){w[0]?c?I&1&&X(c,1):(c=ct(),c.c(),X(c,1),c.m(i.parentNode,i)):c&&(st(),ee(c,1,1,()=>{c=null}),ot()),w[1]?v&&(st(),ee(v,1,1,()=>{v=null}),ot()):v?I&2&&X(v,1):(v=dt(),v.c(),X(v,1),v.m(r,m))},i(w){b||(X(c),X(_.$$.fragment,w),X(v),X(u.$$.fragment,w),b=!0)},o(w){ee(c),ee(_.$$.fragment,w),ee(v),ee(u.$$.fragment,w),b=!1},d(w){c&&c.d(w),w&&l(i),w&&l(r),Oe(_),v&&v.d(),Oe(u)}}}function Mt(a,i,r){let o,s;return ce(a,Te,f=>r(0,o=f)),ce(a,Le,f=>r(1,s=f)),[o,s]}class Dt extends xe{constructor(i){super(),$e(this,i,Mt,Bt,Ge,{})}}export{Dt as default};
