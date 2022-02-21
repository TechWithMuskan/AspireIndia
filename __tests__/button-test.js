import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../src/components/atoms/button";

it("test extrastyle of button ", () => {
	const { getByText } = render(
		<Button label="Click me!" extraStyle={{ backgroundColor: "white" }} />
	);
	const innerText = getByText(/click/i);
	const button = innerText.parent;
	expect(button.props.style).toMatchObject({ backgroundColor: "white" });
});

it("test onPress of button", () => {
	const mockFn = jest.fn();
	const { getByText } = render(<Button label="Click me!" onPress={mockFn} />);
	const button = getByText("Click me!");
	fireEvent.press(button);
	expect(mockFn).toHaveBeenCalledTimes(1);
});
