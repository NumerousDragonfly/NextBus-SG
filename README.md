# NextBus SG🚏

NextBus SG is a single page web application that provides real-time bus arrival information for commuters in Singapore. By entering a bus stop code, users can view the estimated arrival times of upcoming buses, along with details such as crowd levels, wheelchair accessibility and bus type. The application is designed to improve the commuting experience by offering accurate and timely information, allowing users to plan their journeys more effectively.

The frontend of the application is hosted on GitHub Pages, while the backend is deployed on Vercel. The backend acts as a proxy server to fetch data from the LTA DataMall API and is built using Node.js and Express.

## Project Structure

```
NextBus-SG/
├── NextBus-SG-Backend/
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── vercel.json
├── .gitignore     
├── index.html
├── NextBus SG Icon.png
└── README.md
```

## Features

- **Real-time Arrival Timings**: Enter a bus stop code to retrieve up-to-date arrival timings for buses.
- **User-friendly Interface**: Navigate easily with a clean and intuitive design.
- **Save Frequently Searched Bus Stops**: Save frequently searched bus stops for quick access in future visits.
- **Bus Crowd Indicator**: Shows the currentbus crowd level.
- **Wheelchair Accessibility**: Indicates if the arriving buses are wheelchair accessible.
- **Bus Type**: Displays the type of bus (e.g., single-deck, double-deck, bendy bus) arriving at the bus stop.
- **Loading Indicator**: Shows a loading spinner while fetching data.
- **Error Handling**: Handles errors and displays appropriate messages.
- **Origin Security**: Ensures that requests are only accepted from trusted origins to prevent unauthorized access.
- **Rate Limiting**: Implements rate limiting to control the number of requests from a single IP address, protecting the server from abuse and potential denial-of-service attacks.

## Screenshots

![numerousdragonfly github io_NextBus-SG](https://github.com/user-attachments/assets/f6fc5799-6c22-47e6-bb37-ece15abb9ada)
