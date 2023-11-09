<template>
<div>
<div v-for="i in items">
    <h2 v-bind:id="i.name"><a v-bind:href="'#' + i.name" class="header-anchor">#</a>{{i.name}}</h2>
    <p>{{ i.doc.description }}</p>
</div>
</div>
</template>
<script>
import data from '../../ultimatemember/hooks/filters.json'
export default {
  data () {
      return {
          items: data.hooks
      }
  }
}
</script>