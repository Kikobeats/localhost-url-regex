'use strict'

const REGEX_LOCALHOST = /http:\/\/localhost/

module.exports = url => REGEX_LOCALHOST.test(url)
