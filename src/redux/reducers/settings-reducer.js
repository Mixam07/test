const initialState = {
    type: 2,
    socialNetworks: {
        opensea: {
            isActive: false,
            href: "https://opensea.io/collection/Neonfrems"
        },
        twitter: {
            isActive: true,
            href: "https://twitter.com/NeonFrens"
        },
        discord: {
            isActive: false,
            href: "#"
        },
        etherscan: {
            isActive: false,
            href: "#"
        }
    },
    walletList: {
        OGlist: ["0x1111111111111111111111111111111111111111"],
        Frenslist: ["0x2222222222222222222222222222222222222222"]
    }
}

const settingsReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default settingsReducer;