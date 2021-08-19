/* eslint-disable import/no-anonymous-default-export */
import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Notepad} from '@styled-icons/boxicons-solid/Notepad'
import useBkImage from 'hooks/useBkImage'

const useStyles = makeStyles({
  root: {
    maxWidth : '100%',
    maxHeight : '100vh',
  },
  media: {
    height: '100vh',
    width: '100%',

  },


});

export default ({name,path,description,setpagename}) => {
  useBkImage(name);
  const classes = useStyles();

useEffect(() => {
  setpagename(name)
 
}, [name,setpagename])

  return (
    <div>
    {name==="laptop2" && <h2>Hi !</h2>}
    <h1>{description} 
    {name==="laptop" && 
  
    <a href="https://kb.4d.com/assetid=78277" target="_blank" rel="noopener noreferrer">View Technotes <Notepad size={20}/></a>
    }
    
    </h1>

    <Card className={classes.root}> 
     
        <CardMedia
          className={classes.media}
          image={path[name]}
          title="portfolio pictures"
          component = "img"

        />
     
    
    
    </Card>
    </div>
  );
}