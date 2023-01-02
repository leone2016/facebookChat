
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# usrv auth
$ npm run start:dev auth

# usrv api
$ npm run start:dev api
```
docker rmi $(docker images -a -q)

## Portainer 
```bash

$ docker volume create portainer_data
$ docker run -d -p 8000:8000 -p 9443:9443 --name portainer \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data \
portainer/portainer-ce:2.9.3

# access and configure
https://localhost:9443
```
## Information Course

- Author - [Jon Peppinck](https://www.youtube.com/@JonPeppinck)
- Github - [@Jon-Peppinck](https://github.com/Jon-Peppinck/messenger-api)

