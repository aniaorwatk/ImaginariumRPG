import { screen, render } from "@testing-library/react";
import Banner from "./Banner";

describe('Banner Component', () => {

    const obj = {
        id: 1,
        filename: "https://a.storyblok.com/f/188945/342x100/34919fd073/banner.jpg",
        alt: "Baner świąteczny"
    }

    it('Should render', async () => {
        const { asFragment } = render(<Banner banner={obj} />);

        await screen.findByAltText("Baner świąteczny");

        expect(asFragment()).toMatchSnapshot();
    })
})
