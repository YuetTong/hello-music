<template>
  <h1>Editable Table</h1>
  <el-form
    ref="tableForm"
    :model="tableData"
    :rules="rules"
    class="edit-table"
  >
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="name"
        label="用户名"
      >
        <template #default="{row,$index}">
          <el-form-item
            v-if="row.isEdit"
            :prop="`${$index}.name`"
            :rules="rules.name"
          >
            <el-input
              v-model="row.name"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <span v-else>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="用户手机号码"
      >
        <template #default="{row,$index}">
          <el-form-item
            v-if="row.isEdit"
            :prop="`${$index}.phone`"
            :rules="rules.phone"
          >
            <el-input
              v-model="row.phone"
              placeholder="请输入手机号码"
            />
          </el-form-item>
          <span v-else>{{ row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="gender"
        label="用户性别"
      >
        <template #default="{row,$index}">
          <el-form-item
            v-if="row.isEdit"
            :prop="`${$index}.gender`"
            :rules="rules.gender"
          >
            <el-select
              v-model="row.gender"
              class="m-2"
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <span v-else>{{ row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column
        
        fixed="right"
        label="操作"
        :show-overflow-tooltip="false"
      >
        <template #default="{row, $index}">
          <template v-if="!row.isEdit">
            <div class="btn-list">
              <el-button
                :disabled="editIndex >= 0 && editIndex !== $index"
                btn-type="text"
                icon-name="edit_basic"
                @click="editConnectionHandle(row)"
              >
                编辑
              </el-button>
              <el-button
                :disabled="editIndex >= 0 && editIndex !== $index"
                :loading="row.deleting"
                btn-type="text"
                icon-name="delete"
                @click="tableData.splice(index, 1)"
              >
                删除
              </el-button>
            </div>
          </template>
          <template v-else>
            <div style="display:flex">
              <el-button
                :loading="row.confirming"
                btn-type="text"
                icon-name="el-icon-check"
                type="success"
                @click="confirmHandle(row, $index)"
              >
                确认
              </el-button>
              <el-button
                :disabled="row.confirming"
                btn-type="text"
                icon-name="el-icon-close"
                type="danger"
                @click="cancelHandle(row, $index)"
              >
                取消
              </el-button>
            </div>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      class="mt-4"
      style="width: 100%"
      @click="onAddItem"
    >
      Add Item
    </el-button>
  </el-form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElTable, ElTableColumn, ElForm, ElMessageBox } from 'element-plus'
import { _assignIn, _deepClone } from 'lodash'

const tableForm = ref(null)

const options = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },

]

const tableData = reactive([
  {
    name: 'Joseph',
    phone: '13802929222',
    gender: 'male',
    isEdit: false
  },
  {
    name: 'Pheonix',
    phone: '13802929222',
    gender: 'female',
    isEdit: false

  },
  {
    name: 'Tom',
    phone: '13802929222',
    gender: 'male',
    isEdit: false
  }
])

const rules = reactive({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 10, message: '字符长度请在2-10范围内', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    // 这个只能验证手机号
    // { pattern:/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/, message: "请输入合法手机号", trigger: "blur" }
    { pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: '请输入合法手机号/电话号', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '性别', trigger: 'blur' },
  ]
})

function onAddItem() {
  tableData.push(newResourcePoolRegion())
}

function newResourcePoolRegion() {
  return {
    name: '',
    phone: '',
    gender: '',
    isEdit: true
  }
}

function editConnectionHandle(row) {
  row.isEdit = true
  ElMessageBox.alert('编辑操作', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: () => {
      async() => {
        row.raw = _deepClone(row)
        row.isEdit = true
      }
    }
  })
}

async function confirmHandle(row) {
  const ok = await tableForm.value.validate()
  if (!ok) return
  row.confirming = true
  row.confirming = false
  row.isEdit = false
}

function cancelHandle(row, index) {
  if (row.id) {
    row.isEdit = false
    _assignIn(row, row.raw)
    delete row.raw
  } else {
    tableData.splice(index, 1)
  }
}
</script>

<style scoped lang='scss' src='./index.scss'>
</style>
