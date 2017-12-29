import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import ShowPost from '@/components/ShowPost'
import CreatePost from '@/components/CreatePost'
import EditPost from '@/components/EditPost'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
