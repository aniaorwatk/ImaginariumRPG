import { screen, render } from "@testing-library/react";
import Patronite from "./Patronite";

describe('Patronite Component', () => {
    it('Should render', async () => {
        const { asFragment } = render(<Patronite patronite={"imagrpg@gmail.com"} />);

        await screen.findAllByText('imagrpg@gmail.com');

        expect(asFragment()).toMatchSnapshot();
    })
})
