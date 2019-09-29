import { linkTo } from '@storybook/addon-links'
import Vue from 'vue'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)

export default {
  title: 'VueCtkDateTimePicker'
};

const gg = '123'
export const toStorybook = () => ({
  data() {
    return {
      yourValue: null,
    }
  },
  components: { VueCtkDateTimePicker },
  template: `<VueCtkDateTimePicker v-model="yourValue" />`,
})

toStorybook.story = {
  name: 'to Storybook',
}
