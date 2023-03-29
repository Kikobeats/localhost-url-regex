'use strict'

const test = require('ava')

const localhostUrl = require('..')

test('true', t => {
  t.true(localhostUrl().test('http://localhost:3000'))
  t.true(localhostUrl().test('https://localhost:1337'))
  t.true(localhostUrl().test('https://127.0.0.1:8080'))
  t.true(localhostUrl().test('http://127.0.0.1:80'))
  t.true(localhostUrl().test('http://127.0.1.0:80'))
  t.true(localhostUrl().test('http://::1:8001'))
  t.true(localhostUrl().test('https://::1:3001'))
})

test('false', t => {
  t.false(localhostUrl().test('https://example.com'))
  t.false(localhostUrl().test('http://example.com'))
})
