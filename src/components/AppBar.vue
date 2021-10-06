<template>
  <div>
    <div>app-bar</div>
    <n-card>
      <n-space>
        <n-switch v-model="dark" @update="updateTheme">
          <template #checked>Big wheels keep on turnin'</template>
          <template #unchecked>Carry me home to see my kin</template>
        </n-switch>
      </n-space>
    </n-card>
  </div>
</template>
<script lang="ts">
  import { mapMutations } from 'vuex'

  export default {
    name: 'AppBar',
    data() {
      return {
        dark: false,
      }
    },
    methods: {
      ...mapMutations('common', ['setTheme']),
      updateTheme(): void {
        this.setTheme(this.dark)
      },
    },
  }
</script>
