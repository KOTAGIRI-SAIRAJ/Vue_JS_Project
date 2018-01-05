<template>
  <v-app @click.stop="sideView = false">
    <v-navigation-drawer v-model="sideView">
      <v-list>
        <v-list-tile v-for="eachItem in menuItems" :key="eachItem.title">
          <v-list-tile-action>
            <v-icon>{{ eachItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ eachItem.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="sideView = !sideView"></v-toolbar-side-icon>
      <v-toolbar-title>Vue JS Examples</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="eachItem in menuItems" :key="eachItem.title">
          <v-icon left>{{ eachItem.icon }}</v-icon>
          {{ eachItem.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideView: false,
        menuItems: [
          { icon: 'supervisor_account', title: 'View Meet Ups' },
          { icon: 'room', title: 'Organize Meetup' },
          { icon: 'person', title: 'Profile' },
          { icon: 'face', title: 'Sign Up' },
          { icon: 'lock_open', title: 'Sign In' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
