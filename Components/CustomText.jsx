import { Text } from "react-native"

function CustomText(props){
    return(
        <>
        <Text style={{fontSize :30}}>{props.title}</Text>
        </>
    )
}

export default CustomText