import Layout from '../components/Layout'

function Service() {
    return (
        <>
            <Layout>
                <main className='w-9/12 mx-auto'>
                    <div className='service flex sm:flex-row flex-col flex-wrap my-20'>
                        <div className='text-center sm-w-1/3 shadow border rounded p-8'>
                            <p className='text-[100px]'>
                                <span className='fas fa-globe'></span>
                            </p>

                            <p className="uppercase">
                                Software development
                            </p>

                            <p className="uppercas mt-10">
                                From planning, analysis, consolidation of your product
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default Service
