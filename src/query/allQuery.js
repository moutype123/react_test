import {gql} from '@apollo/client'

const GET_VOLUMNEUP = gql`
    query getVolumeUp {
        volumeUp {
            stock_name
        }
    }
`

const CONDITION = {
    'volumeUp' : GET_VOLUMNEUP
}

export default CONDITION