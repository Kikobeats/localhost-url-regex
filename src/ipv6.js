'use strict'

const IP_RANGES = [
  // localhost in IPv6
  /^\[(::1|::)\]$/
]

const regex = new RegExp(`^(${IP_RANGES.map(re => re.source).join('|')})$`)

module.exports = regex.test.bind(regex)
module.exports.regex = regex
