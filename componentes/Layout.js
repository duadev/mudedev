import React from 'react'
import Footer from './Footer'
import Head from 'next/Head'
export const LayoutArticle = ({ children }) => {
    return (
        <>
<Head>
    <title>Mudex - Bloggin - Home</title>
    <meta name="description" content="Bloggin - Home" />

</Head>
            <section>
                <div className="py-6 bg-white">
                    <div className="container">

                        <div className="row">

                            {
                                children
                            }

                        </div>
                    </div>
                </div>

            </section>
            <Footer />

        </>
    )
}
export default LayoutArticle