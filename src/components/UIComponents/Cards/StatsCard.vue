<template>
  <div class="card card-stats">
    <div class="card-header" :data-background-color="color">
      <slot name="icon"></slot>
    </div>
    <div class="card-content">
      <slot name="title"></slot>
    </div>
    <div class="card-footer">
      <div class="stats">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'stats-card',
    props: {
      color: {
        type: String,
        default: 'orange'
      }
    }
  }

</script>
<style>

</style>
