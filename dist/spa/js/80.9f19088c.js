"use strict";(globalThis["webpackChunk_yeosu"]=globalThis["webpackChunk_yeosu"]||[]).push([[80],{2080:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var l=a(2444),s=a(5836),n=a(1388),r=a(4044);const o=["onClick"],c={class:"card cardLeft"},p={class:"ticket_title"},u={class:"title"},i=(0,l.QD)("span",null,"Reservation date",-1),d={class:"name"},m=(0,l.QD)("span",null,"Operation date",-1),D={class:"name"},Q=(0,l.QD)("span",null,"Operation time",-1),v={class:"card cardRight"},h={class:"number"},k=(0,l.QD)("span",null,"Headcount",-1),b=(0,l._M)({__name:"OperTicket",props:{tickets:{type:Array,required:!0}},setup(e){return(t,a)=>((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(e.tickets,((e,a)=>((0,l.Wz)(),(0,l.An)("div",{class:"cardWrap",key:a,onClick:a=>t.$router.push(`/book/myTicketDetail/${e.rsvNo}`)},[(0,l.QD)("div",c,[(0,l.QD)("span",p,"예약번호: "+(0,r.WA)(e.rsvNo),1),(0,l.QD)("div",u,[(0,l.QD)("h2",null,"예약일자: "+(0,r.WA)(e.rsvDt),1),i]),(0,l.QD)("div",d,[(0,l.QD)("h2",null,"운항일자: "+(0,r.WA)(e.operDt),1),m]),(0,l.QD)("div",D,[(0,l.QD)("h2",null,"운항시각: "+(0,r.WA)(e.operTm),1),Q])]),(0,l.QD)("div",v,[(0,l.QD)("div",{class:(0,r.WN)(["oper_state",{"text-green-3":"운항"===e.operStt,"text-red-3":"미운항"===e.operStt}])},(0,r.WA)(e.operStt),3),(0,l.QD)("div",h,[(0,l.QD)("h3",null,(0,r.WA)(e.headCnt)+"명",1),k])])],8,o)))),128))}}),y=b,V=y;var K=a(3132);const W=(0,l.QD)("span",{class:"text-caption"},"예약자명",-1),_=(0,l.QD)("span",{class:"text-caption"},"휴대폰 번호 뒷자리",-1),g={class:"q-mt-lg"},A=(0,l._M)({__name:"myRsvList",setup(e){const t=(0,n.bj)(),a=(0,s.IL)([{rsvNo:"2024012495",rsvDt:"2024-01-24",operDt:"2024-01-23",operTm:"am",operStt:"운항",headCnt:3},{rsvNo:"2024012495",rsvDt:"2024-01-24",operDt:"2024-01-23",operTm:"am",operStt:"미운항",headCnt:3}]);return(e,n)=>{const r=(0,l.E1)("q-input"),o=(0,l.E1)("q-tab"),c=(0,l.E1)("q-tabs");return(0,l.Wz)(),(0,l.An)(l.ae,null,[(0,l.K2)(r,{modelValue:(0,s.KV)(t).custNm,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,s.KV)(t).custNm=e),readonly:""},{prepend:(0,l.Ql)((()=>[W])),_:1},8,["modelValue"]),(0,l.K2)(r,{modelValue:(0,s.KV)(t).lastDigit,"onUpdate:modelValue":n[1]||(n[1]=e=>(0,s.KV)(t).lastDigit=e),readonly:""},{prepend:(0,l.Ql)((()=>[_])),_:1},8,["modelValue"]),(0,l.K2)(c,{modelValue:(0,s.KV)(t).period,"onUpdate:modelValue":n[2]||(n[2]=e=>(0,s.KV)(t).period=e),class:"text-blue-grey-8 q-mt-lg",dense:"",align:"justify","active-color":"primary"},{default:(0,l.Ql)((()=>[(0,l.K2)(o,{name:"month",label:"1개월"}),(0,l.K2)(o,{name:"half",label:"6개월"}),(0,l.K2)(o,{name:"year",label:"1년"}),(0,l.K2)(o,{name:"all",label:"전체"})])),_:1},8,["modelValue"]),(0,l.QD)("div",g,[a.value.length>0?((0,l.Wz)(),(0,l.Az)(V,{key:0,tickets:a.value},null,8,["tickets"])):((0,l.Wz)(),(0,l.Az)(K.c,{key:1,message:"검색된 예약리스트가 없습니다."}))])],64)}}});var T=a(540),z=a(8788),C=a(7628),N=a(5252),q=a.n(N);const f=A,x=f;q()(A,"components",{QInput:T.c,QTabs:z.c,QTab:C.c})}}]);