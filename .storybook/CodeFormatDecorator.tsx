import React, { useState, useRef, useCallback } from 'react'
import type { Decorator } from '@storybook/react'

type Format = 'React' | 'HTML' | 'Vue'

const FORMAT_COLOR: Record<Format, string> = {
  React: '#61dafb',
  HTML:  '#e44d26',
  Vue:   '#42b883',
}

function getComponentName(context: any): string {
  return (
    context.component?.displayName ||
    context.component?.name ||
    context.title?.split('/').pop() ||
    'Component'
  )
}

function argsToReactProps(args: Record<string, any>): string {
  return Object.entries(args)
    .filter(([, v]) => v !== undefined && v !== null && typeof v !== 'function')
    .map(([k, v]) => {
      if (typeof v === 'string') return `${k}="${v}"`
      if (typeof v === 'boolean') return v ? k : `${k}={false}`
      return `${k}={${JSON.stringify(v)}}`
    })
    .join('\n  ')
}

function argsToVueProps(args: Record<string, any>): string {
  return Object.entries(args)
    .filter(([, v]) => v !== undefined && v !== null && typeof v !== 'function')
    .map(([k, v]) => {
      if (typeof v === 'string') return `${k}="${v}"`
      if (typeof v === 'boolean') return v ? `:${k}="true"` : `:${k}="false"`
      return `:${k}="${JSON.stringify(v)}"`
    })
    .join('\n  ')
}

function generateReactCode(context: any): string {
  const source =
    context.parameters?.docs?.source?.code ||
    context.parameters?.docs?.source?.originalSource

  if (source) return source

  const name = getComponentName(context)
  const props = argsToReactProps(context.args || {})
  return props ? `<${name}\n  ${props}\n/>` : `<${name} />`
}

function generateVueCode(context: any): string {
  const name = getComponentName(context)
  const props = argsToVueProps(context.args || {})
  const tag = props ? `<${name}\n  ${props}\n/>` : `<${name} />`
  return `<template>\n  ${tag}\n</template>`
}

export const CodeFormatDecorator: Decorator = (Story, context) => {
  if (context.title?.startsWith('_Private')) return <Story />

  const [format, setFormat] = useState<Format>('React')
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  const storyRef = useRef<HTMLDivElement>(null)

  const getCode = useCallback((): string => {
    if (format === 'HTML') return storyRef.current?.innerHTML?.trim() || ''
    if (format === 'Vue') return generateVueCode(context)
    return generateReactCode(context)
  }, [format, context])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(getCode()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [getCode])

  const formats: Format[] = ['React', 'HTML', 'Vue']
  const color = FORMAT_COLOR[format]

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div ref={storyRef}>
        <Story />
      </div>

      {/* 컨트롤 바 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        marginTop: 16,
        padding: '6px 10px',
        background: '#f5f5f5',
        border: '1px solid #e0e0e0',
        borderRadius: showCode ? '6px 6px 0 0' : 6,
        width: 'fit-content',
      }}>
        <span style={{ fontSize: 11, color: '#999', marginRight: 4, userSelect: 'none' }}>
          Copy as
        </span>

        {formats.map(f => (
          <button
            key={f}
            onClick={() => setFormat(f)}
            style={{
              padding: '2px 10px',
              fontSize: 11,
              fontWeight: 500,
              background: format === f ? FORMAT_COLOR[f] : '#fff',
              color: format === f ? (f === 'React' ? '#222' : '#fff') : '#555',
              border: `1px solid ${format === f ? FORMAT_COLOR[f] : '#ccc'}`,
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {f}
          </button>
        ))}

        <div style={{ width: 1, height: 16, background: '#d0d0d0', margin: '0 4px' }} />

        <button
          onClick={handleCopy}
          style={{
            padding: '2px 12px',
            fontSize: 11,
            fontWeight: 600,
            background: copied ? '#4caf50' : '#333',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>

        <button
          onClick={() => setShowCode(v => !v)}
          style={{
            padding: '2px 10px',
            fontSize: 11,
            fontWeight: 500,
            background: showCode ? '#333' : '#fff',
            color: showCode ? '#fff' : '#555',
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          {showCode ? 'Hide Code ▲' : 'Show Code ▼'}
        </button>
      </div>

      {/* 코드 미리보기 */}
      {showCode && (
        <div style={{
          border: '1px solid #e0e0e0',
          borderTop: 'none',
          borderRadius: '0 0 6px 6px',
          overflow: 'hidden',
          width: 'fit-content',
          minWidth: 320,
        }}>
          {/* 포맷 라벨 헤더 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            background: '#2b2b2b',
            borderBottom: `2px solid ${color}`,
          }}>
            <span style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: color,
            }} />
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              color,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {format}
            </span>
            <span style={{ fontSize: 11, color: '#888', marginLeft: 2 }}>
              {format === 'React' && '· JSX'}
              {format === 'HTML'  && '· HTML'}
              {format === 'Vue'   && '· Single File Component'}
            </span>
          </div>

          {/* 코드 본문 */}
          <pre style={{
            margin: 0,
            padding: '14px 18px',
            background: '#1e1e1e',
            color: '#d4d4d4',
            fontSize: 12,
            lineHeight: 1.6,
            overflowX: 'auto',
            whiteSpace: 'pre',
          }}>
            {getCode()}
          </pre>
        </div>
      )}
    </div>
  )
}
