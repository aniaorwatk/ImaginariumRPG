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

    const obj = [
        {
            id: 1,
            title: "Title 1",
            filename: "test1.jpg",
        }
    ]

    const obj2 =
    {
        alt: "testowy alt",
        title: "Każdy jest Johnem nowa edycja",
        filename: "test1.jpg",
        source: "www.test1.pl"
    }

    it('Should render event with data', async () => {
        render(<Events newPublication={obj2} events={obj} />, container)

        const publication = screen.getByText(/Title 1/i);

        expect(publication).toBeInTheDocument();
    })

    it('Should render ', async () => {
        const { asFragment } = render(<Events newPublication={obj2} events={obj} />, container)

        await screen.findAllByAltText(/testowy alt/i);

        expect(asFragment()).toMatchSnapshot();
    })
})
