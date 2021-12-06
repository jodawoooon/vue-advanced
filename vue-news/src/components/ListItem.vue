<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItems" :key="item.id">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.type === 'ask'">
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
            <template v-else>
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
          </p>
          <small class="user-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="user-text"
            >
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    console.log(name);
    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.ask;
      } else {
        return this.$store.state.jobs;
      }
    },
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e97911;
  width: 80px;
  font-weight: 800;
  height: 80px;
}

.news-title {
  margin: 0;
}

.user-text {
  color: #828282;
}
</style>
