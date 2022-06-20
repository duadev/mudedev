import React from 'react'
import Footer from './Footer'

export const LayoutArticle = ({ children }) => {
    return (
        <>
          
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