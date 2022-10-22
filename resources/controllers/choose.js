export default class ChooseController {
    choose(request, response) {
        if (!request.cookies.choice) {
            response.cookie('choice', ['Trick', 'Treat'][Math.round(Math.random())], {
                expires: new Date(Date.now() + 60000), // 86400000),
                httpOnly: true
            })
        }
        return response.redirect('/choice')
    }
    choice(request, response) {
        if (!request.cookies.choice) {
            return response.redirect('/')
        }
        return response.render('choice', {
            locals: {
                choice: request.cookies.choice == 'Treat' ? 'Treat' : 'Trick'
            }
        })
    }
}