import React from "react";
import s from "./profileedit.module.css";

// Делаем чтобы текущее имя пользователя было в плейсхолдере

const ProfileEdit = ({
  userName,
  userSkills,
  userOccupation,
  userLinkedIn,
}) => {
  return (
    <section className={s.section}>
      <div className={s.top_wrap}>
        <img src="/" alt="profile" className={s.profile_img} />
        <button className={s.change_btn} type="button">
          Change photo
        </button>
      </div>
      <form className={s.form}>
        <label className={s.label}>
          Your Name:
          <input
            type="text"
            name="userName"
            id="userName"
            className={s.input}
            placeholder={userName}
          />
        </label>
        <label className={s.label}>
          Skills:
          <textarea
            type="text"
            name="userSkills"
            id="userSkills"
            className={s.textarea}
            placeholder={userSkills}
          />
        </label>
        <label className={s.label}>
          Skills:
          <input
            type="text"
            name="userOccupation"
            id="userOccupation"
            className={s.input}
            placeholder={userOccupation}
          />
        </label>
        <label className={s.label}>
          LinkedIn:
          <input
            type="text"
            name="userLinkedIn"
            id="userLinkedIn"
            className={s.input}
            placeholder={userLinkedIn}
          />
        </label>
        <button type="submit" className={s.save_btn}>
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default ProfileEdit;
