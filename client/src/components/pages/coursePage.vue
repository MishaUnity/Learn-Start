<template>
    <div class="course-page">
        <wrapper/>
        <media
      :kind="'video'"
      :isMuted="(false)"
      :src="['https://www.w3schools.com/html/mov_bbb.mp4']"
      :poster="'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'"
      :autoplay="true"
      :controls="true"
      :loop="true"
      :ref="'fish'"
      :style="{width: '500px'}"
      @pause="handle()"
        >
        </media>
    </div>
</template>
<script>
import Media from '@dongido/vue-viaudio'
import Wrapper from '../wrappers/Wrapper.vue'
export default {
    name:'coursePage',
    components: {
    Media,
    Wrapper
  },
  methods: {
    handle() {
      console.log('Video paused!, playing in 2 sec...')

      setTimeout( () => {
        this.$refs.fish.play() 
      }, 2000)
    }
  }
}
</script>
<style scoped>
.course-page{
     width: 100%;
     text-align: center;
     margin-top: 40vh;
}
</style>