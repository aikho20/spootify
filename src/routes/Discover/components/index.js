import React, { Component, useEffect } from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAccessToken } from '../../../store/actions/tokenAction'
import {
    getSongCategories,
    getSongFeatured,
    getSongNewRelease,
} from '../../../store/actions/songsAction'

export default function Discover() {
    const { songs, request } = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAccessToken())
        dispatch(getSongCategories())
        dispatch(getSongFeatured())
        dispatch(getSongNewRelease())
    }, [])

    return (
        <div className='discover'>
            <DiscoverBlock text='RELEASED THIS WEEK' id='released' data={songs?.newRelease} />
            <DiscoverBlock text='FEATURED PLAYLISTS' id='featured' data={songs?.featured} />
            <DiscoverBlock text='BROWSE' id='browse' data={songs?.categories} imagesKey='icons' />
        </div>
    )
}
