import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub
} from "react-icons/ai"
import hero from "../public/hero-big.png"
import code from "../public/code.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import Image from "next/image"
import {useState} from "react";


export default function Home() {
    const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark'  : ""}>
      <Head>
        <title>Asrul Cahyadi Putra</title>
        <meta name="description" content="Hey there! I'm Asrul Cahyadi Putra." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg-px-40">
          <section className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between dark:text-white">
                  <h1 className="font-burtons text-xl">Asrul Cahayadi Putra</h1>
                  <ul className="flex items-center">
                      <li>
                          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
                      </li>
                      <li>
                          <a href="" className="bg-gradient-to-r from-cyan-500 text-to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">Resume</a>
                      </li>
                  </ul>
              </nav>

              <div className="text-center p-10 py-10">
                  <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text=6xl">
                      Asrul Cahyadi Putra
                  </h2>
                  <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Full Stack Web Developer</h3>
                  <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md-text-xl">
                      Exploring new technologies and developing software solutions and Learning more about Cloud Architecture, Systems Design and User Experience.
                  </p>

                  <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                        <a href="https://www.instagram.com/asrulcahyadi99/" target="_blank" rel="noopener">
                            <AiFillInstagram/>
                        </a>
                          <a href="https://www.linkedin.com/in/asrul-cahyadi-putra/" target="_blank" rel="noopener">
                              <AiFillLinkedin/>
                          </a>
                          <a href="https://github.com/asrulcahyadiputra" target="_blank" rel="noopener">
                              <AiFillGithub/>
                          </a>
                  </div>

                  <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                      <Image src={hero} layout="fill" objectFit="cover" alt="hero"/>
                  </div>
              </div>
          </section>

          <section>
              <div>
                  <h3 className="text-3xl py-1 dark:text-white">Experience</h3>
                  <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                      Since the beginning of my journey as a full stack web developer, I&apos;ve done remote work at
                      <span className="text-teal-500"> PT Samudera Aplikasi Indonesia, Booble.id, Baduma.id,</span> as a web developer and collaborated with talanted people to create digital products for both business and consumer use. Also at <span className="text-teal-500">PT Ruang Raya Indoensia </span> as a instructure backend engineering.
                  </p>
              </div>

              <div className="lg:flex gap-10">
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                      <Image src={code} width={100} height={100} alt="code"/>
                      <h3 className="text-lg font-medium pt-8 pb-2">Code your dream project</h3>
                      <p className="py-2">Do you have an idea for your next great website? Let&apos;s make it a reality</p>
                      <h4 className="py-4 text-teal-600">Tech Stack and Tools I Use</h4>
                      <p className="text-gray-800 py-1">PHP</p>
                      <p className="text-gray-800 py-1">JavaScript</p>
                      <p className="text-gray-800 py-1">Boostrap</p>
                      <p className="text-gray-800 py-1">Node JS</p>
                      <p className="text-gray-800 py-1">Tailwindcss</p>
                      <p className="text-gray-800 py-1">NEXT JS</p>
                      <p className="text-gray-800 py-1">NUXT JS</p>
                      <p className="text-gray-800 py-1">Laravel Framework</p>
                      <p className="text-gray-800 py-1">Codeigniter 3 & 4</p>
                      <p className="text-gray-800 py-1">MySQL</p>
                      <p className="text-gray-800 py-1">PostgreSQL</p>
                      <p className="text-gray-800 py-1">MongooDB</p>
                      <p className="text-gray-800 py-1">GIT & Github</p>
                      <p className="text-gray-800 py-1">Visual Studio Code</p>
                      <p className="text-gray-800 py-1">PHPStorm</p>

                  </div>
              </div>
          </section>

          <section className="py-10">
              <div>
                  <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
              </div>

              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                  <div className="basis-1/3 flex-1 ">
                      <Image
                          alt="porto1"
                          className="rounded-lg object-cover"
                          width={"100%"}
                          height={"100%"}
                          layout="responsive"
                          src={web1}
                      />
                  </div>
                  <div className="basis-1/3 flex-1 ">
                      <Image
                          alt="porto2"
                          className="rounded-lg object-cover"
                          width={"100%"}
                          height={"100%"}
                          layout="responsive"
                          src={web2}
                      />
                  </div>
                  <div className="basis-1/3 flex-1 ">
                      <Image
                          alt="porto3"
                          className="rounded-lg object-cover"
                          width={"100%"}
                          height={"100%"}
                          layout="responsive"
                          src={web3}
                      />
                  </div>
                  <div className="basis-1/3 flex-1 ">
                      <Image
                          alt="porto4"
                          className="rounded-lg object-cover"
                          width={"100%"}
                          height={"100%"}
                          layout="responsive"
                          src={web4}
                      />
                  </div>

              </div>
          </section>
      </main>

    </div>
  )
}
