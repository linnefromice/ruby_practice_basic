import React, { useState } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/client'
import dayjs from 'dayjs'

import { QUERY, UPDATE_MUTATION, DELETE_MUTATION } from "../utils/apis/graphql"
import { TweetInterface } from '../model/tweet_interface'
import { ViewTweet } from "./tweets/view_tweet"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	cache: new InMemoryCache()
})
const Content: React.FC<TweetInterface> = props => {
	const [isEditMode, setIsEditMode] = useState<Boolean>(false)
	const [updatingSentence, setUpdatingSentence] = useState<string>(props.sentence)
	const [updateMutation] = useMutation(UPDATE_MUTATION)
	const [deleteMutation] = useMutation(DELETE_MUTATION)

	return (
		<ViewTweet
			tweet={props}
			handleUpdate={() => updateMutation({ variables: { id: props.id.toString(), sentence: updatingSentence } })}
			handleDelete={() => deleteMutation({ variables: { id: props.id.toString() } })}
			isEditMode={isEditMode}
			setIsEditMode={setIsEditMode}
			updatingSentence={updatingSentence}
			setUpdatingSentence={setUpdatingSentence}
		/>
	)
}

type TweetGraphqlInterface = {
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
	return (
		<Container fluid>
			<Row xs={1} md={2}>
				{data.tweets.map((element: TweetGraphqlInterface) => (
					<Col>
						<Content
							id={parseInt(element.id)}
							sentence={element.sentence}
							user_name={element.userName}
							created_at={dayjs(element.createdAt).toDate()}
							updated_at={dayjs(element.updatedAt).toDate()}
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
