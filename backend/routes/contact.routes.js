const ContactController = require('../controllers/contact.controllers')


module.exports = [
    {
        method: 'GET',
        path: '/contacts',
        handler: ContactController.list
    },
    {
        method: 'POST',
        path: '/contacts',
        handler: ContactController.create
    },
    {
        method: 'DELETE',
        path: '/contacts/{contactId}',
        handler: ContactController.remove
    }
]

