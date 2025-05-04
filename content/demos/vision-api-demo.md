---
title: "Vision API Demo"
excerpt: "Experience our AI Vision API for image recognition and analysis."
thumbnail: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
videoUrl: "https://www.youtube.com/embed/2X-a5rP4TnI"
order: 2
---

## Image Recognition with AI

Our Vision API can classify images and extract insights from visual data.

### Example: Image Classification with Hugging Face

```python
from transformers import pipeline

classifier = pipeline("image-classification", model="google/vit-base-patch16-224")
result = classifier("./cat.jpg")
print(result)
```

Watch the demo video to see real-world use cases and integration tips.
