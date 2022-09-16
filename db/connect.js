import mongoose from 'mongoose'

const connectDb = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log('connected to the db...'))
    .catch((err) => console.log(err))
}

export default connectDb
