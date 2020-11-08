import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, useMutation, gql } from '@apollo/client'
import dayjs from 'dayjs'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	cache: new InMemoryCache()
})
const QUERY = gql`
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
const DELETE_MUTATION = gql`
	mutation DeleteTweet($id: ID!) {
		deleteTweet(input: { id: $id }) {
			result
			tweet {
				id
			}
		}
	}
`
type TweetInterface = {
	id: string
	sentence: string
	userName: string
	createdAt: string
	updatedAt: string
}
const Content: React.FC<TweetInterface> = props => {
	const [deleteMutation, { data }] = useMutation(DELETE_MUTATION)

	return (
		<Card key={`tweet.${props.id}`} className="text-center" style={{margin: "1vh 1vw"}}>
			<Card.Header>{props.userName}</Card.Header>
			<Card.Body>
				<Card.Text>
					{props.sentence}
				</Card.Text>
				<Button variant="warning" onClick={() => {
					deleteMutation({ variables: { id: props.id.toString() } })
					console.log(data)
				}}>DELETE</Button>
			</Card.Body>
			<Card.Footer className="text-muted">
				<div>Created at : {dayjs(props.createdAt).format('YYYY/MM/DD HH:mm:ss.SSS')}</div>
				<div>Updated at : {dayjs(props.updatedAt).format('YYYY/MM/DD HH:mm:ss.SSS')}</div>
			</Card.Footer>
		</Card>
	)
}

const Contents: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY)
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error!!</div>
	return (
		<Container fluid>
			<Row xs={1} md={2}>
				{data.tweets.map((element:TweetInterface) => (
					<Col>
						<Content
							id={element.id}
							sentence={element.sentence}
							userName={element.userName}
							createdAt={element.createdAt}
							updatedAt={element.updatedAt}
						/>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export const MainGraphqlContainer: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<h4>GraphQL Area</h4>
			<Contents/>
		</ApolloProvider>
	)
}
