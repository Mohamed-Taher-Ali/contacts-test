const
    { Contact } = require('../models/contact'),
    { respError } = require('../config/helper'),
    {
        createContactVld,
        deleteContactVld,
        getContactVld,
        updateContactVld
    } = require('../validations/contacts');




exports.getContacts = async () => {
    let contacts = await Contact.find();

    return contacts;
}


exports.getContact = async (body) => {
    let {error} = getContactVld(body);
    if(error) return respError(error);

    let contacts = await Contact.findOne(body);

    return contacts.toJSON();
}


exports.updateContact = async (id, body) => {
    let {error} = updateContactVld(id, body);
    if(error) return respError(error);

    let contact = await Contact.findByIdAndUpdate(
        id, body, { new: true }
    );

    return contact.toJSON();
}


exports.deleteContact = async (id) => {
    let {error} = deleteContactVld(id);
    if(error) return respError(error);

    let contact = await Contact.findByIdAndDelete(id);

    return contact.toJSON();
}


exports.createContact = async (body) => {
    let {error} = createContactVld(body);
    if(error) return respError(error);

    let contact = new Contact(body);
    contact = await contact.save();

    return contact.toJSON();
}