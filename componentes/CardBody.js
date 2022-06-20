import Image from 'next/image';
import Blog from '../public/img/plugins-for-vscode.svg'

export const CardBody = (props) => {
    return (

        <div className="col-xl-8 col-lg-8 col-md-12 col-12">

            <Image src={Blog} className="img-fluid rounded-3" alt="visual estudio code 2022" width={923} height={498} priority layout='responsive' />

            <div className="card shadow mt-4">

                <div className="container pt-2">
                    <div className="row">
                        <h1 className="display-3">{props.titulo}</h1>
                    </div>
                </div>

                <div className="card-body">
                    <p>{props.parrafo1}</p>
                    <p>{props.parrafo2}</p>
                    <p>{props.parrafo3}</p>
                    <p>{props.parrafo4}</p>
                    <p>{props.parrafo5}</p>
                </div>

            </div>
        </div>

    )
}
export default CardBody