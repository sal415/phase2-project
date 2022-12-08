import {Link} from 'react-router-dom'
const Trade = ({favorites, sneakers,outOfStock}) => {
    return(
        <>
        
           {
               sneakers.map((s) => {
                   return(
                       <div>
                    <h2>{s.name}</h2>
                    <img className='tradeImg' src={s.imgSrc} />
                    <button onClick={() => {outOfStock()}}>Buy:{s.priceRange}</button>
                    <button>Sell:</button>
                    </div>
                )
            })
           }
        
        </>
    )
}

export default Trade