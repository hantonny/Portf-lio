import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
library.add(fab);
library.add(fas);
export default function Home() {
  return (
    <div className="container">
      <header className="blog-header mt-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-12 text-center">
            <h1 className="fw-bold title">Hantonny Korrea</h1>
          </div>
        </div>
      </header>
      <div className="row">
        <div className="col-md-7 p-2">
          <div className="bg-dark text-white rounded shadow-sm"
            style={{ height: '176px' }}
          >
            <div className="col-sm-12">
              <p className="fst-italic pt-3">Desenvolvedor Web</p>
              <h4 className="fw-bold pb-5 pt-lg-4 text-center">Em busca de desenvolvimento
                profissional.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-5 p-2">
          <div className="border rounded mb-2 shadow-sm ml-1 bg-light">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-danger">Contato</strong>
              <div className="row text-center mb-3 mt-2">
                <div className="col-md-6">
                  <Link href="https://www.linkedin.com/in/hantonny-korrea-2853911a0/">
                    <a target="_blank"
                      className="text-decoration-none">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" color="#0274b3" />
                      <p className="card-text mb-auto fst-italic">LinkedIn</p>
                    </a>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link href="https://github.com/hantonny">
                    <a target="_blank" className="text-decoration-none">
                      <FontAwesomeIcon icon={['fab', 'github']} size="3x" color="black" />
                      <p className="card-text mb-auto fst-italic">GitHub</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 p-2">
          <div className="border rounded mb-1 shadow-sm ml-1 bg-light">
            <div className="col p-3">
              <strong className="d-inline-block mb-2 text-success">Portfólio</strong>
              <div className="border rounded mb-2 shadow-sm p-2 text-center">
                <Link href="https://sorteiogram-hantonny.vercel.app/">
                  <a target="_blank">Sorteio de Números e Nomes - Next.js</a>
                </Link>
              </div>
              <div className="border rounded mb-2 shadow-sm p-2 text-center">
                <Link href="https://www.linkedin.com/posts/hantonny-korrea-2853911a0_projeto-recicla-objetivo-auxiliar-o-consumidor-activity-6687181249867476992-8lk9">
                  <a target="_blank">Recicla - Laravel</a>
                </Link>
              </div>
              <div className="border rounded mb-2 shadow-sm p-2 text-center">
                <Link href="https://www.linkedin.com/posts/hantonny-korrea-2853911a0_projeto-seu-bolso-organizador-de-finan%C3%A7as-activity-6688972255034126336-EJO0">
                  <a target="_blank">Seu Bolso - Laravel</a>
                </Link>
              </div>
              <div className="border rounded mb-2 shadow-sm p-2 text-center">
                <Link href="https://github.com/hantonny/Todo-List/tree/hantonny-korrea">
                  <a target="_blank">Todo-List - Laravel</a>
                </Link>
              </div>
              <div className="border rounded mb-2 shadow-sm p-2 text-center">
                <Link href="https://www.linkedin.com/posts/hantonny-korrea-2853911a0_movieflix-objetivo-ajudar-os-usu%C3%A1rios-a-activity-6705981582013939712-hDWf">
                  <a target="_blank">MovieFlix - Laravel</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 p-2">
          <div className="border rounded mb-1 shadow-sm bg-light">
            <div className="col p-4 mb-2">
              <strong className="d-inline-block mb-3 text-primary">Skills Hard</strong>
              <div className="row text-center mb-3">
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'html5']} size="3x" color="#e44f27" />
                  < p className="card-text mb-auto fst-italic" > HTML</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'css3']} size="3x" color="#016abb" />
                  <p className="card-text mb-auto fst-italic">CSS</p>
                </div>

                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'git']} size="3x" color="#f05033" />
                  <p className="card-text mb-auto fst-italic">Git</p>
                </div>

                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'php']} size="3x" color="blue" />
                  <p className="card-text mb-auto fst-italic">PHP</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'laravel']} size="3x" color="red" />
                  <p className="card-text mb-auto fst-italic">Laravel</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'js']} size="3x" color="#f7df1e" />
                  <p className="card-text mb-auto fst-italic">JavaScript</p>
                </div>
              </div>
              <div className="row text-center mt-1">
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'node-js']} size="3x" color="#689f63" />
                  <p className="card-text mb-auto fst-italic">Node.js</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'react']} spin size="3x" color="#61dafb" />
                  <p className="card-text mb-auto fst-italic">React</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'react']} spin size="3x" color="#61dafb" />
                  <p className="card-text mb-auto fst-italic">React Native</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fas', 'database']} size="3x" color="orange" />
                  <p className="card-text mb-auto fst-italic">MySQL</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fas', 'database']} size="3x" color="#336791" />
                  <p className="card-text mb-auto fst-italic">PostgreSQL</p>
                </div>
                <div className="col-md-2 mt-3">
                  <FontAwesomeIcon icon={['fab', 'docker']} size="3x" color="#2496ed" />
                  <p className="card-text mb-auto fst-italic">Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
