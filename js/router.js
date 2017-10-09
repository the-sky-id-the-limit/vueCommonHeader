
const Vuejs = { template: '<vuejs></vuejs>' }
/* vue-header */
const VueHeader = { template: '<vue-header></vue-header>' }
const VueHeaderIndex = { template: '<vue-header-index></vue-header-index>' }
const VueHeaderPage1 = { template: '<vue-header-page1></vue-header-page1>' }
const VueHeaderPage2 = { template: '<vue-header-page2></vue-header-page2>' }

const routes = [
    { path: '/', component: VueHeaderIndex },
    { path: '/page1', component: VueHeaderPage1 },
    { path: '/page2', component: VueHeaderPage2 },
]

const router = new VueRouter({
  routes
})
