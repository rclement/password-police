export function toBeNumber(received) {
  const pass = typeof received === 'number'
  if (pass) {
    return {
      message: () => `expected ${received} not to be a number`,
      pass: true
    }
  } else {
    return {
      message: () => `expected ${received} to be a number`,
      pass: false
    }
  }
}

export function toBeWithinRange(received, floor, ceiling) {
  const pass = received >= floor && received <= ceiling
  if (pass) {
    return {
      message: () =>
        `expected ${received} not to be within range ${floor} - ${ceiling}`,
      pass: true
    }
  } else {
    return {
      message: () =>
        `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false
    }
  }
}
