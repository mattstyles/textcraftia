
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Message = styled('div')`
  font-family: monospace;
  padding: 8px 0px;
  color: rgb(40, 40, 40);
`

Message.propTypes = {
  text: PropTypes.string
}

Message.defaultProps = {
  text: null
}
