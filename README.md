# mayureeb.github.io

Mayuree Binjolkar’s research portfolio, built with Jekyll and deployed on GitHub Pages.

## Editing content

- `_data/profile.yml`: introduction, photo, CV, and contact links.
- `_data/research.yml`: selected research, submission status, methods, and findings.
- `_data/experience.yml`: role descriptions and experience.
- `_data/publications.yml`: additional publications and presentations.
- `_data/projects.yml`: public code repositories.

Main page: `index.html`. Shared layout: `_layouts/default.html`. Styles and interaction: `assets/css/main.css` and `assets/js/main.js`. CV: `assets/files/Mayuree_Binjolkar_CV.pdf`.

Research filters and mobile navigation are progressively enhanced. All research remains accessible without JavaScript. Each project’s methods and findings use a native disclosure.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. GitHub Pages builds the same Jekyll source after changes to `master`.

## Writing

Add posts to `_posts` using the existing post layout. The `/blog/` archive links to Substack and lists published posts. The post layout supports MathJax, code blocks, figures, and tables.
