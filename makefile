
CONTAINER_NAME=app.cfp

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
cmd:
	@docker exec -it $(CONTAINER_NAME) yarn $(yarn)