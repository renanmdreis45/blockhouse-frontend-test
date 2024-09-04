# Blockhouse Test
This is a single readme for the frontend and backend of the application.

Repository related to the web test for BlockHouse. Technologies used: TypeScript, React, Next, Jest, Python and Django.

# Concepts and decisions in development

  Front-End:

  The dashboard page contains the components of each chart and is rendered according to Next's dynamic routes, that is, the name of the route in the browser corresponds to the path of the file located within pages.

  There is an api/services folder that contains GET requests to return data from each graph provided by the Django API. The requests were made using the axios library, and error handling was also implemented.

  Each chart was implemented using the Recharts library, has a separate component and Jest tests its expected rendering behavior. This makes it easier to implement new features and ensures clean, maintainable code.
  
  The styling was done in a simple way and using standard css. We can also notice that the graphs use responsive components from the library. This way, the data display adapts to different screen sizes.

  Back-End:
  
  The API was implemented with Django following the REST standard.

  There are views that define how data should be sent to the client. Basically, they assign the data values ​​of each graph and return them in Json format. In this case, I only used the data described in the challenge requirement, but I could add more. Since it would only be returning data, I did not implement post methods to create more data.
  
  There is a basic url with the route '/api/' and each data route for each graph is defined in the urls.py file and points to the corresponding view.

  Finally, we have the migrations that will perform the synchronization between this data and the sqlite database.
 # How to run the application
  Run the server first before the client
  
  Back-End:

  Install Python, django and packages like django-admin and djangorestframework[https://www.django-rest-framework.org/]

  Now run the following commands to migrate the database and run the server.

  ```
    python manage.py migrate
    python manage.py runserver
  ```
  
  Front-End:
  
  - You need to install Node and npm
  - After installation, run the following command to install the packages used


```
npm install
```

- Build the application: 

```
npm build
```

- Run the application: 

```
npm run dev
```

# Demo

  [Demo](https://youtu.be/NI6dwtftmFw)
