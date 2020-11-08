import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

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
type TweetInterface = {
	id: string
	sentence: string
	userName: string
	createdAt: string
	updatedAt: string
}

const Contents: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY)
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error!!</div>
	console.log(data.tweets)
	return (
		<Container fluid>
			<Row xs={1} md={2}>
				{data.tweets.map((element:TweetInterface) => (
					<Col>
						<Card key={`tweet.${element.id}`} className="text-center" style={{margin: "1vh 1vw"}}>
							<Card.Header>{element.userName}</Card.Header>
							<Card.Body>
								<Card.Text>
									{element.sentence}
								</Card.Text>
							</Card.Body>
							<Card.Footer className="text-muted">{element.createdAt}</Card.Footer>
						</Card>
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
