import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
} from "@material-ui/core";
import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "../utils/tools";
import chattAppScreen from "../images/charAppScreen.png";

export default function PortTwo() {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      <CardActionArea style={{ borderBottom: "1px solid #e3e3e3" }}>
        <CardMedia image={chattAppScreen} title="Chatt-App" component="img" />
      </CardActionArea>
      <CardContent style={{ width: "100%" }}>
        <Typography className={classes.cardTitle} variant="h5">
          Chatt-App
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          component="p"
          style={{ paddingBottom: ".6rem" }}
        >
          React/Socket.io Chat app.
        </Typography>
        <Divider style={{ marginTop: "1rem" }} />
        <Typography gutterBottom variant="h6" style={{ paddingTop: "1.3rem" }}>
          Applied Tech:
        </Typography>
        <div className={classes.cardTechLogos}>
          <Tooltip title="HTM5" arrow>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2017%2F07%2FHTML5_badge.png&f=1&nofb=1"
              alt="HTML5 logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
          <Tooltip title="CSS3" arrow>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fverekia.com%2F_pages%2Fcss3%2Fintroduction-css3%2Fimg%2Fcss3-logo.png&f=1&nofb=1"
              alt="CSS3 logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
          <Tooltip title="React" arrow>
            <img
              src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
              alt="React logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
          <Tooltip title="Node.js" arrow>
            <img
              src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png"
              alt="Node.js logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
          <Tooltip title="Socket.io" arrow>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
              alt="Socket.io logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
          <Tooltip title="Moment.js" arrow>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpuranjayjain.github.io%2Fmd-date-time-picker%2Fimages%2Fmomentjs.png&f=1&nofb=1"
              alt="Moment.js logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
        </div>
        <div className={classes.cardButtons}>
          <Link
            to={{
              pathname:
                "https://5f2b174a2b326fda336c769e--goofy-northcutt-afdeca.netlify.app/",
            }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" startIcon={<WebIcon />}>
              Live site
            </Button>
          </Link>
          <Link
            to={{
              pathname: "https://github.com/brodave318/chatt-app",
            }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" startIcon={<GitHubIcon />}>
              github
            </Button>
          </Link>
        </div>
      </CardContent>
    </div>
  );
}
