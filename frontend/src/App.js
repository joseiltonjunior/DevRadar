import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
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
