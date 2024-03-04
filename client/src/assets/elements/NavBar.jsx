import './../css/argon-design-system.css';
import "./../css/nucleo-svg.css";
import "./../css/font-awesome.css";
function NavBar(){
    return(
<div>
    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2" style={{"padding":"0px"}}>
      <div className="container" style={{"padding":"0px"}}>
        <a className="navbar-brand mr-lg-5" href="/" style={{"padding":"0px"}}>
          <img src={require('./../img/pfas_logo.png')} style={{"width": "100px", "height": "100px"}}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation" style={{"padding":"0px"}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar_global" style={{"padding":"0px"}}>
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="./index.html">
                  <img src="./../img/brand/blue.png"/>
                </a>
              </div>
              <div className="col-6 collapse-close" style={{"padding":"0px"}}>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation" style={{"padding":"0px"}}>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-hover align-items-lg-center" style={{"padding":"0px"}}>
            <li className="button">
              <button href="#" className="nav-link" role="button">
                <span className="nav-link-inner--text">PFAS Toxicology Call Center</span>
              </button>
            </li>
            <li className="button">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">PFAS Toxicokinetic Database</span>
              </a>
            </li>
            <li className="button">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">Publications</span>
              </a>
            </li>
            <li className="button">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">Resources</span>
              </a>
            </li>
            <li className="button">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">Outreach Programs</span>
              </a>
            </li>
            <li className="button">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">News</span>
              </a>
            </li>
            <li className="button">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">Contact Us</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block" style={{"display": "flex", "justifyContent": "flex-end"}}>
              <a href="/login" className="btn btn-primary btn-icon" >
                <span className="btn-inner--icon" >
                </span>
                <span className="nav-link-inner--text" >Log In</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    )
}
export default NavBar;