import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Web3Provider from "./store/Web3Provider";
import Footer from "../src/components/Content/Footer"
import Body from "../src/components/Content/Body"
import Header from "../src/components/Content/Header"
import "./assets/css/general.css";


ReactDOM.render(
    <Web3Provider>
        <Header/>
        <Body/>
        <Footer/>
    </Web3Provider>,
    document.getElementById("root")
);
