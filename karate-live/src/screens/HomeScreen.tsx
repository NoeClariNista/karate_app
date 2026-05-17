/*import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Inicio'>
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Karate Live</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Evento')}>
        <Text style={styles.buttonText}>Ver Resultados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admin')}>
        <Text style={styles.buttonText}>Panel Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scanner')}>
        <Text style={styles.buttonText}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  )
}*/

/*import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Karate Live</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./AdminScreen")}
      >
        <Text style={styles.buttonText}>Ver Resultados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./EventScreen")}
      >
        <Text style={styles.buttonText}>Panel Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./ScannerScreen")}
      >
        <Text style={styles.buttonText}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
}*/

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Karate Live
      </Text>

      <TouchableOpacity onPress={() => router.push("/event")}>
        <Text>Ver Resultados</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/admin")}>
        <Text>Panel Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/scanner")}>
        <Text>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#111',
    padding: 16,
    width: '100%',
    borderRadius: 12,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
})