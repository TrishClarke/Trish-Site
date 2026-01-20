# Trish Clarke - Sculptor Portfolio

Modern, minimal artist portfolio website for Trish Clarke, a Whangārei-based sculptor working in copper, steel, and reclaimed materials.

## Features

- ✅ Clean, minimal design with large artwork display
- ✅ Mobile-first responsive layout
- ✅ Gallery page with image grid
- ✅ Sales page with pricing and enquiry system
- ✅ About page with professional bio
- ✅ CV/Exhibition history
- ✅ Contact form with Netlify Forms integration
- ✅ Autofill functionality for artwork enquiries

## Site Structure

```
/
├── index.html          # Homepage with featured works
├── gallery.html        # Full gallery
├── sales.html          # Available works with prices
├── about.html          # Bio and practice information
├── cv.html             # Exhibition history and CV
├── contact.html        # Contact form (Netlify Forms)
├── thank-you.html      # Form submission confirmation
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Autofill functionality for sales enquiries
├── images/
│   ├── artwork/        # Sculpture images
│   ├── artist/         # Artist photos
│   └── placeholder/    # Placeholder images (replace with actual artworks)
└── bio.txt             # Professional bio text
```

## Deployment to Netlify

### Prerequisites

- GitHub account (repository already set up)
- Netlify account (free tier is sufficient)

### Steps

1. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select the `TrishClarke/Trish-Site` repository

2. **Configure Build Settings**
   - Branch to deploy: `main` (or your chosen branch)
   - Build command: (leave empty - this is a static site)
   - Publish directory: `/` (root)
   - Click "Deploy site"

3. **Netlify Forms Configuration**
   - Forms are automatically detected via the `netlify` attribute in `contact.html`
   - After first deployment, go to Site settings → Forms
   - Configure form notifications (email alerts when submissions arrive)
   - Optionally: Set up spam filtering

4. **Custom Domain (Optional)**
   - In Netlify: Site settings → Domain management
   - Add custom domain (e.g., `trishclarke.co.nz`)
   - Follow DNS configuration instructions
   - SSL certificate is automatically provisioned

### Netlify Form Features

The contact form includes:
- **Name** (required)
- **Email** (required)
- **Subject** (required, autofilled from Sales page)
- **Message** (required)

When users click "Enquire via Contact Form" on the Sales page, the subject field is automatically filled with the artwork title.

## Content Updates

### Adding New Artwork to Gallery

1. Add high-resolution images to `/images/artwork/`
2. Edit `gallery.html` and add a new gallery item:

```html
<div class="gallery-item">
    <img src="images/artwork/your-image.jpg" alt="Artwork title and description" loading="lazy">
    <div class="gallery-info">
        <h3>Artwork Title</h3>
        <p>Medium, dimensions, year</p>
    </div>
</div>
```

### Adding Artwork to Sales Page

1. Add artwork image to `/images/artwork/`
2. Edit `sales.html` and add a new sales item:

```html
<article class="sales-item">
    <img src="images/artwork/your-image.jpg" alt="Artwork title" loading="lazy">
    <div class="sales-info">
        <h3>Artwork Title</h3>
        <p class="artwork-details">Materials<br>Dimensions</p>
        <p class="price">$X,XXX NZD</p>
        <a href="contact.html?subject=Enquiry: Artwork Title" class="btn btn-primary">Enquire via Contact Form</a>
    </div>
</article>
```

### Updating Bio

Edit the text in `about.html` within the `.about-text` section.

### Updating CV

Edit `cv.html` to add new exhibitions, awards, or commissions.

## Design System

### Colors

- **Primary**: `#2c3e50` (dark blue-gray)
- **Accent**: `#b87333` (copper tone)
- **Text**: `#333333` (dark gray)
- **Background**: `#ffffff` (white)
- **Background Alt**: `#f8f9fa` (light gray)

### Typography

- **Font Stack**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.)
- **Headings**: Sans-serif, weight 600
- **Body**: 16px base, 1.6 line-height

### Responsive Breakpoints

- **Desktop**: 1200px max container width
- **Tablet**: 768px and below (adjusted layout)
- **Mobile**: 480px and below (stacked layout)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Image Optimization

For best performance, optimize images before uploading:

- **File format**: JPG for photos, PNG for graphics
- **Dimensions**: Max 2000px width for full-size images
- **File size**: Aim for under 500KB per image
- **Tools**: Use [TinyPNG](https://tinypng.com) or similar

## Local Development

To preview locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Maintenance

### Regular Updates

- Add new artworks as they're completed
- Update CV with new exhibitions
- Remove sold works from Sales page
- Keep contact information current

### Monitoring

- Check Netlify Forms dashboard for enquiries
- Set up email notifications for form submissions
- Monitor site analytics (optional: add Google Analytics)

## Support

For technical issues or questions about updating the site, refer to:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Forms Guide](https://docs.netlify.com/forms/setup/)

## License

© 2026 Trish Clarke. All rights reserved.
