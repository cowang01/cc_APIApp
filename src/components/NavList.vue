<template lang="html">
  <div class="">

    <div class="listed">
      <div>
        <p><u>{{title}}</u></p>
        <ul v-for="first in raw">{{first.title}}</ul>
      </div>
      <div>
        <p><u>{{about}}</u></p>
        <ul v-for="second in raw">{{second.release_date}}</ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'nav-list',
  props: ['title', 'about', 'raw']
}
</script>

<style lang="css" scoped>

.listed {
  display: flex;
  flex-direction: row
}

</style>
