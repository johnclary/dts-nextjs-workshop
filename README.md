This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Install the app dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Visit [http://localhost:3000](http://localhost:3000)
4. If your app redirects to `/crashes`, you will need to clear your network cache or disable it with your dev console. To do so, open the dev console, go to the network settings tab, and disable the cache. Once you've done so, leave your console open and navigate to `http://localhost:3000` again.

## Workshop

### Math card - `components/MathCard.tsx`

1. Make the `addTwo` function return a string.
2. Make the `addTwo` function accept a string or a number but always return a number.

### Greeting card - `components/GreetingCard.tsx`

1. Add a new property to the `Name` interface and render it in the card.
2. Modfify the component so that the `Name` object can be passed as a prop.

### Generics card - `components/GenericsCard.tsx`

1. Inspect the return types of the three different functions.
2. Modify the `makeArrayOfLikeObjects` function so that it accept like objects of a type other than `Dog`
3. Replace the `JSON.stringify` call with some code that renders a property from an object in the `peopleAndDogs` array. Why is this typing so annoying? Hint: we're going to learn about the `Record` type to solve this :)

### Stateful card

1. Move the buttons into a separate component(s)
