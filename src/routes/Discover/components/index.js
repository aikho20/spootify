import React, { Component, useEffect } from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'
import { useDispatch } from 'react-redux'
import { getAccessToken } from '../../../store/actions/tokenAction'

export default function Discover() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAccessToken())
    }, [])

    return (
        <div className='discover'>
            <DiscoverBlock text='RELEASED THIS WEEK' id='released' data={[]} />
            <DiscoverBlock text='FEATURED PLAYLISTS' id='featured' data={[]} />
            <DiscoverBlock text='BROWSE' id='browse' data={[]} imagesKey='icons' />
        </div>
    )
}
