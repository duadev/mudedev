import React from 'react'
import Themes from '/componentes/themes/theme'
import Head from 'next/head'


export const Index = () => {

 
  const theme = [
    {
      imagenid: `/themes/nord/nord.svg`,
      nombre: 'Nord',
      by: 'arcticicestudio'
    },
  
    {
      imagenid: `/themes/atom/atom-one-dark.svg`,
      nombre: 'Atom-one-dark',
      by: 'Mahmoud Ali'
    },
    {
      imagenid: `/themes/one-dark/one-dark-pro.svg`,
      nombre: 'One Monokai Theme',
      by: 'Joshua Azemoh'
    }
   
  ]
  console.log(theme)
  return (
    <>

      <Head>
        <title>themes dark for visual code 2022</title>
      </Head>

      <div className='bg-dark'>
        <div className='py-8'>
          <div className='container'>
            <div className='row'>

              {
                theme.map((item, i) => (

                  <Themes
                    key={i}
                    imagenid={item.imagenid}
                    nombre={item.nombre}
                    by={item.by}
                  />

                ))
              }

            </div>
          </div>
        </div>
      </div>

    </>
  )

}

export default Index