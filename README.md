Python and Node.js Server

This project contains a FastAPI server implemented in Python and a Node.js server. It provides routes for managing a task list and includes details on migrating from the Python server to the Node.js server.

## Migration Details

To migrate from the Python FastAPI server to the Node.js server, follow these steps:

1. **Set up the Node.js environment**: Ensure you have Node.js and npm installed on your machine.

2. **Install dependencies**: Navigate to the Node.js server directory and run the following command to install the required dependencies:

  ```shell
  npm install
  ```

3. **Update Docker configuration**: Modify the `docker-compose.yml` file to include the Node.js server configuration.

4. **Run the Node.js server**: Use Docker to build and start the containers by running:

  ```shell
  docker compose up
  ```

5. **Verify the server**: Ensure the Node.js server is running and accessible at the specified port.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `node-server/src/index.js`: This file contains the implementation of the Node.js server with similar routes to the FastAPI server.

- `node-server/package.json`: This file lists the dependencies required for the Node.js server.

- `node-server/Dockerfile`: This file is used to build a Docker image for the Node.js server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI or Node.js server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker images for the servers and start the containers defined in the `docker-compose.yml` file.

- The servers should now be running. You can access the FastAPI server at port `8000` and the Node.js server at the specified port.

## API Routes

Both servers provide the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.ython Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.


## Server Information

- The Python FastAPI server runs on port `8000`.
- The Node.js server runs on port `8001`.