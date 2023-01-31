import { screen, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import MainPage from "./MainPage";

describe('MainPage Component', () => {
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
        const { asFragment } = render(<MainPage />, container);

        await screen.findAllByText('Discord');

        expect(asFragment()).toMatchSnapshot();
    })

    it('Should display have two events in Media', async () => {
        render(<MainPage/>, container);

        const event1 = await screen.findAllByText('Discord');
        const event2 = await screen.findAllByText('Twitch');

        expect(event1.length).toBe(1);
        expect(event2.length).toBe(1);
    })

    it('Should display have two events in Publication', async () => {
       
        render(<MainPage/>, container);

        const event1 = await screen.findAllByText(/Title 1/i);
        const event2 = await screen.findAllByText(/Title 2/i);

        expect(event1.length).toBe(1);
        expect(event2.length).toBe(1);
    })

    it('Should render banner', async () => {
        const { asFragment } = render(<MainPage/>);

        await screen.findByAltText(/Baner świąteczny/i);

        expect(asFragment()).toMatchSnapshot();
    })

    it('Should render newPublication', async () => {
        const { asFragment } = render(<MainPage/>);

        await screen.findByText(/Każdy jest Johnem nowa edycja/i);

        expect(asFragment()).toMatchSnapshot();
    })
})
