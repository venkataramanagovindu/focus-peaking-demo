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
git clone https://github.com/venkataramanagovindu/focus-peaking-demo.git
cd focus-peaking-demo
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
1. **Video available in the project** Relace with other video if you'd like to (public/assets).
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

## Sample Output
<img width="1470" alt="Screenshot 2025-03-23 at 9 13 06 PM" src="https://github.com/user-attachments/assets/6c2f4282-f002-4483-b1ba-2fa4d521a7d6" />
<img width="1470" alt="Screenshot 2025-03-23 at 9 13 14 PM" src="https://github.com/user-attachments/assets/adff38ec-5845-4e13-af50-4c022cc136f9" />
<img width="1470" alt="Screenshot 2025-03-23 at 9 13 19 PM" src="https://github.com/user-attachments/assets/d34bd522-7ce0-4616-a48b-b4a1a899134c" />
<img width="1470" alt="Screenshot 2025-03-23 at 9 13 31 PM" src="https://github.com/user-attachments/assets/7663f525-44c5-4284-a1ca-550cea03249a" />

##  Special Notes
-  **Ensure you have Node.js installed** before running the setup scripts.
-  **The `public/assets/exploreHD-Focus.mp4` file** should be present for the video to load correctly.
-  **Performance Considerations:** Processing high-resolution videos in real-time can be CPU-intensive. Optimizations such as WebGL or Web Workers can be considered for future improvements.


