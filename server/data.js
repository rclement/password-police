import express from 'express'
import data from '../data'
import { websiteScore } from '../utils'

function computeScores(categories) {
  return Object.entries(categories).reduce((cats, [cKey, cItem]) => {
    cItem = Object.entries(cItem).reduce((websites, [id, w]) => {
      w.score = websiteScore(w.policies)
      websites[id] = w
      return websites
    }, {})

    cats[cKey] = cItem
    return cats
  }, {})
}

data.categories = computeScores(data.categories)

const app = express()

app.get('/', (req, res) => {
  res.status(200).json(data)
})

export default app
