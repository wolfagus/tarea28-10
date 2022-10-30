import { Link } from "react-router-dom"

const NavBar = (props) => {
    const {title} = props
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={'/'}>
                                <button className="btn btn-success"> Home</button>
                            </Link>
                            <Link to={'/AboutUs'}>
                                <button className="btn btn-success mx-3"> section 1</button>
                            </Link>
                            <Link to={'/NoFound'}>
                                <button className="btn btn-success"> section 2</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar