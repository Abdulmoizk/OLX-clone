import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Pic from "../../assets/animals.png";

export default function ActionAreaCard() {
  return (
    <div className="container">
      <div className="d-flex gap-2 flex-wrap">
        <Card sx={{ width: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={Pic} alt="Mobile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rs 500
              </Typography>
              <br />
              <Typography gutterBottom variant="p" component="div">
                Australian Bull
              </Typography>
              <br />
              <Typography gutterBottom variant="p" component="div">
                Karachi, Pakistan <br />1 week ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
       </div>
    </div>
  );
}
