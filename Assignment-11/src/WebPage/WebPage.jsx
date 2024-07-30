import React from "react";
import logoImg from "../assets/logo.png";
import section_1_img from "../assets/Section1.png";
import styles from "./style.module.css";
import section_2_img from "../assets/section2.png";

const WebPage = () => {
  return (
    <>
      {/* navbar start */}
      <nav>
        <div className={styles.nav_main_box}>
          <div className={styles.nav_innher_box}>
            <div className={styles.nav_saction}>
              <img width="100%" src={logoImg} alt="" />
            </div>
            <div className={styles.nav_innher2}>
              <p className={styles.nav_innher3}>Home</p>
              <p className={styles.nav_innher3}>About us</p>
              <div className={styles.nav_innher3}>
                <select className={styles.select_tag} name="" id="">
                  <option selected disabled value="">
                    Training
                  </option>
                  <option value="">---abc---</option>
                  <option value="">---abc---</option>
                </select>
              </div>
              <p className={styles.nav_innher3}>Conttact us</p>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar end */}
      {/* section 1 start */}
      <section>
        <div className={styles.section_1_main_box}>
          <div className={styles.section_1_box}>
            <div className={styles.section_1_inher_box_1}>
              <div className={styles.heading_box}>
                <h1>
                  Introduction to
                  <br />
                  Jawan Pakistan
                </h1>
              </div>
              <div className={styles.section_1_para}>
                <p>
                  The foundation of every state is the education and skills set
                  of its youth. Jawan Pakistan is <br /> such an organization of
                  Pakistan who is not only working on youth education but also
                  <br />
                  enhancing skills set in youth either Free of cost or in a very
                  low cost. This initiative, <br /> initially developed by a
                  single person and with almost no seed capital, promotes <br />
                  entrepreneurship and innovation and Sustainable Development
                  Goal, which promotes <br /> inclusive and sustainable economic
                  growth.
                </p>
              </div>
            </div>
            <div className={styles.section_1_img}>
              <img width="100%" src={section_1_img} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* section 1 end */}
      {/* section 2 start */}
      <section>
        <div className={styles.section_2_main_box}>
          <div className={styles.section_2_box}>
            <div className={styles.section_2_inher_box_1}>
              <div className={styles.heading_2_box}>
                <h1>
                  Mission And Vision
                  <br />
                  Behind Jawan Pakistan
                </h1>
              </div>
              <div className={styles.section_2_para}>
                <p>
                  Our vision is to bring our students into the 21st century
                  through innovation and modern <br /> technology. To create a
                  better every day life for every people. This program is not
                  only <br />
                  impacting the youth in monetary perspective but it is also
                  creating some deep-rooted, <br /> long-term psychological
                  effects e.g. minimizing frustration among the unemployed
                  <br /> youth.
                </p>
                <br />
                <p>
                  Our mission is to provide high quality education that connects
                  young people with <br /> opportunities to transform their
                  lives. The educated youngsters who remain unemployed <br />{" "}
                  gets frustrated, depressed and disheartened when they do not
                  succeed in getting their <br /> dream jobs. This training
                  reinforces the educated youth to earn well through
                  freelancing, <br /> develop variety of skills through
                  specified domains and promote entrepreneurial culture <br />{" "}
                  that diverts youths potentials for constructive purposes. This
                  energy diversion definitely <br /> make the youth more
                  confident, self-reliant and constructive asset for a
                  progressing <br /> economy.
                </p>
              </div>
            </div>
            <div className={styles.section_2_img}>
              <img width="100%" src={section_2_img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebPage;
