#!/bin/bash

# Configuration
URL_CHEFS="http://localhost:3000/chefs"
URL_RESTAURANTS="http://localhost:3000/restaurants"

echo "Registering 10 Chefs..."
# Array of chef data
chefs=(
    '{"name":"Gordon Ramsay"}'
    '{"name":"Massimo Bottura"}'
    '{"name":"Enrique Olvera"}'
    '{"name":"Dominique Crenn"}'
    '{"name":"René Redzepi"}'
    '{"name":"Daniela Soto-Innes"}'
    '{"name":"Virgilio Martínez"}'
    '{"name":"Gaggan Anand"}'
    '{"name":"Ana Roš"}'
    '{"name":"Elena Arzak"}'
)

for chef in "${chefs[@]}"; do
    curl -X POST "$URL_CHEFS" \
         -H "Content-Type: application/json" \
         -d "$chef"
    echo
done

echo "Registering 3 Restaurants..."
# Array of restaurant data
restaurants=(
    '{"name":"Pujol"}'
    '{"name":"Quintonil"}'
    '{"name":"Contramar"}'
)

for rest in "${restaurants[@]}"; do
    curl -X POST "$URL_RESTAURANTS" \
         -H "Content-Type: application/json" \
         -d "$rest"
    echo
done

echo "API Populated. Check lists at /chefs and /restaurants."
