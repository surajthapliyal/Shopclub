import { makeStyles, createTheme } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    container: {
        backgroundImage: 'url("Assets/mainBG.jpg")',
        backgroundSize: "cover",
        height: "100vh",
        margin: "0",
        padding: "0",
    },
    layout: {
        textAlign: "center",
    },
    heading: {
        color: "white",
        fontSize: "8.3vw",
        fontFamily: "Helvetica",
        letterSpacing: "-.09em",
    },
    googleButton: {
        fontFamily: "Helvetica",
        marginTop: "10px",
        padding: "15px 25px",
        fontSize: "15px",
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "white",
        borderRadius: "50px"
    },
    headingBox: {
        position: "fixed",
        top: "80px",
        left: "60px"
        // padding: "8rem calc((110vw - 1400px) / 2)",
    },
    tagline: {
        color: "white",
        fontFamily: "Helvetica",
        marginTop: "5px",
        fontSize: "1.5vw",
        letterSpacing: "-.05em",
    },
    subheading: {
        color: "white",
        fontSize: "3.0vw",
        marginTop: "-10px",
        fontFamily: "Helvetica",
        letterSpacing: "-.07em",
    },
}));
