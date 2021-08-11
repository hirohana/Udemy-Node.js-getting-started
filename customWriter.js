const { Writable } = require('stream')

class CustomWriter extends Writable {
  constructor(options) {
    super(options)
  }

  _write(chunk, encoding, done) {
    let text
    if (encoding === 'buffer') {
      text = chunk.toString(this._writableState.defaultEncoding)
    } else {
      text = chunk
    }

    try {
      console.log(text)
    } catch (error) {
      done(error)
      return
    }
    done()
  }
}

module.exports = CustomWriter