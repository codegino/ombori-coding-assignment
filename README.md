# Ombori Code Test

## Notes from the candidate

### General comment

I did not overcomplicate the project since I have a lot of technical assignments from other applications and my daily work tasks to complete(Thanks for understanding). We can discuss more complex stuff if I got the chance to go to the technical interview.

I can utilize open source to deliver projects faster to users, but for the sake of this exercise, I will recreate most requirements from scratch.

I tried to reuse what already is existing to show that I'm capable of working in any codebase. However, my preferred tech stack in the frontend(browser) would be around NextJS, Tailwind, TypeScript, and Vite ecosystem.

### Used `yarn` instead of `npm`

I updated the package manager to `yarn` because `npm` is very slow for some reason.

### Styling

I used the built-in CSS module styling to show that I can work with what already is existing.

### Responsiveness

The app is too simple to overcomplicate with responsive design, but I'm very capable of doing such.

### Testing

I used the existing testing library and added MSW to mock the server.

> There is a weird bug in `react-scripts test` or `msw` where the network calls are not mocked properly. Please spam using `yarn test` or `npm run test` to get the passing test.

Hi there, we're really excited that you've made it this far in our interview process and look forward to getting to know you better.

## _End of Candidate's comment_

At Ombori, we strive to build fantastic apps using well structured and efficient code.
The purpose of this task is to see how you solve problems and to make sure that you follow our linting rules as well as industry best practices.

We've scaffolded a very basic project using create-react-app that will serve as your starting point for the task.

---

What the test app should do:

- Display a custom loading component for 3 seconds
- Fetch user data from https://reqres.in/
- Display those users in a scrollable view that lazy loads more users when you've reached the bottom of the list, if there are no more users to load it should indicate that there are no more users.
- Be responsive, look great and work well on different devices, especially various mobile screens

We've prepared some screenshots in the design folder as well as a video of what the loading component should look like.

---

Those are the requirements. If you wish to show off more of your skillset, feel free to expand upon the app. We encourage you to solve the challenge using your favorite libraries and take the opportunity to present your toolbox, preferences and experience.

We only ask that you be able to motivate your choices.

Before submitting your result please make sure that:

- The code is formatted (including your favorite linter is a good idea); code that does not meet basic readability criteria will be rejected
- The application resembles what is visible on screenshots in the design folder
- The application meets criteria listed above in common desktop and mobile browsers
