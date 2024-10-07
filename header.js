document.addEventListener("DOMContentLoaded", function() {
    const headerHtml = `
        <header>
            <h1>🎣</h1>
            <section class="menu">
                <ul class="menu-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="objectives.html">Objectives</a></li>
                    <li><a href ="Analysis.html">Analysis</a></li>
                    <li><a href="examples.html">Examples</a></li>
                    <li><a href ="our-team.html">About Us</a></li>
                </ul>
                
            </section>
        </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", headerHtml);
    
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu button');
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('opened');
    });
});
