import LayoutArticle from '../componentes/Layout'
import CardBody from '../componentes/CardBody'
import CardSidebar from '../componentes/CardSidebar'
export const Index = () => {
  return (
    <>

      <LayoutArticle>

        <CardBody

          titulo={'Blog de prueba con Next.js props👌'}
          //imagen={''}
          parrafo1={'Se cree que el cuerno de la frente se le ha atrofiado para evitar herir a sus crías, Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo'}
          parrafo2={'Se cree que el cuerno de la frente se le ha atrofiado para evitar herir a sus crías, Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo'}
          parrafo5={'Se cree que el cuerno de la frente se le ha atrofiado para evitar herir a sus crías, Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo'}

        />

        <CardSidebar
          tag={'business'}
          tituloCard={'How to configure visual code 2022 plugin.'}
          parrafo={'Se cree que el cuerno de la frente se le ha atrofiado para evitar herir'}
          leerMas={'Leer mas'}
        />

      </LayoutArticle>

    </>
  )
}

export default Index