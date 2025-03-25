# The Clock Now

A Next.js web application that displays film clock images from Christian Marclay's "The Clock" based on the current time.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- Displays clock images from films corresponding to the current time
- Updates every second
- Shows film titles and time information
- Responsive design for different screen sizes

## Data Source

The application uses data from [The Clock Wiki](https://theclock.fandom.com/wiki/The_Clock_Wiki), parsed into a CSV file with the following structure:
- time: 24-hour format time (HH:MM)
- file_name: The original filename
- url: Direct URL to the image

All images are used under the [CC BY-SA license](https://creativecommons.org/licenses/by-sa/3.0/).

## Technologies Used

- Next.js
- React
- PapaParse for CSV parsing