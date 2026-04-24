import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./iframe-fa9B1HRt.js";import{c as O,a as w}from"./utils-B4Otb3ZK.js";import{X as T}from"./x-G5iW1ZAS.js";import"./preload-helper-DxtY3MKu.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],M=O("check",C);function a({options:r,selected:t,onChange:n,variant:i="multi"}){const N=s=>{if(i==="single"){n([s]);return}t.includes(s)?n(t.filter(l=>l!==s)):n([...t,s])},j=()=>n([...r]),k=()=>n([]);return e.jsxs("div",{className:"border border-border-gray rounded bg-white w-48 overflow-hidden",children:[i==="multi"&&e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-border-gray bg-white",children:[e.jsxs("button",{onClick:j,className:"inline-flex items-center gap-1 text-xs text-text-gray hover:text-brand cursor-pointer",children:[e.jsx(M,{size:11,strokeWidth:2.5,className:"shrink-0"}),"전체선택"]}),e.jsxs("button",{onClick:k,className:"inline-flex items-center gap-1 text-xs text-text-gray hover:text-brand cursor-pointer",children:[e.jsx(T,{size:11,strokeWidth:2.5,className:"shrink-0"}),"선택해제"]})]}),e.jsx("ul",{className:"max-h-[180px] overflow-y-auto",children:r.map(s=>{const l=t.includes(s);return e.jsxs("li",{onClick:()=>N(s),className:w("flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-hover",l&&"text-brand bg-brand-light-hover"),children:[i==="multi"&&e.jsx("input",{type:"checkbox",readOnly:!0,checked:l,className:"accent-brand cursor-pointer"}),s]},s)})})]})}a.__docgenInfo={description:"",methods:[],displayName:"SelectList",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selected:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selected: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selected"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'single' | 'multi'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multi'"}]},description:"",defaultValue:{value:"'multi'",computed:!1}}}};const q={title:"Form/SelectList",component:a,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["single","multi"],description:"단일 선택 / 다중 선택"},options:{table:{disable:!0}},selected:{table:{disable:!0}},onChange:{table:{disable:!0}}}},u=["사과","바나나","딸기","포도","수박"],c={name:"Single (단일 선택)",render:()=>{const[r,t]=m.useState(["바나나"]);return e.jsx(a,{options:u,selected:r,onChange:t,variant:"single"})}},o={name:"Multi (다중 선택)",render:()=>{const[r,t]=m.useState(["사과","딸기"]);return e.jsx(a,{options:u,selected:r,onChange:t,variant:"multi"})}},d={name:"Both (나란히 비교)",render:()=>{const[r,t]=m.useState(["바나나"]),[n,i]=m.useState(["사과","딸기"]);return e.jsxs("div",{className:"flex gap-6 items-start",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-gray mb-2",children:"Single"}),e.jsx(a,{options:u,selected:r,onChange:t,variant:"single"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-gray mb-2",children:"Multi"}),e.jsx(a,{options:u,selected:n,onChange:i,variant:"multi"})]})]})}};var g,p,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Single (단일 선택)',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['바나나']);
    return <SelectList options={OPTIONS} selected={selected} onChange={setSelected} variant="single" />;
  }
}`,...(x=(p=c.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,S,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Multi (다중 선택)',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['사과', '딸기']);
    return <SelectList options={OPTIONS} selected={selected} onChange={setSelected} variant="multi" />;
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var b,y,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Both (나란히 비교)',
  render: () => {
    const [single, setSingle] = useState<string[]>(['바나나']);
    const [multi, setMulti] = useState<string[]>(['사과', '딸기']);
    return <div className="flex gap-6 items-start">
        <div>
          <p className="text-xs text-text-gray mb-2">Single</p>
          <SelectList options={OPTIONS} selected={single} onChange={setSingle} variant="single" />
        </div>
        <div>
          <p className="text-xs text-text-gray mb-2">Multi</p>
          <SelectList options={OPTIONS} selected={multi} onChange={setMulti} variant="multi" />
        </div>
      </div>;
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const B=["Single","Multi","Both"];export{d as Both,o as Multi,c as Single,B as __namedExportsOrder,q as default};
