import {Link} from 'react-router-dom'

 const MyFavorites = ({favorites}) => {
    return (
        <div style={{ border: '1px solid black', display: 'flex', flexWrap: 'wrap', gap: '27px' }}>
            <Link to="/">
                <button >HomePage</button>
            </Link>
            {
                favorites.map((fav) => {
                    return(
                        <div style={{backgroundColor: 'brown', border: '1px solid blue', height: '400px', display: 'flex', flexDirection: 'column', margin: '23px' }}>
                            <img src={fav.imgSrc} height="200px"/>
                            <p>{fav.name}</p>
                            <p>{fav.Price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyFavorites