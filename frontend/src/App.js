import React, { useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47725788?s=460&v=4" alt="Junior Ferreira" />
              <div className="user-info">
                <strong>Junior Ferreira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia, Militar do Exército Brasileiro, Estudante e Desenvolvedor Jr.</p>
            <a href="https://github.com/joseiltonjunior">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47725788?s=460&v=4" alt="Junior Ferreira" />
              <div className="user-info">
                <strong>Junior Ferreira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia, Militar do Exército Brasileiro, Estudante e Desenvolvedor Jr.</p>
            <a href="https://github.com/joseiltonjunior">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47725788?s=460&v=4" alt="Junior Ferreira" />
              <div className="user-info">
                <strong>Junior Ferreira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia, Militar do Exército Brasileiro, Estudante e Desenvolvedor Jr.</p>
            <a href="https://github.com/joseiltonjunior">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47725788?s=460&v=4" alt="Junior Ferreira" />
              <div className="user-info">
                <strong>Junior Ferreira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia, Militar do Exército Brasileiro, Estudante e Desenvolvedor Jr.</p>
            <a href="https://github.com/joseiltonjunior">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
