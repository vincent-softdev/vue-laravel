import AssignmentList from "./AssignmentList";
import AssignmentCreate from "./AssignmentCreate";

export default {
  components: {
    AssignmentList,
    AssignmentCreate
  },

  template: `
    <div>
      <assignment-list title="In-progress" :assignments="inProgressAssignments" />
      
      <assignment-create @created="addAssignment" />
      <assignment-list title="Completed" :assignments="completedAssignments" />
    </div>
  `,

  data() {
    return {
      assignments: []
    }
  },

  computed: {
    filters() {
      return {
        inProgressAssignments: this.assignments.filter(a => !a.complete),
        completedAssignments: this.assignments.filter(a => a.complete)
      }
    }
  },

  created(){
     fetch('http://localhost:3001/assignments')
      .then(res => res.json())
      .then(assignments => this.assignments = assignments)
  },

  methods: {
    add(name) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name,
        complete: false,
        tag: 'learning'
      })
    }
  }
}