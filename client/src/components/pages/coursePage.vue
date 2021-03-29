<template>
    <div class="course-page">
        <wrapper/>
        <div class="course">
        <media
      :kind="'video'"
      :isMuted="(true)"
      :src="['https://youtu.be/TEKKimEEMyM']"
      :poster="'https://habrastorage.org/webt/5-/yg/ix/5-ygixba2lpccqd9gafgjzkqwoy.jpeg'"
      :autoplay="true"
      :controls="true"
      :loop="true"
      :ref="'fish'"
      :style="{width: '900px', display:'center'}"
      @pause="handle()"
        >
        </media>
        </div>
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
media{
    
    text-align: center;
    margin-top: 40vh;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
}
.course{
      margin-left: 250px;

}
</style>