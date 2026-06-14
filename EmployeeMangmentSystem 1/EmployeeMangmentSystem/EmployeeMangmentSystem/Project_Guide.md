# Project Setup Guide

Welcome! This guide will help you set up and run the **Employee Management System** on your laptop.

---

## ✅ Prerequisites
Before you start, make sure you have:
1.  **Node.js Installed**: Download it from [nodejs.org](https://nodejs.org/). (LTS version recommended).
    -   To check if installed, open a terminal (Command Prompt or PowerShell) and type: `node -v`

---

## 🚀 How to Setup & Run
Since the project folder does not include the heavy `node_modules` folder, you need to install it first.

### Step 1: Install Dependencies
1.  Open the project folder (`EmployeeMangmentSystem/EmployeeMangmentSystem`) in VS Code.
2.  Open the Terminal in VS Code (`Ctrl + ~` or Terminal > New Terminal).
3.  Type the following command and press Enter:
    ```bash
    npm install
    ```
    *(This will download all the necessary packages. It might take a few minutes.)*

### Step 2: Run the Project
Once installation is complete, start the application:
```bash
npm run dev
```
-   You will see a Local URL, typically `http://localhost:5173/`.
-   **Ctrl + Click** that link to open it in your browser.

---

## 🌍 Fixing "Too Far Away" Error (Demo Mode)
If you try to Clock In and get a **"You are too far"** error, it's because your laptop uses Wi-Fi for location which is not accurate.

**Enable Demo Mode for Presentations:**
1.  Go to `src/config/locationConfig.js`
2.  Find the setting `disableLocationCheck`.
3.  Change it to `true`:
    ```javascript
    // Student Project / Demo Mode
    // Set this to 'true' to allow clock-in from ANYWHERE (ignores distance)
    disableLocationCheck: true
    ```
4.  Save the file. You can now clock in from anywhere!

---

## 📂 Project Structure Overview
Here is a quick guide to explain the files to your external examiner:

-   `src/main.jsx`: The entry point of the React application.
-   `src/App.jsx`: Handles Routing (Navigation) between Home, Admin, and Employee Portal.
-   `src/pages/`: Contains the main screens:
    -   `Home.jsx`: The Landing Page.
    -   `EmployeePortal.jsx`: Where employees clock in/out (Logic for Geofencing is here).
    -   `Admin.jsx`: The Dashboard for management.
-   `src/config/locationConfig.js`: **IMPORTANT**. Contains the Office Coordinates and Demo Mode settings.
-   `src/components/`: Reusable UI parts like Navbar, Footer, and Charts.
-   `package.json`: Lists the libraries used (React, Leaflet for Maps, Recharts for Graphs).

---

## ⚠️ Troubleshooting
-   **"Vite is not recognized"**: You forgot to run `npm install`. Run it first.
-   **"Black Screen" in Admin**: We added an **Error Boundary**. Click the red "Reset App" button if this happens.
-   **"Location Access Denied"**: Make sure you clicked "Allow" when the browser asked for Location permission.

Good luck with your project! 🚀
