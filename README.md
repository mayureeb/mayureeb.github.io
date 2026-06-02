# mayureeb.github.io

Personal site for Mayuree Binjolkar — built with Jekyll, deployed on GitHub Pages.

## Editing content

All content lives in `_data/*.yml` — no need to touch the markup:

| File | What it controls |
|------|------------------|
| `_data/profile.yml` | Name, role, intro, contact links, photo. Add `linkedin_url`, `scholar_url`, or `resume_url` to switch those buttons on. |
| `_data/projects.yml` | Project grid cards. `category` sets the color + filter; add a `url` to link to a repo. |
| `_data/experience.yml` | Work / research timeline. |
| `_data/education.yml` | Degrees. |
| `_data/skills.yml` | Skill chips, grouped. |
| `_data/publications.yml` | Publications & talks. |

Layout: `_layouts/default.html` · Page: `index.html` · Styles: `assets/css/main.css` · JS: `assets/js/main.js`.

## Run locally

```bash
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000
```
