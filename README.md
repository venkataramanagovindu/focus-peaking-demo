## Focus Peaking Application

### Overview
This application demonstrates focus peaking on video content, highlighting high-contrast areas in different colors. It is built using **React**, **TypeScript**, and **ShadCN UI components**.

---

##  Approach
The application leverages **HTML5 Canvas** for video frame processing, detecting areas of high contrast to simulate focus peaking. The main steps in the implementation include:

1. **Loading and Rendering the Video**
   - A `<video>` element loads the sample video.
   - A `<canvas>` element overlays the video to process and display the focus peaking effect.

2. **Applying Focus Peaking Effect**
   - The `canvas` draws frames from the video in real time.
   - Each frame is analyzed to detect brightness levels.
   - High-contrast areas are highlighted with a selected color (red, green, blue, yellow).

3. **Toggle and Color Selection**
   - Users can toggle the focus peaking effect on and off.
   - Users can switch between different highlight colors for better visibility.

4. **UI Enhancements with ShadCN**
   - **ShadCN UI Components** provide a sleek design with buttons and cards.
   - **Toasts** notify users when toggling focus peaking.

---

## Installation
### 1 Clone the Repository:
```sh
git clone <repository-url>
cd <project-folder>
```
### 2️ Run the Installation Script:
```sh
chmod +x install.sh
./install.sh
```

---

## Running the Application
Start the application using:
```sh
chmod +x run.sh
./run.sh
```

---

## Usage Guide
1. **Upload a video** or use the provided sample video.
2. **Click "Enable Focus Peaking"** to highlight focused areas.
3. **Change highlight colors** using the color buttons.
4. **Click "Disable Focus Peaking"** to turn off the effect.

---

##  Technologies Used
-  **React.js (Vite)**
-  **TypeScript**
-  **ShadCN UI (Button, Card, Toast)**
-  **HTML5 Canvas for video processing**

---

##  Special Notes
-  **Ensure you have Node.js installed** before running the setup scripts.
-  **The `public/assets/exploreHD-Focus.mp4` file** should be present for the video to load correctly.
-  **Performance Considerations:** Processing high-resolution videos in real-time can be CPU-intensive. Optimizations such as WebGL or Web Workers can be considered for future improvements.


