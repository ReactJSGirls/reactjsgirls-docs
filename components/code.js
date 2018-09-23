import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaCopy } from 'react-icons/fa'

const styles = style => ({
  ...style,
  padding: 20,
  position: 'relative'
})

const buttonStyles = {
  border: 0,
  padding: 0,
  background: 'transparent',
  position: 'absolute',
  right: 20,
  cursor: 'pointer'
}

export default ({ code, language = 'jsx' }) => (
  <Highlight
    {...defaultProps}
    theme={nightOwl}
    code={code.trim()}
    language={language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={styles(style)}>
        <CopyToClipboard text={code.trim()}>
          <button style={buttonStyles}>
            <FaCopy fill="#fff" />
          </button>
        </CopyToClipboard>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)
