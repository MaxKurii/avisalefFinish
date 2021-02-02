import "./style.scss";

function Header(){
  return(
    <header className="header">
      <div className="logo">
        <img className="logo_img" src="./img/fly-logo-6847AA295E-seeklogo.com.png" alt="logo"/>
      </div>

      <div className="title">
        <h1>Aviasales</h1>
      </div>

      <nav className="nav">
        <div className="nav__item">
          <a href="https://translate.google.com.ua" target="blanck" alt="HomePage">HomePage</a>
        </div>

        <div className="nav__item">
          <a href="https://translate.google.com.ua" target="blanck" alt="Support">Support</a>
        </div>

        <div className="nav__item">
          <a href="https://translate.google.com.ua" target="blanck" alt="Login">Login</a>
        </div>
      </nav>
    </header>
  )
}

export{
  Header
}