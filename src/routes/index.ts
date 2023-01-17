import { Application, Router } from 'express'
import { ProductRouter } from './product'
import { SchoolRouter } from './school'
const _routes: Array<[string, Router]> = [
  ['/schools', SchoolRouter],
  ['/products', ProductRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
