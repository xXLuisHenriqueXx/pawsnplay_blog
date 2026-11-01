# Paws n' Play

<div style="display: inline_block">
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg" alt="React" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg" alt="TypeScript" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/vite/default.svg" alt="Vite" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tailwind-css/default.svg" alt="Tailwind CSS" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/lucide/default.svg" alt="Lucide" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/shadcn-ui/default.svg" alt="shadcn/ui" width="24" height="24" />
</div>
<br />

**A modern and engaging pet care website designed to bring pet products, services, and useful information together in one place.**
Paws n' Play is a responsive web application focused on presenting a pet care brand through an intuitive and visually appealing interface. It brings together information about products, services, the team, and pet-related content, providing visitors with a centralized experience.

## Features
### Website Sections
The application is organized into dedicated sections to provide a complete overview of the brand:
- **Hero** — Main presentation section with a prominent call to action.
- **Shop** — Product showcase for pet-related items.
- **Services** — Overview of available pet care services.
- **About** — Brand information and its purpose.
- **Blog** — Pet-related articles and informational content.
- **Team** — Presentation of the people behind the brand.
- **Contact** — Contact information and communication section.

### User Experience
- Responsive layout for different screen sizes.
- Component-based architecture.
- Consistent visual identity and typography.
- Smooth animations and interactive UI elements.
- Accessible and reusable interface components.

## Getting Started
### Installation
Clone the repository:
```bash
git clone https://github.com/xXLuisHenriqueXx/pawsnplay_blog.git
```

Navigate to the project directory:
```bash
cd pawsnplay_blog
```

Install dependencies:
```bash
yarn install
```

### Development
Start the development server:

```bash
yarn dev
```
Vite will display the local development URL in the terminal.

## Available Scripts
| Command | Description |
|---|---|
| `yarn dev` | Starts the development server |
| `yarn build` | Runs TypeScript checks and generates the production build |
| `yarn preview` | Previews the production build |
| `yarn lint` | Runs ESLint |

## Project Structure
The application follows a component-based architecture, separating the main application entry point from individual website sections and shared assets.
```text
pawsnplay_blog/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── public/              # Static assets
├── src/
│   ├── components/      # Website sections and UI components
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── .gitignore
├── components.json      # UI component configuration
├── eslint.config.js     # ESLint configuration
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing
Contributions, suggestions, and bug reports are welcome.
1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Submit a pull request describing the changes.
Please keep contributions consistent with the existing TypeScript conventions and component architecture.

## Disclaimer
Paws n' Play is an independent project and is not affiliated with any specific pet care brand or organization.
