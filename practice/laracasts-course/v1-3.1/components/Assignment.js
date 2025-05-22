export default {
  template: `
    <ul>
      <li v-for="assignment in assignments" :key="assignment.id">
        <slot :assignment="assignment"></slot>
      </li>
    </ul>
  `,
  props: {
    assignments: {
      type: Array,
      required: true
    }
  }
}