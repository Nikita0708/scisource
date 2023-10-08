import React from "react";
import s from "./createproject.module.css";
import svg from "../../img/sprite.svg";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { MAIN_REG } from "../../routes/routes";

const CreateProject = () => {
    return (
        <>
            <HeaderReg />
            <section className={s.create}>
                <div className={s.container}>
                    <h1 className={s.title}>Create project</h1>
                    <div className={s.create_wrap}>
                        <div className={s.create_left}>
                            <img
                                src={require("../../img/profilephoto.jpg")}
                                alt="profilephoto"
                                className={s.create_img}
                            />
                            <span className={s.span_wrap}>
                                <svg
                                    className={s.img_svg}
                                    width={22}
                                    height={19.8}
                                >
                                    <use href={svg + "#icon-choosephoto"}></use>
                                </svg>
                                <span className={s.basic_span}>Upload</span>
                            </span>
                        </div>
                        <form className={s.basic_right}>
                            <label className={s.label}>
                                Project name
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Enter your project name"
                                />
                            </label>
                            <label className={s.label}>
                                Field of activity
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Enter your field of activity"
                                />
                            </label>
                            <label className={s.label}>
                                Technologies
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Enter your technologies"
                                />
                            </label>
                            <label className={s.label}>
                                Vacancies
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Enter open vacancies of the project "
                                />
                            </label>
                            <label className={s.label}>
                                Description
                                <textarea
                                    type="text"
                                    className={s.textarea}
                                    placeholder="Enter description of the project "
                                />
                            </label>
                            <Link to={MAIN_REG}>
                                <button className={s.submit}>Publish</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CreateProject;
