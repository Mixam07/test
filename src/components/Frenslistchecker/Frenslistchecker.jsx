import s from "./Frenslistchecker.module.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import validate, { lengh42 } from "../../utils/validator/validator";
import { useState } from "react";
import classNames from "classnames";

const FrenslistcheckerForm = (props) => {
    const [ result, setResult ] = useState("");
    const [ status, setStatus ] = useState(false);
    const formik = useFormik({
        initialValues: {
            wallet: ""
        },
        validate: (values) => {
            const result = validate(values, {wallet: lengh42}).wallet;

            if(result){
                setResult(result);
                setStatus(false);
            }else{
                setResult("");
            } 

            return validate(values, {
                wallet: lengh42
            })
        },
        onSubmit: async (values, {resetForm} ) => {
            setResult("Your wallet is not registered with either Frenslist or OG List Mint.");
            setStatus(false);

            props.walletList.Frenslist.forEach(item => {
                if(item === values.wallet){
                    setResult("Your wallet is registered for Frenslist Mint!");
                    setStatus(true);
                }
            });
            props.walletList.OGlist.forEach(item => {
                if(item === values.wallet){
                    setResult("Your wallet is registered for OG List Mint!");
                    setStatus(true);
                }
            });

            resetForm()
        },
    });
    return(
        <form className={s.info} onSubmit={formik.handleSubmit}>
            <div className={s.form}>
                <div className={classNames(s.result,{[s.red]: !status, [s.green]: status})}>
                    {result ? result : null}
                </div>
                <input className={s.input} name="wallet" type="text" onChange={formik.handleChange} value={formik.values.wallet} placeholder="Search your ETH wallet address" />
            </div>
            <button type="submit" className={s.btn}></button>
        </form>
    )
}

const Frenslistchecker = (props) => {
    return(
        <section className={s.frenslistChecker}>
            <div className={s.wrapper}>
            </div>
            <div className={s.navigation}>
                <NavLink to="/home" className={s.exit}></NavLink>
                <FrenslistcheckerForm {...props} />
            </div>
        </section>
    )
}

export default Frenslistchecker;