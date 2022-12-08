import shoesimage from './shoesimage.gif'
import { useNavigate } from "react-router-dom";


function LandingPage ({sneakers,favoriteButton}) {
    const navigate = useNavigate();
    return(
        <>
        {sneakers.map((s) => {
            return(
                <>
                <img src={s.imgSrc} />
                <button onClick={() => {favoriteButton()}}>favorite</button>
                </>
            )
        })
        }
        <div>
        
         <div class='container'>
            <img id="gif" src={shoesimage}/> <br />
            <h2> Buy and Sell Deadstock Sneakers</h2>
                    <button onClick={() => {
                        // update the favorites state

                        navigate('/MyFavorites')
                        }}>Favorite</button>
            
            </div> 

        </div>
            </>

            )
            
        }
        
        export default LandingPage