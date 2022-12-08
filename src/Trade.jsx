import {Link} from 'react-router-dom'
const Trade = ({view1, buyNow}) => {
    return(
        <div>
            <Link to="/">
                <button>HomePage</button>
            </Link>
            <div>
            {
                view1.map((viewing) => {
                    return(
                        <div style={{ display: 'flex', border: '3px solid black', gap: "20px", margin: '30px', backgroundColor: '#f09c1f' }}>
                            <div >
                                <img src={viewing.imgSrc} height='500px' />
                            </div>
                            <div style={{ padding: '30px'}}>
                                <h1>{viewing.name}</h1>
                                <h2>{viewing.Price}</h2>
                                <h4>{viewing.Description}</h4>
                                <Link to='/Done'>
                                    <button onClick={() => {buyNow()}}>BUY NOW!!!</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            </div>
           
        </div>
    )
}

export default Trade