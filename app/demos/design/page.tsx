import styles from "./page.module.css";

function description(description, color,title="") {
  return (
    <div className={styles.descriptionContainer}>
      <div style={{backgroundColor: color}} className={styles.colorBox}></div>
      <p className={styles.descriptionText}> <strong>{title}</strong>{description}</p>
    </div>
  );
}
export default function Design() { 
  return (
    <div className={styles.mainContainer}>
      <div className={styles.page}>
        <p className={styles.title}>בואו לבשל איתי.</p>
        <p className={styles.subtitle}>כמה פעמים מצאתם את עצמכם במטבח, מתלבטים וחושבים:</p>
        <p className = {styles.bold}>אם רק היה מי שינחה אותי עכשיו.</p>
        {description("בואו לבשל איתי היא פלטפורמת וידאו אינטראקטיבית להורים לילדים צעירים המיועדת למפגשי בישול ושיתוף מתכונים בזמן אמת, הכוללת ייעוץ וליווי ישיר מממציא המתכון.", "#E4B0D8")}
        {description("אנשים רבים מתמודדים עם האתגר של לבשל כל יום, ומחפשים איך לגוון את התפריט ולשדרג את חווית הבישול. כיום, רוב הפתרונות בתחום המתכונים ברשת לא נותנים מענה מיידי להתייעצויות וקשיים שעולים בתהליך הבישול, ואינם פחות מספקים תמיכה חברתית. ", "#E4B0D8")}
        {description("בואו לבשל איתי היא אפליקציה שיתופית שתאפשר לחלוק מתכונים ולבשל יחד, במטרה לקבל ייעוץ במהלך הבישול, הנחיה בעת הצורך ובעיקר חברה לזמן הבישול.", "#E4B0D8")}
        <p className={styles.ourGoal}>המטרה שלנו היא להפוך את חוויית הבישול לחברתית ותומכת, לעודד שיתופיות, למידה הדדית וגיוון תפריט המשפחה</p>
      </div>
      <div className={styles.firstBanner}>
        <div className={styles.right}>
          <div className={styles.rightUp}>
            <div className={styles.leftEllipse}></div>
            <div className={styles.rightEllipse}></div>
          </div>
          <div className={styles.rightDown}></div>
        </div>
        <div className={styles.left}>
          <div className={styles.leftUp}></div>
          <div className={styles.leftDown}></div>
        </div>
      </div>
      <div className={styles.secondBanner}>
        <p className = {styles.audience}> קהל יעד</p>
        <div className = {styles.split}></div>
        <p className={styles.audienceDescription}>הורים צעירים <br /> דוברי עברית<br /> שמחפשים דרך להפוך <br />  את הבישול לקליל ונעים.</p>
        <div className = {styles.split}></div>
        <p className = {styles.appDescription}>הפלטפורמה מבוססת מידע שמתקבל מהמשתמשים. לכל משתמש יש אפשרות לפתוח קבוצת בישול, להגדיר את המתכון אותו יבשלו, לספק מתכון, מצרכים נדרשים, זמן הכנה נדרש ושעה לקיום המפגש. לאחר מכן, משתתפים אחרים יוכלו לבחור להצטרף למפגש הבישול, לייצא רשימת קניות מותאמת, ולעלות לשיחת וידאו קבוצתית בה ינכחו בזמן הבישול, יחלקו טיפים ועצות.</p>
        <p className = {styles.appDescription}>המשתמשים בשלב פתיחת החשבון נדרשים לאשר כי הם מבינים שבפרסום מתכון חדש באפליקציה, הם מוותרים על זכויות יוצרים עליו. </p>
        <p className = {styles.appDescription}>המשתמשים יספקו מתכונים מהירים ופשוטים שמותאמים לאורח החיים העמוס של קהל היעד ולא מסתמכים על יכולות מוקדמות. בנוסף, האפליקציה תהיה מיועדת בשלב זה לדוברי עברית, ותתמוך בשפה זו בלבד. </p>
        <p className = {styles.appDescription}>הפלטפורמה מיועדת לשימוש יומיומי בבית בזמן הכנת הארוחות העיקריות ביום (בוקר, צהריים וערב). כל קבוצת בישול מורכבת ממספר נמוך של משתתפים על מנת לאפשר יחס אישי מתאים לכל המשתתפים בנוסף קיימת האופציה לאפשר תכנים מוקלטים.</p>
        <p className = {styles.audience}>שפה גרפית</p>
        <div className = {styles.split}></div>
        <p className={styles.audienceDescription}>צעיר.קהילתי.פרקטי</p>
        <div className={styles.imageContainer}></div>
        <div className = {styles.split}></div>
        <p className = {styles.appDescription}>השפה הגרפית של האפליקציה עוצבה על בסיס מחקר של שלוש מילות מפתח שמשקפות את הערכים שאנחנו שואפים להם באפליקציה: צעיר, קהילתי, פרקטי.</p>
        <p className = {styles.appDescription}>השפה הגרפית משלבת קו נקי ותצלומים- הצילומים יהיו חופשים לחלוטין ולכן גם השפה שבחרנו היא נקייה ומאפשרת את שילובן. הצבעוניות שמחה, קלילה וצעירה שמספרת על טריות של מזון ועל מפגש קהילתי.</p>
      </div>
      <div className={styles.page}>
        <p className={styles.ourGoal}>חוויית המשתמש <strong>מיועדת לאפשר בישול משותף, ולתמוך בניהול תהליך הבישול בצורה נוחה ויעילה.</strong> </p>
        {description("שיתוף והדרכה של מתכון אישי, קביעת זמן מפגש והזמנת משתתפים לבשל.", "#EB7E3C", "יצירת קבוצת בישול – ")}
        {description(" מראש, מתאפשר מיד לאחר ההרשמה למפגש.", "#EB7E3C", "ייצוא רשימת קניות - ")}
        {description("לשימוש אישי חוזר, או הדפסה לפני המפגש למי שיותר נוח.", "#EB7E3C", "ייצוא המתכון - ")}
        {description("מעקב קבוצתי ואישי אחרי שלבי ההכנה של המתכון.", "#EB7E3C", "טיימר קבוצתי וצ'קליסט - ")}
        {description(" משתתף שאין ביכולות לדבר בזמן המפגש יכול לשאול שאלות בצא׳ט.", "#EB7E3C", "צ'אט בזמן הבישול")}
        {description("אופציה לסנן מתכונים לפי אלרגנים, כשרות, קטגוריה מועדפות, סוג ארוחה (בוקר/צהריים/ערב), רמת קושי ועוד. ", "#EB7E3C", "סינון מתכונים - ")}
        {description(".בישול משותף בזמן אמת.", "#EB7E3C", "הצטרפות לקבוצה קיימת – ")}
      </div>
      <div className={styles.finalBanner}>
        <p className={styles.finalText}>אז יאללה</p>
        <p className={styles.finalTextBig}>בואו <br />לבשל<br /> איתי. </p>
      </div>
    </div>
  );
}
