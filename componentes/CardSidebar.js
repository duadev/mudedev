import Image from 'next/image'
import Link from 'next/link'
import Blog from '../public/img/imagen-body-2.jpg'

export const CardSidebar = ({tag,tituloCard,parrafo}) => {
    return (

        <div className="col-lg-4 col-md-5 col-12 mt-6 mt-md-0">
            <div className="sticky-top">

                <div className="col-lg-10 col-md-6 col-12">
                    <div className="card mb-4 shadow ">
                        <a href="#" className="card-img-top">
                            <Image src={Blog} className="card-img-top" alt="card tech" priority layout='responsive' />
                        </a>

                        <div className="card-body">
                            <a href="#" className="fs-5 fw-semi-bold d-block  text-dark">{tag}</a>
                            <h1 className='fs-5 '>
                                <p href="#" className="text-dark">{tituloCard}</p>
                            </h1>
                            <p>{parrafo}</p>

                            <div className="d-grid gap-2">
                                <Link href='#'><a className='btn btn-dark btn-xs'>Leer mas</a></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-10 col-md-6 col-12">
                    <div className="card mb-4 shadow ">
                        <div className="card-body ">
                            <h2>Tags</h2>
                            <div className="mt-3">
                                <a href="#" className="btn btn-light btn-xs  mb-2">business</a>
                                <a href="#" className="btn btn-light btn-xs  mb-2">e-commerce</a>
                                <a href="#" className="btn btn-light btn-xs  mb-2">course</a>
                                <a href="#" className="btn btn-light btn-xs  mb-2">dashboard</a>
                                <a href="#" className="btn btn-light btn-xs  mb-2">landings</a>
                                <a href="#" className="btn btn-light btn-xs  mb-2">marketing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}
export default CardSidebar
