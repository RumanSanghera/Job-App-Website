# Goldthorn Collective - Job Application Website

A modern web application for job seekers to manage their applications and career development.

## Deployment Instructions

### Prerequisites
- GitHub account
- Node.js installed (version 20 or higher)
- npm or yarn package manager

### Steps to Deploy to GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" under "Code and automation"
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
     - Branch: Select "main"

3. **Configure GitHub Pages**
   - The workflow will automatically deploy your site to GitHub Pages
   - Your site will be available at: `https://RumanSanghera.github.io/job-app-website`

4. **Set up Namecheap Domain (Optional)**
   - In your Namecheap account, add a CNAME record pointing to your GitHub Pages URL
   - In your repository settings, under "Pages", add your custom domain
   - Enable "Enforce HTTPS" for secure connections

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## API Integration

After deployment, update your API endpoints to use the production URL:
- Development: `http://localhost:3000`
- Production: `https://[your-username].github.io/job-app-website` or your custom domain

## Features
- User authentication
- Job application management
- CV and cover letter builder
- Interview preparation tools
- Assessment center training

## Technologies Used
- Next.js
- React
- Tailwind CSS
- TypeScript
