import { screen } from "@testing-library/react";
import { renderWithProvider } from "../utils/test-utils";
import Home from "./Home";

describe('<Home/>', () => { 
	it("should render Home properly", () => {
		renderWithProvider(<Home />)
		const home = screen.getByTestId("home");
		expect(home).toBeInTheDocument()
	})
	
 })