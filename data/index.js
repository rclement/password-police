import path from 'path'
import fs from 'fs'
import glob from 'glob'
import yaml from 'js-yaml'
import consola from 'consola'
import { validate, getValidationError } from './validation'
import { websiteScore } from './score'

const logger = consola.withTag('password-police:data')

function loadYamlFile(filepath) {
  const data = yaml.safeLoad(fs.readFileSync(filepath, 'utf-8'))
  const valid = validate(data)

  if (!valid) {
    throw new Error(
      `Invalid YAML file ${filepath}: ${getValidationError(validate)}`
    )
  }

  data.score = websiteScore(data.policies)

  return data
}

function findContent(basepath) {
  const extension = '.yml'
  const searchPattern = `{${basepath}/*/,${basepath}/*${extension}}`

  return glob
    .sync(searchPattern)
    .map(filepath => {
      const isdir = fs.lstatSync(filepath).isDirectory()
      const name = isdir
        ? path.basename(filepath)
        : path.basename(filepath, extension)
      const content = isdir
        ? findContent(filepath)
        : loadYamlFile(path.resolve(__dirname, filepath))

      return {
        name: name,
        content: content
      }
    })
    .reduce((obj, item) => {
      obj[item.name] = item.content
      return obj
    }, {})
}

function findCategories() {
  const categoriesPath = path.resolve(__dirname, '.')
  logger.info(`Finding categories in ${categoriesPath}`)

  const categories = findContent(categoriesPath)
  const numCategories = Object.entries(categories).length
  const numWebsites = Object.entries(categories).reduce(
    (sum, [k, c]) => sum + Object.entries(c).length,
    0
  )

  logger.success(`${numWebsites} websites found in ${numCategories} categories`)
  return categories
}

export default {
  categories: findCategories()
}
