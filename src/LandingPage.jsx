import shoesimage from './shoesimage.gif'
import {Link} from 'react-router-dom'

function LandingPage ({sneakers,favoriteButton, view}) {

    return(
        <div>
            <div class='container' style={{border: '1px solid black', textAlign: 'center', backgroundColor: 'black'}}>
                <img id="gif" src={shoesimage} style={{ height: '500px', width: '40%'}} /> <br />
                <h2 style={{color: 'white'}}> Buy Sneakers Art</h2>
                <Link to='/MyFavorites'>
                    <button>Favorite</button>
                </Link>
                <Link to='/Trade'>
                    <button>View</button>
                </Link>
            </div> 
            <div style={{ border: '1px solid black', display: 'flex', flexWrap: 'wrap', gap: '27px', backgroundColor: '#7e0880'  }}>
            {
            sneakers.map((s) => {
                return(
                    <div style={{border: '1px solid blue',backgroundColor:'brown', height: '400px', display: 'flex', flexDirection: 'column', margin: '23px'}}>
                        <img onClick={()=>{view(s)}} id='shoes' src={s.imgSrc} height="290px" width='475px'  />
                        <h3>{s.name}</h3>
                        <h3>{s.Price}</h3>
                        <button onClick={() => {favoriteButton(s)}}>favorite</button>
                    </div>
                    )
                })
            }

            </div>
            <div>
            </div>
        </div>
)
} 
export default LandingPage