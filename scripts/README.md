# The Clock Scripts

This directory contains utility scripts for processing data related to "The Clock" project.

## Scripts

### extract_clock_data.py

Extracts clock information from HTML files and generates a CSV file for the web application.

**Usage:**
```bash
python extract_clock_data.py
```

**Input:**
- HTML files in `../data/raw/` (page_1.txt through page_7.txt)

**Output:**
- `../public/clock_entries.csv`: CSV file with columns:
  - `time`: 24-hour format time (HH:MM)
  - `file_name`: Original filename
  - `url`: Direct URL to the image
  - `base_url`: URL without query parameters

**Features:**
- Extracts time information from filenames
- Converts times to 24-hour format
- Sorts entries chronologically
- Handles multiple entries for the same minute

**Dependencies:**
- Python 3.6+
- Standard library only (re, csv, os, pathlib)