import { Router } from "express";
export const routes = Router()

routes.get('/', (request, response) => {
    return response.render('home')
})