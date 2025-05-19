# dinnerhosting# Dinner Hosting App

## Overview
The Dinner Hosting App is a simple web application that allows users to host dinners, make reservations, and manage their dining experiences. The app is designed to demonstrate user authentication and basic CRUD operations without the need for a backend database.

## Features
- User authentication for different roles: users, hosts, and application owners.
- Modal for creating and managing dinner hosting events.
- List of hosted dinners with options to edit or delete if logged in as a host.
- Ability to reserve dinners, edit reservations, and remove reservations.
- Search functionality to filter dinners from the list.

## Project Structure
```
dinner-hosting-app
├── index.html         # Main entry point of the application
├── css
│   └── style.css      # Styles for the application
├── js
│   ├── app.js         # Main JavaScript file for app initialization
│   ├── auth.js        # User authentication management
│   ├── dinner.js      # Dinner hosting functionality
│   └── reservation.js  # Reservation management
└── README.md          # Project documentation
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open `index.html` in your web browser to run the application.
3. Use the provided modals to log in, host dinners, and make reservations.

## Usage Guidelines
- To log in, enter your credentials in the login modal.
- Hosts can create new dinner events and manage existing ones.
- Users can browse available dinners and make reservations.
- Refreshing the page will reset all session data, as no persistent storage is used.

## Technologies Used
- HTML
- CSS
- JavaScript

## License
This project is open-source and available for anyone to use and modify.