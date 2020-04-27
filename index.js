'use strict'

const REGEX_LOCALHOST = /^https?:\/\/(localhost|127\.0\.0\.1|::1)/

module.exports = url => REGEX_LOCALHOST.test(url)
