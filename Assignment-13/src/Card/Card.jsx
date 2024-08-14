// import React from "react";
// import styles from "../ECommerceApp/home.module.css";

// const Card = ({ img, title, desc, id, price }) => {
//   const textHeading = "men's clothin";
//   return (
//     <div className={styles.card_box}>
//       <div className={styles.card_innher_section}>
//         <img height="100%" width="100%" src={img} alt="" />
//       </div>
//       <div>
//         <p>{textHeading}</p>
//         <h3> {title}</h3>
//         <p>{desc}</p>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Cards({ title, id, img, desc, category }) {
  return (
    <Card sx={{ width: 345, height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography>{category}</Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
