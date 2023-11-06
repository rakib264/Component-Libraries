"use client"

import BasicDatatable from '@/components/DataTables/BasicDatatable'
import CheckboxTable from '@/components/DataTables/CheckboxTable'
import ColumnChooserTable from '@/components/DataTables/ColumnChooserTable'
import CustomDataTable from '@/components/DataTables/CustomDataTable'
import ExportTable from '@/components/DataTables/ExportTable'
import RangeSearch from '@/components/DataTables/RangeTable'
import MultiColumn from '@/components/DataTables/SortableSearchable'
import Layout from '@/components/RootComponents/Layout/Layout'
import BasicTable from '@/components/Table/Basic/BasicTable'
import React from 'react'

const Table = () => {
  return (
    <Layout>
      <div className='w-full px-16 py-8 flex flex-col gap-4'>
      <BasicTable />
      {/* Data Tables */}
      <div>
      <BasicDatatable />
      <MultiColumn />
      <CheckboxTable />
      <RangeSearch />
      <ExportTable />
      <ColumnChooserTable />
      <CustomDataTable />
     </div>
     </div>
    </Layout>
  )
}

export default Table