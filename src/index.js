// @flow
import React from 'react'
import { render } from 'react-dom'

function foo(x: mixed): string {
  if (typeof x === 'number' || typeof x === 'string') {
    return `${x} + 10`
  }
  throw new Error('Invalid x type')
}

foo('Hello!')
foo(1)

render(<p>Hello</p>, document.getElementById('app'))
