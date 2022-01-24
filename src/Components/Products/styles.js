import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#f8f9fa",
    padding: theme.spacing(10),
    position:"relative"
  },
  root: {
    flexGrow: 1,
  },
  listItem: {
  }
}));
