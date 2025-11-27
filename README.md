# Ansible Middleware Website

This repository contains the source code for the Ansible Middleware Collections documentation website, built with [Hugo](https://gohugo.io/) and the [Docsy](https://www.docsy.dev/) theme.

## Overview

The Ansible Middleware website provides comprehensive documentation for automating enterprise middleware at scale using Ansible collections. It includes guides, examples, and reference documentation for various middleware components.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Hugo Extended**: v0.146.0 or higher (required for Docsy v0.13.0)
  ```bash
  # Check your Hugo version
  hugo version
  ```

- **Go**: v1.21 or higher
  ```bash
  # Check your Go version
  go version
  ```

- **Node.js and npm**: Required for PostCSS and autoprefixer
  ```bash
  # Check your Node.js and npm versions
  node --version  # v18 or higher recommended
  npm --version
  ```

- **Git**: For version control and Hugo module management
  ```bash
  # Check your Git version
  git --version
  ```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ansible-middleware/nextgen-website.git
cd nextgen-website
```

### 2. Install Hugo Modules

Hugo modules are used for theme management. Initialize the modules:

```bash
hugo mod get -u
```

### 3. Install npm Dependencies

npm dependencies are required for PostCSS processing:

```bash
npm install
```

This installs:
- **autoprefixer**: Adds vendor prefixes to CSS
- **postcss-cli**: PostCSS command-line interface
- **hugo-extended**: Hugo binary for npm scripts

## Development

### Running the Development Server

To run the website locally with live reload:

```bash
hugo serve
```

Or use the npm script:

```bash
npm run serve
```

The site will be available at `http://localhost:1313/`

## Project Structure

```
nextgen-website/
├── assets/              # SCSS, JavaScript, and other assets
│   ├── icons/          # Site icons and logos
│   └── scss/           # Custom SCSS styles
│       ├── main.scss           # Main SCSS entry (overrides Docsy)
│       ├── _fa-variables.scss  # Font Awesome icon variables
│       └── _variables_project.scss  # Project variables
├── content/            # Content files (Markdown)
│   └── en/            # English content
│       ├── blog/      # Blog posts
│       ├── examples/  # Example documentation
│       └── Overview/  # Overview pages
├── layouts/            # Hugo templates and partials
│   ├── _default/      # Default layouts
│   ├── blog/          # Blog-specific layouts
│   ├── partials/      # Reusable template partials
│   └── shortcodes/    # Custom shortcodes
├── static/             # Static files (images, CSS, JS)
├── public/             # Generated site (git ignored)
├── hugo.toml          # Hugo configuration
├── postcss.config.js  # PostCSS configuration
├── go.mod             # Go module dependencies
├── package.json       # npm dependencies
└── README.md          # This file
```

## Configuration

The site configuration is managed through **hugo.toml**.

Key configuration areas:
- Site metadata and branding
- Navigation and menus
- Search functionality (Algolia)
- Social links and contact information
- Hugo module imports (Docsy theme)
- PostCSS processing settings

## Content Management

### Adding New Content

1. Create a new markdown file in the appropriate directory under `content/en/`:
   ```bash
   hugo new blog/my-new-post.md
   ```

2. Edit the front matter and content:
   ```markdown
   ---
   title: "My New Post"
   date: 2025-11-27
   description: "A brief description"
   ---
   
   Your content here...
   ```

3. Preview your changes with `hugo serve`

### Content Organization

- **Blog posts**: `content/en/blog/`
- **Documentation**: `content/en/docs/`
- **Examples**: `content/en/examples/`
- **Overview pages**: `content/en/Overview/`

## Dependencies

### npm Dependencies

- **autoprefixer** (^10.4.22): PostCSS plugin for vendor prefixes
- **postcss-cli** (^11.0.1): CLI for PostCSS processing
- **hugo-extended** (0.152.2): Hugo binary for npm scripts

### Go Module Dependencies

- **github.com/google/docsy** (v0.13.0): Docsy documentation theme
- **github.com/google/docsy/dependencies** (v0.7.2): Bootstrap and dependencies
- **github.com/FortAwesome/Font-Awesome** (v4.7.0): Icon font (loaded via CDN)
- **github.com/twbs/bootstrap** (v5.3.8): Bootstrap CSS framework

### Key Files

- **postcss.config.js**: PostCSS configuration for autoprefixer
- **assets/scss/main.scss**: Custom SCSS overriding Docsy defaults
- **assets/scss/_fa-variables.scss**: Font Awesome icon variables

## Updating Dependencies

### Update npm packages:
```bash
npm run update:pkg:dep
```

### Update Hugo:
```bash
npm run update:pkg:hugo
```

### Update Go modules:
```bash
go get -u github.com/google/docsy@latest
go mod tidy
```

## Docker Support

A Docker configuration is available for containerized deployment:

```bash
# Build the Docker image
docker-compose build

# Run the container
docker-compose up
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow Hugo best practices
- Use semantic HTML
- Write clear, descriptive commit messages
- Test your changes locally before submitting

## Testing

Run link checking:
```bash
npm run check:links
```

Run all tests:
```bash
npm test
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

### CI/CD Workflow

The `.github/workflows/gh-pages.yml` workflow:
1. Installs Hugo 0.146.0 extended
2. Sets up Node.js 18 and installs dependencies
3. Builds the site with PostCSS processing
4. Deploys to GitHub Pages

### Manual Build

For local production builds:
```bash
npm run build:production
```

The output will be in the `public/` directory.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Support

- **Email**: ansible-middleware-core@redhat.com
- **GitHub Issues**: https://github.com/ansible-middleware/nextgen-website/issues
- **Repository**: https://github.com/ansible-middleware

---

**Ansible Middleware** - Automating Enterprise Middleware at Scale
