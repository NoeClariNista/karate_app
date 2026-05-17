import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { supabase } from '../supabase'

export default function AdminScreen() {
  const [red, setRed] = useState('')
  const [blue, setBlue] = useState('')
  const [winner, setWinner] = useState('')
  const [tatami, setTatami] = useState<number>(1)

  async function saveMatch() {
    await supabase.from('matches').insert([
      {
        red,
        blue,
        winner,
        tatami,
      },
    ])

    setRed('')
    setBlue('')
    setWinner('')
    setTatami(1)
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Competidor rojo" value={red} onChangeText={setRed} style={styles.input} />
      <TextInput placeholder="Competidor azul" value={blue} onChangeText={setBlue} style={styles.input} />
      <TextInput placeholder="Ganador" value={winner} onChangeText={setWinner} style={styles.input} />
      <TextInput
        placeholder="Tatami"
        value={String(tatami)}
        onChangeText={(t) => setTatami(Number(t))}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={saveMatch}>
        <Text style={styles.buttonText}>Guardar Resultado</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
})