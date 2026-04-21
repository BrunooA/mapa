import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  // @ts-ignore
  const mapHtml = require('../../assets/index.html');

  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={mapHtml}
        style={styles.map}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        
        // --- AS CONFIGURAÇÕES QUE RESOLVEM O GPS ---
        geolocationEnabled={true} 
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        // ------------------------------------------
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});