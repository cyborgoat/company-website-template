---
title: "Text Summarization Demo"
excerpt: "See how our AI summarizes long documents into concise highlights."
thumbnail: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
videoUrl: "https://www.youtube.com/embed/4Bdc55j80l8"
order: 3
---

## Summarize Documents with AI

Our summarization tool uses state-of-the-art models to condense information.

### Example: Summarization in Python

```python
from transformers import pipeline

summarizer = pipeline("summarization")
text = """
Artificial intelligence enables machines to learn from data and make decisions. This technology is transforming industries worldwide.
"""
summary = summarizer(text, max_length=30, min_length=10, do_sample=False)
print(summary[0]['summary_text'])
```

Check out the video for a walkthrough and more examples.
