import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    toolbar: theme.mixins.toolbar,
    layout: {
        marginTop: "8%",
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
        },
        textAlign: "center",
    },
    heading: {
        textShadow: "1px 1px 5px red",
        fontSize: "8.3vw",
        margin: "auto"
    },
    googleButton: {
        margin: "auto",
        width: "auto",
        marginTop: "35px"
    },
    subheading: { textShadow: "1px 1px 2px pink" },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    divider: {
        margin: "20px 0",
    }
}));
