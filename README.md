# podcast-categories [![stability][0]][1]

[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Exports and object of [Apple Podcasts Connect categories][categories].

## Installation
```console
$ npm install podcast-categories
```

## Usage

```js
const podcastCategories = require('podcast-categories')
const get = require('lodash.get')

function isValidCategory(category, subcategory) {
  return !!get(podcastCategories, `${category}.${subcategory}`)
}
```

## API

Literally exports an object of all valid Apple podcast categories.

```js
// https://help.apple.com/itc/podcasts_connect/?lang=en#/itc9267a2f12

module.exports = {
  'Arts': {
    'Design': true,
    'Fashion & Beauty': true,
    'Food': true,
    'Literature': true,
    'Performing Arts': true,
    'Visual Arts': true
  },
  'Business': {
    'Business News': true,
    'Careers': true,
    'Investing': true,
    'Management & Marketing': true,
    'Shopping': true
  },
  'Comedy': {},
  'Education': {
    'Educational Technology': true,
    'Higher Education': true,
    'K-12': true,
    'Language Courses': true,
    'Training': true
  },
  'Games & Hobbies': {
    'Automotive': true,
    'Aviation': true,
    'Hobbies': true,
    'Other Games': true,
    'Video Games': true
  },
  'Government & Organizations': {
    'Local': true,
    'National': true,
    'Non-Profit': true,
    'Regional': true
  },
  'Health': {
    'Alternative Health': true,
    'Fitness & Nutrition': true,
    'Self-Help': true,
    'Sexuality': true
  },
  'Kids & Family': {},
  'Music': {},
  'News & Politics': {},
  'Religion & Spirituality': {
    'Buddhism': true,
    'Christianity': true,
    'Hinduism': true,
    'Islam': true,
    'Judaism': true,
    'Other': true,
    'Spirituality': true
  },
  'Science & Medicine': {
    'Medicine': true,
    'Natural Sciences': true,
    'Social Sciences': true
  },
  'Society & Culture': {
    'History': true,
    'Personal Journals': true,
    'Philosophy': true,
    'Places & Travel': true
  },
  'Sports & Recreation': {
    'Amateur': true,
    'College & High School': true,
    'Outdoor': true,
    'Professional': true
  },
  'Technology': {
    'Gadgets': true,
    'Tech News': true,
    'Podcasting': true,
    'Software How-To': true
  },
  'TV & Film': {}
}
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-stable-green.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/podcast-categories.svg?style=flat-square
[3]: https://npmjs.org/package/podcast-categories
[4]: https://img.shields.io/travis/bcomnes/podcast-categories/master.svg?style=flat-square
[5]: https://travis-ci.org/bcomnes/podcast-categories
[8]: http://img.shields.io/npm/dm/podcast-categories.svg?style=flat-square
[9]: https://npmjs.org/package/podcast-categories
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[categories]: https://help.apple.com/itc/podcasts_connect/?lang=en#/itc9267a2f12
