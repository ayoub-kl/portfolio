/* eslint-disable import/no-anonymous-default-export */
import React , {Suspense, lazy} from 'react'
import {Wrapper} from './styles.js'
import { FlapperSpinner } from 'react-spinners-kit'
import device from 'device'
import useMediaQuery from 'hooks/useMediaQuery'

const Sidebar = lazy(() => import('../Sidebar'))
const Introduction = lazy(()=> import('../Introduction'))
export default () => {
let isCheck = useMediaQuery(device.medium)

    return(
        <Wrapper>

        {<Suspense fallback={
            <FlapperSpinner size={70} color="#29292e" loading={true} />
        }>
        <Sidebar/>  
        </Suspense>
    }
        <Suspense fallback ={
            <FlapperSpinner size={70} color="#29292e" loading={true} />
        }>
        <Introduction/>
        </Suspense>

        
        </Wrapper>
    
    
    )
    
    }