<script lang="ts" setup>
import { watch } from 'vue'

import { ApiSysDept } from '@/api/apis'
import { emitter, useGet } from '@/hooks'
import { systemMenus } from '@/router'
import type { dept } from '@/types/system/dept'
import ClientUserManageForm from '@/views/business/user/ClientUserManageForm.vue'

// 组件名称
defineOptions({
  name: systemMenus.userManage.path,
})

// const { t } = useI18n<{ message: MessageSchema }>({ useScope: 'global' })

// const fieldNames = {
//   key: 'dept_id',
//   title: 'dept_name',
//   children: 'children',
// }

// const searchKey = ref<string>('')
// const dept_ids = ref<string[]>()
// const deptTreeRef = ref<TreeInstance>()

const { data: deptTree } = useGet<dept[]>(
  ApiSysDept.getDeptTree,
  null,
  { immediate: true },
)

// const treeData = computed(() => {
//   if (!searchKey.value)
//     return deptTree.value
//   return searchData(searchKey.value)
// })

// function searchData(keyword: string) {
//   const loop = (data: dept[]) => {
//     const result: dept[] = []
//     data.forEach((item: dept) => {
//       if (item.dept_name && item.dept_name.toLowerCase().includes(keyword.toLowerCase())) {
//         result.push({ ...item })
//       }
//       else if (item.children) {
//         const filterData = loop(item.children)
//         if (filterData.length) {
//           result.push({
//             ...item,
//             children: filterData,
//           })
//         }
//       }
//     })
//     return result
//   }
//
//   return loop(deptTree.value?.length ? deptTree.value : [])
// }

// function handleSelect(v: Array<string | number>) {
//   const dept = getTarget(v[0] as string)
//   dept_ids.value = dept && getAllIds(dept)
// }

// function getTarget(target: string) {
//   const result: dept[] = []
//   const loop = (data: dept[]) => {
//     for (const item of data) {
//       if (item.dept_id === target) {
//         result.push(item)
//         return
//       }
//       else if (item.children && item.children.length > 0) {
//         loop(item.children)
//       }
//     }
//   }
//   loop(deptTree.value?.length ? deptTree.value : [])
//   return result[0]
// }

// function getAllIds(target: dept) {
//   const ids: string[] = []
//   const loop = (data: dept[]) => {
//     data.forEach((item: dept) => {
//       item.dept_id && ids.push(item.dept_id)
//       if (item.children && item.children.length > 0)
//         loop(item.children)
//     })
//   }
//   loop([target] || [])
//   return ids
// }

watch(() => deptTree.value, () => {
  emitter.emit('dept_tree', deptTree.value)
})
</script>

<template>
  <div>
    <ClientUserManageForm
      :dept-ids="[]"
      :dept-tree="deptTree"
    />
  </div>
</template>
