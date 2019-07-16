
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import oc from 'open-color'

import { actions } from 'core/actions'
import { Message } from 'components/message'
import { dispatch } from 'signals'

const addMessage = dispatch(actions.addMessage)

const Wrapper = styled('div')`
  background: rgb(244, 245, 249);
  width: 320px;
  height: 320px;
  padding: 10px;
  box-sizing: border-box;
  overflow: scroll;
`

const Button = styled('div')`
  background: ${oc.blue[7]};
  width: 300px;
  color: ${oc.white};
  line-height: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  text-align: center;
  font-family: system-ui;
`

export const App = ({ state }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) {
      return null
    }

    // This happens after initial render, so things can get a little flashy
    ref.current.scrollTo(0, 100000)
  })

  return (
    <Wrapper ref={ref}>
      {state.messages.map(msg => <Message>{msg}</Message>)}
      <Button onClick={addMessage}>
        Add more
      </Button>
    </Wrapper>
  )
}
