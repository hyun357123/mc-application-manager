import{d as J,u as Q,r as u,c as K,w as q,o as oe,z as I,a as l,b as e,e as b,g as N,v as H,F as C,f as S,s as G,h as o,p as ie,k as ce,l as P,j as M,t as m,i as ae,A as re,B as ue}from"./index-Z3I8BzbG.js";import{_ as le}from"./lodash-BkbsBS3x.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y=v=>(ie("data-v-5308cd30"),v=v(),ce(),v),pe={class:"modal",id:"modal-form",tabindex:"-1"},me={class:"modal-dialog modal-lg",role:"document"},_e={class:"modal-content"},he=y(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title"},"Create New Software catalog"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),ve={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},ge={class:"mb-3"},fe=y(()=>e("label",{class:"form-label"},"Title",-1)),be={class:"mb-3"},we=y(()=>e("label",{class:"form-label"},"Summary",-1)),ye={class:"mb-3"},ke=y(()=>e("label",{class:"form-label"},"Icon",-1)),$e={class:"mb-3"},Ce=y(()=>e("label",{class:"form-label"},"Category",-1)),xe=P('<option value="SERVER" selected data-v-5308cd30>SERVER</option><option value="WAS" data-v-5308cd30>WAS</option><option value="DB" data-v-5308cd30>DB</option><option value="UTIL" data-v-5308cd30>UTIL</option><option value="OBSERVABILITY" data-v-5308cd30>OBSERVABILITY</option>',5),Ie=[xe],Se={class:"mb-3"},Me=y(()=>e("label",{class:"form-label"},"Description",-1)),Ve={class:"mb-3"},Ue=y(()=>e("label",{class:"form-label"},"Recommended Server Spec",-1)),De={style:{display:"flex","justify-content":"space-between"}},Ne=y(()=>e("label",{class:"form-label required"},"CPU",-1)),Te=y(()=>e("label",{class:"form-label required"},"MEMORY",-1)),Ae=y(()=>e("label",{class:"form-label required"},"DISK",-1)),Re={class:"col-lg-6"},Ee={class:"mb-3"},Le=y(()=>e("label",{class:"form-label"},"Reference",-1)),He=["onUpdate:modelValue"],je=P('<option value="URL" data-v-5308cd30>URL</option><option value="MANIFEST" data-v-5308cd30>MANIFEST</option><option value="WORKFLOW" data-v-5308cd30>WORKFLOW</option><option value="IMAGE" data-v-5308cd30>IMAGE</option><option value="HOMEPAGE" data-v-5308cd30>HOMEPAGE</option><option value="TAG" data-v-5308cd30>TAG</option><option value="ETC" data-v-5308cd30>ETC</option>',7),Be=[je],Oe={class:"col-lg-6"},Fe={class:"mb-3"},Ge=y(()=>e("label",{class:"form-label"}," ",-1)),Pe=["onUpdate:modelValue"],ze={class:"mb-3"},We={class:"input-form"},Ye=["onUpdate:modelValue"],Ke={class:"btn-list"},qe={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-plus",style:{margin:"0 !important"}},Je=y(()=>e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1)),Qe=y(()=>e("path",{d:"M12 5l0 14"},null,-1)),Xe=y(()=>e("path",{d:"M5 12l14 0"},null,-1)),Ze=[Je,Qe,Xe],et=["onClick"],tt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-minus",style:{margin:"0 !important"}},at=y(()=>e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1)),st=y(()=>e("path",{d:"M5 12l14 0"},null,-1)),lt=[at,st],ot=y(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 5l0 14"}),e("path",{d:"M5 12l14 0"})],-1)),se="http://192.168.6.30:18084",nt=J({__name:"softwareCatalogForm",props:{mode:{},catalogIdx:{}},emits:["get-list"],setup(v,{emit:$}){const d=Q(),c=u({}),h=u([]),V=u([]);window.location.host.split(":");const n=$,i=v,x=K(()=>i.catalogIdx);q(x,async()=>{await f()}),oe(async()=>{await f()});const f=async()=>{i.mode=="update"?await L():(c.value={catalogIdx:null,catalogTitle:"",catalogDescription:"",catalogSummary:"",catalogCategory:"",catalogRefData:[]},h.value=[],h.value.push({catalogRefIdx:null,catalogIdx:null,referncetIdx:0,referenceValue:"",referenceDescription:"",referenceType:"URL"}))},L=async()=>{try{await I.get(se+"/catalog/software/"+i.catalogIdx).then(({data:p})=>{c.value=p,p.catalogRefData.forEach(r=>{r.referenceType!==null&&(r.referenceType=r.referenceType.toUpperCase())}),h.value=p.catalogRefData})}catch(p){console.log(p),d.error("데이터를 가져올 수 없습니다.")}},w=()=>{console.log("addRef"),h.value.push({catalogRefIdx:null,catalogIdx:null,referncetIdx:0,referenceValue:"",referenceDescription:"",referenceType:"URL"})},U=p=>{h.value.length!==1&&h.value.splice(p,1)},T=p=>{V.value=p.target.files[0]},A=async()=>{const p=new FormData;if(p.append("iconFile",V.value),c.value.catalogRefData=h.value,p.append("catalogDto",new Blob([JSON.stringify(c.value)],{type:"application/json"})),i.mode=="new"){const r=await I.post(se+"/catalog/software",p,{headers:{"Content-Type":"multipart/form-data"}});r.data?r.data.data==null?(d.error("등록 할 수 없습니다."),f()):(d.success("등록되었습니다."),n("get-list")):(d.error("등록 할 수 없습니다."),f())}else(await I.put(se+"/catalog/software",p,{headers:{"Content-Type":"multipart/form-data"}})).data?(d.success("수정되었습니다."),n("get-list")):(d.error("수정 할 수 없습니다."),f())};return(p,r)=>(o(),l("div",pe,[e("div",me,[e("div",_e,[he,e("div",ve,[e("div",ge,[fe,b(e("input",{type:"text",class:"form-control",id:"sc-title",name:"title",placeholder:"Application name","onUpdate:modelValue":r[0]||(r[0]=_=>c.value.catalogTitle=_)},null,512),[[N,c.value.catalogTitle]])]),e("div",be,[we,b(e("input",{type:"text",class:"form-control",id:"sc-summary",name:"summary",placeholder:"Application summary","onUpdate:modelValue":r[1]||(r[1]=_=>c.value.catalogSummary=_)},null,512),[[N,c.value.catalogSummary]])]),e("div",ye,[ke,e("input",{type:"file",class:"form-control",id:"sc-icon",name:"icon",placeholder:"Icon File",onChange:T},null,32)]),e("div",$e,[Ce,b(e("select",{class:"form-select",id:"sc-category","onUpdate:modelValue":r[2]||(r[2]=_=>c.value.catalogCategory=_)},Ie,512),[[H,c.value.catalogCategory]])]),e("div",Se,[Me,b(e("textarea",{class:"form-control",rows:"5",id:"sc-desc","onUpdate:modelValue":r[3]||(r[3]=_=>c.value.catalogDescription=_)},null,512),[[N,c.value.catalogDescription]])]),e("div",Ve,[Ue,e("div",De,[e("div",null,[Ne,b(e("input",{type:"number",class:"form-control w-90-per",placeholder:"2","onUpdate:modelValue":r[4]||(r[4]=_=>c.value.recommendedCpu=_)},null,512),[[N,c.value.recommendedCpu]])]),e("div",null,[Te,b(e("input",{type:"number",class:"form-control w-90-per",placeholder:"4","onUpdate:modelValue":r[5]||(r[5]=_=>c.value.recommendedMemory=_)},null,512),[[N,c.value.recommendedMemory]])]),e("div",null,[Ae,b(e("input",{type:"number",class:"form-control w-90-per",placeholder:"20","onUpdate:modelValue":r[6]||(r[6]=_=>c.value.recommendedDisk=_)},null,512),[[N,c.value.recommendedDisk]])])])]),(o(!0),l(C,null,S(h.value,(_,R)=>(o(),l("div",{class:"row",id:"sc-ref",key:R},[e("div",Re,[e("div",Ee,[Le,b(e("select",{class:"form-select",id:"sc-reference-1","onUpdate:modelValue":D=>_.referenceType=D},Be,8,He),[[H,_.referenceType]])])]),e("div",Oe,[e("div",Fe,[Ge,b(e("input",{type:"text",class:"form-control",id:"sc-ref-value-1",name:"refValue",placeholder:"Ref value","onUpdate:modelValue":D=>_.referenceValue=D},null,8,Pe),[[N,_.referenceValue]])])]),e("div",ze,[e("div",We,[b(e("input",{type:"text",class:"form-control w-80-per",id:"sc-ref-desc-1",name:"refDescription",placeholder:"Ref Description","onUpdate:modelValue":D=>_.referenceDescription=D},null,8,Ye),[[N,_.referenceDescription]]),e("div",Ke,[e("button",{class:"btn btn-primary",onClick:w,style:{"text-align":"center !important"}},[(o(),l("svg",qe,Ze))]),e("button",{class:"btn btn-primary",onClick:D=>U(R)},[(o(),l("svg",tt,lt))],8,et)])])])]))),128))]),e("div",{class:"modal-footer"},[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:f}," Cancel "),e("a",{class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:A},[ot,G(" Create New Software catalog ")])])])])]))}}),it=de(nt,[["__scopeId","data-v-5308cd30"]]),ct={class:"modal",id:"softwareCatalogLog",tabindex:"-1"},dt={class:"modal-dialog modal-xl",role:"document"},rt={class:"modal-content"},ut=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),pt={class:"modal-body text-left py-4"},mt={class:"mb-5"},_t={key:0,class:"spinner-border",role:"status"},ht=e("span",{class:"visually-hidden"},"Loading...",-1),vt=[ht],gt={key:0},ft=e("p",{class:"text-secondary"},"No Data",-1),bt=[ft],wt={class:"card mb-3"},yt=["onClick"],kt={class:"card-title"},$t={key:0,class:"card-body"},Ct=["value"],xt="http://192.168.6.30:18084",It=J({__name:"softwareCatalogLog",props:{jobName:{}},setup(v){Q();const $=v,d=u(!1);window.location.host.split(":");const c=K(()=>$.jobName);q(c,async()=>{d.value=!1,await V()});const h=u([]),V=async()=>{h.value=[];const f=await I.get(xt+"/ape/log/"+c.value);h.value=f.data.data,d.value=!0},n=()=>{h.value=[],i.value=1},i=u(1),x=f=>{i.value===f?i.value=0:i.value=f};return(f,L)=>(o(),l("div",ct,[e("div",dt,[e("div",rt,[ut,e("div",pt,[e("h3",mt,[G(" Build Log "),d.value?M("",!0):(o(),l("div",_t,vt))]),e("div",null,[h.value.length<=0?(o(),l("div",gt,bt)):(o(!0),l(C,{key:1},S(h.value,w=>(o(),l("div",{key:w.buildIdx},[e("div",wt,[e("div",{class:"card-header",onClick:U=>x(w.buildIdx),style:{cursor:"pointer"}},[e("h3",kt,m(w.buildIdx),1)],8,yt),i.value===w.buildIdx?(o(),l("div",$t,[e("textarea",{value:w.buildLog,disabled:"",style:{width:"100%"},rows:"20"},null,8,Ct)])):M("",!0)])]))),128))])]),e("div",{class:"modal-footer"},[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:n}," Cancel ")])])])]))}}),E=v=>(ie("data-v-b0d479e9"),v=v(),ce(),v),St={class:"modal",id:"install-form",tabindex:"-1"},Mt={class:"modal-dialog modal-lg",role:"document"},Vt={class:"modal-content"},Ut={class:"modal-header"},Dt={class:"modal-title"},Nt={class:"modal-body",style:{"max-height":"calc(100vh - 200px)","overflow-y":"auto"}},Tt={class:"mb-3"},At=E(()=>e("label",{class:"form-label"},"Namespace",-1)),Rt={key:0,class:"text-muted"},Et={key:1,class:"text-muted"},Lt=["value"],Ht={value:"selectNsId"},jt={class:"mb-3"},Bt=E(()=>e("label",{class:"form-label"},"MCI Name",-1)),Ot={key:0,class:"text-muted"},Ft={key:1,class:"text-muted"},Gt=["disabled"],Pt=["value"],zt={class:"mb-3"},Wt=E(()=>e("label",{class:"form-label"},"VM Name",-1)),Yt=E(()=>e("p",{class:"text-muted"},"Select the virtual machine (VM) within the chosen multi-cloud infrastructure where the application will be deployed",-1)),Kt=["disabled"],qt=["value"],Jt={class:"mb-3"},Qt=E(()=>e("label",{class:"form-label"},"Application",-1)),Xt=E(()=>e("p",{class:"text-muted"},"applications to install (e.g. nginx,tomcat,mariadb,redis,grafana,prometheus)",-1)),Zt={class:"mb-3"},ea=E(()=>e("label",{class:"form-label"},"Namespace",-1)),ta={key:0,class:"text-muted"},aa={key:1,class:"text-muted"},sa=["value"],la={value:"selectNsId"},oa={class:"mb-3"},na=E(()=>e("label",{class:"form-label"},"ClusterName",-1)),ia={key:0,class:"text-muted"},ca={key:1,class:"text-muted"},da=["disabled"],ra=["value"],ua={class:"mb-3"},pa=E(()=>e("label",{class:"form-label"},"Helm chart",-1)),ma=E(()=>e("p",{class:"text-muted"},"Helm Charts to Install (e.g. nginx,tomcat,mariadb,redis,grafana,prometheus)",-1)),_a={class:"modal-footer",style:{display:"flex","justify-content":"space-between"}},ha=["disabled"],va=["disabled"],j="http://192.168.6.30:18084",ga=J({__name:"applicationInstallationForm",props:{nsId:{},title:{},applicationName:{},catalogIdx:{}},setup(v){window.location.host.split(":");const $=Q(),d=v,c=K(()=>d.title),h=K(()=>d.applicationName),V=u(""),n=u(""),i=u(""),x=u([]),f=u([]),L=u([]),w=u(""),U=u(""),T=u([]),A=u(""),p=u(""),r=u(!0);q(h,async()=>{await R()}),q(c,async()=>{V.value=_(d.title),n.value=d.title,await R()}),oe(async()=>{await R()});const _=a=>a.split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "),R=async()=>{p.value=d.applicationName,le.isEmpty(d.nsId)?await D():i.value=d.nsId,n.value==="vm_application_uninstall"||n.value==="helm_application_uninstall"?r.value=!1:r.value=!0},D=async()=>{const a=await I.get(j+"/cbtumblebug/ns");x.value=a.data,x.value.length>0&&(i.value=x.value[0].name,n.value=="vm_application_install"||n.value=="vm_application_uninstall"?await B():await O()),le.isEmpty(i.value)||(n.value=="vm_application_install"||n.value=="vm_application_uninstall"?await B():await O())},B=async()=>{const a=await I.get(j+"/cbtumblebug/ns/"+i.value+"/mci");f.value=a.data,f.value.length>0?(w.value=f.value[0].name,await z()):w.value=""},z=async()=>{const a=await I.get(j+"/cbtumblebug/ns/"+i.value+"/mci/"+w.value);L.value=a.data.vm,f.value.length>0?U.value=L.value[0].name:U.value=""},O=async()=>{const a=await I.get(j+"/cbtumblebug/ns/"+i.value+"/k8scluster");T.value=a.data,T.value.length>0?A.value=T.value[0].name:A.value=""},F=async()=>{await B()},X=async()=>{await z()},W=async()=>{await O()},Z=async()=>{if(n.value=="vm_application_install"||n.value=="vm_application_uninstall"){let a="";n.value=="vm_application_install"?a="/ape/vm/install":a="/ape/vm/uninstall";const s=p.value.split(",").map(k=>k.trim()),t={namespace:i.value,mciName:w.value,vmName:U.value,applications:s},g=await I.post(j+a,t);g.data.code==200&&g.data.message?$.success(g.data.message):$.error(g.data.message)}else if(n.value=="helm_application_install"||n.value=="helm_application_uninstall"){let a="";n.value=="helm_application_install"?a="/ape/helm/install":a="/ape/helm/uninstall";const s=p.value.split(",").map(k=>k.trim()),t={namespace:i.value,clusterName:A.value,helmCharts:s},g=await I.post(j+a,t);g.data.code==200&&g.data.message?$.success(g.data.message):$.error(g.data.message)}},ee=async()=>{te().then(a=>{let s=!0,t="";if(!a){n.value==="vm_application_install"||n.value==="vm_application_uninstall"?t="VM":(n.value==="helm_application_install"||n.value==="helm_application_uninstall")&&(t="CLUSTER");const g="Your selected "+t+" has lower specifications than recommended. Would you like to continue with the installation?";s=confirm(g)}s&&($.success("Please click RUN"),r.value=!1)})},te=async()=>{let a=!1,s="",t="";return n.value==="vm_application_install"||n.value==="vm_application_uninstall"?(s="/applications/vm/check/application",t="?namespace="+i.value+"&mciName="+w.value+"&vmName="+U.value+"&catalogId="+d.catalogIdx):(n.value==="helm_application_install"||n.value==="helm_application_uninstall")&&(s="/applications/k8s/check/application",t="?namespace="+i.value+"&clusterName="+A.value+"&catalogId="+d.catalogIdx),a=await I.get(j+s+t),a};return(a,s)=>(o(),l("div",St,[e("div",Mt,[e("div",Vt,[e("div",Ut,[e("h5",Dt,m(n.value=="vm_application_install"?"Application installation for VM":n.value=="vm_application_uninstall"?"Application uninstallation for VM":n.value=="helm_application_install"?"Application installation for k8s":n.value=="helm_application_uninstall"?"Application uninstallation for k8s":"")+" "+m(h.value),1),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:R})]),e("div",Nt,[n.value=="vm_application_install"||n.value=="vm_application_uninstall"?(o(),l(C,{key:0},[e("div",Tt,[At,n.value=="vm_application_install"?(o(),l("p",Rt,"Select the namespace where the application will be installed")):n.value=="vm_application_uninstall"?(o(),l("p",Et,"Select the namespace where the application will be uninstalled")):M("",!0),x.value.length>0?b((o(),l("select",{key:2,class:"form-select",id:"namesapce","onUpdate:modelValue":s[0]||(s[0]=t=>i.value=t),onChange:F},[(o(!0),l(C,null,S(x.value,t=>(o(),l("option",{value:t.name,key:t.name},m(t.name),9,Lt))),128))],544)),[[H,i.value]]):b((o(),l("select",{key:3,class:"form-select",id:"namesapce","onUpdate:modelValue":s[1]||(s[1]=t=>i.value=t),onChange:F},[e("option",Ht,m(i.value),1)],544)),[[H,i.value]])]),e("div",jt,[Bt,n.value=="vm_application_install"?(o(),l("p",Ot,"Select the multi-cloud infrastructure information where the application will be deployed")):n.value=="vm_application_uninstall"?(o(),l("p",Ft,"Remove the application and associated resources from the multi-cloud infrastructure")):M("",!0),b(e("select",{class:"form-select",id:"mci-name",disabled:i.value=="","onUpdate:modelValue":s[2]||(s[2]=t=>w.value=t),onChange:X},[(o(!0),l(C,null,S(f.value,t=>(o(),l("option",{value:t.id,key:t.name},m(t.name),9,Pt))),128))],40,Gt),[[H,w.value]])]),e("div",zt,[Wt,Yt,b(e("select",{class:"form-select",id:"mci-name",disabled:w.value=="","onUpdate:modelValue":s[3]||(s[3]=t=>U.value=t)},[(o(!0),l(C,null,S(L.value,t=>(o(),l("option",{value:t.id,key:t.name},m(t.name),9,qt))),128))],8,Kt),[[H,U.value]])]),e("div",Jt,[Qt,Xt,b(e("input",{type:"text",class:"form-control",id:"sc-title",name:"title",placeholder:"nginx, tomcat ...","onUpdate:modelValue":s[4]||(s[4]=t=>p.value=t),disabled:""},null,512),[[N,p.value]])])],64)):n.value=="helm_application_install"||n.value=="helm_application_uninstall"?(o(),l(C,{key:1},[e("div",Zt,[ea,n.value=="helm_application_install"?(o(),l("p",ta,"Select the namespace where the application will be installed")):n.value=="helm_application_uninstall"?(o(),l("p",aa,"Select the namespace where the application will be uninstalled")):M("",!0),x.value.length>0?b((o(),l("select",{key:2,class:"form-select",id:"namesapce","onUpdate:modelValue":s[5]||(s[5]=t=>i.value=t),onChange:W},[(o(!0),l(C,null,S(x.value,t=>(o(),l("option",{value:t.name,key:t.name},m(t.name),9,sa))),128))],544)),[[H,i.value]]):b((o(),l("select",{key:3,class:"form-select",id:"namesapce","onUpdate:modelValue":s[6]||(s[6]=t=>i.value=t),onChange:F},[e("option",la,m(i.value),1)],544)),[[H,i.value]])]),e("div",oa,[na,n.value=="helm_application_install"?(o(),l("p",ia,"Select the name of the cluster where the application will be deployed")):n.value=="helm_application_uninstall"?(o(),l("p",ca,"Remove the application and associated resources from the multi-cloud infrastructure")):M("",!0),b(e("select",{class:"form-select",id:"mci-name",disabled:i.value=="","onUpdate:modelValue":s[7]||(s[7]=t=>A.value=t)},[(o(!0),l(C,null,S(T.value,t=>(o(),l("option",{value:t.id,key:t.name},m(t.name),9,ra))),128))],8,da),[[H,A.value]])]),e("div",ua,[pa,ma,b(e("input",{type:"text",class:"form-control",id:"sc-title",name:"title",placeholder:"nginx, tomcat ...","onUpdate:modelValue":s[8]||(s[8]=t=>p.value=t),disabled:""},null,512),[[N,p.value]])])],64)):M("",!0)]),e("div",_a,[e("a",{class:"btn btn-link link-secondary","data-bs-dismiss":"modal",onClick:R}," Cancel "),e("div",null,[n.value!=="vm_application_uninstall"&&n.value!=="helm_application_uninstall"?(o(),l("button",{key:0,class:"btn btn-danger ms-auto",onClick:ee,style:{"margin-right":"5px"},disabled:!r.value}," Spec Check ",8,ha)):M("",!0),e("button",{class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:Z,disabled:r.value}," RUN ",8,va)])])])])]))}}),fa=de(ga,[["__scopeId","data-v-b0d479e9"]]);/*!
* Tabler v1.0.0-beta19 (https://tabler.io)
* @version 1.0.0-beta19
* @link https://tabler.io
* Copyright 2018-2023 The Tabler Authors
* Copyright 2018-2023 codecalm.net Paweł Kuna
* Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
*/(function(v){typeof define=="function"&&define.amd?define(v):v()})(function(){var v,$="tablerTheme",d=new Proxy(new URLSearchParams(window.location.search),{get:function(h,V){return h.get(V)}});if(d.theme)localStorage.setItem($,d.theme),v=d.theme;else{var c=localStorage.getItem($);v=c||"light"}v==="dark"?document.body.setAttribute("data-bs-theme",v):document.body.removeAttribute("data-bs-theme")});const ba={class:"page",ref:"sofwareCatalog"},wa={class:"page-wrapper"},ya=e("div",{class:"col"},[e("h2",{class:"page-title"},"Software catalog")],-1),ka=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plus",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 5l0 14"}),e("path",{d:"M5 12l14 0"})],-1),$a={class:"page-body"},Ca={class:"container-xl"},xa={class:"row"},Ia={class:"col-lg-8"},Sa={class:"card"},Ma={class:"list-group card-list-group",id:"sc-list-group"},Va={class:"row g-2 align-items-center"},Ua={class:"col-auto fs-3"},Da={class:"col-auto"},Na=["src"],Ta=["onClick"],Aa={class:"text-muted"},Ra={class:"col-auto text-muted"},Ea={class:"col-auto lh-1"},La={class:"dropdown"},Ha=P('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),ja={class:"dropdown-menu dropdown-menu-end"},Ba=["onClick"],Oa=["id"],Fa={class:"accordion-body pt-0"},Ga=e("br",null,null,-1),Pa=e("br",null,null,-1),za=["onClick"],Wa=["onClick"],Ya=e("br",null,null,-1),Ka=e("br",null,null,-1),qa=e("strong",null,"관련 정보",-1),Ja=["id"],Qa=["onClick"],Xa=e("strong",null,"TAGS",-1),Za=["id"],es=e("strong",null,"Recommended Spec",-1),ts=["id"],as={class:"btn btn-sm",style:{"margin-right":"5px"}},ss={class:"btn btn-sm",style:{"margin-right":"5px"}},ls={class:"btn btn-sm",style:{"margin-right":"5px"}},os={class:"col-lg-4"},ns=e("div",null,[e("br")],-1),is=e("h3",{class:"mb-3"},"dockerHub search",-1),cs={key:0,class:"col-md-6 col-lg-12",id:"resultDockerHubEmpty"},ds={class:"row row-cards",id:"resultDockerHubSearch"},rs={class:"card"},us={class:"row row-0"},ps={class:"col-auto"},ms=["src"],_s={class:"col"},hs={class:"card-body"},vs={href:"",target:"_blank"},gs={class:"text-muted"},fs=P('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),bs=e("a",{class:"dropdown-item",href:"#"}," softwareCatalog로 내용 입력 ",-1),ws=e("a",{class:"dropdown-item",href:"#"}," file/image를 nexus로 복제 ",-1),ys=e("div",{style:{"margin-bottom":"20px"}}," ",-1),ks=e("h3",{class:"mb-3"},"artifactHub search",-1),$s={key:1,class:"col-md-6 col-lg-12",id:"resultArtifactHubEmpty"},Cs={class:"row row-cards",id:"resultArtifactHubSearch"},xs={class:"card"},Is={class:"row row-0"},Ss=e("div",{class:"col-auto"},[e("img",{src:"https://artifacthub.io/static/media/placeholder_pkg_helm.png",class:"rounded-start",alt:"Shape of You",width:"80",height:"80"})],-1),Ms={class:"col"},Vs={class:"card-body"},Us={href:"",target:"_blank"},Ds={class:"text-muted"},Ns=P('<a href="#" class="link-secondary" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></a>',1),Ts=e("a",{class:"dropdown-item",href:"#"}," softwareCatalog로 내용 입력 ",-1),As=e("a",{class:"dropdown-item",href:"#"}," file/image를 nexus로 복제 ",-1),Y="http://192.168.6.30:18084",Hs=J({__name:"SoftwareCatalogList",setup(v){const $=Q(),d=u([]),c=u("");window.location.host.split(":");const h=u([]),V=u([]),n=u(0),i=u(""),x=u("new"),f=u(""),L=u(""),w=u(""),U=u(0);oe(async()=>{c.value="",window.addEventListener("message",async function(a){const s=a.data;s.projectInfo&&(f.value=s.projectInfo.ns_id)}),await T()});const T=async()=>{try{const a=await I.get(Y+"/catalog/software/?title="+c.value);le.forEach(a.data,function(s){s.catalogIcon=Y+s.catalogIcon,s.refData=A(s.catalogRefData),s.isShow=!1}),d.value=a.data}catch(a){console.log(a),$.error("데이터를 가져올 수 없습니다.")}},A=a=>a.reduce((s,t)=>(s[t.referenceType]||(s[t.referenceType]=[]),s[t.referenceType].push(t),s),{}),p=async a=>{a.keyCode==13&&(await T(),await r(),await _())},r=async()=>{try{const a=await I.get(Y+"/search/dockerhub/"+c.value);for(let s=0;s<3;s++)h.value.push(a.data.data.results[s])}catch(a){console.log(a),$.error("데이터를 가져올 수 없습니다.")}},_=async()=>{try{const a=await I.get(Y+"/search/artifacthub/"+c.value);for(let s=0;s<3;s++)V.value.push(a.data.data.packages[s])}catch(a){console.log(a),$.error("데이터를 가져올 수 없습니다.")}},R=async a=>{d.value.forEach(s=>{s.isShow=!1}),d.value[a].isShow=!d.value[a].isShow,w.value=d.value[a].catalogTitle,U.value=d.value[a].catalogIdx},D=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),B=a=>{window.open(a)},z=a=>{x.value="update",n.value=a},O=()=>{x.value="new",n.value=0},F=()=>{let a=`https://hub.docker.com/search?q=${c.value}`;window.open(a,"_blank")},X=()=>{let a=`https://artifacthub.io/packages/search?ts_query_web=${c.value}&sort=relevance&page=1`;window.open(a,"_blank")},W=(a,s)=>s.includes(a),Z=a=>a.split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "),ee=a=>{i.value=a},te=a=>{L.value=a};return(a,s)=>(o(),l("div",ba,[e("div",wa,[e("div",{class:"page-header d-print-none"},[e("div",{class:"container-xl"},[e("div",{class:"row g-2 align-items-center"},[ya,e("div",{class:"col-auto ms-auto"},[e("div",{class:"btn-list"},[e("a",{class:"btn btn-primary d-none d-sm-inline-block",onClick:O,"data-bs-toggle":"modal","data-bs-target":"#modal-form"},[ka,G(" New ")])])])])])]),e("div",$a,[e("div",Ca,[e("div",xa,[e("div",Ia,[e("div",Sa,[e("div",Ma,[(o(!0),l(C,null,S(d.value,(t,g)=>(o(),l("div",{class:"list-group-item",key:g},[e("div",Va,[e("div",Ua,m(g+1),1),e("div",Da,[e("img",{src:t.catalogIcon,class:"rounded",alt:"Catalog Icon",width:"40",height:"40"},null,8,Na)]),e("div",{class:"col",onClick:k=>R(g)},[G(m(t.catalogTitle)+" ",1),e("div",Aa,m(t.catalogSummary),1)],8,Ta),e("div",Ra,m(t.catalogCategory),1),e("div",Ea,[e("div",La,[Ha,e("div",ja,[e("a",{class:"dropdown-item",onClick:k=>z(t.catalogIdx),"data-bs-toggle":"modal","data-bs-target":"#modal-form"},"Update",8,Ba)])])]),e("div",{id:"accordion_"+t.catalogIdx,class:"accordion-collapse collapse",style:re([t.isShow?{display:"block"}:{display:"none"}])},[e("div",Fa,[Ga,G(" "+m(t.catalogDescription)+" ",1),e("div",null,[Pa,(o(!0),l(C,null,S(t.refData.workflow,k=>(o(),l("div",{class:"btn-list",style:{width:"70%"},key:k.catalogRefIdx},[e("a",{class:ue(["btn",{"btn-outline-primary":W("install",k.referenceValue),"btn-outline-danger":W("uninstall",k.referenceValue)}]),style:{"margin-bottom":"10px"},onClick:ne=>te(k.referenceValue),"data-bs-toggle":"modal","data-bs-target":"#install-form"},m(Z(k.referenceValue)),11,za),e("button",{class:"btn btn-primary",style:{"text-align":"center !important","margin-bottom":"10px"},onClick:ne=>ee(k.referenceValue),id:"log-btn","data-bs-toggle":"modal","data-bs-target":"#softwareCatalogLog"},"  LOG  ",8,Wa)]))),128)),Ya,Ka,qa,e("ul",{id:`${g}-entity-ul`},[D(t.refData,"HOMEPAGE")?(o(!0),l(C,{key:0},S(t.refData.HOMEPAGE,k=>(o(),l("li",null,[e("a",{onClick:ne=>B(k.referenceValue),class:"btn"},m(k.referenceValue),9,Qa)]))),256)):M("",!0)],8,Ja),Xa,e("ul",{id:`${g}-tag-ul`},[D(t.refData,"TAG")?(o(!0),l(C,{key:0},S(t.refData.TAG,k=>(o(),l("span",null,"#"+m(k.referenceValue)+"  ",1))),256)):M("",!0)],8,Za),es,e("ul",{id:`${g}-tag-ul`},[t.recommendedCpu&&t.recommendedMemory&&t.recommendedDisk?(o(),l(C,{key:0},[e("button",as," CPU : "+m(t.recommendedCpu),1),e("button",ss," MEMORY : "+m(t.recommendedMemory),1),e("button",ls," DISK : "+m(t.recommendedDisk),1)],64)):M("",!0)],8,ts)])])],12,Oa)])]))),128))])])]),e("div",os,[b(e("input",{type:"text",class:"form-control",placeholder:"Search…",onKeypress:p,"onUpdate:modelValue":s[0]||(s[0]=t=>c.value=t),id:"inputCatalogSearch"},null,544),[[N,c.value]]),ns,is,h.value.length==0?(o(),l("div",cs,"검색된 관련 ContainerImage가 없습니다.")):M("",!0),e("div",ds,[(o(!0),l(C,null,S(h.value,(t,g)=>(o(),l("div",{class:"col-md-6 col-lg-12",key:g},[e("div",rs,[e("div",us,[e("div",ps,[e("img",{src:t.logo_url.large,class:"rounded-start",alt:"Shape of You",width:"80",height:"80"},null,8,ms)]),e("div",_s,[e("div",hs,[e("a",vs,m(t.name),1),e("div",gs,m(t.short_description.length>30?t.short_description.substring(0,30)+"...":""),1)])]),e("div",{class:"col-auto lh-1"},[e("div",{class:"dropdown"},[fs,e("div",{class:"dropdown-menu dropdown-menu-end"},[e("a",{class:"dropdown-item",onClick:F}," 해당 페이지로 이동 "),bs,ws])])])])])]))),128))]),ys,ks,V.value.length==0?(o(),l("div",$s,"검색된 관련 HelmChart가 없습니다.")):M("",!0),e("div",Cs,[(o(!0),l(C,null,S(V.value,(t,g)=>(o(),l("div",{class:"col-md-6 col-lg-12",key:g},[e("div",xs,[e("div",Is,[Ss,e("div",Ms,[e("div",Vs,[e("a",Us,m(t.name),1),e("div",Ds,m(t.description.length>30?t.description.substring(0,30)+"...":""),1)])]),e("div",{class:"col-auto lh-1"},[e("div",{class:"dropdown"},[Ns,e("div",{class:"dropdown-menu dropdown-menu-end"},[e("a",{class:"dropdown-item",onClick:X}," 해당 페이지로 이동 "),Ts,As])])])])])]))),128))])])])])])]),ae(it,{mode:x.value,"catalog-idx":n.value,onGetList:T},null,8,["mode","catalog-idx"]),ae(It,{"job-name":i.value},null,8,["job-name"]),ae(fa,{"ns-id":f.value,title:L.value,"application-name":w.value,"catalog-idx":U.value},null,8,["ns-id","title","application-name","catalog-idx"])],512))}});export{Hs as default};