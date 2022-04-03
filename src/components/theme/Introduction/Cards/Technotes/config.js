/* eslint-disable import/no-anonymous-default-export */
import docker from 'assets/technotes/docker.png'
import git from 'assets/technotes/git.png'
import summit from 'assets/technotes/4Dsummit.jpg'

export default  [
    {
        name : "docker" ,
        description : "A technote on DOCKER and its usage with a 4D server.", 
        path : docker,
        url: "https://kb.4d.com/assetid=78367",
    },
    {
        name : "git" , 
        description : "A technote on GIT describing general and specific usage within a 4D client in project mode.", 
        path : git,
        url:"https://kb.4d.com/assetid=78277",
    },
    
    {
        name : "Dynamic_Forms" , 
        description : "A technote on how to create and manipulate dynamic forms in 4D.", 
        path : summit,
        url:"https://www.youtube.com/watch?v=-Fmf0Gd2Jf4",
        isVideo : true
    },
    

    
]