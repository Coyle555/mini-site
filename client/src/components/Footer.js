import React from 'react';
import './Footer.css'


function Footer() {
    return (
        <div className='main-footer font-link'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-md-4'>
                        <h4 style={{paddingBottom:'10px'}}>About</h4>
                        <p style={{paddingRight:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam ac ante mollis quam tristique convallis</p>
                    </div>
                    <div style={{paddingBottom:'20px'}} className='col-xs-12 col-sm-6 col-md-4'>
                        <h4 style={{paddingBottom:'10px'}}>Links and Details</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/ccoyle5/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.github.com/Coyle555"><i class="fab fa-fw fa-github"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.google.com/search?q=synergistic+llc+address+cincinnati+ohio&sxsrf=AOaemvJfl9hrOlgouEzwBNICPmsfEII2Lw%3A1634156985031&ei=uUFnYa-hAeOpytMP2fy7kAY&oq=synergistic+llc+address+cincinnati+ohio&gs_lcp=Cgdnd3Mtd2l6EAMYADIICCEQFhAdEB46BwgAEEcQsAM6BQghEKABOgUIIRCrAjoFCCEQkgNKBAhBGABQ6jxYuktg2VBoAXACeACAAW6IAZ4EkgEDNC4ymAEAoAEByAEIwAEB&sclient=gws-wiz"><i class="fa fa-file"></i></a>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4'>
                        <h4 style={{paddingBottom:'10px'}}>Contact</h4>
                            <p style={{paddingLeft:'12px'}} className='row'>Email: lorem@ipsom.com</p>
                            <p style={{paddingLeft:'12px'}} className='row'>Office Phone: (555) 555-5555</p>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm' style={{textAlign:'center'}}> &copy; 2021 Coyle Development. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;