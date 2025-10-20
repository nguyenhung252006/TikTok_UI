
//Layouts
import {HeaderOnly} from '~/components/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

//public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/Following', component: Following},
    {path: '/@:nickname', component: Profile},
    {path: '/Upload', component: Upload, layout : HeaderOnly},
    {path: '/Search', component: Search, layout : null}

]

const privateRoutes = [


]

export {publicRoutes, privateRoutes} 