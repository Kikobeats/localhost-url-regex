const { isIP } = require('net')

const IP_RANGES = [
  '[::]',
  '[::1]',
  '0.0.0.0',
  '10.0.0.0',
  '127.0.0.0',
  '127.0.0.1',
  '127.0.1.0',
  '127.0.53.53',
  '169.254.169.254',
  '192.168.1.14',
  '192.168.4.50',
  'localhost'
]

const internalIPs = IP_RANGES.map(ip => ({ type: isIP(ip), ip }))

const externalIPs = ['example.com', 'example.com:80', '81.20.19.73'].map(ip => ({ type: isIP(ip), ip }))

module.exports = {
  internalIPs,
  externalIPs,
  externalIpv4s: externalIPs.filter(({ type }) => type === 4 || type === 0),
  internalIPv4s: internalIPs.filter(({ type }) => type === 4),
  internalIPv6s: internalIPs.filter(({ ip, type }) => type === 6 || (type === 0 && ip.includes('::')))
}
