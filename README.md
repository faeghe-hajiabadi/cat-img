# Random Cat Image Viewer 🐱

This is a simple React application that fetches and displays random cat images using [The Cat API](https://thecatapi.com/). The app is designed to demonstrate how to use React's context API to manage and share state across components.

## Features

- Fetches and displays a random cat image.
- Allows users to load a new random cat image by clicking a button.
- Manages image data and state using React Context API.
- Provides basic error handling if the image fetch fails.


## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/random-cat-image-viewer.git
    cd random-cat-image-viewer
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    This will start the app on `http://localhost:3000`.

## Project Structure

- `src/`
  - `CatImageContext.js`: Contains the context and provider for managing the cat image URL and related logic.
  - `App.js`: Main component that displays the cat image and a button to fetch more images.
  - `App.css`: Basic styling for the application.

## Usage

Once the application is running:

- The app will display a random cat image when loaded.
- Click the "More" button to load a new random cat image.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [The Cat API](https://thecatapi.com/): A free API to get random cat images.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [The Cat API](https://thecatapi.com/) for providing the images.
- React for making front-end development delightful.

---

