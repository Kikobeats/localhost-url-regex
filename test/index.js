'use strict'

const test = require('ava')

const isLocalhost = require('is-local-address')

const { externalIPs, internalIPs } = require('./cases')

internalIPs.forEach(({ ip }) => {
  test(`true » ${ip}`, t => {
    t.true(isLocalhost(ip), ip)
  })
})

externalIPs.forEach(({ ip }) => {
  test(`false » ${ip}`, t => {
    t.false(isLocalhost(ip), ip)
  })
})
