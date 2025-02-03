import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
export const PokeCaroussel = ({
    pokemonImage,
    setPokemonImage,
    pokemonItem,
}) => {
    useEffect(() => {
        const spritesObject = pokemonItem.sprites
            ? pokemonItem.sprites
            : null;
        setPokemonImage(spritesObject);
        spritesObject != null && console.log(pokemonImage)
    }, [pokemonItem]);


    // [Log] Object (PokeCaroussel.jsx, line 29)

    // back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"

    // back_female: null

    // back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png"

    // back_shiny_female: null

    // front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

    // front_female: null

    // front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"

    // front_shiny_female: null

    // other: {dream_world: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg", front_female: null}, home: Object, official-artwork: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/…ster/sprites/pokemon/other/official-artwork/1.png", front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/…prites/pokemon/other/official-artwork/shiny/1.png"}, showdown: Object}

    // versions: {generation-i: Object, generation-ii: Object, generation-iii: Object, generation-iv: Object, generation-v: Object, …}

    // Prototipo de Object




    return (
        <>
            <div
                className="!p-2 nes-container rounded h-56 w-full sm:h-64 xl:h-80 2xl:h-96"
                id={pokemonItem.name}
            >
                {pokemonImage && (
                    <Carousel slideInterval={1000}>

                        <img src={pokemonImage.front_default} alt={pokemonItem.name + ` de frente`} className="w-md" />
                        <img src={pokemonImage.back_default} alt={pokemonItem.name + ` de espaldas`} className="w-md" />
                        <img src={pokemonImage.front_shiny} alt={pokemonItem.name + ` de frente shiny`} className="w-md" />
                        <img src={pokemonImage.back_shiny} alt={pokemonItem.name + ` de espaldas shiny`} className="w-md" />




                    </Carousel>
                )
                }
            </div>

        </>
    );
};
