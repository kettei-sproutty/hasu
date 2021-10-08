type Page = 'home' | 'history' | 'error' | 'login'

type RouteType = {
    [key in Page]: string
}

const routes: RouteType = {
    home: '/',
    history: '/history',
    error: '/error',
    login: '/login'
}

const getPageRoute = (page: Page) => {
    return routes[page]
}

export default getPageRoute