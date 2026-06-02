---
layout: post
title: "Post template (delete me) — math, code, and figures"
date: 2026-06-01
excerpt: "A template showing how to write a Karpathy-style post here: prose, LaTeX math, highlighted code, and figures."
---

This is a template. Copy it into `_posts/YYYY-MM-DD-title.md`, write your post, and delete this draft.
Aim for the Karpathy style: pick one meaty idea, explain it from first principles, and build intuition
with examples, math, and code.

## Math

Inline math like $r_t = \gamma^t R$ renders with MathJax, and so do display equations:

$$
J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}\left[ \sum_{t=0}^{T} \gamma^t r_t \right]
$$

## Code

Fenced code blocks get syntax highlighting:

```python
def advantage(rewards, values, gamma=0.99):
    # one-line discounted advantage, for intuition
    returns, R = [], 0.0
    for r in reversed(rewards):
        R = r + gamma * R
        returns.insert(0, R)
    return [ret - v for ret, v in zip(returns, values)]
```

## Figures

Use Markdown images or `<figure>` for a caption:

<figure>
  <img src="/images/hero.jpg" alt="example figure">
  <figcaption>Figure 1. Captions render in a muted style under the image.</figcaption>
</figure>

That's the whole toolkit — prose, math, code, and figures. Write the thing, then share it on X/LinkedIn.
