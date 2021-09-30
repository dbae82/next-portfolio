import Nav from "./Nav"
import Meta from "./Meta"

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
