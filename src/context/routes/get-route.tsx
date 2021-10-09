export type Page = 'home' | 'history' | 'error' | 'login' | 'details'

type RouteType = {
    [key in Page]: string
}

const routes: RouteType = {
    home: '/',
    history: '/history',
    error: '/error',
    login: '/login',
    details: '/details'
}

const getPageRoute = (page: Page) => {
    return routes[page]
}

export default getPageRoute