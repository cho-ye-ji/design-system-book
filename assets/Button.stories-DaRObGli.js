import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./Button-CCcqLP1R.js";import{P as t}from"./plus-Do8qjaxo.js";import{C as i}from"./chevron-right-CMeVQIlX.js";import"./utils-VskibfqC.js";import"./iframe-2JnMdmoi.js";import"./preload-helper-C1FmrZbK.js";const B={title:"Button/button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","primary_line","secondary_fill","secondary_line"],description:"버튼 스타일 종류"},size:{control:"select",options:["sm","md","lg"],description:"버튼 크기"},label:{control:"text",description:"버튼 텍스트"},disabled:{control:"boolean",description:"비활성화 여부"},leftIcon:{table:{disable:!0}},rightIcon:{table:{disable:!0}},iconOnly:{table:{disable:!0}},onClick:{table:{disable:!0}}}},l={args:{size:"md",disabled:!1},render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,label:"Primary",variant:"primary"}),e.jsx(r,{...a,label:"Primary Line",variant:"primary_line"}),e.jsx(r,{...a,label:"Secondary Fill",variant:"secondary_fill"}),e.jsx(r,{...a,label:"Secondary Line",variant:"secondary_line"})]})},n={args:{size:"md",disabled:!1},render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,label:"추가하기",variant:"primary",leftIcon:t}),e.jsx(r,{...a,label:"추가하기",variant:"primary_line",leftIcon:t}),e.jsx(r,{...a,label:"추가하기",variant:"secondary_fill",leftIcon:t}),e.jsx(r,{...a,label:"추가하기",variant:"secondary_line",leftIcon:t})]})},s={args:{size:"md",disabled:!1},render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,label:"더보기",variant:"primary",rightIcon:i}),e.jsx(r,{...a,label:"더보기",variant:"primary_line",rightIcon:i}),e.jsx(r,{...a,label:"더보기",variant:"secondary_fill",rightIcon:i}),e.jsx(r,{...a,label:"더보기",variant:"secondary_line",rightIcon:i})]})};var o,c,d;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: false
  },
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} label="Primary" variant="primary" />
      <Button {...args} label="Primary Line" variant="primary_line" />
      <Button {...args} label="Secondary Fill" variant="secondary_fill" />
      <Button {...args} label="Secondary Line" variant="secondary_line" />
    </div>
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: false
  },
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} label="추가하기" variant="primary" leftIcon={Plus} />
      <Button {...args} label="추가하기" variant="primary_line" leftIcon={Plus} />
      <Button {...args} label="추가하기" variant="secondary_fill" leftIcon={Plus} />
      <Button {...args} label="추가하기" variant="secondary_line" leftIcon={Plus} />
    </div>
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: false
  },
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} label="더보기" variant="primary" rightIcon={ChevronRight} />
      <Button {...args} label="더보기" variant="primary_line" rightIcon={ChevronRight} />
      <Button {...args} label="더보기" variant="secondary_fill" rightIcon={ChevronRight} />
      <Button {...args} label="더보기" variant="secondary_line" rightIcon={ChevronRight} />
    </div>
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const P=["Variants","WithLeftIcon","WithRightIcon"];export{l as Variants,n as WithLeftIcon,s as WithRightIcon,P as __namedExportsOrder,B as default};
