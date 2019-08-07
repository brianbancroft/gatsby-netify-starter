const { compose } = require('ramda')

const add = x => y => x + y
const addTen = add(10)
const multiply = x => y => x * y
const multiplyTwentySix = multiply(26)
const randomZeroToTen = () => Math.floor(Math.random() * 11)

const random = compose(
  addTen,
  multiplyTwentySix,
  randomZeroToTen
)

exports.handler = (event, context, callback) => {
  const randomNumber = random()

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ value: randomNumber }),
  })
}
