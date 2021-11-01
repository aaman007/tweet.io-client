import Container from "../ui/Container";
import Navigation from "./Navigation";

const BaseLayout = ({ children }) => {
    return (
        <Container>
            <Navigation />
            {children}
        </Container>
    )
};

export default BaseLayout;