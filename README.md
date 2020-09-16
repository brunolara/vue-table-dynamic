# vue-table-dynamic-with-slot

This repo is a modification of original with slot capability.<br>
Example: 
```vue
<vue-table-dynamic-with-slot :params="params" @select="onRowChecked" @select-all="onAllRowChecked" ref="table">
  <template slot-scope="param" slot="column"
            v-if="param.table.rowIndex == 10 && param.table.index > 0">
    <span class="edit-icons">
     
    </span>
  </template>
  <template slot-scope="param" slot="column" v-else>
    {{ teste.table.data }}
  </template>
</vue-table-dynamic-with-slot>
```
<br>