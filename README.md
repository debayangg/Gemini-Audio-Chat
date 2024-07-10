# Gemini-Audio-Chat

## Overview

Gemini-Audio-Chat is a web application that processes audio input, converts it to text, interacts with the Google Gemini API using the gemini-pro model, and outputs audio responses. This project is built using HTML, JavaScript, NodeJS, ExpressJS, and Jest for unit testing. Docker is used to streamline project setup, and GitHub Actions automate CI/CD workflows, including testing, building, pushing Docker images to Docker Hub, and deploying to Render upon updates to the main branch.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Audio Processing**: Converts audio input to text.
- **API Interaction**: Uses the Google Gemini API with the gemini-pro model to generate responses.
- **Audio Output**: Converts text responses back to audio.
- **Unit Testing**: Ensures reliability with Jest.
- **Docker Integration**: Simplifies setup and deployment.
- **CI/CD Pipeline**: Automated testing, building, and deployment with GitHub Actions.

## Technologies

- **HTML**
- **JavaScript**
- **NodeJS**
- **ExpressJS**
- **Jest**
- **Docker**
- **GitHub Actions**

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/debayangg/Gemini-Audio-Chat.git
    cd Gemini-Audio-Chat
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```
    GEMINI_API_KEY=your_google_gemini_api_key
    ```

4. **Run the application**:
    ```sh
    npm start
    ```

## Usage

1. **Start the server**:
    ```sh
    npm start
    ```

2. **Access the website**:
    Open your browser and go to `http://localhost:3000`.

3. **Interact with the bot**:
    - Speak into your microphone.
    - The bot will process your audio input, convert it to text, interact with the Google Gemini API, and respond with audio output.

## Testing

1. **Run unit tests**:
    ```sh
    npm test
    ```

## Deployment

### Docker

1. **Build the Docker image**:
    ```sh
    docker build -t gemini-audio-chat .
    ```

2. **Run the Docker container**:
    ```sh
    docker run -p 3000:3000 gemini-audio-chat
    ```

### CI/CD with GitHub Actions

1. **GitHub Actions Workflow**:
    - The CI/CD pipeline is configured in `.github/workflows/main.yml`.
    - It automates testing, building, pushing Docker images to Docker Hub, and deploying to Render upon updates to the main branch.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. **Commit your changes**:
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**:
    ```sh
    git push origin feature/your-feature-name
    ```
5. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
