<template>
  <b-table
    :data="data"
    default-sort="name"
    default-sort-direction="asc"
  >
    <template v-slot="props">
      <b-table-column
        label="Website"
        :centered="true"
        field="name"
        sortable
      >
        <div class="columns is-vcentered">
          <div class="column is-3">
            <figure class="image is-32x32">
              <img
                :src="props.row.img"
                class="is-rounded is-bordered"
                title="Logo"
              >
            </figure>
          </div>

          <div class="column">
            <a :href="props.row.url">
              {{ props.row.name }}
            </a>
          </div>

          <div class="column is-2">
            <b-tooltip
              :label="props.row.note"
              position="is-right"
              type="is-warning"
            >
              <b-icon
                pack="fas"
                icon="info-circle"
                type="is-warning"
              />
            </b-tooltip>
          </div>
        </div>
      </b-table-column>

      <b-table-column
        :centered="true"
        label="Minimum Length"
        field="policies.minlength"
        sortable
      >
        {{ props.row.policies.minlength }}
      </b-table-column>

      <b-table-column
        :centered="true"
        label="Maximum Length"
        field="policies.maxlength"
        sortable
      >
        {{ props.row.policies.maxlength }}
      </b-table-column>

      <b-table-column
        :centered="true"
        label="Uppercase [A-Z]"
      >
        <policy-checker :check="props.row.policies.uppercase" />
      </b-table-column>

      <b-table-column
        :centered="true"
        label="Lowercase [a-z]"
      >
        <policy-checker :check="props.row.policies.lowercase" />
      </b-table-column>

      <b-table-column
        :centered="true"
        label="Numbers [0-9]"
      >
        <policy-checker :check="props.row.policies.numbers" />
      </b-table-column>

      <b-table-column
        :centered="true"
        label="Symbols [!@#$%^&*]"
      >
        <policy-checker :check="props.row.policies.symbols" />
      </b-table-column>

      <b-table-column
        :centered="true"
        label="Score [1-5]"
        field="score"
        sortable
      >
        {{ props.row.score }}
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
import PolicyChecker from '~/components/PolicyChecker'

export default {
  components: {
    PolicyChecker
  },

  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-bordered {
  border-style: solid;
  border-width: thin;
  border-color: #dddddd;
}
</style>
