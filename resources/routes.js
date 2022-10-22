import ChooseController from "./controllers/choose.js";
const chooseController = new ChooseController()

import { Router } from "express";
export const routes = Router()

routes.get('/', (request, response) => {
    return response.render('home')
})

routes.get('/choose', (request, response) => {
    return chooseController.choose(request, response)
})

routes.get('/choice', (request, response) => {
    return chooseController.choice(request, response)
})