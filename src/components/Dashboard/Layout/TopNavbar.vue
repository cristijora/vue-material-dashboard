<template>
  <nav class="navbar navbar-transparent navbar-absolute">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">{{capitalizeFirstLetter($route.name)}}</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </a>
          </li>
          <drop-down>
            <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
              <i class="material-icons">notifications</i>
              <span class="notification">5</span>
              <p class="hidden-lg hidden-md">Notifications</p>
            </a>
            <li><a href="#">Mike John responded to your email</a></li>
            <li><a href="#">You have 5 new tasks</a></li>
            <li><a href="#">You're now friend with Andrew</a></li>
            <li><a href="#">Another Notification</a></li>
            <li><a href="#">Another One</a></li>
          </drop-down>
          <li>
            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </a>
          </li>
        </ul>

        <form class="navbar-form navbar-right" role="search">
          <div class="form-group  is-empty">
            <input type="text" class="form-control" placeholder="Search">
            <span class="material-input"></span>
          </div>
          <button type="submit" class="btn btn-white btn-round btn-just-icon">
            <i class="material-icons">search</i><div class="ripple-container"></div>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
