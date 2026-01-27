# Contributing to Political Awareness Platform

Thank you for your interest in contributing! We welcome all types of contributions, including code, documentation, design, translations, and feedback.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Community Guidelines](#community-guidelines)

## Getting Started

1. **Read our Code of Conduct**: Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md)
2. **Check Issues**: Look at our [Issues](https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/issues) to see if there's something you'd like to work on
3. **Join Discussions**: Participate in our [Discussions](https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/discussions) to ask questions and share ideas

## Development Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Political-Awareness-Platform/Political-Awareness-Platform.git
cd Political-Awareness-Platform

# Install dependencies (using pnpm - recommended)
pnpm install

# alternatively with npm
npm install
```

### Development Commands

```bash
# serve with hot reload at localhost:3000
pnpm run dev
# or with npm
npm run dev

# build for production and launch server
pnpm run build
pnpm run start

# generate static project
pnpm run generate

# format code with Biome
pnpm run format

# lint code with Biome
pnpm run lint

# check and fix code issues
pnpm run check
```

## How to Contribute

### 1. Find or Create an Issue

- Browse existing [issues](https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/issues)
- Create a new issue if needed
- Comment on the issue to claim it (if it's not already assigned)

### 2. Fork and Create a Branch

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Political-Awareness-Platform.git
cd Political-Awareness-Platform

# Add upstream remote
git remote add upstream https://github.com/Political-Awareness-Platform/Political-Awareness-Platform.git

# Create a new branch
git checkout -b feature/your-feature-name  # or fix/your-bug-fix
```

### 3. Make Your Changes

- Follow our [coding standards](#coding-standards)
- Make small, focused commits
- Test your changes thoroughly
- Update documentation if needed

### 4. Submit a Pull Request

```bash
# Sync with upstream
git fetch upstream
git rebase upstream/main

# Push your changes
git push origin your-branch-name

# Create a pull request on GitHub
```

## Coding Standards

### Code Style

We use [Biome](https://biomejs.dev/) for code formatting and linting. Run `pnpm run check` before submitting.

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new feature
fix: resolve bug in user authentication
docs: update README with installation instructions
style: format code with Biome
refactor: simplify component structure
test: add unit tests for utility functions
```

### Vue.js Guidelines

- Use Vue 3 Composition API
- Follow naming conventions:
  - Components: PascalCase (e.g., `UserProfile.vue`)
  - Files: kebab-case (e.g., `user-profile.vue`)
  - Props: camelCase
- Use TypeScript when possible
- Write meaningful comments for complex logic

### File Structure

```
components/     # Reusable Vue components
pages/         # Page components
layouts/       # Layout components
locales/       # Translation files
assets/        # Static assets
server/        # Server-side code
```

## Pull Request Process

1. **Update Your Branch**: Keep your branch up to date with the main branch
2. **Run Tests**: Ensure all tests pass
3. **Fill PR Template**: Complete all sections in the pull request template
4. **Review Process**: Your PR will be reviewed by maintainers
5. **Address Feedback**: Make requested changes promptly

### PR Requirements

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Code is commented where necessary
- [ ] Documentation updated if needed
- [ ] No new warnings
- [ ] Tests added if applicable
- [ ] All tests pass locally

## Types of Contributions

### Code Contributions

- Bug fixes
- New features
- Performance improvements
- Refactoring

### Documentation

- Improve README
- Add inline documentation
- Create guides and tutorials
- Translate documentation

### Design

- UI/UX improvements
- Component design
- Icon and graphic design
- Accessibility improvements

### Translations

- Help translate the platform to new languages
- Improve existing translations
- Review and validate translations

## Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Ask questions if you're unsure
- Provide constructive feedback
- Celebrate contributions!

## Getting Help

- Create an [issue](https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/issues) for bugs or feature requests
- Start a [discussion](https://github.com/Political-Awareness-Platform/Political-Awareness-Platform/discussions) for questions
- Email us at: politicalawarenessplatform@gmail.com

Thank you for your contributions!
