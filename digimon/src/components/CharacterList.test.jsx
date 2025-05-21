import { render, screen, waitFor } from "@testing-library/react";
import CharacterList from "./CharacterList.jsx";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

test("render header title", () => {
	render(<CharacterList />);
	const header = screen.getByText("Digimon");
	expect(header).toBeInTheDocument();
});

test("display message when no digimon available to show", async () => {
	axios.get.mockRejectedValue(new Error("Network Error"));

	render(<CharacterList />);

	await waitFor(() => {
		expect(
			screen.getByText("There were issues trying to load digimon")
		).toBeInTheDocument();
	});
});
