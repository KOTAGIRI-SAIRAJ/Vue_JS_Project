<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large to="/Meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn large to="/Meetups/Create" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="eachLocation in meetups"
            :src="eachLocation.imageUrl"
            :key="eachLocation.id">
          <div class="title">
            {{ eachLocation.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-sm-center">
        <p>Join Our Meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/visuel-carrousel-dossier-ou-sortir-le-soir-a-paris-740x380-c-dr/16967596-1-fre-FR/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-740x380-C-DR.jpg', id: 'asdalsd32', title: 'Meetup in Paris' },
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg', id: 'asdalsd12', title: 'Meetup in London' }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
  }
</style>
