# hello-web

[![CI](https://github.com/psteen-coder/hello-web/actions/workflows/html-validate.yml/badge.svg?branch=main)](https://github.com/psteen-coder/hello-web/actions/workflows/html-validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A simple hello-world web app.

![Screenshot of the hello-web page in the dark theme](docs/screenshot.png)

## Run / view

This is a static page with no build step.

- Open `index.html` directly in a browser, or
- Serve it locally: `npm run serve` and visit <http://127.0.0.1:8080> (set `PORT` to change the port)

## Project structure

| Path                                  | Purpose                                                       |
| ------------------------------------- | ------------------------------------------------------------- |
| `index.html`                          | Main page: greeting, live clock, links                        |
| `about.html`                          | About page describing the project                             |
| `404.html`                            | "Page not found" page with a link home                        |
| `style.css`                           | Shared styles: centered layout, dark/light theme variables    |
| `theme.js`                            | Light/dark toggle; saves the choice in `localStorage`         |
| `clock.js`                            | Fills `<time id="now">` with the local date/time every second |
| `favicon.svg`                         | Site icon                                                     |
| `docs/screenshot.png`                 | Screenshot used in this README                                |
| `.github/workflows/html-validate.yml` | CI: html-validate on all HTML, stylelint on all CSS           |
| `.htmlvalidate.json`                  | html-validate config (recommended + Prettier presets)         |
| `.stylelintrc.json`                   | Stylelint config (`stylelint-config-standard`)                |
| `.prettierrc`, `.prettierignore`      | Prettier config (defaults) and ignore list                    |
| `.editorconfig`                       | Editor settings: UTF-8, LF, 2-space indent                    |
| `package.json`, `package-lock.json`   | Dev dependencies and npm scripts                              |
| `LICENSE`                             | MIT license                                                   |

## Formatting

Formatting is handled by [Prettier](https://prettier.io/) with default settings, plus an `.editorconfig` for editors.

- Install dev dependencies: `npm install`
- Format: `npm run format`
- Check: `npm run format:check`

## Linting

CSS is linted with [Stylelint](https://stylelint.io/) using `stylelint-config-standard`.

- Lint CSS: `npm run lint:css`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
