---
title: Transcribing historical documents with AI
translationKey: historical-documents
order: 4
context: [Solo project, International competition on Zindi]
metrics:
  - value: Top 4%
    label: among more than 1,850 participants
tags: [Python, Machine Learning, Computer vision]
---

Old documents, stained paper, faded ink, irregular handwriting. Ordinary text-reading tools can't handle this kind of material.

I built a model on my own that works in two stages. The first treats each image, adjusting color, resolution and sharpness until the text is legible, which in computer vision is called preprocessing. The second is the recognition itself: the model learns to identify the text letter by letter and word by word, even as the handwriting changes from one document to the next.

In a competition, every version of the model is scored on a leaderboard against everyone else's, so each change has to prove it improves the result.

The same technique can digitize a company's paper notes, contracts and forms.
