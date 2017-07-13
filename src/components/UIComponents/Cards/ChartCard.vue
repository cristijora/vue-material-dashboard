<template>
  <div class="card">
    <div class="card-header card-chart" :data-background-color="color">
      <div :id="chartId" class="ct-chart"></div>
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
    name: 'chart-card',
    props: {
      footerText: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: 'green'
      },
      id: String,
      headerTitle: {
        type: String,
        default: 'Chart title'
      },
      chartType: {
        type: String,
        default: 'Line' // Line | Pie | Bar
      },
      chartOptions: {
        type: Object,
        default: () => {
          return {}
        }
      },
      responsiveOptions: [Object, Array],
      chartData: {
        type: Object,
        default: () => {
          return {
            labels: [],
            series: []
          }
        }
      }
    },
    data () {
      return {
        chartId: 'no-id',
        chart: {}
      }
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initChart () {
        var chartIdQuery = `#${this.chartId}`
        this.chart = this.$Chartist[this.chartType](chartIdQuery, this.chartData, this.chartOptions, this.responsiveOptions)
        if (this.chartType === 'Line') {
          this.animateLineChart()
        }
        if (this.chartType === 'Bar') {
          this.animateBarChart()
        }
      },
      /***
       * Assigns a random id to the chart
       */
      updateChartId () {
        let currentTime = new Date().getTime().toString()
        let randomInt = this.getRandomInt(0, currentTime)
        this.chartId = `div_${randomInt}`
      },
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      animateLineChart () {
        let seq = 0
        let durations = 500
        let delays = 80
        this.chart.on('draw', (data) => {
          if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: this.$Chartist.Svg.Easing.easeOutQuint
              }
            })
          } else if (data.type === 'point') {
            seq++
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            })
          }
        })
        seq = 0
      },
      animateBarChart () {
        let seq = 0
        let durations = 500
        let delays = 80
        this.chart.on('draw', (data) => {
          if (data.type === 'bar') {
            seq++
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            })
          }
        })
      }
    },
    mounted () {
      if (!this.id) {
        this.updateChartId()
      } else {
        this.chartId = this.id
      }
      this.$nextTick(this.initChart)
    }
  }

</script>
<style>

</style>
