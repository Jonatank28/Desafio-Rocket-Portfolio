import React from 'react'
import './style.css'
import foto from '../../../assets/foto.png'

const Direito = () => {
  return (
    <>
    <div className='card cardD-myProjects'> 
      <h3>My Projects</h3>
      <p>Veja todos</p>
    </div>
    <div className="myProjectsMain">
      <div className="card myProjectsL">
        <div className="myProjects-svg">
          <div className="svg-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div className="text-svg">
            <p>my-nox1</p>
          </div>
        </div>
        <p className="ProjectP">
          Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
        <div className="myProjectsFooter">
          <div className="myProjectsFooterP">
            <div className="svg-p">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div>
                <p>100</p>
              </div>
            </div>
            <div className="svg-p">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
              </div>
              <div>
                <p>100</p>
              </div>
            </div>
          </div>
          <div className="svg-p">
            <div>
              🌚
            </div>
            <div>
              <p>JapaScript</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card myProjectsD">
        <div className="myProjects-svg">
          <div className="svg-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div className="text-svg">
            <p>my-nox2</p>
          </div>
        </div>
        <p className="ProjectP">Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
        <div className="myProjectsFooter">
          <div className="myProjectsFooterP">
            <div className="svg-p">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div>
                <p>100</p>
              </div>
            </div>
            <div className="svg-p">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
              </div>
              <div>
                <p>100</p>
              </div>
            </div>
          </div>
          <div className="svg-p">
            <div>
              🌚
            </div>
            <div>
              <p>JapaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='card'> 
      <h3>Recent Posts</h3>
    </div>
    <div className='card segundaFoto'> 
      <div className='segundaFotoL'>
        <img src={foto} alt="" />
      </div>
      <div className='segundaFotoD'>
          <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
          <p>2 anos atrás</p>
          <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
          <div className="lista-foto">
            <ul>
              <li>#react-native</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
            </ul>
          </div>
      </div>
    </div>
    </>
  )
}

export default Direito


