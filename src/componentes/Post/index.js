import styles from "./Post.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.posts}>
      <img
        className={styles.post}
        src={`/assets/posts/${post.id}/capa.png`}
        alt="Imagem de capa do post"
      />

      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  )
}