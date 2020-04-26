'use strict'

const test = require('ava')

const isLocalhostUrl = require('..')

test('true', t => {
  t.true(isLocalhostUrl('http://localhost:3000'))
})

test('false', t => {
  t.false(isLocalhostUrl('https://example.com'))
  t.false(isLocalhostUrl('http://example.com'))
})
