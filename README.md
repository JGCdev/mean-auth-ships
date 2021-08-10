

Build and Run services

Development (live reload Angular App):

docker-compose -f docker-compose-dev.yml up --build

Production:

docker-compose up --build


Run tests

*Make sure to execute it after building containers:

docker-compose exec client npm run test
