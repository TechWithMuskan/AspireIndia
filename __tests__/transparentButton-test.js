import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TransparentButton from "../src/components/atoms/transparentButton";

it("Test children of TransparentButton ", () => {
	const { getByText } = render(<TransparentButton title="Click me!" />);
	const innerText = getByText(/click/i);
	const children = innerText.children[0];
	expect(children.type).toBe("Text");
});

it("Test onPress of TransparentButton", () => {
	const mockFn = jest.fn();
	const { getByText } = render(
		<TransparentButton title="Click me!" onPress={mockFn} />
	);
	const button = getByText("Click me!");
	fireEvent.press(button);
	expect(mockFn).toHaveBeenCalledTimes(1);
});
