import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    centeredContent: {
        alignItems: 'center',
    },
    logo: {
        marginTop: -70,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingHorizontal: 50,
        marginTop: 50,

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
    },
    button: {
        backgroundColor: '#4B5320',
        paddingVertical: 10,
        paddingHorizontal: 130,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
});
