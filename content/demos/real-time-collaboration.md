---
title: "Real-Time Collaboration Feature"
excerpt: "Watch how multiple users can edit documents simultaneously with our new real-time collaboration engine."
thumbnail: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmtsdHZwM2ZlZHZybjhpOWlwdnB1c3psMXc2OTZ0NzN1MHViY29nbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A9lgUYVqLeRb2/giphy.gif" # <-- Make sure this image exists in public/images/demos/
videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" # <-- Replace with your ACTUAL YouTube/Vimeo embed URL
order: 1 # Appears first
tags: ["collaboration", "real-time", "editor"]
---

## Seamless Teamwork in Action

Our latest update introduces a powerful real-time collaboration feature, allowing teams to work together on documents without conflicts or delays. See it in action in the video above!

### How it Works

We utilize WebSocket technology combined with Operational Transformation (OT) algorithms to merge changes from multiple users concurrently.

1.  **Client Connection:** Users connect via secure WebSockets.
2.  **Change Transmission:** Edits are sent as operations to the central server.
3.  **Transformation & Broadcast:** The server transforms incoming operations against existing ones and broadcasts the results to all connected clients.
4.  **Local Update:** Each client applies the transformed operations to their local document state.

### Code Example (Client-side)

Here's a simplified example of how a client might send an operation:

```javascript
// Assuming 'editor' is an instance of our editor API
// and 'op' is a generated operation object
function sendOperation(op) {
  if (socket.readyState === WebSocket.OPEN) {
    const payload = JSON.stringify({ type: 'applyOp', operation: op });
    socket.send(payload);
    console.log('Sent operation:', op);
  } else {
    console.error('WebSocket connection not open.');
    // Implement queuing or error handling here
  }
}

// Example usage:
// editor.on('change', (operation, source) => {
//   if (source === 'user') { // Only send user-initiated changes
//     sendOperation(operation);
//   }
// });
```