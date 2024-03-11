import styles from "./Editor.module.css";

export const Editor = () => {
  const isHaiku = false;
  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
      ></textarea>
      <p>Vowels per row: 1,2,3</p>
      <button>Add</button>
      <button>Save</button>
    </div>
  );
};
