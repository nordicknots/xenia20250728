# Welcome to Nordic Knots technical assignment for Fullstack Developers.

This is a two part test. You'll do one by yourself at home and the other one with us during the technical interview. We know you have a lot of other things to do, so we've tried to keep it as short as possible. You're not expected to spend more than 2h on the first part and we'll spend 1h on the second part together. We've added a couple of bugs to the code on purpose, so if you find them, please fix them. The rest is up to you, you may use Githubs Copilot, ChatGPT, Stackoverflow and add any packages you'd like. We're looking forward to seeing your solution.

The starter code consists of a page with a list of products, a product page and a cart. It's build with TypeScript and Next.JS using SSG. The product stock is fetched from a Rest API responding with mocked product stock data. The cart is stored in local storage.

## Part 1 - Home Assignment

### Task 1

Add the possibility to have different prices for each size. A bigger rug is more expensive than a smaller one.

eg.

### Product: Park 03

| Size  | Price |
| ----- | ----- |
| 6'x8' | 995$  |
| 8'10' | 1195$ |
| 9'10" | 1395$ |

The price should be stored in the product data and displayed on the product page where the customer selects the size. You may choose any price you'd like for each size. Modify the cart to calculate the total price depending on which size the customer has added to the cart.

### Task 2 (optional)

Add the possibility to filter the products by color. The colors should be displayed as a list of checkboxes. Only available colors which exists in the product data should be shown. This means if all products with a certain color are removed the color of those products should not be available anymore. When a color is selected, the products should be filtered by the selected colors.

The color filter should be added to the product list page.

## Part 2 - Technical Interview

The second part we do together in a call.

## Installation

```bash
yarn install
```

## Running Locally

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

```bash
yarn test
```
