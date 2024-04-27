export class Router {

    routes = {}

    add(pathName, page) {
        this.routes[pathName] = page;
    }

    route(event) {
        event = event || window.event;

        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        if(window.location.pathname == '/exploracao') {

            this.changeRouteCSS('exploracao');

        } else if(window.location.pathname == '/universo') {

            this.changeRouteCSS('universo');

        } else {

            this.changeRouteCSS('home');

        }

        this.handle();
    }

    handle() {
        const { pathname } = window.location;

        const route = this.routes[pathname] || this.routes[404];

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
        })
    }

    changeRouteCSS(path) {
        switch (path) {
            case 'exploracao':
                document.body.style.backgroundImage = "url(../assets/bg3.png)";
    
                document.getElementById('linkExploracao').style.fontWeight = 700;
                document.getElementById('linkUniverso').style.fontWeight = 400;
                document.getElementById('linkHome').style.fontWeight = 400;
                break;
            case 'universo':
                document.body.style.backgroundImage = "url(../assets/bg2.png)"
                document.getElementById('linkExploracao').style.fontWeight = 400;
                document.getElementById('linkUniverso').style.fontWeight = 700;
                document.getElementById('linkHome').style.fontWeight = 400;
                break;
            case 'home':
                document.body.style.backgroundImage = "url(../assets/bg1.png)"
                document.getElementById('linkExploracao').style.fontWeight = 400;
                document.getElementById('linkUniverso').style.fontWeight = 400;
                document.getElementById('linkHome').style.fontWeight = 700;
                break;
            default:
                document.body.style.backgroundImage = "url(../assets/bg1.png)"
                document.getElementById('linkExploracao').style.fontWeight = 400;
                document.getElementById('linkUniverso').style.fontWeight = 400;
                document.getElementById('linkHome').style.fontWeight = 700;
                break;
        }
    }
}