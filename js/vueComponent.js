
// vueHeaderItemComponent
Vue.component('vueHeaderItem', {
    template :
        '<ul class="vue-header">'+
            '<router-link tag="li" to="/">home</router-link>'+
            '<router-link tag="li" to="/page1">page1</router-link>'+
            '<router-link tag="li" to="/page2">page2</router-link>'+
        '</ul>'
})

// vueHeaderIndexComponent
Vue.component('vueHeaderIndex', {
    template :
        '<div>'+
            '<p class="vue-header-main">home</p>'+
        '</div>'
})

// vueHeaderIndexComponent
Vue.component('vueHeaderPage1', {
    template :
        '<div>'+
            '<p class="vue-header-main">Page1</p>'+
        '</div>'
})

// vueHeaderIndexComponent
Vue.component('vueHeaderPage2', {
    template :
        '<div>'+
            '<p class="vue-header-main">Page2</p>'+
        '</div>'
})
