# Basics of Docker


# Topics
- Introduction to Containers
  - Journey from Physical server, VMs, containers
  - Why we need containers?
  - Why Docker became popular

- Docker installation
  - Play with docker labs
  - Install on linux
  - Docker Desktop

- Docker Basic Commands
```bash
docker --version
# run first container
docker container run ubuntu:latest
docker container ps
docker container ps -a
# run some process
docker container run ubuntu:latest sleep 20
# give name
docker container run --name my-ubuntu ubuntu:latest sleep 20
docker container stop my-ubuntu
docker container rm my-ubuntu

# access application
docker container run -d --name my-apache httpd
docker exec -it my-apache sh
curl localhost
apt update && apt install curl -y
curl localhost
#modify files
#expose port 
docker container run -d --name my-httpd -p 8000:80 httpd
docker image ls
docker image pull httpd

# node js app
# Dockerfile
docker image build -t mynode:v1 .

#docker hub account
docker image tag mynode:v1 akilan/my-node:v1
docker login
docker image push akilan/my-node:v1

# Dockerfile httpd app

# data - mounting and volumes
docker container run -d --name my-httpd -v $(pwd)/httpd/:/usr/local/apache2/htdocs/ -p 8000:80 httpd:latest


docker volume ls
docker volume create httpd-volume

docker container run -d --name my-httpd -v httpd-volume/httpd/:/usr/local/apache2/htdocs/ -p 8000:80 httpd:latest

docker volume inspect httpd-volume

# entrypoint & cmd examples
```


###

Entrypoint, cmd
node app
python app
docker image layers
docker networks
docker compose
docker buildx
