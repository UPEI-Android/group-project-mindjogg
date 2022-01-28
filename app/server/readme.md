# Sever App 

## Description

The server app handles the MindJoGG client requests and sends the response back to the client. The server app connected to a mongodb database.

## Development With Docker 
The server app is running in a docker container. The docker container is running on a remote server (In Future).

### Getting Started

1. Download Docker in your machine from the [Offical Download Link](https://docs.docker.com/get-docker/) and follow the instructions from the offical page.

2. Download ***WSL2*** from the [Offical Download Link](https://docs.microsoft.com/en-us/windows/wsl/install) and follow the instructions from the offical page.

3. To build the docker container, run the following command in the terminal:

    a. Go to the server app directory:
        
    ``` $cd  app/server```

    b. Build the docker container:

    ``` $docker build -t server .``` 

    c. Run the docker container at the port 8080:

    ``` $docker run -dp 8080:8080 server```

## Deploying the Server's Docker image to a remote server

For the server app to be deployed to a remote server, the server app's docker image needs to be pushed to the remote server.

