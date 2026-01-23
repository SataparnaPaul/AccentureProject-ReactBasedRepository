# React Git Dashboard (Assignment Brief)

This repository is a basic knowledge check focused on API integration, responsive UI design, and reusable React component best practices.

## Objectives
- Build a React app using Vite (or any other method).
- Implement client-side navigation with React Router.
- Fetch and display real data from a public API.
- Make the UI responsive and visually appealing using a CSS framework.

## Required Pages and Features
### 1) Navigation (React Router)
- **Navbar** with menu items: Home, About, Contact Us.
- **Home**: show user profile details:
  - Profile picture
  - Full name
  - User name
- **About**: show repository-related information:
  - List of repositories
  - Repository name
  - Description
  - Star count
  - Fork count
- **Contact Us**: show contact info:
  - Email address
  - Phone number
  - Social media links (GitHub, LinkedIn, Twitter, etc.)

### 2) Responsive UI (CSS Framework)
Use any CSS framework (Tailwind CSS, Material UI, Bootstrap, etc.) to make the app responsive and visually appealing.

### 3) API Integration
Use a public API to fetch and display real data:
- `https://api.github.com/users/bradtraversy`
- `https://api.github.com/users/bradtraversy/repos`

**Must include:**
- Data fetching with `fetch` or `axios`
- Loading and error states
- Dynamic rendering of API data

## Implementation Notes
- Use functional components.
- Organize code into folders such as `components/` and `pages/`.
- Create reusable components (e.g., ProfileCard, RepoList, LoadingState, ErrorState).
- Identify possible improvements and explain relevant React concepts and the chosen CSS framework.
- Demonstrate the plan using GitHub Codespaces.
- Target completion: end of week 1.

## Scope
Only documentation updates are requested at this stage. No implementation work should be done yet.
