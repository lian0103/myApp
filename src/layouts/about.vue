<template>
  <div class="page">
    <vprofile></vprofile>

  </div>
</template>

<script>
import vprofile from "../components/vprofile.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    vprofile: vprofile
  }
};
</script>

<style scoped>
.imgsbox {
  max-width: 85%;
  margin: auto;
  text-align: center;
}
.item {
  display: inline-block;
  max-width: 45%;
  padding: 0px;
  /* border: 2px solid #fff; */
  border-radius: 15px;
  position: relative;
  line-height: 200%;
  overflow:hidden;
  margin: 15px;
}

.item:nth-child(1){
  max-width: 45%;
}
.item:nth-child(2){
  max-width: 45%;
}
.item:nth-child(3){
  max-width: 95%;
}

.item .txt{
  height: 100%;
  width: 100%;
  position: absolute;
  color: #444;
  padding: 1.5rem 1.75rem;
  top: 0;
  left: 0;
}
.item .txt h3{
  font-size: .8rem;
  color: #000;
}
.item .txt p{
  font-size: .7rem;
  color: #444;
}

.item img{
  border-radius: 15px;
  width: 100%;
}

.item:hover {
  box-shadow: 0px 0px 3px 3px #ff0;
}

.item:hover img{
  transform: scale(1.2);
  filter: blur(3px);
}

.item:hover h3{
  font-size: .9rem;
  font-weight: bold;
}

.item:hover p{
  font-size: .8rem;
  color: #fff;
}

@media only screen and (max-width: 768px) {
  .imgsbox{
    max-width: 100%;
  }
  .item:nth-child(n){
    max-width: 100%;
  }
}

</style>