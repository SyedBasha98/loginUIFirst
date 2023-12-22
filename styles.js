import { StyleSheet} from 'react-native';



export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'orange',
    },
    linearGradient:{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    title:{
        fontSize: 22,
        alignSelf:'center',
        marginTop:100,
        color: 'white',
        fontWeight:'400'
    },
    image:{
        width:'80%',
        resizeMode:'contain',
        alignSelf:'center'
    },
    textContainer:{
        marginLeft:50
    },  
    label:{
        fontSize:25,
        fontWeight:'500',
        color:'white',
        marginTop:10
    },
    togetherLabel:{
        fontSize:35,
    },
    loginBtnP:{
        marginTop:25,
        elevation:5
    },
    signUpBtn:{
        backgroundColor:'#773C85',
        borderWidth:0,
        marginTop:25,
        elevation:5
    },
    btnContainer:{
        position:'absolute',
        width:'100%',
        bottom:60,
        alignItems:'center'
    }
    

})