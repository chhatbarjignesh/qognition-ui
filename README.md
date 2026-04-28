# Qognition UI

Qognition is an AI-powered QA automation platform designed to streamline testing workflows and provide intelligent insights into software quality.

## 🚀 Features

- **Home**: Overview of the Qognition platform.
- **Dashboard**: Real-time monitoring of QA activities.
- **Reports**: Detailed test execution reports and analytics.
- **AI-Powered**: (Coming soon) Intelligent test generation and failure analysis.

## 🛠️ Technologies Used

- **React 19**: Modern UI library for building interactive interfaces.
- **TypeScript**: Static typing for improved developer productivity and code quality.
- **React Router 7**: Robust routing for navigation within the application.
- **Docker**: Containerized environment for consistent deployment.

## 🏃 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional, for containerized execution)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd qognition-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## 🧪 Testing

To run the test suite:
```bash
npm test
```

## 🏗️ Building for Production

To create a production-ready build:
```bash
npm run build
```
The optimized files will be generated in the `build/` directory.

## 🐳 Docker Usage

### Build the Image
```bash
docker build -t qognition-ui .
```

### Run the Container
```bash
docker run -p 3000:3000 qognition-ui
```
The app will be accessible at [http://localhost:3000](http://localhost:3000).

## 📜 License

This project is private and for internal use only.
