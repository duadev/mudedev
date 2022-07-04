import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export const Index = ({ nombre, by, imagenid }) => {

    return (

        <div className='col-xl-4 col-lg-4 col-md-6 col-12'>

            <div className='mb-4'>

                <div className='hovers'>
                    <Image src={imagenid} alt='alt' width={100} height={100} layout='responsive' priority className='hovers' />

                </div>


                <div className='m-2'>

                    <h2>
                        <Link href='/themes/nord' className='fs-5 fw-semi-bold d-block text-success'>
                            <a className='text-white'>{nombre}</a>
                        </Link>
                    </h2>

                    <p className='text-inherit'>
                        <a className='text-white'>{by}</a>
                    </p>


                </div>

            </div>

        </div>
    )
}

export default Index

