import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  root: {
    maxWidth: "80%",
    backgroundColor:"#e9ecef",
    color:"black",
    margin:"20px",
    boxShadow:"2px 5px 20px #ccd5ae"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    color:"black",
    justifyContent: "space-between",
  },
}));
