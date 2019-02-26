import Ajv from 'ajv'

const ajv = new Ajv({ allErrors: true })

const schema = {
  properties: {
    name: { type: 'string' },
    url: { type: 'string', format: 'uri' },
    img: { type: 'string', format: 'uri-reference' },
    note: { type: 'string' },
    policies: {
      type: 'object',
      properties: {
        minlength: { type: 'integer', minimum: 1 },
        maxlength: { type: 'integer', minimum: 1 },
        uppercase: { type: 'boolean' },
        lowercase: { type: 'boolean' },
        numbers: { type: 'boolean' },
        symbols: { type: 'boolean' }
      },
      required: [
        'minlength',
        'maxlength',
        'uppercase',
        'lowercase',
        'numbers',
        'symbols'
      ]
    }
  },
  required: ['name', 'url', 'img', 'policies']
}

export const validate = ajv.compile(schema)

export function getValidationError(v) {
  return ajv.errorsText(v.errors)
}
