# Basics of Kubernetes


# Topics


# NodeJs demo

```bash
docker network create node-app-net

#emp-app
cd employee-app
docker image build -t akilan/employee-app:v1 .
docker container run -d --name emp-app -p 3000:3000 --network node-app-net akilan/employee-app:v1
docker container ps
docker container logs emp-app

# node-app
cd node-app
docker image build -t akilan/node-app:v1 .
docker container run -d --name node-app -p 4000:4000 -e API_URL=http://emp-app:3000/ -e API_KEY=secret123 --network node-app-net akilan/node-app:v1
docker container ps
docker container logs node-app
```