import Link from "next/link";
import "../app/CSS/header.css"
import "../app/CSS/AllBooks.css"

import livro1 from "../app/assets/livro1.png"
import livro2 from "../app/assets/livro2.png"
import livro3 from "../app/assets/livro3.png"
import lixo from "../app/assets/lixo.png"
import edit from '../app/assets/edit.png'
import estrelaVazia from "../app/assets/estrelaVazia.png"
import estrelaCheia from "../app/assets/estrelaCheia.png"
import estrelaMetade from "../app/assets/estrelaMetade.png"

export default function AllBooks() {
    return (
        <>
            <section className="main-allbooks">
                <div className="atributos">
                    <ul className="livros-atributos">
                        <div className="atributos-esquerda">
                            <li className="userR">User Review</li>
                        </div>
                        <div className="atributos-direita">
                            <li className="rating">Rating</li>
                            <li className="progress">Progress</li>
                            <li className="status">Status</li>
                        </div>
                    </ul>
                </div>
                    
                <div className="livro-todo">
                    <div className="">
                        <div className="capa-livro">
                            <h5 className="titulo-livro">Hatsune Miku Mix</h5>
                                <img className="livro-imagem" src={livro1.src} alt="" />
                                <div className="editar">
                                    <img className="edit" src={edit.src} alt="" />
                                    <img className="lixo" src={lixo.src} alt="" />
                                </div>
                        </div>
                        <p className="opiniao-livro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus</p>
                        <div className="estrelas-livro">
                            <img className="" src={estrelaCheia.src} alt="" />
                            <img className="" src={estrelaCheia.src} alt="" />
                            <img className="" src={estrelaCheia.src} alt="" />
                            <img className="" src={estrelaCheia.src} alt="" />
                            <img className="" src={estrelaMetade.src} alt="" />
                        </div>
                        <p className="paginas-livro">307/307</p>
                        <p className="situacao-livro">Reading</p>
                    </div>
                </div>

                <div className="livro-todo">
                    <div className="">
                        <div className="capa-livro">
                            <h5 className="titulo-livro">The Disappearence of Hatsune Miku</h5>
                                <img className="livro-imagem" src={livro2.src} alt="" />
                                <div className="editar">
                                    <img className="edit" src={edit.src} alt="" />
                                    <img className="lixo" src={lixo.src} alt="" />
                                </div>
                        </div>
                        <p className="opiniao-livro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus</p>
                        <div className="estrelas-livro">
                            <img src={estrelaCheia.src} alt="" />
                            <img src={estrelaCheia.src} alt="" />
                            <img src={estrelaCheia.src} alt="" />
                            <img src={estrelaMetade.src} alt="" />
                            <img src={estrelaVazia.src} alt="" />
                        </div>
                        <p className="paginas-livro">164/164</p>
                        <p className="situacao-livro">Completed</p>
                    </div>
                </div>

                <div className="livro-todo">
                    <div className="">
                        <div className="capa-livro">
                            <h5 className="titulo-livro">Hatsune Miku Acute</h5>
                                <img className="livro-imagem" src={livro3.src} alt="" />
                                <div className="editar">
                                    <img className="edit" src={edit.src} alt="" />
                                    <img className="lixo" src={lixo.src} alt="" />
                                </div>
                        </div>
                        <p className="opiniao-livro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus</p>
                        <div className="estrelas-livro">
                            <img src={estrelaVazia.src} alt="" />
                            <img src={estrelaVazia.src} alt="" />
                            <img src={estrelaVazia.src} alt="" />
                            <img src={estrelaVazia.src} alt="" />
                            <img src={estrelaVazia.src} alt="" />
                        </div>
                        <p className="paginas-livro">---</p>
                        <p className="situacao-livro">Plan to read</p>
                    </div>
                </div>


            </section>
            
        </>
    );
};
