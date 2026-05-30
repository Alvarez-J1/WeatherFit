# WeatherFit 

WeatherFit is a weather-based clothing recommendation application.  
It displays the user's current location, date, and temperature, and suggests appropriate clothing items based on current weather conditions.

## Live Demo

https://weatherfit-app.onrender.com/

## Features

1. Weather-Based Outfit Suggestions
Automatically recommends outfits based on the current weather using the OpenWeatherMap API.
Handles different temperature ranges (cold, hot)

2. Supports default clothing items for instant render — avoids empty placeholders.

3. User Interface & Experience
Clean, modern, and responsive React + Vite frontend.
Instant loading for default items to prevent layout shift.

4. Performance Optimizations
Uses default assets before backend data arrives, ensuring faster perceived load times.
Optimized image loading and minimal render-blocking for better UX.

5. Backend Features
Node.js + Express API serves clothing and weather data.
MongoDB database stores user preferences, clothing items.
provides endpoints to add/remove clothing items

## Tech Stack

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Node.js
- Express
- MongoDB
  
## Screenshots
## Desktop View
<img width="1903" height="913" alt="image" src="https://github.com/user-attachments/assets/cd6355b8-8ab1-4349-aaa1-90cd028a8dcf" />

## Mobile View
<img width="433" height="765" alt="image" src="https://github.com/user-attachments/assets/20217147-b704-419d-be55-1f6b0878314b" />


## Backend

This project connects to a Node.js and Express backend.

Backend repository:  
https://github.com/Alvarez-J1/WeatherFit-Backend

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Alvarez-J1/WTWR.git

Go into the project folder:

```bash
cd WeatherFit

Install dependencies:

```bash
npm install
```

```bash
Set up environment variables:

 .env file at the root
OPENWEATHER_API_KEY=your_api_key_here
```
```bash
Run the development server:

npm start

Open in your browser: http://localhost:3000
```

## Project Structure
```text
WeatherFit-Frontend/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── db.json
├── README.md
├── .eslintrc.cjs
├── .gitignore
└── src/
    ├── main.jsx
    ├── index.css
    ├── assets/
    │   ├── Default.svg
    │   ├── Like_btn.svg
    │   ├── heart.svg
    │   ├── logo.svg
    │   └── sunny.svg
    ├── components/
    │   ├── AddItemModal/
    │   ├── App/
    │   ├── ClothesSection/
    │   ├── EditProfileModal/
    │   ├── Footer/
    │   ├── Header/
    │   ├── ItemCard/
    │   ├── ItemModal/
    │   ├── LoginModal/
    │   ├── Main/
    │   ├── ModalWithForm/
    │   ├── Profile/
    │   ├── ProtectedRoute/
    │   ├── RegisterModal/
    │   ├── SideBar/
    │   ├── ToggleSwitch/
    │   └── WeatherCard/
    ├── contexts/
    │   ├── CurrentTemperatureUnitContext.jsx
    │   └── CurrentUserContext.jsx
    ├── hooks/
    │   └── useForm.js
    ├── utils/
    │   ├── api.js
    │   ├── auth.js
    │   ├── constants.js
    │   └── weatherApi.js
    └── vendor/
        ├── fonts.css
        └── normalize.css
```

## Author
Joel Alvarez
