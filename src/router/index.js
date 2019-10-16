import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component:  () => import('../views/index'),
            children:[
                {
                    path:'/addQues',
                    name:'addQues',
                    component:() => import('../views/addQues/addQues')
                },
                {
                    path:'/trashBin',
                    name:'trashBin',
                    component:() => import('../views/trashBin/trashBin')
                },
                {
                    path:'/myQuestionnaire',
                    name:'myQuestionnaire',
                    component:() => import('../views/myQuestionnaire/myQuestionnaire')
                },
                {
                    path:'/showQues/:paperCode',
                    name:'showQues',
                    component:() => import('../views/showQues/showQues')
                }
            ]
        }
    ]
})
