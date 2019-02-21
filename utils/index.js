import passwordGenerator from 'generate-password'
import zxcvbn from 'zxcvbn'

export function websiteScore(policies) {
  const password = passwordGenerator.generate({
    length: policies.maxlength,
    uppercase: policies.uppercase,
    numbers: policies.numbers,
    symbols: policies.symbols,
    strict: true
  })

  const result = zxcvbn(password)

  return result.score
}
