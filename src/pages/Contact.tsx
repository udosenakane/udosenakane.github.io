import Layout from '../components/Layout'

function Contact() {
    return (
        <>
            <Layout>
                <main className='h-screen w-full relative flex'>

                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                        className="absolute bg-gray-500 left-0 right-0 w-ful
                            top-0 bottom-0 flex items-center justify-center">
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} 
                            className='rounded sm:p-20 p-5 w-ful'>
                            <p>
                                <span className='fas fa-map-marker-alt'></span>
                                &nbsp;11 Kola Abiodun St, Agbede, Ikorodu, Lagos, Nigeria
                            </p>

                            <p className='my-5'>
                                <span className='fas fa-mobile-alt'></span> &nbsp;
                                <a href="tel:+2347082683086">
                                    +234(0)7082683086
                                </a>
                            </p>

                            <p>
                                <span className='fas fa-envelope'></span> &nbsp;
                                <span>udosenakane@gmail.com</span>
                            </p>

                            <div className='text-[30px] mt-10'>
                                <a href="https://www.linkedin.com/in/akan-udosen" className='mr-5'>
                                    <span className='fab fa-linkedin'></span>
                                </a>

                                <a href="https://github.com/udosenakane" className='mr-5'>
                                    <span className='fab fa-github'></span>
                                </a>

                                <a href="https://www.instagram.com/udosenakane" className='mr-5'>
                                    <span className='fab fa-instagram'></span>
                                </a>

                                <a href="https://twitter.com/udosenakane" className='mr-5'>
                                    <span className='fab fa-twitter'></span>
                                </a>

                                <a href="https://web.facebook.com/udosenakane">
                                    <span className='fab fa-facebook'></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
                {/* <main className='w-9/12 mx-auto'>
                    <div className='flex sm:flex-row flex-col flex-wrap my-20'>
                        <div className='sm:w-1/2'>
                            
                        </div>

                        <div className='sm:w-1/2'>
                            <p>
                                <span className='fas fa-map-marker-alt'></span>
                                &nbsp;11 Kola Abiodun St, Agbede, Ikorodu, Lagos, Nigeria
                            </p>

                            <p>
                                <span className='fas fa-mobile-alt'></span> &nbsp;
                                <a href="tel:+2347082683086">
                                    +234(0)7082683086
                                </a>
                            </p>

                            <p>
                                <span className='fas fa-envelope'></span> &nbsp;
                                <span>udosenakane@gmail.com</span>
                            </p>

                            <div className='text-[30px] mt-10'>
                                <a href="www.linkedin.com/in/akan-udosen" className='mr-5'>
                                    <span className='fab fa-linkedin'></span>
                                </a>

                                <a href="https://github.com/udosenakane" className='mr-5'>
                                    <span className='fab fa-github'></span>
                                </a>

                                <a href="https://www.instagram.com/udosenakane" className='mr-5'>
                                    <span className='fab fa-instagram'></span>
                                </a>

                                <a href="https://twitter.com/udosenakane" className='mr-5'>
                                    <span className='fab fa-twitter'></span>
                                </a>

                                <a href="https://web.facebook.com/udosenakane">
                                    <span className='fab fa-facebook'></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main> */}
            </Layout>
        </>
    )
}

export default Contact
