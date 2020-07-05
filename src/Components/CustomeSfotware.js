import React from 'react'
import { makeStyles, useTheme, Grid } from '@material-ui/core';
import CoustomerStyle from '../assets/jss/CustomeSfotwareStyle';
import Back from'../assets/imges/backArrow.svg'
import ForwardIcon from'../assets/imges/forwardArrow.svg'
import { Link } from 'react-router-dom';
const sutText=`
Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.

Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.

Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.

We create exactly what you what, exactly how you want it.`



const  IconButtonComponents=(props)=>{
return (
  <IconButton  className={props.classes.Iconbutton}
    onClick={() => props.setSelectedIndex(props.index)}
  component={Link}
  to={props.to}

  >
    <img src={props.icon} alt={props.alt} />

  </IconButton>
)

}


const listItem=[
  {
    title:"Save Energy",
icon:"",
alt:""
  },
  {
    title:"Save Time",
icon:"",
alt:""
  },
  {
    title:"Save Money",
icon:"",
alt:""
  },

]

export const CustomeSfotware = (props) => {
  const useStyles = makeStyles(CoustomerStyle);
  const theme = useTheme();
  const classes = useStyles();
  const ItemsColumn=(item)=>{
  <Grid item direction="column">
    <Grid item>
      <Typography variant="h2">
        {item.text}
      </Typography>
    </Grid>
    <Grid item>
      <img src={item.icon} alt={item.alt} />

    </Grid>
  </Grid>

}
  return (
  <Grid container spacing={1} direction="column" >
     <Grid container spacing={1} direction="row">
        <Grid item className={classes.arrowContainer}
        style={{
          marginLeft:"-3.3em",
          marginRight:"1em"
        }}>
          <IconButtonComponents classes={classes}
            setSelectedIndex={porps.setSelectedIndex(0)}
            to="/services"
            alt="back to the back"
            icon={Back}/>
       </Grid>
<Grid container spacing={1} direction="column" className={classes.heading}>

       <Grid item>
         <Typography variant="h2" color="initial" style={{
            color: '#0b72b9',
            fontFamily: 'Raleway',
            fontSize: 40,
            fontWeight: 700,
         }}>
Custom Software Development
    </Typography>

       </Grid>
<Grid item style={{marginTop:"9px",
padding:"10px"}}>
  <Typography variant="subtitle" color="initial">
            {sutText}

  </Typography>
</Grid>

<Grid item>
            <IconButtonComponents classes={classes}
              setSelectedIndex={props.setSelectedIndex(1)}
              to="/mobileapps"
              alt="ForwardIcon to the back"

              icon={ForwardIcon} />

</Grid>

     </Grid>

<Grid item container direction="row">
  {someItems.map((item,index)=>
    <ItemsColumn item={item}/>
  )}

</Grid>
   </Grid>
  )
}
