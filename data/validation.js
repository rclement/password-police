import Ajv from 'ajv'

const ajv = new Ajv({ allErrors: true })

const schema = {
  properties: {
    name: { type: 'string' },
    urls: {
      type: 'object',
      properties: {
        homepage: { type: 'string', format: 'uri' },
        documentation: {
          oneOf: [{ type: 'string', format: 'uri' }, { type: 'null' }]
        },
        change: {
          oneOf: [{ type: 'string', format: 'uri' }, { type: 'null' }]
        }
      },
      required: ['homepage']
    },
    img: { type: 'string', format: 'uri-reference' },
    note: {
      oneOf: [{ type: 'string' }, { type: 'null' }]
    },
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
  required: ['name', 'urls', 'img', 'policies']
}

export const validate = ajv.compile(schema)

export function getValidationError(v) {
  return ajv.errorsText(v.errors)
}
