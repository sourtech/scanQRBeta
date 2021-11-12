import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    card:{
        padding: 14,
        paddingTop:30,
        paddingBottom: 30,
        borderRadius: 10,
        width: '100%',
        borderColor: '#000000',
        marginTop:10,
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,      
      },
      cardAccept:{
        backgroundColor: '#ffffff',
        
      },
      cardDenegate:{
        backgroundColor: '#F9627D',
      },    
      cardName:{
        fontSize: 22,
        color: '#ffffff',
        marginBottom:5,
        fontWeight:'bold',
        textAlign: 'center'
      },
      cardNameOK:{
        color: '#000000',
      },    
      cardCuit:{
        fontSize: 20,
        color: '#ffffff',
        marginBottom:10,
        textAlign: 'center'
      },
      cardCuitOK:{
        color: '#000000',
      },     
      btnOK:{
        borderRadius: 10,
        backgroundColor: '#44DC8A',
        height: 50,
        width: '100%',
        justifyContent: 'center'
      },
      btnOkText:{
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'center'
      },
      msnContent:{
        padding: 10,
        alignItems:'center',
      }, 
      msnWhite:{
        color: '#000000',
        fontSize: 16,      
        paddingBottom:5,
      },           
      msn:{
        color: '#ffffff',
        fontSize: 16,      
        paddingBottom:5,
      }      
});