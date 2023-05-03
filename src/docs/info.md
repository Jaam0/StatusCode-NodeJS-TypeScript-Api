docker ps -a
docker rm name_container

docker stop name_container
docker pull postgres
docker run --name some-prostgres -e POSTGRES_USER=jaam -e POSTGRES_PASSWORD=jaam -e POSTGRES_DB=statuscodedb -p 5432:5432 -d postgres

docker exec -it awesome_sinoussi bash


<!-- Asign user and password -->
psql -U postgres --password


docker run -d --name some-mongo  -p 27017:27017  -e MONGO_INITDB_ROOT_USERNAME=mongo -e MONGO_INITDB_ROOT_PASSWORD=mongo -e MONGO_INITDB_DATABASE=statuscodedb mongo


