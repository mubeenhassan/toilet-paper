import ToiletPaper from "../../assets/images/toiletpaper_normal.png"
import Safe from "../../assets/images/safe.png"

const ContentCard = (props) => {
  return (
    <div
      className={`content-card-container ${
        props.cardOpacity && "opacity-card"
      }`}
    >
      <div className="left-card">
        <div className="card-text">
          <h1>{props.LeftHeading}</h1>
          {props.LeftText}
        </div>
        <div className="card-img">      
          <img className="left-main-img" src={ToiletPaper} />
          </div>
      </div>
      <div className="right-card">
        <div className="card-text">
          <h1>{props.RightHeading}</h1>
          {props.RightText}
        </div>
        <div className="card-img">      

        <img className="right-main-img" src={Safe} />
        </div>
      </div>
    </div>
  )
}

export default ContentCard
