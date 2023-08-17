#!/bin/bash

docker compose up -d

sleep 1

docker exec mongodb /scripts/rs-init.sh