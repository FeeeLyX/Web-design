var div = document.createElement('div');
div.setAttribute('class', 'header');
div.innerHTML = `
    <div class="header-block-left">
        <a class="top-bar" href="index.html">
            <img class="title" src="assets/header/svg/title.svg">
        </a>
    </div>
    <div class="header-block-center">
        <div class="header-block-center-round">    
        </div>
        <div class="header-block-center-bg">
            <img class="logo" src="assets/header/svg/logo-color-20.svg">
        </div>
    </div>
    <div class="header-block-right">
        <div class="top-bar">
            <div class="top-bar-element">
                <a class="top-bar" href="games.html">
                    <div class="top-bar-img">
                        <img class="top-bar-icon" src="assets/header/svg/games.svg">
                    </div>
                    <div class="top-bar-text">
                        <h1 class="top-bar-text">
                            Игры
                        </h1>
                    </div>
                </a>
            </div>
            <div class="top-bar-element">
                <a class="top-bar" href="engine.html">
                    <div class="top-bar-img">
                        <img class="top-bar-icon" src="assets/header/svg/engine.svg">
                    </div>
                    <div class="top-bar-text">
                        <h1 class="top-bar-text">
                            Движок
                        </h1>
                    </div>
                </a>
            </div>
            <div class="top-bar-element">
                <a class="top-bar" href="about.html">
                    <div class="top-bar-img">
                        <img class="top-bar-icon" src="assets/header/svg/about.svg">
                    </div>
                    <div class="top-bar-text">
                        <h1 class="top-bar-text">
                            О нас
                        </h1>
                    </div>
                </a>
            </div>
        </div>
        <div class="login-panel">
            <a class="login-panel" href="login.html">
                <div class="top-bar-text">
                    <h1 class="top-bar-text">
                        Аккаунт
                    </h1>
                </div>
                <div class="top-bar-img">
                    <img class="top-bar-icon" src="assets/header/svg/dragon.svg">
                </div>
            </a>
        </div>
    </div>
`
document.getElementById('header-placeholder').appendChild(div);