import { toBeNumber, toBeWithinRange } from './matchers'
import data from '~/data'

expect.extend({
  toBeNumber,
  toBeWithinRange
})

describe('Data', () => {
  test('is loaded and validated', () => {
    expect(data).toBeInstanceOf(Object)
    expect(data.categories).toBeInstanceOf(Object)
  })

  test('has generated scores', () => {
    Object.values(data.categories).every(c =>
      Object.values(c).every(w => {
        const score = w.score
        expect(score).toBeNumber()
        expect(score).toBeWithinRange(0, 4)
      })
    )
  })
})
