// import './App.css';
// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }

// import React, {useEffect, useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// // import tileData from './tileData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */
// export default function TitlebarGridList() {

//   let url = 'https://albaocaso.mx/';
//     useEffect(() => {
//         presentacion_con();
//         // setMessages(msgs);
//     },[]);
//     const [presentacionLs, colocaPresentacion] = useState([])
//     const presentacion_con = async () =>{
//         const requestInfo={
//             method:'POST',
//             header: new Headers({
//                 'Content-Type': 'application/json',
//                 'Accept' : 'application/json'
//             })
//         }
//         const response = await fetch(url+'servicios/opt_web_presentacion_con.php', requestInfo)
//         const presentacionLs = await response.json();
//         if(presentacionLs.id === 'x'){
//             alert('No se encontraron resultados.');
//         }else{
//             colocaPresentacion(presentacionLs);
//             console.log(presentacionLs);
//         }
//     }

//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={180} className={classes.gridList}>
//         <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//           <ListSubheader component="div">December</ListSubheader>
//         </GridListTile>
//         {presentacionLs.map((tile) => (
//           <GridListTile key={tile.id}>
//             <img src={tile.ruta_imagen_t} alt={tile.presentacion} />
//             <GridListTileBar
//               title={tile.presentacion}
//               subtitle={<span>by: {tile.descripcion}</span>}
//               actionIcon={
//                 <IconButton aria-label={`info about ${tile.presentacion}`} className={classes.icon}>
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }



// import React, {useEffect, useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// // import tileData from './tileData';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 'auto',
//     height: 'auto',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//       'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
//   icon: {
//     color: 'white',
//   },
// }));

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *     featured: true,
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */
// export default function AdvancedGridList() {

  
//   let url = 'https://albaocaso.mx/';
//     useEffect(() => {
//         presentacion_con();
//         // setMessages(msgs);
//     },[]);
//     const [presentacionLs, colocaPresentacion] = useState([]);
//     const presentacion_con = async () =>{
//         const requestInfo={
//             method:'POST',
//             header: new Headers({
//                 'Content-Type': 'application/json',
//                 'Accept' : 'application/json'
//             })
//         }
//         const response = await fetch(url+'servicios/opt_web_presentacion_con.php', requestInfo)
//         const presentacionLs = await response.json();
//         if(presentacionLs.id === 'x'){
//             alert('No se encontraron resultados.');
//             colocaPresentacion([]);
//         }else{
//             colocaPresentacion(presentacionLs);
//             console.log(presentacionLs);
//         }
//     }

//   const classes = useStyles();

//   return (
//     <div>
//       <SimpleBottomNavigation/>
    
//     <div className={classes.root}>
//       <GridList cellHeight={450} spacing={1} className={classes.gridList}>
//         {presentacionLs.map((tile) => (
//           <GridListTile key={tile.ruta_imagen_t} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
//             <img src={tile.ruta_imagen_t} alt={tile.item} />
//             <GridListTileBar
//               title={tile.item}
//               titlePosition="top"
//               subtitle={tile.presentacion}
//               actionIcon={
//                 <IconButton aria-label={`more ${tile.item}`} className={classes.icon}>
//                   <MoreVertIcon />
//                 </IconButton>
//               }
//               actionPosition="left"
//               className={classes.titleBar}
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//     </div>
//   );
// }


// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';


// const useStyles_ = makeStyles({
//   root: {
//     width: 500,
//   },
// });

// export function SimpleBottomNavigation() {
//   const classes = useStyles_();
//   const [value, setValue] = React.useState(0);

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//     </BottomNavigation>
//   );
// }

