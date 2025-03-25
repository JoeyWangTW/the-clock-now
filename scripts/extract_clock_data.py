#!/usr/bin/env python3
import re
import csv
import os
from pathlib import Path

def extract_time_from_filename(filename):
    """Extract time information from filenames like 'Les Bonnes Femmes 6.58 p.m. 1.png'"""
    # Match patterns like '6.58 p.m.' or '12.30 a.m.'
    time_pattern = r'(\d{1,2})\.(\d{2})\s+(a\.m\.|p\.m\.)'
    match = re.search(time_pattern, filename)
    
    if match:
        hour, minute, period = match.groups()
        hour = int(hour)
        minute = int(minute)
        
        # Convert to 24-hour format for consistent sorting
        if period == 'p.m.' and hour < 12:
            hour += 12
        elif period == 'a.m.' and hour == 12:
            hour = 0
            
        # Format as HH:MM
        time_24h = f"{hour:02d}:{minute:02d}"
        return time_24h
    return None

def parse_page_file(filepath):
    """Parse an HTML page file to extract clock data entries"""
    results = []
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
        
        # Find all the table rows
        rows = re.findall(r'<tr>.*?</tr>', content, re.DOTALL)
        
        for row in rows:
            # Extract the file name
            filename_match = re.search(r'<td class="TablePager_col_img_name"><a.*?>(.*?)</a>', row)
            if not filename_match:
                continue
                
            filename = filename_match.group(1)
            
            # Extract the URL
            url_match = re.search(r'href="(https://static\.wikia\.nocookie\.net/theclock/images/.*?)"', row)
            if not url_match:
                continue
                
            url = url_match.group(1)
            
            # Get raw URL without query parameters for alternate access
            base_url = url.split('?')[0]
            
            # Extract time from the filename
            time = extract_time_from_filename(filename)
            
            if time:
                results.append({
                    'time': time,
                    'file_name': filename,
                    'url': url,
                    'base_url': base_url
                })
    
    return results

def main():
    base_dir = Path(__file__).parent.parent  # Parent of scripts directory
    raw_data_dir = base_dir / 'data' / 'raw'
    output_dir = base_dir / 'public'
    output_file = output_dir / 'clock_entries.csv'
    
    # Ensure output directory exists
    output_dir.mkdir(exist_ok=True)
    
    all_entries = []
    
    # Process all page files
    for page_file in raw_data_dir.glob('page_*.txt'):
        print(f"Processing {page_file}...")
        entries = parse_page_file(page_file)
        all_entries.extend(entries)
    
    # Sort by time
    all_entries.sort(key=lambda x: x['time'])
    
    # Write to CSV
    with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['time', 'file_name', 'url', 'base_url']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        for entry in all_entries:
            writer.writerow(entry)
    
    print(f"Extracted {len(all_entries)} clock entries to {output_file}")

if __name__ == "__main__":
    main()