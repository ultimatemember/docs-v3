<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">This test is test my custom page footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
