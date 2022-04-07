import { OpaqueColorValue } from 'react-native'
import { PlatformColor } from 'react-native-platform-color'

function getStringHashNumber(str: string) {
  let hash = 0
  if (typeof str === 'string' && str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i)
      hash |= 0 // Convert to 32bit integer
    }
  }
  return hash
}

const COLORFUL_PLATFORM_COLOR_LIST = [
  'systemBlue',
  'systemGreen',
  'systemIndigo',
  'systemOrange',
  'systemPink',
  'systemPurple',
  'systemRed',
  'systemTeal',
  'systemYellow',
]

const memorize = {} as { text: string; color: OpaqueColorValue }

export function getPlatformColorFromString(param: string): OpaqueColorValue {
  if (memorize.text !== param) {
    memorize.text = param
    const hash = getStringHashNumber(param)
    const index = Math.abs(hash) % (COLORFUL_PLATFORM_COLOR_LIST.length - 1)
    memorize.color = PlatformColor(COLORFUL_PLATFORM_COLOR_LIST[index])
  }
  return memorize.color
}
