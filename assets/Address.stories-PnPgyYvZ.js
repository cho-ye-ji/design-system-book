import{r as p,j as e}from"./iframe-CPXS9FMq.js";import{a as d}from"./utils-CAvqiTVJ.js";import{S as w}from"./search-D6Fc5m1W.js";import"./preload-helper-DxtY3MKu.js";function t({value:c={},disabled:a=!1,onChange:i}){const[n,v]=p.useState(c.zipcode??""),[m,h]=p.useState(c.address??""),[f,N]=p.useState(c.detail??""),o=(s,l)=>{const j={zipcode:n,address:m,detail:f,[s]:l};s==="zipcode"&&v(l),s==="address"&&h(l),s==="detail"&&N(l),i==null||i(j)},x=d("h-9 px-3 text-sm border border-border-gray rounded outline-none transition-colors","placeholder:text-[#ccc] text-[#333]",a?"bg-[#f5f5f5] text-[#ccc] border-[#ddd] cursor-not-allowed":"bg-white focus:border-brand");return e.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative flex-none w-36",children:[e.jsx("input",{type:"text",placeholder:"우편번호",value:n,disabled:a,onChange:s=>o("zipcode",s.target.value),className:d(x,"w-full pr-8")}),e.jsx("button",{disabled:a,className:d("absolute right-2 top-1/2 -translate-y-1/2",a?"text-[#ccc] cursor-not-allowed":"text-text-gray hover:text-brand cursor-pointer"),children:e.jsx(w,{size:14})})]}),e.jsx("input",{type:"text",placeholder:"주소",value:m,disabled:a,onChange:s=>o("address",s.target.value),className:d(x,"flex-1")})]}),e.jsx("input",{type:"text",placeholder:"상세 주소",value:f,disabled:a,onChange:s=>o("detail",s.target.value),className:d(x,"w-full")})]})}t.__docgenInfo={description:"",methods:[],displayName:"Address",props:{value:{required:!1,tsType:{name:"Partial",elements:[{name:"AddressValue"}],raw:"Partial<AddressValue>"},description:"",defaultValue:{value:"{}",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: AddressValue) => void",signature:{arguments:[{type:{name:"AddressValue"},name:"value"}],return:{name:"void"}}},description:""}}};const D={title:"Form/Address",component:t,tags:["autodocs"]},r={name:"Address",render:()=>e.jsxs("div",{className:"w-[440px] p-6 border border-dashed border-[#ccc] rounded-lg flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-[11px] font-medium text-[#bbb] tracking-wide",children:"Empty"}),e.jsx(t,{})]}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-[11px] font-medium text-[#bbb] tracking-wide",children:"Filled"}),e.jsx(t,{value:{zipcode:"01234",address:"서울시 강남구 광평로 281"}})]}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-[11px] font-medium text-[#bbb] tracking-wide",children:"Filled with Detail"}),e.jsx(t,{value:{zipcode:"01234",address:"서울시 강남구 광평로 281",detail:"5층 호성에프엠에스"}})]}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-[11px] font-medium text-[#bbb] tracking-wide",children:"Disabled"}),e.jsx(t,{disabled:!0,value:{zipcode:"01234",address:"서울시 강남구 광평로 281"}})]})]})};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Address',
  render: () => <div className="w-[440px] p-6 border border-dashed border-[#ccc] rounded-lg flex flex-col gap-6">

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Empty</p>
        <Address />
      </div>

      <div className="h-px bg-[#f0f0f0]" />

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Filled</p>
        <Address value={{
        zipcode: '01234',
        address: '서울시 강남구 광평로 281'
      }} />
      </div>

      <div className="h-px bg-[#f0f0f0]" />

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Filled with Detail</p>
        <Address value={{
        zipcode: '01234',
        address: '서울시 강남구 광평로 281',
        detail: '5층 호성에프엠에스'
      }} />
      </div>

      <div className="h-px bg-[#f0f0f0]" />

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Disabled</p>
        <Address disabled value={{
        zipcode: '01234',
        address: '서울시 강남구 광평로 281'
      }} />
      </div>

    </div>
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,D as default};
