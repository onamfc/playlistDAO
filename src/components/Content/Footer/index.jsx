import './Footer.css'
import FooterData from '../../../data/data-layout/data-Footer'
import {
    FooterSlogan,
} from '../../../helpers/allImgs'

const Footer = () => {

    return (
        <footer className="main-footer">
            <div className="widgets-section padding-top-small padding-bottom-small">
                <div className="container">

                    <div className="row clearfix">

                        <div className="col-12">
                            <div className="footer-widget about-widget">
                                <h3>Join PlaylistDao</h3>
                                <span className="has-line-center"/>
                                <div className="widget-content">
                                    <div className="text">For upcoming membership mint details, you know the drill.
                                        Twitter + Discord. Reach out directly if you want to contribute.
                                    </div>
                                    <ul className="social-links">
                                        {
                                            FooterData.social.map((item, i) => (
                                                <li key={i}>
                                                    <a href={item.href} target={item.target}>
                                                        <img src={item.img} alt={item.name} height={item.height}
                                                             width={item.width}/>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <img className="slogan" src={FooterSlogan} alt="footer slogan"/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright-text">© PlaylistDAO 2022 All rights reserved</div>
                </div>
            </div>
        </footer>
    );

}

export default Footer
