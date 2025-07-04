<script setup lang="ts">
  import HTMLBuilderDraggableComponent from './HTMLBuilderDraggableComponent.vue';
  import type { IHTMLBuilderDraggable } from './types';

  const availableTags: IHTMLBuilderDraggable[] = [
    {
      type: 'created',
      tag: 'div',
      children: [],
      style: {
        paddingTop: '10px',
        paddingRight: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        backgroundColor: '',
        color: '',
        marginTop: '',
        marginRight: '',
        marginBottom: '',
        marginLeft: '',
        borderWidth: '',
        borderColor: 'unset',
        borderStyle: 'none',
        borderTopLeftRadius: '',
        borderTopRightRadius: '',
        borderBottomRightRadius: '',
        borderBottomLeftRadius: '',
        display: 'block',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'nowrap',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '',
        height: '',
        minWidth: '',
        minHeight: '',
        maxWidth: '',
        maxHeight: '',
      },
      visible: true,
    },
    {
      type: 'created',
      tag: 'span',
      visible: true,
    },
    {
      type: 'created',
      tag: 'p',
      visible: true,
    },
    {
      type: 'created',
      tag: 'img',
      visible: true,
    },
  ];

  const groupedComponents = {
    containers: availableTags.filter((tag) => ['div'].includes(tag.tag)),
    text: availableTags.filter((tag) => ['p', 'span'].includes(tag.tag)),
    media: availableTags.filter((tag) => ['img'].includes(tag.tag)),
  };
</script>

<template>
  <div
    class="html-builder-components-container"
    v-once
  >
    <div class="html-builder-components-header">
      <span class="html-builder-components-title">Components</span>
    </div>

    <div class="html-builder-components-content">
      <div class="component-category">
        <h3 class="category-title">Containers</h3>
        <div class="components-grid">
          <HTMLBuilderDraggableComponent
            v-for="component in groupedComponents.containers"
            :key="component.tag"
            :tag="component.tag"
            :style="component.style"
            :children="component.children"
            class="component-item"
          >
            <div class="component-item-icon">□</div>
            <div class="component-item-label">{{ component.tag }}</div>
          </HTMLBuilderDraggableComponent>
        </div>
      </div>

      <div class="component-category">
        <h3 class="category-title">Text</h3>
        <div class="components-grid">
          <HTMLBuilderDraggableComponent
            v-for="component in groupedComponents.text"
            :key="component.tag"
            :tag="component.tag"
            :style="component.style"
            :children="component.children"
            class="component-item"
          >
            <div class="component-item-icon">T</div>
            <div class="component-item-label">{{ component.tag }}</div>
          </HTMLBuilderDraggableComponent>
        </div>
      </div>

      <div class="component-category">
        <h3 class="category-title">Media</h3>
        <div class="components-grid">
          <HTMLBuilderDraggableComponent
            v-for="component in groupedComponents.media"
            :key="component.tag"
            :tag="component.tag"
            :style="component.style"
            :children="component.children"
            class="component-item"
          >
            <div class="component-item-icon">🖼</div>
            <div class="component-item-label">{{ component.tag }}</div>
          </HTMLBuilderDraggableComponent>
        </div>
      </div>
    </div>
  </div>
</template>
