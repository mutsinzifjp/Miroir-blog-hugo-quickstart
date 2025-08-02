# Miroir Blog - Enhanced Netlify CMS Guide

This guide explains how to use the dramatically enhanced Netlify CMS features that have been implemented for the Miroir Blog.

## 🎨 Design System & Theme Management

### Theme Selection
Access **Site Settings > Design & Theme Settings** to customize:

- **Current Theme**: Choose from PaperMod, Ananke, Hugo-theme-stack, LoveIt, DoIt, or custom
- **Custom CSS**: Write your own CSS for unlimited customization
- **Custom Theme Name**: Name your custom theme

### Color Customization
The color system includes 8 customizable variables:
- Primary Color
- Secondary Color  
- Background Color
- Text Color
- Link Color
- Dark Mode Primary
- Dark Mode Background
- Dark Mode Text

### Typography
Font customization includes:
- **Heading Font**: Choose from popular fonts or use custom Google Fonts
- **Body Font**: Select readable fonts optimized for content
- **Monospace Font**: Code display fonts
- **Font Scale**: Small, medium, or large sizing

### Layout Options
- **Homepage Layout**: Grid, list, carousel, reel, or masonry
- **Post List Layout**: Grid, list, cards, or timeline
- **Single Post Layout**: Centered, wide, sidebar, or magazine
- **Grid Columns**: 2, 3, or 4 columns
- **Container Width**: Narrow, medium, wide, or full

## ✨ Animation & Effects

Control all animations from the Design Settings:
- **Enable Animations**: Master toggle
- **Page Transitions**: Smooth page changes
- **Hover Effects**: Interactive element responses
- **Scroll Animations**: Elements animate as they enter view
- **Loading Animations**: Page load effects
- **Animation Speed**: Slow, normal, or fast
- **Parallax Effects**: Background scroll effects

## 📝 Enhanced Content Types

### Blog Posts
Enhanced with 25+ fields including:
- Basic metadata (title, subtitle, description, dates)
- Author management (single or multiple authors)
- Categorization (categories and tags)
- Media (featured image, gallery, custom images)
- SEO optimization (meta title, description, keywords, canonical URL)
- Social media (Twitter cards, Open Graph images)
- Post settings (TOC, reading time, layout, animations)
- Custom CSS and JavaScript per post

### Video Posts
Specialized for video content:
- **Video Settings**: URL, platform (YouTube, Vimeo, Twitch), playback options
- **Metadata**: Duration, thumbnail, description
- **Layout Options**: Default, wide, or theater mode
- **Features**: Transcript support, custom animations

### Newsletters
Professional newsletter management:
- **Issue Management**: Issue numbers, send dates, preview text
- **Templates**: Modern, classic, minimal, or bold styles
- **Sections**: Structured content with different section types
- **Features**: Social links, unsubscribe, tracking options
- **Content**: Rich text editing with markdown support

### Pages
Flexible page creation:
- **Layout Options**: Default, wide, minimal, or landing page styles
- **Menu Integration**: Show in navigation with custom weights
- **Customization**: Hide titles, custom images, SEO settings

## 🛠 Advanced Features

### Reading Experience
- **Reading Progress Bar**: Shows progress through articles
- **Back to Top Button**: Smooth scrolling navigation
- **Image Lightbox**: Click images for full-screen view
- **Social Sharing**: Twitter, Facebook, LinkedIn, Email
- **Table of Contents**: Auto-generated with smooth scrolling

### Search Functionality
- **Live Search**: Real-time results as you type
- **Content Indexing**: Searches titles, content, and tags
- **Fast Results**: Optimized JSON index for speed

### Layout Switching
- **View Modes**: List, grid, carousel, reel, masonry
- **Dynamic Columns**: Adjust grid columns on the fly
- **Animation Toggles**: Enable/disable animations per user
- **Responsive**: Adapts to all screen sizes

## 🎯 Content Creation Tips

### Using Shortcodes

#### Gallery Shortcode
```markdown
{{< gallery images="/img/1.jpg,/img/2.jpg,/img/3.jpg" 
           layout="grid" 
           columns="3" 
           captions="Caption 1,Caption 2,Caption 3" >}}
```

#### Video Shortcode
```markdown
{{< video url="https://youtube.com/watch?v=example" 
          platform="youtube" 
          title="My Video Title" >}}
Optional description content here
{{< /video >}}
```

### Best Practices

1. **Images**: Always include alt text and captions for accessibility
2. **SEO**: Fill out meta descriptions and keywords for better search ranking
3. **Social Media**: Use appropriate Open Graph and Twitter card images
4. **Performance**: Enable animations selectively based on content needs
5. **Mobile**: Test layouts on different screen sizes using the layout switcher

### Content Organization

- **Categories**: Use for broad topic grouping
- **Tags**: Use for specific keywords and cross-referencing  
- **Featured Posts**: Highlight important content
- **Draft Status**: Keep work-in-progress content private
- **Publish Dates**: Schedule content for future publication

## 🎨 Customization Examples

### Custom CSS Example
```css
/* Custom theme colors */
:root {
  --accent-color: #ff6b35;
  --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Custom post styling */
.post-header {
  background: var(--gradient);
  color: white;
  padding: 2rem;
  border-radius: 12px;
}
```

### Custom Layout
Create unique layouts by combining:
- Grid layouts with custom column counts
- Carousel navigation for featured content
- Masonry layouts for varied content sizes
- Parallax backgrounds for visual interest

## 📱 Responsive Design

All layouts automatically adapt to:
- **Desktop**: Full feature set with hover effects
- **Tablet**: Optimized touch interactions and readable text
- **Mobile**: Simplified layouts with touch-friendly controls

The system includes:
- Responsive grid systems (auto-adjusting columns)
- Mobile-optimized navigation
- Touch-friendly admin interface
- Fast loading on all devices

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Minified Assets**: Optimized CSS and JavaScript
- **Responsive Images**: Automatic sizing for different screens
- **Efficient Animations**: Hardware-accelerated transitions
- **Search Optimization**: Fast JSON-based search index

This enhanced CMS system provides professional-level content management while maintaining ease of use for content creators.