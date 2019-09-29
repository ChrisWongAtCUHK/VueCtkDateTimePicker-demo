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
  template: `<div>
    <VueCtkDateTimePicker v-model="yourValue" />
    <div v-if="yourValue">
      {{ JSON.stringify(yourValue, null, 2) }}
    </div>
  </div>`,
})

toStorybook.story = {
  name: 'to Storybook',
}
