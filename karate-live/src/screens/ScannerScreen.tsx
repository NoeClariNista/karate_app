import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions()
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    requestPermission()
  }, [])

  if (!permission?.granted) {
    return (
      <View style={styles.center}>
        <Text>No hay permisos de cámara</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
        onBarcodeScanned={(result) => {
          if (!scanned) {
            setScanned(true)
            alert(`QR detectado: ${result.data}`)
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})