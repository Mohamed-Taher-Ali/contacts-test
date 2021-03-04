const
router = require('express').Router(),
{routerWrapper} = require('../config/helper'),
{
    createContact,
    deleteContact,
    getContact,
    getContacts,
    updateContact
} = require('../controlers/contacts');



// params for each router
const params = {
    getContact: ['query'],
    createContact: ['body'],
    deleteContact: ['params.id'],
    updateContact: ['params.id', 'body']
}


router
.get('/', routerWrapper(getContacts))
.get('/getContact', routerWrapper(getContact, params.getContact))
.delete('/:id', routerWrapper(deleteContact, params.deleteContact))
.put('/:id', routerWrapper(updateContact, params.updateContact))
.post('/', routerWrapper(createContact, params.createContact))


module.exports = router;