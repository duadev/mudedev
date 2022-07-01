import React from 'react'
import Themes from '/componentes/themes/theme'
import Head from 'next/head'


export const Index = () => {

 
  const theme = [
    {
      imagenid: `/code-1.svg`,
      nombre: 'Nord',
      by: 'arcticicestudio'
    },
    {
      imagenid: `/code-0.svg`,
      nombre: 'One dark Pro',
      by: 'Mahmoud Ali'
    },
    {
      imagenid: `/code-1.svg`,
      nombre: 'One Monokai Theme',
      by: 'Joshua Azemoh'
    },
    {
      imagenid: `/code-1.svg`,
      nombre: 'One Monokai Theme',
      by: 'Joshua Azemoh'
    }
   
  ]
  console.log(theme)
  return (
    <>

      <Head>
        <title>The best themes for visual code 2023</title>
      </Head>

      <div className='bg-gray'>
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