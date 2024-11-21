import styles from "./page.module.css";
import ListButton from "./lib/ListButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.profileContainer}>
          <img 
            src="./pingu-profile.png"
            className={styles.profileImageContainer}
          />
          <h3 className={styles.profileName}>Pingu Smel</h3>
        </div>

        <div className={styles.listButtonsContainer}>
          <ListButton 
            listTitle={"smel products"}
            numProducts={420}
          />
          <div className={styles.listButton}>
            <div className={styles.listImage}></div>
            <p>stinky gifts</p>
            <p>2 products</p>
          </div>
          <div className={styles.listButton}>
            <div className={styles.listImage}></div>
            <p>stinky gifts</p>
            <p>2 products</p>
          </div>
          <div className={styles.listButton}>
            <div className={styles.listImage}></div>
            <p>stinky gifts</p>
            <p>2 products</p>
          </div>
          <div className={styles.listButton}>
            <div className={styles.listImage}></div>
            <p>stinky gifts</p>
            <p>2 products</p>
          </div>
          <div className={styles.listButton}>
            <div className={styles.listImage}></div>
            <p>stinky gifts</p>
            <p>2 products</p>
          </div>
        </div>
        
      </main>
      <footer className={styles.footer}>
        <p>Created by the decepticon team</p>
        <div className={styles.footerLinkContainer}>
          <a href="https://github.com/megamba?tab=repositories">Michelle</a>
          <a href="https://github.com/naterg2000?tab=repositories">Nathan</a>
        </div>
      </footer>
    </div>
  );
}
