<script setup lang="ts" generic="T extends keyof HTMLElementTagNameMap">
  import { computed } from 'vue';
  import HTMLBuilderTreeItem from './HTMLBuilderTreeItem.vue';
  import type { IHTMLBuilderElement } from './types';
  import { DnDOperations, useDroppable } from '@vue-dnd-kit/core';

  const { components } = defineProps<{
    components: IHTMLBuilderElement<T>[];
  }>();

  const { elementRef, isOvered } = useDroppable({
    groups: ['tree'],
    data: computed(() => ({
      source: components,
    })),
    events: {
      onDrop: (store) => {
        if (store.keyboard.ctrl.value) {
          DnDOperations.applySwap(store);
        } else DnDOperations.applyTransfer(store);
      },
    },
  });
</script>

<template>
  <div
    ref="elementRef"
    class="html-builder-tree-container"
    :class="{ 'is-overed': isOvered }"
  >
    <HTMLBuilderTreeItem
      v-for="(component, index) in components"
      :key="component.id"
      :source="components"
      :index="index"
      :component="component"
      v-model:is-expanded="component.isExpanded"
      class="tree-item-root"
    >
      {{ component.tag }}
    </HTMLBuilderTreeItem>
  </div>
</template>
