import HeroGlobal from '@/components/global/hero-global'
import NewLayout from '@/components/global/new-layout'
import Search from '@/components/sections/search/Search'
import SearchHero from '@/components/sections/search/search-hero'
import React from 'react'

const SearchPage = () => {
  return (
    <>
        <NewLayout>
        <SearchHero/>
            <Search/>
        </NewLayout>
    </>
  )
}

export default SearchPage