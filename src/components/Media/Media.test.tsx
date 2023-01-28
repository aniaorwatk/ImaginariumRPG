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

    const obj = [
        {
            title: "Discord",
            filename: "Discord",
            id: 1,
            source: "Discord"
        }
    ]

    it('Should render media with data', async () => {

        const tree = render(<Media media={obj} />, container);

        const media = screen.getByText('Discord');

        expect(media).toBeInTheDocument();
    })

    it('Should render', async () => {

        const tree = render(<Media media={obj} />);

        expect(tree.baseElement).toMatchSnapshot()
    })
})
