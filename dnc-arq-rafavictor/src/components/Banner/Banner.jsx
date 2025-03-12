import './Banner.css'

function Banner(props) {
  return (
    <div className="banner dFlex alEnd" style={{backgroundImage: `url(${props.image})`}}>
        <div className="container">
            <div className="titlePanel dFlex alCenter jcCenter">
                <h1>{props.title}</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner