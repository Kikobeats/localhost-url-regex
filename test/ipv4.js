'use strict'

const test = require('ava')

const isLocalhost = require('is-local-address/ipv4')

const { externalIPs, internalIPv4s, internalIPv6s } = require('./cases')

internalIPv4s.forEach(({ ip }) => {
  test(`true » ${ip}`, t => {
    t.true(isLocalhost(ip), ip)
  })
})

externalIPs.concat(internalIPv6s).forEach(({ ip }) => {
  test(`false » ${ip}`, t => {
    t.false(isLocalhost(ip), ip)
  })
})
