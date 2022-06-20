import Image from 'next/image';
import Blog from '../public/img/plugins-for-vscode.svg'

export const CardBody = ({ titulo, parrafo1, parrafo2, parrafo3 }) => {
    return (

        <div className="col-xl-8 col-lg-8 col-md-12 col-12">

            <Image src={Blog} className="img-fluid rounded-3" alt="visual estudio code 2022" width={923} height={498} />

            <div className="card shadow mt-4">

                <div className="container pt-2">
                    <div className="row">
                        <h1 className="display-3">{titulo}</h1>
                    </div>
                </div>

                <div className="card-body">
                    <p>{parrafo1}</p>
                    <p>{parrafo2}</p>
                    <p>{parrafo3}</p>

                </div>

            </div>
        </div>

    )
}
export default CardBody