import{d as w,u as $,a as C,b as t,t as U,h as x,o as k,r as m,e as _,g as b,m as R,n as V,i as y}from"./index-BHIrf46W.js";import{d as I,u as B,g as L,a as S}from"./repository-Cc5uirx3.js";import{_ as z}from"./lodash-BWE95Lgt.js";import{_ as A}from"./Tabulator.vue_vue_type_style_index_0_lang-AyImqkUy.js";import"./request-FBsUrWrl.js";const P={class:"modal",id:"deleteComponent",tabindex:"-1"},q={class:"modal-dialog modal-lg",role:"document"},E={class:"modal-content"},T=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G=t("div",{class:"modal-status bg-danger"},null,-1),M={class:"modal-body text-left py-4"},K=t("h3",{class:"mb-5"}," Component 삭제 ",-1),j={class:"modal-footer"},H=t("a",{href:"#",class:"btn btn-link link-secondary","data-bs-dismiss":"modal"}," Cancel ",-1),J=w({__name:"deleteComponent",props:{componentName:{},componentId:{}},emits:["get-detail"],setup(f,{emit:p}){const i=$(),e=f,u=p,n=async()=>{const{data:l}=await I("nexus",e.componentId);l?i.success("삭제되었습니다."):i.error("삭제하지 못했습니다."),u("get-detail")};return(l,c)=>(x(),C("div",P,[t("div",q,[t("div",E,[T,G,t("div",M,[K,t("h4",null,U(e.componentName)+"을(를) 정말 삭제하시겠습니까?",1)]),t("div",j,[H,t("a",{href:"#",class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:c[0]||(c[0]=v=>n())}," 삭제 ")])])])]))}}),O={class:"modal",id:"uploadComponent",tabindex:"-1"},Q={class:"modal-dialog modal-lg",role:"document"},W={class:"modal-content"},X=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Y={class:"modal-body text-left py-4"},Z=t("h3",{class:"mb-5"}," File Upload ",-1),tt={class:"mb-3"},ot=t("label",{class:"form-label"},"Name",-1),et=["value"],st={class:"mb-3"},at=t("label",{class:"form-label"},"Path",-1),lt=["disabled"],nt={class:"mb-3"},it=t("label",{class:"form-label required"},"File",-1),dt={class:"grid gap-0 column-gap-3"},ct={class:"modal-footer"},rt=t("a",{href:"#",class:"btn btn-link link-secondary","data-bs-dismiss":"modal"}," Cancel ",-1),mt=w({__name:"uploadComponent",props:{repositoryName:{},format:{}},emits:["get-detail"],setup(f,{emit:p}){const i=$(),e=f,u=p;k(()=>{g()});const n=m("/"),l=m([]),c=d=>{l.value=d.target.files[0]},v=async()=>{if(e.format=="raw"&&z.isEmpty(n.value)){i.error("Path를 입력해주세요.");return}if(l.value.length==0){i.error("등록 요청한 파일이 없습니다.");return}const d=new FormData;d.append("assets",l.value),d.append("directory",n.value);const{data:r}=await B("nexus",e.repositoryName,d);r?i.success("등록되었습니다."):i.error("등록 할 수 없습니다."),u("get-detail")},g=()=>{n.value="/",l.value=[]};return(d,r)=>(x(),C("div",O,[t("div",Q,[t("div",W,[X,t("div",Y,[Z,t("div",null,[t("div",tt,[ot,t("input",{type:"text",class:"form-control p-2 g-col-11",value:e.repositoryName,readonly:""},null,8,et)]),t("div",st,[at,_(t("input",{type:"text",class:"form-control p-2 g-col-11","onUpdate:modelValue":r[0]||(r[0]=h=>n.value=h),disabled:e.format!="raw"},null,8,lt),[[b,n.value]])]),t("div",nt,[it,t("div",dt,[t("input",{type:"file",class:"form-control p-2 g-col-11",onChange:c},null,32)])])])]),t("div",ct,[rt,t("a",{href:"#",class:"btn btn-primary ms-auto","data-bs-dismiss":"modal",onClick:r[1]||(r[1]=h=>v())}," Upload ")])])])]))}}),ut={class:"card w-100",ref:"workflowForm"},pt=t("div",{class:"card-header"},[t("div",{class:"card-title"},[t("h1",null,"Repository Detail")])],-1),_t={class:"card-body"},bt={class:"card-title"},ft={class:"mb-3"},vt=t("label",{class:"form-label"},"Name",-1),gt={class:"grid gap-0 column-gap-3"},ht={class:"mb-3"},yt=t("label",{class:"form-label"},"Format",-1),wt={class:"grid gap-0 column-gap-3"},$t={class:"mb-3"},Ct=t("label",{class:"form-label required"},"URL(Path)",-1),xt={class:"grid gap-0 column-gap-3"},kt={class:"mb-3"},Dt=t("label",{class:"form-label required"},"Type(hosted)",-1),Ft={class:"grid gap-0 column-gap-3"},Nt={class:"mb-3"},Ut={class:"btn-list"},Rt=["disabled"],Vt=t("div",{id:"gap",class:"col"},null,-1),Pt=w({__name:"RepositoryDetail",setup(f){$();const p=R(),i=V(),e=m({}),u=m([]),n=m([]);k(async()=>{r(),await c()});const l=m(""),c=async()=>{l.value=p.params.repositoryName;const{data:a}=await L("nexus",l.value);e.value=a,await v()},v=async()=>{const{data:a}=await S("nexus",e.value.name);u.value=a},g=m(""),d=m(""),r=()=>{n.value=[{title:"File Name",field:"name",width:400},{title:"File Format",field:"format",width:300},{title:"File URL(Path)",field:"assets",width:800,formatter:function(a){const o=a.getValue();return o&&o.length>0?o[0].downloadUrl:"N/A"}},{title:"File Size",field:"assets",width:400,formatter:function(a){const o=a.getValue();return o&&o.length>0?`${(o[0].fileSize/1024).toFixed(2)} KB`:"N/A"}},{title:"Action",width:400,formatter:h,cellClick:function(a,o){const s=a.target;if((s==null?void 0:s.getAttribute("id"))==="download-btn"){console.log("download");let N=o.getRow().getData();D(N)}else g.value=o.getRow().getData().id,d.value=o.getRow().getData().name}}]},h=()=>`
  <div>
  <button
      class='btn btn-danger d-none d-sm-inline-block'
      id='delete-btn'
      data-bs-toggle='modal' 
      data-bs-target='#deleteComponent'>
      Delete
    </button>
    <button
      class='btn btn-primary d-none d-sm-inline-block me-1'
      id='download-btn'>
      Download
    </button>
  </div>`,D=a=>{const o=a.assets[0].downloadUrl,s=document.createElement("a");s.href=o,s.download="",document.body.appendChild(s),s.click(),document.body.removeChild(s)},F=()=>{i.push("/web/repository/list")};return(a,o)=>(x(),C("div",ut,[pt,t("div",_t,[t("div",bt,[t("div",ft,[vt,t("div",gt,[_(t("input",{type:"text",ref_key:"repositoryName",ref:l,class:"form-control p-2 g-col-11","onUpdate:modelValue":o[0]||(o[0]=s=>e.value.name=s),readonly:""},null,512),[[b,e.value.name]])])]),t("div",ht,[yt,t("div",wt,[_(t("input",{type:"text",ref:"repositoryFormat",class:"form-control p-2 g-col-11","onUpdate:modelValue":o[1]||(o[1]=s=>e.value.format=s),readonly:""},null,512),[[b,e.value.format]])])]),t("div",$t,[Ct,t("div",xt,[_(t("input",{type:"text",ref:"repositoryFormat",class:"form-control p-2 g-col-11","onUpdate:modelValue":o[2]||(o[2]=s=>e.value.url=s),readonly:""},null,512),[[b,e.value.url]])])]),t("div",kt,[Dt,t("div",Ft,[_(t("input",{type:"text",ref:"repositoryFormat",class:"form-control p-2 g-col-11","onUpdate:modelValue":o[3]||(o[3]=s=>e.value.type=s),readonly:""},null,512),[[b,e.value.type]])])]),t("div",Nt,[t("div",Ut,[t("button",{class:"btn btn-primary d-none d-sm-inline-block",style:{"margin-left":"auto","margin-bottom":"10px"},"data-bs-toggle":"modal","data-bs-target":"#uploadComponent",disabled:e.value.format=="docker"}," File Upload ",8,Rt)]),y(A,{columns:n.value,"table-data":u.value},null,8,["columns","table-data"])]),t("div",{class:"row align-items-center"},[Vt,t("div",{class:"col-auto ms-auto"},[t("div",{class:"btn-list"},[t("button",{class:"btn btn-right border",onClick:F}," 목록으로 ")])])])]),y(J,{"component-name":d.value,"component-id":g.value,onGetDetail:c},null,8,["component-name","component-id"]),y(mt,{"repository-name":e.value.name,format:e.value.format,onGetDetail:c},null,8,["repository-name","format"])])],512))}});export{Pt as default};
