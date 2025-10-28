# BrewBro

**BrewBro** is a modular **homebrewing calculator and monitoring platform**.  
It helps brewers design, calculate, and track their brewing process.

Developed as a collaborative school project under the direction of **Raul Rooso**, BrewBro aims to evolve into a complete brewing assistant, integrating recipe management, IoT sensor data, and smart brewing automation.

---

## Features

- **Recipe Builder** — calculate OG, FG, ABV, IBU, color, efficiency, and more  
- **Dynamic Unit Conversion** — work in kilograms, liters, and Brix (SI units)  
- **Reusable Ingredient Database** — manage malts, hops, yeasts, and adjuncts  
- **Mash Step Tracking** — define multi-step mash profiles  
- **Additives Support** — salts, spices, and acids for advanced recipe design  
- **SQLite Local Database** — lightweight and fast persistence  
- **Modular Architecture** — ready for future IoT/microcontroller integration  
- **API-Ready** — Express.js backend with room for a web UI or mobile app  

---

## Tech Stack

| Component | Technology |
|------------|-------------|
| **Language** | JavaScript (Node.js, CommonJS) |
| **Database** | SQLite |
| **Backend Framework** | Express.js |
| **Environment Config** | Dotenv |
| **Development Tool** | Nodemon |

---

## Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/YOUR_USERNAME/BrewBro.git
cd BrewBro
npm install

Running the App

Start in development mode (auto-reload with Nodemon):
npm run dev

Or run normally:
npm start