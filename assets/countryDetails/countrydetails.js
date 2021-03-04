import { newzealandPartiesDetails } from "~/assets/partyDetails/newzealandPartiesDetails.js";
import { bulgariaPartiesDetails } from "~/assets/partyDetails/bulgariaPartiesDetails.js";
import { turkeyPartiesDetails } from "~/assets/partyDetails/turkeyPartiesDetails.js";
import { germanyPartiesDetails } from "~/assets/partyDetails/germanyPartiesDetails.js";

const countriesDetails = [
    {
        partyDetails: { country: 'newzealand', dbcode: 'imaginary', active_parties: 15, parties_in_parlament: 5, number_of_voters: '3.570.000', contribution: '79.8%' },
        parties: newzealandPartiesDetails
    },
    {
        partyDetails: { country: 'bulgaria', dbcode: 'imaginary', active_parties: 43, parties_in_parlament: 10, number_of_voters: '6,810,341', contribution: '49.25%' },
        parties: bulgariaPartiesDetails
    },
    {
        partyDetails: { country: 'turkey', dbcode: 'imaginary', active_parties: 83, parties_in_parlament: 11, number_of_voters: '57.058.636', contribution: '84.67%' },
        parties: turkeyPartiesDetails
    },
    {
        partyDetails: { country: 'germany', dbcode: 'imaginary', active_parties: 51, parties_in_parlament: 14, number_of_voters: '61.675.529', contribution: '79.8%' },
        parties: germanyPartiesDetails
    }
]

export { countriesDetails };