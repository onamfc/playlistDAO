import {
    PlaylistLogo,
} from '../../../helpers/allImgs'

const Header = () => {
    return (
        <div className="container mt-2 pt-5">
            <div className="row">
                <main role="main" className="col-lg-12 justify-content-center text-center">
                    <div className="content mr-auto ml-auto">
                        <img src={PlaylistLogo} alt="playlist-logo" className="img-fluid mb-2"/>
                    </div>
                </main>
            </div>
        </div>
    );

}

export default Header



