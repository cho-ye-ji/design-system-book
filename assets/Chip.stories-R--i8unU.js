import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as j,b as s}from"./utils-VskibfqC.js";import"./iframe-2JnMdmoi.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],w=j("x",y);function a({label:x,variant:n="filled",removable:h=!1,onRemove:g,disabled:i=!1}){return e.jsxs("span",{className:s("inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium",n==="filled"?"bg-brand text-white":"bg-white text-brand border border-brand",i&&"opacity-40"),children:[x,h&&e.jsx("button",{onClick:g,disabled:i,className:s("inline-flex items-center justify-center rounded-full w-4 h-4 ml-0.5","cursor-pointer transition-opacity hover:opacity-70",n==="filled"?"text-white":"text-brand",i&&"cursor-not-allowed"),children:e.jsx(w,{size:10})})]})}a.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},removable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const T={title:"Button/chip",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined"],description:"칩 스타일"},label:{control:"text",description:"칩 텍스트"},removable:{control:"boolean",description:"X 버튼 표시 여부"},disabled:{control:"boolean",description:"비활성화 여부"},onRemove:{table:{disable:!0}}}},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{label:"Filled",variant:"filled"}),e.jsx(a,{label:"Outlined",variant:"outlined"})]})},r={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{label:"Filled",variant:"filled",removable:!0}),e.jsx(a,{label:"Outlined",variant:"outlined",removable:!0})]})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{label:"Filled",variant:"filled",removable:!0,disabled:!0}),e.jsx(a,{label:"Outlined",variant:"outlined",removable:!0,disabled:!0})]})};var o,d,c;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </div>
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Chip label="Filled" variant="filled" removable />
      <Chip label="Outlined" variant="outlined" removable />
    </div>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,b,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Chip label="Filled" variant="filled" removable disabled />
      <Chip label="Outlined" variant="outlined" removable disabled />
    </div>
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const _=["Variants","Removable","Disabled"];export{t as Disabled,r as Removable,l as Variants,_ as __namedExportsOrder,T as default};
