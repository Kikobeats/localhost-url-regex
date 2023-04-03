'use strict'

const test = require('ava')

const localhostUrl = require('..')

test('true', t => {
  t.true(localhostUrl().test('http://localhost:3000'))
  t.true(localhostUrl().test('https://localhost:1337'))
  t.true(localhostUrl().test('https://127.0.0.1:8080'))
  t.true(localhostUrl().test('http://192.168.4.50:3000/'))
  t.true(localhostUrl().test('http://10.0.0.0/8/'))
  t.true(localhostUrl().test('http://127.0.0.1:80'))
  t.true(localhostUrl().test('http://0.0.0.0:80'))
  t.true(localhostUrl().test('http://127.0.1.0:80'))
  t.true(localhostUrl().test('http://[::]:3000/'))
  t.true(localhostUrl().test('http://[::1]:3000/'))
})

test('false', t => {
  t.false(localhostUrl().test('https://example.com'))
  t.false(localhostUrl().test('http://example.com'))
  t.false(localhostUrl().test('http://example.com:80'))
})
