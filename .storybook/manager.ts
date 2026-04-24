import { addons } from 'storybook/manager-api'

// 사이드바 스크롤바: Radix auto-hide를 덮어쓰고 네이티브 스크롤바 항상 표시
const style = document.createElement('style')
style.textContent = `
  #storybook-sidebar-region [data-radix-scroll-area-viewport] {
    scrollbar-width: thin !important;
    scrollbar-color: rgba(0,0,0,0.2) transparent !important;
  }
  #storybook-sidebar-region [data-radix-scroll-area-viewport]::-webkit-scrollbar {
    display: block !important;
    width: 6px !important;
  }
  #storybook-sidebar-region [data-radix-scroll-area-viewport]::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 3px;
  }
  #storybook-sidebar-region [data-radix-scroll-area-viewport]::-webkit-scrollbar-track {
    background: transparent;
  }
`
document.head.appendChild(style)

addons.setConfig({
  sidebar: {
    collapsedRoots: ['Button', 'Form', 'Feedback'],
  },
})

// 아코디언: 하나 열면 같은 레벨 형제 항목 자동으로 접기
// 캡처 시점(React 업데이트 전)에 aria-expanded="false"면 열리는 중 → 형제 닫기
document.addEventListener('click', (e) => {
  const toggle = (e.target as HTMLElement).closest<HTMLElement>(
    'button[aria-expanded]:not([aria-haspopup])'
  )
  // aria-expanded="false"인 경우만: 닫혀있다가 열리는 클릭
  if (!toggle || toggle.getAttribute('aria-expanded') !== 'false') return

  const item = toggle.closest<HTMLElement>('[data-item-id]')
  if (!item) return

  const nodeType = item.getAttribute('data-nodetype')
  if (nodeType === 'story' || nodeType === 'document') return

  const sidebar = document.querySelector('#storybook-explorer-tree')
  if (!sidebar) return

  const parentId = item.getAttribute('data-parent-id')
  const siblings = parentId
    ? sidebar.querySelectorAll<HTMLElement>(`[data-parent-id="${parentId}"]`)
    : sidebar.querySelectorAll<HTMLElement>('[data-nodetype="root"]')

  siblings.forEach((sibling) => {
    if (sibling === item) return
    sibling
      .querySelector<HTMLElement>('button[aria-expanded="true"]:not([aria-haspopup])')
      ?.click()
  })
}, true)
