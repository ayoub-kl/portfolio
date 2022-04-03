/* eslint-disable import/no-anonymous-default-export */
import React , {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Notepad} from '@styled-icons/boxicons-solid/Notepad'
import useBkImage from 'hooks/useBkImage'
import Technotes from './Technotes';
import {Backdrop} from './Technotes/styles'
import {TechLink} from '../styles'

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

export default ({name,path,description,setpagename,pagename}) => {
  // useBkImage(name);
  const classes = useStyles();
const [isModalOpen,setModal] = useState(false)

useEffect(() => {
  setpagename(name)
}, [name,setpagename])

const handleModal= () => {
setModal(prevState=>!prevState)
}


  return (
    <div>
    {name==="laptop2" && <h2>Hi !</h2>}
    <h1>{description} 
    {name==="laptop" && 
  
    <TechLink pagename={pagename} onClick={()=>handleModal()}>View Technotes <Notepad size={20}/></TechLink>
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
    {isModalOpen && <Technotes/>}
    {isModalOpen && <Backdrop onClick={()=>handleModal()}/>}
    </div>
  );
}
