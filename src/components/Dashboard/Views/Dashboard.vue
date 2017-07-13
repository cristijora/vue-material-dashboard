<template>
  <div class="content">
    <div class="container-fluid">
      <div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card>
              <i slot="icon" class="material-icons">content_copy</i>
              <div slot="title">
                <p class="category">Used Space</p>
                <h3 class="title">49/50
                  <small>GB</small>
                </h3>
              </div>
              <div slot="footer">
                <i class="material-icons text-danger">warning</i> <a href="#pablo">Get More Space...</a>
              </div>
            </stats-card>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card color="green">
              <i slot="icon" class="material-icons">store</i>
              <div slot="title">
                <p class="category">Revenue</p>
                <h3 class="title">$34,245</h3>
              </div>
              <div slot="footer">
                <i class="material-icons">date_range</i> Last 24 Hours
              </div>
            </stats-card>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card color="red">
              <i slot="icon" class="material-icons">info_outline</i>
              <div slot="title">
                <p class="category">Fixed Issues</p>
                <h3 class="title">75</h3>
              </div>
              <div slot="footer">
                <i class="material-icons">local_offer</i> Tracked from Github
              </div>
            </stats-card>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card color="blue">
              <i slot="icon" class="fa fa-twitter"></i>
              <div slot="title">
                <p class="category">Followers</p>
                <h3 class="title">+245</h3>
              </div>
              <div slot="footer">
                <i class="material-icons">update</i> Just Updated
              </div>
            </stats-card>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <chart-card id="dailySales"
                        :chart-data="dailySalesChart.data"
                        :chart-options="dailySalesChart.options">
              <div slot="title">
                <h4 class="title">Daily Sales</h4>
                <p class="category"><span class="text-success"><i class="fa fa-long-arrow-up"></i> 55%  </span>
                  increase in today sales.</p>
              </div>
              <span slot="footer">
            <i class="material-icons">access_time</i> updated 4 minutes ago
          </span>
            </chart-card>
          </div>

          <div class="col-md-4">
            <chart-card color="orange"
                        chart-type="Bar"
                        id="emailSubscriptions"
                        :chart-data="emailSubscriptionsChart.data"
                        :chart-options="emailSubscriptionsChart.options"
                        :responsive-options="emailSubscriptionsChart.responsiveOptions">
              <div slot="title">
                <h4 class="title">Email Subscriptions</h4>
                <p class="category">Last Campaign Performance</p>
              </div>
              <span slot="footer">
              <i class="material-icons">access_time</i> campaign sent 2 days ago
          </span>
            </chart-card>
          </div>

          <div class="col-md-4">
            <chart-card color="red"
                        id="completedTasks"
                        :chart-data="completedTasksChart.data"
                        :chart-options="completedTasksChart.options">
              <div slot="title">
                <h4 class="title">Completed Tasks</h4>
                <p class="category">Last Campaign Performance</p>
              </div>
              <span slot="footer">
            <i class="material-icons">access_time</i> campaign sent 2 days ago
          </span>
            </chart-card>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-12">
<!--
            <div class="card card-nav-tabs">
              <div class="card-header" data-background-color="purple">
                <div class="nav-tabs-navigation">
                  <div class="nav-tabs-wrapper">
                    <span class="nav-tabs-title">Tasks:</span>
                    <ul class="nav nav-tabs" data-tabs="tabs">
                      <li class="active">
                        <a href="#profile" data-toggle="tab">
                          <i class="material-icons">bug_report</i>
                          Bugs
                          <div class="ripple-container"></div>
                        </a>
                      </li>
                      <li class="">
                        <a href="#messages" data-toggle="tab">
                          <i class="material-icons">code</i>
                          Website
                          <div class="ripple-container"></div>
                        </a>
                      </li>
                      <li class="">
                        <a href="#settings" data-toggle="tab">
                          <i class="material-icons">cloud</i>
                          Server
                          <div class="ripple-container"></div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card-content">
                <div class="tab-content">
                  <div class="tab-pane active" id="profile">
                    <table class="table">
                      <tbody>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes" checked>
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes">
                            </label>
                          </div>
                        </td>
                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes">
                            </label>
                          </div>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes" checked>
                            </label>
                          </div>
                        </td>
                        <td>Create 4 Invisible User Experiences you Never Knew About</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="messages">
                    <table class="table">
                      <tbody>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes" checked>
                            </label>
                          </div>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes">
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="settings">
                    <table class="table">
                      <tbody>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes">
                            </label>
                          </div>
                        </td>
                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes" checked>
                            </label>
                          </div>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes">
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-simple btn-xs">
                            <i class="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                            <i class="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
-->
          </div>

          <div class="col-md-12">
            <div class="card">
              <div class="card-header" data-background-color="orange">
                <h4 class="title">Employees Stats</h4>
                <p class="category">New employees on 15th September, 2016</p>
              </div>
              <div class="card-content table-responsive">
                <table class="table table-hover">
                  <thead class="text-warning">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Country</th>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dakota Rice</td>
                    <td>$36,738</td>
                    <td>Niger</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Minerva Hooper</td>
                    <td>$23,789</td>
                    <td>Curaçao</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sage Rodriguez</td>
                    <td>$56,142</td>
                    <td>Netherlands</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Philip Chaney</td>
                    <td>$38,735</td>
                    <td>Korea, South</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  export default {
    components: {
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [12, 17, 7, 17, 23, 18, 38]
            ]
          },
          options: {
            lineSmooth: this.$Chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0}
          }
        },
        completedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
            ]
          },
          options: {
            lineSmooth: this.$Chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0}
          }
        },
        emailSubscriptionsChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
          },
          options: {
            axisX: {
              showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {top: 0, right: 5, bottom: 0, left: 0}
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: (value) => value[0]
              }
            }]
          ]
        }

      }
    }
  }

</script>
<style>

</style>
