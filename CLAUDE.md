# CLAUDE.md - Guidelines for The Clock Project

## Project Overview
This repository contains a Next.js web application that displays film clock images from Christian Marclay's "The Clock" art installation. The application shows images matching the current time, along with source data and extraction tools.

## Commands
- **Start Development Server**: `npm run dev` (runs at http://localhost:3000)
- **Build Production Version**: `npm run build`
- **Start Production Server**: `npm run start`
- **Process Raw Data**: `python scripts/extract_clock_data.py`

## Project Structure
- **data/raw/**: Raw HTML data from The Clock Wiki
- **scripts/**: Data processing utilities for extracting image information
- **public/**: Generated CSV and static assets
- **components/**: React components for the UI
- **pages/**: Next.js pages including the main view and API endpoints
- **styles/**: CSS modules for styling components

## Development Guidelines
- **HTML Data**: Keep raw HTML files in data/raw/ directory
- **Data Processing**: Use Python script to extract and process data
- **CSV Format**: Maintain time, file_name, url, base_url format in CSV
- **Image Loading**: Use proxy API for image loading to avoid CORS issues
- **UI Design**: Maintain minimal fullscreen interface with subtle overlays
- **Clock Logic**: Ensure correct time display and random image selection

## Credits
Always maintain attribution to:
- Christian Marclay for creating "The Clock" (2010)
- ElevenFiftyNine for collecting and organizing images on The Clock Wiki