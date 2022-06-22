import Head from 'next/head'
import LayoutArticle from '../../componentes/Layout'
import Main from '../../componentes/Main'
import Sidebar from '../../componentes/Sidebar'

const IngenieriaSocial = () => {

    const Article = [
        {
            titulo: '¿Qué es la Ingeniería Social?',
            parrafo1: 'La Ingeniería Social es una carrera que se desarrolla en la Universidad de los Andes, en la cual se desarrollan actividades que permiten la formación de profesionales con conocimientos y habilidades que les permiten desarrollar actividades de investigación, desarrollo tecnológico y/o formación en el ámbito social.',
            parrafo2: 'La Ingeniería Social es una carrera que se desarrolla en la Universidad de los Andes, en la cual se desarrollan actividades que permiten la formación de profesionales con conocimientos y habilidades que les permiten desarrollar actividades de investigación, desarrollo tecnológico y/o formación en el ámbito social.',

        },

    ]

    const Sidebars = [
        {
            tag: 'CyberSecurity',
            titulo: '¿Qué es la Ingeniería Social?',
            parrafo: 'La ingeniería social es el arte de convencer a una persona de proveer información..',
        }
    ]

    return (
        <>
            <Head>
                <title>Mudex - Que es la Ingenieria Social</title>
                <meta name="description" content="Que es la Ingenieria Social" />   
            </Head>

            <LayoutArticle>
                {
                    Article.map((item, i) => (
                        <Main
                            key={i}
                            titulo={item.titulo}
                            parrafo1={item.parrafo1}
                            parrafo2={item.parrafo2}
                        />
                    ))
                }

                {
                    Sidebars.map((item, i) => (
                        <Sidebar
                            key={i}
                            tag={item.tag}
                            titulo={item.titulo}
                            parrafo={item.parrafo}
                        />

                    ))
                }


            </LayoutArticle>
        </>
    )
}

export default IngenieriaSocial