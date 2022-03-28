/* REACT IMPORTS */
import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

/* LOCAL IMPORTS */
import StdCard from "./StdCard";

describe("Standard Card Component", () => {
    it("Should render", async () => {
        const component = (
            <StdCard title="My Card">
            </StdCard>
        );
    
        const { findByText } = render(component);
        const title = await findByText("My Card");
        expect(title).toBeTruthy();
    });

    it("Should show title and description", async () => {
        const component = (
            <StdCard title="My Card" description="My Description">
            </StdCard>
        );
    
        const { findByText } = render(component);
        const title = await findByText("My Card");
        const desc = await findByText("My Description");
        expect(title).toBeTruthy();
        expect(desc).toBeTruthy();

    });

    it("Should have a working button", async () => {
        let buttonPressed = false;
        const component = (
            <StdCard title="My Card" buttonPress={() => buttonPressed = true}>
            </StdCard>
        );

        const { findByRole } = render(component);

        const btn = await findByRole("button");
        expect(btn).toBeTruthy();

        fireEvent.press(btn);

        expect(buttonPressed).toBeTruthy();
    });

    it("Should be clickable", async () => {
        let cardPressed = false;
        const component = (
            <StdCard title="My Card" cardPress={() => {cardPressed = true}}>
            </StdCard>
        );

        const { findByText } = render(component);
        const title = await findByText("My Card");
        expect(title).toBeTruthy();

        fireEvent.press(title);

        expect(cardPressed).toBeTruthy();
    });
  });