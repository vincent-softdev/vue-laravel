export default {
  template: `
    <div class="flex gap-2">
      <button 
        v-for="tag in tags" :key="tag" 
        @click="$emit('update:currentTag', tag)"
        class="px-2 py-1 rounded-md"
        :class="{ 'bg-blue-500 text-white': tag === currentTag }">
        {{ tag }}
      </button>
    </div>
  `,
  props: {
    initialTags: Array,
    currentTag: String
  },
  computed: {
    tags() {
      return [
        'all',
        ...new Set(this.initialTags)
      ]
    }
  }
}