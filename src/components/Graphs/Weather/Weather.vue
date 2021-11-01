<template>
  <div style="height: calc(100vh - 350px); position: relative">
    <n-result
      class="vcentered"
      status="403"
      title="403 Forbidden"
      description="Only logged users can access to this."
    >
      <template #footer>
        <n-button @click="showModal = true">Log in</n-button>
      </template>
    </n-result>
    <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="Coming soon..."
      content="Sorry, this feature is not yet available. Come back later."
      positive-text="Close"
    />
  </div>
</template>
<script lang="ts">
  export default {
    name: 'Weather',
    data() {
      return {
        showModal: false,
      }
    },
  }
</script>
<style scoped>
  .vcentered {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
