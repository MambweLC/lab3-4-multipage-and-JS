Web Development Labs – Multipage Website Project

Lab 3 – Multipage Website

Group Members
1. Mambwe L. Chilebela  
2. Comfort Chapa

Page Descriptions

1. Home Page (`index.html`)
- Features a welcoming hero section with a brief introduction.
- Below the hero, two side-by-side sections (using Flexbox) detail the website and its latest updates.

2. Services Page (`services.html`)
- Displays four service cards in a responsive grid layout (CSS Grid).
- Each card contains an image, heading, and description.
- Hover effects enhance interactivity.

3. Contact Page (`contact.html`)
- Includes a styled HTML5 contact form with fields for name, email, subject, and message.
- Utilizes HTML5 form validation and animations for button hover/input focus.

 Summary of Features Used
Selectors: Element, class, and pseudo-classes (`:hover`, `:focus`) for styling.
flexbox: Used for responsive layout on the home page.
Grid: Applied to the services page for a flexible card layout.
Media Queries: Ensured responsiveness across different screen sizes:
  - `max-width: 1024px`: Adjusts for tablets.
  - `max-width: 768px`: Tweaks for smaller screens.
  - `max-width: 480px`: Optimized for mobile devices.
  Animations: Subtle hover animations via `@keyframes` and transitions.


Lab 4 – Making the Website Interactive with JavaScript

Features Implemented
Theme Toggle (`index.html`)
- A button toggles between light and dark mode using `classList.toggle()` on the body.
- CSS updates the background and text colors of the page and its sections.

Form Validation (`contact.html`)
- Prevents form submission if fields are empty.
- Displays a personalized thank-you message when successfully submitted.
- Uses DOM methods and `addEventListener`.

Fetch API Integration (`index.html`)
- Fetches and displays a list of users from `https://jsonplaceholder.typicode.com/users`.
- Users are rendered dynamically into a list when the **Load Users** button is clicked.

Interactive FAQ (`index.html`)
- Questions can be clicked to reveal or hide answers.
- Toggled using `classList.toggle()` and basic CSS transitions.

Bonus Feature: Real-Time Clock (`header`)
- A live digital clock is displayed in the site header.
- Updated every second using `setInterval()`.


Technologies Used
- HTML5, CSS3, and JavaScript (ES6+)
- DOM Manipulation
- CSS Flexbox & Grid
- Responsive Design
- Fetch API
