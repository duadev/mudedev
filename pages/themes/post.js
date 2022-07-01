import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import imagenid0 from '../../public/code-0.svg';
import imagenid1 from '../../public/code-1.svg';


export const Post = () => {
  const [imagen, setImagen] = useState(imagenid1)

  const hola = (img) => {
    setImagen(img)

  }

  return (

    <>
      <div className='bg-gray'>
        <div className='pb-lg-16 pb-8'>
          <div className='container'>
            <div className='row align-items-center'>

              <div className='col-lg-6 col-md-12 col-12'>
                <div className='pe-lg-6 ps-lg-6'>
                  <h2 className='display-4 mt-4 mb-3 fw-bold text-white'>
                    Nord
                  </h2>
                  <h3 className=' text-white'>
                    An arctic, north-bluish clean and elegant Visual Studio Code theme.
                  </h3>

                  <div className='mt-6'>
                    <div className='d-flex mb-4'>
                      <div className='ms-3'>
                        <Link download href='https://www.nordtheme.com/ports/visual-studio-code'>
                          <a className=' btn-light-primary btn-sm'>Read More</a>
                        </Link>

                      </div>
                      <div className='ms-3'>
                        <Link download href='https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code'>
                          <a className=' btn-light-primary btn-sm'>Download</a>
                        </Link>

                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className='col-lg-6 col-md-12 col-12'>

                <div className='mt-4 mt-lg-0'>
                  <Image src={imagen} alt='alt' width={100} height={100} layout='responsive' priority className='hovers rounded-top-md ' />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      < div className='bg-gray' >
        <div className='py-8'>
          <div className='container'>
            <div className='row'>

              <div className='col-xl-4 col-lg-4 col-md-6 col-12'>

                <div className='mb-4'>

                  <div className='hovers'>
                    <Image src={imagenid0} onClick={() => hola(imagenid0)} alt='alt' width={100} height={100} layout='responsive' priority className='hovers rounded-top-md ' />

                  </div>

                  <div className='hovers'>
                    <Image src={imagenid1} onClick={() => hola(imagenid1)} alt='alt' width={100} height={100} layout='responsive' priority className='hovers rounded-top-md ' />

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div >

    </>
  )

}
export default Post


