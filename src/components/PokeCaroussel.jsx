import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
export const PokeCaroussel = ({
    pokemonImage,
    setPokemonImage,
    pokemonItem,
}) => {
    useEffect(() => {
        const spritesArray = pokemonItem.sprites
            ? Object.values(pokemonItem.sprites)
            : [];
            spritesArray.forEach((sprite) => {
                if (typeof sprite != 'string' || typeof sprite === 'object' && !Array.isArray(sprite) && sprite !== null ) {
                    spritesArray.splice(spritesArray.indexOf(sprite), 1);
                }
            });
        spritesArray.splice(-1, 1);
        spritesArray.reverse();
        setPokemonImage(spritesArray);
        console.log(typeof spritesArray);
    }, [pokemonItem]);

    return (
        <>
            <div
                className="!p-2 nes-container rounded h-56 w-full sm:h-64 xl:h-80 2xl:h-96"
                id={pokemonItem.name}
            >
                <Carousel>
                    { pokemonImage.length > 0 ? pokemonImage.map((image, index) => (
                        <img
                            src={image}
                            key={index}
                            alt={pokemonItem.name}
                            className="w-md"
                        />
                    )) : <img src='https://placehold.co/400' alt={pokemonItem.name} />
                    }
                    
                </Carousel>
            </div>

        </>
    );
};
