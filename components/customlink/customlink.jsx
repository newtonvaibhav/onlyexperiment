import Link from "next/link";
import styles from "./customlink.module.css"

export function CustomLink({ href, children }) {
    return (
      <Link className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    );
  }