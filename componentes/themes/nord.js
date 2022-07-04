import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export const Nord = ({ imagenid, nombre, descripcion, descargar }) => {

    return (

        <>
            <Head>
                <title>Nord - theme dark for visual code 2022</title>
            </Head>

            <div className='bg-dark'>
                <div className='py-8'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-12 pb-4'>

                                <div className='row g-0'>

                                    <a className='col-lg-8 col-md-12 col-12'>
                                        <Image src={imagenid} alt='alt' layout='responsive' width={350} height={200} priority className='col-lg-8 col-md-12 col-12 border-radius-img' />
                                    </a>

                                    <div className='col-lg-4 col-md-12 col-12'>
                                        <div className='card-body'>

                                            <Link href='/themes/' className='fs-5 mb-3 fw-semi-bold d-block'>
                                                <a className="badge bg-light text-dark">Dark</a>
                                            </Link>

                                            <h1 className='mb-2 mb-lg-4'>
                                                <h1 className='text-inherit'>
                                                    <h1 className='text-white'>{nombre}</h1>
                                                </h1>
                                            </h1>

                                            <p className='text-white'>{descripcion}</p>

                                            <div className="d-grid gap-2 pt-6">
                                                <Link href={descargar}>
                                                    <a className="btn-light-primary btn-sm text-center">descargar</a>

                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* here code useEffect img transaction*/}

                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
export default Nord


