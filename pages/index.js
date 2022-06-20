import LayoutArticle from '../componentes/Layout'
import Main from '../componentes/Main'
import Sidebar from '../componentes/Sidebar'
import Head from 'next/head'

export const Index = () => {

  const img = '2'
  const Article = [

    {
      
      titulo: 'How To Deploy a PHP Application with Kubernetes on Ubuntug 18.0',
      parrafo1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      parrafo2: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    }

  ]

  const Sidebars = [
    {
      tag: 'business',
      titulo: 'Visual Studio Code how to configure plugins',
      parrafo: 'lorem ipsum dolor sit amet,  in reprehenderit in voluptate velit ess',

    }

  ]

  return (
    <>
      <Head>
          <title>Mudex - Bloggin</title>
          <meta name="description" content="Bloggin - Home" />
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
              tituloCard={item.tituloCard}
              parrafo={item.parrafo}
            />
          ))
        }

      </LayoutArticle>

    </>
  )
}

export default Index