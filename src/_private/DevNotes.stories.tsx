import React, { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { projectPrompt, components, techStack, storybookFeatures, lastUpdated } from './devNoteData'

const NOTES_KEY = 'sb-dev-notes'

const s = {
  page: {
    fontFamily: 'sans-serif',
    maxWidth: 820,
    margin: '0 auto',
    padding: 32,
    color: '#222',
  } as React.CSSProperties,

  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 32,
    paddingBottom: 16,
    borderBottom: '2px solid #f0f0f0',
  } as React.CSSProperties,

  badge: {
    fontSize: 11,
    color: '#888',
    background: '#f3f3f3',
    border: '1px solid #e0e0e0',
    padding: '2px 10px',
    borderRadius: 12,
  } as React.CSSProperties,

  section: {
    marginBottom: 36,
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#333',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  } as React.CSSProperties,

  promptBox: {
    background: '#1a1a2e',
    color: '#e0e0e0',
    padding: '16px 20px',
    borderRadius: 8,
    fontSize: 12,
    lineHeight: 1.7,
    overflowX: 'auto',
    whiteSpace: 'pre-wrap' as const,
    maxHeight: 420,
    overflowY: 'auto' as const,
    border: '1px solid #2a2a4a',
  } as React.CSSProperties,

  copyBtn: (copied: boolean) => ({
    padding: '4px 14px',
    fontSize: 12,
    fontWeight: 600,
    background: copied ? '#4caf50' : '#333',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  } as React.CSSProperties),

  textarea: {
    width: '100%',
    minHeight: 180,
    padding: '12px 14px',
    fontSize: 13,
    lineHeight: 1.7,
    border: '1px solid #ddd',
    borderRadius: 8,
    resize: 'vertical' as const,
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
    color: '#333',
    outline: 'none',
  } as React.CSSProperties,

  hint: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 4,
  } as React.CSSProperties,

  componentCard: {
    padding: '12px 16px',
    background: '#fafafa',
    border: '1px solid #ebebeb',
    borderRadius: 8,
    marginBottom: 8,
  } as React.CSSProperties,

  componentName: {
    fontWeight: 700,
    fontSize: 13,
    marginBottom: 2,
  } as React.CSSProperties,

  componentDesc: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  } as React.CSSProperties,

  tag: {
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 600,
    padding: '1px 7px',
    borderRadius: 10,
    marginRight: 4,
    marginTop: 2,
    background: '#eef6ff',
    color: '#3b82f6',
    border: '1px solid #bfdbfe',
  } as React.CSSProperties,

  stackRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
    padding: '6px 0',
    borderBottom: '1px solid #f5f5f5',
    fontSize: 12,
  } as React.CSSProperties,

  featureItem: {
    fontSize: 12,
    color: '#444',
    padding: '5px 0',
    borderBottom: '1px solid #f5f5f5',
    display: 'flex',
    gap: 8,
    alignItems: 'flex-start',
  } as React.CSSProperties,
}

function DevNotesPage() {
  const [notes, setNotes] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setNotes(localStorage.getItem(NOTES_KEY) || '')
  }, [])

  const saveNotes = (v: string) => {
    setNotes(v)
    localStorage.setItem(NOTES_KEY, v)
  }

  const copyPrompt = () => {
    navigator.clipboard.writeText(projectPrompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={s.page}>

      {/* 헤더 */}
      <div style={s.header}>
        <span style={{ fontSize: 22 }}>🔒</span>
        <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px' }}>Dev Notes</span>
        <span style={s.badge}>로컬 전용</span>
        <span style={s.badge}>배포 제외</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, color: '#bbb' }}>
          마지막 업데이트: {lastUpdated}
        </span>
      </div>

      {/* 재현 프롬프트 */}
      <section style={s.section}>
        <div style={{ ...s.sectionTitle, justifyContent: 'space-between' }}>
          <span>📋 재현 프롬프트</span>
          <button onClick={copyPrompt} style={s.copyBtn(copied)}>
            {copied ? '✓ 복사됨' : '전체 복사'}
          </button>
        </div>
        <p style={{ fontSize: 11, color: '#999', marginBottom: 8 }}>
          이 프롬프트 하나로 현재까지의 모든 작업을 Claude에게 재현시킬 수 있습니다.
        </p>
        <pre style={s.promptBox}>{projectPrompt}</pre>
      </section>

      {/* 개인 메모 */}
      <section style={s.section}>
        <div style={s.sectionTitle}>✏️ 개인 메모</div>
        <textarea
          value={notes}
          onChange={e => saveNotes(e.target.value)}
          placeholder={`자유롭게 메모하세요.\n예) 다음에 추가할 컴포넌트, 개선 아이디어, 클라이언트 요구사항...`}
          style={s.textarea}
        />
        <p style={s.hint}>브라우저 localStorage에 자동 저장됩니다. 이 기기에서만 보입니다.</p>
      </section>

      {/* 컴포넌트 현황 */}
      <section style={s.section}>
        <div style={s.sectionTitle}>🧩 컴포넌트 현황 ({components.length}개)</div>
        {components.map(c => (
          <div key={c.name} style={s.componentCard}>
            <div style={s.componentName}>{c.name}</div>
            <div style={s.componentDesc}>{c.description}</div>
            {c.variants.length > 0 && (
              <div>
                {c.variants.map(v => (
                  <span key={v} style={s.tag}>{v}</span>
                ))}
              </div>
            )}
            {c.props && (
              <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>
                props: {c.props}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 기술 스택 */}
      <section style={s.section}>
        <div style={s.sectionTitle}>⚙️ 기술 스택</div>
        {techStack.map(t => (
          <div key={t.name} style={s.stackRow}>
            <span style={{ fontWeight: 600, minWidth: 260 }}>{t.name}</span>
            <span style={{ color: '#888' }}>{t.role}</span>
          </div>
        ))}
      </section>

      {/* Storybook 기능 */}
      <section style={s.section}>
        <div style={s.sectionTitle}>📚 Storybook 추가 기능</div>
        {storybookFeatures.map((f, i) => (
          <div key={i} style={s.featureItem}>
            <span style={{ color: '#4caf50', flexShrink: 0 }}>✓</span>
            <span>{f}</span>
          </div>
        ))}
      </section>

    </div>
  )
}

const meta: Meta = {
  title: '_Private/Dev Notes',
  component: DevNotesPage,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Page: StoryObj = {
  render: () => <DevNotesPage />,
}
