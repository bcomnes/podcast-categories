const tape = require('tape')
const podcastCategories = require('./')

tape('export works', t => {
  t.ok(podcastCategories, 'podcast categories exported')
  t.ok(podcastCategories['Society & Culture'].History, 'podcast subcategories exported')

  t.end()
})
