Tiny Race Project

Launch Directions
1. Open index.html in your browser using Live Preview or a local server.
2. Watch the racers move across the screen. One randomly selected racer moves at double speed.

 Controls
- A / a: Adds a new racer  at the current average X-coordinate of all existing racers (max is 8).
- D / d: Removes the last racer in the list (min 1 racer)


Option Codes & Demonstration Table

| Skill | Chosen option | Code location | Steps to try | Expected result |

 R3 | sketch.js (lines 38–55) | Launch the project and observe the draw() loop running. | Each racer is read by its index (racerXs[i], racerColors[i]) and drawn at its correct vertical row (y). |
 U2 | sketch.js (lines 47–49) | Watch the racers move horizontally across the canvas. | Each entry's value is updated frame by frame (racerXs[i] += speed) using its previous value. |
 A2 | sketch.js (lines 9–20) | Press the 'A' key repeatedly while the race is running. | Computes the average X position of all racers, pushes a new color and coordinate, and expands canvas height via .length. |
 D1 | sketch.js (lines 22–26) | Press the 'D' key repeatedly until only one racer is left. | Safely removes the last item from both parallel arrays using pop() and shrinks the canvas height. |

---

 Additional Requirements

Length Location
Location: Used a lot in sketch.js (e.g. lines 10, 15, 23, 31, 39, and setup() / keyPressed()` for dynamic canvas resizing).
Role: .length dynamically bounds the for loop so it always matches the exact number of racers, and calculates the required canvas height dynamically (yStep * racerXs.length).

 Boundary & Repeated Changes Test Sequence
1. Repeated Additions (Capacity Test):** Press "A" 5 times in a row. 
    *Expected Result:* New racers spawn at the average pack position until the list reaches the maximum capacity of 8. Further presses are ignored by the maxCapacity guard.
2. Repeated Removals (Minimum Size Test):** Press "D" repeatedly until only 1 racer remains on screen, then try pressing "D" one more time.
    *Expected Result:* Racers are smoothly popped off one by one, keeping parallel color arrays perfectly synchronized. When only 1 racer remains, the minimum-size guard (racerXs.length > 1) prevents it from deleting the last item or breaking the program.

---

Advanced
1. Compute a Useful Result: Calculates the average X position of all active racers in real time to determine where a newly pushed racer spawns.
2. Coordinate Changes Across Related Collections (Parallel Arrays): Keeps the racerXs position list and racerColors list perfectly synchronized during both push() and pop() operations.
3. Capacity Limit & Boundary Guards: Implements strict maximum capacity limits and minimum-size checks to handle edge cases safely.