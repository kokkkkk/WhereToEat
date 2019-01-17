import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height:'100%',
        width: '100%',
      },
      Header:{
        backgroundColor: 'orange',
        elevation: 10,
        height:'10%',
        alignItems: 'flex-start',
        width: '100%',
      },
      Heading:{ 
        marginTop: '10%',
        marginRight:'10%',
        marginLeft:'10%',
        textAlign: 'center',
        fontSize: 20,
      },
      Body: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        height:'90%',
        width: '100%',
      },
      BodySubText: {
          fontSize: 12,
          textAlign: 'justify',
          color: 'yellow'
      },
      BodyHeadText: {
        fontSize: 24,
        color: 'black',
        textAlign: 'justify',
    },
    Footer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
        width: '80%'
    }
});