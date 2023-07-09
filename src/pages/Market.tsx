import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import TagSection from '../components/TagSection'
import Table from '../components/Table'
import { getPriceChange } from '../services/frontend-services'

export default function Market() {
  const getData = async () => {
    try {
      const responsePChange = await getPriceChange()
      console.log(responsePChange, 'ini res')
    } catch (err) {
      console.log(err, 'ini error')
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <div className='mt-4'>
        <TagSection />
        <div className='mt-2'>
          <Table />
        </div>
      </div>
    </Layout>
  )
}
