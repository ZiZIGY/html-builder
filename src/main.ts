import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import VueDnDKit from '@vue-dnd-kit/core';

createApp(App).use(VueDnDKit).mount('#app');
