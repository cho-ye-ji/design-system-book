import{j as e}from"./iframe-C23i-YFw.js";import{c as T,a as j}from"./utils-C-euYj4Z.js";import{C as l}from"./chevron-right-6XHiNZTW.js";import{P as z}from"./plus-C3Y_GIlr.js";import"./preload-helper-DxtY3MKu.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],B=T("download",w);function r({label:v,leftIcon:s,rightIcon:i,color:y="brand",size:a="md",disabled:d=!1,onClick:I}){return e.jsxs("button",{className:j("inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer font-medium transition-colors rounded px-2 py-1",y==="brand"?"text-brand hover:bg-brand-light-hover":"text-text-gray hover:bg-gray-hover",a==="sm"&&"text-xs",a==="md"&&"text-sm",a==="lg"&&"text-base",d&&"text-[#ccc] cursor-not-allowed hover:bg-transparent"),onClick:I,disabled:d,children:[s&&e.jsx(s,{size:a==="sm"?12:a==="lg"?18:14}),v,i&&e.jsx(i,{size:a==="sm"?12:a==="lg"?18:14})]})}r.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{label:{required:!0,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"LucideIcon"},description:""},rightIcon:{required:!1,tsType:{name:"LucideIcon"},description:""},color:{required:!1,tsType:{name:"union",raw:"'brand' | 'gray'",elements:[{name:"literal",value:"'brand'"},{name:"literal",value:"'gray'"}]},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={title:"Button/text button",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:["brand","gray"],description:"텍스트 색상"},size:{control:"select",options:["sm","md","lg"],description:"버튼 크기"},label:{control:"text",description:"버튼 텍스트"},disabled:{control:"boolean",description:"비활성화 여부"},leftIcon:{table:{disable:!0}},rightIcon:{table:{disable:!0}},onClick:{table:{disable:!0}}}},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-6 items-center",children:[e.jsx(r,{label:"Brand 색상",color:"brand",size:"md"}),e.jsx(r,{label:"Gray 색상",color:"gray",size:"md"})]})},o={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-wrap gap-6 items-center",children:[e.jsx(r,{label:"좌측 아이콘",color:"brand",size:"md",leftIcon:z}),e.jsx(r,{label:"우측 아이콘",color:"brand",size:"md",rightIcon:l}),e.jsx(r,{label:"다운로드",color:"gray",size:"md",leftIcon:B})]})})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-6 items-center",children:[e.jsx(r,{label:"Small",color:"brand",size:"sm",rightIcon:l}),e.jsx(r,{label:"Medium",color:"brand",size:"md",rightIcon:l}),e.jsx(r,{label:"Large",color:"brand",size:"lg",rightIcon:l})]})};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 items-center">
      <TextButton label="Brand 색상" color="brand" size="md" />
      <TextButton label="Gray 색상" color="gray" size="md" />
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-6 items-center">
        <TextButton label="좌측 아이콘" color="brand" size="md" leftIcon={Plus} />
        <TextButton label="우측 아이콘" color="brand" size="md" rightIcon={ChevronRight} />
        <TextButton label="다운로드" color="gray" size="md" leftIcon={Download} />
      </div>
    </div>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 items-center">
      <TextButton label="Small" color="brand" size="sm" rightIcon={ChevronRight} />
      <TextButton label="Medium" color="brand" size="md" rightIcon={ChevronRight} />
      <TextButton label="Large" color="brand" size="lg" rightIcon={ChevronRight} />
    </div>
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const k=["Variants","WithIcon","Sizes"];export{n as Sizes,t as Variants,o as WithIcon,k as __namedExportsOrder,_ as default};
