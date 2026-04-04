# PowerOn Solutions - React Website

A modern, responsive website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- ⚡ **Fast Development** - Built with Vite for lightning-fast HMR
- 🎨 **Modern UI** - Styled with Tailwind CSS for beautiful, responsive design
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🧭 **Client-Side Routing** - React Router for smooth navigation
- 💪 **TypeScript** - Type-safe code for better development experience
- 🎯 **SEO Ready** - Optimized for search engines

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd poweron-solutions
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

## 🏃 Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
poweron-solutions/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   └── Navbar.tsx   # Navigation component
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Homepage
│   │   ├── About.tsx    # About page
│   │   ├── Services.tsx # Services page
│   │   └── Contact.tsx  # Contact page
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🎨 Customization

### Colors

The primary color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Modify these values to change the color scheme
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  }
}
```

### Content

- **Homepage**: Edit `src/pages/Home.tsx`
- **About Page**: Edit `src/pages/About.tsx`
- **Services**: Edit `src/pages/Services.tsx`
- **Contact**: Edit `src/pages/Contact.tsx`
- **Navigation**: Edit `src/components/Navbar.tsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 📦 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting

## 🌐 Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Contact

For questions or support, please contact us at info@poweronsolutions.com
