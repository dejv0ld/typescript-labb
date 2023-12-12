export const createHeading = (text: string, level: number): string => {
  if (level < 1 || level > 6) {
    throw ('Invalid heading level')
  }
  return `<h${level}>${text}</h${level}>`
}
