import { screen, render } from "@testing-library/react";
import Patronite from "./Patronite";

describe('Patronite', () => {
    it('Should render', async () => {
        const { asFragment } = render(<Patronite />);

        await screen.findAllByText('imagrpg@gmail.com');

        expect(asFragment()).toMatchSnapshot();
    })
})
