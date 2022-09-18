import React, { useState } from "react";
import useLocationContext from "../../hooks/useLocationContext";
import useHandleInput from "../../hooks/useHandleInput";
import styles from "./sendIp.module.scss";

export const SendIp = () => {
    const {getLocationFromIp} = useLocationContext();
    const [input, handleInput] = useHandleInput();

    return(
        <>
            <div className={styles.container}>
                <section className={styles.sectionIP}>
                    <article className={styles.sectionIPInput}>
                        <input className="" type="text" value={input} onChange={ event => {handleInput(event)}}/>
                        <button onClick={()=>getLocationFromIp(input)}>Send IP</button>
                    </article>
                </section>
            </div>
        </>
    )
}

export default SendIp;