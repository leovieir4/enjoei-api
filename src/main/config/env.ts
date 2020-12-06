export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/enjoei-node-api',
  mongoTest: 'mongodb://localhost:27017/test',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
