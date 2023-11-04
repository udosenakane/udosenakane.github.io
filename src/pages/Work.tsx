import Layout from '../components/Layout'
import portfolio from '../portfolio.png'
import gd from '../gadgetstore.png'
import Dropdown from '../components/Dropdown';

function Work() {

    return (
        <>
            <Layout>
                <main className='w-full sm:w-9/12 mx-auto mb-20'>
                    <h1 style={{borderBottomWidth:'3px'}} 
                    className='uppercase border-black mt-20 text-center 
                    font-bold text-[20px] pb-3 w-full border-b'>Portfolio</h1>
                    <p className='text-center'>More to be added</p>
                    <div className='work flex sm:flex-row flex-col flex-wrap mt-8'>
                        <div className='sm:w-1/3'>
                            <div className='shadow border rounded m-2'>
                                <p className='h-[200px]'>
                                    <img src={portfolio} className='h-full' />
                                </p>

                                <p className="text-center uppercase py-1">
                                    My personal website
                                </p>


                                <Dropdown className='p-3 bg-gray-200'>
                                    <ul className='p-3'>
                                        <li><span className="fas fa-dot-circle"></span> ReactJS</li>
                                        <li><span className="fas fa-dot-circle"></span> TypeScript</li>
                                        <li><span className="fas fa-dot-circle"></span> Tailwindcss</li>
                                        <li><span className="fas fa-dot-circle"></span> Github pages</li>
                                        <li><span className="fas fa-dot-circle"></span> Github Action</li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>


                        <div className='sm:w-1/3 w-full'>
                            <div className='m-2 shadow border rounded'>
                                <div className='h-[200px]'>
                                    <img src={gd} className='h-full' />
                                </div>

                                <p className="text-center uppercase py-1">
                                    Ecommerce store for gadgets
                                </p>

                                <Dropdown className='p-3 bg-gray-200'>
                                    <ul className='p-3'>
                                        <li><span className="fas fa-dot-circle"></span>PHP/Laravel</li>
                                        <li><span className="fas fa-dot-circle"></span>MySQL(Production)</li>
                                        <li><span className="fas fa-dot-circle"></span>MariaDB(Development)</li>
                                        <li><span className="fas fa-dot-circle"></span>Tailwindcss</li>
                                        <li><span className="fas fa-dot-circle"></span>JavaScript/AlpineJS</li>
                                        <li><span className="fas fa-dot-circle"></span>Memcached</li>
                                        <li><span className="fas fa-dot-circle"></span>Docker</li>
                                        <li><span className="fas fa-dot-circle"></span>Puppeteer scraper</li>
                                        <li><span className="fas fa-dot-circle"></span>Bash</li>
                                        <li><span className="fas fa-dot-circle"></span>Git</li>
                                        <li><span className="fas fa-dot-circle"></span>Github Action</li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default Work
