'use strict'

const test = require('ava')

const isLocalhost = require('is-local-address/ipv6')

const { externalIpv4s, internalIPv4s, internalIPv6s } = require('./cases')

internalIPv6s.forEach(({ ip }) => {
  test(`true » ${ip}`, t => {
    t.true(isLocalhost(ip), ip)
  })
})

externalIpv4s.concat(internalIPv4s).forEach(({ ip, type }) => {
  test(`false » ${ip}`, t => {
    t.false(isLocalhost(ip), ip)
  })
})
