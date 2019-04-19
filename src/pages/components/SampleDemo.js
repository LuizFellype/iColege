import React from 'react'

// Customized SampleDemo page components
import TopMessage from '../../components/sample-demo/TopMessage'
import FormElements from '../../components/sample-demo/FormElements'
import DataTable from '../../components/sample-demo/DataTable'
import DataView from '../../components/sample-demo/DataView'
import PickList from '../../components/sample-demo/Pick'
import OrderList from '../../components/sample-demo/OrderList'
import PanelMenu from '../../components/sample-demo/PanelMenu'
import Tree from '../../components/sample-demo/Tree'
import Menu from '../../components/sample-demo/Menu'

const SampleDemo = () => (
  <div className='p-fluid'>
    <div className='p-grid'>
      <div className='p-col-12'>
        <TopMessage />
        <FormElements />
        <DataTable />
      </div>

      <DataView />

      <div className='p-col-12 p-lg-6'>
        <PickList />
        <OrderList />
        <PanelMenu />
      </div>

      <div className='p-col-12 p-lg-6'>
        <Tree />
        <Menu />
      </div>
    </div>
  </div>
)

export default SampleDemo
