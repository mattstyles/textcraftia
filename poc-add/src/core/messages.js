
import { random } from 'lodash/fp'

const messages = [
  'Carouser gun grog blow the man down jury mast nipper deadlights bounty skysail loaded to the gunwalls.',
  'Schooner topmast swab bring a spring upon her cable nipper yardarm topgallant overhaul Chain Shot bucko. Dance the hempen jig chase spyglass yard skysail reef gally bounty sheet Barbary Coast.',
  'Spanker tender rope\'s end ballast dead men tell no tales come about spyglass belay Buccaneer jury mast.',
  'Nipperkin bucko Privateer topsail skysail jib scuppers chandler Buccaneer Pieces of Eight. Measured fer yer chains lass piracy handsomely chase guns coffer crimp galleon Yellow Jack squiffy.'
]

export const getRandomMessage = () => {
  return messages[random(0, messages.length - 1)]
}
