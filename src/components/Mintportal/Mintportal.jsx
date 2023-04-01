import flies from "../../assets/gif/flies_mobile.gif";

import s from "./Mintportal.module.css";
import classNames from "classnames";

const Mintportal = (props) => {
    return(
        <section className={s.home}>
            <div className={s.wrapper}>
                <div className={s.flies}>
                    <img src={flies} alt="flies" />
                </div>
            </div>
            <div className={s.navigation}>
                <nav className={s.social}>
                    {
                        props.socialNetworks.twitter.isActive ?
                        <a href={props.socialNetworks.twitter.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.twitter.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.twitter.isActive})}></div>
                    }
                    {
                        props.socialNetworks.etherscan.isActive ?
                        <a href={props.socialNetworks.etherscan.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.etherscan.isActive})}></a> :
                        <duv className={classNames(s.href, {[s.unactive]: !props.socialNetworks.etherscan.isActive})}></duv>
                    }
                    {
                        props.socialNetworks.opensea.isActive ?
                        <a href={props.socialNetworks.opensea.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.opensea.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.opensea.isActive})}></div>
                    }
                </nav>
                <button className={s.button}></button>
                <form className={s.form}>
                    <h1 className={s.title}>Mint status: <span className={s.special}>Frenslist</span></h1>
                    <div className={s.settings}>
                        <div className={s.wrap}>
                            <div className={s.caption}>Amount</div>
                            <div className={s.info}>
                                <span className={s.dash}></span>
                                <div className={s.text}></div>
                            </div>
                        </div>
                        <div className={s.wrap}>
                            <div className={s.caption}>Total</div>
                            <div className={s.info}>
                                <span className={s.dash} ></span>
                                <div className={s.text}>ETH</div>
                            </div>
                        </div>
                    </div>
                    <button className={s.btn}>Connect</button>
                </form>
            </div>
        </section>
    )
}

export default Mintportal; 