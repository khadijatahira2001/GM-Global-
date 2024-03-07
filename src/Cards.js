import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./CardStyle.css";
import Typography from "@mui/material/Typography";

import { CardActionArea } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <div className="CardStyle">
      <Card className="card1">
        <CardActionArea sx={{ width: 200 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/card1.jpg"
            alt=""
          />
          <CardContent>
            <Typography variant="h4" component="div"></Typography>
            <Typography variant="body2">Building & Property</Typography>
          </CardContent>
        </CardActionArea>

        {/* {Another card} */}
        <CardActionArea sx={{ width: 200 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/card2.jpg"
            alt=""
          />
          <CardContent>
            <Typography variant="h4" component="div"></Typography>
            <Typography variant="body2">
              Infrastructure & Transportation
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea sx={{ width: 200 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/card2.jpg"
            alt=""
          />
          <CardContent>
            <Typography variant="h4" component="div"></Typography>
            <Typography variant="body2">
              Infrastructure & Transportation
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea sx={{ width: 200 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/card2.jpg"
            alt=""
          />
          <CardContent>
            <Typography variant="h4" component="div"></Typography>
            <Typography variant="body2">
              Infrastructure & Transportation
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
