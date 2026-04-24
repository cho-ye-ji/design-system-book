export const lastUpdated = '2026-04-24'

export const techStack = [
  { name: 'React 18 + TypeScript', role: '컴포넌트 구현' },
  { name: 'Vite', role: '번들러' },
  { name: 'Tailwind CSS', role: '스타일링 (커스텀 토큰 사용)' },
  { name: 'class-variance-authority (CVA)', role: 'variant 스타일 관리' },
  { name: 'Storybook (@storybook/react-vite)', role: '스타일북 UI' },
  { name: 'lucide-react', role: '아이콘' },
  { name: '@storybook/addon-docs + addon-a11y', role: '문서화 + 접근성 검사' },
]

export const components = [
  {
    name: 'Button',
    path: 'src/components/Button/',
    description: '기업 제출용 기본 버튼. CVA로 variant 관리, buttonVariants.ts 분리.',
    variants: ['primary', 'primary_line', 'secondary_fill', 'secondary_line', 'excel', 'ghost'],
    sizes: ['sm', 'md', 'lg'],
    props: 'label, leftIcon, rightIcon, iconOnly, disabled, variant, size, onClick',
  },
  {
    name: 'TextButton',
    path: 'src/components/TextButton/',
    description: '텍스트만 있는 버튼 컴포넌트.',
    variants: [],
    sizes: [],
    props: '',
  },
  {
    name: 'Chip',
    path: 'src/components/Chip/',
    description: '태그/필터용 칩 컴포넌트.',
    variants: [],
    sizes: [],
    props: '',
  },
  {
    name: 'Form / Dropdown',
    path: 'src/components/Form/Dropdown.tsx',
    description: '드롭다운 선택 폼 컴포넌트.',
    variants: [],
    sizes: [],
    props: '',
  },
  {
    name: 'Form / SelectList',
    path: 'src/components/Form/SelectList.tsx',
    description: '리스트 형태 선택 컴포넌트.',
    variants: [],
    sizes: [],
    props: '',
  },
  {
    name: 'Form / Address',
    path: 'src/components/Form/Address.tsx',
    description: '주소 입력 폼 컴포넌트.',
    variants: [],
    sizes: [],
    props: '',
  },
  {
    name: 'Form / InputCcp',
    path: 'src/components/Form/InputCcp.tsx',
    description: '카드번호/CVC 등 특수 입력 폼.',
    variants: [],
    sizes: [],
    props: '',
  },
]

export const storybookFeatures = [
  'CodeFormatDecorator: 캔버스 하단 React / HTML / Vue 포맷 선택 복사 패널',
  'Show Code 토글: 포맷별 색상 라벨(React #61dafb / HTML #e44d26 / Vue #42b883)이 있는 코드 미리보기',
  'GitHub Pages 배포: viteFinal에서 PRODUCTION일 때 base: /design-system-book/ 자동 설정',
  'a11y 검사: addon-a11y 적용, test: todo 모드',
  '_Private 스토리: 로컬 전용, 빌드 시 자동 제외',
]

export const projectPrompt = `
React + TypeScript + Vite + Tailwind CSS + Storybook 기반 기업 제출용 디자인 시스템 스타일북을 만들어줘.

━━━ 기술 스택 ━━━
- React 18 + TypeScript
- Vite (번들러)
- Tailwind CSS (커스텀 토큰: brand, brand-hover, brand-light, brand-light-hover, text-gray,
  border-gray, gray-hover, excel, excel-light, ghost, ghost-hover)
- class-variance-authority (CVA) — variant 스타일 관리
- Storybook @storybook/react-vite v10
- lucide-react (아이콘)
- Addons: @storybook/addon-docs, @storybook/addon-a11y

━━━ 컴포넌트 목록 ━━━

[Button] src/components/Button/
- buttonVariants.ts (CVA): variant × size × disabled 조합
  variant: primary | primary_line | secondary_fill | secondary_line | excel | ghost
  size: sm(btn-sm) | md(btn-md) | lg(btn-lg)
  disabled compoundVariants: primary/secondary_fill → bg-[#ccc] text-white,
    primary_line/secondary_line → text-[#ccc] border-[#ccc],
    excel disabled → hover 제거, ghost disabled → bg-ghost text-[#ccc]
- Button.tsx props: label, leftIcon, rightIcon, iconOnly, disabled, variant, size, onClick
  excel variant: 아이콘 색 #4DA542 (disabled #ccc), 텍스트는 text-gray
  ghost variant: 아이콘 size=10 (나머지 16)
  iconOnly: btn-{size}-circle 클래스 추가
- Button.stories.tsx: Variants, WithLeftIcon, WithRightIcon 스토리, autodocs 태그

[TextButton] src/components/TextButton/
[Chip] src/components/Chip/
[Form] src/components/Form/
  Dropdown.tsx / Dropdown.stories.tsx
  SelectList.tsx / SelectList.stories.tsx
  Address.tsx / Address.stories.tsx
  InputCcp.stories.tsx

━━━ Storybook 설정 ━━━

.storybook/main.ts:
- stories: src/**/*.stories.@(js|jsx|mjs|ts|tsx) (단, _private는 production 제외)
- addons: ["@storybook/addon-docs", "@storybook/addon-a11y"]
- framework: "@storybook/react-vite"
- viteFinal: PRODUCTION일 때 config.base = '/design-system-book/'
- NODE_ENV === 'production'일 때 "!../src/_private/**" 제외 glob 추가

.storybook/preview.tsx:
- import '../src/index.css'
- decorators: [CodeFormatDecorator]
- controls.matchers: color, date
- a11y.test: 'todo'

.storybook/CodeFormatDecorator.tsx:
- Decorator: _Private 스토리는 패스스루
- 스토리 하단 패널: "Copy as" + [React][HTML][Vue] 탭 + [Copy] + [Show Code] 버튼
- 탭 선택 시 해당 포맷 색상으로 강조 (React #61dafb / HTML #e44d26 / Vue #42b883)
- Show Code 패널: 어두운 배경(#1e1e1e), 헤더에 포맷 라벨 + 색상 dot + 언어명
- React 코드: context.parameters.docs.source.code → 없으면 args 기반 JSX 재구성
- HTML 코드: storyRef.current.innerHTML (실제 렌더링 DOM)
- Vue 코드: args 기반 생성, 문자열→prop="val" / boolean→:prop="true" / 나머지→:prop="json"
  <template>으로 감쌈

src/_private/DevNotes.stories.tsx:
- title: '_Private/Dev Notes', layout: 'fullscreen', autodocs 제외
- 개인 메모: localStorage 자동 저장 textarea
- 재현 프롬프트: devNoteData.ts의 projectPrompt 표시 + 전체 복사 버튼
- 컴포넌트 현황: devNoteData.ts의 components 목록 카드
- 기술 스택, Storybook 기능 목록 표시
- 업데이트 날짜 표시
`.trim()
