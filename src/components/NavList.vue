<template lang="html">
  <div class="">

    <div class="listed">
      <div class="texted">
        <p><u>{{title}}</u></p>
        <ol v-for="first in raw">{{first.title}}</ol>
      </div>
      <div class="texted">
        <p><u>{{about}}</u></p>
        <ol v-for="second in raw">{{second.release_date}}</ol>
      </div>
      <div class="buttoned">
          <p><u>link</u></p>
        <button v-for="second in raw" type="button" name="button">Further Detail</button><br><br>
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
  flex-direction: row;
  padding-left: 10%;
}

.texted {
  text-align: left;
}

.buttoned {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
