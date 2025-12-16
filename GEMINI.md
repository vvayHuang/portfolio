# Gemini Project Analysis

## Project Overview

This is a personal portfolio website built with Vue 3 and Vite. It showcases design and front-end development skills, featuring multi-language support (Chinese/English), responsive design, and interactive animations.

### Key Technologies

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router
- **Internationalization**: vue-i18n
- **Styling**: SCSS, Bootstrap 5
- **Animation**: GSAP
- **Image Optimization**: vite-plugin-image-optimizer
- **Analytics**: Google Analytics, Hotjar, Microsoft Clarity

## Building and Running

### Development

To run the development server:

```bash
npm install
npm run dev
```

The server will be accessible at `http://localhost:8080`.

### Build

To build the project for production:

```bash
npm run build
```

The output files will be in the `dist` directory.

### Deployment

The project is deployed to GitHub Pages. The deployment process is handled by the `deploy` script:

```bash
npm run deploy
```

This script first builds the project and then uses `gh-pages` to deploy the `dist` directory.

### Linting and Formatting

- To lint the code: `npm run lint`
- To format the code: `npm run format`

## Project Structure

The project follows a standard Vue 3 + Vite structure.

- `src/`: Contains the main source code.
- `src/assets/`: Static assets like images and SCSS files.
- `src/components/`: Reusable Vue components.
- `src/data/`: Static data used in the application.
- `src/features/`: Components that represent a specific feature or section of the site.
- `src/icons/`: SVG icons as Vue components.
- `src/locales/`: Translation files for vue-i18n.
- `src/router/`: Vue Router configuration.
- `src/stores/`: Pinia store modules.
- `src/views/`: Top-level view components.
- `public/`: Static assets that are not processed by the build.
- `vite.config.js`: Vite configuration file.
- `package.json`: Project dependencies and scripts.

## Development Conventions

- **Coding Style**: The project uses ESLint and Prettier to enforce a consistent coding style. The configuration has been migrated to the modern flat config format (`eslint.config.js`).
- **Component-Based Architecture**: The application is structured around Vue components, with a clear separation of concerns.
- **Internationalization**: Text strings are managed in JSON files in the `src/locales` directory and accessed through `vue-i18n`.
- **State Management**: Global application state is managed using Pinia.
- **Styling**: SCSS is used for styling, with a modular approach.
- **Build Optimization**: The Vite configuration includes chunk splitting to optimize the build size.