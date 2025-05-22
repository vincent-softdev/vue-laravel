import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';

export default {
  // list components
  components: {
    Assignment,
    AssignmentTags
  },
  template: `
    <div>
      <h2 class="font-bold mb-2">{{ title }}</h2>

      <assignment-tags 
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
        />

      <ul>
        <assignment 
          v-for="assignment in filteredAssignments" 
          :key="assignment.id"
          :assignment="assignment" />
      </ul>

      <slot />
    </div>
  `,

  props: {
    assignments: Array,
    title: String
  },
  data() {
    return {
      currentTag: 'all'
    }
  },
  computed: {
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      } else {
        return this.assignments.filter(a => a.tag === this.currentTag);
      }
    },
  }
}