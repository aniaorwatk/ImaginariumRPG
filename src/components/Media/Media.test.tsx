import { screen, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Media from "./Media";

describe('Media Component', () => {
    let container: any = null;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('Should render', async () => {
        const { asFragment } = render(<Media media={undefined}/>, container);

        await screen.findAllByText('Discord');

        expect(asFragment()).toMatchSnapshot();
    })

    it('Should display have two events', async () => {
        render(<Media media={undefined} />, container);

        const event1 = await screen.findAllByText('Discord');
        const event2 = await screen.findAllByText('Twitch');

        expect(event1.length).toBe(1);
        expect(event2.length).toBe(1);
    })
})
