import React from "react";



export const data = {
    countries: [
        {
            "id": 1,
            "title": "United Kingdom",
            "text": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe.",
            active: true
        },
        {
            "id": 2,
            "title": "France",
            "text": "France, officially the French Republic, is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories.",
            active: false
        },
        {
            "id": 3,
            "title": "Spain",
            "text": "Spain, officially the Kingdom of Spain, is a sovereign state located on the Iberian Peninsula in southwestern Europe.",
            active: false
        },
        {
            "id": 4,
            "title": "Germany",
            "text": "Germany, officially the Federal Republic of Germany, is a federal parliamentary republic in western - central Europe.",
            active: false
        }
    ],
    cities: [
        {
            edit: true,
            "id": 1,
            "country_id": 1,
            "title": "London",
            "desc": "London is the capital and largest city of England and of the United Kingdom. Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans.The City of London, London's ancient core − an area of just 1.12 square miles (2.9 km2) and colloquially known as the Square Mile − retains boundaries that closely follow its medieval limits. The City of Westminster is also an Inner London borough holding city status. Greater London is governed by the Mayor of London and the London Assembly."
        },
        {edit: true, "id": 2, "country_id": 1, "title": "Liverpool", "desc": "Liverpool is a city and metropolitan borough in Merseyside, England. As of 2018, the population is approximately 494,814.[6][7] Liverpool is the ninth-largest English district by population, and the largest in Merseyside and the Liverpool City Region. It lies within the United Kingdom's sixth-most populous urban area. Liverpool's metropolitan area is the fifth-largest in the United Kingdom, with a population of 2.24 million.[8]\n" +
                "\n"},
        {edit: true, "id": 3, "country_id": 2, "title": "Paris", "desc": ""},
        {edit: true, "id": 4, "country_id": 3, "title": "Madrid", "desc": ""},
        {edit: true, "id": 5, "country_id": 4, "title": "Berlin", "desc": ""},
        {edit: true, "id": 6, "country_id": 4, "title": "Munich", "desc": ""},
        {edit: true, "id": 7, "country_id": 4, "title": "Hamburg", "desc": ""}
    ]

}

