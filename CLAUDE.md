# CLAUDE.md — 기여 방식 및 핵심 관행

이 파일은 Claude가 같은 실수를 반복하지 않기 위해 누적하는 기록입니다.
작업할 때마다 새로운 실수가 생기면 여기에 추가합니다.

---

## 프로젝트 개요

- React 18 + TypeScript + Vite + Tailwind CSS v4 + Storybook(@storybook/react-vite v10)
- 기업 제출용 디자인 시스템 스타일북
- GitHub Pages 배포: `cho-ye-ji.github.io/design-system-book`

---

## 실수 기록

### 1. Tailwind 유틸리티 클래스가 CSS 우선순위에서 밀림

**증상:** `px-3`, `py-3` 등 Tailwind 유틸리티 클래스를 추가했는데 적용되지 않음.

**원인:** `src/index.css`에 `@layer` 밖에 정의된 커스텀 클래스(`.btn-sm`, `.chip` 등)가 존재한다.
CSS cascade 규칙상 `@layer` 밖 스타일 > `@layer utilities` 이므로, 유틸리티 클래스가 지는 경우가 발생한다.

**올바른 방법:** 컴포넌트 고유 패딩/스타일이 필요하면 Tailwind 유틸리티 대신 `index.css`에 `@layer` 밖 커스텀 클래스로 추가한다.
```css
/* 올바른 예 */
.period { padding: 12px; }
```

---

### 2. Storybook 캔버스 UI를 컴포넌트 디자인으로 오해

**증상:** Period 컴포넌트에 보라색 점선 border를 추가했으나, 실제로는 Storybook 캔버스의 선택 영역 표시였음.

**원인:** 스크린샷에 Storybook inspector가 활성화된 상태였고, 그 선택 영역 점선을 디자인 요소로 착각함.

**올바른 방법:** 스크린샷에 Storybook 툴바나 inspector 뱃지(예: "T text")가 보이면 캔버스 UI 요소일 수 있으므로 디자인인지 먼저 확인한다.

---

### 3. 아이콘 클릭 영역만 고쳤고 인풋 본문 클릭은 빠뜨림

**증상:** 캘린더 아이콘에 `onClick` 추가 후 "아이콘은 됐는데 인풋 안의 텍스트 눌렀을 때도 안 된다"는 피드백.

**원인:** `[&::-webkit-calendar-picker-indicator]:hidden`으로 네이티브 클릭 트리거를 제거했음에도, `input` 요소 자체에 `onClick`을 추가하는 것을 빠뜨림.

**올바른 방법:** 커스텀 날짜 인풋을 구현할 때는 아이콘과 인풋 텍스트 영역 모두에 `onClick={openPicker}`를 연결한다.
```tsx
// 둘 다 연결해야 함
<input onClick={openPicker} ... />
<CalendarIcon onClick={openPicker} ... />
```

---

### 4. preview.ts 확장자를 JSX 도입 전에 미리 tsx로 만들지 않음

**증상:** `.storybook/preview.ts`에 JSX를 import하는 decorator를 추가하려 했으나 확장자 불일치.

**원인:** JSX를 사용하는 파일은 반드시 `.tsx`여야 하는데, 기존 `preview.ts`를 먼저 `.tsx`로 바꾸지 않고 진행함.

**올바른 방법:** `.storybook/` 내 파일에 JSX/React 컴포넌트를 import할 경우 파일 확장자를 사전에 `.tsx`로 확인한다.
