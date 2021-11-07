import logo from "../../resources/logo.png";
import Button from '@material-ui/core/Button';

import "./index.scss";

const NavBar = (props:any) => {
    return (
        <>
            {(props.type === "general") ? (
                <div>
                    <nav className="navbar" id="docsNavBarTop">
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <div className="d-flex">
                                    <img width="50" title="Logo" src={logo} alt="Indexed.Finance" />
                                    <h2 id="logo-text-docs" title="Chat App">ChatApp</h2>

                                   
                                </div>
                            </a>
                            <form className="d-flex input-group w-auto">
                                <div id="btn-search">
                                    <Button variant="contained" className="btnasalinside" color="primary" title="Logout">Logout</Button>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            ) : (
                <div>
                    <nav className="navbar" id="docsNavBarTop">
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <div className="d-flex">
                                    <img width="50" title="Logo" src={logo} alt="Indexed.Finance" />
                                    <h2 id="logo-text-docs" title="Chat App">ChatApp</h2>

                                    <div title="Add Contacts" className="btn-add">
                                        <Button variant="outlined" color="primary"><i className="fas fa-2x fa-plus-circle"></i></Button>
                                    </div>
                                </div>
                            </a>
                            <form className="d-flex input-group w-auto">
                                <div id="btn-search">
                                    <input title="Input the text to search contacts" type="search" className="form-control search_text" placeholder="Search Contacts" aria-label="Search" />
                                    <Button variant="contained" className="btnasalinside" color="primary" title="Search">Search</Button>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            )}

        </>
    )
}
export default NavBar;