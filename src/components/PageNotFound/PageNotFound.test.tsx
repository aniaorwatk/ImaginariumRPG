import { render } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

describe('PageNotFound', () => {
    it('Should render', () => {
        const { container } = render(<PageNotFound />);
        expect(container).toMatchSnapshot();
    })
})
