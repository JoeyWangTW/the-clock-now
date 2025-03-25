export default async function handler(req, res) {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Fetch the image
    const imageResponse = await fetch(url);
    
    if (!imageResponse.ok) {
      return res.status(imageResponse.status).json({ 
        error: `Failed to fetch image: ${imageResponse.statusText}` 
      });
    }
    
    // Get the image buffer and content type
    const imageBuffer = await imageResponse.arrayBuffer();
    const contentType = imageResponse.headers.get('content-type');
    
    // Set appropriate headers
    res.setHeader('Content-Type', contentType || 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for a day
    
    // Send the image data
    res.status(200).send(Buffer.from(imageBuffer));
  } catch (error) {
    console.error('Error proxying image:', error);
    res.status(500).json({ error: 'Failed to proxy image' });
  }
}