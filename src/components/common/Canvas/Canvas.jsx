import s from "./Canvas.module.css";
import { Transition } from "react-transition-group";
import classNames from "classnames";

const Canvas = ({type = 1, ...props}) => {
    const classGenerator = (state) => {
        if(state === "entering") return "animate__animated animate__fadeIn"
        else if(state === "exiting") return "animate__animated animate__fadeOut"
    }

    return(
        <Transition
        in={props.isShow}
        timeout={500}
        mountOnEnter
        unmountOnExit
        >
            {state => 
            <div className={classNames(classGenerator(state), s.popup, s[`type${type}`])}>
                <div className={s.wrapper}>{props.children}</div>
            </div>}
        </Transition>
    )
}

export default Canvas;