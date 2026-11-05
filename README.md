# mayureeb.github.io

Mayuree Binjolkar’s research website, built with Jekyll and deployed on GitHub Pages.

## Structure

- `index.html`: research overview and short introduction.
- `research.html`: project index and software.
- `_research/`: individual project pages, rendered with `_layouts/research.html`.
- `publications.html`: manuscripts, publications, and presentations.
- `about.html`: research background, service, and contact.
- `writing.html`: writing archive and Substack link.

## Editing content

- `_data/profile.yml`: contact links and photo.
- `_data/research.yml`: research questions, methods, findings, interpretation, and publication status.
- `_data/publications.yml`: additional publications and presentations.
- `_data/projects.yml`: public software repositories.
- `assets/figures/`: conceptual study diagrams, distinguished from empirical results.

The research collection is configured in `_config.yml`. Shared navigation is in `_layouts/default.html`, styles in `assets/css/main.css`, and menu/filter behavior in `assets/js/main.js`. All projects remain accessible without JavaScript.

The website does not host a CV or provide CV download links.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. GitHub Pages builds the Jekyll source after changes to `master`.

## Writing

Add posts to `_posts` using the post layout. It supports MathJax, code blocks, figures, and tables.
