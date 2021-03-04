# contacts-test
# folder docs have full apis' info

/**
 * to run ::
 * 
 * 1- clone
 * 2- cd root folder
 * 3- npm i
 * 4- node app
 * 5- enjoy !! :)
 */

 /**
 * dependencies ::
 * express : mvc framework
 * mongoose mongoodb ORM
 * joi input validation
 */


 /**
  * routers ::
  * 
  * 
  * list contacts
  * [get] http://localhost:5000/api/contacts/
  * return array of contacts
  * 
  * get specific contact
  * [get] http://localhost:5000/api/contacts/getContact
  * query string one of these
  * @_id string 24 chars
  * @name string [2, 50] chars
  * @email string [8, 50] chars
  * @phone string [8, 50] chars
  * return object of contact 
  * 
  * create new contact
  * [post] http://localhost:5000/api/contacts/
  * body attributes [all required]
  * @name string [2, 50] chars
  * @email string [8, 50] chars
  * @phone string [8, 50] chars
  * return object of new contact
  * 
  * update specific contact
  * [put] http://localhost:5000/api/contacts/
  * params:
  * @_id string 24 chars
  * body accept any of these attributes:
  * @name string [2, 50] chars
  * @email string [8, 50] chars
  * @phone string [8, 50] chars
  * return object of updated contact 
  * 
  * delete specific contact
  * [delete] http://localhost:5000/api/contacts/
  * params:
  * @_id string 24 chars
  * return object of deleted contact 
  */