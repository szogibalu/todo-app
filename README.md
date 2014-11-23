# A simple TODO application

## Technologies
- node.js
- mongoDB
- Express
- AngularJS

## Setup your local mongoDB

- Use the official mongoDB image from https://registry.hub.docker.com/_/mongo/
- Run with mapping the port: 
```
sudo docker run --name mongodb -d -p 27017:27017 mongo
```
- Create a 'todo' database : 
```
docker run -it --link mongodbdb:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PO/ 
```
- Give the command:
``` 
use todo 
```
- For quit: CTRL + C

## Start the application
- Start the server: 
```
node server.js 
```

