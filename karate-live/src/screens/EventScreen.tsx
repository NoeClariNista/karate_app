import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { supabase } from '../supabase'
import MatchCard from '../components/MatchCard'
import { Match } from '../types'

export default function EventScreen() {
  const [matches, setMatches] = useState<Match[]>([])

  useEffect(() => {
    fetchMatches()

    const channel = supabase
      .channel('matches-live')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'matches',
        },
        () => fetchMatches()
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function fetchMatches() {
    const { data } = await supabase
      .from('matches')
      .select('*')
      .order('id', { ascending: false })

    setMatches((data as Match[]) || [])
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MatchCard match={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
})