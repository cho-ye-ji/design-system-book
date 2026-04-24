import{r as h,j as e}from"./iframe-C23i-YFw.js";import{c as N,a}from"./utils-C-euYj4Z.js";import{C as g}from"./chevron-down-BRvQEDQn.js";import"./preload-helper-DxtY3MKu.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],j=N("arrow-right",w);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],R=N("rotate-ccw",v),t=["h-9 px-3 text-sm border border-border-gray rounded outline-none","placeholder:text-[#ccc] text-[#333] bg-white focus:border-brand transition-colors"].join(" "),i=["h-9 px-4 text-sm border border-border-gray rounded bg-white","hover:bg-gray-hover cursor-pointer text-[#333] whitespace-nowrap transition-colors"].join(" "),o="text-sm text-border-gray select-none";function n({options:c,defaultValue:r}){const[p,d]=h.useState(r??c[0]);return e.jsxs("div",{className:"relative min-w-[88px]",children:[e.jsx("select",{value:p,onChange:l=>d(l.target.value),className:a(t,"w-full appearance-none pr-7 cursor-pointer"),children:c.map(l=>e.jsx("option",{children:l},l))}),e.jsx(g,{size:12,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-text-gray pointer-events-none"})]})}function s({label:c,children:r}){return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-[11px] font-medium text-[#bbb] tracking-wide",children:c}),r]})}const D={title:"Form/InputCcp",tags:["autodocs"]},x={name:"input_ccp",render:()=>{const[c,r]=h.useState(""),[p,d]=h.useState(!1);return e.jsxs("div",{className:"w-[440px] p-6 border border-dashed border-[#ccc] rounded-lg flex flex-col gap-5",children:[e.jsx(s,{label:"01. Text + Button",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{className:a(t,"flex-1"),placeholder:"'-'없이, 최대12자리",maxLength:12}),e.jsx("button",{className:i,children:"button"})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"02. Dropdown + Text + Button",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{options:["직접입력","선택1","선택2"]}),e.jsx("input",{className:a(t,"flex-1"),placeholder:"placeholder"}),e.jsx("button",{className:i,children:"button"})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"03. Email (아이디 @ 도메인 + 드롭다운)",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{className:a(t,"flex-1 min-w-0"),placeholder:"이메일 계정 입력"}),e.jsx("span",{className:o,children:"@"}),e.jsx("input",{className:a(t,"flex-1 min-w-0"),placeholder:"도메인주소"}),e.jsx(n,{options:["직접입력","gmail.com","naver.com"]})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"04. Text + 초기화",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:a(t,"w-full pr-16"),placeholder:"상세주소",value:c,onChange:l=>r(l.target.value)}),e.jsxs("button",{onClick:()=>r(""),className:"absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-text-gray hover:text-brand cursor-pointer transition-colors",children:[e.jsx(R,{size:11}),"초기화"]})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"05. Date MM / YY",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{className:a(t,"w-20 text-center"),placeholder:"MM",maxLength:2}),e.jsx("span",{className:o,children:"/"}),e.jsx("input",{className:a(t,"w-20 text-center"),placeholder:"YY",maxLength:2})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"06. Masked Input (앞번호 - 마스킹)",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{className:a(t,"w-32"),placeholder:"최대6자리",maxLength:6}),e.jsx("span",{className:o,children:"-"}),e.jsx("div",{className:"h-9 px-3 flex items-center gap-1 border border-border-gray rounded bg-[#f5f5f5]",children:Array.from({length:7}).map((l,m)=>e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#bbb] inline-block"},m))})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"07. Masked Input (앞번호 - 한자리 - 마스킹)",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{className:a(t,"w-28"),placeholder:"최대6자리",maxLength:6}),e.jsx("span",{className:o,children:"-"}),e.jsx("input",{className:a(t,"w-10 text-center px-0"),maxLength:1}),e.jsx("span",{className:o,children:"-"}),e.jsx("div",{className:"h-9 px-3 flex items-center gap-1 border border-border-gray rounded bg-[#f5f5f5]",children:Array.from({length:7}).map((l,m)=>e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#bbb] inline-block"},m))})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"08. Checkbox + Text + Button",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:l=>d(l.target.checked),className:"accent-brand w-4 h-4 cursor-pointer flex-none"}),e.jsx("input",{className:a(t,"flex-1"),placeholder:"placeholder"}),e.jsx("button",{className:i,children:"button"})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"09. Dropdown → Dropdown (범위)",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{options:["text","옵션1","옵션2"]}),e.jsx(j,{size:13,className:"text-border-gray flex-none"}),e.jsx(n,{options:["text","옵션1","옵션2"]})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"10. Text + Dropdown + Text",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-[#333] whitespace-nowrap",children:"Text"}),e.jsx(n,{options:["선택","옵션1","옵션2"]}),e.jsx("span",{className:"text-sm text-[#333] whitespace-nowrap",children:"Text"})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"11. Text + Dropdown ~ Dropdown",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-[#333] whitespace-nowrap",children:"Text"}),e.jsx(n,{options:["선택","옵션1","옵션2"]}),e.jsx("span",{className:o,children:"~"}),e.jsx(n,{options:["선택","옵션1","옵션2"]})]})}),e.jsx("div",{className:"h-px bg-[#f0f0f0]"}),e.jsx(s,{label:"12. Text + Button (우측 정렬)",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-[#333]",children:"Text"}),e.jsx("button",{className:i,children:"button"})]})})]})}};var f,b,u;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'input_ccp',
  render: () => {
    const [resetValue, setResetValue] = useState('');
    const [checked, setChecked] = useState(false);
    return <div className="w-[440px] p-6 border border-dashed border-[#ccc] rounded-lg flex flex-col gap-5">

        <Row label="01. Text + Button">
          <div className="flex gap-2">
            <input className={cn(input, 'flex-1')} placeholder="'-'없이, 최대12자리" maxLength={12} />
            <button className={btn}>button</button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="02. Dropdown + Text + Button">
          <div className="flex gap-2">
            <InlineSelect options={['직접입력', '선택1', '선택2']} />
            <input className={cn(input, 'flex-1')} placeholder="placeholder" />
            <button className={btn}>button</button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="03. Email (아이디 @ 도메인 + 드롭다운)">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'flex-1 min-w-0')} placeholder="이메일 계정 입력" />
            <span className={sep}>@</span>
            <input className={cn(input, 'flex-1 min-w-0')} placeholder="도메인주소" />
            <InlineSelect options={['직접입력', 'gmail.com', 'naver.com']} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="04. Text + 초기화">
          <div className="relative">
            <input className={cn(input, 'w-full pr-16')} placeholder="상세주소" value={resetValue} onChange={e => setResetValue(e.target.value)} />
            <button onClick={() => setResetValue('')} className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-text-gray hover:text-brand cursor-pointer transition-colors">
              <RotateCcw size={11} />
              초기화
            </button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="05. Date MM / YY">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'w-20 text-center')} placeholder="MM" maxLength={2} />
            <span className={sep}>/</span>
            <input className={cn(input, 'w-20 text-center')} placeholder="YY" maxLength={2} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="06. Masked Input (앞번호 - 마스킹)">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'w-32')} placeholder="최대6자리" maxLength={6} />
            <span className={sep}>-</span>
            <div className="h-9 px-3 flex items-center gap-1 border border-border-gray rounded bg-[#f5f5f5]">
              {Array.from({
              length: 7
            }).map((_, i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#bbb] inline-block" />)}
            </div>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="07. Masked Input (앞번호 - 한자리 - 마스킹)">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'w-28')} placeholder="최대6자리" maxLength={6} />
            <span className={sep}>-</span>
            <input className={cn(input, 'w-10 text-center px-0')} maxLength={1} />
            <span className={sep}>-</span>
            <div className="h-9 px-3 flex items-center gap-1 border border-border-gray rounded bg-[#f5f5f5]">
              {Array.from({
              length: 7
            }).map((_, i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#bbb] inline-block" />)}
            </div>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="08. Checkbox + Text + Button">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} className="accent-brand w-4 h-4 cursor-pointer flex-none" />
            <input className={cn(input, 'flex-1')} placeholder="placeholder" />
            <button className={btn}>button</button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="09. Dropdown → Dropdown (범위)">
          <div className="flex items-center gap-2">
            <InlineSelect options={['text', '옵션1', '옵션2']} />
            <ArrowRight size={13} className="text-border-gray flex-none" />
            <InlineSelect options={['text', '옵션1', '옵션2']} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="10. Text + Dropdown + Text">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#333] whitespace-nowrap">Text</span>
            <InlineSelect options={['선택', '옵션1', '옵션2']} />
            <span className="text-sm text-[#333] whitespace-nowrap">Text</span>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="11. Text + Dropdown ~ Dropdown">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#333] whitespace-nowrap">Text</span>
            <InlineSelect options={['선택', '옵션1', '옵션2']} />
            <span className={sep}>~</span>
            <InlineSelect options={['선택', '옵션1', '옵션2']} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="12. Text + Button (우측 정렬)">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#333]">Text</span>
            <button className={btn}>button</button>
          </div>
        </Row>

      </div>;
  }
}`,...(u=(b=x.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const M=["Default"];export{x as Default,M as __namedExportsOrder,D as default};
