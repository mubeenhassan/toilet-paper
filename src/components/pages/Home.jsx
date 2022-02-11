import "../../assets/css/home.css"
import arrowImage from "../../assets/images/arrow.png"
import ContentCard from "../layout/ContentCard"

import Social from "../layout/Social"

const Klorolle = (
  <p>
    Das Herz der App - die Klorolle. <br />
    Eine unendliche Quelle an Toilletenpapier. <br />
    <br />
    Sie ermöglicht es dir,
    <br />
    so viel Klopapier zu sammeln wie du willst. <br />
    <br />
    Dein Toilletenpapierreichtum ist nur <br />
    ein Paar Klicks entfernt! <br />
  </p>
)

const Maps = (
  <p>
    Auf deinem Weg zum Toilletenpapier-Mogul wirst <br />
    du durch viele Verschiedene Orte reisen.
    <br />
    <br />
    Jeder Ort birgt seine Eigenheiten und Eigenschaften, <br />
    die dir das Leben erleichtern oder erschweren können. <br />
  </p>
)

const PaperPerClick = (
  <p>
    Durch einzigartige Upgrades <br />
    kannst du den Wert jedes einzelnen Klicks steigern.
    <br />
    <br />
    Dies ist auf Dauer eine sehr lohnenswerte Investition.
    <br />
  </p>
)

const Genger = (
  <p>
    Die Konkurrenz schickt im Kampf alles raus, was sie hat.
    <br />
    <br />
    Mache dich auf unterschiedliche beängstigende Kreaturen gefasst.
    <br />
    <br />
    Im Überlebenskampf macht die Konkurenz vor nichts halt <br />
    und denkt sich immer wieder neue Technologien aus, <br />
    um deinen Erfolg zu schwächen.
    <br />
  </p>
)

const Goldrausch = (
  <p>
    Nach jedem Upgrade-Kauf erlangst du <br />
    einen temporären Goldrausch-Bonus.
    <br />
    <br />
    Bei dem deine Rolle nicht nur goldig wird, <br />
    sondern du auch die doppelte Papiermenge pro Klick bekommst. <br />
  </p>
)

const Gebäude = (
  <p>
    Mit der Zeit sammelst du immer mehr Erfahrung <br />
    und bekommst Zugriff auf neuartige Technologien,
    <br />
    die dich im Kampf verteidigen können.
    <br />
    <br />
    Die KI-Tier-Implementierung von <br />
    Mystery Mr. Moldiy kann dir dabei helfen.
    <br />
  </p>
)
const PaperPerSecond = (
  <p>
    Lasse deine Rolle für dich arbeiten,
    <br />
    selbst wenn du die App gerade nicht offen hast.
    <br />
    <br />
    Doch die 10-fache Menge bekommst du nur,
    <br />
    solange du die App geöffnet hast. <br />
    <br />
    Dies ist eher etwas für den langfristigen Erfolg, <br />
    doch vergiss die Reinvestition nicht! <br />
  </p>
)

const GoldenUpgrades = (
  <p>
    In jeder Runde hast die Möglichkeit goldene Upgrades <br />
    von besonders starken Gegner aufzusammeln.
    <br />
    <br />
    Damit kannst du deine Gebäude temporär verbessern.
    <br />
  </p>
)
const Home = (props) => {
  return (
    <div className="container">
      <div className="home-title-sec">
        <h1 className="home-title">Toilet Paper Tycoon</h1>
        <Social />
        <img
          src={arrowImage}
          alt={"arrow image"}
          className={`down-arrow ${props.downArrow ? "arrow-none" : ""}`}
        />
      </div>
      <ContentCard
        LeftHeading="Klorolle"
        RightHeading="Maps"
        LeftText={Klorolle}
        RightText={Maps}
        {...props}
      />
      <ContentCard
        LeftHeading="Paper per click"
        RightHeading="Gegner"
        LeftText={PaperPerClick}
        RightText={Genger}
        {...props}
      />
      <ContentCard
        LeftHeading="Goldrausch"
        RightHeading="Gebäude"
        LeftText={Goldrausch}
        RightText={Gebäude}
        {...props}
      />
      <ContentCard
        LeftHeading="Paper per second"
        RightHeading="Golden-Upgrades"
        LeftText={PaperPerSecond}
        RightText={GoldenUpgrades}
        {...props}
      />
    </div>
  )
}

export default Home
