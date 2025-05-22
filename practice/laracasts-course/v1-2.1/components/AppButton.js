export default {
  template: `
    <button 
      :class="{
        'rounded-lg': true,
        'bg-gray-200 px-4 py-2 hover:bg-gray-300 hover:text-white': type === 'primary',
        'bg-red-200 px-4 py-2 hover:bg-red-300 hover:text-white': type === 'danger'
      }"
      :disabled="processing">
      <slot />
    </button>
  `,

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    processing: {
      type: Boolean,
      default: false
    }
  },
}