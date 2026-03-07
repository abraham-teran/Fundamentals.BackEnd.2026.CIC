#!/bin/bash

curl -X PATCH http://localhost:3000/chefs/rename/0 \
     -H "Content-Type: application/json" \
     -d '{ "name": "Gabriela Cámara" }'

echo

curl -X PATCH http://localhost:3000/restaurants/rename/0 \
	 -H "Content-Type: application/json" \
	 -d '{ "name": "Tezontle" }'

echo
