const CustomReader = require('./customReader')
const CustomWriter = require('./customWriter')

const reader = new CustomReader()
const writer = new CustomWriter
reader.pipe(writer)
reader.resume()