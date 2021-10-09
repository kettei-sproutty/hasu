import React from 'react'
import { useHistory } from 'react-router'
import MiniGallery from '../components/gallery/mini'
import getPageRoute from '../context/routes/get-route'

const HomePage: React.FC = () => {

    const history = useHistory()

    const navigateToLogin = () => {
        const route = getPageRoute('login')
        history.push(route)
    }

    const operas = [
        { image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574895616l/43824485._SX318_.jpg', title: 'The Beginning After the End' },
        { image: 'https://images-na.ssl-images-amazon.com/images/I/71gnuYUWeTL.jpg', title: 'Solo Leveling' },
        { image: 'https://www.animeclick.it/immagini/anime/Tate_no_Yuusha_no_Nariagari/cover/Tate_no_Yuusha_no_Nariagari-cover.jpg', title: 'Tate no Yuusha' },
    ]

    return (
        <div className="page">
            <MiniGallery page={'history'} medias={operas} title={'history'} />
            <MiniGallery page={'login'} medias={operas} title={'favorites'} />
            <button className="hidden button button__primary" onClick={navigateToLogin}>
                <span className="not-sr-only">Auth</span>
            </button>
        </div>
    )
}

export default HomePage