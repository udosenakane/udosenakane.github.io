import Layout from '../components/Layout'
import akan from '../akan.jpg'

function About() {
    return (
        <>
            <Layout>
                <main className='sm:w-8/12 my-20 mx-auto'>
                    <div className='flex w-full p-4'>

                        <div className='flex sm:flex-row flex-col w-full'>
                            <div className='sm:mr-1 sm:w-8/12 w-full'>
                                <div className='flex sm:flex-row flex-col items-center'>
                                    <div className='w-48 h-48 bg-gray-800 rounded overflow-hidden'>
                                        <img src={akan} alt="Akan picture" className="w-full h-full" />
                                    </div>

                                    <div className="flex flex-col space-between sm:ml-3">
                                        <p className='mb-2'>Name: Akan Udosen</p>

                                        <p >Profile: </p>
                                        <ul>
                                            <li><span className="fas fa-dot-circle"></span> Cloud Engineer</li>
                                            <li><span className="fas fa-dot-circle"></span> Full stack Developer</li>
                                            <li><span className="fas fa-dot-circle"></span> Techical Support Engineer</li>
                                        </ul>

                                        <p className='my-2'>Email: udosenakane@gmail.com</p>

                                        <p><a href="tel:+2347082683086">Phone: 234 (0) 708-268-3086</a></p>
                                    </div>
                                </div>

                                <div className="skill-mf mt-5">
                                    <p className="title-s">Skills</p>

                                    <h2 className="mt-6 bg-gray-300 pl-2 py-1 border-l-2 border-black">Programming Languages</h2>

                                    <span>JavaScript</span> <span className="pull-right">85%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '85%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>TypeScript</span> <span className="pull-right">55%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '55%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>Python</span> <span className="pull-right">84%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '84%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>PHP</span> <span className="pull-right">95%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '95%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>NodeJS</span> <span className="pull-right">75%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '75%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>C</span> <span className="pull-right">52%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '52%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>Bash</span> <span className="pull-right">55%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '55%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <h2 className="mt-6 bg-gray-300 pl-2 py-1 border-l-2 border-black">Databases</h2>

                                    <span>MySQL</span> <span className="pull-right">75%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '75%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>SQLite</span> <span className="pull-right">85%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '75%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>MongoDD/Mongoose</span> <span className="pull-right">85%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '55%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>



                                    <h2 className="mt-6 bg-gray-300 pl-2 py-1 border-l-2 border-black">Frameworks</h2>

                                    <span>Laravel</span> <span className="pull-right">86%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '86%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>WordPress CMS</span> <span className="pull-right">79%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '79%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>ReactJS</span> <span className="pull-right">72%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '72%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>VueJS</span> <span className="pull-right">80%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '80%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>AlpineJS</span> <span className="pull-right">100%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '100%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>Django</span> <span className="pull-right">75%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '75%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <h2 className="mt-6 bg-gray-300 pl-2 py-1 border-l-2 border-black">Devops tool</h2>

                                    <span>Git</span> <span className="pull-right">85%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '85%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>Github Action</span> <span className="pull-right">55%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '55%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>Docker</span> <span className="pull-right">65%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '65%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>Linux</span> <span className="pull-right">65%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '65%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <h2 className="mt-6 bg-gray-300 pl-2 py-1 border-l-2 border-black">Web servers</h2>

                                    <span>Nginx</span> <span className="pull-right">85%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '85%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                    <span>Apache</span> <span className="pull-right">55%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '55%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>

                                    <span>Caddy</span> <span className="pull-right">65%</span>
                                    <div className="w-full border h-4 overflow-hidden">
                                        <div style={{ width: '65%' }} className="bg-blue-400 w-full h-4"></div>
                                    </div>
                                </div>
                            </div>

                            <div className='sm:ml-1 sm:w-4/12 w-full'>
                                <h2 className='border-b-2 border-black uppercase'>About me</h2>

                                <p>Dedicated Full Stack Web Developer with proficient in both
                                    front-end and back-end technologies, I have a track record of
                                    delivering high-quality projects that meet client needs and industry standards.
                                </p>

                                <p>
                                    Experienced Cloud Engineer with a proven ability to
                                    design, implement, and manage cloud-based solutions for
                                    organizations.
                                    Adept at working with major cloud platforms such as AWS,
                                    Azure to optimize infrastructure,
                                    ensure scalability, and enhance security.
                                    Skilled in containerization, virtualization,
                                    and infrastructure as code (IAC) practices.
                                    Demonstrated expertise in automating cloud deployments
                                    and resource management. Committed to delivering
                                    cost-effective and agile cloud solutions to meet
                                    business objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default About
