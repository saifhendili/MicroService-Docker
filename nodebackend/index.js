const express = require('express');
const connectDB = require('./config/db');
const request = require('request');
const ip = require('ip');
const http = require('http');
const app = express();

const server = http.createServer(app);
const Eureka = require('eureka-js-client').Eureka;
const client = new Eureka({
  // application instance information
  instance: {
    app: 'expressservice',
    hostName:  (process.env.HOSTNAME || 'localhost'),
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:5435',
    port: {
      '$': 5435,
      '@enabled': 'true',
    },
    vipAddress: 'app',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    }
  },
  registerWithEureka: false,
  fetchRegistry: false,
  eureka: {
      host: ('eureka-server'),
      port: 8761,
      servicePath: '/eureka/apps/',
      maxRetries: 10,
      requestRetryDelay: 2000,
  },
   });
  
     client.logger.level('debug');
     client.start((error) => {
             console.log(error || 'complete');
      });
  function connectToEureka() {              
    client.logger.level('debug');  
    client.start(function(error) {
    console.log(JSON.stringify(error) || 'Eureka registration complete');   }); }
    connectToEureka();


//Connect Database
connectDB();
// //Init Middlew:are

app.use(express.json({ extended: false })); 
app.use('/app/blog', require('./routes/api/blog'));
app.use('/app/users', require('./routes/api/users'));
app.use('/app/auth', require('./routes/api/auth'));
// require('./middleware/eureka-helper').registerWithEureka('app-service', 5000);

server.listen(process.env.PORT || 5435, () =>
  console.log(`Server has started on.`)
);