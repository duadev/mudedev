import React from 'react'
import Details from '../../componentes/themes/nord'

export const Nord = () => {

  const data = [
    {
      imagenid: `/themes/nord/nord.svg`,
      nombre: 'Nord',
      descripcion: 'lorem inpso creation theme for visual code',
      descargar: 'https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code'
    }
  ]

  return (

    <>

      {
        data.map((item, i) => (
          <>
            <Details
              key={i}
              imagenid={item.imagenid}
              nombre={item.nombre}
              descripcion={item.descripcion}
              descargar={item.descargar}
            />

          </>

        ))
      }

    </>

  )
}
export default Nord