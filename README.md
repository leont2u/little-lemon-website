# Little Lemon

A React single-page website for the Little Lemon restaurant, featuring a homepage (hero, specials menu, testimonials, about) and a table reservation flow.

## Requirements

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

## Setup

```bash
git clone <this-repo-url>
cd little-lemon-website
npm install
```

## Running the app

```bash
npm start
```

Opens the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads automatically as you edit files.

## Running tests

```bash
npm test
```

Runs the test suite in interactive watch mode. Add `-- --watchAll=false` to run once and exit (useful in CI).

## Building for production

```bash
npm run build
```

Produces an optimized, minified build in the `build/` folder, ready to deploy.

## Project structure

```
public/
  api.js          # local copy of the booking-times / submission API used by the reservation form
  index.html
src/
  App.js          # top-level layout: Header, Main (routes), Footer
  App.css         # global styles and design tokens
  components/     # Header, Nav, Footer, and all page/section components
  assets/         # images and the site logo
```

## Routes

- `/` — homepage (hero, specials, testimonials, about)
- `/booking` — table reservation form
- `/confirmed` — booking confirmation
