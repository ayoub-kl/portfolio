/* eslint-disable import/no-anonymous-default-export */
import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Notepad} from '@styled-icons/boxicons-solid/Notepad'


const useStyles = makeStyles({
  root: {
    maxWidth : '100%',
    maxHeight : '950px',
  },
  media: {
    height: '100%',
    width: '100%',

  },


});

export default ({name,path,description,setpagename}) => {
  const classes = useStyles();

useEffect(() => {
  setpagename(name)

}, [name,setpagename])

  return (
    <>
    {name==="laptop2" && <h2>Hi !</h2>}
    <h1>{description}</h1>
    {name==="laptop" && 
  
    <a href="https://kb.4d.com/assetid=78277" target="_blank" rel="noopener noreferrer">View Technotes <Notepad size={20}/></a>
    }
    <Card className={classes.root}> 
     
        <CardMedia
          className={classes.media}
          image={path[name]}
          title="portfolio pictures"
          component = "img"

        />
     
    
    
    </Card>
    </>
  );
}
