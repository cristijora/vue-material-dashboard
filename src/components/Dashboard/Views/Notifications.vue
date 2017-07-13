<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header" data-background-color="purple">
          <h4 class="title">Notifications</h4>
          <p class="category">Handcrafted by us with <i class="fa fa-heart heart"></i></p>
        </div>
        <div class="card-content">
          <div class="row">
            <div class="col-md-6">
              <h5>Notifications Style</h5>
              <div class="alert alert-info">
                <span>This is a plain notification</span>
              </div>
              <div class="alert alert-info">
                <button type="button" aria-hidden="true" class="close">×</button>
                <span>This is a notification with close button.</span>
              </div>
              <div class="alert alert-info alert-with-icon" data-notify="container">
                <button type="button" aria-hidden="true" class="close">×</button>
                <i data-notify="icon" class="material-icons">add_alert</i>
                <span data-notify="message">This is a notification with close button and icon.</span>
              </div>
              <div class="alert alert-info alert-with-icon" data-notify="container">
                <button type="button" aria-hidden="true" class="close">×</button>
                <i data-notify="icon" class="material-icons">add_alert</i>
                <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
              </div>
            </div>
            <div class="col-md-6">
              <h5>Notification states</h5>
              <div class="alert alert-info">
                <button type="button" aria-hidden="true" class="close">×</button>
                <span><b> Info - </b> This is a regular notification made with ".alert-info"</span>
              </div>
              <div class="alert alert-success">
                <button type="button" aria-hidden="true" class="close">×</button>
                <span><b> Success - </b> This is a regular notification made with ".alert-success"</span>
              </div>
              <div class="alert alert-warning">
                <button type="button" aria-hidden="true" class="close">×</button>
                <span><b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
              </div>
              <div class="alert alert-danger">
                <button type="button" aria-hidden="true" class="close">×</button>
                <span><b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
              </div>
              <div class="alert alert-primary">
                <button type="button" aria-hidden="true" class="close">×</button>
                <span><b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
              </div>
            </div>
          </div>

          <br>
          <br>

          <div class="places-buttons">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 text-center">
                <h5>Notifications Places
                  <p class="category">Click to view notifications</p>
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="col-md-4">
                  <button class="btn btn-primary btn-block" @click="notifyVue('top','left')">Top Left</button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary btn-block" @click="notifyVue('top','center')">Top Center</button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary btn-block" @click="notifyVue('top','right')">Top Right</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="col-md-4">
                  <button class="btn btn-primary btn-block" @click="notifyVue('bottom','left')">Bottom Left</button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary btn-block" @click="notifyVue('bottom','center')">Bottom Center</button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary btn-block" @click="notifyVue('bottom','right')">Bottom Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        var color = Math.floor((Math.random() * 4) + 1)
        this.$notify(
          {
            message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.',
            icon: 'notifications',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style>

</style>
