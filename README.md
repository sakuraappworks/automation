# Shift Management Automation Tests

This project uses Playwright, Cucumber (BDD), and TypeScript for end-to-end testing.

## Setup

1. **Install dependencies**

   ```
   npm install
   ```

2. **Configure environment variables**

   - Create a `.env` file in the project root (see example below):

     ```
     BASE_URL=https://your-app-url.com/
     USERNAME=your-username
     PASSWORD=your-password
     ```

## Running Tests

```
npm test
```

## Project Structure

- `tests/steps/` – Step definitions
- `tests/supports/` – Hooks and shared logic
- `tests/features/` – Feature files
- `reports/` – Test reports (excluded from git)
- `screenshots/` – Failure screenshots (excluded from git)

## Formatting

Prettier is used for code formatting. See `.prettierrc` for settings.

## Notes

- `.env`, `node_modules`, `reports`, and `screenshots` are excluded from git via `.gitignore`.
