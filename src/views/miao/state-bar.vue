<template>
  <div class="state-bar-main" :class='{hidden}'>
    <div class="state-item">
      <div class="label">时间</div>
      <div class="time-remain">{{timeRemain}}</div>
    </div>
    
    <div class="state-item">
      <div class="label">得分</div>
      <div class="time-remain">{{score}}</div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    timeRemain: Number,
    score: Number,
  hidden: Boolean
  },
}
</script>


<style scoped>
.hidden.state-bar-main {
  top: 0rpx - var(--card-height);
}
.state-bar-main {
  padding: calc(var(--height) / 100);
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: var(--width);
  height: var(--card-height);
  box-sizing: border-box;
  transition: all 1s;
}
.state-item>.label {
  font-size: calc(var(--card-width) / 5);
  display: block;
  color: white;
}

.time-remain {
  color: white;
  font-size: calc(var(--card-width) * .7);
}

.score {
  color: white;
  font-size: calc(var(--card-width) * .7);
}
</style>