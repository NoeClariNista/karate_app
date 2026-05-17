import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Match } from '../types'

type Props = {
  match: Match
}

export default function MatchCard({ match }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.tatami}>Tatami {match.tatami}</Text>

      <View style={styles.row}>
        <Text style={styles.name}>{match.red}</Text>
        <Text style={styles.vs}>VS</Text>
        <Text style={styles.name}>{match.blue}</Text>
      </View>

      <Text style={styles.winner}>
        Ganador: {match.winner || 'Pendiente'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 3,
  },
  tatami: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  vs: {
    fontSize: 16,
  },
  winner: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
})