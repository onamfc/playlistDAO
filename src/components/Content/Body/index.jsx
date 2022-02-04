import './body.css'
import {
    ManicShine,
    ManicCircle,
    ManicCircleAlt,
    ManicEmphasis,
    ManicEmphasisAlt,
    ManicLine,
    ManicRectangle,
    ManicSmiley,
} from '../../../helpers/allImgs'


const Body = () => {
    return (
        <div id="body-content" className="container mt-2 pt-5">
            <div className="row">
                <p>
                    The <span className="f-md manic-shine"><img src={ManicShine}
                                                                alt="manic-shine"/>protagonist</span> in the unbundling
                    of the music industry
                    is <span className="f-md">PlaylistDAO</span> – a
                    legion of fans that does more than resist, it moves. <span className="f-md">The <span
                    className="manic-line">industry is stealing<img src={ManicLine} alt="manic-line"/></span> <span
                    className="manic-emphasis">from<img src={ManicEmphasis}
                                                        alt="manic-emphasis"/> artists<img src={ManicSmiley}
                                                                                           alt="manic-smiley"/></span></span> and
                    has tried to confine them to narrow stereotypes optimized for max clicks & streams. But now, we have
                    tools to turn that industry on its head.
                </p>
                <p>
                    <span className="f-xl manic-circle"><img src={ManicCircle}
                                                             alt="manic-circle"/>BUiDL.</span> As a DAO, we stockpile
                    resources + ideas to take back the music meant for fans. <span
                    className="f-xl manic-circle-alt">HodL.<img src={ManicCircleAlt}
                                                                alt="manic-circle-alt"/></span> Through
                    NFTs, we redefine ownership,
                    collecting, and artist patronage. <span className="f-xl manic-emphasis-alt">PLAY.<img
                    src={ManicEmphasisAlt}
                    alt="manic-emphasis-alt"/></span> Our
                    community will vibe online
                    & IRL (our venues are sanctuaries) as avante-garde pioneers raising hell in the most gratifying of
                    ways.
                </p>
                <p>
                    The Web3 music ecosystem is a near-blank canvas that awaits our imprint.
                </p>
                <p>
                    Time is short. <span className="f-lg manic-rectangle"><img src={ManicRectangle}
                                                                               alt="manic-rectangle"/><span>Music needs you.</span></span>
                </p>
            </div>
        </div>
    );

}

export default Body
