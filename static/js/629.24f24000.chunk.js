"use strict";(self.webpackChunkmp_react=self.webpackChunkmp_react||[]).push([[629],{6629:(n,e,r)=>{r.r(e),r.d(e,{GreyBg:()=>T,ListBox:()=>v,ListLink:()=>w,ListP:()=>C,PageBtn:()=>S,PageNationBox:()=>N,WhiteBg:()=>L,default:()=>_});var t,o,i,c,s,a,l,d,x,p,h=r(7528),g=r(5043),u=r(357),b=r(9356),f=r(3216),j=r(5475),m=r(9178),A=r(7343),y=r(2637),k=r(579);const v=u.Ay.div(t||(t=(0,h.A)(["\n    padding: 10px;\n    border-bottom: 1px solid rgb(255, 255, 255);\n"]))),w=u.Ay.p(o||(o=(0,h.A)(["\n    font-size: 16px;\n    font-weight: 550;\n    margin: 5px;\n    text-decoration: none;\n    color: #333;\n    cursor: pointer;\n"]))),C=u.Ay.p(i||(i=(0,h.A)(["\n    font-size: 13px;\n    margin: 5px;\n    color: grey;\n"]))),L=u.Ay.div(c||(c=(0,h.A)(["\n    background-color: #fff;\n    width: 100%;\n    height: 100%;\n"]))),T=u.Ay.div(s||(s=(0,h.A)(["\n    //background-color: #fff;\n    background-color: rgb(241, 241, 241);\n    width: 90%;\n    margin: 20px auto;\n    border-radius: 5px;\n"]))),B=u.Ay.div(a||(a=(0,h.A)(["\n    width: 90%;\n    display: flex;\n    margin: 20px auto;\n    height: 80px;\n"]))),z=u.Ay.input(l||(l=(0,h.A)(["\n    width: 150px;\n    padding: 5px 10px;\n    height: 30px;\n    border: solid 1px rgb(225, 225, 225);\n    color: rgb(161, 161, 161);\n    margin-left: 10px;\n    &:focus {\n        outline: none;\n    }\n"]))),P=u.Ay.button(d||(d=(0,h.A)(["\n    width: 80px;\n    height: 40px;\n    margin-top: 1px;\n    margin-left: 20px;\n    border: solid 2px rgb(69,136,245);;\n    background-color: transparent;\n    color: rgb(69,136,245);;\n    font-size: 14px;\n    font-weight: 500;\n    transition: all 0.3s;\n    border-radius: 3px;\n    cursor: pointer;\n    &:hover {\n        background-color: rgb(69,136,245);\n        color: #fff;\n    }\n"]))),S=u.Ay.button(x||(x=(0,h.A)(["\n    width: 30px;\n    height: 30px;\n    font-weight: 550;\n    border: solid 2px rgb(69,136,245);;\n    background-color: transparent;\n    color: rgb(69,136,245);\n    margin: 0 5px;\n    cursor: pointer;\n    &:hover {\n        background-color: rgb(69,136,245);\n        color: #fff;\n    }\n"]))),N=u.Ay.div(p||(p=(0,h.A)(["\n    width: 80%;\n    height: 40px;\n    margin: 80px auto;\n    display: flex;\n    justify-content: end;\n"]))),_=function(){const n=(0,f.Zp)(),{category:e,pageNum:r}=(0,f.g)(),[t,o]=(0,g.useState)(),[i,c]=(0,g.useState)(""),[s,a]=(0,j.ok)(),l=s.get("searchText");let d=l+" \uc5d0 \ub300\ud55c \uac80\uc0c9 \uacb0\uacfc";const[x,p]=(0,g.useState)(!0),[h,u]=A.Ay.useMessage();return(0,g.useEffect)((()=>{"string"===typeof l&&(c(l),m.A.search(l,r).then((n=>{let e={...n};o(e)})))}),[e,r]),(0,k.jsxs)(L,{children:[u,(0,k.jsxs)(b.TJ,{children:[(0,k.jsxs)(b.u,{children:[(0,k.jsx)(j.N_,{to:"/",children:(0,k.jsx)("small",{children:"HOME"})}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("p",{style:{fontSize:"25px"},children:d})]}),(0,k.jsx)(b.iI,{children:(0,k.jsx)(b.UH,{onClick:()=>{var r;y.A.getLoginCheck()?n("/problems/write?category=".concat(e)):(r="\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4",h.open({type:"error",content:"".concat(r),duration:1}))},children:"\ubb38\uc81c \ub4f1\ub85d\ud558\uae30"})})]}),(0,k.jsxs)(B,{children:[(0,k.jsx)(z,{name:"searchText",value:i,onChange:n=>c(n.target.value),placeholder:"\uac8c\uc2dc\ubb3c \uc81c\ubaa9 \uac80\uc0c9"}),(0,k.jsx)(P,{onClick:()=>{m.A.search(i,r).then((n=>{let e={...n};o(e),p(!1)}))},children:"\uac80\uc0c9"})]}),(0,k.jsx)(T,{children:t&&t.problemList.map(((e,r)=>(0,k.jsxs)(v,{children:[(0,k.jsx)(w,{onClick:()=>{n("../detail/".concat(e.problemId,"/?commentPage=1"))},children:e.title}),(0,k.jsxs)(C,{children:[e.price,"C"]})]},r)))}),(0,k.jsxs)(N,{children:[t&&t.next>11?(0,k.jsx)(S,{onClick:()=>n("../".concat(null===t||void 0===t?void 0:t.prev,"/?searchText=").concat(i)),children:"\uc774\uc804"}):(0,k.jsx)(k.Fragment,{}),t&&t.numList.map(((e,r)=>(0,k.jsx)(S,{onClick:()=>{n("../".concat(e,"/?searchText=").concat(i))},children:e},r))),t&&t.start>0?(0,k.jsx)(S,{onClick:()=>n("../".concat(null===t||void 0===t?void 0:t.next,"/?searchText=").concat(i)),children:"\ub2e4\uc74c"}):(0,k.jsx)(k.Fragment,{})]})]})}}}]);
//# sourceMappingURL=629.24f24000.chunk.js.map