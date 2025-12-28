# 3D Wireframe Renderer (JavaScript + Canvas)

## Overview

This project is a from-scratch 3D wireframe renderer built using HTML and JavaScript, without using WebGL or any external 3D libraries.

The goal of this project is to understand how 3D graphics work internally by manually implementing the complete 3D to 2D rendering pipeline using math and the HTML5 canvas.

---
## How to Clone and Run the Project

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Sagar-Kumar-1107/3d-renderer.git
```

### 2. Go into the Project Folder
```bash
cd 3d-renderer
```

### 3. Open the project in your browser:

```bash
explorer index.html
```

(For Windows / Git Bash)

Or simply open the file manually by double-clicking `index.html`.

---
## Sample image
<img width="507" height="383" alt="image" src="https://github.com/user-attachments/assets/b6a0bc00-8dfd-4207-871a-47845c13211d" />

---

## Project Motivation

I started this project by learning how to use the HTML5 canvas:
- Drawing points
- Drawing lines
- Clearing and redrawing the canvas every frame

After understanding basic canvas drawing, I moved to representing drawings using data instead of hardcoded shapes.

---

## Representing Objects in 3D

All objects are stored as points in 3D space using the following format:

```js
{x: x, y: y, z: z}
```

Objects implemented in this project:
- Cube (manually defined vertices)
- Sphere (points generated mathematically)
- Custom drawings (e.g.penguin point data taken from online references from https://github.com/Max-Kawula/penger-obj)

Each object is represented using:
- Vertices: array of 3D points
- Edges: array of index pairs defining connections between points

---

## 3D to 2D Projection

To render 3D points on a 2D screen, I implemented a perspective projection:

```
x' = x / z
y' = y / z
```

This projection works as a general concept for converting:
- n-dimensional space into (n − 1)-dimensional space

By repeatedly applying this idea, any higher-dimensional object can ultimately be rendered as a 2D image.

After projection, the points are mapped to screen coordinates for drawing on the canvas.

---

## Transformations

### Rotation

Points are rotated using basic rotation formulas. For example, rotation in the X–Z plane:

```
x' = x cos(θ) − z sin(θ)
z' = x sin(θ) + z cos(θ)
```

This allows smooth rotation of 3D objects.

### Translation

Objects are translated along the Z-axis to keep them in front of the camera before projection.

---

## Rendering Loop

For each animation frame:
1. Clear the canvas
2. Apply rotation and translation to all vertices
3. Project 3D points into 2D space
4. Draw all points
5. Draw edges between connected points

This results in a real-time rotating wireframe rendering.

---

## Project Structure

```
index.html   - Canvas setup
index.js   - Rendering logic, math, animation loop
cube.js    - For cube
sphere.js  - For Sphere
penguine.js - For Penguin
README.md   - Project documentation
```

---

## Why This Project

- No WebGL
- No three.js
- No external libraries

Everything is implemented using:
- JavaScript
- HTML Canvas
- Basic mathematics

This project helped me understand:
- The full 3D graphics pipeline
- How software renderers work internally
- Projection, transformation, and rendering logic

---

## Possible Improvements

- Camera movement
- More complex shapes

---

## Conclusion

This project is a learning-focused software 3D renderer that demonstrates how 3D objects can be transformed and rendered onto a 2D screen using only JavaScript, HTML canvas, and mathematics.

## Refrences 

[youtube tutorial by - Tsoding](https://youtu.be/qjWkNZ0SXfo?si=-UNhmYpFJ1AT94-C)

