/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/mainImage.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="title-brand">
            <h2 className="presentation-subtitle p-center">
              <p style={{ textAlign: "right", color: "white" }}>
                אסלי הינה אפליקציה חברתית המספקת תוכן ממוקד ותרגילים מעשיים
                להתפתחות אישית על ידי אימון ופיתוח של הרגלים חדשים ומיטיבים
                בהתאמה אישית
              </p>

              <p style={{ textAlign: "right", color: "white" }}>
                אנחנו מאמינים שהפרט שואף להתפתח במטרה להגשים את עצמו ולשפר את
                איכות חייו
              </p>
              <p style={{ textAlign: "right", color: "white" }}>
                אנחנו מאמינים שקבוצה העושה צעדים יחדו מאפשרת לפרט לפתח הרגלים
                רבים יותר במהירות גבוהה יותר
              </p>
              <p style={{ textAlign: "right", color: "white" }}>
                אנו מאמינים שחיבור והעצמה של נותני השירותים וצורכי התוכן יפתח
                קהילה תומכת ומשתפרת המשפיעה לטובה על החברה והעולם
              </p>
              <p style={{ textAlign: "right", color: "white", marginTop: 20 }}>
                לימדו הגשימו ומצו את הפוטנציאל הגדול והאמיתי הטמון בכם בעזרת
                תכנים ייעודים ותרגילים אמיתיים ממיטב הכותבים ובעלי המקצוע. Usly
                מביאה לכם מגוון תכנים ושיעורי חיים ישימים שמטרתם שיפור עצמי. כל
                התכנים שלנו נועדו לעזור לך להשיג את מלוא הפוטנציאל המוחי שלך,
                הגוף, הנשמה והקריירה שלך. עם נושאים מרכזיים כמו מנהיגות, ביטחון,
                יזמות, פרודוקטיביות, בריאות וכושר, מערכות יחסים, אושר, רוחניות
                ועוד, Usly היא התחנה המרכזית והיחידה שלך להתפתחות אישית בכל
                תחומי החיים
              </p>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
