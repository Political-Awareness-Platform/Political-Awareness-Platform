import { newzealandPartiesDetails } from "~/assets/partyDetails/newzealandPartiesDetails.js";
import { bulgariaPartiesDetails } from "~/assets/partyDetails/bulgariaPartiesDetails.js";
import { turkeyPartiesDetails } from "~/assets/partyDetails/turkeyPartiesDetails.js";
import { germanyPartiesDetails } from "~/assets/partyDetails/germanyPartiesDetails.js";

export const state = () => ({
    AllPartiesDetails: [...newzealandPartiesDetails, ...bulgariaPartiesDetails, ...turkeyPartiesDetails, ...germanyPartiesDetails]
})


