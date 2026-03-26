# Contributing

Thanks for your interest in improving this portfolio project.

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Run type checks before submitting changes:

```bash
npm run lint
```

4. Build before merging larger UI changes:

```bash
npm run build
```

## Contribution Guidelines

- Keep changes focused and easy to review.
- Match the existing visual language unless a redesign is intentional.
- Prefer updating real project content over adding placeholders.
- Avoid committing local debug screenshots, logs, and scratch files.
- Use clear commit messages. Conventional commit style is preferred, for example:
  - `feat: add project cover images`
  - `fix: adjust lanyard anchor behavior`
  - `docs: update repository readme`

## Pull Request Notes

- Describe what changed and why.
- Include screenshots for visible UI changes.
- Mention any follow-up work that is still pending.

## Code Style

- Use TypeScript-friendly changes where possible.
- Keep components readable and avoid unnecessary comments.
- Preserve responsive behavior on both desktop and mobile.
