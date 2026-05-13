import { connect } from 'mongoose'
import dns from 'node:dns'

const url = process.env.MONGODB_URL
dns.setServers(['1.1.1.1', '8.8.8.8'])
const connectDB = () => {
  connect(url)
    .then(() => {
      console.log('Connection to DB established')
    })
    .catch(e => console.log(e.message))
}

connectDB()
