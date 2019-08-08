# A Simple node.js App with docker-compose

## How to launch:
```
docker-compose up [--build]
```
## How to test:
Open the browser / or use `curl` for the following addresses:
```
http://localhost:8077/        //a first instance of the visit counting app that runs on 8077
http://localhost:8078/        //a second instance of the visit counting app that runs on 8078
```
and observe that the redis caches the number of visits to both application instances 

## How to shutdown:
```
docker-compose down
```

