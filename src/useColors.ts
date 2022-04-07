import { generate } from '@ant-design/colors'
import { useTheme } from '@react-navigation/native'
import { useMemo } from 'react'

const colorNames = [
  'border',
  'background',
  'card',
  'notification',
  'primary',
  'text',
] as const

type ColorNames = typeof colorNames[number]

const colorLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const
const grayColorLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const

type ColorLevel = typeof colorLevels[number]
type GrayColorLevel = typeof grayColorLevels[number]

type ColorNamesWithLevel =
  | `${ColorNames}${ColorLevel}`
  | `gray${GrayColorLevel}`
  | `gray`
  | ColorNames

type Colors = { [x in ColorNamesWithLevel]: string }

const grayLight = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#141414',
  '#000',
]

const grayDark = [
  '#000',
  '#141414',
  '#1f1f1f',
  '#262626',
  '#434343',
  '#595959',
  '#8c8c8c',
  '#bfbfbf',
  '#d9d9d9',
  '#f0f0f0',
  '#f5f5f5',
  '#fafafa',
  '#ffffff',
]

export function useColors(): Colors {
  const { colors, dark } = useTheme()

  return useMemo<Colors>(() => {
    const result = {} as Colors
    const gray = dark ? grayDark : grayLight

    for (const colorName of colorNames) {
      result[colorName] = colors[colorName]
      const generated = generate(colors[colorName])
      for (const level of colorLevels) {
        const nameWithLevel: `${ColorNames}${ColorLevel}` = `${colorName}${level}`
        result[nameWithLevel] = generated[level]
      }
    }

    for (const level of grayColorLevels) {
      const nameWithLevel: `gray${GrayColorLevel}` = `gray${level}`
      result[nameWithLevel] = gray[level]
    }

    return result
  }, [colors, dark])
}
