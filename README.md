# Weather App

This is a simple weather app created using React and Material-UI, which fetches real-time weather data from the OpenWeather API. It allows users to search for the current weather conditions in any city.

## Features

- Search for any city's weather information.
- Displays temperature, humidity, and weather conditions.
- Uses icons and images based on weather conditions.
- Built with React, Material-UI, and OpenWeather API.

## Demo

You can check out the live demo [here](https://weather-app-five-nu-48.vercel.app/).

## Project Structure

```
/src
  ├── App.jsx
  ├── WeatherApp.jsx
  ├── SearchBox.jsx
  ├── InfoBox.jsx
  ├── index.js
  ├── App.css
  └── index.css
```

- **App.jsx**: Main application file that renders the `WeatherApp`.
- **WeatherApp.jsx**: Handles state management and includes `SearchBox` and `InfoBox`.
- **SearchBox.jsx**: Takes user input and fetches weather data from the OpenWeather API.
- **InfoBox.jsx**: Displays the weather information in a card format.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Material-UI**: React component library for styling.
- **OpenWeather API**: For fetching real-time weather data.

## Learning

This project helped me understand several key concepts in front-end development, especially in the React ecosystem. Here are some of the major learnings from this project:

1. **React Component Structure**:  
   I learned how to break down an application into reusable components and how to structure the app effectively using functional components.

2. **State Management**:  
   Using React's `useState` hook, I learned how to manage the application state, particularly handling weather data fetched from the API.

3. **API Integration**:  
   I gained experience in fetching data from an external API (OpenWeather API), handling asynchronous requests using `async/await`, and updating the UI based on the fetched data.

4. **Material-UI**:  
   I became familiar with Material-UI components like `TextField`, `Button`, `Card`, and `Typography`, which helped in creating a clean and responsive user interface.

5. **Error Handling**:  
   Implementing error handling in the API request taught me how to deal with potential issues, such as invalid city names, and provide user feedback using Material-UI's `Alert` component.

6. **Dynamic Rendering**:  
   I learned how to conditionally render different UI elements, such as weather icons and background images, based on the fetched data (e.g., temperature or humidity levels).

7. **CSS & Responsive Design**:  
   Styling the components using both CSS and Material-UI’s built-in theming made me more aware of responsive design practices and how to style a modern web application.

8. **Project Setup and Version Control**:  
   I gained practical experience with project setup, dependency management using `npm`, and version control using GitHub for tracking changes and collaborating on projects.

Overall, this project has given me a strong foundation in React and introduced me to various essential tools and libraries for front-end development.

## License

This project is licensed under the MIT License.
