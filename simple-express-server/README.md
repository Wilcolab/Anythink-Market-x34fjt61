# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate a basic setup with Docker and nodemon for automatic reloading during development.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile           # Docker configuration file
├── package.json         # npm configuration file
├── yarn.lock            # Dependency lock file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- Yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with nodemon, run:
```
yarn start
```

The server will listen on port 8001.

### Building the Docker Image

To build the Docker image, run:
```
docker build -t simple-express-server .
```

### Running the Docker Container

To run the Docker container, use:
```
docker run -p 8001:8001 simple-express-server
```

The server will be accessible at `http://localhost:8001`.