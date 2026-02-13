# Travel Experience App - Technical Plan

## Overview

A standalone React application located in `/travel-planner` that builds custom travel packages based on user preferences. It calculates exact costs, schedules, and logistics using a mock database of destinations and activities.

## 1. Tech Stack

- **Framework:** React 18 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API (for Wizard state)
- **Routing:** React Router (if needed, or simple conditional rendering for Wizard flow)

## 2. Project Structure

```
/travel-planner
  /public
  /src
    /components
      /Wizard       # Steps of the questionnaire
      /Results      # Itinerary and Cost display
      /UI           # Reusable UI components (Buttons, Cards)
    /data           # Mock database (JSON/TS)
    /hooks          # Logic for matching answers to data
    /types          # TypeScript interfaces
    App.tsx
    main.tsx
```

## 3. Data Model (Mock Data)

We will create a robust set of mock data to demonstrate the capability.

```typescript
interface Destination {
  id: string;
  name: string; // e.g., "Tokyo, Japan"
  region: string; // e.g., "Asia"
  baseCost: number; // Avg nightly rate
  activities: Activity[];
}

interface Activity {
  id: string;
  name: string; // e.g., "Street Food Tour"
  type: 'nightlife' | 'food' | 'culture' | 'adventure';
  tags: string[]; // e.g., ['cooking', 'spicy', 'local']
  cost: number;
  duration: number; // hours
  requiresBooking: boolean;
}
```

## 4. Application Flow

### Phase 1: The Questionnaire (Wizard)

Users answer sequential questions to build their profile.

1.  **Travel Style:** Relaxation, Adventure, Cultural, Party.
2.  **Company:** Solo, Couple, Group.
3.  **Food Preferences:** Fine Dining, Street Food, Cook-your-own.
4.  **Nightlife:** Clubs, Quiet Bars, None.
5.  **Budget:** $/$$/$$$.

### Phase 2: The Logic Engine

The app filters the `Destinations` list based on the answers.

- _Example:_ If user selects "Street Food" + "Nightlife", _Bangkok_ scores higher than _Maldives_.
- It selects activities that match the user's specific tags (e.g., "Cook-your-own" -> Selects "Cooking Class" activity).

### Phase 3: The Results Dashboard

Displays the "Complete Package":

1.  **Itinerary:** Day-by-day breakdown (Morning/Afternoon/Evening).
2.  **Cost Calculator:**
    - Accommodation: $X
    - Tours/Guides: $Y
    - Transport: $Z
    - **TOTAL:** $$$
3.  **Call to Action:** "Book This Trip" (Mock).

## 5. Implementation Steps

1.  **Setup:** Initialize Vite app and Tailwind.
2.  **Data:** Create `destinations.ts` with 3 diverse options (e.g., Tokyo, Bali, Paris).
3.  **Components:** Build the Questionnaire UI.
4.  **Logic:** Build the scoring and itinerary generator function.
5.  **UI Polish:** Ensure the cost breakdown looks professional and clear.
