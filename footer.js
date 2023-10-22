var div = document.createElement('div');
div.setAttribute('class', 'footer');
div.innerHTML = `
    <div class="footer-column-left">
        <h1 class="footer-column-header">
            Каталог
        </h1>
        <h2 class="footer-column-text">
            <a href="virtual-table.html">
                Виртуальный стол
            </a>
            <br>
            <a href="games.html">
                Все Игры
            </a>
            <br>
            <a href="engine.html">
                Игровой движок
            </a>
            <br>
            <a href="merch.html">
                Крутой Мерч
            </a>
        </h2>
    </div>
    <div class="footer-center">
        <div class="footer-logo">
            <img src="assets/footer/svg/logo-bw.svg" height="100%">
        </div>
        <h2 class="footer-column-text">
            © 2022 HyperDice Games
            <br>
            Все права защищены
        </h2> 
    </div>
    <div class="footer-column-right">
        <h1 class="footer-column-header">
            О компании
        </h1>
        <h2 class="footer-column-text">
            <a href="about.html">
                Наша команда
            </a>
            <br>
            <a href="partners.html">
                Партнёры
            </a>
            <br>
            <a href="legal.html">
                Юридическая информация
            </a>
        </h2>
        <div class="icons-bar">
            <div class="rickroll-icon">
                <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                    <img src="assets/footer/svg/rickroll.svg" width="100%">
                </a>
            </div>
            <div class="icon">
                <a href="https://t.me/feelyx" target="_blank">
                    <img class="icon" src="assets/footer/svg/tg.svg" width="100%">
                </a>
            </div>
            <div class="icon">
                <a href="https://vk.com/feelyx" target="_blank">
                    <img class="icon" src="assets/footer/svg/vk.svg" width="100%">
                </a>
            </div>
        </div>
    </div>
`
document.getElementById('footer-placeholder').appendChild(div);