# CLAUDE.md - Guidelines for The Clock Wiki Data

## Project Overview
This repository contains text files with HTML content from "The Clock" wiki, documenting film clips showing clocks at different times from Christian Marclay's 24-hour video art installation.

## Commands
- **View Content**: Use text editors to view the large text files
- **Search**: Use grep/find tools to search for specific films or times
- **Validate HTML**: For HTML validation if needed, use `html-validator file.txt`

## Style Guidelines
- **File Naming**: Follow existing pattern of `page_N.txt` where N is the page number
- **HTML Structure**: Maintain original HTML structure from the wiki
- **Time Format**: Use consistent time format (e.g., "1.54 a.m.", "6.30 p.m.")
- **Film References**: Use format "Film Title time.png" for image filenames
- **Documentation**: Include source film title and timestamp info in descriptions
- **Links**: Preserve all internal wiki links in their original format
- **Sorting**: Content should maintain chronological ordering by timestamp

## Error Handling
- Report any broken image links or malformed HTML
- Document any inconsistencies in time format or data structure