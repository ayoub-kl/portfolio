
import {React} from 'react'
import {TechnContainer,TechnTitle, TechCardsWrapper} from './styles.js'
import config from './config'
import TechCard from './TechCard'

export default () => {

return (
    <TechnContainer>
    <TechnTitle>
    Technote subjects :
    </TechnTitle>

    <TechCardsWrapper>
        
{config.map((item,index) => {
    return <TechCard key={index} {...item} />
    })}
    
    </TechCardsWrapper>

   
    </TechnContainer>
)

}