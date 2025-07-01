# Cloud Animation Feature Guide

## Overview
This feature adds an interactive sky background with animated clouds to your portfolio. When the user clicks on the Bengali text "আকাশ" (which means "sky"), the background transforms into a beautiful sky blue with clouds floating across the screen in light mode, or a stunning purple space gradient in dark mode.

## How It Works

### Components Structure
1. **ThemeContext**: Manages the state of the background effect and theme
2. **CloudAnimation**: The component that renders the animated sky/space and clouds
3. **Profile**: Contains the trigger (Bengali text "আকাশ") that toggles the animation

### Implementation Details

#### Cloud Animation
- Clouds move in alternating directions - some from left to right, others from right to left
- Each cloud has a different speed, size, position, and direction for a natural effect
- The clouds are actual PNG images (cloud1.png through cloud5.png) with transparency
- The animation only starts when triggered by clicking the text
- Clouds float above all component tiles creating a dreamy effect
- In dark mode, clouds have a purple hue to match the space gradient background

#### Theme-Based Backgrounds
- **Light Mode**: Sky blue background with white clouds
- **Dark Mode**: Purple space gradient background with purple-tinted clouds

#### Z-Index Layering Structure
This creates a sophisticated multi-layer effect:
- **Original background**: z-index 0 (default dark/light theme background)
- **Sky/Space background**: z-index 10 (blue sky or purple gradient appears above original background)
- **Component tiles**: z-index 20 (all content components in middle layer)
- **Clouds**: z-index 30 (clouds float above all components)
- **Navbar**: z-index 40 (always stays on top for navigation)

This structure creates the effect where:
1. The themed background covers the original theme background
2. Your portfolio components appear "floating" in the sky/space
3. Clouds drift above the components, creating depth
4. The navbar remains accessible at all times

## Usage

### Triggering the Animation
Click on the Bengali text "আকাশ" in the profile section to toggle the cloud animation on and off.

### Visual Effect
When activated, you'll see:
- In light mode: The entire background turns sky blue
- In dark mode: The background becomes a purple space gradient
- Your portfolio tiles appear to be floating in the sky/space
- Clouds drift across the screen in both directions above your content
- All interactive elements remain clickable (pointer-events management)

### Customization Options

#### Changing Cloud Speed and Direction
Adjust the animation duration and type in the CSS:
```css
/* For left-to-right clouds */
.x1 {
  animation: moveRightToLeft 20s linear infinite; /* Increase/decrease the 20s value */
}

/* For right-to-left clouds */
.x2 {
  animation: moveLeftToRight 25s linear infinite; /* Increase/decrease the 25s value */
}
```

#### Adjusting Cloud Size
Modify the width percentage in the CSS:
```css
.cloud-img {
  width: 300%; /* 3x the original width - adjust as needed */
}
```

#### Changing Background Colors
Update the backgroundStyle in the CloudAnimation component:
```jsx
// For light mode
backgroundColor: '#87CEEB', // Change to any color

// For dark mode
background: 'linear-gradient(to right, #2e1a47, #392359, #3a2a6d, #2d3b8d, #1e2c62)', // Change gradient colors
```

#### Adjusting Cloud Opacity and Color
To make clouds more or less prominent:
```css
/* Light mode clouds */
.cloud-img {
  opacity: 0.85; /* Adjust between 0 and 1 */
}

/* Dark mode clouds */
.dark .cloud-img {
  filter: brightness(0.8) hue-rotate(240deg); /* Adjust brightness and hue */
  opacity: 0.6; /* Adjust transparency */
}
```

## Dark Theme Compatibility
The animation includes special handling for dark theme:
- Purple space gradient background
- Purple-tinted clouds (hue-rotate filter)
- Adjusted opacity for better visibility against dark background
- Subtle color adjustments for a space-like atmosphere

## Technical Notes
- Cloud images should be transparent PNGs
- The animation uses CSS keyframes for smooth performance
- Two animation types: `moveRightToLeft` and `moveLeftToRight` for bidirectional movement
- `pointer-events: none` on clouds allows clicking through to components
- The animation has a fade-in effect when triggered
- Two separate divs handle sky background and clouds for proper layering
- Theme-based styling is applied through React's conditional rendering and CSS classes

## Troubleshooting
- If clouds aren't visible, check z-index values
- If components aren't clickable, verify pointer-events settings
- If animation doesn't trigger, verify the click handler is properly connected
- For performance issues, reduce the number of clouds or simplify the animation 