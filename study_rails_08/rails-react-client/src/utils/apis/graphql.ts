import { gql } from '@apollo/client'
export const QUERY = gql`
	query {
		tweets {
			id
			sentence
			userName
			createdAt
			updatedAt
		}
	}
`
export const UPDATE_MUTATION = gql`
	mutation UpdateTweet($id: ID!, $sentence: String!) {
		updateTweet(input: { id: $id, sentence: $sentence }) {
			result
			tweet {
				id
			}
		}
	}
`
export const DELETE_MUTATION = gql`
	mutation DeleteTweet($id: ID!) {
		deleteTweet(input: { id: $id }) {
			result
			tweet {
				id
			}
		}
	}
`