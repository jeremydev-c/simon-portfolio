# Simon Ekipetot - Creative Portfolio

A unique, extraordinary portfolio website with a warm, human-made aesthetic. This portfolio features an editorial magazine-style design with rich, earthy colors that feel authentic and handcrafted.

## 🎨 Design Philosophy

This portfolio stands out from typical AI-generated designs with:

- **Warm, Rich Color Palette**: Deep burgundy, warm gold, terracotta, and cream tones
- **Editorial Magazine Style**: Bold typography, decorative elements, and organic shapes
- **Human-Made Aesthetic**: Hand-drawn borders, sticky notes, and organic morphing shapes
- **Unique Visual Elements**: Decorative underlines, paper textures, and creative layouts

## 🚀 Features

- **Modern Next.js 16** with App Router
- **Framer Motion** for smooth animations
- **Tailwind CSS 4** with custom theme
- **Responsive Design** for all devices
- **Editorial Typography** using Playfair Display, Inter, and Caveat fonts
- **Smooth Animations** and transitions
- **Contact Form** ready for integration

## 📁 Project Structure

```
simon-portfolio/
├── app/
│   ├── about/          # About page
│   ├── work/           # Portfolio/work showcase
│   ├── contact/        # Contact page with form
│   ├── components/     # Reusable components
│   │   └── Navigation.tsx
│   ├── globals.css     # Global styles and theme
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/
│   └── images/         # Place your images here
└── ...
```

## 🎨 Color Palette

The portfolio uses a warm, human-made color scheme:

- **Burgundy** (`#8B2E3D`) - Primary brand color
- **Gold** (`#D4A574`) - Accent and highlights
- **Terracotta** (`#C97D60`) - Secondary accent
- **Cream** (`#F5F1EB`) - Background and cards
- **Charcoal** (`#2C2C2C`) - Text color

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your profile image:**
   - Place your profile photo at `public/images/profile.jpg`
   - Recommended size: 800x800px or larger

3. **Update content:**
   - Edit `app/page.tsx` for home page content
   - Edit `app/about/page.tsx` for your about information
   - Edit `app/work/page.tsx` for your portfolio projects
   - Edit `app/contact/page.tsx` for contact information

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization

### Update Personal Information

1. **Home Page** (`app/page.tsx`):
   - Update name, tagline, and description
   - Modify stats and achievements
   - Update contact information

2. **About Page** (`app/about/page.tsx`):
   - Add your experience and education
   - Update skills and expertise
   - Personalize your philosophy section

3. **Work Page** (`app/work/page.tsx`):
   - Replace placeholder projects with your actual work
   - Add project images to `public/images/`
   - Update project descriptions and tags

4. **Contact Page** (`app/contact/page.tsx`):
   - Update email, phone, and social links
   - Configure contact form submission (currently logs to console)

### Add Project Images

1. Add your project images to `public/images/`
2. Update image paths in `app/work/page.tsx`
3. Recommended image size: 1200x800px

### Integrate Contact Form

The contact form currently logs to console. To integrate with an email service:

1. Set up an API route at `app/api/contact/route.ts`
2. Use services like Resend, SendGrid, or Nodemailer
3. Update the form submission handler in `app/contact/page.tsx`

## 🎯 Key Design Elements

- **Decorative Numbers**: Large background numbers for section titles
- **Organic Shapes**: Morphing shapes with CSS animations
- **Sticky Notes**: Hand-drawn style sticky note components
- **Paper Texture**: Subtle texture overlay for authentic feel
- **Hand-drawn Borders**: Slightly rotated borders for organic look
- **Magazine Layout**: Editorial-style sections with decorative elements

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This portfolio is created for Simon Ekipetot. Customize and use as needed.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
