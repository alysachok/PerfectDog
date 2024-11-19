# **PerfectPet App**

Welcome to PerfectPet, a fun and interactive app for discovering random cat and dog images, as well as detailed information about dog breeds! Built with **Vite** for secure API key storage.

This project was created as part of the [Advanced Pre-Work Assignment for Code the Dream](https://codethedream.org/adv-pw-part2/#build-task1)

---

## **Table of Contents**

1. [Overview](#overview)
2. [Features and Usage](#features-and-usage)
3. [API Information](#api-information)
4. [Installation](#installation)
5. [Author](#author)

---

## **Overview**

PerfectPet is a simple dynamic app built to showcase the use of public APIs to display content about cats and dogs. It demonstrates how to:

- Fetch data from APIs (with and without API keys).
- Display fetched data dynamically on an HTML page.
- Navigate between different endpoints

This project highlights skills in:

- JavaScript for fetching and rendering API data.
- Responsive web design using CSS.
- Secure handling of API keys using Vite and `.env`.

---

## **Features and Usage**

### **Homepage**

- Home page is navigation hub between the Homepage, Cats page, and Dogs page.
- The **Home button** is always accessible to return to the homepage.

### **Cats Page**

- Displays **10 random cat images** fetched from [The Cat API](https://thecatapi.com/).
- A **"Load Random Cats"** button fetches a new set of images.
- Cat page is to browsing cat images.

### **Dogs Page**

- Displays random dog images along with detailed breed information:
  - **Weight**
  - **Lifespan**
  - **Temperament**
- Includes a **Wikipedia link** for each breed, which opens in a new tab for more details.
- Provides a **Google Search field** to find additional information (also opens in a new tab).
- A **"Load Random Dogs"** button fetches new random dog data.

---

## **API Information**

### **1. The Cat API**

- Endpoint: `https://api.thecatapi.com/v1/images/search`
- **Query Parameters Used:**
  - `limit=10`: Fetches 10 random cat images.
- **Note:** This endpoint does not require an API key.

### **2. The Dog API**

- Endpoint: `https://api.thedogapi.com/v1/images/search`
- **Query Parameters Used:**
  - `limit=20`: Fetches 20 random dog images.
  - `include_breeds=true`: Includes detailed breed information.
  - **API Key Required:** A valid API key is stored in the `.env` file.

---

## **Installation**

### **1. Clone the Repository**

Clone the project from the GitHub repository:

```bash
git clone https://github.com/alysachok/PerfectPet.git
cd PerfectPet
```

### **2. Install Dependencies**

Ensure you have Node.js installed, then run:

```bash
npm install
```

### **3. Set Up Environment Variables**

Create a .env file in the root of the project and add your API key for the Dog API:

```bash
VITE_DOG_API_KEY=your_dog_api_key
```

### **4. Start the Development Server**

```bash
npm run dev
```

### **5. Open the App**

Navigate to the URL shown in your terminal (e.g., http://localhost:5173).

---

## **Author**

### **Aleksandra Lysachok**

Email: aleksandra@lysachok.dev

Website: [ePortfolio](https://aleksandra.lysachok.dev/)
