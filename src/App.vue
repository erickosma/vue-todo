<template>

    <div class="phone-viewport">


        <md-toolbar class="md-primary">
            <div class="md-toolbar-container">
                <md-button class="md-icon-button"  @click="createConversation">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title"> <md-icon>access_time</md-icon> Todo</h2>

                <md-button style="flex: 20">
                    <md-icon>home</md-icon>
                    Home
                </md-button>
                <md-button style="flex: 20">
                    <md-icon>filter_5</md-icon>
                    Completas
                </md-button>
                <md-button style="flex: 20">
                    <md-icon>filter_99</md-icon>
                    A fazer
                </md-button>
            </div>
        </md-toolbar>

        <md-list class="md-double-line">

        </md-list>

        <menu-right></menu-right>
    </div>


    <!--

      <md-subheader class="md-inset">Folders</md-subheader>

                  <md-list-item>
                      <md-avatar class="md-avatar-icon">
                          <md-icon>folder</md-icon>
                      </md-avatar>

                      <div class="md-list-text-container">
                          <span>Photos</span>
                          <p>Jan 9, 2014</p>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                          <md-icon>info</md-icon>
                      </md-button>
                  </md-list-item>

                  <md-list-item>
                      <md-avatar class="md-avatar-icon">
                          <md-icon>folder</md-icon>
                      </md-avatar>

                      <div class="md-list-text-container">
                          <span>Recipes</span>
                          <p>Jan 17, 2014</p>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                          <md-icon>info</md-icon>
                      </md-button>
                  </md-list-item>

                  <md-list-item>
                      <md-avatar class="md-avatar-icon">
                          <md-icon>folder</md-icon>
                      </md-avatar>

                      <div class="md-list-text-container">
                          <span>Work</span>
                          <p>Jan 28, 2014</p>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                          <md-icon>info</md-icon>
                      </md-button>

                      <md-divider class="md-inset"></md-divider>
                  </md-list-item>

                  <md-subheader class="md-inset">Files</md-subheader>

                  <md-list-item>
                      <md-avatar md-theme="blue" class="md-avatar-icon md-primary">
                          <md-icon>insert_drive_file</md-icon>
                      </md-avatar>

                      <div class="md-list-text-container">
                          <span>Vacation Itinerary</span>
                          <p>Jan 20, 2014</p>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                          <md-icon>info</md-icon>
                      </md-button>
                  </md-list-item>

                  <md-list-item>
                      <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
                          <md-icon>collections</md-icon>
                      </md-avatar>

                      <div class="md-list-text-container">
                          <span>Kitchen Remodel</span>
                          <p>Jan 10, 2014</p>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                          <md-icon>info</md-icon>
                      </md-button>
                  </md-list-item>

                  <md-list-item>
                      <md-avatar md-theme="green" class="md-avatar-icon md-primary">
                          <md-icon>view_list</md-icon>
                      </md-avatar>

                      <div class="md-list-text-container">
                          <span>Grocery Shop</span>
                          <p>Jan 10, 2014</p>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                          <md-icon>info</md-icon>
                      </md-button>
                  </md-list-item>

                  <md-list-item>
                      <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
                          <md-icon>collections</md-icon>
                      </md-avatar>

                      <div class="md-list-text-container">
                          <span>Weekend Pictures</span>
                          <p>Jan 10, 2014</p>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                          <md-icon>info</md-icon>
                      </md-button>
                  </md-list-item>






          <md-toolbar class="md-primary">
              <md-button class="md-icon-button">
                  <md-icon>menu</md-icon>
              </md-button>
              <h2 class="md-title" style="flex: 1">
                  <md-button>
                      <i class="glyphicon glyphicon-time"></i>
                      ToDo
                  </md-button>
              </h2>

              <md-button href="#/" >Home</md-button>
              <md-button href="#/tasks" >Tasks</md-button>
          </md-toolbar>



        <div class="container">
          <div class="col-sm-9">
            <router-view class="view"></router-view>
          </div>
        </div>
        -->

</template>

<script>

    import MenuRight from './components/menu/Menu-right.vue'
    export default {
        components: {
            MenuRight
        },
        events: {
            incrementTotal: function () {
                this.$emit('increment');
            }
        }
    }

</script>
