'use strict'
module.exports = hostname => require('./ipv4')(hostname) || require('./ipv6')(hostname)
