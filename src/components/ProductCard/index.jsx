import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function ProductCard({
  title,
  price,
  description,
  thumbnail,
  link,
}) {

  const formattedDescription = `${description.substring(0,140)}...`;
  return (
    <Card sx={
      {
        display: "flex",
        maxHeight: 400,
        maxWidth: 300,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginRight: 5,
        marginBottom: 5,
        alignItem: "center"
      }}>
      <CardMedia
        sx={{ width: '40%' }}
        component="img"
        image={thumbnail}
      />
      <CardContent>
        <Typography sx={{ fontWeight: "bold", marginBottom: "10px", textAlign: "center" }} variant="h6">
          {title}
        </Typography>
        <Typography sx={{ marginBottom: "8px", textAlign: "justify" }} variant="body2">
          {formattedDescription}
        </Typography>
        <Typography sx={{ fontWeight: "bold", marginBottom: "5px" }} variant="h5">
          {`R$ ${price}`}
        </Typography>
        <CardActionArea>
          <Link target="_blank" href={link} underline="always">
            Ver site
          </Link>
        </CardActionArea>
      </CardContent>
    </Card>
  )
}

export default ProductCard;
