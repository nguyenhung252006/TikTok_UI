import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
//public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/Following', component: Following},
    {path: '/Profile', component: Profile},
    {path: '/Upload', component: Upload, layout : null}

]

const privateRoutes = [


]

export {publicRoutes, privateRoutes} 