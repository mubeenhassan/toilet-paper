import "../../assets/css/home.css"
import arrowImage from "../../assets/images/arrow.png"
import chart from "../../assets/images/chart.png"
import ContentCard from "../layout/ContentCard"
import { GlobalRanking } from "../layout/GlobalStatisticsRanking"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  Tooltip,
  CartesianGrid,
  Legend,
  Brush,
  ErrorBar,
  AreaChart,
  Area,
  Label,
  LabelList,
} from "recharts"
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

const data = [
  { name: "Page A", uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: "Page B", uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: "Page C", uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: "Page E", uv: 278, pv: null, amt: 2400, uvError: 28 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: "Page G", uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: "Page H", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page I", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page J", uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
]

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
      <div className="chart-table-container">
        <div className="chart-contaner">
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="uv" />
            <YAxis dataKey="uv" />
            <CartesianGrid stroke="white" strokeSolid={8} />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </div>
        <GlobalRanking />
      </div>
    </div>
  )
}

export default Home
