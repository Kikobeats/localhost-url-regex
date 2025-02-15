# is-local-address

> Regex for matching localhost alike URLs.

**Note**: There are [Bogon IP address](https://ipinfo.io/bogon) ranges not covered by this regex.

The intention of this package is to cover some of the most common cases.

If you need a more sophisticated solution, check [is-localhost-ip](https://github.com/tinovyatkin/is-localhost-ip).

## Install

```bash
$ npm install is-local-address --save
```

## Usage

The method exported by default supports IPv4 and IPv6 detection:

```js
const isLocalhost = require('is-localhost')

isLocalhost(new URL('https://127.0.0.1').hostname) // true
isLocalhost(new URL('http://[::]:3000').hostname) // true
```

You can also require the specific IPv4:

```js
const isLocalhost = require('is-localhost/ipv4')
isLocalhost(new URL('https://127.0.0.1').hostname) // true
```

or just IPv6:

```js
const isLocalhost = require('is-localhost/ipv6')
isLocalhost(new URL('http://[::]:3000').hostname) // true
```

## License

**is-local-address** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/is-local-address/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/is-local-address/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · X [@Kikobeats](https://x.com/Kikobeats)
