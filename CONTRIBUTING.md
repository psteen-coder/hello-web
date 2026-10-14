# Contributing

Thanks for helping out. Changes go through pull requests into `main`.

By participating you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

1. Open or pick an issue describing the change.
2. Create a branch off `main`: `git checkout -b my-change`
3. Install dev dependencies: `npm install`
4. Make your change, then run:
   - `npm run format` to format with Prettier (`npm run format:check` to only check)
   - `npm run lint` for html-validate, Stylelint and markdownlint
   - `npm test` for the Playwright browser tests (first run: `npx playwright install chromium`)
5. Preview locally with `npm run serve` and open <http://127.0.0.1:8080>.
6. Commit, push your branch, and open a pull request into `main` that references the issue. The `validate` check must pass.
