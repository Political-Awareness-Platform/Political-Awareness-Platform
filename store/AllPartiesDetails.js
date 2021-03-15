import { newzealandPartiesDetails } from "~/assets/partyDetails/newzealandPartiesDetails.js";
import { bulgariaPartiesDetails } from "~/assets/partyDetails/bulgariaPartiesDetails.js";
import { turkeyPartiesDetails } from "~/assets/partyDetails/turkeyPartiesDetails.js";
import { germanyPartiesDetails } from "~/assets/partyDetails/germanyPartiesDetails.js";

export const state = () => ({
    AllPartiesDetails: [...newzealandPartiesDetails, ...bulgariaPartiesDetails, ...turkeyPartiesDetails, ...germanyPartiesDetails]
})

export const getters = {
    getSingleParty: state => pname => {
        return state.AllPartiesDetails.find( party => party.partyInfo.name === pname );
    },
    getSinglePartyDetails: state => pname => {
        return state.AllPartiesDetails.find( party => party.partyInfo.name === pname ? party.partyInfo.name : null);
    }
}
