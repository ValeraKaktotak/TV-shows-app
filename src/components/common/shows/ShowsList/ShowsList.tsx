import { useState, type FC } from 'react'

import { Icons } from '../../../../assets/icons'
import { DEFAULT_SHOWS } from '../../../../constant/showsConstants'
import { Container } from '../../../../styles/global/default'
import { SectionTitle } from '../../SectionTitle/SectionTitle'
import { ShowsItem } from '../ShowsItem/ShowsItem'

import { PaginationWrapper, ShowsListWrapper } from './ShowsList.styles'

interface IShowsList {
  showsData: ShowsData_Interface[] | Show[]
  showsTitle: string
}

export const ShowsList: FC<IShowsList> = ({ showsData, showsTitle }) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const showsPerPage = 20
  const indexOfLastShow = currentPage * showsPerPage
  const indexOfFirstShow = indexOfLastShow - showsPerPage
  const currentShows = showsData.slice(indexOfFirstShow, indexOfLastShow)
  const totalPages = Math.ceil(showsData.length / showsPerPage)

  const handleNextPage = () => {
    if (currentPage < Math.ceil(showsData.length / showsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNumPage = (number: number) => {
    setCurrentPage(number)
  }

  return (
    <ShowsListWrapper>
      <SectionTitle title={showsTitle} />
      {/* <BaseButtonPrimary className='shows-list-sort-btn'>
        Sort Asc/Desc
      </BaseButtonPrimary> */}
      <Container>
        <div className='shows-list grid'>
          {currentShows?.map((show) => (
            <ShowsItem key={show.id} itemData={show} itemType={DEFAULT_SHOWS} />
          ))}
        </div>
        <PaginationWrapper className='flex items-center justify-center'>
          <button
            type='button'
            className='paginate-btn paginate-prev inline-flex items-center justify-center'
            disabled={currentPage === 1 ? true : false}
            onClick={handlePrevPage}
          >
            <img src={Icons.ArrowLeft} alt='' />
          </button>
          <ul className='flex items-center'>
            {Array.from({ length: totalPages }, (_, index) => {
              const tempPageNo = index + 1
              return (
                <li key={index}>
                  <button
                    type='button'
                    className={
                      'paginate-btn paginate-num text-white text-lg font-medium' +
                      ` ${tempPageNo === currentPage ? 'active' : ''}`
                    }
                    onClick={() => handleNumPage(tempPageNo)}
                  >
                    {tempPageNo}
                  </button>
                </li>
              )
            })}
          </ul>
          <button
            type='button'
            className='paginate-btn paginate-next inline-flex items-center justify-center'
            disabled={currentPage === totalPages ? true : false}
            onClick={handleNextPage}
          >
            <img src={Icons.ArrowRight} alt='' />
          </button>
        </PaginationWrapper>
      </Container>
    </ShowsListWrapper>
  )
}
