# Incident Reporting System

## Overview

The Incident Reporting System is a web application designed to allow users to report incidents. It provides a form for users to submit incident details and interacts with a database to store and manage these incidents.

## Features

- **Risk Assessment Matrix:** Automatically calculate risk level based on urgency and impact. (Ahmed)
- **Incident Report Creation:** Users can submit incident reports through a web form. (Parsa)
- **Incident Report Viewing: Users can view all incident reports created. (Alex)
- **Incident Report Editing** Admins/Managers can edit existing reports. (Jungmin)
- **Incident Report Deleting** Users can delete unassigned incident reports in the event of mistake or irrelevance. (Ryan)
- **Offender Detail Recording** Users can create offenders which are stored in the database. (Ryan)
- **Offender Detail Viewing** Users can view all recorded offenders and their ID's. (Alex)
- **Warning Management** Loggs warnings issued to offenders and there current status. (Jungmin)
- **User Access Control** Assigns roles and privlages based on account login details. (Ahmed)
- **Incident allocation** Users can assign incident reports to specific managers for review. (Parsa) 

## Technologies Used

- **Backend:** Node.js with Express.js
- **Frontend:** HTML, CSS (Bootstrap)
- **Database:** SQLite

## Installation

To get started with this project, follow these steps:

1. **Install Node.js and npm:**

   Download and install Node.js, which includes npm (Node Package Manager) from the [official Node.js website](https://nodejs.org/en/download/prebuilt-installer).

2. **Clone the Repository and install dependencies:**
   git clone https://github.com/RyanBlix1/Advanced-Software-Development-Proj

3. **Install Dependencies:**

   Open a terminal in VS Code and install the required Node.js packages using npm:

   -npm install

   -may have to use npm install express-session if you pull and error when using node app.js (below)

5. **Start the Server:**

   Start the server to run the application on localhost:3000:

   node app.js

6. **Access the Application:**

   Open your web browser and navigate to http://localhost:3000 to see the application in action.

7. **login Details**

   Basic accounts created for testing purposes 

   Manager account
      Username: admin
      Password: admin

   User account
      Username: user
      Password: user
   
