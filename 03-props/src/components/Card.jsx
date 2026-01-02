const Card = (props) => {
    
    return (
    <div className="card">
        <div className="parent">
          <div className="top">
             <img src={props.Logo}> </img>
          </div>     
        </div>
    </div>
    )
}

export default Card