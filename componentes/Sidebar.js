import Image from 'next/image'
import Link from 'next/link'


export const Sidebar = ({tag,titulo,parrafo}) => {
    return (

        <div className="col-lg-4 col-md-5 col-12 mt-6 mt-md-0">
            <div className="sticky-top">

                <div className="col-lg-10 col-md-6 col-12">
                    <div className="card mb-4 shadow ">
                        <p className="card-img-top">
                            <Image src='/imagen-body-2.jpg' className="card-img-top" alt="card tech" width='928' height='498' layout='responsive' />
                        </p>

                        <div className="card-body">
                            <Link href="#"><a className="fs-5 fw-semi-bold d-block mb-3 text-titulo">{tag}</a></Link>
                            <h1>
                                <p className="text-titulo">{titulo}</p>
                            </h1>
                            <p>{parrafo}</p>

                            <div className="d-grid gap-2">
                                <Link href='/cybersecurity/que-es-la-ingenieria-social'><a className='btn btn-dark btn-xs '>Leer mas</a></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-10 col-md-6 col-12">
                    <div className="card mb-4 shadow ">
                        <div className="card-body ">
                            <h2 className='text-titulo'>Tags</h2>
                            <div className="mt-3">
                                <a href="#" className="btn btn-light btn-xs  mb-2">business</a>
                                <a href="#" className="btn btn-light btn-xs  m-1">e-commerce</a>
                                <a href="#" className="btn btn-light btn-xs  m-2">course</a>
                                <a href="#" className="btn btn-light btn-xs  m-2">dashboard</a>
                                <a href="#" className="btn btn-light btn-xs  m-2">landings</a>
                                <a href="#" className="btn btn-light btn-xs  mb-2">marketing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}
export default Sidebar