// import React, {useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//     let url = 'https://albaocaso.mx/';
//     useEffect(() => {
//         presentacion_con();
//         // setMessages(msgs);
//     },[]);
//     const [presentacionLs, colocaPresentacion] = useState([])
//     const presentacion_con = async () =>{
//         const requestInfo={
//             method:'POST',
//             header: new Headers({
//                 'Content-Type': 'application/json',
//                 'Accept' : 'application/json'
//             })
//         }
//         const response = await fetch(url+'servicios/opt_web_presentacion_con.php', requestInfo)
//         const presentacionLs = await response.json();
//         if(presentacionLs.id === 'x'){
//             alert('No se encontraron resultados.');
//         }else{
//             colocaPresentacion(presentacionLs);
//             console.log(presentacionLs);
//         }
//     }

//   return (
//     // <Container>
//     <Grid container spacing={1}>
//       {presentacionLs.map((tile, index) => (
//         <Grid item xs={4}>
//         <Card className={classes.root} key={"card_presentacion_"+index}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="recipe" className={classes.avatar}>
//               {tile.id}
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={tile.presentacion}
//           // subheader="September 14, 2016"
//         />
//         <CardMedia
//           className={classes.media}
//           image={tile.ruta_imagen_t}
//           title="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {tile.presentacion}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded,
//             })}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Descripción:</Typography>
//             <Typography paragraph>
//               {tile.descripcion}
//             </Typography>
//             {/* <Typography paragraph>
//               Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//               heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//               browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//               and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//               pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//               saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//             </Typography>
//             <Typography paragraph>
//               Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//               without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//               medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//               again without stirring, until mussels have opened and rice is just tender, 5 to 7
//               minutes more. (Discard any mussels that don’t open.)
//             </Typography>
//             <Typography>
//               Set aside off of the heat to let rest for 10 minutes, and then serve.
//             </Typography> */}
//           </CardContent>
//         </Collapse>
//       </Card>
//       </Grid>
//       ))}
//     </Grid>
//     // </Container>
//   );
// }

// import React, {useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import CardHeader from '@material-ui/core/CardHeader';
// import Avatar from '@material-ui/core/Avatar';
// // import IconButton from '@material-ui/core/IconButton';
// // import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { red } from '@material-ui/core/colors';
// // import { purple } from '@material-ui/core/colors';
// import Container from '@material-ui/core/Container';
// import {
//     BrowserRouter as Router,
//     Link
//   } from "react-router-dom";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: "100%",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
//   secondary: {
//     backgroundColor: '#bbdefb',
//     color: 'black'
//   }
// });

// export default function ImgMediaCard() {
//   const classes = useStyles();
//   let url = 'https://albaocaso.mx/';
//       useEffect(() => {
//           presentacion_con();
//           // setMessages(msgs);
//       },[]);
//       const [presentacionLs, colocaPresentacion] = useState([])
//       const presentacion_con = async () =>{
//           const requestInfo={
//               method:'POST',
//               header: new Headers({
//                   'Content-Type': 'application/json',
//                   'Accept' : 'application/json'
//               })
//           }
//           const response = await fetch(url+'servicios/opt_web_socio_presentacion_con.php', requestInfo)
//           const presentacionLs = await response.json();
//           if(presentacionLs.id === 'x'){
//               alert('No se encontraron resultados.');
//           }else{
//               colocaPresentacion(presentacionLs);
//               console.log(presentacionLs);
//           }
//       }

