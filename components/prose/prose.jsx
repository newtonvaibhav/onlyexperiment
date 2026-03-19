import styles from "./prose.module.css";

export default function Prose({ header, image, children }) {
  return (
    <div className={styles.prose}>
      {header ? (
        <header className={styles.header}>
          <h1 className={styles.title}>{header.title}</h1>
          {header.subtitle ? (
            <p className={styles.subtitle}>{header.subtitle}</p>
          ) : null}
        </header>
      ) : null}

      {image && (
        <div className={styles.imageWrap}>
          <img className={styles.image} src={image.src} alt={image.alt || ""} />
        </div>
      )}

      <div className={styles.content}>{children}</div>
    </div>
  );
}
