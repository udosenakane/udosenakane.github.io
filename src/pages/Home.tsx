import Layout from '../components/Layout'
import bg from '../bg.png'
import cv from '../akcv.pdf'

function Home() {
    return (
        <>
            <Layout>
                <main style={{
                    // backgroundImage:`url(${bg})`, 
                    // backgroundSize: 'cover',
                    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
                    className='h-screen w-full relative flex'>

                    <img src={bg} className="w-full" alt="" />

                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                        className="absolute bg-gray-500 left-0 right-0 
                        top-0 bottom-0 overla overla_1 flex items-center justify-center">
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className='rounded p-20'>
                            <h1 className='font-bold text-white italics text-lg'>I am Akan Udosen</h1>
                            <p className='font-bold text-gray-300 italic text-lg my-5'>A FullStack Developer | Cloud Engineer</p>
                        
                            <a href={cv} download className='hover:bg-yellow-600 active:bg-yellow-700 bg-yellow-500 italic rounded p-2'>
                                Download my CV
                            </a>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default Home
