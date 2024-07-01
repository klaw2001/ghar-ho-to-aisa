import HeroGlobal from '@/components/global/hero-global'
import NewLayout from '@/components/global/new-layout'
import BlogBox from '@/components/sections/blogs/blog-box'
import React from 'react'

const page = () => {
  return (
    <NewLayout>
        <HeroGlobal
        myclass="text-start pt-40 pb-16 relative"
        alignBreadcrumb="justify-start"
        title="Our"
        spanText="Latest Blogs"
        page={'Blogs'}
      />
        <BlogBox/>
    </NewLayout>
  )
}

export default page