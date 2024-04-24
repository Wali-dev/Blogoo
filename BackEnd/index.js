const app = require('../BackEnd/app')
const dev = require('./config/config')

require('./config/db')

const port = dev.port;





app.listen(port, ()=>{
    console.log(`The server is running on http://localhost:${port}`)
})