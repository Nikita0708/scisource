import React from "react";
import s from "./mainreg.module.css";
import { Link } from "react-router-dom";
import { PROJECT_APPLY } from "../../routes/routes";

const MainReg = ({ projects }) => {
    return (
        <section className={s.main}>
            <ul className={s.projects_list}>
                {projects.map(({ logoPath, title, description }) => (
                    <li className={s.project}>
                        <img src={logoPath} alt="logo" />
                        <div className={s.mid_wrap}>
                            <h2 className={s.title}>{title}</h2>
                            <p className="description">{description}</p>
                        </div>
                        <Link to={PROJECT_APPLY}></Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MainReg;
