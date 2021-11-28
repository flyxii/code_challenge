## Tech stack
- Next.js
- Typescript
- React Hooks
- GSAP
- styled-components
- rebass

## Technical Notes
- Build with Next.js, benefit from the handy Jamstack and serverless approach
- Incorporated GSAP for simple animation
- Incorporated useContext hook rather than redux for state management
- Included the .env.local files in the commit just for this test, which should not be included in real world case

## Further Improvement
- Could store some kind of session id in localStorage/cookie to persist the basket if user revisit the application.
- Write unit test
- build some micro animation
- I would like to create some effect on the Hero image with Pixi, but it takes much more time.

## What is missing
- User is not able to type a quantity number in the field. 
- Basket is not persisted
- No CI/CD pipeline

## Setup

To run development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
