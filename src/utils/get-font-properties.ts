import { FontProperties } from "../types"

const DEFAULT_FONT_SIZE_UNIT = "px"

function getFontSizeWithLineHeight(fontSize: number, lineHeight?: number) {
  const fontSizeWithUnit = `${fontSize}${DEFAULT_FONT_SIZE_UNIT}`

  return lineHeight ? `${fontSizeWithUnit}/${lineHeight}` : fontSizeWithUnit
}

export function getFontProperties({
  fontFamily,
  fontSize,
  fontStretch,
  fontStyle,
  fontVariant,
  fontWeight,
  lineHeight
}: FontProperties) {
  if (!fontSize || !fontFamily) return

  const font = [
    fontStyle,
    fontVariant,
    fontWeight,
    fontStretch,
    getFontSizeWithLineHeight(fontSize, lineHeight),
    fontFamily
  ].filter((property) => property)

  return font.join(" ")
}