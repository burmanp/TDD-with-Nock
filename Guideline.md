# neopets-in-an-hour

Mock pair programming interview, should take just over an hour.

We'll be building a dog centric neopets, where you can create and delete pets.

## External Image API

[https://dog.ceo/dog-api](https://dog.ceo/dog-api/)

## Acceptance Criteria

When a user visits neopets2
Then they should be able to add a new pet (name)

---

## Learning notes
Nock mocking should be done before the render, i.e. nock(...).get(...) render(<App/>).

For CORS error, make sure to include the response header in Nock setup.

