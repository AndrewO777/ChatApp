import React from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

export default function UserList({ users, onPress }) {
	return (
		<FlatList
			data = { users }
			renderItem = {({ item }) => (
				<TouchableHighlight onPress={() => onPress(item)}>
					<View style={ styles.item }>
						<Text>{ item.name }</Text>
					</View>
				</TouchableHighlight>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
}
const styles = StyleSheet.create({
	item: {
		padding: 10
	}
});