//     return (
//         <Container>
//                 {presentacionLs.map((tile, index) => (
//                     <div>
//                         <Typography align="center" variant="h1" component="h2" gutterBottom>
//                             {tile.tipo}
//                         </Typography>
//                         <Grid container spacing={2}>
//                         {
//                             tile.hijos ? tile.hijos.map((hijo, index) => (
//                                 <Grid item xs={12} sm={6} md={4} key={"grid_item_"+index}>
//                                 <Link to={{
//                                     pathname: "/socio/ejemplo/"+hijo.id
//                                     // search: "?id_param="+hijo.id,
//                                     // hash: "#the-hash",
//                                     // state: { fromDashboard: true }
//                                 }} style={{ textDecoration:'none' }}>
//                                     <Card className={classes.root}>
//                                         <CardHeader
//                                             avatar={
//                                             <Avatar aria-label="recipe" className={classes.avatar}>
//                                                 {hijo.id}
//                                             </Avatar>
//                                             }
//                                             // action={
//                                             //   <IconButton aria-label="settings">
//                                             //     <MoreVertIcon />
//                                             //   </IconButton>
//                                             // }
//                                             title={hijo.tipo}
//                                             className={classes.secondary}
//                                             // subheader="September 14, 2016"
//                                         />
//                                         <CardActionArea>
//                                             <CardMedia
//                                             component="img"
//                                             alt="Contemplative Rephijo"
//                                             height="250"
//                                             image={hijo.ruta_imagen_t}
//                                             title="Contemplative Rephijo"
//                                             />
//                                             <CardContent>
//                                             <Typography gutterBottom variant="h5" component="h2">
//                                                 {hijo.item}
//                                             </Typography>
//                                             <Typography variant="body2" color="textSecondary" component="p">
//                                                 {hijo.presentacion}
//                                             </Typography>
//                                             </CardContent>
//                                         </CardActionArea>
//                                         {/* <CardActions>
//                                             <Button size="small" color="primary">
//                                             Share
//                                             </Button>
//                                             <Button size="small" color="primary">
//                                             Learn More
//                                             </Button>
//                                         </CardActions> */}
//                                     </Card>
//                                 </Link>
//                             </Grid>
//                             )) : ''
//                         }
//                         </Grid>
//                     </div>
//                     ))
//                 }
//         </Container>
//     );
// }

import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

// const images = [
//   {
//     url: '/static/images/grid-list/breakfast.jpg',
//     title: 'Breakfast',
//     width: '40%',
//   },
//   {
//     url: '/static/images/grid-list/burgers.jpg',
//     title: 'Burgers',
//     width: '30%',
//   },
//   {
//     url: '/static/images/grid-list/camera.jpg',
//     title: 'Camera',
//     width: '30%',
//   },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: '30%',
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(40% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
    const classes = useStyles();
    let url = 'https://albaocaso.mx/';
    useEffect(() => {
        presentacion_con();
        // setMessages(msgs);
    },[]);
    const [presentacionLs, colocaPresentacion] = useState([])
    const presentacion_con = async () =>{
        const requestInfo={
            method:'POST',
            header: new Headers({
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            })
        }
        const response = await fetch(url+'servicios/opt_web_socio_presentacion_con.php', requestInfo)
        const presentacionLs = await response.json();
        if(presentacionLs.id === 'x'){
            alert('No se encontraron resultados.');
        }else{
            colocaPresentacion(presentacionLs);
            console.log(presentacionLs);
        }
    }
    return (
        <Container>
            {presentacionLs.map((tile, index) => (
                <div key={"presentacion_"+index}>
                    <Typography align="center" variant="h2" component="h3" gutterBottom noWrap={true}>
                        {tile.tipo}
                    </Typography>
                    <Grid container spacing={1}>
                        {tile.hijos ? tile.hijos.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={"grid_item_"+index}>
                            <ButtonBase
                                focusRipple
                                //   key={"presentacion_"+image.id}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: '100%',
                                    height: '250px'
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                    backgroundImage: `url(${image.ruta_imagen_t})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <Link to={{
                                    pathname: "/socio/ejemplo/"+image.id
                                    // search: "?id_param="+hijo.id,
                                    // hash: "#the-hash",
                                    // state: { fromDashboard: true }
                                    }} style={{ textDecoration:'none' }}>
                                    <span className={classes.imageButton}>
                                        <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                        >
                                        {image.item}
                                        <span className={classes.imageMarked} />
                                        </Typography>
                                    </span>
                                </Link>
                            </ButtonBase>
                        </Grid>
                        )) : ''}
                    </Grid>
                </div>
            ))}
        </Container>
    );
}