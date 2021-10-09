import React from 'react'
import { useLocation } from 'react-router'

type DetailsPageState = {
  title: string
  image: string
}

const DetailsPage: React.FC = () => {
  const location = useLocation<DetailsPageState>()

  return (
    <div className="h-full">
      <div className="flex h-full overflow-hidden font-sans bg-white">
        <div className="relative overflow-hidden text-white">
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
          <div className="relative z-10 px-10 pt-10 group space-y-6 movie_info">
            <div className="w-full align-self-end">
              <div className="h-32"></div>
              <div className="space-y-4 detail_info">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {location.state.title}
                  </h3>
                  <div className="mb-0 text-base text-gray-400">
                    나 혼자만 레벨업
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <div className="text-sm">Chapters</div>
                    <div className="text-sm text-gray-400">160/166</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm">Started:</div>
                    <div className="text-sm text-gray-400">09/10/2021</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col"></div>
                  <div className="mb-2 text-xs text-gray-400">Overview:</div>
                  <p className="mb-6 font-sans text-xs text-gray-100">
                    After the appearance of portals known as "gates" connecting
                    the world of monsters to humans, a small portion of the
                    population has acquired superhuman powers to defend against
                    the monsters.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-sm">Website</div>
                    <div className="text-sm text-gray-400">
                      <span>MangaDex</span>
                    </div>
                  </div>
                  <div className="z-10 flex flex-row">
                    <a
                      className="flex items-center px-4 py-2 mx-auto text-white"
                      href="https://mangadex.org/title/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/solo-leveling"
                      target="_blank"
                    >
                      <div className="ml-2 text-sm text-white">Read</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute inset-0 w-full transform -translate-y-4"
            src={location.state.image}
            style={{ filter: 'grayscale(0)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
