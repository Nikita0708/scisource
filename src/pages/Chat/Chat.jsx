import React from "react";
import s from "./chat.module.css";
import { Link } from "react-router-dom";
import profile from "../../img/profile.svg";
import attach from "../../img/attach.svg";
import send from "../../img/send.svg";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import Footer from "../../components/Footer/Footer";
import { PROJECT_RESPONSE } from "../../routes/routes";
const Chat = () => {
    return (
        <>
            <HeaderReg />
            <section className={s.section}>
                <div className={s.container}>
                    <div className={s.left}>
                        <Link to={PROJECT_RESPONSE} className={s.back}>
                            Go back to the responses
                        </Link>
                        <div className={s.person}>
                            <div className={s.top}>
                                <span className={s.name}>Name</span>
                                <img src={profile} alt="" />
                            </div>
                            <div className={s.wrapper}>
                                <span className={s.span}>Project name</span>
                                <span className={s.user_data}>*Name*</span>
                            </div>
                            <div className={s.wrapper}>
                                <span className={s.span}>Vacancies</span>
                                <span className={s.user_data}>*Vacancies*</span>
                            </div>
                            <div className={s.wrapper}>
                                <span className={s.span}>Skills</span>
                                <span className={s.user_data}>*Skills*</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.chat}></div>
                        <form className={s.form}>
                            <img src={attach} alt="" />
                            <input type="text" className={s.input} />
                            <button className={s.send}>
                                <img src={send} alt="" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Chat;
