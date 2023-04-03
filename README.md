# localhost-url-regex

> Regex for matching localhost alike URLs.

**Note**: There are [Bogon IP address](https://ipinfo.io/bogon) ranges not covered by this regex.

The intention of this package is to cover some of the most common cases.

## Install

```bash
$ npm install localhost-url-regex --save
```

## Usage

```js
const localhostUrl = require('localhost-url-regex')

localhostUrl().test('http://localhost:3000') // true
localhostUrl().test('http://example.com') // false
```

## License

**localhost-url-regex** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/localhost-url-regex/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/localhost-url-regex/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
