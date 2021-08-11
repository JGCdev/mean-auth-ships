## Dockerized MEAN Stack App - Ships Profiles using Star Wars API

### Description
Stack designed to be launched in a single command with Docker, the application was developed in approximately 15h. No strategy has been followed for the nomenclature of the commits other than being specific with the description, nor has any workflow been applied. In a real environment, it would have been a good option to use gitflow and a naming convention in the branches (feature, hotfix, release).

### Requirements
-Docker

### Build and run services

#### Development Mode (live reload Angular App):

```docker-compose -f docker-compose-dev.yml up --build```

#### Production:

```docker-compose up --build```

### Run tests

*Make sure to execute it after building containers:

```docker-compose exec client npm run test```

### TO-DO's
-End test implementation
-Implement Redux
