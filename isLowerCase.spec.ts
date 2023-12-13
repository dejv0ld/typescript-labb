import { isLowerCase } from './isLowerCase'

describe('isLowerCase', () => {
  it('should return true if input is lowercase', () => {
    expect(isLowerCase('abc')).toBe(true)
  })

  it('should return false if input is not lowercase', () => {
    expect(isLowerCase('aBc')).toBe(false)
  })
})
