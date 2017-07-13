import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      path: '/admin/dashboard'
    },
    {
      name: 'User Profile',
      icon: 'person',
      path: '/admin/stats'
    },
    {
      name: 'Table List',
      icon: 'content_paste',
      path: '/admin/table-list'
    },
    {
      name: 'Typography',
      icon: 'library_books',
      path: '/admin/typography'
    },
    {
      name: 'Icons',
      icon: 'bubble_chart',
      path: '/admin/icons'
    },
    {
      name: 'Maps',
      icon: 'location_on',
      path: '/admin/maps'
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      path: '/admin/notifications'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
