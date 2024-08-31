# College Dunia Web Application

This project is a dynamic web application that displays a list of colleges with detailed information, implementing features such as infinite scrolling, sorting, and searching. The application is built using React, and it consumes a static JSON file to populate the college data.

## Features

1. **Infinite Scroll**: Initially, 10 rows are displayed, and more rows are loaded automatically as the user scrolls down.
2. **Sorting**: Users can sort the table by CD Rank, Course Fees, and User Reviews in ascending or descending order.
3. **Search**: Users can search for colleges by name.
4. **Responsive Design**: The table layout is responsive and works well across different screen sizes.
5. **Featured Colleges**: Displays a "Featured" flag for colleges that are marked as featured in the JSON data.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. **Clone the repository**:
    ```bash
   git clone https://github.com/yashjain-gangwal/frontend_task.git
   cd fronted_task
2. **Install the dependencies**:
   ```bash
   npm install
   # or
   yarn install
3. **Run the application**:
    ```bash
   npm start
   # or
   yarn start
   The application should now be running at http://localhost:3000.
## Project Structure

- `/src`: Contains the source code for the application.
  - `/components`: Contains reusable React components.
    - `CollegeTable.js`: The main component that renders the college table.
  - `/data`: Contains the static JSON data.
    - `colleges.json`: JSON file containing details of the colleges.
  - `/styles`: Contains the CSS files.
    - `CollegeTable.css`: CSS file for styling the college table.
  - `App.js`: The root component that includes `CollegeTable`.
  - `index.js`: The entry point for the React application.

## JSON Data Structure
The JSON data for colleges is structured as follows:

    [
      {
        "rank": 1,
        "name": "IIT Madras - Indian Institute of Technology - (IITM), Chennai",
        "location": "Chennai, Tamil Nadu",
        "approval": "AICTE Approved",
        "course": "B.Tech Computer Science Engineering",
        "cutoff": 144,
        "fees": 209550,
        "averagePackage": 2148000,
        "highestPackage": 19800000,
        "userRating": 8.6,
        "userReviews": 289,
        "bestFor": "Social Life",
        "ranking": "#3rd/131 in India",
        "rankingYear": "Outlook 2023",
        "featured": true
      }
    ]

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

## Deployment
```bash
https://collegeduniawebpage-yashs-projects-bbf93b79.vercel.app/
