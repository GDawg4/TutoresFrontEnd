import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",

      marginBottom: 20,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "rgba(255,255,255,0.7)"
    },
    buttonColorGreen: {
      backgroundColor: '#078B45',
    },
    buttonColorBlue: {
      backgroundColor: '#0099ba',
      borderColor:'#0099ba',
      height: '15%'
    },
    containerDisabled: {
        opacity: 0.4
    },
    containerEnabled: {
        opacity: 1
    },
    text: {
      color: '#FFFFFF',
      textAlign: "center",
      height: 24
  },
  remove: {
      backgroundColor: '#F55E64'
  }
});

export default styles;