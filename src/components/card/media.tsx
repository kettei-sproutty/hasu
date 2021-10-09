import React from 'react'
import { useHistory } from 'react-router'
import getPageRoute from '../../context/routes/get-route'

export type MediaCardProps = {
  image: string
  title: string
}

const MediaCard: React.FC<MediaCardProps> = (props) => {
  const history = useHistory()

  const goToDetailsPage = () => {
    const route = getPageRoute('details')
    history.push(route, props)
  }

  return (
    <div
      className="container h-full overflow-hidden text-white rounded-sm shadow-md cursor-pointer max-h-36 min-w-24 hover:shadow-2xl transform scale-95 hover:scale-100 duration-150"
      onClick={goToDetailsPage}
    >
      <img className="w-full" src={props.image} alt={props.title + ' image'} />
      <div className="absolute bottom-0 w-full text-center bg-gray-700 bg transform py-1.5 bg-opacity-60">
        <h1 className="mb-1 text-xs font-semibold">{props.title}</h1>
      </div>
    </div>
  )
}

export default MediaCard
