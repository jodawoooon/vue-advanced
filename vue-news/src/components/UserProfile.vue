<template>
  <div class="user-container">
    <div><i class="fas fa-user"></i></div>
    <div class="user-desc">
      <div class="user-name">
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의 -->
        </slot>
      </div>
      <div class="time">
        <slot name="time"> <!-- 상위 컴포넌트에서 정의 --></slot>
        <slot name="karma"> <!-- 상위 컴포넌트에서 정의 --></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-desc {
  padding-left: 8px;
}
.content {
  padding: 1rem;
}
.user-name {
  font-weight: 800;
}
</style>
