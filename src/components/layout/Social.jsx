import discordLogo from "../../assets/images/discord_logo.png";
import youtubeLogo from "../../assets/images/youtube_logo.png";
import playstoreLogo from "../../assets/images/playstore_logo.png";
import appstoreLogo from "../../assets/images/appstore_logo.png";

const Social = () => {
  return (
    <section className="social-container">
                    <a
                        href={"https://discord.gg/3uFNW3wgc7"}
                        target={"_blank"}
                        rel={"noreferrer"}>
                        <img src={discordLogo} className="social-media-logo discord-logo" alt="discordLogo"/>
                    </a>

                    <a
                        href={"https://www.youtube.com/channel/UCvN6289HbNyLP35U3HBkO4Q"}
                        target={"_blank"}
                        rel={"noreferrer"}>
                        <img src={youtubeLogo} className="social-media-logo" alt="youtubeLogo"/>
                    </a>
                    <a
                        href={"https://play.google.com/store/apps/details?id=com.toiletpapertycoon"}
                        target={"_blank"}
                        rel={"noreferrer"}>
                        <img src={playstoreLogo} className="social-media-logo" alt="playstoreLogo"/>
                    </a>
                    <a
                        href={"https://apps.apple.com/jp/app/toilet-paper-tycoon/id1576680326"}
                        target={"_blank"}
                        rel={"noreferrer"}>
                        <img src={appstoreLogo} className="social-media-logo appstore-logo"  alt="appstoreLogo"/>
                    </a>
    </section>
  )
}

export default Social
