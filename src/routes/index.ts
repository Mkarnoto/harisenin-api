import { Application, Router } from 'express'
import { SchoolRouter } from './school'
const _routes: Array<[string, Router]> = [['/school', SchoolRouter]]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
