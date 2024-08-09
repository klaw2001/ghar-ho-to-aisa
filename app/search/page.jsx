import HeroGlobal from '@/components/global/hero-global'
import NewLayout from '@/components/global/new-layout'
import Search from '@/components/sections/search/Search'
import React from 'react'

const SearchPage = () => {
  return (
    <>
        <NewLayout>
        <HeroGlobal
        myclass="text-left pt-32 pb-16 border-b-2 border-black relative"
        alignBreadcrumb="justify-start"
        title="Search"
        page={"Search"}
      />
            <Search/>
        </NewLayout>
    </>
  )
}

export default SearchPage