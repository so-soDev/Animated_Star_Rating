# Animated Star Rating

## Description

Animated Star Rating is an interactive rating system that allows users to rate items using animated stars. Users can select a number of stars from 1 to 5, and based on the selected rating, corresponding text is displayed.

## Key Features and Functionality

### HTML Structure

- The ratings are represented by radio buttons with the class `rating__input`, each having a value from 1 to 5.
- Each star is represented by a `<label>` element containing an SVG image of a star.
- The text below the rating updates based on the selected rating.

### CSS Styles

- Styles are used to create animations for the stars on hover and selection.
- Stars scale up when hovered over, creating an interactive effect.
- Animation for filling stars and lines occurs upon selecting a rating.

### JavaScript Logic

- All rating input elements are retrieved using `querySelectorAll`.
- An event listener is added to each input element, which updates the text based on the selected rating:
  - 1 star: "Bad"
  - 2 stars: "Unsatisfactory"
  - 3 stars: "Satisfactory"
  - 4 stars: "Good"
  - 5 stars: "Excellent"

### User Interface

Users can click on the stars to dynamically change the visible content, creating an interactive and user-friendly interface without reloading the page. This implementation ensures clean code and ease of use, making it an excellent choice for adding rating functionality to a web page.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/your_repository.git
