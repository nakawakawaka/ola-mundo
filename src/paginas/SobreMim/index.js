import styles from "./SobreMim.module.css";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Bruno!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Bruno Nakamura"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? sou Desenvolvedor Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no YouTube, assistindo os videos do Curso em video. Eu aprendi lógica de programação e o básico do desenvolvimento web utilizando HTML5 CSS3 e JavaScript. Eu gosto muito de estudar programação, e estou a todo vapor!!
            </p>
            <p className={styles.paragrafo}>
                Apos concluir os cursos do professor Gustavo Guanabara senti que precisa de mais, e entao fui em busca de novos cruso que fossem relacionado ao Front-end.
            </p>
            <p className={styles.paragrafo}>
                Ingressei em um curso Full-stack do professor Luiz Otávio. Nele aprofundei meus conhecimentos, pricipalmente em JavaScript e prendi a usar diversas ferramentas como o Node JS, React Js e TypeScript.
            </p>
            <p className={styles.paragrafo}>
                Logo em seguida por indicação de amigos conheci o programa Oracle Next Education (ONE). Esse programa ofece diversos cursos pela Alura, que de longe tem sido a melhor e mais completa plataforma de ensino que conheci até o momento, inclusive este site é um projeto que foi passado durante as aulas de React.

            </p>
            <p className={styles.paragrafo}>
                Alem dos cursos de conhecimentos tecnicos aprendi muito sobre Soft-skill que era algo que eu realmente tinha muita dificuldade e não fazia ideia que poderia me desenvolver tanto. Com todo esse conhecimento sinto que estou cada vez mais apto a ingressar no mundo dos Desenvolvedores!! 
            </p>
            <p className={styles.paragrafo}>
                Muito obriado por visitar esse meu espaço que escrevi com muito carinho!! 
            </p>
            <p className={styles.paragrafo}>
                Espero que tenham gostado!!
            </p>

            <ul className={styles.social}>
                <li>
                    <a href="https://github.com/nakawakawaka/"><AiFillGithub size={60} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/bruno-naoki-nakamura/"><AiFillLinkedin size={60} color="#0077b5" /></a>
                </li>
            </ul>
        </PostModelo>
    )
}