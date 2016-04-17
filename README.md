[![Build Status](https://travis-ci.org/toomastahves/contact-form.svg?branch=master)](https://travis-ci.org/toomastahves/contact-form)
[![codecov.io](https://codecov.io/github/toomastahves/contact-form/coverage.svg?branch=master)](https://codecov.io/github/toomastahves/contact-form?branch=master)
[![Dependency Status](https://david-dm.org/toomastahves/contact-form.svg)](https://david-dm.org/toomastahves/contact-form)
[![devDependency Status](https://david-dm.org/toomastahves/contact-form/dev-status.svg)](https://david-dm.org/toomastahves/contact-form#info=devDependencies)

### Setup and Configuration
Run:
```
npm install
npm start
http://localhost:1337/
```

---
### Functionality
Validates form on change  
Sends form values to Node/Koa server, saves to Mongo database  
Echoes inserted values back  
Lists all contacts from database  
Allows updating values  
Allows changing language  

---
### Issues
Changing language fast causes error. Better to refactor whole component and load language pack from database  
Changing update form to create form fast will populate create form with update form values, because they use same model. Need to separate models or cancel update request  

---
### Todos
Write more unit tests  
Save form values automatically on change  
