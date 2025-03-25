# The Clock Data

This directory contains data files related to Christian Marclay's "The Clock" art installation.

## Directory Structure

- `raw/`: Contains the original HTML data from The Clock Wiki
  - `page_1.txt` through `page_7.txt`: HTML data scraped from The Clock Wiki containing image information

## Data Processing

The Python script in `../scripts/extract_clock_data.py` processes these HTML files to extract:
- Time information from film clocks
- Film titles
- Image URLs

The processed data is saved as a CSV file in the `../public/` directory for use by the web application.

## Data Format

The raw HTML files contain tables with information about clock images from various films, including:
- Timestamps of when they appear in "The Clock"
- Film titles
- Direct URLs to the images
- Image sizes
- Descriptions

## Image Rights

All images and film references are from Christian Marclay's "The Clock" (2010) and were collected by ElevenFiftyNine from The Clock Wiki. These are used for educational and artistic purposes only.