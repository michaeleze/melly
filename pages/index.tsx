import Layout from '../components/organism/layout'
import React from 'react'

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={'hello world'}>
        <div>Welcome page</div>
      </Layout>
    </>
  )
}
