# hello-web

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

1. Create a branch off `main`: `git checkout -b my-change`
2. Install dev dependencies: `npm install`
3. Make your change, then run the same checks as CI, plus formatting:
   - `npm run format` (or `npm run format:check`)
   - `npm run lint` (html-validate + stylelint)
   - `npm test`
4. Commit, push the branch, and open a pull request into `main`. The `validate` check must pass.
