import { StyleSheet } from 'react-native';

export default function (props){

    return StyleSheet.create({
        logo: {
            alignSelf: 'center',
            margin: 30,
        },
        seperatorView: {
            width: 600, 
            height: 1, 
            backgroundColor: 'mediumpurple' 
        },
        nicknameText: {
            fontSize: 22, 
            alignSelf: 'center', 
            color: props.colorId, 
            fontWeight: 'bold',
            textAlign: 'center'
        },
        titleText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'steelblue',
            alignSelf: 'center'
        },
        bioText: {
            alignSelf: 'center',
            fontSize: 15,
            textAlign: 'center'
        },
        buttonsContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
          },
        editButton: {
            marginTop: 40,
            width: '80%', 
            alignSelf: 'center', 
            justifyContent: 'center', 
            backgroundColor: props.colorId
          },
    });
}
