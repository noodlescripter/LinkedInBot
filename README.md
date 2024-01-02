# LinkedInBot

LinkedInBot is an application designed to automate the 'Easy Apply' feature on LinkedIn, streamlining the job application process.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm (Node Package Manager)

### Installing

Follow these steps to get your development environment running:

1. **Clone the repository**

   ```bash
   git clone [URL_of_the_GitHub_repository]
   ```

2. **Install dependencies for the main project**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Install dependencies for the server**

   Change directory to the server folder and install the necessary packages:

   ```bash
   cd server
   npm install
   ```

4. **Install dependencies for the BOTEngine**

   Navigate to the BOTEngine directory and install its dependencies:

   ```bash
   cd ../BOTEngine
   npm install
   ```

### Running the application

To start the application, you need to run the server and the client separately.

1. **Start the server**

   Navigate back to the server directory and start it:

   ```bash
   cd ../server
   npm start
   ```

2. **Start the client**

   Open a new terminal, navigate to the root directory of the project, and start the client:

   ```bash
   cd ..
   npm start
   ```

The application should now be running and accessible at `localhost:4200`.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

