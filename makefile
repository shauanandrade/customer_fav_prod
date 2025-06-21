
CONTAINER_NAME="app.cfp"

build:
	@docker compose down --rmi=all
	@docker compose up --build --wait
up:
	@docker compose down
	@docker compose up --wait
container:
	@docker exec -it $(CONTAINER_NAME) sh
dev:
	@docker exec -it $(CONTAINER_NAME) yarn start:dev
migrate:
	@docker exec -it $(CONTAINER_NAME) npx prisma migrate dev --name init
cmd: #make cmd yarn="add bcrypt"
	@docker exec -it $(CONTAINER_NAME) yarn $(yarn)
token:
	@docker exec -it $(CONTAINER_NAME) node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"