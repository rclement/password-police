<template>
  <b-table
    :data="value"
    :paginated="true"
    :per-page="10"
    :striped="true"
    :narrowed="true"
    :mobile-cards="true"
    default-sort="name"
    default-sort-direction="asc"
    icon-pack="fas"
  >
    <template v-slot="props">
      <b-table-column
        :label="$t('policies.website')"
        :centered="true"
        field="name"
        sortable
      >
        <div class="columns is-vcentered">
          <div class="column is-3">
            <figure class="image container is-32x32">
              <img
                :src="`${staticPrefix}${props.row.img}`"
                class="is-rounded is-bordered"
                title="Logo"
              >
            </figure>
          </div>

          <div class="column">
            <a :href="props.row.urls.homepage">
              {{ props.row.name }}
            </a>
          </div>

          <div class="column is-2">
            <b-tooltip
              v-if="props.row.note"
              :label="props.row.note"
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
        :numeric="true"
        :label="$t('policies.minlength')"
        field="policies.minlength"
        sortable
      >
        {{ props.row.policies.minlength }}
      </b-table-column>

      <b-table-column
        :centered="true"
        :numeric="true"
        :label="$t('policies.maxlength')"
        field="policies.maxlength"
        sortable
      >
        {{ props.row.policies.maxlength }}
      </b-table-column>

      <b-table-column
        :centered="true"
        :label="$t('policies.uppercase')"
      >
        <policy-checker :check="props.row.policies.uppercase" />
      </b-table-column>

      <b-table-column
        :centered="true"
        :label="$t('policies.lowercase')"
      >
        <policy-checker :check="props.row.policies.lowercase" />
      </b-table-column>

      <b-table-column
        :centered="true"
        :label="$t('policies.numbers')"
      >
        <policy-checker :check="props.row.policies.numbers" />
      </b-table-column>

      <b-table-column
        :centered="true"
        :label="$t('policies.symbols')"
      >
        <policy-checker :check="props.row.policies.symbols" />
      </b-table-column>

      <b-table-column
        :centered="true"
        :numeric="true"
        :label="$t('policies.score')"
        field="score"
        sortable
      >
        {{ props.row.score }}
      </b-table-column>
    </template>

    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon
              icon="sad-tear"
              pack="fas"
              size="is-large"
            />
          </p>
          <p>{{ $t('table.empty') }}</p>
        </div>
      </section>
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
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      staticPrefix: `${process.env.STATIC_PREFIX}`
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
