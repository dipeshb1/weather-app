Weather App

A simple weather app that fetches real-time weather data using the WeatherAPI. Users can search for any city and view current weather conditions as well as a 6-day forecast. The app is built with React and uses caching to store the last searched city’s data for offline viewing.

Features

    •	Real-time weather data for any city.
    •	Displays current temperature, humidity, wind speed, and more.
    •	6-day weather forecast.
    •	Toggle between Celsius and Fahrenheit.
    •	Caching for offline access to the last searched city’s data.

Technologies Used

    •	React: For building the user interface.
    •	WeatherAPI: For fetching real-time weather data.
    •	CSS Modules: For component-based styling.
    •	Vite: For a fast development environment.

Installation

    1.	Clone the repository:
        git clone https://github.com/your-username/weather-app.git
        cd weather-app

    2.  Install dependencies:
        npm install

    3.  Create a .env file in the project root and add your WeatherAPI key:
        VITE_API_KEY=your_weatherapi_key_here

    3.  Run the development server:
        npm run dev
