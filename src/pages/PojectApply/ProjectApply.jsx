import React from "react";
import s from "./projectapply.module.css";
import Footer from "../../components/Footer/Footer";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import { Link } from "react-router-dom";
import { MAIN_REG } from "../../routes/routes";

const ProjectApply = ({
    logoUrl,
    title,
    description,
    sphere,
    technologies,
}) => {
    return (
        <>
            <HeaderReg />
            <section className={s.project}>
                <div className={s.container}>
                    <div className={s.left}>
                        <h1 className={s.left_title}>project you respond to</h1>
                        <div className={s.left_wrap}>
                            <img
                                src={require("../../img/profilephoto.jpg")}
                                alt="profilephoto"
                                className={s.img}
                            />
                            <div className={s.left_right}>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Project name</span>
                                    <span className={s.user_data}>*Name*</span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>
                                        Field of activity
                                    </span>
                                    <span className={s.user_data}></span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Technologies</span>
                                    <span className={s.user_data}></span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Vacancies</span>
                                    <span className={s.user_data}></span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Description</span>
                                    <span className={s.user_data}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className={s.respond}>
                        <h1 className={s.respond_title}>
                            Respond to the vacancy
                        </h1>
                        <label className={s.label}>
                            Name of vacancy
                            <input
                                type="text"
                                className={s.input}
                                placeholder="Enter the name of the vacancy"
                            />
                        </label>
                        <label className={s.label}>
                            Your skills
                            <input
                                type="text"
                                className={s.input}
                                placeholder="Enter your skills"
                            />
                        </label>
                        <label className={s.label}>
                            Competence
                            <input
                                type="text"
                                className={s.input}
                                placeholder="Ex: Junior/Middle/Senior"
                            />
                        </label>
                        <label className={s.label}>
                            Cover letter
                            <textarea
                                type="text"
                                className={s.textarea}
                                placeholder="Enter your cover letter"
                            />
                        </label>
                        <Link to={MAIN_REG}>
                            <button className={s.submit}>Send</button>
                        </Link>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProjectApply;
