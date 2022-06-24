import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const Movies = () => {
  const [arr, addArray] = React.useState([]);

  const Add = () => {
    console.log("Clicked");
    addArray((list) => [
      ...list,
      { title: `List ${list.length + 1}`, id: list.length + 1 },
    ]);
    console.log(arr);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={8}></Grid>
      <Grid xs={4}>
        <Fab onClick={Add} variant="extended">
          <AddIcon sx={{ mr: 1 }} />
          Add
        </Fab>
      </Grid>

      {arr.map((data) => (
        <Grid item key={data.id} xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body" color="text.secondary">
                  <textarea rows={8} cols={12}></textarea>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;
