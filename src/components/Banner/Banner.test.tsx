import { screen, render } from "@testing-library/react";
import Banner from "./Banner";

describe('Banner Component', () => {

    it('Should render', async () => {
        const { asFragment } = render(<Banner />);

        await screen.findByAltText("Baner świąteczny");

        expect(asFragment()).toMatchSnapshot();
    })
})
