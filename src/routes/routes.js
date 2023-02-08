import {Route} from 'react-router-dom'
import CoreLayout from '../common/layouts/CoreLayout'
import { lazyWithRetry } from '../helper'

export const routes=[
  {
    name: 'Deposit-Watchlist',
    path: '/',
    component: lazyWithRetry(() => import('./Discover/components')),
    defaultComponent: Route,
    layout: CoreLayout,
},
{
  name: 'NotFound',
  path: "*",
  component: lazyWithRetry(() => import('./NotFound')),
  defaultComponent: Route,
  layout: null,
},]