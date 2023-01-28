import { screen, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Events from "./Events";

describe('Events Component', () => {
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
        const { asFragment } = render(<Events newPublication={undefined} events={undefined} />, container);

        await screen.findAllByText('Title 1');

        expect(asFragment()).toMatchSnapshot();
    })

    it('Should display have two events', async () => {
        render(<Events newPublication={{filename: "banner.jpg", alt: "Title 1", title:"Title 1"}} events={undefined} />, container);

        const event1 = await screen.findAllByText('Title 1');
        const event2 = await screen.findAllByText('Title 2');

        expect(event1.length).toBe(1);
        expect(event2.length).toBe(1);
    })
})
