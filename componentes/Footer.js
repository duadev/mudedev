import Image from "next/image"
import Link from "next/link"
import vercel from '../public/vercel.svg'

export const Footer = () => {
    return (
        <footer>
            <div className="pt-4 bg-white">
                <div className="container ">
                    <div className="row  justify-content-center text-center  ">

                        <div className="col-lg-8 col-md-12 col-12">
                            <p className="">© {new Date().getFullYear()} Muxdev.com</p>

                        </div>
                        <div className="col-12 col-md-12 col-xl-8 px-0 mb-4">
                            <nav className="nav nav-footer justify-content-center">
                                <Link href="/"><a className="nav-link">Home</a></Link>
                                <Link href="/blog"><a className="nav-link">Blog</a></Link>
                                <Link href="/terms/termsConditions"><a className="nav-link">Terms &amp; Conditions</a></Link>
                                <Link href="/terms/cookies"><a className="nav-link">Cookies</a></Link>

                            </nav>
                        </div>

                        <div className="p-2">
                            <Image src={vercel} alt="Hosting by vercel" height={50} width={150} />
                        </div>

                        <p>Powered by <a href="https://nextjs.org/" className="text-dark">next JS</a> - a blogging community for software developers.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer