import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ExperienceCard(props) {
  return (
    <div>
      <div className="card card-lg">
        <Card sx={{ maxWidth: 245, opacity: 0.8 }}>
          <CardActionArea href={props.link}>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt={props.alt}
            />
            <CardContent>
              <h3>{props.title}</h3>
              <p>{props.content}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="card card-sm">
        <Card sx={{ opacity: 0.8 }}>
          <CardActionArea href={props.link}>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt={props.alt}
            />
            <CardContent>
              <h3>{props.title}</h3>
              <p>{props.content}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}