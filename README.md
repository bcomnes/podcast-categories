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
  Arts: {
    Books: true,
    Design: true,
    'Fashion & Beauty': true,
    Food: true,
    'Performing Arts': true,
    'Visual Arts': true
  },
  Business: {
    Careers: true,
    Entrepreneurship: true,
    Investing: true,
    Management: true,
    Marketing: true,
    'Non-Profit': true
  },
  Comedy: {
    'Comedy Interviews': true,
    Improv: true,
    'Stand-Up': true
  },
  Education: {
    Courses: true,
    'How To': true,
    'Language Learning': true,
    'Self-Improvement': true
  },
  'Games & Hobbies': {
    Automotive: true,
    Aviation: true,
    Hobbies: true,
    'Other Games': true,
    'Video Games': true
  },
  Fiction: {
    'Comedy Fiction': true,
    Drama: true,
    'Science Fiction': true
  },
  Government: {},
  History: {},
  'Health & Fitness': {
    'Alternative Health': true,
    Fitness: true,
    Medicine: true,
    'Mental Health': true,
    Nutrition: true,
    Sexuality: true
  },
  'Kids & Family': {
    'Education for Kids': true,
    Parenting: true,
    'Pets & Animals': true,
    'Stories for Kids': true
  },
  Leisure: {
    'Animation & Manga': true,
    Automotive: true,
    Aviation: true,
    Crafts: true,
    Games: true,
    Hobbies: true,
    'Home & Garden': true,
    'Video Games': true
  },
  Music: {
    'Music Commentary': true,
    'Music History': true,
    'Music Interviews': true
  },
  News: {
    'Business News': true,
    'Daily News': true,
    'Entertainment News': true,
    'News Commentary': true,
    Politics: true,
    'Sports News': true,
    'Tech News': true
  },
  'Religion & Spirituality': {
    Buddhism: true,
    Christianity: true,
    Hinduism: true,
    Islam: true,
    Judaism: true,
    Religion: true,
    Spirituality: true
  },
  Science: {
    Astronomy: true,
    Chemistry: true,
    'Earth Sciences': true,
    'Life Sciences': true,
    Mathematics: true,
    'Natural Sciences': true,
    Nature: true,
    Physics: true,
    'Social Sciences': true
  },
  'Society & Culture': {
    Documentary: true,
    'Personal Journals': true,
    Philosophy: true,
    'Places & Travel': true,
    Relationships: true
  },
  Sports: {
    Baseball: true,
    Basketball: true,
    Cricket: true,
    'Fantasy Sports': true,
    Football: true,
    Golf: true,
    Hockey: true,
    Rugby: true,
    Running: true,
    Soccer: true,
    Swimming: true,
    Tennis: true,
    Volleyball: true,
    Wilderness: true,
    Wrestling: true
  },
  Technology: {},
  'True Crime': {},
  'TV & Film': {
    'After Shows': true,
    'Film History': true,
    'Film Interviews': true,
    'Film Reviews': true,
    'TV Reviews': true
  }
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
