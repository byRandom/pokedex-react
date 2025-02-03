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

    return (
        <>
            <div
                className="!p-2 nes-container rounded h-56 w-full sm:h-64 xl:h-80 2xl:h-96"
                id={pokemonItem.name}
            >
                {pokemonImage && (
                    <Carousel slideInterval={1000}>

                        <img src={pokemonImage.front_default} alt={pokemonItem.name + ` de frente`} className="w-md lg:w-full"/>
                        <img src={pokemonImage.back_default} alt={pokemonItem.name + ` de espaldas`} className="w-md lg:w-full" />
                        <img src={pokemonImage.front_shiny} alt={pokemonItem.name + ` de frente shiny`} className="w-md lg:w-full" />
                        <img src={pokemonImage.back_shiny} alt={pokemonItem.name + ` de espaldas shiny`} className="w-md lg:w-full" />




                    </Carousel>
                )
                }
            </div>

        </>
    );
};
