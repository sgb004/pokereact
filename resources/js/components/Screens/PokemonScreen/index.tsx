import Screen from "../Screen";

const PokemonScreen = () => {
    return (
        <Screen
            queryUrl="/api/pokedex"
            noPokemonMessage="No Pokémon were found"
            actions={[
                {
                    name: "add-pokemon",
                    action: () => {
                        console.log("CLICK EN AGREGAR POKEMON");
                    },
                    content: (
                        <svg
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            className="fill-accept-icon block w-[60%] h-[60%]"
                        >
                            <path d="M27.799 11.863h-9.657l.012-9.832c-.039-.68-.33-2.025-1.99-2.028L13.803 0c-1.766-.001-1.917 1.742-1.926 2.198l-.012 9.664h-9.88C.162 11.862.008 13.269 0 13.67v2.705c.009.369.16 1.761 1.986 1.761h9.872l-.012 9.871c-.003 1.823 1.404 1.98 1.807 1.989l2.705.003c.37-.009 1.762-.16 1.765-1.983l.012-9.879h9.84c.68-.04 2.025-.333 2.025-1.993v-2.36c-.002-1.765-1.745-1.913-2.201-1.922z" />
                        </svg>
                    ),
                },
            ]}
            filters={[
                {
                    name: "Number",
                    value: "number",
                },
                {
                    name: "Name",
                    value: "name",
                },
            ]}
        />
    );
};

export default PokemonScreen;
