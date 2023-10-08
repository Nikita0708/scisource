import React from "react";
import s from "./footer.module.css";
import { Link } from "react-router-dom";
import svg from "../../img/sprite.svg";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.top_wrap}>
                    <Link className={s.logo_link}>
                        <svg className={s.logo_svg} width={162} height={38}>
                            <use href={svg + "#icon-logo"}></use>
                        </svg>
                    </Link>
                    <div className={s.left_wrap}>
                        <h2 className={s.title}>Contact us</h2>
                        <span className={s.tel}>+3800 000 000</span>
                        <span className={s.email}>
                            nasaspacemarketplace@gmail.com
                        </span>
                        <div className={s.svg_wrap}>
                            <svg className={s.svg_inst} width={20} height={20}>
                                <use href={svg + "#icon-instagram"}></use>
                            </svg>
                            <svg className={s.svg} width={20} height={20}>
                                <use href={svg + "#icon-linked"}></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <span className={s.footer_text}>
                    © 2023 NASA Space Project Marketplace
                </span>
            </div>
        </footer>
    );
};

export default Footer;
