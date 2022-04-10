import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";

import App from "./App";

describe("adding a pet", () => {
  it("should let users add new pets called 'Fluffy' and 'Rupert'", async () => {
    nock("https://dog.ceo").get("/api/breeds/image/random").reply(
      200,
      {
        message: "https://example.com/fluffy.png",
        status: "success",
      },
      { "Access-Control-Allow-Origin": "*" }
    );

    render(<App />);

    expect(screen.getByLabelText("Pet Name")).toBeVisible();

    expect(screen.getByPlaceholderText("Enter a Pet Name")).toBeVisible();

    const addButton = screen.getByRole("button", { name: "Add" });

    expect(addButton).toBeVisible();

    const input = screen.getByLabelText("Pet Name");

    userEvent.type(input, "Fluffy");
    userEvent.click(addButton);

    // userEvent.type(input, "Rupert");
    // userEvent.click(addButton);

    expect(await screen.findByText("Fluffy", { selector: "li" })).toBeVisible();
    // expect(screen.getByText("Rupert", { selector: "li" })).toBeVisible();

    // arrange: intercept the dog.ceo host, on the /api/breeds/image/random route
    // respond with an example image 'https://example.com/fluffy'
    // extend: respond to the second request with 'https://example.com/rupert'
    // act: all that stuff below

    

    // assert: find an image with an alt tag of "Fluffy", check it's source is 'https://example.com/fluffy'
    // extension: find an image with an alt tag of "Rupert", check it's source is 'https://example.com/rupert'

    
    const fluffyImg = screen.getByAltText("Fluffy");

    expect(fluffyImg).toHaveAttribute("src", "https://example.com/fluffy.png");
  });
});