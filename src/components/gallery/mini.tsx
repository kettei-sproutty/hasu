import React from 'react'
import { useHistory } from 'react-router'
import getPageRoute, { Page } from '../../context/routes/get-route'
import MediaCard, { MediaCardProps } from '../card/media'

type MiniGalleryProps = {
  title: string
  page: Page
  medias: MediaCardProps[]
}

const MiniGallery: React.FC<MiniGalleryProps> = (props) => {
  const history = useHistory()

  const navigate = (e: React.MouseEvent) => {
    e.preventDefault()
    const route = getPageRoute(props.page)
    history.push(route)
  }

  return (
    <div className={'w-full bg-white p-3 mb-3'}>
      <div onClick={navigate} className="flex cursor-pointer">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-medium text-gray-900 truncate">
            <span className="mr-1">{props.title}</span>
          </h2>
          <div className="flex-none mt-1 ml-auto text-sm font-medium text-teal-600 md:w-auto md:pl-6 md:mt-0">
            <span
              className="hover:text-teal-800"
            >
              →
            </span>
          </div>
        </div>
      </div>
      <div className={'flex flex-row items-center space-x-2 w-full'}>
        {props.medias.map((media, i) => (
          <MediaCard key={i} {...media} />
        ))}
      </div>
    </div>
  )
}

export default MiniGallery
