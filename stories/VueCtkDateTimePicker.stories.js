import { linkTo } from '@storybook/addon-links';
import Vue from 'vue';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

export default {
  title: 'VueCtkDateTimePicker'
};

export const toStorybook = () => ({
  components: { VueCtkDateTimePicker },
  template: '<VueCtkDateTimePicker v-model="yourValue" />',
});

toStorybook.story = {
  name: 'to Storybook',
};
