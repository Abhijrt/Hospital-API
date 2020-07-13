# Hosipital API

# To configure in your local System you need to first clone the reposistory
  Then you can run common 
      >> npm install
  Then you can run this by common 
      >> npm start

Then you can see use this by this url in postman or any other front end framework
# API_ROOT - https://localhost:8000/api/v1/

Authorization required - Requests require the JWT token

Query params - Just add the params in the url 
Form body - Send as body in fetch request
 
# Doctor registration POST
	  API_ROOT/doctors/register 
	  No authorization 
	  Form body 
	    username- String
	    password - String
	    confirm_password - String
# Doctor Login POST
	API_ROOT/doctors/login
    NO authorisation
	Form body
	    username - String
	    password - String
	    confirm_password - String
# Patient Register POST
	API_ROOT/patient/register
	Doctor Authorisation Required
 	Form Body
	    username - PhoneNumber
# Create report for Patient POST
	API_ROOT/patient/:id/create_report
	Doctor Authorisation Required
	Form body
	    status - String
	    doctor - String
	    date - String
# See All Reports of a Particular Patient GET
	API_ROOT/patient/:id/all_reports (id of the user)
	Doctor Authorisation Required
# See the reports by Stats GET
	API_ROOT/reports/:status (status is Negative, Travelled-Quarantine,
Symptoms-Quarantine, Positive-Admit)
	Doctor Authorisation Required

 
